import { createRequire } from 'node:module';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');

const OUT = join(process.cwd(), '.qa/shots');
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type().toUpperCase() + ': ' + m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message + '\n' + (e.stack || '')));

const adv = (s) => page.evaluate((s) => window.__lastCan.advance(s), s);
const shot = async (n) => { await adv(0.02); await page.screenshot({ path: `${OUT}/${n}.png` }); console.log('shot', n); };
const state = () => page.evaluate(() => {
  const g = window.__lastCan.game;
  return g ? { phase: g.phase, state: g.state, choice: g.choiceKind, qte: g.qte?.mode, cans: g.cansFound, escape: g.escape?.active, driving: g.truck?.driving, mode: window.__lastCan.mode } : { mode: window.__lastCan.mode };
});

await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'load' });
await page.waitForTimeout(2000);
await shot('01-menu');

await page.click('#playBtn');
await page.waitForTimeout(2200);
await shot('02-cutscene');

await page.evaluate(() => window.__lastCan.director.skip());
await page.waitForTimeout(1200);
await page.evaluate(() => { if (!window.__lastCan.game) window.__lastCan.startGame(); });
await adv(1.5);
console.log('after skip', await state());
await shot('03-lot');

await page.evaluate(() => window.__lastCan.game.enterStore('shoot'));
await adv(5);
console.log('store', await state());
await shot('04-store');

for (let i = 0; i < 10; i++) {
  await page.evaluate((i) => {
    const g = window.__lastCan.game;
    const can = g.interior.cans[i];
    g.player.position.set(can.position.x, 0, can.position.z + 0.35);
  }, i);
  await adv(0.2);
  await page.evaluate(() => window.__lastCan.game.interact());
  await adv(0.1);
}
console.log('cans', await state());
await shot('05-cans');

const useSpot = async (name, dx = 0.4, dz = 0.55) => {
  await page.evaluate(({ name, dx, dz }) => {
    const g = window.__lastCan.game;
    const s = g.interior.interactables[name];
    g.player.position.set(s.x + dx, 0, s.z + dz);
  }, { name, dx, dz });
  await adv(0.25);
  const f = await page.evaluate(() => window.__lastCan.game.storeFocus?.kind);
  await page.evaluate(() => window.__lastCan.game.interact());
  await adv(0.2);
  return f;
};

console.log('note focus', await useSpot('note', 0.2, 0.5));
await page.waitForTimeout(600);
await adv(0.5);
await shot('06-note');
await page.evaluate(() => window.__lastCan.game.closeNote());
await adv(0.2);

console.log('blood focus', await useSpot('blood', 0.3, 0.7));
await adv(0.5);
await shot('07-blood');

console.log('keypad focus', await useSpot('keypad', -0.9, 0.6));
await page.waitForTimeout(600);
await adv(0.3);
await shot('08-keypad');
for (const d of '261212') await page.evaluate((d) => window.__lastCan.game.pressKeypad(d), d);
await page.waitForTimeout(500);
await adv(1.5);
console.log('keypadUnlocked', await page.evaluate(() => window.__lastCan.game.keypadUnlocked));
await shot('09-fuel-open');

console.log('fuel focus', await useSpot('fuel', -0.3, 0.7));
await adv(13);
console.log('standoff', await state());
await shot('10-standoff');

await page.evaluate(() => window.__lastCan.game.choose(0));
await adv(1);
console.log('threaten', await state());
await adv(5);
console.log('escape', await state());
await shot('11-escape');

// jack QTE
await adv(0.5);
let q = await state();
console.log('qte', q.qte);
if (q.qte === 'tap') {
  for (let i = 0; i < 20; i++) {
    await page.evaluate(() => window.__lastCan.game.qteInput('tap'));
    await adv(0.06);
  }
}
await shot('12-qte');
await adv(10);
console.log('after jack', await state());
await shot('13-crawl');

// chase
await adv(4);
console.log('chase', await state());
await shot('14-chase');
q = await state();
if (q.qte === 'swipeRight') await page.evaluate(() => window.__lastCan.game.qteInput('swipe'));
await adv(7);
await shot('15-kick');

await adv(7);
console.log('gate', await state());
await shot('16-gate');
if ((await state()).choice === 'gate') await page.evaluate(() => window.__lastCan.game.choose(0));
await adv(1);
await shot('17-jaake');
await adv(9);
console.log('truck', await state());
await shot('18-truck');

for (let k = 0; k < 5; k++) {
  q = await state();
  if (q.qte === 'swipeDown') {
    await page.evaluate(() => window.__lastCan.game.qteInput('swipe'));
    await adv(1);
  } else {
    await adv(1);
  }
  if ((await state()).driving) break;
}
console.log('driving', await state());
await adv(2);
await shot('19-driving');
await adv(14);
console.log('end?', await state());
await page.waitForTimeout(600);
await shot('20-end');

console.log('--- LOGS ---');
console.log(errors.length ? errors.slice(0, 40).join('\n') : 'none');
await browser.close();
