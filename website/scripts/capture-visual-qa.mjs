import fs from 'node:fs/promises';
import { chromium, firefox, webkit } from 'playwright';

await fs.mkdir('visual-qa', { recursive: true });
const browsers = { chromium, firefox, webkit };
const captures = [
  { name: 'small-phone', width: 320, height: 720 },
  { name: 'phone', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];
const routes = [
  ['home', '/'], ['services', '/services'], ['connect', '/connect'], ['work', '/work'], ['process', '/process'], ['about', '/about'], ['contact', '/contact'],
];

for (const [browserName, launcher] of Object.entries(browsers)) {
  const browser = await launcher.launch({ headless: true });
  try {
    for (const viewport of captures) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();
      for (const [name, route] of routes) {
        await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: 'networkidle' });
        await page.screenshot({
          path: `visual-qa/${name}-${browserName}-${viewport.name}.png`,
          fullPage: true,
        });
      }
      await context.close();
    }
  } finally {
    await browser.close();
  }
}
