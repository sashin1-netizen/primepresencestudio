import { chromium, firefox, webkit } from 'playwright';

const browsers = { chromium, firefox, webkit };
const routes = ['/', '/services', '/connect', '/work', '/process', '/about', '/contact'];
const viewports = [
  { name: 'small-phone', width: 320, height: 720 },
  { name: 'phone', width: 390, height: 844 },
  { name: 'large-phone', width: 430, height: 932 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1366, height: 768 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'wide-desktop', width: 1920, height: 1080 },
];

const failures = [];

for (const [browserName, launcher] of Object.entries(browsers)) {
  const browser = await launcher.launch({ headless: true });
  try {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();
      for (const route of routes) {
        const url = `http://127.0.0.1:3000${route}`;
        const response = await page.goto(url, { waitUntil: 'networkidle' });
        if (!response?.ok()) failures.push(`${browserName} ${viewport.name} ${route}: HTTP ${response?.status()}`);

        const metrics = await page.evaluate(() => ({
          innerWidth: window.innerWidth,
          htmlScrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          title: document.title,
        }));
        const maxScrollWidth = Math.max(metrics.htmlScrollWidth, metrics.bodyScrollWidth);
        if (maxScrollWidth > metrics.innerWidth + 1) {
          failures.push(`${browserName} ${viewport.name} ${route}: horizontal overflow ${maxScrollWidth}px > ${metrics.innerWidth}px`);
        }

        const navVisible = await page.locator('header').isVisible().catch(() => false);
        if (!navVisible) failures.push(`${browserName} ${viewport.name} ${route}: header not visible`);

        if (route === '/') {
          const video = page.locator('video').first();
          if ((await video.count()) === 0) {
            failures.push(`${browserName} ${viewport.name} /: hero video missing`);
          } else {
            const attrs = await video.evaluate((el) => ({
              muted: el.muted,
              loop: el.loop,
              playsInline: el.playsInline,
              autoplay: el.autoplay,
              source: el.querySelector('source')?.getAttribute('src') || el.getAttribute('src') || '',
            }));
            if (!attrs.muted) failures.push(`${browserName} ${viewport.name} /: hero video is not muted`);
            if (!attrs.loop) failures.push(`${browserName} ${viewport.name} /: hero video does not loop`);
            if (!attrs.playsInline) failures.push(`${browserName} ${viewport.name} /: hero video missing playsInline`);
            if (!attrs.autoplay) failures.push(`${browserName} ${viewport.name} /: hero video missing autoplay`);
            if (!attrs.source.includes('ppa-hero-film.mp4')) failures.push(`${browserName} ${viewport.name} /: unexpected hero video source ${attrs.source}`);
          }
        }

        const buttons = await page.locator('a,button,input,select,textarea').all();
        for (const el of buttons.slice(0, 120)) {
          const box = await el.boundingBox().catch(() => null);
          if (box && box.x + box.width > viewport.width + 1) {
            failures.push(`${browserName} ${viewport.name} ${route}: interactive element extends beyond viewport`);
            break;
          }
        }
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
}

if (failures.length) {
  console.error(`Cross-browser QA failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Cross-browser QA passed in Chromium, Firefox and WebKit across all configured viewports.');
