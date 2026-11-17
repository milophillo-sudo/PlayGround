import { createRequire } from 'node:module';
import { join } from 'node:path';
const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
page.setDefaultTimeout(120000);
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE', m.text()); });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
const adv = (s) => page.evaluate((s) => window.__lastCan.advance(s), s);
const state = () => page.evaluate(() => {
  const g = window.__lastCan.game;
  return g ? { phase: g.phase, state: g.state, choice: g.choiceKind, qte: g.qte?.mode, escape: g.escape?.active, driving: g.truck?.driving, t: +g.time.toFixed(1) } : { mode: window.__lastCan.mode };
});
const shot = async (n) => { await adv(0.02); await page.waitForTimeout(150); await page.screenshot({ path: `.qa/shots/${n}.png` }); console.log('shot', n, await state()); };
const until = async (fn, label, max = 40) => {
  for (let i = 0; i < max; i++) {
    const s = await state();
    if (fn(s)) return s;
    await adv(0.5);
  }
  console.log('TIMEOUT', label, await state());
  return null;
};

await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'load' });
await page.waitForTimeout(1200);
await page.evaluate(() => window.__lastCan.startGame());
await adv(1.5);
await page.evaluate(() => window.__lastCan.game.enterStore('shoot'));
await adv(4);
console.log('store', await state());
await page.evaluate(() => window.__lastCan.game.startStandoff());
await until((s) => s.choice === 'standoff', 'standoff');
console.log('standoff cam', await page.evaluate(() => { const g = window.__lastCan.game; return { cam: g.camera.position.toArray().map(v => +v.toFixed(2)), look: g.cameraLook.toArray().map(v => +v.toFixed(2)), tim: g.tim.group.position.toArray().map(v => +v.toFixed(2)), mace: g.mace?.group.position.toArray().map(v => +v.toFixed(2)), maceVis: g.mace?.group.visible, maceParent: !!g.mace?.group.parent }; }));
await shot('e1-standoff');
await page.evaluate(() => window.__lastCan.game.choose(0));
await until((s) => s.escape, 'escape timer');
await adv(2.2);
await shot('e2-escape');
await until((s) => s.qte === 'tap', 'jack qte');
await shot('e3-qte');
for (let i = 0; i < 30; i++) {
  if (!(await state()).qte) break;
  await page.evaluate(() => window.__lastCan.game.qteInput('tap'));
  await adv(0.05);
}
await adv(0.8);
await shot('e4-lift');
await adv(1.2);
await shot('e5-crawl');
await until((s) => s.phase === 'chase', 'chase', 30);
await adv(1.4);
await shot('e6-chase');
await until((s) => s.qte === 'swipeRight', 'kick qte', 20);
await page.evaluate(() => window.__lastCan.game.qteInput('swipe'));
await adv(1.2);
await shot('e7-kick');
await until((s) => s.choice === 'gate', 'gate', 30);
await shot('e8-gate');
await page.evaluate(() => window.__lastCan.game.choose(0));
await adv(1.0);
await shot('e9-jaake');
await until((s) => s.phase === 'truck', 'truck', 30);
await adv(1.0);
await shot('e10-truck');
await until((s) => s.qte === 'swipeDown', 'ignition', 20);
await page.evaluate(() => window.__lastCan.game.qteInput('swipe'));
await adv(1.0);
await shot('e11-ignition');
for (let k = 0; k < 4; k++) {
  const s = await state();
  if (s.driving) break;
  if (s.qte === 'swipeDown') await page.evaluate(() => window.__lastCan.game.qteInput('swipe'));
  await adv(1.2);
}
await adv(1.5);
await shot('e12-driving');
await page.evaluate(() => window.__lastCan.advance(18));
await page.waitForTimeout(300);
await shot('e13-end');
console.log('final', await page.evaluate(() => ({ mode: window.__lastCan.mode })));
await browser.close();
