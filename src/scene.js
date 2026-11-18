import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const LANE_COLORS = [
  '#4ff2ff', '#43d8ff', '#6aa8ff', '#9a86ff',
  '#c477ff', '#ff79dc', '#ff7fb5', '#ffb06e',
];

const SPACING = 1.75;
const ARC = 0.015;

// ---------------------------------------------------------------- textures
function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}
function tex(c) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function glowTexture() {
  const [c, x] = canvas(128, 128);
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.22, 'rgba(255,255,255,.75)');
  g.addColorStop(0.55, 'rgba(255,255,255,.18)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return tex(c);
}
function ringTexture() {
  const [c, x] = canvas(512, 512);
  const cx = 256;
  x.translate(cx, cx);
  // soft halo
  const halo = x.createRadialGradient(0, 0, 110, 0, 0, 250);
  halo.addColorStop(0, 'rgba(255,255,255,0)');
  halo.addColorStop(0.55, 'rgba(255,255,255,.03)');
  halo.addColorStop(0.76, 'rgba(255,255,255,.14)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = halo; x.beginPath(); x.arc(0, 0, 252, 0, Math.PI * 2); x.fill();

  // dashed crown
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.55)';
  x.lineWidth = 4;
  x.setLineDash([32, 30]);
  x.shadowColor = '#fff';
  x.shadowBlur = 14;
  x.beginPath(); x.arc(0, 0, 227, 0, Math.PI * 2); x.stroke();
  x.restore();

  // main thick ring
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.98)';
  x.lineWidth = 15;
  x.shadowColor = '#fff';
  x.shadowBlur = 26;
  x.beginPath(); x.arc(0, 0, 174, 0, Math.PI * 2); x.stroke();
  x.restore();

  // inner fine ring
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.42)';
  x.lineWidth = 3;
  x.beginPath(); x.arc(0, 0, 126, 0, Math.PI * 2); x.stroke();
  x.restore();

  // cardinal ticks
  for (let i = 0; i < 4; i++) {
    x.save(); x.rotate(i * Math.PI / 2);
    x.strokeStyle = 'rgba(255,255,255,.9)'; x.lineWidth = 5;
    x.shadowColor = '#fff'; x.shadowBlur = 12;
    x.beginPath(); x.moveTo(0, -226); x.lineTo(0, -196); x.stroke();
    x.restore();
  }
  // center dot
  x.save();
  x.fillStyle = 'rgba(255,255,255,.85)';
  x.shadowColor = '#fff'; x.shadowBlur = 20;
  x.beginPath(); x.arc(0, 0, 5, 0, Math.PI * 2); x.fill();
  x.restore();
  return tex(c);
}
function laneLineTexture() {
  const [c, x] = canvas(96, 1024);
  const grad = x.createLinearGradient(0, 1024, 0, 0);
  grad.addColorStop(0, 'rgba(255,255,255,.95)');
  grad.addColorStop(0.35, 'rgba(255,255,255,.55)');
  grad.addColorStop(0.78, 'rgba(255,255,255,.18)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  x.strokeStyle = grad;
  x.lineWidth = 7;
  x.shadowColor = '#fff';
  x.shadowBlur = 22;
  x.beginPath(); x.moveTo(48, 1024); x.lineTo(48, 6); x.stroke();
  x.shadowBlur = 6;
  x.lineWidth = 2;
  x.strokeStyle = 'rgba(255,255,255,.95)';
  x.beginPath(); x.moveTo(48, 1024); x.lineTo(48, 6); x.stroke();
  return tex(c);
}
function beamTexture() {
  const [c, x] = canvas(192, 1024);
  const g = x.createLinearGradient(0, 1024, 0, 0);
  g.addColorStop(0, 'rgba(255,255,255,.34)');
  g.addColorStop(0.5, 'rgba(255,255,255,.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 192, 1024);
  const h = x.createLinearGradient(0, 0, 192, 0);
  h.addColorStop(0, 'rgba(255,255,255,0)');
  h.addColorStop(0.32, 'rgba(255,255,255,.5)');
  h.addColorStop(0.5, 'rgba(255,255,255,1)');
  h.addColorStop(0.68, 'rgba(255,255,255,.5)');
  h.addColorStop(1, 'rgba(255,255,255,0)');
  x.globalCompositeOperation = 'destination-in';
  x.fillStyle = h; x.fillRect(0, 0, 192, 1024);
  return tex(c);
}
function noteTexture() {
  const [c, x] = canvas(256, 256);
  const cx = 128;
  x.translate(cx, cx);
  // soft halo so the note reads as a glowing orb at distance
  const halo = x.createRadialGradient(0, 0, 18, 0, 0, 124);
  halo.addColorStop(0, 'rgba(255,255,255,.62)');
  halo.addColorStop(0.45, 'rgba(255,255,255,.2)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = halo; x.beginPath(); x.arc(0, 0, 124, 0, Math.PI * 2); x.fill();

  // main circle: the note mirrors the ring that marks the hit position
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.98)';
  x.lineWidth = 17;
  x.shadowColor = '#fff'; x.shadowBlur = 28;
  x.beginPath(); x.arc(0, 0, 84, 0, Math.PI * 2); x.stroke();
  x.restore();

  // thin inner orbit
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.5)';
  x.lineWidth = 4;
  x.shadowColor = '#fff'; x.shadowBlur = 10;
  x.beginPath(); x.arc(0, 0, 56, 0, Math.PI * 2); x.stroke();
  x.restore();

  // bright core
  const core = x.createRadialGradient(0, 0, 0, 0, 0, 30);
  core.addColorStop(0, 'rgba(255,255,255,1)');
  core.addColorStop(0.55, 'rgba(255,255,255,.75)');
  core.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = core;
  x.beginPath(); x.arc(0, 0, 30, 0, Math.PI * 2); x.fill();

  // four cardinal ticks, echoing the hit ring
  for (let i = 0; i < 4; i++) {
    x.save(); x.rotate(i * Math.PI / 2);
    x.strokeStyle = 'rgba(255,255,255,.9)';
    x.lineWidth = 5;
    x.shadowColor = '#fff'; x.shadowBlur = 12;
    x.beginPath(); x.moveTo(0, -122); x.lineTo(0, -100); x.stroke();
    x.restore();
  }
  return tex(c);
}
function holdTexture() {
  const [c, x] = canvas(128, 512);
  const g = x.createLinearGradient(0, 0, 128, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.22, 'rgba(255,255,255,.35)');
  g.addColorStop(0.5, 'rgba(255,255,255,.95)');
  g.addColorStop(0.78, 'rgba(255,255,255,.35)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 512);
  x.fillStyle = 'rgba(255,255,255,.95)'; x.shadowColor = '#fff'; x.shadowBlur = 18;
  x.fillRect(48, 0, 32, 512);
  // soft ends
  const v = x.createLinearGradient(0, 0, 0, 512);
  v.addColorStop(0, 'rgba(255,255,255,0)');
  v.addColorStop(0.08, 'rgba(255,255,255,1)');
  v.addColorStop(0.92, 'rgba(255,255,255,1)');
  v.addColorStop(1, 'rgba(255,255,255,0)');
  x.globalCompositeOperation = 'destination-in';
  x.fillStyle = v; x.fillRect(0, 0, 128, 512);
  return tex(c);
}
function hitLineTexture() {
  const [c, x] = canvas(1024, 128);
  const g = x.createLinearGradient(0, 0, 1024, 0);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(0.06, 'rgba(255,255,255,.4)');
  g.addColorStop(0.5, 'rgba(255,255,255,1)');
  g.addColorStop(0.94, 'rgba(255,255,255,.4)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.strokeStyle = g; x.lineWidth = 7;
  x.shadowColor = '#fff'; x.shadowBlur = 26;
  x.beginPath(); x.moveTo(0, 64); x.lineTo(1024, 64); x.stroke();
  x.lineWidth = 2; x.shadowBlur = 6;
  x.beginPath(); x.moveTo(0, 64); x.lineTo(1024, 64); x.stroke();
  return tex(c);
}
function cityTexture(seed, horizon) {
  const [c, x] = canvas(2048, 512);
  let s = seed >>> 0;
  const rand = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  x.clearRect(0, 0, 2048, 512);
  // atmospheric haze behind the silhouette
  const haze = x.createLinearGradient(0, 150, 0, 512);
  haze.addColorStop(0, 'rgba(80,190,255,0)');
  haze.addColorStop(0.7, 'rgba(60,150,255,.09)');
  haze.addColorStop(1, 'rgba(255,110,200,.08)');
  x.fillStyle = haze; x.fillRect(0, 0, 2048, 512);

  let px = -40;
  while (px < 2088) {
    const w = 24 + Math.floor(rand() * 74);
    const h = 90 + Math.floor(rand() * 300);
    const top = 512 - h;
    x.save();
    // dark block mass keeps buildings readable over the nebula
    x.fillStyle = 'rgba(3,8,24,.82)';
    x.fillRect(px, top, w, h);
    // neon rim
    x.strokeStyle = rand() < 0.28 ? 'rgba(255,120,200,.7)' : 'rgba(70,210,255,.55)';
    x.lineWidth = 2;
    x.shadowColor = x.strokeStyle; x.shadowBlur = 10;
    x.strokeRect(px + 1, top + 1, w - 2, h - 2);
    x.shadowBlur = 0;
    // lit windows
    const cols = Math.max(1, Math.floor((w - 10) / 12));
    const rows = Math.max(2, Math.floor((h - 16) / 17));
    for (let ry = 0; ry < rows; ry++) {
      for (let cx = 0; cx < cols; cx++) {
        if (rand() < 0.64) continue;
        x.fillStyle = rand() < 0.22
          ? 'rgba(255,205,130,.9)'
          : rand() < 0.5 ? 'rgba(120,235,255,.85)' : 'rgba(255,120,195,.8)';
        x.fillRect(px + 6 + cx * 12, top + 9 + ry * 17, 4, 6);
      }
    }
    // antenna / roof light
    if (rand() < 0.45) {
      x.strokeStyle = 'rgba(150,225,255,.65)'; x.lineWidth = 1;
      x.beginPath(); x.moveTo(px + w * 0.5, top); x.lineTo(px + w * 0.5, top - 18 - rand() * 34); x.stroke();
      x.fillStyle = 'rgba(255,90,150,.95)';
      x.fillRect(px + w * 0.5 - 1.5, top - 22 - rand() * 30, 3, 3);
    }
    x.restore();
    px += w + 3 + Math.floor(rand() * 11);
  }
  if (horizon) {
    const g = x.createLinearGradient(0, 360, 0, 512);
    g.addColorStop(0, 'rgba(255,140,90,0)');
    g.addColorStop(1, 'rgba(255,140,90,.12)');
    x.fillStyle = g; x.fillRect(0, 300, 2048, 212);
  }
  const t = tex(c);
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

function clockFaceTexture() {
  const [c, x] = canvas(1024, 1024);
  x.translate(512, 512);
  const haze = x.createRadialGradient(0, 0, 60, 0, 0, 505);
  haze.addColorStop(0, 'rgba(255,255,255,.03)');
  haze.addColorStop(0.55, 'rgba(255,255,255,.01)');
  haze.addColorStop(0.82, 'rgba(255,255,255,.08)');
  haze.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = haze;
  x.beginPath(); x.arc(0, 0, 505, 0, Math.PI * 2); x.fill();

  // outer and inner rims
  x.save();
  x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 5;
  x.shadowColor = '#fff'; x.shadowBlur = 28;
  x.beginPath(); x.arc(0, 0, 470, 0, Math.PI * 2); x.stroke();
  x.strokeStyle = 'rgba(255,255,255,.2)'; x.lineWidth = 2;
  x.beginPath(); x.arc(0, 0, 440, 0, Math.PI * 2); x.stroke();
  x.strokeStyle = 'rgba(255,255,255,.13)'; x.lineWidth = 2;
  x.setLineDash([7, 18]);
  x.beginPath(); x.arc(0, 0, 344, 0, Math.PI * 2); x.stroke();
  x.restore();

  // 60 minute ticks, with heavier hour marks
  for (let i = 0; i < 60; i++) {
    const hour = i % 5 === 0;
    x.save();
    x.rotate(i * Math.PI / 30);
    x.strokeStyle = hour ? 'rgba(255,255,255,.92)' : 'rgba(255,255,255,.3)';
    x.lineWidth = hour ? 7 : 2;
    x.shadowColor = '#fff'; x.shadowBlur = hour ? 18 : 7;
    x.beginPath();
    x.moveTo(0, -468);
    x.lineTo(0, -(hour ? 414 : 444));
    x.stroke();
    x.restore();
  }

  // four cardinal diamonds make the face read as a clock, not an orbit ring
  for (let i = 0; i < 4; i++) {
    x.save();
    x.rotate(i * Math.PI / 2);
    x.fillStyle = 'rgba(255,255,255,.82)';
    x.shadowColor = '#fff'; x.shadowBlur = 22;
    x.beginPath();
    x.moveTo(0, -500); x.lineTo(13, -516); x.lineTo(0, -532); x.lineTo(-13, -516);
    x.closePath(); x.fill();
    x.restore();
  }

  return tex(c);
}

function clockDialTexture() {
  const [c, x] = canvas(512, 512);
  x.translate(256, 256);

  const halo = x.createRadialGradient(0, 0, 40, 0, 0, 250);
  halo.addColorStop(0, 'rgba(255,255,255,.05)');
  halo.addColorStop(0.7, 'rgba(255,255,255,.02)');
  halo.addColorStop(0.92, 'rgba(255,255,255,.16)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = halo;
  x.beginPath(); x.arc(0, 0, 250, 0, Math.PI * 2); x.fill();

  x.strokeStyle = 'rgba(255,255,255,.42)'; x.lineWidth = 2;
  x.beginPath(); x.arc(0, 0, 206, 0, Math.PI * 2); x.stroke();

  // 12 hour notches plus a bright pointer blade, so the spin reads clearly.
  for (let i = 0; i < 12; i++) {
    const major = i % 3 === 0;
    x.save();
    x.rotate(i * Math.PI / 6);
    x.strokeStyle = major ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.3)';
    x.lineWidth = major ? 4 : 1.5;
    x.beginPath(); x.moveTo(0, -204); x.lineTo(0, major ? -172 : -188); x.stroke();
    x.restore();
  }
  x.save();
  x.shadowColor = '#fff'; x.shadowBlur = 22;
  x.fillStyle = 'rgba(255,255,255,.95)';
  x.beginPath();
  x.moveTo(-7, -16); x.lineTo(0, -196); x.lineTo(7, -16);
  x.closePath(); x.fill();
  x.beginPath(); x.arc(0, 0, 11, 0, Math.PI * 2); x.fill();
  x.restore();
  return tex(c);
}

function clockHandTexture() {
  const [c, x] = canvas(128, 1024);
  // A tapered light blade: wide at the hub, needle-sharp at the tip.
  const g = x.createLinearGradient(0, 1024, 0, 0);
  g.addColorStop(0, 'rgba(255,255,255,.6)');
  g.addColorStop(0.5, 'rgba(255,255,255,.95)');
  g.addColorStop(0.9, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,.2)');
  x.fillStyle = g;
  x.shadowColor = '#fff'; x.shadowBlur = 22;
  x.beginPath();
  x.moveTo(64 - 17, 1010);
  x.lineTo(64 - 6, 120);
  x.lineTo(64, 34);
  x.lineTo(64 + 6, 120);
  x.lineTo(64 + 17, 1010);
  x.closePath();
  x.fill();
  // bright counterweight and tip
  x.shadowBlur = 28;
  x.fillStyle = 'rgba(255,255,255,1)';
  x.beginPath(); x.arc(64, 72, 15, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.arc(64, 942, 20, 0, Math.PI * 2); x.fill();
  return tex(c);
}

function floatNoteTexture() {
  const [c, x] = canvas(256, 256);
  x.translate(128, 128);
  x.shadowColor = '#fff';
  x.shadowBlur = 26;
  x.fillStyle = 'rgba(255,255,255,.98)';
  x.save();
  x.rotate(-0.22);
  // note head
  x.beginPath();
  x.ellipse(-8, 56, 30, 21, -0.18, 0, Math.PI * 2);
  x.fill();
  // stem
  x.fillRect(16, -84, 8, 140);
  // flag
  x.beginPath();
  x.moveTo(24, -84);
  x.bezierCurveTo(82, -62, 86, 6, 38, 32);
  x.bezierCurveTo(68, -6, 56, -50, 24, -60);
  x.closePath();
  x.fill();
  x.restore();
  return tex(c);
}

function pendulumRodTexture() {
  const [c, x] = canvas(64, 1024);
  const g = x.createLinearGradient(0, 0, 64, 0);
  g.addColorStop(0, 'rgba(255,255,255,.06)');
  g.addColorStop(0.38, 'rgba(255,255,255,.62)');
  g.addColorStop(0.52, 'rgba(255,255,255,1)');
  g.addColorStop(0.66, 'rgba(255,255,255,.58)');
  g.addColorStop(1, 'rgba(255,255,255,.06)');
  x.fillStyle = g;
  x.shadowColor = '#fff';
  x.shadowBlur = 12;
  x.fillRect(27, 26, 10, 972);
  // finial at the bob end and the pivot counterweight
  x.shadowBlur = 22;
  x.beginPath(); x.arc(32, 44, 15, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.arc(32, 982, 25, 0, Math.PI * 2); x.fill();
  x.strokeStyle = 'rgba(255,255,255,.8)';
  x.lineWidth = 3;
  x.beginPath(); x.arc(32, 982, 25, 0, Math.PI * 2); x.stroke();
  return tex(c);
}

// ---------------------------------------------------------------- scene
export function createScene(canvasEl) {
  const isMobile = matchMedia('(pointer: coarse)').matches;
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl, antialias: !isMobile, powerPreference: 'high-performance',
    alpha: false, stencil: false,
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isMobile ? 1.45 : 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x03030b);
  scene.fog = new THREE.FogExp2(0x03030b, 0.0115);

  const camera = new THREE.PerspectiveCamera(46, innerWidth / innerHeight, 0.1, 240);
  camera.position.set(0, 6.7, 17.2);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 1.0, 0.62, 0.22);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  // shared textures
  const TEX = {
    glow: glowTexture(), ring: ringTexture(), line: laneLineTexture(),
    beam: beamTexture(), note: noteTexture(), hold: holdTexture(), hitline: hitLineTexture(),
    cityFar: cityTexture(0x1f3c5a, false), cityNear: cityTexture(0x6b2a44, true),
    clockFace: clockFaceTexture(), clockHand: clockHandTexture(), clockDial: clockDialTexture(),
    floatNote: floatNoteTexture(), pendulumRod: pendulumRodTexture(),
  };

  // ------------------------------------------------------------ background
  const bg = new THREE.Group();
  scene.add(bg);

  function makeStars(count, radius, size, color, opacity) {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius + Math.random() * radius * 1.8;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pos[i * 3 + 1] = r * Math.cos(ph) * 0.55 + 3;
      pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th) - 20;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({
      size, map: TEX.glow, color, transparent: true, opacity,
      depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    });
    const p = new THREE.Points(g, m);
    bg.add(p);
    return p;
  }
  const stars = makeStars(1500, 34, 0.32, 0x9cd8ff, 0.7);
  const stars2 = makeStars(650, 70, 0.55, 0xb99cff, 0.5);
  const dust = makeStars(220, 14, 0.09, 0x7ce9ff, 0.45);

  // nebulae
  function nebula(x, y, z, size, color, opacity) {
    const m = new THREE.SpriteMaterial({
      map: TEX.glow, color, transparent: true, opacity,
      depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const s = new THREE.Sprite(m);
    s.position.set(x, y, z); s.scale.set(size, size, 1);
    bg.add(s); return s;
  }
  const neb1 = nebula(-16, 9, -34, 46, 0x1b4cff, 0.18);
  const neb2 = nebula(18, 1, -40, 54, 0x8e1fff, 0.14);
  const neb3 = nebula(0, 12, -26, 30, 0xff2fa0, 0.07);

  // distant rings
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x4b8dff, wireframe: true, transparent: true, opacity: 0.055, fog: false,
  });
  const bgRings = [];
  for (let i = 0; i < 3; i++) {
    const t = new THREE.Mesh(new THREE.TorusGeometry(12 + i * 6.5, 0.045, 3, 120), ringMat.clone());
    t.position.set(0, 5, -26 - i * 7);
    t.rotation.set(0.9 + i * 0.16, i * 0.3, 0);
    bg.add(t); bgRings.push(t);
  }

  // floor grid
  const grid = new THREE.GridHelper(90, 45, 0x1ba5d8, 0x13245a);
  grid.position.y = -3.6;
  grid.material.transparent = true;
  grid.material.opacity = 0.16;
  grid.material.depthWrite = false;
  bg.add(grid);

  // floating shards
  const shards = [];
  for (let i = 0; i < 14; i++) {
    const geo = i % 2 ? new THREE.IcosahedronGeometry(0.5 + Math.random() * 0.8, 0)
      : new THREE.OctahedronGeometry(0.5 + Math.random() * 0.7, 0);
    const mat = new THREE.MeshBasicMaterial({
      color: i % 3 ? 0x58ddff : 0xff6fd8, wireframe: true,
      transparent: true, opacity: 0.055 + Math.random() * 0.05, fog: false,
    });
    const m = new THREE.Mesh(geo, mat);
    const sx = i % 2 ? 1 : -1;
    m.position.set(sx * (9 + Math.random() * 10), 0.5 + Math.random() * 9, -6 - Math.random() * 14);
    m.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    m.userData.spin = new THREE.Vector3((Math.random() - .5) * .3, (Math.random() - .5) * .4, (Math.random() - .5) * .2);
    bg.add(m); shards.push(m);
  }

  // ------------------------------------------------------------ city skyline
  // A pair of parallax skyline planes. They are procedural textures, so the
  // whole city is only two draw calls; it scrolls behind the field for the
  // intro / breakdown of the second track without touching the frame budget.
  const cityGroup = new THREE.Group();
  cityGroup.position.z = -1;
  bg.add(cityGroup);
  const cityLayers = [];
  function cityLayer(map, width, height, x, y, z, color) {
    const mat = new THREE.MeshBasicMaterial({
      map, color, transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
    mesh.position.set(x, y, z);
    mesh.renderOrder = -2;
    cityGroup.add(mesh);
    cityLayers.push({ mesh, mat, map, base: y, speed: 0 });
    return mesh;
  }
  cityLayer(TEX.cityFar, 150, 42, -24, 19, -54, 0xa8e4ff);
  cityLayer(TEX.cityNear, 118, 34, 38, 12, -36, 0xffc2a0);
  cityLayers[0].speed = 0.0028;
  cityLayers[1].speed = 0.0062;
  cityGroup.visible = false;

  // ------------------------------------------------------------ stage
  const stage = new THREE.Group();
  scene.add(stage);
  const laneRoot = new THREE.Group();
  stage.add(laneRoot);
  const noteRoot = new THREE.Group();
  noteRoot.renderOrder = 5;
  stage.add(noteRoot);

  // horizontal hit line
  const hitLineMat = new THREE.SpriteMaterial({
    map: TEX.hitline, color: 0x9ff5ff, transparent: true, opacity: 0.8,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const hitLine = new THREE.Sprite(hitLineMat);
  hitLine.position.set(0, 0.02, 0.25);
  hitLine.scale.set(13.2, 0.9, 1);
  hitLine.renderOrder = 2;
  stage.add(hitLine);

  const lanes = [];
  const baseX = [];
  for (let i = 0; i < 8; i++) {
    const x = (i - 3.5) * SPACING;
    baseX.push(x);
    const z = ARC * x * x;
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    laneRoot.add(g);

    const color = new THREE.Color(LANE_COLORS[i]);

    const beamMat = new THREE.SpriteMaterial({
      map: TEX.beam, color: color.clone(), transparent: true, opacity: 0.08,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const beam = new THREE.Sprite(beamMat);
    beam.center.set(0.5, 0);
    beam.position.set(0, 0.04, -0.02);
    beam.scale.set(1.16, 12.6, 1);
    beam.renderOrder = 0;
    g.add(beam);

    const lineMat = new THREE.SpriteMaterial({
      map: TEX.line, color: color.clone(), transparent: true, opacity: 0.62,
      depthWrite: false, depthTest: false, blending: THREE.NormalBlending, fog: false,
    });
    const line = new THREE.Sprite(lineMat);
    line.center.set(0.5, 0);
    line.position.set(0, 0.04, 0.02);
    line.scale.set(0.36, 12.4, 1);
    line.renderOrder = 1;
    g.add(line);

    const ringMat = new THREE.SpriteMaterial({
      map: TEX.ring, color: color.clone(), transparent: true, opacity: 0.95,
      depthWrite: false, depthTest: false, blending: THREE.NormalBlending, fog: false,
    });
    const ring = new THREE.Sprite(ringMat);
    ring.position.set(0, 0.02, 0.22);
    ring.scale.set(1.65, 1.65, 1);
    ring.renderOrder = 3;
    g.add(ring);

    // soft glow under the ring
    const glowMat = new THREE.SpriteMaterial({
      map: TEX.glow, color: color.clone(), transparent: true, opacity: 0.13,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const glow = new THREE.Sprite(glowMat);
    glow.position.set(0, -0.02, 0.18);
    glow.scale.set(2.2, 2.2, 1);
    glow.renderOrder = 2;
    g.add(glow);

    // a soft light packet that climbs a hidden lane during a charted flourish
    const ghostMat = new THREE.SpriteMaterial({
      map: TEX.glow, color: color.clone().lerp(new THREE.Color(0xffffff), 0.25),
      transparent: true, opacity: 0, depthWrite: false, depthTest: false,
      blending: THREE.AdditiveBlending, fog: false,
    });
    const ghost = new THREE.Sprite(ghostMat);
    ghost.position.set(0, 0.2, 0.08);
    ghost.scale.set(1.1, 1.1, 1);
    ghost.renderOrder = 4;
    ghost.visible = false;
    g.add(ghost);

    lanes.push({
      group: g, beam, line, ring, glow, ghost, color: color.clone(),
      targetColor: color.clone(), flash: 0, active: 0, baseX: x,
      ghostFx: null, angle: 0, pitch: 0, screenAngle: 0, screen: null,
    });
  }

  // ------------------------------------------------------------ clock
  // CHRONOSTASIS' signature background event. The two lanes that sit outside
  // the playable 4/6-lane field become the clock's hands: lane 0 is the slow
  // hour hand, lane 7 is the fast minute/second hand. They share the lane
  // colors, so the background literally reuses the unused lanes rather than
  // adding an unrelated decoration.
  const clockGroup = new THREE.Group();
  clockGroup.position.set(0, 13.2, -28);
  clockGroup.visible = false;
  bg.add(clockGroup);

  const clockFaceMat = new THREE.SpriteMaterial({
    map: TEX.clockFace, color: 0xfff1c8, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const clockFace = new THREE.Sprite(clockFaceMat);
  clockFace.scale.set(21.6, 21.6, 1);
  clockFace.renderOrder = -5;
  clockGroup.add(clockFace);

  const clockAuraMat = new THREE.SpriteMaterial({
    map: TEX.glow, color: 0xffc85e, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const clockAura = new THREE.Sprite(clockAuraMat);
  clockAura.scale.set(29, 29, 1);
  clockAura.renderOrder = -6;
  clockGroup.add(clockAura);

  const slowColor = new THREE.Color(LANE_COLORS[0]);
  const fastColor = new THREE.Color(LANE_COLORS[7]);
  const clockSlowMat = new THREE.SpriteMaterial({
    map: TEX.clockHand, color: slowColor, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const clockSlow = new THREE.Sprite(clockSlowMat);
  clockSlow.center.set(0.5, 0.07);
  clockSlow.position.set(0, 0, 0.22);
  clockSlow.scale.set(1.02, 6.8, 1);
  clockSlow.renderOrder = -4;
  clockGroup.add(clockSlow);

  const clockFastMat = new THREE.SpriteMaterial({
    map: TEX.clockHand, color: fastColor, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const clockFast = new THREE.Sprite(clockFastMat);
  clockFast.center.set(0.5, 0.07);
  clockFast.position.set(0, 0, 0.26);
  clockFast.scale.set(0.76, 9.6, 1);
  clockFast.renderOrder = -4;
  clockGroup.add(clockFast);

  const clockHubMat = new THREE.SpriteMaterial({
    map: TEX.glow, color: 0xfff3d0, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const clockHub = new THREE.Sprite(clockHubMat);
  clockHub.scale.set(1.9, 1.9, 1);
  clockHub.position.z = 0.3;
  clockHub.renderOrder = -3;
  clockGroup.add(clockHub);

  // Each unused outer lane also carries its own dial. Lane 0 spins with the
  // slow hour hand, lane 7 with the fast minute hand, so the two dormant lanes
  // visibly host the background clock even while the central face is far away.
  function makeLaneDial(lane) {
    const mat = new THREE.SpriteMaterial({
      map: TEX.clockDial, color: new THREE.Color(LANE_COLORS[lane]), transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const sprite = new THREE.Sprite(mat);
    // Nudge the dial toward the field so its full ring stays on screen at wide
    // aspect ratios; it still sits inside the unused lane's footprint.
    sprite.position.set(lane === 0 ? 0.86 : -0.86, 7.6, 0.24);
    sprite.scale.set(2.75, 2.75, 1);
    sprite.renderOrder = 2;
    sprite.visible = false;
    lanes[lane].group.add(sprite);
    return sprite;
  }
  const dialSlow = makeLaneDial(0);
  const dialFast = makeLaneDial(7);

  const clock = {
    group: clockGroup, face: clockFace, aura: clockAura, hub: clockHub,
    handSlow: clockSlow, handFast: clockFast, dialSlow, dialFast,
    slowColor, fastColor,
    target: 0, fade: 0, mode: 'off', frozen: false, rate: 1,
    runTime: 0, anchorT: 0, anchorRun: 0,
    slowAngle: 0, fastAngle: 0, slowKick: 0, fastKick: 0, kick: 0,
  };

  // ------------------------------------------------------------ pendulum
  // STASIS gimmick: one lane leaves the playfield and becomes the swinging rod
  // of an antique clock. Its bob passes through a fixed centre target, and the
  // chart schedules one floating note for every time the bob crosses centre.
  const PENDULUM_GOLD = 0xffd166;
  const pendulum = {
    active: false, target: 0, fade: 0,
    period: 2.4146, originT: 0, baseAmp: 0.42,
    pivot: new THREE.Vector3(0, 11.8, 1.2),
    center: new THREE.Vector3(0, 2.6, 1.32),
    length: 9.2, angle: 0.42,
    kick: 0, missFlash: 0,
    times: [], states: [], notes: [],
  };
  const pendRoot = new THREE.Group();
  pendRoot.visible = false;
  scene.add(pendRoot);
  const goldColor = new THREE.Color(PENDULUM_GOLD);
  const goldPale = new THREE.Color(0xfff1c8);
  const redColor = new THREE.Color(0xff335f);

  function swingSprite(map, color, order, scale) {
    const mat = new THREE.SpriteMaterial({
      map, color: color.clone(), transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(scale, scale, 1);
    sprite.renderOrder = order;
    sprite.visible = false;
    pendRoot.add(sprite);
    return sprite;
  }

  const pendRod = swingSprite(TEX.pendulumRod, goldPale, 5, 1);
  // Anchor at the texture's bottom (the pivot) so the arm rotates from the clock hub.
  pendRod.center.set(0.5, 0);
  const pendPivot = swingSprite(TEX.glow, goldPale, 6, 1.5);
  const pendBobGlow = swingSprite(TEX.glow, goldColor, 7, 2.2);
  const pendBob = swingSprite(TEX.ring, goldPale, 8, 2.0);
  const pendTargetGlow = swingSprite(TEX.glow, goldColor, 6, 3.2);
  // Draw the target over the bob so its ring stays readable at the crossing.
  const pendTarget = swingSprite(TEX.ring, goldPale, 10, 2.9);
  const pendTargetInner = swingSprite(TEX.glow, goldPale, 9, 1.5);

  // Loose notes drifting around the dial while the gimmick runs.
  const floaters = [];
  for (let i = 0; i < 7; i++) {
    const s = swingSprite(TEX.floatNote, goldPale, 6, 1);
    s.userData.r = 2.7 + (i % 3) * 1.1;
    s.userData.scale = 0.8 + (i % 4) * 0.16;
    s.userData.op = 0.42 + (i % 3) * 0.12;
    floaters.push(s);
  }

  function pendulumLayout() {
    const portrait = state.portrait;
    pendulum.pivot.set(0, portrait ? 11.0 : 11.8, 1.2);
    pendulum.length = portrait ? 7.0 : 7.8;
    pendulum.center.set(0, pendulum.pivot.y - pendulum.length, 1.32);
    pendulum.baseAmp = portrait ? 0.27 : 0.42;
    pendPivot.position.copy(pendulum.pivot);
    pendTarget.position.copy(pendulum.center);
    pendTargetGlow.position.copy(pendulum.center);
    pendTargetInner.position.copy(pendulum.center);
  }

  function startPendulum({ start = 0, period = 2.4146, amplitude = 0.42, times = [] } = {}) {
    pendulum.active = true;
    pendulum.target = 1;
    pendulum.period = period || 2.4146;
    pendulum.originT = start;
    pendulum.baseAmp = amplitude || 0.42;
    pendulum.times = times.slice();
    pendulum.states = times.map(() => 'pending');
    pendulum.kick = Math.max(pendulum.kick, 0.5);
    for (const s of pendulum.notes) {
      pendRoot.remove(s);
      s.material.dispose();
    }
    pendulum.notes = pendulum.times.map((nt, i) => {
      const mat = new THREE.SpriteMaterial({
        map: TEX.floatNote, color: goldColor.clone(), transparent: true, opacity: 0,
        depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
      });
      const s = new THREE.Sprite(mat);
      const a = i * 2.399963;
      const r = 3.3 + (i % 3) * 0.85;
      s.userData.off = { x: Math.cos(a) * r, y: Math.sin(a) * r * 0.66 };
      s.renderOrder = 7;
      s.visible = false;
      pendRoot.add(s);
      return s;
    });
    pendulum.fade = Math.max(pendulum.fade, 0.002);
    pendulumLayout();
  }

  function stopPendulum() {
    pendulum.active = false;
    pendulum.target = 0;
    for (const s of pendulum.notes) s.visible = false;
  }

  function pendulumReset() {
    stopPendulum();
    pendulum.fade = 0;
    pendulum.kick = 0;
    pendulum.missFlash = 0;
    pendulum.states = [];
    pendRoot.visible = false;
  }

  function swingResolve(index, kind = 'hit') {
    if (pendulum.states[index] !== undefined) pendulum.states[index] = kind;
    const s = pendulum.notes[index];
    if (s) s.visible = false;
    const pos = pendulum.center;
    if (kind === 'hit') {
      pendulum.kick = 1;
      spawnBurst(pos, PENDULUM_GOLD, 22, 3.4);
      spawnShock(pos, PENDULUM_GOLD, 3.1);
    } else {
      pendulum.missFlash = 1;
      spawnBurst(pos, 0xff335f, 10, 1.5);
      spawnShock(pos, 0xff335f, 1.9);
    }
  }

  function swingWhiff() {
    pendulum.kick = Math.max(pendulum.kick, 0.14);
  }

  const pendV = new THREE.Vector3();
  const pendV2 = new THREE.Vector3();
  function pendulumTargetScreen() {
    camera.updateMatrixWorld();
    pendV.copy(pendulum.center).project(camera);
    pendV2.copy(pendulum.center);
    pendV2.y += 1.5;
    pendV2.project(camera);
    const x = (pendV.x * 0.5 + 0.5) * innerWidth;
    const y = (-pendV.y * 0.5 + 0.5) * innerHeight;
    const y2 = (-pendV2.y * 0.5 + 0.5) * innerHeight;
    return { x, y, radius: Math.max(60, Math.min(118, Math.abs(y - y2))) };
  }

  function updatePendulum(dt, t) {
    pendulum.fade += (pendulum.target - pendulum.fade) * (1 - Math.exp(-dt * 3.1));
    const vis = pendulum.fade > 0.012;
    pendRoot.visible = vis;
    if (!vis) return;

    pendulum.kick = Math.max(0, pendulum.kick - dt * 3.2);
    pendulum.missFlash = Math.max(0, pendulum.missFlash - dt * 2.6);

    const amp = pendulum.baseAmp;
    const theta = amp * Math.cos(((t - pendulum.originT) / pendulum.period) * Math.PI * 2);
    pendulum.angle = theta;
    const bx = Math.sin(theta) * pendulum.length;
    const by = -Math.cos(theta) * pendulum.length;
    pendRod.position.copy(pendulum.pivot);
    pendRod.scale.set(0.5, pendulum.length, 1);
    pendRod.material.rotation = Math.PI + theta;
    pendPivot.position.copy(pendulum.pivot);
    pendBobGlow.position.set(pendulum.pivot.x + bx, pendulum.pivot.y + by, pendulum.pivot.z + 0.12);
    pendBob.position.set(pendulum.pivot.x + bx, pendulum.pivot.y + by, pendulum.pivot.z + 0.16);

    const crossing = Math.max(0, 1 - Math.abs(theta) / Math.max(0.001, amp));
    const bobPulse = 1 + pendulum.kick * 0.22 + crossing * 0.05;
    pendBobGlow.scale.set(2.2 * bobPulse, 2.2 * bobPulse, 1);
    pendBob.scale.set(2.0 * bobPulse, 2.0 * bobPulse, 1);
    pendRod.visible = true;
    pendPivot.visible = true;
    pendBob.visible = true;
    pendBobGlow.visible = true;

    const cf = pendulum.fade;
    const flash = pendulum.missFlash;
    pendRod.material.opacity = cf * 0.62;
    pendPivot.material.opacity = cf * (0.55 + crossing * 0.3);
    pendBobGlow.material.opacity = cf * (0.24 + crossing * 0.16 + pendulum.kick * 0.14);
    pendBob.material.opacity = cf * (0.78 + pendulum.kick * 0.2);
    pendBob.material.color.copy(goldPale).lerp(redColor, flash);
    pendBobGlow.material.color.copy(goldColor).lerp(redColor, flash);

    const tPulse = 1 + crossing * 0.08 + pendulum.kick * 0.14;
    pendTarget.scale.set(2.9 * tPulse, 2.9 * tPulse, 1);
    pendTargetGlow.scale.set(3.2 * tPulse, 3.2 * tPulse, 1);
    pendTargetInner.scale.set(1.5 * tPulse, 1.5 * tPulse, 1);
    pendTarget.material.opacity = cf * (0.5 + crossing * 0.3 + pendulum.kick * 0.18);
    pendTargetGlow.material.opacity = cf * (0.05 + crossing * 0.04 + pendulum.kick * 0.06);
    pendTargetInner.material.opacity = cf * (0.16 + crossing * 0.12);
    pendTarget.material.color.copy(goldPale).lerp(redColor, flash * 0.7);

    for (const n of pendulum.notes) {
      const i = pendulum.notes.indexOf(n);
      const nt = pendulum.times[i];
      const state = pendulum.states[i];
      const lead = nt - t;
      if (state !== 'pending' || lead > 1.55 || lead < -0.35) {
        n.visible = false;
        continue;
      }
      const p = Math.max(0, Math.min(1, 1 - lead / 1.55));
      const e = 1 - Math.pow(1 - p, 3);
      const off = n.userData.off;
      n.position.set(
        pendulum.center.x + off.x * (1 - e),
        pendulum.center.y + off.y * (1 - e) + Math.sin(t * 2.2 + i) * 0.1 * (1 - e),
        pendulum.center.z + 0.14,
      );
      const sc = 1.5 + e * 0.55 + Math.sin(t * 7 + i) * 0.03;
      n.scale.set(sc, sc, 1);
      n.material.opacity = cf * (0.2 + e * 0.78);
      n.visible = true;
    }

    for (let i = 0; i < floaters.length; i++) {
      const f = floaters[i];
      const a = t * 0.24 + i * 2.399963;
      const r = f.userData.r;
      f.position.set(
        pendulum.center.x + Math.cos(a) * r,
        pendulum.center.y + Math.sin(a * 1.3) * r * 0.6 + Math.sin(t * 0.9 + i) * 0.24,
        pendulum.center.z + 0.05,
      );
      f.material.rotation = Math.sin(t * 0.5 + i) * 0.32;
      const s = f.userData.scale;
      f.scale.set(s, s, 1);
      f.material.opacity = cf * f.userData.op * (0.55 + 0.45 * Math.sin(t * 1.5 + i * 1.7));
      f.visible = true;
    }
  }

  // ------------------------------------------------------------ notes
  function makeNote(lane, type) {
    const color = new THREE.Color(LANE_COLORS[lane]);
    const group = new THREE.Group();
    group.renderOrder = 5;
    // Notes live inside their lane's moving frame: when the lane fans or
    // tilts, the note positions (and hold bodies) follow the diagonal path.
    lanes[lane].group.add(group);

    const headMat = new THREE.SpriteMaterial({
      map: TEX.note, color, transparent: true, opacity: 1,
      depthWrite: false, depthTest: false, blending: THREE.NormalBlending, fog: false,
    });
    const head = new THREE.Sprite(headMat);
    head.scale.set(1.04, 1.04, 1);
    head.renderOrder = 6;
    group.add(head);

    let body = null, tail = null;
    if (type === 'hold') {
      const bodyMat = new THREE.SpriteMaterial({
        map: TEX.hold, color: color.clone().lerp(new THREE.Color(0xffffff), 0.15),
        transparent: true, opacity: 0.72, depthWrite: false, depthTest: false,
        blending: THREE.AdditiveBlending, fog: false,
      });
      body = new THREE.Sprite(bodyMat);
      body.center.set(0.5, 0.5);
      body.renderOrder = 4;
      group.add(body);

      const tailMat = new THREE.SpriteMaterial({
        map: TEX.note, color: color.clone(), transparent: true, opacity: 0.85,
        depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
      });
      tail = new THREE.Sprite(tailMat);
      tail.scale.set(0.68, 0.68, 1);
      tail.renderOrder = 5;
      group.add(tail);
    }
    return { group, head, body, tail, color };
  }

  // ------------------------------------------------------------ fx
  // particles
  const PMAX = 720;
  const pPos = new Float32Array(PMAX * 3).fill(-999);
  const pCol = new Float32Array(PMAX * 3);
  const pVel = new Float32Array(PMAX * 3);
  const pLife = new Float32Array(PMAX);
  const pMax = new Float32Array(PMAX);
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.3, map: TEX.glow, vertexColors: true, transparent: true,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    sizeAttenuation: true, fog: false,
  });
  const points = new THREE.Points(pGeo, pMat);
  points.renderOrder = 9;
  scene.add(points);
  let pCursor = 0;

  function spawnBurst(pos, color, count = 16, power = 3.2) {
    const c = new THREE.Color(color);
    for (let n = 0; n < count; n++) {
      const i = pCursor = (pCursor + 1) % PMAX;
      pPos[i * 3] = pos.x + (Math.random() - .5) * 0.15;
      pPos[i * 3 + 1] = pos.y + (Math.random() - .5) * 0.15;
      pPos[i * 3 + 2] = pos.z + (Math.random() - .5) * 0.15;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      const sp = power * (0.35 + Math.random() * 0.9);
      pVel[i * 3] = Math.sin(ph) * Math.cos(th) * sp;
      pVel[i * 3 + 1] = Math.cos(ph) * sp + 0.6;
      pVel[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * sp;
      const white = Math.random() < 0.35;
      pCol[i * 3] = white ? 1 : c.r;
      pCol[i * 3 + 1] = white ? 1 : c.g;
      pCol[i * 3 + 2] = white ? 1 : c.b;
      pLife[i] = pMax[i] = 0.35 + Math.random() * 0.5;
    }
  }

  // shockwaves
  const shocks = [];
  for (let i = 0; i < 16; i++) {
    const mat = new THREE.SpriteMaterial({
      map: TEX.ring, color: 0xffffff, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const s = new THREE.Sprite(mat);
    s.scale.set(0.8, 0.8, 1);
    s.renderOrder = 8;
    s.visible = false;
    scene.add(s);
    shocks.push({ sprite: s, life: 0, max: 0.38 });
  }
  let shockCursor = 0;
  function spawnShock(pos, color, scale = 2.8) {
    const s = shocks[shockCursor = (shockCursor + 1) % shocks.length];
    s.sprite.position.copy(pos);
    s.sprite.material.color.set(color);
    s.sprite.material.opacity = 0.95;
    s.sprite.scale.set(0.7, 0.7, 1);
    s.sprite.visible = true;
    s.life = s.max = 0.38;
    s.scale = scale;
  }

  // Beat echoes: small ring pulses that leave a dormant lane sideways, drag
  // to a stop and fade out. A fixed pool keeps this cheap during dense charts.
  const echoes = [];
  for (let i = 0; i < 54; i++) {
    const mat = new THREE.SpriteMaterial({
      map: TEX.ring, color: 0xffffff, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const s = new THREE.Sprite(mat);
    s.scale.set(0.6, 0.6, 1);
    s.renderOrder = 7;
    s.visible = false;
    stage.add(s);
    echoes.push({ sprite: s, life: 0, max: 1, delay: 0, vx: 0, vy: 0, base: 0.5, alpha: 0.6, spin: 0 });
  }
  let echoCursor = 0;

  // ------------------------------------------------------------ state
  const state = {
    view: {
      rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0,
      camZ: 17.2, camY: 6.7, bloom: 0.8, spin: 0.04,
      spacing: SPACING, ring: 1.65,
    },
    target: {
      rotY: 0, rotZ: 0, tilt: 0, spread: 1, y: 0,
      camZ: 17.2, camY: 6.7, bloom: 0.8, spin: 0.04,
      spacing: SPACING, ring: 1.65,
    },
    section: null,
    energy: 0.4,
    keyCount: 8,
    active: new Set([0, 1, 2, 3, 4, 5, 6, 7]),
    pulse: 0,
    shake: 0,
    zoomKick: 0,
    noteSpeed: 8.2,
    time: 0,
    playing: false,
    spacing: SPACING,
    ringScale: 1.65,
    portrait: false,
    mouse: new THREE.Vector2(),
    laneXNow: baseX.slice(),
    bpm: 100,
    beatOffset: 0.535,
    energyPulse: 0,
    motion: { style: 'fan', amp: 0.06, speed: 0.5, pitch: 0.03 },
    targetMotion: { style: 'fan', amp: 0.06, speed: 0.5, pitch: 0.03 },
    laneAngle: new Float32Array(8),
    lanePitch: new Float32Array(8),
    screenAngle: new Float32Array(8),
    city: 0,
    cityTarget: 0,
    live: new Set([0, 1, 2, 3, 4, 5, 6, 7]),
  };

  // The field is re-framed from the number of playable lanes: fewer lanes get
  // wider spacing and larger rings, so a 4-lane section still owns the screen.
  function frameFor(keys) {
    const aspect = innerWidth / Math.max(1, innerHeight);
    if (state.portrait) {
      if (keys <= 4) return { spacing: 1.72, ring: 1.62 };
      if (keys <= 6) return { spacing: 1.3, ring: 1.24 };
      return { spacing: 1.02, ring: 1.04 };
    }
    const wide = aspect > 1.9 ? 1.08 : 1;
    if (keys <= 4) return { spacing: 3.15 * wide, ring: 2.35 * wide };
    if (keys <= 6) return { spacing: 2.16 * wide, ring: 1.95 * wide };
    return { spacing: 1.75 * wide, ring: 1.65 * wide };
  }

  function rememberFrame(keys, snap = false) {
    const f = frameFor(keys);
    state.spacing = f.spacing;
    state.ringScale = f.ring;
    state.target.spacing = f.spacing;
    state.target.ring = f.ring;
    if (snap) {
      state.view.spacing = f.spacing;
      state.view.ring = f.ring;
    }
  }

  function layout() {
    const w = innerWidth, h = innerHeight;
    const aspect = w / h;
    state.portrait = aspect < 0.92;
    rememberFrame(state.keyCount, true);
    clock.group.position.set(0, state.portrait ? 15.2 : 13.2, -28);
    clock.group.scale.setScalar(state.portrait ? 0.86 : 1);
    pendulumLayout();
    for (let i = 0; i < 8; i++) {
      const x = (i - 3.5) * state.spacing;
      lanes[i].baseX = x;
      lanes[i].group.position.x = x;
      lanes[i].group.position.z = ARC * x * x;
      lanes[i].ring.scale.set(state.view.ring, state.view.ring, 1);
      lanes[i].glow.scale.set(state.view.ring * 1.35, state.view.ring * 1.35, 1);
      state.laneXNow[i] = x;
    }
    hitLine.scale.set((state.keyCount - 1) * state.spacing + state.ring * 1.5, 0.9, 1);
    camera.aspect = aspect;
    camera.fov = state.portrait ? 52 : 46;
    camera.updateProjectionMatrix();
    const base = state.section ? state.section.camZ : 17.2;
    state.target.camZ = base + (state.portrait ? 6.4 : 0);
    state.view.camZ = state.target.camZ;
    renderer.setSize(w, h);
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
  }
  addEventListener('resize', layout);
  layout();

  addEventListener('pointermove', (e) => {
    state.mouse.x = (e.clientX / innerWidth) * 2 - 1;
    state.mouse.y = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  function setSection(sec) {
    if (!sec) return;
    const changed = !!state.section && state.section.keys !== sec.keys;
    state.section = sec;
    state.energy = sec.energy;
    state.keyCount = sec.keys;
    rememberFrame(sec.keys);
    state.target.rotY = sec.rotY;
    state.target.rotZ = sec.rotZ;
    state.target.tilt = sec.tilt;
    state.target.spread = sec.spread;
    state.target.y = sec.y;
    state.target.camZ = sec.camZ + (state.portrait ? 6.4 : 0);
    state.target.camY = sec.camY;
    state.target.bloom = sec.bloom * 0.82;
    state.target.spin = sec.spin;
    state.targetMotion = {
      style: sec.motion || 'fan',
      amp: sec.motionAmp ?? 0.06,
      speed: sec.motionSpeed ?? 0.5,
      pitch: sec.motionPitch ?? 0.03,
    };
    state.cityTarget = sec.city ?? 0;
    // the zoom kick keeps the section change feeling like a camera move,
    // never a hard cut, while the lane spacing eases into its new width
    if (changed) state.zoomKick = Math.min(1.4, state.zoomKick + 0.85);
    const sets = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };
    state.active = new Set(sets[sec.keys] || sets[8]);
    state.live = new Set(state.active);
    for (let i = 0; i < 8; i++) {
      const live = state.active.has(i);
      lanes[i].active = live ? 1 : 0;
      if (!live) lanes[i].ghostFx = null;
      lanes[i].targetColor.copy(lanes[i].color).lerp(new THREE.Color(sec.color), 0.24);
      if (live) lanes[i].flash = Math.max(lanes[i].flash, 0.22);
    }
    // The clock hands inherit the current colors of the two unused outer
    // lanes, keeping the background event tied to the lane field.
    clock.slowColor.copy(lanes[0].targetColor);
    clock.fastColor.copy(lanes[7].targetColor);
    hitLineMat.color.set(sec.accent);
  }

  // Lanes with a note arriving soon are live even before their section starts,
  // so the player never has to wait for a hidden lane to un-hide mid-approach.
  function setPreviewLanes(lanesSet) {
    const next = new Set(state.active);
    for (const lane of lanesSet) next.add(lane);
    let changed = next.size !== state.live.size;
    if (!changed) for (const lane of next) if (!state.live.has(lane)) { changed = true; break; }
    if (!changed) return;
    state.live = next;
    for (const lane of lanesSet) {
      if (!state.active.has(lane)) {
        lanes[lane].flash = Math.max(lanes[lane].flash, 0.34);
        lanes[lane].ghostFx = null;
      }
    }
  }

  function setCity(level) {
    state.cityTarget = Math.max(0, Math.min(1, level));
  }

  function setClock(mode = 'run', power = 1, at = null) {
    const next = mode || 'off';
    const prev = clock.mode;
    const now = at ?? state.time;
    // Keep the hand position continuous across section events and debug seeks.
    if (prev === 'run' || prev === 'final') {
      clock.anchorRun += Math.max(0, now - clock.anchorT);
    } else if (prev === 'freeze') {
      clock.anchorRun = clock.runTime;
    }
    clock.anchorT = now;
    clock.mode = next;
    if (next === 'off') {
      clock.target = 0;
      clock.frozen = false;
      clock.rate = 1;
    } else {
      clock.target = 1;
      clock.frozen = next === 'freeze';
      clock.rate = next === 'final' ? 1.65 : 1;
      clock.kick = Math.max(clock.kick, 0.25 + power * 0.35);
      // Anchoring to song time (not wall time) makes pause/resume freeze the
      // clock exactly like every other gameplay animation.
    }
  }

  function clockTick(hand = 'fast', power = 1) {
    if (clock.fade < 0.015) return;
    clock.kick = Math.max(clock.kick, 0.2 + power * 0.32);
    if (hand === 'slow') clock.slowKick = Math.max(clock.slowKick, 0.35 + power * 0.55);
    else clock.fastKick = Math.max(clock.fastKick, 0.35 + power * 0.55);
    if (power > 1.05 && clock.fade > 0.3) {
      const pos = clock.group.localToWorld(new THREE.Vector3(0, 0, 0.35));
      spawnShock(pos, hand === 'slow' ? slowColor.getHex() : fastColor.getHex(), 0.9 + power * 0.35);
    }
  }

  function clockReset() {
    clock.target = 0;
    clock.fade = 0;
    clock.mode = 'off';
    clock.frozen = false;
    clock.rate = 1;
    clock.runTime = 0;
    clock.anchorT = 0;
    clock.anchorRun = 0;
    clock.slowAngle = 0;
    clock.fastAngle = 0;
    clock.slowKick = 0;
    clock.fastKick = 0;
    clock.kick = 0;
    clock.group.visible = false;
    clock.dialSlow.visible = false;
    clock.dialFast.visible = false;
  }

  function laneX(i) { return lanes[i].baseX; }
  function laneZ(i) { return ARC * lanes[i].baseX * lanes[i].baseX; }

  function worldPoint(lane, y) {
    return lanes[lane].group.localToWorld(new THREE.Vector3(0, y, 0.2));
  }

  const screenV = new THREE.Vector3();
  const screenV2 = new THREE.Vector3();
  function updateLaneScreen() {
    camera.updateMatrixWorld();
    stage.updateWorldMatrix(true, false);
    for (let i = 0; i < 8; i++) {
      const l = lanes[i];
      l.group.updateWorldMatrix(false, false);
      const m = l.group.matrixWorld;
      screenV.set(0, 0.04, 0.22).applyMatrix4(m).project(camera);
      screenV2.set(0, 11.4, 0.22).applyMatrix4(m).project(camera);
      const x = (screenV.x * 0.5 + 0.5) * innerWidth;
      const y = (-screenV.y * 0.5 + 0.5) * innerHeight;
      const topX = (screenV2.x * 0.5 + 0.5) * innerWidth;
      const topY = (-screenV2.y * 0.5 + 0.5) * innerHeight;
      l.screenAngle = Math.atan2(topX - x, y - topY);
      l.screen = { x, y, topX, topY, angle: l.screenAngle };
    }
  }

  function laneScreenGeometry(i) {
    if (!lanes[i].screen) updateLaneScreen();
    return lanes[i].screen;
  }

  function laneScreenPoints() {
    updateLaneScreen();
    return lanes.map((l) => l.screen);
  }

  function laneScreenXs() {
    return laneScreenPoints().map((p) => p.x);
  }

  function laneScreenAngle(i) {
    if (!lanes[i].screen) updateLaneScreen();
    return lanes[i].screenAngle;
  }

  function setTempo(bpm, offset = 0) {
    state.bpm = bpm || 100;
    state.beatOffset = offset;
  }

  function pressFx(lane) {
    const l = lanes[lane];
    l.flash = Math.max(l.flash, 0.55);
    l.ring.scale.setScalar(state.view.ring * 1.1);
  }

  // Visual-only flourishes for lanes that are not part of the current section.
  // `sweep` sends a light packet up the lane, `bounce` thumps the hidden ring.
  function ghostFx(lane, type = 'sweep') {
    const l = lanes[lane];
    if (!l) return;
    l.ghostFx = { type, t: 0, dur: type === 'bounce' ? 0.85 : 1.15 };
    if (type === 'bounce') {
      l.flash = Math.max(l.flash, 0.65);
      spawnShock(worldPoint(lane, 0.05), l.color.getHex(), 1.7);
    }
  }

  function clearGhosts() {
    for (const l of lanes) {
      l.ghostFx = null;
      l.ghost.visible = false;
      l.ghost.material.opacity = 0;
    }
  }

  function echoFx(lane, dir = 1, power = 1) {
    const l = lanes[lane];
    if (!l) return;
    const pos = worldPoint(lane, 0.1 + Math.random() * 0.12);
    const n = 3;
    for (let k = 0; k < n; k++) {
      const e = echoes[echoCursor = (echoCursor + 1) % echoes.length];
      e.sprite.position.copy(pos);
      e.sprite.position.y += k * 0.11;
      e.sprite.position.z += k * 0.05;
      e.sprite.material.color.copy(l.targetColor).lerp(white, 0.12 + k * 0.08);
      e.sprite.material.rotation = Math.random() * Math.PI * 2;
      e.sprite.scale.set(0.45, 0.45, 1);
      e.life = e.max = 1.15 + k * 0.24;
      e.delay = k * 0.075;
      e.vx = dir * (2.4 + power * 1.7) * (1 - k * 0.13) + (Math.random() - 0.5) * 0.5;
      e.vy = 0.45 + power * 0.35 + Math.random() * 0.25;
      e.base = 0.38 + power * 0.38;
      e.alpha = (0.62 - k * 0.13) * Math.min(1, power);
      e.spin = (Math.random() - 0.5) * 1.2;
      e.sprite.visible = false;
    }
  }

  function pulseFx(power = 1) {
    state.energyPulse = Math.min(1.5, state.energyPulse + 0.35 * power);
    state.shake = Math.min(0.18, state.shake + 0.008 * power);
  }

  function burstFx(lane, power = 1) {
    let pos;
    if (lane === undefined || lane === null) {
      pos = stage.localToWorld(new THREE.Vector3(0, 0.3, 0.25));
      spawnBurst(pos, 0x9ff5ff, Math.round(22 * power), 5.2);
      spawnShock(pos, 0x9ff5ff, 4.2);
    } else {
      pos = worldPoint(lane, 0.08);
      spawnBurst(pos, lanes[lane].targetColor, Math.round(14 + 10 * power), 3.2 + power);
      spawnShock(pos, lanes[lane].targetColor.getHex(), 2.4 + power);
    }
    state.shake = Math.min(0.2, state.shake + 0.02 * power);
  }

  function vibeFx(power = 1) {
    pulseFx(power);
    state.zoomKick = Math.min(1.4, state.zoomKick + 0.22 * power);
    burstFx(null, 0.7 + power * 0.7);
    for (let i = 0; i < 8; i++) {
      if (!state.active.has(i)) echoFx(i, i < 3.5 ? -1 : 1, 0.7 + power * 0.6);
    }
  }

  function motionEvent(style, amp, speed, pitch) {
    state.targetMotion = {
      style: style || 'fan',
      amp: amp ?? 0.08,
      speed: speed ?? 0.6,
      pitch: pitch ?? 0.04,
    };
  }

  function hitFx(lane, quality) {
    const l = lanes[lane];
    l.flash = 1;
    state.shake = Math.min(0.16, state.shake + (quality === 'perfect' ? 0.025 : 0.016));
    const pos = worldPoint(lane, 0.05);
    spawnBurst(pos, l.color, quality === 'perfect' ? 22 : 14, 3.5);
    spawnShock(pos, l.color.getHex(), 3.0);
  }
  function missFx(lane) {
    state.shake = Math.min(0.25, state.shake + 0.13);
    const l = lanes[lane];
    const pos = worldPoint(lane, 0.05);
    spawnBurst(pos, 0xff335f, 9, 1.4);
    spawnShock(pos, 0xff335f, 2.0);
  }

  // ------------------------------------------------------------ update
  const white = new THREE.Color(0xffffff);
  const tmpColor = new THREE.Color();
  let menuClock = 0;

  function animate(dt, songTime, playing) {
    menuClock += dt;
    const t = playing ? songTime : menuClock;
    state.time = t;
    state.playing = playing;
    const v = state.view, tg = state.target;

    // smooth view
    const k = 1 - Math.exp(-dt * 2.2);
    v.rotY += (tg.rotY - v.rotY) * k;
    v.rotZ += (tg.rotZ - v.rotZ) * k;
    v.tilt += (tg.tilt - v.tilt) * k;
    v.spread += (tg.spread - v.spread) * k;
    v.y += (tg.y - v.y) * k;
    v.camZ += (tg.camZ - v.camZ) * k;
    v.camY += (tg.camY - v.camY) * k;
    v.spin += (tg.spin - v.spin) * k;
    v.spacing += (tg.spacing - v.spacing) * (1 - Math.exp(-dt * 3.1));
    v.ring += (tg.ring - v.ring) * (1 - Math.exp(-dt * 3.1));
    bloom.strength += (tg.bloom - bloom.strength) * k;
    state.zoomKick *= Math.exp(-dt * 2.6);
    state.energyPulse *= Math.exp(-dt * 3.2);

    const period = 60 / state.bpm;
    const beatPhase = (((t - state.beatOffset) / period) % 1 + 1) % 1;
    const pulse = Math.exp(-beatPhase * 5.2);
    state.pulse = pulse;

    const m = state.motion, mt = state.targetMotion;
    const mk = 1 - Math.exp(-dt * 2.2);
    m.amp += (mt.amp - m.amp) * mk;
    m.speed += (mt.speed - m.speed) * mk;
    m.pitch += (mt.pitch - m.pitch) * mk;
    m.style = mt.style;
    const clickPulse = state.energyPulse;
    bloom.strength += clickPulse * 0.32;

    // stage motion
    stage.position.y = v.y + Math.sin(t * 0.65) * 0.035 + pulse * 0.03;
    stage.rotation.y = v.rotY + Math.sin(t * 0.22) * 0.02 + Math.sin(t * 0.09) * v.spin;
    stage.rotation.z = v.rotZ + Math.sin(t * 0.37) * 0.006;
    stage.rotation.x = v.tilt + Math.sin(t * 0.29) * 0.006;

    // lane positions respond to spread and to the active lane count
    for (let i = 0; i < 8; i++) {
      const l = lanes[i];
      const x = (i - 3.5) * v.spacing * v.spread;
      l.baseX = x;
      l.group.position.x = x;
      l.group.position.z = ARC * x * x;
      state.laneXNow[i] = x;

      // Lanes fan, slope, wave, and tilt with the section. Notes are parented
      // to the lane frame, so their fall path follows the same diagonal.
      const rel = i - 3.5;
      let angle = 0;
      switch (m.style) {
        case 'fan': angle = -rel * m.amp; break;
        case 'slope': angle = m.amp; break;
        case 'tiltL': angle = m.amp * 1.15; break;
        case 'tiltR': angle = -m.amp * 1.15; break;
        case 'zigzag': angle = (i % 2 ? 1 : -1) * m.amp * 0.95; break;
        case 'wave': angle = Math.sin(t * m.speed + i * 0.72) * m.amp - rel * m.amp * 0.22; break;
        case 'orbit': angle = Math.sin(t * m.speed * 0.72 + rel * 0.38) * m.amp * 0.78 - rel * m.amp * 0.3; break;
        default: angle = -rel * m.amp;
      }
      angle += Math.sin(t * 1.15 + i * 0.55) * m.amp * 0.12 * (0.4 + state.energy);
      angle += pulse * 0.006 * Math.cos(i * 0.9 + 0.4);
      const targetPitch = Math.sin(t * 0.55 + i * 0.7) * m.pitch
        + pulse * m.pitch * 0.32 * Math.sin(i * 0.8 + 0.7)
        + clickPulse * 0.006;
      const lk = 1 - Math.exp(-dt * 3.4);
      l.angle += (angle - l.angle) * lk;
      l.pitch += (targetPitch - l.pitch) * lk;
      state.laneAngle[i] = l.angle;
      state.lanePitch[i] = l.pitch;
      l.group.rotation.z = l.angle;
      l.group.rotation.x = l.pitch;
      l.line.scale.y = 12.4 * Math.cos(l.pitch);
      l.beam.scale.y = 12.6 * Math.cos(l.pitch);

      const live = state.live.has(i);
      let ghostAmp = 0;
      let bounceAmp = 0;
      if (l.ghostFx) {
        const g = l.ghostFx;
        g.t += dt;
        const p = g.t / g.dur;
        if (p >= 1) {
          l.ghostFx = null;
          l.ghost.visible = false;
          l.ghost.material.opacity = 0;
        } else {
          ghostAmp = Math.sin(Math.PI * p);
          if (g.type === 'sweep') {
            l.ghost.visible = true;
            l.ghost.position.set(0, 0.25 + p * 10.5, 0.08);
            const s = 0.85 + 0.55 * ghostAmp;
            l.ghost.scale.set(s, s, 1);
            l.ghost.material.opacity = ghostAmp * 0.8;
            l.ghost.material.color.copy(l.targetColor).lerp(white, 0.3 + ghostAmp * 0.4);
          } else {
            bounceAmp = ghostAmp;
            l.ghost.visible = false;
          }
        }
      }

      const lineTarget = live
        ? (i % 2 ? 0.86 : 0.96) * 0.58
        : ghostAmp * 0.34;
      const beamTarget = live
        ? (0.065 + pulse * 0.03)
        : ghostAmp * 0.04;
      const ringTarget = live
        ? 0.95
        : bounceAmp * 0.78 + ghostAmp * 0.035;
      l.line.material.opacity += (lineTarget - l.line.material.opacity) * (1 - Math.exp(-dt * 3.5));
      l.beam.material.opacity += (beamTarget - l.beam.material.opacity) * (1 - Math.exp(-dt * 3.5));
      l.ring.material.opacity += (ringTarget - l.ring.material.opacity) * (1 - Math.exp(-dt * 3.5));
      l.glow.material.opacity += ((live ? 0.14 : ghostAmp * 0.07) + l.flash * 0.3 - l.glow.material.opacity) * (1 - Math.exp(-dt * 8));

      l.flash = Math.max(0, l.flash - dt * 3.4);
      const rs = v.ring * (1 + pulse * 0.045 * (0.4 + state.energy) + l.flash * 0.22 + bounceAmp * 0.5);
      l.ring.scale.set(rs, rs, 1);
      l.ring.material.color.copy(l.targetColor).lerp(white, l.flash * 0.8);
      l.glow.material.color.copy(l.targetColor).lerp(white, l.flash * 0.5);
      l.line.material.color.copy(l.targetColor).lerp(white, 0.14 + l.flash * 0.32);
      l.beam.material.color.copy(l.targetColor);
    }
    updateLaneScreen();
    for (let i = 0; i < 8; i++) {
      const l = lanes[i];
      l.line.material.rotation = -l.screenAngle;
      l.beam.material.rotation = -l.screenAngle;
    }
    hitLine.scale.x = (v.spacing * (state.keyCount - 1) + v.ring * 1.5) * v.spread;
    hitLine.material.opacity = 0.45 + pulse * 0.3 + state.energy * 0.15 + clickPulse * 0.16;

    // camera
    const camX = state.mouse.x * 0.55;
    const camY = v.camY + state.mouse.y * 0.18;
    camera.position.x += (camX - camera.position.x) * (1 - Math.exp(-dt * 2));
    camera.position.y += (camY - camera.position.y) * (1 - Math.exp(-dt * 2));
    camera.position.z += (v.camZ - state.zoomKick * 1.05 - camera.position.z) * (1 - Math.exp(-dt * 3.4));
    if (state.shake > 0.0005) {
      camera.position.x += (Math.random() - .5) * state.shake;
      camera.position.y += (Math.random() - .5) * state.shake;
      state.shake *= Math.exp(-dt * 10);
    }
    camera.lookAt(0, 4.05, 0);

    // background
    stars.rotation.y += dt * 0.006;
    stars2.rotation.y -= dt * 0.004;
    dust.rotation.y += dt * 0.012;
    neb1.position.x = -16 + Math.sin(t * 0.05) * 2;
    neb2.position.y = 1 + Math.sin(t * 0.07 + 1) * 2;
    for (let i = 0; i < bgRings.length; i++) {
      bgRings[i].rotation.z += dt * (0.02 + i * 0.012);
      bgRings[i].rotation.y += dt * 0.008;
    }
    state.city += (state.cityTarget - state.city) * (1 - Math.exp(-dt * 1.6));
    cityGroup.visible = state.city > 0.012;
    if (cityGroup.visible) {
      cityGroup.position.x = state.mouse.x * 1.4;
      for (let i = 0; i < cityLayers.length; i++) {
        const layer = cityLayers[i];
        layer.map.offset.x += dt * layer.speed * (0.7 + state.energy * 1.6 + pulse * 0.8);
        layer.mesh.position.y = layer.base + Math.sin(t * 0.17 + i * 1.7) * 0.18;
        layer.mat.opacity = state.city * (i ? 0.42 : 0.3);
      }
    }
    // background clock: slow hour hand + stepped minute hand on the unused
    // outer lanes. The chart only turns it on at motif boundaries.
    clock.fade += (clock.target - clock.fade) * (1 - Math.exp(-dt * 2.6));
    clock.group.visible = clock.fade > 0.008;
    if (clock.group.visible) {
      if (clock.target > 0 && !clock.frozen) {
        clock.runTime = clock.anchorRun + Math.max(0, t - clock.anchorT);
      }
      if (!clock.frozen) {
        const beatSec = 60 / Math.max(1, state.bpm);
        const slowTarget = (clock.runTime / (beatSec * 32)) * Math.PI * 2;
        // The fast hand steps on the song's eighth-note grid, so its ticks
        // land with the music even though the clock has its own visual hub.
        const fastStep = beatSec * (clock.mode === 'final' ? 0.34 : 0.5);
        const fastTarget = Math.floor((t - state.beatOffset) / fastStep) * (Math.PI * 2 / 12);
        clock.slowAngle += (slowTarget - clock.slowAngle) * (1 - Math.exp(-dt * 4));
        clock.fastAngle += (fastTarget - clock.fastAngle) * (1 - Math.exp(-dt * 20));
        clock.handSlow.material.rotation = -clock.slowAngle;
        clock.handFast.material.rotation = -clock.fastAngle;
      }
      clock.slowKick = Math.max(0, clock.slowKick - dt * 3.6);
      clock.fastKick = Math.max(0, clock.fastKick - dt * 4.4);
      clock.kick = Math.max(0, clock.kick - dt * 3.1);
      const cf = clock.fade;
      clock.face.material.opacity = cf * (0.34 + clock.kick * 0.14);
      clock.aura.material.opacity = cf * (0.085 + clock.kick * 0.08);
      clock.hub.material.opacity = cf * (0.5 + clock.kick * 0.45);
      clock.handSlow.material.opacity = cf * (0.72 + clock.slowKick * 0.34);
      clock.handFast.material.opacity = cf * (0.82 + clock.fastKick * 0.28);
      clock.handSlow.material.color.copy(clock.slowColor).lerp(white, clock.slowKick * 0.75);
      clock.handFast.material.color.copy(clock.fastColor).lerp(white, clock.fastKick * 0.75);
      const hs = 1.9 * (1 + clock.kick * 0.26 + Math.sin(t * 7.5) * 0.025);
      clock.hub.scale.set(hs, hs, 1);
      const fs = 1 + clock.kick * 0.012;
      clock.face.scale.set(21.6 * fs, 21.6 * fs, 1);

      clock.dialSlow.visible = true;
      clock.dialFast.visible = true;
      clock.dialSlow.material.rotation = -clock.slowAngle;
      clock.dialFast.material.rotation = -clock.fastAngle;
      clock.dialSlow.material.opacity = cf * (0.3 + clock.slowKick * 0.24);
      clock.dialFast.material.opacity = cf * (0.36 + clock.fastKick * 0.24);
      clock.dialSlow.material.color.copy(clock.slowColor).lerp(white, clock.slowKick * 0.7);
      clock.dialFast.material.color.copy(clock.fastColor).lerp(white, clock.fastKick * 0.7);
    }

    updatePendulum(dt, t);

    for (const s of shards) {
      s.rotation.x += s.userData.spin.x * dt;
      s.rotation.y += s.userData.spin.y * dt;
      s.rotation.z += s.userData.spin.z * dt;
      s.position.y += Math.sin(t * 0.4 + s.position.x) * dt * 0.06;
    }

    // particles
    let activeP = false;
    for (let i = 0; i < PMAX; i++) {
      if (pLife[i] <= 0) continue;
      activeP = true;
      pLife[i] -= dt;
      if (pLife[i] <= 0) {
        pPos[i * 3 + 1] = -999;
        continue;
      }
      pVel[i * 3] *= 0.972;
      pVel[i * 3 + 1] -= 2.4 * dt;
      pVel[i * 3 + 2] *= 0.972;
      pPos[i * 3] += pVel[i * 3] * dt;
      pPos[i * 3 + 1] += pVel[i * 3 + 1] * dt;
      pPos[i * 3 + 2] += pVel[i * 3 + 2] * dt;
      const a = Math.max(0, pLife[i] / pMax[i]);
      pCol[i * 3] *= 0.988;
      pCol[i * 3 + 1] *= 0.988;
      pCol[i * 3 + 2] *= 0.988;
      if (a < 0.25) {
        pCol[i * 3] *= a / 0.25; pCol[i * 3 + 1] *= a / 0.25; pCol[i * 3 + 2] *= a / 0.25;
      }
    }
    if (activeP) {
      pGeo.attributes.position.needsUpdate = true;
      pGeo.attributes.color.needsUpdate = true;
    }

    // shockwaves
    for (const s of shocks) {
      if (s.life <= 0) continue;
      s.life -= dt;
      const f = 1 - Math.max(0, s.life / s.max);
      const sc = 0.75 + f * s.scale;
      s.sprite.scale.set(sc, sc, 1);
      s.sprite.material.opacity = (1 - f) * 0.9;
      if (s.life <= 0) s.sprite.visible = false;
    }

    // beat echoes
    for (const e of echoes) {
      if (e.delay > 0) {
        e.delay -= dt;
        if (e.delay > 0) continue;
      }
      if (e.life <= 0) continue;
      e.life -= dt;
      if (e.life <= 0) {
        e.sprite.visible = false;
        continue;
      }
      const p = 1 - e.life / e.max;
      e.vx *= Math.exp(-dt * 2.5);
      e.vy *= Math.exp(-dt * 1.9);
      e.sprite.position.x += e.vx * dt;
      e.sprite.position.y += e.vy * dt;
      e.sprite.material.rotation += e.spin * dt;
      const sc = e.base * (0.7 + p * 1.15);
      e.sprite.scale.set(sc, sc, 1);
      e.sprite.material.opacity = Math.pow(1 - p, 1.55) * e.alpha;
      e.sprite.visible = true;
    }

  }

  function render() {
    composer.render();
  }

  function dispose() {
    renderer.dispose();
  }

  return {
    scene, camera, stage, noteRoot, state, clock,
    makeNote, setSection, animate, render, laneX, laneZ, worldPoint,
    laneScreenXs, laneScreenPoints, laneScreenGeometry, laneScreenAngle,
    setPreviewLanes, setCity, setTempo,
    setClock, clockTick, clockReset,
    startPendulum, stopPendulum, swingResolve, swingWhiff, pendulumReset, pendulumTargetScreen,
    pendulum,
    pressFx, hitFx, missFx, ghostFx, echoFx, pulseFx, burstFx, vibeFx, motionEvent,
    clearGhosts, layout, dispose,
    get noteSpeed() { return state.noteSpeed; },
    set noteSpeed(v) { state.noteSpeed = v; },
    get noteScale() { return Math.max(1, Math.min(1.3, state.view.ring / 1.65)); },
  };
}
