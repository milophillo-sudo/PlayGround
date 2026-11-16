import * as THREE from 'three';

/* ------------------------------------------------------------------ *
 *  Small deterministic RNG so every load looks the same.
 * ------------------------------------------------------------------ */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const cache = new Map();
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

export function canvasTex(w, h, draw, opts = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = opts.colorSpace ?? THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = opts.clamp ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  if (opts.repeat) tex.repeat.set(opts.repeat[0], opts.repeat[1]);
  if (opts.anisotropy) tex.anisotropy = opts.anisotropy;
  tex.needsUpdate = true;
  return tex;
}

function grain(ctx, w, h, amount, seed = 4, alpha = 0.14) {
  const r = mulberry32(seed);
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
  if (alpha > 0) {
    ctx.globalAlpha = alpha;
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = '#1a1a16';
    for (let i = 0; i < 180; i++) {
      ctx.fillRect(r() * w, r() * h, r() * 2 + 0.5, r() * 2 + 0.5);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}

function scratches(ctx, w, h, count, seed, color = 'rgba(255,255,255,.07)') {
  const r = mulberry32(seed);
  ctx.strokeStyle = color;
  for (let i = 0; i < count; i++) {
    ctx.lineWidth = r() * 1.2 + 0.2;
    ctx.beginPath();
    const x = r() * w, y = r() * h;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (r() - 0.5) * 80, y + (r() - 0.5) * 20);
    ctx.stroke();
  }
}

/* ------------------------------------------------------------------ *
 *  Wood
 * ------------------------------------------------------------------ */
export function woodTexture({ seed = 11, light = false, planks = 5, w = 512, h = 512 } = {}) {
  return cached(`wood-${seed}-${light}-${planks}-${w}-${h}`, () => canvasTex(w, h, (ctx) => {
    const r = mulberry32(seed);
    const base = light ? [142, 96, 55] : [94, 60, 34];
    ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
    ctx.fillRect(0, 0, w, h);
    const plankH = h / planks;
    for (let p = 0; p < planks; p++) {
      const y0 = p * plankH;
      const shade = 0.82 + r() * 0.32;
      ctx.fillStyle = `rgba(${Math.round(base[0] * shade)},${Math.round(base[1] * shade)},${Math.round(base[2] * shade)},1)`;
      ctx.fillRect(0, y0, w, plankH);
      // grain
      for (let i = 0; i < 36; i++) {
        const gy = y0 + r() * plankH;
        ctx.strokeStyle = `rgba(${base[0] * 0.5},${base[1] * 0.45},${base[2] * 0.4},${0.05 + r() * 0.18})`;
        ctx.lineWidth = 0.5 + r() * 2;
        ctx.beginPath();
        ctx.moveTo(0, gy);
        for (let x = 0; x <= w; x += 26) {
          ctx.lineTo(x, gy + Math.sin(x * 0.03 + r() * 3) * 2.6 + (r() - 0.5) * 1.5);
        }
        ctx.stroke();
      }
      // knot
      if (r() > 0.45) {
        const kx = r() * w, ky = y0 + plankH * (0.3 + r() * 0.4);
        for (let k = 5; k > 0; k--) {
          ctx.strokeStyle = `rgba(40,22,10,${0.1 + k * 0.03})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(kx, ky, k * 3.4, k * 1.7, 0.2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      // plank gap
      ctx.fillStyle = 'rgba(18,10,5,.66)';
      ctx.fillRect(0, y0 + plankH - 2, w, 2);
      ctx.fillStyle = 'rgba(255,226,180,.09)';
      ctx.fillRect(0, y0 + 1, w, 1);
    }
    scratches(ctx, w, h, 90, seed + 2, 'rgba(230,200,160,.07)');
    grain(ctx, w, h, 26, seed + 5, 0.1);
  }, { repeat: [1, 1] }));
}

export function woodCrateTexture() {
  return cached('crate', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(77);
    ctx.fillStyle = '#87613a'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = `rgba(${110 + r() * 40},${75 + r() * 30},${42 + r() * 20},.55)`;
      ctx.fillRect(0, i * 64, w, 62);
    }
    ctx.strokeStyle = 'rgba(40,22,10,.55)'; ctx.lineWidth = 7;
    ctx.strokeRect(4, 4, w - 8, h - 8);
    ctx.lineWidth = 20; ctx.strokeStyle = 'rgba(70,43,22,.7)';
    ctx.beginPath(); ctx.moveTo(20, 20); ctx.lineTo(w - 20, h - 20); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w - 20, 20); ctx.lineTo(20, h - 20); ctx.stroke();
    grain(ctx, w, h, 24, 88, 0.11);
    scratches(ctx, w, h, 80, 90, 'rgba(0,0,0,.12)');
  }));
}

export function playButtonWood() {
  return cached('playwood', () => {
    const c = document.createElement('canvas');
    c.width = 460; c.height = 160;
    const ctx = c.getContext('2d');
    const r = mulberry32(8);
    ctx.fillStyle = '#925d33'; ctx.fillRect(0, 0, c.width, c.height);
    const boards = 2;
    for (let b = 0; b < boards; b++) {
      const y0 = b * 80;
      ctx.fillStyle = b ? '#8b5730' : '#9b653a'; ctx.fillRect(0, y0, c.width, 80);
      for (let i = 0; i < 30; i++) {
        ctx.strokeStyle = `rgba(55,30,12,${0.04 + r() * 0.12})`;
        ctx.lineWidth = 0.6 + r() * 2;
        const y = y0 + r() * 80;
        ctx.beginPath(); ctx.moveTo(0, y);
        for (let x = 0; x < c.width; x += 30) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * 3);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(35,18,7,.5)'; ctx.fillRect(0, y0 + 78, c.width, 2);
    }
    // warm highlight, edge burning
    const g = ctx.createLinearGradient(0, 0, 0, c.height);
    g.addColorStop(0, 'rgba(255,228,185,.22)');
    g.addColorStop(0.36, 'rgba(255,255,255,0)');
    g.addColorStop(1, 'rgba(30,14,4,.32)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, c.width, c.height);
    ctx.strokeStyle = 'rgba(45,24,9,.65)'; ctx.lineWidth = 10; ctx.strokeRect(5, 5, c.width - 10, c.height - 10);
    return c.toDataURL('image/jpeg', 0.86);
  });
}

/* ------------------------------------------------------------------ *
 *  Ground / walls
 * ------------------------------------------------------------------ */
export function asphaltTexture({ seed = 21, cracks = true, w = 512 } = {}) {
  return cached(`asphalt-${seed}-${cracks}-${w}`, () => canvasTex(w, w, (ctx) => {
    const h = w;
    const r = mulberry32(seed);
    ctx.fillStyle = '#41423d'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const v = 54 + r() * 50;
      ctx.fillStyle = `rgba(${v},${v + 2},${v - 1},${0.12 + r() * 0.38})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 2.2, 1 + r() * 2.2);
    }
    // patches
    for (let i = 0; i < 14; i++) {
      ctx.fillStyle = `rgba(${30 + r() * 20},${32 + r() * 18},${28 + r() * 18},.22)`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 18 + r() * 90, 10 + r() * 50, r() * 3, 0, Math.PI * 2); ctx.fill();
    }
    if (cracks) {
      ctx.strokeStyle = 'rgba(18,18,16,.6)';
      for (let i = 0; i < 22; i++) {
        let x = r() * w, y = r() * h;
        ctx.lineWidth = 0.5 + r() * 1.8;
        ctx.beginPath(); ctx.moveTo(x, y);
        for (let s = 0; s < 6 + r() * 8; s++) {
          x += (r() - 0.5) * 46; y += (r() - 0.5) * 46;
          ctx.lineTo(x, y);
          if (r() > 0.6) { ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 30, y + (r() - 0.5) * 30); ctx.moveTo(x, y); }
        }
        ctx.stroke();
      }
    }
    // faded stains
    for (let i = 0; i < 7; i++) {
      const g = ctx.createRadialGradient(r() * w, r() * h, 2, r() * w, r() * h, 50 + r() * 90);
      g.addColorStop(0, 'rgba(12,13,11,.25)'); g.addColorStop(1, 'rgba(12,13,11,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    }
    grain(ctx, w, h, 20, seed + 3, 0.13);
  }, { repeat: [8, 8] }));
}

export function concreteTexture({ seed = 33, tint = [118, 117, 106], w = 512, repeat = [2, 2] } = {}) {
  return cached(`concrete-${seed}-${tint.join()}-${w}-${repeat.join()}`, () => canvasTex(w, w, (ctx) => {
    const h = w; const r = mulberry32(seed);
    const [R, G, B] = tint;
    ctx.fillStyle = `rgb(${R},${G},${B})`; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 6000; i++) {
      const v = r() * 50 - 25;
      ctx.fillStyle = `rgba(${R + v},${G + v},${B + v},${0.1 + r() * 0.3})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 3, 1 + r() * 3);
    }
    for (let i = 0; i < 18; i++) {
      ctx.strokeStyle = `rgba(35,34,30,${0.06 + r() * 0.16})`;
      ctx.lineWidth = 0.6 + r();
      ctx.beginPath();
      let x = r() * w, y = r() * h; ctx.moveTo(x, y);
      for (let s = 0; s < 8; s++) { x += (r() - 0.5) * 70; y += r() * 50; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    // grime at bottom
    const g = ctx.createLinearGradient(0, h * 0.55, 0, h);
    g.addColorStop(0, 'rgba(24,25,20,0)'); g.addColorStop(1, 'rgba(24,25,20,.26)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    grain(ctx, w, h, 18, seed + 4, 0.12);
  }, { repeat }));
}

export function yellowWallTexture() {
  return cached('yellowwall', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(129);
    ctx.fillStyle = '#b8973f'; ctx.fillRect(0, 0, w, h);
    // painted plaster mottling
    for (let i = 0; i < 180; i++) {
      const g = ctx.createRadialGradient(r() * w, r() * h, 1, r() * w, r() * h, 14 + r() * 60);
      const shade = r() > 0.5 ? '215,181,88' : '137,107,44';
      g.addColorStop(0, `rgba(${shade},${0.05 + r() * 0.1})`); g.addColorStop(1, `rgba(${shade},0)`);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    }
    // grime streaks
    for (let i = 0; i < 24; i++) {
      const x = r() * w;
      const g = ctx.createLinearGradient(x, 0, x + 8, h * (0.4 + r() * 0.6));
      g.addColorStop(0, 'rgba(54,45,28,0)'); g.addColorStop(0.7, `rgba(54,45,28,${0.06 + r() * 0.14})`); g.addColorStop(1, 'rgba(54,45,28,0)');
      ctx.fillStyle = g; ctx.fillRect(x, 0, 10 + r() * 20, h);
    }
    // peeling paint patches
    for (let i = 0; i < 9; i++) {
      const x = r() * w, y = r() * h;
      ctx.fillStyle = `rgba(120,100,72,${0.15 + r() * 0.2})`;
      ctx.beginPath();
      for (let s = 0; s < 8; s++) {
        const a = s / 8 * Math.PI * 2;
        const rad = 10 + r() * 34;
        ctx.lineTo(x + Math.cos(a) * rad, y + Math.sin(a) * rad * 1.4);
      }
      ctx.fill();
      ctx.strokeStyle = 'rgba(80,60,34,.24)'; ctx.stroke();
    }
    const g = ctx.createLinearGradient(0, h * 0.6, 0, h);
    g.addColorStop(0, 'rgba(35,30,20,0)'); g.addColorStop(1, 'rgba(35,30,20,.32)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    grain(ctx, w, h, 20, 130, 0.13);
  }, { repeat: [4, 2] }));
}

export function brickTexture() {
  return cached('brick', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(311);
    ctx.fillStyle = '#4d4137'; ctx.fillRect(0, 0, w, h);
    const bw = 64, bh = 30;
    for (let y = 0; y < h / bh; y++) {
      for (let x = -1; x < w / bw + 1; x++) {
        const off = y % 2 ? bw / 2 : 0;
        const v = 92 + r() * 35;
        ctx.fillStyle = `rgb(${v + 18},${v - 4},${v - 18})`;
        ctx.fillRect(x * bw + off + 2, y * bh + 2, bw - 4, bh - 4);
      }
    }
    grain(ctx, w, h, 26, 312, 0.14);
    scratches(ctx, w, h, 70, 313, 'rgba(20,14,10,.18)');
  }, { repeat: [3, 2] }));
}

export function grassTexture() {
  return cached('grass', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(71);
    ctx.fillStyle = '#4b5136'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 8000; i++) {
      const shades = ['#5c6440', '#404a2c', '#6b7350', '#353d26', '#7a7d4e'];
      ctx.strokeStyle = shades[(r() * shades.length) | 0];
      ctx.globalAlpha = 0.25 + r() * 0.5;
      ctx.lineWidth = 0.6 + r();
      const x = r() * w, y = r() * h;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 4, y - 3 - r() * 8); ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (let i = 0; i < 12; i++) {
      ctx.fillStyle = `rgba(70,62,38,${0.08 + r() * 0.12})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 20 + r() * 60, 14 + r() * 40, r() * 3, 0, 7); ctx.fill();
    }
    grain(ctx, w, h, 14, 72, 0.08);
  }, { repeat: [14, 14] }));
}

export function dirtTexture() {
  return cached('dirt', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(411);
    ctx.fillStyle = '#4f4634'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      const v = 48 + r() * 50;
      ctx.fillStyle = `rgba(${v + 14},${v + 5},${v - 12},${0.1 + r() * 0.3})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 4, 1 + r() * 4);
    }
    for (let i = 0; i < 30; i++) {
      ctx.strokeStyle = `rgba(31,28,20,${0.08 + r() * 0.16})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(r() * w, r() * h); ctx.lineTo(r() * w, r() * h); ctx.stroke();
    }
    grain(ctx, w, h, 20, 412, 0.12);
  }, { repeat: [8, 8] }));
}

export function barkTexture() {
  return cached('bark', () => canvasTex(256, 512, (ctx, w, h) => {
    const r = mulberry32(13);
    ctx.fillStyle = '#3d3428'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 120; i++) {
      const x = r() * w;
      ctx.strokeStyle = `rgba(${20 + r() * 40},${18 + r() * 30},${13 + r() * 22},${0.25 + r() * 0.4})`;
      ctx.lineWidth = 1 + r() * 5;
      ctx.beginPath(); ctx.moveTo(x, 0);
      for (let y = 0; y < h; y += 30) ctx.lineTo(x + Math.sin(y * 0.02 + i) * 5 + (r() - 0.5) * 3, y);
      ctx.stroke();
    }
    grain(ctx, w, h, 22, 14, 0.12);
  }, { repeat: [1, 3] }));
}

export function metalTexture({ seed = 51, base = [92, 94, 89], rust = true } = {}) {
  return cached(`metal-${seed}-${base.join()}-${rust}`, () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(seed);
    ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(${base[0] + 25},${base[1] + 25},${base[2] + 25},${r() * 0.16})`;
      ctx.fillRect(0, r() * h, w, 1 + r() * 8);
    }
    if (rust) {
      for (let i = 0; i < 55; i++) {
        const x = r() * w, y = r() * h;
        ctx.fillStyle = `rgba(${110 + r() * 45},${52 + r() * 26},${20 + r() * 18},${0.12 + r() * 0.4})`;
        ctx.beginPath(); ctx.ellipse(x, y, 5 + r() * 34, 4 + r() * 26, r() * 3, 0, 7); ctx.fill();
      }
    }
    grain(ctx, w, h, 26, seed + 2, 0.1);
    scratches(ctx, w, h, 90, seed + 3, 'rgba(230,230,220,.11)');
  }));
}

export function paperTexture() {
  return cached('paper', () => canvasTex(256, 256, (ctx, w, h) => {
    const r = mulberry32(91);
    ctx.fillStyle = '#d8cfb4'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 70; i++) {
      ctx.fillStyle = `rgba(120,105,75,${0.03 + r() * 0.08})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 3 + r() * 24, 2 + r() * 14, r() * 3, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(70,60,42,.35)'; ctx.lineWidth = 1;
    for (let i = 0; i < 7; i++) { ctx.beginPath(); ctx.moveTo(26, 50 + i * 24); ctx.lineTo(190 + r() * 30, 50 + i * 24); ctx.stroke(); }
    grain(ctx, w, h, 16, 92, 0.07);
  }, { clamp: true }));
}

/* ------------------------------------------------------------------ *
 *  Signs & paint
 * ------------------------------------------------------------------ */
export function watchSignTexture() {
  return cached('watchsign', () => canvasTex(1024, 512, (ctx, w, h) => {
    const r = mulberry32(180);
    // weathered wood boards
    ctx.fillStyle = '#6d4a2b'; ctx.fillRect(0, 0, w, h);
    for (let b = 0; b < 4; b++) {
      ctx.fillStyle = b % 2 ? '#765131' : '#684426';
      ctx.fillRect(0, b * h / 4, w, h / 4);
      for (let i = 0; i < 26; i++) {
        ctx.strokeStyle = `rgba(40,24,10,${0.05 + r() * 0.12})`; ctx.lineWidth = 0.6 + r() * 2;
        const y = b * h / 4 + r() * h / 4;
        ctx.beginPath(); ctx.moveTo(0, y);
        for (let x = 0; x < w; x += 40) ctx.lineTo(x, y + Math.sin(x * 0.02 + i) * 3); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(25,14,5,.5)'; ctx.fillRect(0, b * h / 4 + h / 4 - 3, w, 3);
    }
    // faded white border paint
    ctx.strokeStyle = 'rgba(220,211,188,.62)'; ctx.lineWidth = 9;
    ctx.strokeRect(34, 30, w - 68, h - 60);
    // big stencilled text
    ctx.save();
    ctx.translate(w / 2, h / 2 + 14);
    ctx.rotate(-0.015);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '400 220px "Bebas Neue", Impact, sans-serif';
    ctx.fillStyle = 'rgba(236,228,208,.94)';
    ctx.fillText('WATCH', 0, -78);
    ctx.fillStyle = 'rgba(190,56,36,.94)';
    ctx.fillText('OUT!', 0, 116);
    ctx.restore();
    // bullet holes & splatter
    for (let i = 0; i < 7; i++) {
      const x = r() * w, y = r() * h;
      const g = ctx.createRadialGradient(x, y, 1, x, y, 16 + r() * 22);
      g.addColorStop(0, 'rgba(15,10,7,.9)'); g.addColorStop(0.35, 'rgba(30,20,12,.5)'); g.addColorStop(1, 'rgba(30,20,12,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 18 + r() * 22, 0, 7); ctx.fill();
    }
    // weather / dust
    ctx.fillStyle = 'rgba(24,20,14,.18)';
    for (let i = 0; i < 60; i++) ctx.fillRect(r() * w, r() * h, 2 + r() * 26, 1 + r() * 3);
    grain(ctx, w, h, 22, 181, 0.12);
  }, { clamp: true, anisotropy: 8 }));
}

export function sprayPlankTexture() {
  return cached('spray', () => canvasTex(1024, 512, (ctx, w, h) => {
    const r = mulberry32(280);
    ctx.fillStyle = '#7d5a35'; ctx.fillRect(0, 0, w, h);
    // boards horizontal
    for (let b = 0; b < 5; b++) {
      const y0 = b * h / 5;
      const shade = 118 + r() * 28;
      ctx.fillStyle = `rgb(${shade},${shade - 32},${shade - 63})`;
      ctx.fillRect(0, y0, w, h / 5);
      for (let i = 0; i < 20; i++) {
        ctx.strokeStyle = `rgba(55,32,14,${0.05 + r() * 0.12})`; ctx.lineWidth = 0.7 + r() * 1.7;
        const y = y0 + r() * h / 5;
        ctx.beginPath(); ctx.moveTo(0, y);
        for (let x = 0; x < w; x += 46) ctx.lineTo(x, y + Math.sin(x * 0.02 + b) * 2.5); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(30,17,7,.55)'; ctx.fillRect(0, y0 + h / 5 - 3, w, 3);
    }
    // patchy white base spray
    ctx.fillStyle = 'rgba(190,184,164,.18)';
    for (let i = 0; i < 140; i++) {
      ctx.beginPath(); ctx.arc(r() * w, r() * h, 2 + r() * 22, 0, 7); ctx.fill();
    }
    // the message - red spray, rough edges
    const text = 'TRESPASSER WILL BE SHOT';
    ctx.save();
    ctx.translate(w / 2, h / 2 + 8);
    ctx.rotate(-0.012);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '400 152px "Bebas Neue", Impact, sans-serif';
    ctx.fillStyle = 'rgba(176,32,24,.92)';
    ctx.fillText('TRESPASSER', 0, -76);
    ctx.fillText('WILL BE SHOT', 0, 82);
    ctx.restore();
    // overspray specks
    for (let i = 0; i < 900; i++) {
      const x = r() * w, y = r() * h;
      const nearText = Math.abs(y - h / 2) < 170;
      if (!nearText) continue;
      ctx.fillStyle = `rgba(165,30,22,${r() * 0.3})`;
      ctx.beginPath(); ctx.arc(x, y, r() * 2.2, 0, 7); ctx.fill();
    }
    // drips
    for (let i = 0; i < 14; i++) {
      const x = r() * w, y = h / 2 + (r() - 0.5) * 180;
      ctx.strokeStyle = `rgba(150,28,20,${0.2 + r() * 0.35})`; ctx.lineWidth = 1 + r() * 3;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 4, y + 14 + r() * 50); ctx.stroke();
    }
    grain(ctx, w, h, 20, 281, 0.1);
  }, { clamp: true, anisotropy: 8 }));
}

export function storeSignTexture() {
  return cached('storesign', () => canvasTex(1024, 256, (ctx, w, h) => {
    const r = mulberry32(490);
    ctx.fillStyle = '#3a352b'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(230,219,187,.09)';
    for (let i = 0; i < 260; i++) ctx.fillRect(r() * w, r() * h, 2 + r() * 20, 1 + r() * 2);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '400 132px "Bebas Neue", Impact, sans-serif';
    ctx.fillStyle = '#d8cfb6';
    ctx.fillText('HOMEWOOD FURNITURE', w / 2, h / 2 - 4);
    ctx.font = '400 34px "Special Elite", monospace';
    ctx.fillStyle = 'rgba(200,108,60,.85)';
    ctx.fillText('EVERYTHING MUST GO', w / 2, h - 46);
    // broken/burnt patches
    ctx.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 16; i++) {
      ctx.beginPath(); ctx.arc(r() * w, r() * h, 4 + r() * 30, 0, 7); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
    grain(ctx, w, h, 18, 491, 0.1);
  }, { clamp: true }));
}

export function smallSignTexture(text, sub = '', opts = {}) {
  return canvasTex(opts.w ?? 512, opts.h ?? 256, (ctx, w, h) => {
    const r = mulberry32(opts.seed ?? 900);
    ctx.fillStyle = opts.bg ?? '#b2a98e'; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = opts.border ?? 'rgba(40,35,25,.6)'; ctx.lineWidth = 10; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = opts.fg ?? '#2c2a22';
    ctx.font = `400 ${opts.size ?? 92}px "Bebas Neue", Impact, sans-serif`;
    ctx.fillText(text, w / 2, sub ? h * 0.42 : h / 2);
    if (sub) {
      ctx.font = `400 ${opts.subSize ?? 34}px "Special Elite", monospace`;
      ctx.fillStyle = opts.subFg ?? 'rgba(60,50,35,.8)';
      ctx.fillText(sub, w / 2, h * 0.7);
    }
    // holes
    ctx.fillStyle = 'rgba(30,25,18,.7)';
    [[20, 20], [w - 20, 20], [20, h - 20], [w - 20, h - 20]].forEach(([x, y]) => { ctx.beginPath(); ctx.arc(x, y, 5, 0, 7); ctx.fill(); });
    for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(50,42,30,${r() * 0.12})`; ctx.fillRect(r() * w, r() * h, 2 + r() * 14, 1 + r() * 6); }
  }, { clamp: true });
}

/* ------------------------------------------------------------------ *
 *  Windows / interiors
 * ------------------------------------------------------------------ */
export function windowTexture({ lit = false, seed = 62, grime = 0.7 } = {}) {
  return cached(`window-${lit}-${seed}-${grime}`, () => canvasTex(256, 384, (ctx, w, h) => {
    const r = mulberry32(seed);
    const bg = lit ? ['#b67a45', '#5c3a20'] : ['#25302e', '#101716'];
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, bg[0]); g.addColorStop(1, bg[1]);
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    // panes
    ctx.strokeStyle = 'rgba(12,13,11,.8)'; ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, w - 6, h - 6);
    ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
    if (!lit) {
      // reflection streaks
      ctx.fillStyle = 'rgba(160,180,175,.08)';
      ctx.beginPath(); ctx.moveTo(0, h * 0.2); ctx.lineTo(w, 0); ctx.lineTo(w, h * 0.3); ctx.lineTo(0, h * 0.62); ctx.fill();
    }
    ctx.fillStyle = `rgba(20,24,20,${grime * 0.22})`;
    for (let i = 0; i < 180; i++) ctx.fillRect(r() * w, r() * h, 1 + r() * 7, 1 + r() * 2);
    // cracks
    if (seed % 2 === 0) {
      ctx.strokeStyle = 'rgba(220,225,210,.2)'; ctx.lineWidth = 1.2;
      let x = r() * w, y = r() * h * 0.4; ctx.beginPath(); ctx.moveTo(x, y);
      for (let i = 0; i < 5; i++) { x += (r() - 0.3) * 40; y += r() * 30; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, { clamp: true }));
}

export function foggyGlassTexture() {
  return cached('foggy', () => canvasTex(512, 256, (ctx, w, h) => {
    const r = mulberry32(701);
    ctx.fillStyle = 'rgba(232,236,230,1)'; ctx.fillRect(0, 0, w, h);
    const img = ctx.getImageData(0, 0, w, h); const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      const n = (r() - 0.5) * 55;
      d[i] += n; d[i + 1] += n; d[i + 2] += n; d[i + 3] = 160 + r() * 65;
    }
    ctx.putImageData(img, 0, 0);
    // condensation streaks
    ctx.strokeStyle = 'rgba(190,200,196,.22)'; ctx.lineWidth = 2;
    for (let i = 0; i < 40; i++) {
      const x = r() * w; ctx.beginPath(); ctx.moveTo(x, r() * h); ctx.lineTo(x + (r() - 0.5) * 5, r() * h); ctx.stroke();
    }
    // hand smear
    ctx.fillStyle = 'rgba(150,160,154,.2)';
    for (let i = 0; i < 10; i++) ctx.fillRect(70 + i * 10, 110 + i * 3, 90, 8);
    return ctx.canvas;
  }, { clamp: true }));
}

export function doorGlassTexture() {
  return cached('doorglass', () => canvasTex(256, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, 'rgba(120,150,145,.24)');
    g.addColorStop(0.45, 'rgba(30,50,46,.16)');
    g.addColorStop(0.5, 'rgba(180,200,190,.12)');
    g.addColorStop(1, 'rgba(20,35,32,.24)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(220,230,220,.1)'; ctx.lineWidth = 2;
    ctx.strokeRect(4, 4, w - 8, h - 8);
  }, { clamp: true }));
}

/* ------------------------------------------------------------------ *
 *  Chain-link / decals / sprites
 * ------------------------------------------------------------------ */
export function chainlinkTexture() {
  return cached('chainlink', () => {
    const size = 256;
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, size, size);
    ctx.strokeStyle = 'rgba(155,160,150,.88)'; ctx.lineWidth = 2.2;
    const gap = 26;
    for (let x = -size; x < size * 2; x += gap) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + size, size); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, size); ctx.lineTo(x + size, 0); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(70,74,68,.5)'; ctx.lineWidth = 1;
    for (let x = -size; x < size * 2; x += gap) {
      ctx.beginPath(); ctx.moveTo(x + 2, 0); ctx.lineTo(x + size + 2, size); ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(6, 2);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  });
}

export function chainlinkMaterial() {
  const tex = chainlinkTexture();
  return new THREE.MeshStandardMaterial({
    map: tex, transparent: true, alphaTest: 0.28, side: THREE.DoubleSide,
    roughness: 0.7, metalness: 0.6, color: 0x92968c
  });
}

export function glowTexture(inner = 'rgba(255,190,120,1)', outer = 'rgba(255,140,60,0)') {
  return cached(`glow-${inner}`, () => {
    const size = 128;
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, inner); g.addColorStop(0.35, inner.replace(/[\d.]+\)$/, '0.4)')); g.addColorStop(1, outer);
    ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  });
}

export function noiseDataURL(size = 128) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const ctx = c.getContext('2d');
  const r = mulberry32(4);
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 95 + r() * 90;
    img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = 70 + r() * 90;
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL('image/png');
}

export function bloodTexture() {
  return cached('blood', () => canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(66);
    ctx.clearRect(0, 0, w, h);
    const g = ctx.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, 190);
    g.addColorStop(0, 'rgba(58,10,8,.9)'); g.addColorStop(0.5, 'rgba(72,13,9,.55)'); g.addColorStop(1, 'rgba(60,10,8,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(w / 2, h / 2, 220, 170, 0.2, 0, 7); ctx.fill();
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(${50 + r() * 40},${8 + r() * 12},${6 + r() * 10},${0.2 + r() * 0.5})`;
      ctx.beginPath(); ctx.ellipse(w / 2 + (r() - 0.5) * 340, h / 2 + (r() - 0.5) * 280, 2 + r() * 22, 2 + r() * 16, r() * 3, 0, 7); ctx.fill();
    }
    // smears
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = `rgba(65,11,8,${0.2 + r() * 0.3})`; ctx.lineWidth = 2 + r() * 7;
      const x = w / 2 + (r() - 0.5) * 220, y = h / 2 + (r() - 0.5) * 130;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 170, y + 20 + r() * 80); ctx.stroke();
    }
  }, { clamp: true }));
}

export function grungeDecalTexture() {
  return cached('grunge', () => canvasTex(256, 256, (ctx, w, h) => {
    const r = mulberry32(5);
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(18,18,14,${0.04 + r() * 0.12})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 3 + r() * 30, 2 + r() * 18, r() * 3, 0, 7); ctx.fill();
    }
  }, { clamp: true }));
}

export function labelTexture(text, { bg = '#d9cfb7', fg = '#39412e', sub = '' } = {}) {
  return canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(60,65,48,.55)'; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = fg; ctx.font = '400 74px "Bebas Neue", Impact, sans-serif';
    const lines = text.split('\n');
    lines.forEach((line, i) => ctx.fillText(line, w / 2, h / 2 - 28 + i * 60));
    if (sub) { ctx.font = '400 22px "Special Elite", monospace'; ctx.fillStyle = 'rgba(60,65,48,.8)'; ctx.fillText(sub, w / 2, h - 42); }
    ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(16, 16, w - 32, 10);
  }, { clamp: true });
}

export function roadLineTexture() {
  return cached('roadline', () => canvasTex(64, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(196,185,142,.72)';
    ctx.fillRect(0, 0, w, h * 0.42);
    grain(ctx, w, h, 24, 5, 0);
  }, { clamp: true }));
}
