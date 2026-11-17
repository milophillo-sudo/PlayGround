import { createRequire } from 'node:module';
import { join } from 'node:path';
const runtime = join(process.env.HOME, '.local/share/omgithub-playwright');
const require = createRequire(join(runtime, 'package.json'));
const { chromium } = require('playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('pageerror', (e) => console.log('PAGEERROR', e.message));
await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'load' });
await page.waitForTimeout(1500);
await page.evaluate(() => window.__lastCan.startGame());
await page.waitForTimeout(1500);
await page.evaluate(() => window.__lastCan.game.chaseSequence());
await page.evaluate(() => window.__lastCan.advance(4));
await page.waitForTimeout(800);
const info = await page.evaluate(() => {
  const g = window.__lastCan.game;
  const out = [];
  const V = g.camera.position.constructor;
  g.scene.traverse(o => {
    if (!o.isMesh && !o.isSprite) return;
    const p = new V();
    o.getWorldPosition(p);
    if (p.y > 2.2 && p.y < 9 && Math.abs(p.x) < 9 && p.z > -24 && p.z < -4) {
      out.push({ name: o.name, type: o.type, geo: o.geometry?.type, pos: [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)], parent: o.parent?.name, mat: o.material?.type });
    }
  });
  return { cam: g.camera.position.toArray().map(v => +v.toFixed(2)), out: out.slice(0, 60) };
});
console.log(JSON.stringify(info, null, 1));
await page.screenshot({ path: '.qa/shots/head-clip.png', clip: { x: 400, y: 0, width: 400, height: 240 } });
await browser.close();
