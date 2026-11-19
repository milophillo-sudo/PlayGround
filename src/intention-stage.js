import * as THREE from 'three';

// INTENTION's stage is a separate world from the cathedral: a black particle
// void that opens into an ocean under a dark sky, with a golden libra, four
// growing pillars, floating flowers and a spinning halo star. It is built from
// canvas textures and unlit primitives so the whole set stays cheap enough to
// run alongside the note field on mobile.
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

function skyTexture() {
  const [c, x] = canvas(1024, 512);
  const g = x.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, '#02040c');
  g.addColorStop(0.34, '#06152c');
  g.addColorStop(0.56, '#123a60');
  g.addColorStop(0.72, '#5c8cae');
  g.addColorStop(0.82, '#a8c6d8');
  g.addColorStop(1, '#0b2438');
  x.fillStyle = g; x.fillRect(0, 0, 1024, 512);
  // pale band just above the horizon
  const h = x.createLinearGradient(0, 350, 0, 470);
  h.addColorStop(0, 'rgba(210,235,255,0)');
  h.addColorStop(0.55, 'rgba(200,228,247,.28)');
  h.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = h; x.fillRect(0, 340, 1024, 140);
  // dark cloud banks
  for (let i = 0; i < 26; i++) {
    const cx = Math.random() * 1100 - 40;
    const cy = 190 + Math.random() * 190;
    const r = 40 + Math.random() * 150;
    const cg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    cg.addColorStop(0, `rgba(7,16,30,${0.16 + Math.random() * 0.24})`);
    cg.addColorStop(0.6, `rgba(10,22,40,${0.1 + Math.random() * 0.14})`);
    cg.addColorStop(1, 'rgba(10,22,40,0)');
    x.fillStyle = cg;
    x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.fill();
  }
  return tex(c);
}

function oceanTexture() {
  const [c, x] = canvas(512, 512);
  const g = x.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, 'rgba(45,100,145,.48)');
  g.addColorStop(0.42, 'rgba(22,59,96,.62)');
  g.addColorStop(1, 'rgba(5,20,38,.9)');
  x.fillStyle = g; x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 170; i++) {
    const y = Math.random() * 512;
    const w = 20 + Math.random() * 190;
    const a = 0.03 + Math.random() * 0.12;
    x.strokeStyle = `rgba(180,225,250,${a})`;
    x.lineWidth = 1 + Math.random() * 2.5;
    x.beginPath();
    x.moveTo(Math.random() * 512, y);
    x.quadraticCurveTo(Math.random() * 512, y + 5, Math.random() * 512, y);
    x.stroke();
  }
  for (let i = 0; i < 20; i++) {
    const y = 40 + Math.random() * 420;
    const cx = Math.random() * 512;
    const r = 10 + Math.random() * 55;
    x.strokeStyle = `rgba(210,240,255,${0.04 + Math.random() * 0.07})`;
    x.lineWidth = 2;
    x.beginPath(); x.ellipse(cx, y, r, r * 0.18, 0, 0, Math.PI * 2); x.stroke();
  }
  const t = tex(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(4, 4);
  return t;
}

function flowerTexture() {
  const [c, x] = canvas(128, 128);
  x.translate(64, 64);
  // soft halo
  const halo = x.createRadialGradient(0, 0, 4, 0, 0, 62);
  halo.addColorStop(0, 'rgba(255,255,255,.3)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = halo; x.beginPath(); x.arc(0, 0, 62, 0, Math.PI * 2); x.fill();
  for (let i = 0; i < 6; i++) {
    x.save(); x.rotate((i / 6) * Math.PI * 2);
    const g = x.createRadialGradient(0, -18, 2, 0, -18, 24);
    g.addColorStop(0, 'rgba(255,255,255,.98)');
    g.addColorStop(0.7, 'rgba(240,247,255,.9)');
    g.addColorStop(1, 'rgba(210,235,255,0)');
    x.fillStyle = g;
    x.beginPath(); x.ellipse(0, -22, 13, 24, 0, 0, Math.PI * 2); x.fill();
    x.restore();
  }
  const core = x.createRadialGradient(0, 0, 0, 0, 0, 13);
  core.addColorStop(0, '#fff8d0');
  core.addColorStop(0.5, '#ffd166');
  core.addColorStop(1, 'rgba(255,190,60,0)');
  x.fillStyle = core; x.beginPath(); x.arc(0, 0, 13, 0, Math.PI * 2); x.fill();
  return tex(c);
}

function cloudTexture() {
  const [c, x] = canvas(256, 128);
  for (let i = 0; i < 10; i++) {
    const cx = 40 + Math.random() * 176;
    const cy = 45 + Math.random() * 40;
    const r = 24 + Math.random() * 46;
    const g = x.createRadialGradient(cx, cy, 1, cx, cy, r);
    g.addColorStop(0, 'rgba(40,66,95,.6)');
    g.addColorStop(0.55, 'rgba(24,44,68,.35)');
    g.addColorStop(1, 'rgba(16,30,50,0)');
    x.fillStyle = g;
    x.beginPath(); x.arc(cx, cy, r, 0, Math.PI * 2); x.fill();
  }
  return tex(c);
}

function starTexture() {
  const [c, x] = canvas(256, 256);
  x.translate(128, 128);
  const halo = x.createRadialGradient(0, 0, 0, 0, 0, 124);
  halo.addColorStop(0, 'rgba(255,244,190,.9)');
  halo.addColorStop(0.3, 'rgba(255,210,105,.42)');
  halo.addColorStop(1, 'rgba(255,190,80,0)');
  x.fillStyle = halo; x.beginPath(); x.arc(0, 0, 124, 0, Math.PI * 2); x.fill();
  x.fillStyle = 'rgba(255,248,215,.98)';
  x.shadowColor = '#ffd166'; x.shadowBlur = 26;
  x.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r = i % 2 === 0 ? 92 : 23;
    x.lineTo(Math.cos(a - Math.PI / 2) * r, Math.sin(a - Math.PI / 2) * r);
  }
  x.closePath(); x.fill();
  x.shadowBlur = 0;
  x.fillStyle = '#fff9e0';
  x.beginPath(); x.arc(0, 0, 15, 0, Math.PI * 2); x.fill();
  return tex(c);
}

function glowTexture() {
  const [c, x] = canvas(128, 128);
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.2, 'rgba(255,255,255,.7)');
  g.addColorStop(0.6, 'rgba(255,255,255,.15)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return tex(c);
}

export function createIntentionStage({ scene, camera, lanes, stage, TEX }) {
  const root = new THREE.Group();
  root.name = 'intentionStage';
  root.visible = false;
  scene.add(root);

  const T = {
    sky: skyTexture(), ocean: oceanTexture(), flower: flowerTexture(),
    cloud: cloudTexture(), star: starTexture(), glow: glowTexture(),
  };

  // ---------------------------------------------------------------- levels
  const level = {
    world: 0, void: 0, flowers: 0, pillars: 0, halo: 0, memory: 0,
    bright: 0, glitch: 0, active: false, phase: 'off', portrait: false,
  };
  const target = { world: 0, void: 0, flowers: 0, pillars: 0, halo: 0, memory: 0, bright: 0 };
  const phaseTable = {
    off: {},
    preview: { world: .72, void: .3, flowers: .55, bright: .5 },
    void: { world: 0, void: 1, flowers: 0, bright: .35 },
    ocean: { world: 1, void: .42, flowers: .58, bright: .55 },
    spin: { world: 1, void: .34, flowers: .55, bright: .5 },
    field: { world: 1, void: .34, flowers: .62, bright: .55 },
    pillars: { world: 1, void: .3, flowers: .68, pillars: 1, bright: .68 },
    halo: { world: 1, void: .26, flowers: .7, pillars: 1, halo: 1, bright: .74 },
    dark: { world: .16, void: .5, flowers: .12, pillars: .5, halo: .15, bright: .25 },
    guilt: { world: 0, void: .06, flowers: 0, pillars: 0, halo: 0, bright: .2 },
    offbeat: { world: 0, void: .22, flowers: 0, bright: .25 },
    fastbeat: { world: 0, void: .22, flowers: 0, bright: .25 },
    ocean2: { world: .92, void: .3, flowers: .7, pillars: .25, halo: .18, bright: .55 },
    memory: { world: .95, void: .3, flowers: .8, pillars: .3, halo: .22, memory: 1, bright: .62 },
    static: { world: .9, void: .38, flowers: .6, pillars: .3, halo: .16, memory: .4, bright: .5 },
    determined: { world: 1, void: .2, flowers: 1.12, pillars: .6, halo: .5, bright: 1 },
    white: { world: .2, void: .1, flowers: .2, bright: 1 },
    fake: { world: 0, void: .16, flowers: 0, bright: .2 },
    dawn: { world: 1, void: .22, flowers: 1.5, pillars: .12, halo: .8, memory: .2, bright: 1.15 },
  };

  // ---------------------------------------------------------------- sky
  const skyMat = new THREE.MeshBasicMaterial({
    map: T.sky, side: THREE.BackSide, transparent: true, opacity: 0,
    depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(190, 32, 18), skyMat);
  sky.renderOrder = -30;
  root.add(sky);

  // ocean plane
  const oceanMat = new THREE.MeshBasicMaterial({
    map: T.ocean, transparent: true, opacity: 0, depthWrite: false, fog: false,
  });
  const ocean = new THREE.Mesh(new THREE.PlaneGeometry(340, 260), oceanMat);
  ocean.rotation.x = -Math.PI / 2;
  ocean.position.set(0, -5.6, -72);
  ocean.renderOrder = -20;
  root.add(ocean);

  // cloud banks
  const clouds = [];
  for (let i = 0; i < 16; i++) {
    const mat = new THREE.SpriteMaterial({
      map: T.cloud, color: i % 3 ? 0x7b9cba : 0x3d5a78,
      transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    const s = new THREE.Sprite(mat);
    const side = i % 2 ? 1 : -1;
    s.position.set(side * (16 + Math.random() * 74), 6 + Math.random() * 30, -62 - Math.random() * 80);
    const sc = 30 + Math.random() * 62;
    s.scale.set(sc, sc * .4, 1);
    s.renderOrder = -18;
    root.add(s);
    clouds.push({ sprite: s, mat, base: .24 + Math.random() * .24, phase: Math.random() * 6.28, x: s.position.x, sx: sc, sy: sc * .4 });
  }

  // ---------------------------------------------------------------- flowers
  const FLOWERS = 340;
  const fPos = new Float32Array(FLOWERS * 3);
  const fCol = new Float32Array(FLOWERS * 3);
  const fBase = new Float32Array(FLOWERS * 3);
  const fPhase = new Float32Array(FLOWERS);
  const flowerColors = [new THREE.Color(0xffffff), new THREE.Color(0xffe9f4), new THREE.Color(0xfff2c8), new THREE.Color(0xd8ecff)];
  for (let i = 0; i < FLOWERS; i++) {
    const x = (Math.random() - .5) * 140;
    const z = -12 - Math.random() * 118;
    const y = -5.32 + Math.random() * .22;
    fBase[i * 3] = x; fBase[i * 3 + 1] = y; fBase[i * 3 + 2] = z;
    fPos[i * 3] = x; fPos[i * 3 + 1] = y; fPos[i * 3 + 2] = z;
    const c = flowerColors[i % flowerColors.length];
    fCol[i * 3] = c.r; fCol[i * 3 + 1] = c.g; fCol[i * 3 + 2] = c.b;
    fPhase[i] = Math.random() * 6.28;
  }
  const fGeo = new THREE.BufferGeometry();
  fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  fGeo.setAttribute('color', new THREE.BufferAttribute(fCol, 3));
  const fMat = new THREE.PointsMaterial({
    size: 1.15, map: T.flower, vertexColors: true, transparent: true, opacity: 0,
    depthWrite: false, blending: THREE.NormalBlending, sizeAttenuation: true, fog: false,
  });
  const flowers = new THREE.Points(fGeo, fMat);
  flowers.renderOrder = -12;
  root.add(flowers);

  // ---------------------------------------------------------------- libra
  const libra = new THREE.Group();
  let libraHomeZ = -27;
  libra.position.set(0, -5.4, libraHomeZ);
  root.add(libra);
  const goldMat = new THREE.MeshBasicMaterial({ color: 0xffc54a, transparent: true, opacity: 0, fog: false });
  const paleMat = new THREE.MeshBasicMaterial({ color: 0xffefbc, transparent: true, opacity: 0, fog: false });
  const darkMat = new THREE.MeshBasicMaterial({ color: 0x6b4a1a, transparent: true, opacity: 0, fog: false });
  const libraMats = [goldMat, paleMat, darkMat];
  function addCyl(mat, rTop, rBot, h, y, seg = 12) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), mat);
    m.position.y = y;
    libra.add(m);
    return m;
  }
  addCyl(darkMat, 2.8, 3.5, 0.7, 0.35);
  addCyl(goldMat, 2.2, 2.8, 0.5, 0.9);
  addCyl(darkMat, 1.25, 2.0, 0.4, 1.32);
  addCyl(goldMat, .42, .62, 6.6, 4.8);
  addCyl(paleMat, .8, .5, .5, 8.2);
  const beam = new THREE.Mesh(new THREE.BoxGeometry(13.6, .34, .44), goldMat);
  beam.position.y = 8.7;
  libra.add(beam);
  const beamCap = new THREE.Mesh(new THREE.SphereGeometry(.42, 10, 8), paleMat);
  beamCap.position.y = 8.7;
  libra.add(beamCap);
  // beam tips
  for (const side of [-1, 1]) {
    const tip = new THREE.Mesh(new THREE.SphereGeometry(.3, 8, 6), paleMat);
    tip.position.set(side * 6.7, 8.7, 0);
    libra.add(tip);
    // chain with a little sag
    const pts = [];
    for (let k = 0; k <= 8; k++) {
      const p = k / 8;
      pts.push(new THREE.Vector3(side * 6.7, 8.7 - p * 4.4 + Math.sin(p * Math.PI) * .42, 0));
    }
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      new THREE.LineBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0, fog: false }),
    );
    libra.add(line);
    libraMats.push(line.material);
    const pan = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 1.7, .26, 20), goldMat);
    pan.position.set(side * 6.7, 4.05, 0);
    libra.add(pan);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(2.12, .09, 6, 28), paleMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(side * 6.7, 4.18, 0);
    libra.add(rim);
    const weight = new THREE.Mesh(new THREE.IcosahedronGeometry(.52, 0), paleMat);
    weight.position.set(side * 6.7, 4.5, 0);
    libra.add(weight);
  }
  // top star and halo rings
  const halo = new THREE.Group();
  halo.position.set(0, 9.9, 0);
  libra.add(halo);
  const starMat = new THREE.SpriteMaterial({
    map: T.star, color: 0xffe7a0, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const star = new THREE.Sprite(starMat);
  star.scale.set(4.2, 4.2, 1);
  star.renderOrder = 2;
  halo.add(star);
  const haloMats = [starMat];
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.7 + i * 1.05, .055, 4, 64),
      new THREE.MeshBasicMaterial({ color: i ? 0xffd166 : 0xfff3cf, transparent: true, opacity: 0, fog: false }),
    );
    ring.rotation.set(Math.PI / 2 + i * .32, i * .6, i * .2);
    halo.add(ring);
    haloMats.push(ring.material);
  }
  const haloGlowMat = new THREE.SpriteMaterial({
    map: T.glow, color: 0xffd166, transparent: true, opacity: 0,
    depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const haloGlow = new THREE.Sprite(haloGlowMat);
  haloGlow.scale.set(14, 14, 1);
  haloGlow.renderOrder = 1;
  halo.add(haloGlow);
  haloMats.push(haloGlowMat);

  // ---------------------------------------------------------------- pillars
  const pillarDefs = [
    { x: 0, z: -58, h: 25, w: 2.1, hue: 0x355f8a },   // north
    { x: -34, z: -36, h: 17, w: 1.8, hue: 0x294c72 }, // west
    { x: 34, z: -36, h: 21, w: 1.9, hue: 0x2c527c },  // east
    { x: 0, z: -14, h: 10, w: 1.5, hue: 0x203d5e },   // south
  ];
  const pillars = [];
  for (const d of pillarDefs) {
    const g = new THREE.Group();
    g.position.set(d.x, -5.6, d.z);
    root.add(g);
    const solidMat = new THREE.MeshBasicMaterial({ color: d.hue, transparent: true, opacity: 0, fog: false });
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0, fog: false });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(d.w * .83, d.w, 1, 8, 1, true), solidMat);
    body.position.y = .5;
    g.add(body);
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(d.w * .86, d.w * 1.03, 1, 8, 1, true), edgeMat);
    edge.position.y = .5;
    g.add(edge);
    const capMat = new THREE.SpriteMaterial({
      map: T.glow, color: 0xbfe6ff, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const cap = new THREE.Sprite(capMat);
    cap.scale.set(4.5, 4.5, 1);
    cap.position.y = 1;
    g.add(cap);
    pillars.push({ group: g, body, edge, cap, mat: solidMat, edgeMat, capMat, def: d, h: 0, flash: 0, grow: 0 });
  }

  // ---------------------------------------------------------------- void motes
  const MOTES = 420;
  const mPos = new Float32Array(MOTES * 3);
  const mBase = new Float32Array(MOTES * 3);
  const mPhase = new Float32Array(MOTES);
  for (let i = 0; i < MOTES; i++) {
    const x = (Math.random() - .5) * 64;
    const y = -3 + Math.random() * 24;
    const z = -26 + Math.random() * 42;
    mBase[i * 3] = x; mBase[i * 3 + 1] = y; mBase[i * 3 + 2] = z;
    mPos[i * 3] = x; mPos[i * 3 + 1] = y; mPos[i * 3 + 2] = z;
    mPhase[i] = Math.random() * 6.28;
  }
  const mGeo = new THREE.BufferGeometry();
  mGeo.setAttribute('position', new THREE.BufferAttribute(mPos, 3));
  const mMat = new THREE.PointsMaterial({
    size: .34, map: T.glow, color: 0xffffff, transparent: true, opacity: 0,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false,
  });
  const motes = new THREE.Points(mGeo, mMat);
  motes.renderOrder = 6;
  root.add(motes);

  // ---------------------------------------------------------------- memories
  const memories = [];
  for (let i = 0; i < 18; i++) {
    const mat = new THREE.SpriteMaterial({
      map: T.glow, color: i % 3 ? 0xff5f7f : 0xffd166, transparent: true, opacity: 0,
      depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending, fog: false,
    });
    const s = new THREE.Sprite(mat);
    s.scale.set(.8 + Math.random() * 1.8, .8 + Math.random() * 1.8, 1);
    s.renderOrder = -8;
    root.add(s);
    memories.push({
      sprite: s, mat, x: (Math.random() - .5) * 18,
      z: -20 - Math.random() * 28,
      phase: Math.random() * 6.28,
      speed: .5 + Math.random() * .7,
    });
  }

  // ---------------------------------------------------------------- update
  let time = 0;
  let pulse = 0;

  function setPhase(phase) {
    level.phase = phase;
    const t = phaseTable[phase] || phaseTable.off;
    target.world = t.world ?? 0;
    target.void = t.void ?? 0;
    target.flowers = t.flowers ?? 0;
    target.pillars = t.pillars ?? 0;
    target.halo = t.halo ?? 0;
    target.memory = t.memory ?? 0;
    target.bright = t.bright ?? 0;
    // The guilt/glitch transitions are cuts, not dissolves: black them out on
    // the downbeat so no ocean or libra silhouette leaks into the void.
    if (phase === 'guilt' || phase === 'fake' || phase === 'offbeat' || phase === 'fastbeat') {
      level.world = Math.min(level.world, target.world + 0.01);
      level.flowers = Math.min(level.flowers, target.flowers + 0.01);
      level.pillars = Math.min(level.pillars, target.pillars + 0.01);
      level.halo = Math.min(level.halo, target.halo + 0.01);
      level.memory = Math.min(level.memory, target.memory + 0.01);
    }
  }

  function setActive(on) {
    level.active = !!on;
    root.visible = !!on;
    if (!on) {
      level.phase = 'off';
      for (const k of Object.keys(target)) target[k] = 0;
    }
  }

  function beat(power = 1) {
    pulse = Math.max(pulse, Math.min(1.4, power));
    for (const p of pillars) p.flash = Math.max(p.flash, power * .8);
  }

  function glitch(power = 1) {
    level.glitch = Math.min(2.2, level.glitch + power);
  }

  function update(dt, songTime) {
    if (!level.active) return;
    time = songTime;
    pulse *= Math.exp(-dt * 4.2);
    level.glitch *= Math.exp(-dt * 4.8);
    for (const k of Object.keys(target)) {
      level[k] += (target[k] - level[k]) * (1 - Math.exp(-dt * 2.6));
    }

    const world = level.world;
    const voidA = level.void;
    const gl = level.glitch;

    root.visible = world > .012 || voidA > .012 || level.flowers > .01;
    skyMat.opacity = world * (.9 + level.bright * .08);
    oceanMat.opacity = world * .94;
    T.ocean.offset.x = (time * .005) % 1;
    T.ocean.offset.y = (time * .013) % 1;
    ocean.position.x = Math.sin(time * .04) * 2;

    // The libra breathes with the pulse and tilts like a real balance.
    libra.position.y = -5.4 + Math.sin(time * .38) * .08;
    libra.rotation.z = Math.sin(time * .31) * .012 + (pulse * .006);
    beam.rotation.z = Math.sin(time * .5) * .025 + Math.sin(time * .17) * .012;
    beam.rotation.y = Math.sin(time * .2) * .03;
    beamCap.scale.setScalar(1 + pulse * .18);
    halo.rotation.y += dt * (1.1 + pulse * 2.2);
    halo.rotation.z += dt * .45;
    halo.rotation.x = Math.sin(time * .3) * .12;
    const hf = level.halo;
    star.scale.set(4.2 * (1 + pulse * .16), 4.2 * (1 + pulse * .16), 1);
    starMat.opacity = (world * .55 + hf * .4) * (0.85 + pulse * .15);
    haloMats[1].opacity = hf * (.5 + pulse * .25);
    haloMats[2].opacity = hf * (.32 + pulse * .2);
    haloMats[3].opacity = hf * (.2 + pulse * .14);
    haloMats[4].opacity = hf * (.07 + pulse * .07);
    for (const m of libraMats) {
      if (m === goldMat) m.opacity = world * .96;
      else if (m === paleMat) m.opacity = world * .92;
      else if (m === darkMat) m.opacity = world * .8;
      else m.opacity = world * .55;
    }
    for (const m of haloMats) if (m !== starMat) { /* handled above */ }

    // Clouds drift; a slow parallax keeps the sky from feeling painted on.
    for (const c of clouds) {
      c.sprite.position.x = c.x + Math.sin(time * .035 + c.phase) * 3.2;
      c.sprite.position.y += Math.sin(time * .055 + c.phase) * dt * .12;
      c.mat.opacity = world * c.base * (.85 + .15 * Math.sin(time * .2 + c.phase));
    }

    // Flowers ride the swell and open up at dawn.
    const open = Math.min(1.8, level.flowers);
    fMat.opacity = world * Math.min(1, .18 + open * .68);
    fMat.size = 1.05 + open * .2;
    // The dawn uncovers the whole bloom, not just the petals already on screen.
    fGeo.setDrawRange(0, Math.min(FLOWERS, Math.floor(FLOWERS * (.62 + Math.min(.5, open * .36)))));
    for (let i = 0; i < FLOWERS; i++) {
      const ph = fPhase[i];
      const x = fBase[i * 3];
      const y = fBase[i * 3 + 1] + Math.sin(time * .75 + ph) * .16 + Math.sin(time * .27 + ph * 2.1) * .1;
      const z = fBase[i * 3 + 2];
      fPos[i * 3] = x + Math.sin(time * .19 + ph) * .45;
      fPos[i * 3 + 1] = y + open * .1;
      fPos[i * 3 + 2] = z;
    }
    fGeo.attributes.position.needsUpdate = true;

    // Pillars grow out of the ocean, then keep a slow ember pulse.
    for (const p of pillars) {
      const wanted = level.pillars * (1 + Math.sin(time * .33 + p.def.x * .04) * .012);
      p.grow += (wanted - p.grow) * (1 - Math.exp(-dt * 1.7));
      p.flash *= Math.exp(-dt * 2.4);
      const h = Math.max(.001, p.def.h * p.grow);
      p.h = h;
      p.body.scale.y = h;
      p.edge.scale.y = h;
      p.body.position.y = h * .5;
      p.edge.position.y = h * .5;
      p.cap.position.y = h + .4;
      p.cap.scale.setScalar((2.6 + pulse * 1.5) * Math.min(1, p.grow * 2));
      p.mat.opacity = world * (.3 + p.flash * .5);
      p.edgeMat.opacity = world * (.14 + p.flash * .45);
      p.capMat.opacity = world * (.04 + p.flash * .2 + pulse * .05);
      p.mat.color.set(p.def.hue).lerp(new THREE.Color(0xffd166), Math.min(1, p.flash));
      p.edgeMat.color.set(0x9fd8ff).lerp(new THREE.Color(0xfff1c0), Math.min(1, p.flash));
    }

    // Memory wisps rise toward the sky during the MEMORY phase.
    const mem = level.memory;
    for (let i = 0; i < memories.length; i++) {
      const m = memories[i];
      const cyc = ((time * m.speed + m.phase * 3.1) % 24 + 24) % 24;
      const y = -6 + cyc * 1.15;
      m.sprite.position.set(
        m.x + Math.sin(time * .24 + m.phase) * 1.8,
        y,
        m.z + Math.cos(time * .18 + m.phase) * 1.2,
      );
      const fade = Math.sin(Math.min(1, Math.max(0, y / 20)) * Math.PI);
      m.mat.opacity = Math.max(0, mem * .5 * fade * (0.7 + 0.3 * Math.sin(time * 3 + m.phase)));
      m.sprite.visible = m.mat.opacity > .004;
    }

    // Void motes: slow upward drift and drift-around, brightest when there is
    // no world behind them.
    mMat.opacity = Math.max(voidA, world * .26) * .84;
    mMat.size = .3 + voidA * .08;
    for (let i = 0; i < MOTES; i++) {
      const ph = mPhase[i];
      mPos[i * 3] = mBase[i * 3] + Math.sin(time * .11 + ph) * 1.7;
      mPos[i * 3 + 1] = mBase[i * 3 + 1] + Math.sin(time * .17 + ph * 1.7) * 1.3
        + ((time * (0.16 + (i % 5) * .035) + ph * 2.4) % 22) - 8;
      mPos[i * 3 + 2] = mBase[i * 3 + 2] + Math.cos(time * .09 + ph) * 1.3;
    }
    mGeo.attributes.position.needsUpdate = true;

    // world glitch: cramped, jittered geometry during the fracture sections
    if (gl > .005) {
      const k = gl * .12;
      libra.position.x = (Math.random() - .5) * k;
      libra.position.z = libraHomeZ + (Math.random() - .5) * k;
      for (const c of clouds) c.sprite.position.x += (Math.random() - .5) * k * .4;
      sky.rotation.z = (Math.random() - .5) * gl * .01;
    } else {
      libra.position.x *= .92;
      libra.position.z = libraHomeZ + (libra.position.z - libraHomeZ) * .92;
      sky.rotation.z *= .9;
    }
  }

  function layout(portrait) {
    level.portrait = portrait;
    const s = portrait ? .92 : 1.35;
    libra.scale.setScalar(s);
    libraHomeZ = portrait ? -36 : -27;
    libra.position.z = libraHomeZ;
    libra.position.y = -5.4;
    sky.scale.setScalar(portrait ? 1.15 : 1);
    pillars[0].group.position.z = portrait ? -64 : -58;
    pillars[1].group.position.x = portrait ? -27 : -34;
    pillars[2].group.position.x = portrait ? 27 : 34;
    halo.position.y = portrait ? 9.4 : 9.9;
    for (const c of clouds) {
      const k = portrait ? .82 : 1;
      c.sprite.scale.set(c.sx * k, c.sy * k, 1);
    }
  }

  return { root, setPhase, setActive, update, beat, glitch, layout, level };
}
