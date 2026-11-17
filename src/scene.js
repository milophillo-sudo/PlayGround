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
  // halo
  const halo = x.createRadialGradient(0, 0, 0, 0, 0, 122);
  halo.addColorStop(0, 'rgba(255,255,255,.9)');
  halo.addColorStop(0.32, 'rgba(255,255,255,.28)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = halo; x.beginPath(); x.arc(0, 0, 122, 0, Math.PI * 2); x.fill();
  // diamond
  x.beginPath();
  x.moveTo(0, -94); x.quadraticCurveTo(22, -22, 94, 0);
  x.quadraticCurveTo(22, 22, 0, 94); x.quadraticCurveTo(-22, 22, -94, 0);
  x.quadraticCurveTo(-22, -22, 0, -94);
  x.closePath();
  x.fillStyle = 'rgba(255,255,255,.94)';
  x.shadowColor = '#fff'; x.shadowBlur = 28;
  x.fill();
  // inner cut
  x.beginPath();
  x.moveTo(0, -49); x.quadraticCurveTo(12, -12, 49, 0);
  x.quadraticCurveTo(12, 12, 0, 49); x.quadraticCurveTo(-12, 12, -49, 0);
  x.quadraticCurveTo(-12, -12, 0, -49);
  x.closePath();
  x.fillStyle = 'rgba(255,255,255,.9)';
  x.shadowBlur = 0;
  x.fill();
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
      ghostFx: null,
    });
  }

  // ------------------------------------------------------------ notes
  function makeNote(lane, type) {
    const color = new THREE.Color(LANE_COLORS[lane]);
    const group = new THREE.Group();
    group.renderOrder = 5;
    noteRoot.add(group);

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
    // the zoom kick keeps the section change feeling like a camera move,
    // never a hard cut, while the lane spacing eases into its new width
    if (changed) state.zoomKick = Math.min(1.4, state.zoomKick + 0.85);
    const sets = { 4: [2, 3, 4, 5], 6: [1, 2, 3, 4, 5, 6], 8: [0, 1, 2, 3, 4, 5, 6, 7] };
    state.active = new Set(sets[sec.keys] || sets[8]);
    for (let i = 0; i < 8; i++) {
      const live = state.active.has(i);
      lanes[i].active = live ? 1 : 0;
      if (!live) lanes[i].ghostFx = null;
      lanes[i].targetColor.copy(lanes[i].color).lerp(new THREE.Color(sec.color), 0.24);
      if (live) lanes[i].flash = Math.max(lanes[i].flash, 0.22);
    }
    hitLineMat.color.set(sec.accent);
  }

  function laneX(i) { return lanes[i].baseX; }
  function laneZ(i) { return ARC * lanes[i].baseX * lanes[i].baseX; }

  function worldPoint(lane, y) {
    const v = new THREE.Vector3(laneX(lane), y, laneZ(lane) + 0.2);
    return laneRoot.localToWorld(v);
  }

  const screenV = new THREE.Vector3();
  function laneScreenPoints() {
    camera.updateMatrixWorld();
    stage.updateMatrixWorld(true);
    const out = [];
    for (let i = 0; i < 8; i++) {
      screenV.set(laneX(i), 0.04, laneZ(i) + 0.22);
      laneRoot.localToWorld(screenV);
      screenV.project(camera);
      out.push({
        x: (screenV.x * 0.5 + 0.5) * innerWidth,
        y: (-screenV.y * 0.5 + 0.5) * innerHeight,
      });
    }
    return out;
  }

  function laneScreenXs() {
    return laneScreenPoints().map((p) => p.x);
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

    const beatPhase = ((t - 0.535) / 0.6 + 8) % 1;
    const pulse = Math.exp(-beatPhase * 5.2);
    state.pulse = pulse;

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

      const live = state.active.has(i);
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
    hitLine.scale.x = (v.spacing * (state.keyCount - 1) + v.ring * 1.5) * v.spread;
    hitLine.material.opacity = 0.45 + pulse * 0.3 + state.energy * 0.15;

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

  }

  function render() {
    composer.render();
  }

  function dispose() {
    renderer.dispose();
  }

  return {
    scene, camera, stage, noteRoot, state,
    makeNote, setSection, animate, render, laneX, laneZ, worldPoint,
    laneScreenXs, laneScreenPoints,
    pressFx, hitFx, missFx, ghostFx, clearGhosts, layout, dispose,
    get noteSpeed() { return state.noteSpeed; },
    set noteSpeed(v) { state.noteSpeed = v; },
    get noteScale() { return Math.max(1, Math.min(1.3, state.view.ring / 1.65)); },
  };
}
