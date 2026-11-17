import * as THREE from 'three';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

function tex(c, repeatX = 1, repeatY = 1) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  t.anisotropy = 8;
  return t;
}

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function speckle(g, w, h, count, colors, alpha = 0.15, size = 2) {
  const r = rng(count * 977 + w);
  for (let i = 0; i < count; i++) {
    g.globalAlpha = alpha * (0.3 + r());
    g.fillStyle = colors[(r() * colors.length) | 0];
    const s = size * (0.4 + r() * 1.6);
    g.fillRect(r() * w, r() * h, s, s);
  }
  g.globalAlpha = 1;
}

const cache = new Map();
function cached(key, fn) {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key);
}

export const T = {
  floor: (variant = 0) => cached('floor' + variant, () => {
    const [c, g] = canvas(512, 512);
    const base = variant === 1 ? '#9d9a8b' : variant === 2 ? '#a9b3a0' : '#b4b2a2';
    g.fillStyle = base; g.fillRect(0, 0, 512, 512);
    const r = rng(42 + variant);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const shade = 0.94 + r() * 0.11;
      g.fillStyle = `rgba(${Math.floor(150 * shade)},${Math.floor(152 * shade)},${Math.floor(135 * shade)},.35)`;
      g.fillRect(x * 128 + 2, y * 128 + 2, 124, 124);
    }
    g.strokeStyle = 'rgba(60,62,50,.30)'; g.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, 512); g.stroke();
      g.beginPath(); g.moveTo(0, i * 128); g.lineTo(512, i * 128); g.stroke();
    }
    speckle(g, 512, 512, 1500, ['#6c6b5c', '#d7d5c2', '#4b4c40'], 0.22, 1.8);
    // scuff marks
    for (let i = 0; i < 14; i++) {
      g.globalAlpha = 0.08 + r() * 0.1;
      g.strokeStyle = '#3d3d32'; g.lineWidth = 1 + r() * 2;
      g.beginPath();
      const x = r() * 512, y = r() * 512;
      g.moveTo(x, y); g.quadraticCurveTo(x + r() * 80 - 40, y + r() * 40, x + r() * 120 - 60, y + r() * 60);
      g.stroke();
    }
    g.globalAlpha = 1;
    return tex(c, 3, 3);
  }),

  carpet: () => cached('carpet', () => {
    const [c, g] = canvas(256, 256);
    g.fillStyle = '#43383c'; g.fillRect(0, 0, 256, 256);
    speckle(g, 256, 256, 3000, ['#5a4b4e', '#332b2e', '#6d5a55'], 0.4, 1.5);
    const r = rng(9);
    for (let i = 0; i < 40; i++) {
      g.strokeStyle = `rgba(120,100,95,${0.08 + r() * 0.1})`;
      g.lineWidth = 1;
      g.beginPath(); g.moveTo(r() * 256, r() * 256); g.lineTo(r() * 256, r() * 256); g.stroke();
    }
    return tex(c, 5, 5);
  }),

  wall: (scheme = 0) => cached('wall' + scheme, () => {
    const [c, g] = canvas(512, 512);
    const schemes = [
      { top: '#c9c6b2', bottom: '#77836a', stripe: '#4e5b4c' },   // classroom / corridor
      { top: '#cfd4c6', bottom: '#9aa7a0', stripe: '#5f6f68' },   // toilets
      { top: '#b9b2a1', bottom: '#6b6152', stripe: '#4c4438' },   // office
      { top: '#c4beac', bottom: '#a49c7f', stripe: '#7a7157' },   // library
      { top: '#a7a79b', bottom: '#5c5f58', stripe: '#414540' },   // boiler
      { top: '#cfc7b4', bottom: '#8f8468', stripe: '#665c45' },   // cafeteria
    ];
    const s = schemes[scheme % schemes.length];
    g.fillStyle = s.top; g.fillRect(0, 0, 512, 512);
    const grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, 'rgba(255,255,255,.06)');
    grad.addColorStop(1, 'rgba(20,25,15,.18)');
    g.fillStyle = grad; g.fillRect(0, 0, 512, 512);
    // wainscot
    g.fillStyle = s.bottom; g.fillRect(0, 330, 512, 182);
    g.fillStyle = 'rgba(255,255,255,.10)'; g.fillRect(0, 324, 512, 6);
    g.fillStyle = s.stripe; g.fillRect(0, 318, 512, 6);
    // scuffs
    const r = rng(3 + scheme);
    for (let i = 0; i < 46; i++) {
      g.globalAlpha = 0.04 + r() * 0.12;
      g.fillStyle = r() > 0.5 ? '#2c2f25' : '#efeee2';
      const x = r() * 512, y = 250 + r() * 250, w = 3 + r() * 40, h = 1 + r() * 6;
      g.fillRect(x, y, w, h);
    }
    // vertical seams
    g.globalAlpha = 0.1; g.fillStyle = '#3c3f34';
    for (let i = 0; i < 4; i++) g.fillRect(i * 128, 0, 1, 512);
    g.globalAlpha = 1;
    return tex(c, 2, 1);
  }),

  tile: () => cached('tile', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#c3c9c2'; g.fillRect(0, 0, 512, 512);
    const n = 16, s = 512 / n;
    const r = rng(77);
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const v = 0.92 + r() * 0.12;
      g.fillStyle = `rgb(${Math.floor(190 * v)},${Math.floor(199 * v)},${Math.floor(190 * v)})`;
      g.fillRect(x * s + 1.5, y * s + 1.5, s - 3, s - 3);
    }
    speckle(g, 512, 512, 400, ['#8b968a', '#e5eae1'], 0.12, 1.4);
    return tex(c, 2, 2);
  }),

  ceiling: () => cached('ceiling', () => {
    const [c, g] = canvas(256, 256);
    g.fillStyle = '#b9bcb2'; g.fillRect(0, 0, 256, 256);
    g.strokeStyle = 'rgba(70,74,68,.35)'; g.lineWidth = 3;
    g.strokeRect(2, 2, 252, 252);
    speckle(g, 256, 256, 500, ['#8f948a', '#d5d8ce'], 0.22, 1.5);
    return tex(c, 6, 6);
  }),

  locker: (num = 1) => cached('locker' + num, () => {
    const [c, g] = canvas(256, 512);
    g.fillStyle = '#4d6f7d'; g.fillRect(0, 0, 256, 512);
    const grad = g.createLinearGradient(0, 0, 256, 0);
    grad.addColorStop(0, 'rgba(255,255,255,.18)');
    grad.addColorStop(0.5, 'rgba(255,255,255,.02)');
    grad.addColorStop(1, 'rgba(0,0,0,.25)');
    g.fillStyle = grad; g.fillRect(0, 0, 256, 512);
    // frame
    g.strokeStyle = 'rgba(10,25,30,.5)'; g.lineWidth = 6; g.strokeRect(3, 3, 250, 506);
    // vents
    g.fillStyle = 'rgba(8,20,25,.55)';
    for (let i = 0; i < 6; i++) g.fillRect(64, 46 + i * 13, 128, 4);
    // handle
    g.fillStyle = '#2c3d42'; g.fillRect(196, 250, 22, 56);
    g.fillStyle = '#9aabb0'; g.fillRect(202, 258, 10, 12);
    // rust/scratches
    const r = rng(num * 31 + 7);
    for (let i = 0; i < 30; i++) {
      g.globalAlpha = 0.08 + r() * 0.16;
      g.fillStyle = r() > 0.5 ? '#a4784f' : '#1e2c31';
      g.fillRect(r() * 256, r() * 512, 1 + r() * 22, 1 + r() * 3);
    }
    g.globalAlpha = 1;
    // number plate
    g.fillStyle = '#d9d6c2'; g.fillRect(48, 402, 160, 52);
    g.fillStyle = '#22281f'; g.font = 'bold 30px Courier New'; g.textAlign = 'center';
    g.fillText(String(num).padStart(3, '0'), 128, 438);
    return tex(c, 1, 1);
  }),

  wood: (dark = false) => cached('wood' + dark, () => {
    const [c, g] = canvas(512, 256);
    g.fillStyle = dark ? '#5b4a37' : '#8a7150'; g.fillRect(0, 0, 512, 256);
    const r = rng(dark ? 12 : 4);
    for (let i = 0; i < 120; i++) {
      g.globalAlpha = 0.05 + r() * 0.12;
      g.strokeStyle = r() > 0.5 ? '#3d2f20' : '#c2a97e';
      g.lineWidth = 1 + r() * 2;
      g.beginPath();
      const y = r() * 256;
      g.moveTo(0, y);
      g.bezierCurveTo(170, y + r() * 14 - 7, 340, y + r() * 14 - 7, 512, y + r() * 8 - 4);
      g.stroke();
    }
    g.globalAlpha = 1;
    return tex(c, 2, 1);
  }),

  blackboard: (variant = 0) => cached('bb' + variant, () => {
    const [c, g] = canvas(1024, 512);
    g.fillStyle = '#1f3429'; g.fillRect(0, 0, 1024, 512);
    const grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, 'rgba(255,255,255,.06)');
    grad.addColorStop(1, 'rgba(0,0,0,.25)');
    g.fillStyle = grad; g.fillRect(0, 0, 1024, 512);
    // chalk smears
    const r = rng(19 + variant);
    for (let i = 0; i < 26; i++) {
      g.globalAlpha = 0.03 + r() * 0.06;
      g.fillStyle = '#dfe9d8';
      g.beginPath(); g.ellipse(r() * 1024, r() * 512, 30 + r() * 90, 10 + r() * 30, r() * 3, 0, 7); g.fill();
    }
    g.globalAlpha = 0.9;
    g.fillStyle = '#e7eee0'; g.textAlign = 'center';
    g.font = 'bold 46px "Courier New"';
    g.fillText(variant === 1 ? 'EXAM RESULTS — PLEASE CRY QUIETLY' : 'MATHEMATICS — PERIOD 4', 512, 90);
    g.font = '34px "Courier New"';
    g.fillText(variant === 1 ? `1) WHAT IS Q?      2) WHY?` : 'Page 394, questions 1–900.', 512, 152);
    g.font = '72px "Courier New"';
    g.fillText(variant === 1 ? 'Q = ?' : '2 + 2 = 4?', 512, 270);
    g.font = '28px "Courier New"';
    g.fillText(variant === 1 ? 'there will be a test on this test.' : 'show your work. or don\u2019t. whatever.', 512, 330);
    g.font = '24px "Courier New"';
    g.fillStyle = 'rgba(231,238,224,.55)';
    g.fillText('(nobody is coming to save you from math)', 512, 410);
    // chalk dust
    g.globalAlpha = 0.25; g.strokeStyle = '#e9f0e2'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(120, 452); g.lineTo(420, 452); g.stroke();
    g.globalAlpha = 1;
    return tex(c, 1, 1);
  }),

  poster: (id = 0) => cached('poster' + id, () => {
    const [c, g] = canvas(420, 580);
    const posters = [
      { bg: '#e3dcc5', ink: '#8f1d23', head: 'NO RUNNING', sub: 'NO SCREAMING\nNO FUN', icon: '☹' },
      { bg: '#d9d5c0', ink: '#27364a', head: 'LOST & FOUND', sub: 'one (1) childhood\nask Mr. Grady', icon: '?' },
      { bg: '#e6dfc9', ink: '#4a5c2a', head: 'MATH CLUB', sub: 'cancelled\n(nobody came)', icon: '∑' },
      { bg: '#e8dbc0', ink: '#7a1d20', head: 'LOCKDOWN', sub: 'DRILL TODAY\n…probably', icon: '!' },
      { bg: '#d6d8c4', ink: '#3b4a3f', head: 'EXAM RESULTS', sub: 'posted at 3pm\nplease cry quietly', icon: '?' },
      { bg: '#ded7bf', ink: '#3f4b5a', head: 'TOILETS', sub: 'out of order\nsince 1998', icon: '✕' },
      { bg: '#e5dcc4', ink: '#5a2f52', head: 'HALL MONITOR', sub: 'OF THE MONTH\nHIM', icon: '☠' },
      { bg: '#dfd9c3', ink: '#2d3a2e', head: 'SCHOOL MOTTO', sub: '“WHAT?”', icon: '★' },
      { bg: '#e7e0c8', ink: '#8a5a1a', head: 'PROM', sub: 'maybe?\nask someone', icon: '♡' },
      { bg: '#e1d9c1', ink: '#33404a', head: 'FIRE EXIT', sub: 'blocked for\nyour safety', icon: '→' },
    ];
    const p = posters[id % posters.length];
    g.fillStyle = p.bg; g.fillRect(0, 0, 420, 580);
    g.fillStyle = 'rgba(0,0,0,.06)';
    g.fillRect(0, 0, 420, 12); g.fillRect(0, 568, 420, 12);
    const r = rng(90 + id);
    for (let i = 0; i < 18; i++) {
      g.globalAlpha = 0.05 + r() * 0.07;
      g.fillStyle = r() > 0.5 ? '#6a6250' : '#fffdf0';
      g.fillRect(r() * 420, r() * 580, 2 + r() * 40, 2 + r() * 18);
    }
    g.globalAlpha = 1;
    g.strokeStyle = p.ink; g.lineWidth = 5; g.strokeRect(16, 16, 388, 548);
    g.fillStyle = p.ink; g.textAlign = 'center';
    g.font = 'bold 24px "Courier New"'; g.fillText('MILLBROOK HIGH', 210, 78);
    g.font = '88px "Courier New"'; g.fillText(p.icon, 210, 220);
    g.font = 'bold 40px "Courier New"';
    const words = p.head.split(' ');
    words.forEach((w, i) => g.fillText(w, 210, 300 + i * 44));
    g.font = '24px "Courier New"'; g.fillStyle = '#2b2d24';
    p.sub.split('\n').forEach((l, i) => g.fillText(l, 210, 432 + i * 34));
    g.font = '14px "Courier New"'; g.fillStyle = 'rgba(40,40,30,.5)';
    g.fillText('— SCHOOL ADMINISTRATION (?)', 210, 538);
    // tape corners
    g.fillStyle = 'rgba(240,235,205,.7)';
    g.fillRect(-6, 8, 70, 26); g.fillRect(356, 8, 70, 26);
    g.fillRect(-6, 546, 70, 26); g.fillRect(356, 546, 70, 26);
    return tex(c, 1, 1);
  }),

  window: () => cached('window', () => {
    const [c, g] = canvas(512, 512);
    const grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, '#101b2d'); grad.addColorStop(0.55, '#182a3c'); grad.addColorStop(1, '#0a1018');
    g.fillStyle = grad; g.fillRect(0, 0, 512, 512);
    // moon
    const mg = g.createRadialGradient(120, 100, 4, 120, 100, 90);
    mg.addColorStop(0, 'rgba(230,240,255,.9)'); mg.addColorStop(0.25, 'rgba(180,205,230,.35)'); mg.addColorStop(1, 'rgba(150,180,220,0)');
    g.fillStyle = mg; g.fillRect(0, 0, 512, 512);
    g.fillStyle = '#dfe9f2'; g.beginPath(); g.arc(120, 100, 26, 0, 7); g.fill();
    // clouds
    g.fillStyle = 'rgba(60,80,100,.35)';
    for (let i = 0; i < 5; i++) {
      g.beginPath(); g.ellipse(90 + i * 90, 90 + i * 12, 80, 16, 0, 0, 7); g.fill();
    }
    // trees
    g.fillStyle = '#060b0c';
    for (let i = 0; i < 10; i++) {
      const x = i * 55 + 20, h = 120 + (i % 4) * 50;
      g.beginPath(); g.moveTo(x, 512); g.lineTo(x + 20, 512 - h); g.lineTo(x + 46, 512); g.fill();
    }
    // glass streaks
    for (let i = 0; i < 16; i++) {
      g.globalAlpha = 0.05 + Math.random() * 0.06;
      g.strokeStyle = '#cfe6ff'; g.lineWidth = 1 + Math.random() * 2;
      g.beginPath(); g.moveTo(Math.random() * 512, 0); g.lineTo(Math.random() * 512, 512); g.stroke();
    }
    g.globalAlpha = 1;
    return tex(c, 1, 1);
  }),

  exitSign: () => cached('exit', () => {
    const [c, g] = canvas(256, 96);
    g.fillStyle = '#10552a'; g.fillRect(0, 0, 256, 96);
    g.fillStyle = '#7dffab'; g.font = 'bold 54px Arial Black'; g.textAlign = 'center';
    g.fillText('EXIT', 128, 68);
    return tex(c, 1, 1);
  }),

  metal: (dark = false) => cached('metal' + dark, () => {
    const [c, g] = canvas(256, 256);
    g.fillStyle = dark ? '#3c4244' : '#6b7375'; g.fillRect(0, 0, 256, 256);
    speckle(g, 256, 256, 700, ['#22282a', '#a4acae', '#804d2c'], 0.25, 2);
    const r = rng(dark ? 5 : 8);
    for (let i = 0; i < 10; i++) {
      g.globalAlpha = 0.3;
      g.fillStyle = '#1e2426';
      g.beginPath(); g.arc(40 + r() * 180, 40 + r() * 180, 2 + r() * 4, 0, 7); g.fill();
    }
    g.globalAlpha = 1;
    return tex(c, 1, 1);
  }),

  paper: () => cached('paper', () => {
    const [c, g] = canvas(256, 340);
    g.fillStyle = '#e6dfc9'; g.fillRect(0, 0, 256, 340);
    g.fillStyle = '#bdb49a';
    for (let i = 0; i < 9; i++) g.fillRect(26, 46 + i * 30, 150 + (i % 3) * 30, 2);
    g.fillStyle = '#8d2a2a'; g.font = 'bold 18px Courier New';
    g.fillText('DETENTION', 26, 30);
    g.fillStyle = 'rgba(60,60,45,.25)';
    g.fillRect(0, 320, 256, 20);
    return tex(c, 1, 1);
  }),

  books: () => cached('books', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#34281f'; g.fillRect(0, 0, 512, 512);
    const cols = ['#6b2a2a', '#2a4a5c', '#5c572a', '#403063', '#38502f', '#6b4a24', '#71434a'];
    const r = rng(13);
    for (let row = 0; row < 7; row++) {
      let x = 4;
      while (x < 508) {
        const w = 12 + r() * 22;
        const h = 44 + r() * 16;
        g.fillStyle = cols[(r() * cols.length) | 0];
        g.fillRect(x, row * 74 + (66 - h), w, h);
        g.fillStyle = 'rgba(240,225,180,.55)';
        g.fillRect(x + 2, row * 74 + (66 - h) + 8, w - 4, 2);
        x += w + 2;
      }
      g.fillStyle = '#1e1712'; g.fillRect(0, row * 74 + 66, 512, 8);
    }
    return tex(c, 1, 1);
  }),

  facadeWindow: () => cached('facadeWindow', () => {
    const [c, g] = canvas(256, 256);
    // interior warm glow, cold night reflection
    const grad = g.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0, '#243242'); grad.addColorStop(0.55, '#1a2532'); grad.addColorStop(1, '#0e151d');
    g.fillStyle = grad; g.fillRect(0, 0, 256, 256);
    const warm = g.createRadialGradient(128, 210, 10, 128, 210, 170);
    warm.addColorStop(0, 'rgba(255,206,132,.72)'); warm.addColorStop(0.55, 'rgba(210,150,80,.23)'); warm.addColorStop(1, 'rgba(120,90,60,0)');
    g.fillStyle = warm; g.fillRect(0, 0, 256, 256);
    // cheap classroom silhouettes: desks and a board
    g.fillStyle = 'rgba(28,45,38,.72)'; g.fillRect(38, 72, 180, 52);
    g.fillStyle = 'rgba(210,225,205,.08)'; g.fillRect(44, 78, 168, 40);
    for (let i = 0; i < 3; i++) {
      g.fillStyle = 'rgba(12,18,20,.72)';
      g.fillRect(28 + i * 76, 162, 54, 14);
      g.fillRect(36 + i * 76, 176, 8, 26);
      g.fillRect(70 + i * 76, 176, 8, 26);
    }
    // glass highlight
    g.globalAlpha = 0.16; g.fillStyle = '#dcecff';
    g.beginPath(); g.moveTo(0, 110); g.lineTo(90, 0); g.lineTo(150, 0); g.lineTo(0, 190); g.fill();
    g.globalAlpha = 1;
    // frame + mullions
    g.strokeStyle = '#1a1e20'; g.lineWidth = 16; g.strokeRect(8, 8, 240, 240);
    g.lineWidth = 9;
    g.beginPath(); g.moveTo(128, 10); g.lineTo(128, 246); g.moveTo(10, 128); g.lineTo(246, 128); g.stroke();
    g.strokeStyle = 'rgba(180,195,190,.16)'; g.lineWidth = 2;
    g.strokeRect(16, 16, 224, 224);
    return tex(c, 1, 1);
  }),

  brick: () => cached('brick', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#6b5b4b'; g.fillRect(0, 0, 512, 512);
    const r = rng(31);
    const bh = 32, bw = 64;
    for (let row = 0; row < 16; row++) {
      const off = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < 9; col++) {
        const v = 0.85 + r() * 0.3;
        g.fillStyle = `rgb(${Math.floor(104 * v)},${Math.floor(84 * v)},${Math.floor(67 * v)})`;
        g.fillRect(col * bw + off + 2, row * bh + 2, bw - 4, bh - 4);
      }
    }
    speckle(g, 512, 512, 900, ['#3f342a', '#8f7a63', '#5a4a3c'], 0.18, 2);
    return tex(c, 3, 3);
  }),

  asphalt: () => cached('asphalt', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#292c2c'; g.fillRect(0, 0, 512, 512);
    speckle(g, 512, 512, 4200, ['#1a1d1d', '#404646', '#545a56'], 0.4, 2.2);
    const r = rng(12);
    for (let i = 0; i < 12; i++) {
      g.strokeStyle = `rgba(12,14,14,${0.2 + r() * 0.2})`; g.lineWidth = 1 + r() * 2;
      g.beginPath(); g.moveTo(r() * 512, r() * 512); g.bezierCurveTo(r() * 512, r() * 512, r() * 512, r() * 512, r() * 512, r() * 512); g.stroke();
    }
    return tex(c, 8, 3);
  }),

  grass: () => cached('grass', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#26352a'; g.fillRect(0, 0, 512, 512);
    const r = rng(15);
    for (let i = 0; i < 7000; i++) {
      g.strokeStyle = `rgba(${40 + r() * 40},${60 + r() * 60},${40 + r() * 30},${0.3 + r() * 0.5})`;
      g.lineWidth = 1;
      const x = r() * 512, y = r() * 512;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + r() * 3, y - 3 - r() * 6); g.stroke();
    }
    return tex(c, 10, 4);
  }),

  curtain: () => cached('curtain', () => {
    const [c, g] = canvas(512, 512);
    g.fillStyle = '#5c1d24'; g.fillRect(0, 0, 512, 512);
    for (let x = 0; x < 512; x += 32) {
      const gr = g.createLinearGradient(x, 0, x + 32, 0);
      gr.addColorStop(0, 'rgba(150,40,55,.35)'); gr.addColorStop(0.5, 'rgba(30,5,10,.3)'); gr.addColorStop(1, 'rgba(120,30,45,.25)');
      g.fillStyle = gr; g.fillRect(x, 0, 32, 512);
    }
    return tex(c, 2, 1);
  }),

  chalkboardPoster: () => cached('chalkposter', () => {
    const [c, g] = canvas(512, 640);
    g.fillStyle = '#e6dfc9'; g.fillRect(0, 0, 512, 640);
    g.strokeStyle = '#283a2d'; g.lineWidth = 8; g.strokeRect(18, 18, 476, 604);
    g.fillStyle = '#283a2d'; g.textAlign = 'center';
    g.font = 'bold 34px Courier New'; g.fillText('HALL PASS', 256, 96);
    g.font = '22px Courier New';
    g.fillText('This pass entitles the bearer', 256, 160);
    g.fillText('to walk the halls unsupervised', 256, 192);
    g.fillText('for exactly 4 minutes.', 256, 224);
    g.font = 'bold 90px Courier New'; g.fillText('203', 256, 350);
    g.font = '18px Courier New'; g.fillText('(has expired)', 256, 396);
    g.font = 'bold 24px Courier New'; g.fillText('SIGNED: THE HALL MONITOR', 256, 500);
    return tex(c, 1, 1);
  }),

  stall: (n = 0) => cached('stall' + n, () => {
    const [c, g] = canvas(256, 512);
    g.fillStyle = '#647a72'; g.fillRect(0, 0, 256, 512);
    const grad = g.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, 'rgba(255,255,255,.16)'); grad.addColorStop(1, 'rgba(0,0,0,.28)');
    g.fillStyle = grad; g.fillRect(0, 0, 256, 512);
    g.strokeStyle = 'rgba(20,30,25,.5)'; g.lineWidth = 5; g.strokeRect(4, 4, 248, 504);
    g.fillStyle = 'rgba(20,30,25,.35)';
    for (let i = 0; i < 8; i++) g.fillRect(32, 60 + i * 52, 192, 3);
    // graffiti
    g.fillStyle = 'rgba(20,20,15,.65)'; g.font = 'bold 20px Courier New'; g.textAlign = 'left';
    const gags = ['Q?', 'HELP', '4+4=ATE', 'JAKE WAS HERE', 'NO WAY OUT', 'MATH SUX', 'Z+'];
    g.fillText(gags[n % gags.length], 36, 300);
    g.font = '14px Courier New';
    g.fillText('(the hall monitor can read this)', 30, 326);
    return tex(c, 1, 1);
  }),
};

export function makeGlowTexture(color = '#8dffb2') {
  const [c, g] = canvas(128, 128);
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, color);
  gr.addColorStop(0.25, color + 'aa');
  gr.addColorStop(1, color + '00');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
