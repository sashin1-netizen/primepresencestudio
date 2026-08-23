import { chromium, firefox, webkit } from 'playwright';

const browsers = { chromium, firefox, webkit };
const routes = ['/', '/services', '/connect', '/work', '/process', '/about', '/contact'];
const viewports = [
  { name: 'phone-320', width: 320, height: 720 },
  { name: 'phone-360', width: 360, height: 800 },
  { name: 'phone-390', width: 390, height: 844 },
  { name: 'phone-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-1024', width: 1024, height: 1366 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1920', width: 1920, height: 1080 },
];
const mobileMenuMaxWidth = 1279;
const failures = [];
const fail = (browserName, viewport, route, detail) => failures.push(`${browserName} ${viewport.name} ${route}: ${detail}`);

for (const [browserName, launcher] of Object.entries(browsers)) {
  const browser = await launcher.launch({ headless: true });
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'no-preference' });
      const page = await context.newPage();
      for (const route of routes) {
        const url = `http://127.0.0.1:3000${route}`;
        const response = await page.goto(url, { waitUntil: 'networkidle' });
        if (!response?.ok()) fail(browserName, viewport, route, `HTTP ${response?.status()}`);
        const documentMetrics = await page.evaluate(() => ({innerWidth:window.innerWidth,htmlScrollWidth:document.documentElement.scrollWidth,bodyScrollWidth:document.body.scrollWidth,htmlClientWidth:document.documentElement.clientWidth}));
        const maxScrollWidth=Math.max(documentMetrics.htmlScrollWidth,documentMetrics.bodyScrollWidth);
        if(maxScrollWidth>documentMetrics.innerWidth+1)fail(browserName,viewport,route,`horizontal overflow ${maxScrollWidth}px > ${documentMetrics.innerWidth}px`);
        if(Math.abs(documentMetrics.htmlClientWidth-documentMetrics.innerWidth)>2)fail(browserName,viewport,route,`document client width ${documentMetrics.htmlClientWidth}px differs from viewport ${documentMetrics.innerWidth}px`);

        const navbar=page.locator('#site-navbar');
        if((await navbar.count())!==1)fail(browserName,viewport,route,'site navbar missing or duplicated');
        else{if(!(await navbar.isVisible().catch(()=>false)))fail(browserName,viewport,route,'site navbar not visible before scroll');const position=await navbar.evaluate(el=>getComputedStyle(el).position);if(position!=='fixed')fail(browserName,viewport,route,`site navbar position is ${position}, expected fixed`);const spacer=page.locator('#site-navbar-spacer');if((await spacer.count())!==1)fail(browserName,viewport,route,'navbar layout spacer missing or duplicated');await page.evaluate(()=>window.scrollTo(0,Math.min(700,Math.max(0,document.documentElement.scrollHeight-window.innerHeight))));await page.waitForTimeout(180);const scrollY=await page.evaluate(()=>window.scrollY);const after=await navbar.boundingBox();if(scrollY>100){if(!(await navbar.isVisible().catch(()=>false)))fail(browserName,viewport,route,'fixed navbar not visible after scroll');if(!after)fail(browserName,viewport,route,'fixed navbar has no box after scroll');if(after&&Math.abs(after.y)>2)fail(browserName,viewport,route,`fixed navbar moved from viewport top (y=${after.y})`)}await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(40)}

        if(viewport.width<=mobileMenuMaxWidth){const menuButton=page.getByRole('button',{name:/open menu/i});const menuCount=await menuButton.count();if(menuCount!==1)fail(browserName,viewport,route,`mobile menu button expected once, found ${menuCount}`);else{await menuButton.click();const mobileMenu=page.locator('#mobile-menu');if(!(await mobileMenu.isVisible().catch(()=>false)))fail(browserName,viewport,route,'mobile menu did not open');const expanded=await menuButton.getAttribute('aria-expanded');if(expanded!=='true')fail(browserName,viewport,route,'mobile menu aria-expanded was not true after opening');const menuBox=await mobileMenu.boundingBox().catch(()=>null);if(menuBox&&(menuBox.x<-1||menuBox.x+menuBox.width>viewport.width+1))fail(browserName,viewport,route,'mobile menu extends beyond viewport');await page.keyboard.press('Escape');await page.waitForTimeout(40);if(await mobileMenu.isVisible().catch(()=>false))fail(browserName,viewport,route,'Escape did not close mobile menu')}}else{const visibleMenuButton=page.getByRole('button',{name:/open menu/i});if(await visibleMenuButton.isVisible().catch(()=>false))fail(browserName,viewport,route,'mobile menu button visible at desktop breakpoint')}

        if(route==='/'){const video=page.locator('video').first();if((await video.count())===0)fail(browserName,viewport,'/','hero video missing');else{const attrs=await video.evaluate(el=>({muted:el.muted,loop:el.loop,autoplay:el.autoplay,playsInlineAttribute:el.hasAttribute('playsinline'),source:el.querySelector('source')?.getAttribute('src')||el.getAttribute('src')||'',rect:el.getBoundingClientRect().toJSON()}));if(!attrs.muted)fail(browserName,viewport,'/','hero video is not muted');if(!attrs.loop)fail(browserName,viewport,'/','hero video does not loop');if(!attrs.playsInlineAttribute)fail(browserName,viewport,'/','hero video missing playsinline attribute');if(!attrs.autoplay)fail(browserName,viewport,'/','hero video missing autoplay');if(!attrs.source.includes('ppa-hero-film.mp4'))fail(browserName,viewport,'/',`unexpected hero video source ${attrs.source}`);if(attrs.rect.width<viewport.width-2)fail(browserName,viewport,'/',`hero video width ${attrs.rect.width}px does not cover viewport ${viewport.width}px`)}}

        const overflowedVisibleElements=await page.locator('main *').evaluateAll(elements=>elements.filter(el=>{const style=getComputedStyle(el);if(style.display==='none'||style.visibility==='hidden'||style.position==='fixed')return false;const rect=el.getBoundingClientRect();if(rect.width===0||rect.height===0)return false;return rect.left<-2||rect.right>window.innerWidth+2}).slice(0,5).map(el=>({tag:el.tagName,className:el.className,text:el.textContent?.trim().slice(0,80)})));if(overflowedVisibleElements.length)fail(browserName,viewport,route,`visible content extends beyond viewport: ${JSON.stringify(overflowedVisibleElements[0])}`);
        const clippedHeadings=await page.locator('h1,h2,h3,h4').evaluateAll(elements=>elements.filter(el=>{const style=getComputedStyle(el);if(style.display==='none'||style.visibility==='hidden')return false;return el.scrollWidth>el.clientWidth+2||el.scrollHeight>el.clientHeight+2}).slice(0,3).map(el=>el.textContent?.trim().slice(0,100)));if(clippedHeadings.length)fail(browserName,viewport,route,`heading clipping detected: ${clippedHeadings[0]}`);
        const mediaOverflow=await page.locator('img,video,svg').evaluateAll(elements=>elements.filter(el=>{const style=getComputedStyle(el);if(style.display==='none'||style.visibility==='hidden'||style.position==='fixed')return false;const rect=el.getBoundingClientRect();return rect.width>0&&(rect.left<-2||rect.right>window.innerWidth+2)}).slice(0,3).map(el=>el.tagName));if(mediaOverflow.length)fail(browserName,viewport,route,`media extends beyond viewport (${mediaOverflow[0]})`);
        const controls=await page.locator('a,button,input,select,textarea').all();for(const el of controls.slice(0,160)){const box=await el.boundingBox().catch(()=>null);if(box&&(box.x<-1||box.x+box.width>viewport.width+1)){fail(browserName,viewport,route,'interactive element extends beyond viewport');break}}
        if(route==='/contact'){const form=page.getByRole('form',{name:'Project enquiry'});if((await form.count())!==1)fail(browserName,viewport,route,'project enquiry form missing');const fields=page.locator('form input, form select, form textarea, form button');const count=await fields.count();for(let i=0;i<count;i++){const box=await fields.nth(i).boundingBox().catch(()=>null);if(box&&box.width>viewport.width+1){fail(browserName,viewport,route,`form control ${i} wider than viewport`);break}}}
      }
      await context.close();
    }
  } finally {await browser.close()}
}
if(failures.length){console.error(`Cross-browser QA failed with ${failures.length} issue(s):`);for(const failure of failures)console.error(`- ${failure}`);process.exit(1)}
console.log(`Cross-browser QA passed across ${Object.keys(browsers).length} engines, ${viewports.length} playbook viewports and ${routes.length} primary routes, including fixed navigation, mobile menu, hero media, text clipping, form fit and horizontal overflow checks.`);
