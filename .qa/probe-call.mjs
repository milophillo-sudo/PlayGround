import { createRequire } from 'node:module';
import { join } from 'node:path';
const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
page.on('console', (m) => console.log('CONSOLE', m.text()));
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'load' });
await page.waitForTimeout(1500);
await page.evaluate(() => window.__lastCan.startGame());
await page.waitForTimeout(1200);
console.log(await page.evaluate(() => {
  const g = window.__lastCan.game;
  const t = typeof g?.chaseSequence;
  try { const r = g.chaseSequence(); return { t, ret: String(r), phase: g.phase }; }
  catch (e) { return { t, err: e.message, stack: e.stack }; }
}));
await page.waitForTimeout(3000);
console.log('after', await page.evaluate(() => ({ phase: window.__lastCan.game.phase, knife: !!window.__lastCan.game.threatKnife })));
await browser.close();
