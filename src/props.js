import * as THREE from 'three';
import { T, makeGlowTexture } from './textures.js';

// ─────────────────────────────────────────────────────────────
// shared geometry + materials
// ─────────────────────────────────────────────────────────────
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const cylGeo = new THREE.CylinderGeometry(1, 1, 1, 14);
const sphereGeo = new THREE.SphereGeometry(1, 16, 12);
const cacheM = new Map();
function mat(key, params) {
  if (!cacheM.has(key)) cacheM.set(key, new THREE.MeshStandardMaterial(params));
  return cacheM.get(key);
}
function M(color, roughness = 0.8, metalness = 0, extra = {}) {
  return mat('m' + color + roughness + metalness + JSON.stringify(extra), { color, roughness, metalness, ...extra });
}

export function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(boxGeo, material);
  m.scale.set(w, h, d); m.position.set(x, y, z);
  return m;
}
export function cyl(rt, rb, h, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(cylGeo, material);
  const r = (rt + rb) / 2;
  m.scale.set(r, h, r);
  m.position.set(x, y, z);
  return m;
}
export function sphere(r, material, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(sphereGeo, material);
  m.scale.set(r * sx, r * sy, r * sz);
  m.position.set(x, y, z);
  return m;
}
function capsule(r, len, material) {
  const g = new THREE.CapsuleGeometry(r, len, 6, 10);
  return new THREE.Mesh(g, material);
}
function group(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  if (parent) parent.add(g);
  return g;
}
function shade(hex, f) {
  const c = new THREE.Color(hex);
  c.multiplyScalar(f);
  return c.getHex();
}

// ─────────────────────────────────────────────────────────────
// labels, signs, glow
// ─────────────────────────────────────────────────────────────
function labelTexture(text, opts) {
  const { color = '#8dffb2', bg = 'rgba(4,10,7,.85)', size = 512, h = 96, font = 'bold 44px Courier New' } = opts;
  const c = document.createElement('canvas');
  c.width = size; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, size, h);
  g.strokeStyle = color; g.lineWidth = 3; g.strokeRect(3, 3, size - 6, h - 6);
  g.fillStyle = color; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, size / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeLabel(text, opts = {}) {
  const tex = labelTexture(text, opts);
  const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(m);
  sprite.scale.set((opts.size || 512) / (opts.h || 96) * 0.5, 0.5, 1);
  return sprite;
}

// A wall-mounted version of makeLabel. Sprites always turn to face the
// camera, which makes long hallway banners look like they float in the
// middle of the corridor. Wall signs need to stay stuck to their wall.
export function makeLabelPlane(text, opts = {}) {
  const tex = labelTexture(text, opts);
  const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
  mesh.scale.set((opts.size || 512) / (opts.h || 96) * 0.5, 0.5, 1);
  return mesh;
}

export function makeSignPlane(text, w = 0.55, h = 0.45, color = '#ff5566') {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#0a0d0b'; g.fillRect(0, 0, 256, 256);
  g.strokeStyle = color; g.lineWidth = 12; g.strokeRect(10, 10, 236, 236);
  g.fillStyle = color; g.font = 'bold 150px Courier New'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(text, 128, 138);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.MeshBasicMaterial({ map: tex, transparent: true });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
}

export function makeGlow(color = '#8dffb2', scale = 0.8) {
  const tex = makeGlowTexture(color);
  const m = new THREE.SpriteMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.5 });
  const s = new THREE.Sprite(m);
  s.scale.set(scale, scale, 1);
  return s;
}

export function makePoster(id, w = 1.15, h = 1.6) {
  const m = new THREE.MeshStandardMaterial({ map: T.poster(id), roughness: 0.9, side: THREE.DoubleSide });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
}

// ─────────────────────────────────────────────────────────────
// humans — layered, articulated, with face + talk rig
// ─────────────────────────────────────────────────────────────
const SKINS = [0xd9b49b, 0xb98768, 0x8a5b3e, 0x6b452f, 0xe4c3a8, 0xa9724f];
const HAIRS = [0x241a14, 0x3a2618, 0x5a3b25, 0x151210, 0x7a5a34, 0x402b1d];
const SHIRTS = [0x3d5a80, 0x6a3038, 0x445d46, 0x6b5a3a, 0x4d4660, 0x2f4f52, 0x7a6a58, 0x832f3b];

export function makePerson(opts = {}) {
  const {
    skin = SKINS[0], shirt = SHIRTS[0], pants = 0x2a3040, hair = HAIRS[0],
    hairStyle = 'short', height = 1.72, backpack = null, female = false,
    tie = null, glasses = false, cap = null, beard = false, name = '',
    sleeves = 'long', shoes = 0x17181c, badge = null
  } = opts;

  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const s = height / 1.8;
  body.scale.setScalar(s);

  const skinM = mat('sk' + skin, { color: skin, roughness: 0.82 });
  const skinShade = mat('sks' + skin, { color: shade(skin, 0.86), roughness: 0.85 });
  const shirtM = mat('sh' + shirt, { color: shirt, roughness: 0.92 });
  const shirtDark = mat('shd' + shirt, { color: shade(shirt, 0.72), roughness: 0.92 });
  const pantsM = mat('pa' + pants, { color: pants, roughness: 0.94 });
  const pantsDark = mat('pad' + pants, { color: shade(pants, 0.7), roughness: 0.94 });
  const hairM = mat('ha' + hair, { color: hair, roughness: 0.75 });
  const shoeM = mat('shoe' + shoes, { color: shoes, roughness: 0.55 });
  const darkM = mat('darkFabric', { color: 0x14161b, roughness: 0.8 });
  const metalM = mat('metalZ', { color: 0xa8b0af, roughness: 0.3, metalness: 0.85 });

  const hips = group(body, 0, 0.92, 0);
  const pelvis = box(0.34, 0.22, 0.24, pantsM, 0, -0.02, 0);
  hips.add(pelvis);
  hips.add(box(0.36, 0.05, 0.26, pantsDark, 0, 0.08, 0));
  // belt + buckle
  hips.add(box(0.35, 0.055, 0.255, darkM, 0, 0.1, 0));
  hips.add(box(0.07, 0.05, 0.02, metalM, 0, 0.1, 0.135));

  const torso = group(hips, 0, 0.1, 0);
  const chest = capsule(0.205, 0.3, shirtM);
  chest.position.y = 0.25;
  chest.scale.set(1.06, 1, 0.72);
  torso.add(chest);
  // shoulder yoke
  const yoke = sphere(0.23, shirtM, 0, 0.42, 0, 1.12, 0.62, 0.72);
  torso.add(yoke);
  // collar
  const collar = box(0.3, 0.05, 0.24, shirtDark, 0, 0.51, 0.01);
  torso.add(collar);
  if (tie) {
    const tieM = mat('tieC' + tie, { color: tie, roughness: 0.7 });
    torso.add(box(0.06, 0.3, 0.02, tieM, 0, 0.34, 0.152));
    torso.add(box(0.09, 0.08, 0.02, tieM, 0, 0.47, 0.15));
  } else {
    // buttons on shirt
    for (let i = 0; i < 3; i++) torso.add(sphere(0.012, darkM, 0, 0.2 + i * 0.1, 0.155));
  }
  if (badge) {
    const b = box(0.1, 0.13, 0.015, mat('badge' + badge, { color: badge, roughness: 0.6, metalness: 0.3 }), -0.11, 0.3, 0.152);
    torso.add(b);
  }
  // hem
  torso.add(box(0.37, 0.05, 0.25, shirtDark, 0, -0.03, 0));

  // neck + head
  const neck = cyl(0.062, 0.075, 0.12, skinM, 0, 0.54, 0);
  torso.add(neck);
  const headPivot = group(torso, 0, 0.6, 0);
  const head = group(headPivot, 0, 0.1, 0);
  const skull = sphere(0.125, skinM, 0, 0.03, 0, 0.94, 1.12, 0.95);
  head.add(skull);
  // jaw / cheeks
  head.add(sphere(0.09, skinM, 0, -0.06, 0.02, 1.15, 0.8, 1.0));
  // nose
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.055, 8), skinShade);
  nose.rotation.x = Math.PI / 2;
  nose.position.set(0, 0.015, 0.128);
  head.add(nose);
  // ears
  [-1, 1].forEach(sd => head.add(sphere(0.028, skinShade, sd * 0.118, 0.03, 0, 1, 1.2, 0.6)));
  // eyes
  const eyes = [];
  [-1, 1].forEach(sd => {
    const white = sphere(0.026, M(0xe8e4dc, 0.45), sd * 0.048, 0.05, 0.103, 1, 0.9, 0.55);
    head.add(white);
    const pupil = sphere(0.013, M(0x231b16, 0.2), sd * 0.05, 0.05, 0.121, 1, 1, 0.5);
    head.add(pupil);
    // remember the authored scale: the blink pass multiplies these instead
    // of replacing them (replacing turned every eye into a 2m spike)
    white.userData.baseY = white.scale.y;
    pupil.userData.baseY = pupil.scale.y;
    eyes.push({ white, pupil });
    const brow = box(0.055, 0.011, 0.012, hairM, sd * 0.05, 0.088, 0.112);
    brow.rotation.z = -sd * 0.12;
    head.add(brow);
  });
  // mouth (animated)
  const mouth = box(0.066, 0.014, 0.012, M(0x5c2a2b, 0.55), 0, -0.032, 0.113);
  mouth.userData.baseX = mouth.scale.x;
  mouth.userData.baseY = mouth.scale.y;
  head.add(mouth);
  const lips = box(0.075, 0.006, 0.013, M(0x8f4a48, 0.6), 0, -0.04, 0.114);
  head.add(lips);
  // hair
  const hairG = new THREE.Group();
  head.add(hairG);
  // The dome used to sweep below the eye line, which painted a black band
  // across every character's face. Stop it above the brows.
  const capHair = new THREE.Mesh(new THREE.SphereGeometry(0.133, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.42), hairM);
  capHair.scale.set(1.0, 1.1, 1.02);
  capHair.position.set(0, 0.058, -0.008);
  hairG.add(capHair);
  if (hairStyle === 'long') {
    const back = box(0.22, 0.34, 0.1, hairM, 0, -0.09, -0.09);
    hairG.add(back);
    hairG.add(box(0.055, 0.26, 0.07, hairM, -0.125, -0.04, 0.01));
    hairG.add(box(0.055, 0.26, 0.07, hairM, 0.125, -0.04, 0.01));
  } else if (hairStyle === 'pony') {
    const p = cyl(0.045, 0.03, 0.26, hairM, 0, -0.02, -0.14);
    p.rotation.x = -0.4; hairG.add(p);
    hairG.add(sphere(0.055, hairM, 0, 0.0, -0.11, 1, 1, 1));
  } else if (hairStyle === 'bun') {
    hairG.add(sphere(0.07, hairM, 0, 0.11, -0.13));
  } else if (hairStyle === 'curly') {
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      hairG.add(sphere(0.055, hairM, Math.cos(a) * 0.1, 0.07 + Math.sin(a * 2) * 0.03, -0.02 + Math.sin(a) * 0.08));
    }
  } else if (hairStyle === 'buzz') {
    capHair.scale.set(0.98, 0.9, 0.98);
  }
  if (beard) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8, 0, Math.PI * 2, Math.PI * 0.42, Math.PI * 0.5), hairM);
    b.position.set(0, -0.035, 0.02);
    b.scale.set(0.98, 1.0, 0.95);
    head.add(b);
  }
  if (glasses) {
    const frame = M(0x20242a, 0.3, 0.6);
    [-1, 1].forEach(sd => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.034, 0.006, 6, 14), frame);
      ring.position.set(sd * 0.05, 0.05, 0.126);
      head.add(ring);
    });
    head.add(box(0.032, 0.007, 0.007, frame, 0, 0.052, 0.129));
    head.add(box(0.1, 0.007, 0.007, frame, 0.104, 0.06, 0.11));
    head.add(box(0.1, 0.007, 0.007, frame, -0.104, 0.06, 0.11));
  }
  if (cap) {
    const capM = mat('cap' + cap, { color: cap, roughness: 0.8 });
    const crown = new THREE.Mesh(new THREE.SphereGeometry(0.138, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), capM);
    crown.position.set(0, 0.075, 0);
    head.add(crown);
    const brim = box(0.2, 0.02, 0.11, capM, 0, 0.083, 0.135);
    head.add(brim);
  }

  // arms
  function makeArm(side) {
    const shoulder = group(torso, side * 0.265, 0.4, 0);
    shoulder.rotation.z = side * 0.07;
    const upper = capsule(0.062, 0.2, sleeves === 'short' ? skinM : shirtM);
    upper.position.y = -0.14;
    shoulder.add(upper);
    if (sleeves === 'long') shoulder.add(box(0.105, 0.03, 0.1, shirtDark, 0, -0.29, 0));
    const elbow = group(shoulder, 0, -0.29, 0);
    const fore = capsule(0.052, 0.2, skinM);
    fore.position.y = -0.14;
    elbow.add(fore);
    const hand = group(elbow, 0, -0.29, 0);
    hand.add(sphere(0.058, skinM, 0, 0, 0, 1.1, 0.9, 0.8));
    // fingers
    for (let i = 0; i < 4; i++) hand.add(box(0.018, 0.055, 0.022, skinM, -0.033 + i * 0.022, -0.05, 0.01));
    const thumb = box(0.02, 0.045, 0.025, skinM, side * 0.05, -0.02, 0.015);
    thumb.rotation.z = side * 0.6;
    hand.add(thumb);
    return { shoulder, elbow, hand, upper, fore };
  }
  const armL = makeArm(-1), armR = makeArm(1);

  // legs
  function makeLeg(side) {
    const hip = group(hips, side * 0.1, -0.02, 0);
    const thigh = capsule(0.085, 0.27, pantsM);
    thigh.position.y = -0.2;
    hip.add(thigh);
    const knee = group(hip, 0, -0.42, 0);
    const shin = capsule(0.07, 0.28, pantsM);
    shin.position.y = -0.2;
    knee.add(shin);
    // sock
    knee.add(box(0.11, 0.08, 0.11, M(0xe4e0d4, 0.9), 0, -0.36, 0));
    const foot = group(knee, 0, -0.39, 0);
    const shoe = box(0.115, 0.09, 0.26, shoeM, 0, -0.045, 0.055);
    foot.add(shoe);
    foot.add(box(0.12, 0.03, 0.27, M(0x2b2d32, 0.5), 0, -0.08, 0.055));
    return { hip, knee, foot };
  }
  const legL = makeLeg(-1), legR = makeLeg(1);

  if (backpack) {
    const bpM = mat('bp' + backpack, { color: backpack, roughness: 0.9 });
    const bp = box(0.32, 0.42, 0.17, bpM, 0, 0.2, -0.21);
    torso.add(bp);
    torso.add(box(0.3, 0.05, 0.14, shade(backpack, 0.7), 0, 0.05, -0.25));
    torso.add(box(0.05, 0.32, 0.03, darkM, -0.13, 0.35, -0.1));
    torso.add(box(0.05, 0.32, 0.03, darkM, 0.13, 0.35, -0.1));
  }

  // small idle accessories: lanyard for staff, wristband
  if (female && !backpack) {
    const bag = box(0.2, 0.26, 0.1, M(0x5a3a40, 0.9), 0.26, 0.04, -0.02);
    torso.add(bag);
    torso.add(box(0.02, 0.4, 0.02, darkM, 0.26, 0.32, 0.02));
  }

  if (name) {
    const lbl = makeLabel(name, { color: '#e7f5ea', bg: 'rgba(3,8,6,.62)', size: 512, h: 96, font: 'bold 38px Courier New' });
    lbl.position.set(0, 1.96, 0);
    lbl.scale.set(0.72, 0.18, 1);
    lbl.userData.isName = true;
    root.add(lbl);
    root.userData.nameSprite = lbl;
  }

  root.userData.parts = {
    body, hips, torso, chest, headPivot, head, mouth, eyes, hairG,
    armL: armL.shoulder, armR: armR.shoulder,
    elbowL: armL.elbow, elbowR: armR.elbow,
    handL: armL.hand, handR: armR.hand,
    legL: legL.hip, legR: legR.hip,
    kneeL: legL.knee, kneeR: legR.knee,
    footL: legL.foot, footR: legR.foot,
    height, scale: s
  };
  root.userData.anim = { phase: Math.random() * 6, blink: 0, blinkT: 2 + Math.random() * 4, talk: 0, look: 0 };
  root.userData.kind = 'person';
  return root;
}

export function animatePerson(model, dt, opts = {}) {
  if (!model || !model.userData.parts) return;
  const p = model.userData.parts;
  const a = model.userData.anim;
  const { mode = 'idle', speed = 0, talk = 0, lookAt = null, crouch = 0, gesture = 0, panic = 0 } = opts;
  a.phase += dt * (mode === 'run' ? 10.5 : mode === 'walk' ? 6.4 : 1.5);
  a.talk += (talk - a.talk) * Math.min(1, dt * 14);
  a.blinkT -= dt;
  if (a.blinkT <= 0) { a.blink = 0.14; a.blinkT = 2.4 + Math.random() * 4.6; }
  a.blink = Math.max(0, a.blink - dt);

  const ph = a.phase;
  const run = mode === 'run' ? 1 : mode === 'walk' ? 0.62 : 0;
  const panicAmt = panic;
  const bob = Math.abs(Math.sin(ph)) * 0.02 * run;
  const breathe = Math.sin(a.phase * 0.55) * 0.008;
  p.hips.position.y = 0.92 - crouch * 0.34 + bob - panicAmt * 0.02;
  p.hips.rotation.x = (mode === 'run' ? 0.08 : mode === 'walk' ? 0.02 : 0) + panicAmt * 0.06;
  p.torso.rotation.x = (mode === 'run' ? 0.2 : 0) + panicAmt * 0.1 + (a.talk > 0.2 ? Math.sin(ph * 2.4) * 0.02 : 0);
  p.torso.rotation.z = Math.sin(ph * 0.5) * 0.012 + Math.sin(a.phase * 0.4) * 0.006;
  p.chest.scale.set(1.06 + breathe, 1, 0.72 + breathe * 0.5);

  if (mode === 'walk' || mode === 'run') {
    const amp = mode === 'run' ? 0.85 : 0.5;
    p.legL.rotation.x = Math.sin(ph) * amp;
    p.legR.rotation.x = -Math.sin(ph) * amp;
    p.kneeL.rotation.x = Math.max(0, -Math.sin(ph + 0.5)) * (mode === 'run' ? 1.1 : 0.65);
    p.kneeR.rotation.x = Math.max(0, Math.sin(ph + 0.5)) * (mode === 'run' ? 1.1 : 0.65);
    p.armL.rotation.x = -Math.sin(ph) * amp * 0.75;
    p.armR.rotation.x = Math.sin(ph) * amp * 0.75;
    p.elbowL.rotation.x = -0.15 - Math.max(0, Math.sin(ph)) * 0.35;
    p.elbowR.rotation.x = -0.15 - Math.max(0, -Math.sin(ph)) * 0.35;
    p.headPivot.rotation.z = Math.sin(ph) * 0.02;
  } else {
    const sway = Math.sin(a.phase * 0.8);
    p.legL.rotation.x = 0;
    p.legR.rotation.x = 0;
    p.kneeL.rotation.x = crouch * 0.8;
    p.kneeR.rotation.x = crouch * 0.8;
    p.legL.rotation.z = 0.02;
    p.legR.rotation.z = -0.02;
    p.armL.rotation.x = sway * 0.02 - crouch * 0.15;
    p.armR.rotation.x = -sway * 0.02 - crouch * 0.15;
    p.armL.rotation.z = -0.07 - crouch * 0.15;
    p.armR.rotation.z = 0.07 + crouch * 0.15;
    p.elbowL.rotation.x = -0.12;
    p.elbowR.rotation.x = -0.12;
  }
  // flashlight hand pose / talk gestures
  if (gesture > 0.01) {
    p.armR.rotation.x = -0.7 - Math.sin(ph * 2) * 0.15 * gesture;
    p.armR.rotation.z = 0.5 * gesture;
    p.elbowR.rotation.x = -0.9 * gesture;
  } else if (mode === 'idle') {
    p.armR.rotation.x += -0.5 * a.talk;
    p.armR.rotation.z += 0.22 * a.talk;
    p.elbowR.rotation.x += -0.5 * a.talk;
  }
  // talk animation: mouth + nod + eyebrows
  if (a.talk > 0.01) {
    const open = (Math.sin(a.phase * 17) * 0.5 + 0.5) * 0.9 + 0.1;
    p.mouth.scale.y = p.mouth.userData.baseY * (1 + open * a.talk * 3.2);
    p.mouth.scale.x = p.mouth.userData.baseX * (1 + a.talk * 0.14);
    p.headPivot.rotation.x = Math.sin(a.phase * 5) * 0.025 * a.talk;
    p.headPivot.rotation.y = Math.sin(a.phase * 1.6) * 0.05 * a.talk;
  } else {
    p.mouth.scale.y = p.mouth.userData.baseY;
    p.mouth.scale.x = p.mouth.userData.baseX;
    p.headPivot.rotation.x *= 0.9;
    p.headPivot.rotation.y *= 0.9;
  }
  // look toward target
  if (lookAt) {
    const dx = lookAt.x - model.position.x;
    const dz = lookAt.z - model.position.z;
    const targetYaw = Math.atan2(dx, dz);
    let rel = targetYaw - model.rotation.y;
    while (rel > Math.PI) rel -= Math.PI * 2;
    while (rel < -Math.PI) rel += Math.PI * 2;
    p.headPivot.rotation.y += Math.max(-0.6, Math.min(0.6, rel)) * 0.4;
  }
  // blink
  const blinkScale = a.blink > 0 ? 0.12 : 1;
  for (const e of p.eyes) {
    e.white.scale.y = e.white.userData.baseY * blinkScale;
    e.pupil.scale.y = e.pupil.userData.baseY * blinkScale;
  }
  // panic arms up
  if (panicAmt > 0.1) {
    p.armL.rotation.x = -1.4 * panicAmt + Math.sin(ph * 1.3) * 0.15;
    p.armR.rotation.x = -1.2 * panicAmt - Math.sin(ph * 1.3) * 0.15;
    p.elbowL.rotation.x = -0.6 * panicAmt;
    p.elbowR.rotation.x = -0.7 * panicAmt;
  }
}

// ─────────────────────────────────────────────────────────────
// the Hall Monitor — tall, wrong, and holding an axe
// ─────────────────────────────────────────────────────────────
export function makeKillerModel() {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const skin = M(0xa9b3a4, 0.95);
  const skinD = M(0x879283, 0.95);
  const suit = M(0x191b1d, 0.95);
  const suitD = M(0x0d0f10, 0.95);
  const shirt = M(0x3a4042, 0.9);
  const dark = M(0x080a0b, 0.8);
  const metal = M(0x9aa1a4, 0.35, 0.85);
  const wood = M(0x5b3a20, 0.85);
  const blood = M(0x5c0d14, 0.6);

  const s = 1.33;
  body.scale.setScalar(s);
  const hips = group(body, 0, 1.02, 0);
  const pelvis = box(0.44, 0.3, 0.3, suit, 0, -0.03, 0);
  hips.add(pelvis);
  hips.add(box(0.46, 0.06, 0.32, suitD, 0, 0.1, 0));
  const torso = group(hips, 0, 0.12, 0);
  const chest = capsule(0.26, 0.36, suit);
  chest.position.y = 0.3; chest.scale.set(1.05, 1, 0.72);
  torso.add(chest);
  torso.add(box(0.3, 0.62, 0.03, shirt, 0, 0.3, 0.185));
  torso.add(box(0.075, 0.42, 0.035, blood, 0, 0.28, 0.2));
  torso.add(box(0.26, 0.04, 0.24, suitD, 0, 0.54, 0));
  // shoulder pads
  [-1, 1].forEach(sd => torso.add(sphere(0.15, suit, sd * 0.26, 0.44, 0, 1, 0.7, 0.9)));

  const neck = cyl(0.075, 0.1, 0.28, skinD, 0, 0.58, 0);
  torso.add(neck);
  const headPivot = group(torso, 0, 0.66, 0);
  headPivot.rotation.x = 0.12;
  const head = group(headPivot, 0, 0.14, 0.04);
  head.add(sphere(0.15, skin, 0, 0.02, 0, 0.9, 1.18, 0.92));
  head.add(sphere(0.1, skinD, 0, -0.09, 0.025, 1.2, 0.9, 1));
  // cheeks/jaw hollow
  head.add(sphere(0.05, skinD, -0.09, -0.03, 0.06));
  head.add(sphere(0.05, skinD, 0.09, -0.03, 0.06));
  // eyes
  const eyeGlow = new THREE.MeshBasicMaterial({ color: 0xff2f42 });
  const eyes = [];
  [-1, 1].forEach(sd => {
    const socket = sphere(0.042, dark, sd * 0.06, 0.055, 0.12, 1, 1.1, 0.5);
    head.add(socket);
    const eye = sphere(0.021, eyeGlow, sd * 0.06, 0.055, 0.145);
    head.add(eye);
    eyes.push(eye);
  });
  // grin
  const grin = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 6, 12, Math.PI), dark);
  grin.rotation.x = Math.PI; grin.rotation.z = Math.PI;
  grin.position.set(0, -0.03, 0.135);
  head.add(grin);
  for (let i = 0; i < 5; i++) {
    head.add(box(0.145, 0.012, 0.012, M(0xd8d2c0, 0.5), 0, -0.03 + i * 0.013, 0.14));
  }
  // hair wisp
  head.add(box(0.16, 0.02, 0.14, dark, 0, 0.15, -0.04));
  // long arms with joints
  function makeArm(side) {
    const shoulder = group(torso, side * 0.32, 0.42, 0);
    shoulder.rotation.z = side * 0.12;
    const upper = capsule(0.075, 0.36, suit);
    upper.position.y = -0.24; shoulder.add(upper);
    const elbow = group(shoulder, 0, -0.48, 0);
    const fore = capsule(0.06, 0.34, suit);
    fore.position.y = -0.23; elbow.add(fore);
    const cuff = box(0.11, 0.05, 0.12, shirt, 0, -0.42, 0);
    elbow.add(cuff);
    const hand = group(elbow, 0, -0.48, 0);
    hand.add(sphere(0.075, skin, 0, 0, 0, 1.1, 1.1, 0.8));
    for (let i = 0; i < 4; i++) {
      const f = box(0.022, 0.11, 0.03, skin, -0.05 + i * 0.03, -0.08, 0.02);
      f.rotation.x = 0.4;
      hand.add(f);
    }
    return { shoulder, elbow, hand };
  }
  const armL = makeArm(-1), armR = makeArm(1);
  // axe
  const axe = new THREE.Group();
  axe.position.set(0, -0.1, 0.02);
  const handle = cyl(0.032, 0.038, 1.15, wood, 0, 0.35, 0);
  axe.add(handle);
  const wrap = box(0.08, 0.16, 0.08, dark, 0, 0.0, 0);
  axe.add(wrap);
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0.34, 0.14);
  shape.lineTo(0.38, 0.44);
  shape.lineTo(0.06, 0.56);
  shape.lineTo(-0.02, 0.28);
  shape.closePath();
  const bladeGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 1 });
  const blade = new THREE.Mesh(bladeGeo, metal);
  blade.rotation.y = Math.PI / 2;
  blade.position.set(0, 0.73, 0.06);
  axe.add(blade);
  blade.add(box(0.02, 0.2, 0.05, blood, 0.34, 0.34, 0.03));
  armR.hand.add(axe);

  function makeLeg(side) {
    const hip = group(hips, side * 0.14, -0.02, 0);
    const thigh = capsule(0.1, 0.36, suit);
    thigh.position.y = -0.27; hip.add(thigh);
    const knee = group(hip, 0, -0.55, 0);
    const shin = capsule(0.08, 0.34, suit);
    shin.position.y = -0.25; knee.add(shin);
    const foot = group(knee, 0, -0.46, 0);
    foot.add(box(0.14, 0.1, 0.34, dark, 0, -0.03, 0.07));
    return { hip, knee, foot };
  }
  const legL = makeLeg(-1), legR = makeLeg(1);

  root.userData.parts = {
    body, hips, torso, headPivot, head, eyes, axe,
    armL: armL.shoulder, armR: armR.shoulder,
    elbowL: armL.elbow, elbowR: armR.elbow,
    handL: armL.hand, handR: armR.hand,
    legL: legL.hip, legR: legR.hip, kneeL: legL.knee, kneeR: legR.knee,
    footL: legL.foot, footR: legR.foot, height: 2.4
  };
  root.userData.kind = 'killer';
  return root;
}

export function animateKiller(model, dt, mode = 'walk', time = 0) {
  const p = model.userData.parts;
  if (!p) return;
  model.userData.anim = model.userData.anim || { phase: 0 };
  const a = model.userData.anim;
  const speed = mode === 'chase' ? 9.5 : mode === 'walk' ? 4.4 : 1.4;
  a.phase += dt * speed;
  const ph = a.phase;
  const run = mode === 'chase';
  p.hips.position.y = 1.02 + Math.abs(Math.sin(ph)) * 0.02 * (run ? 1.6 : 0.8) - (mode === 'idle' ? 0 : 0.02);
  p.torso.rotation.x = (run ? 0.28 : mode === 'walk' ? 0.1 : 0.05) + Math.sin(ph * 0.7) * 0.02;
  p.torso.rotation.z = Math.sin(ph * 0.5) * (run ? 0.06 : 0.03);
  p.headPivot.rotation.x = run ? -0.2 : 0.12 + Math.sin(time * 0.7) * 0.03;
  p.headPivot.rotation.y = Math.sin(time * 0.43) * 0.18;
  const amp = run ? 0.95 : 0.48;
  if (mode === 'idle' || mode === 'stare') {
    p.legL.rotation.x = 0; p.legR.rotation.x = 0;
    p.kneeL.rotation.x = 0.05; p.kneeR.rotation.x = 0.05;
    p.armL.rotation.x = Math.sin(time * 0.8) * 0.03 + 0.05;
    p.armR.rotation.x = -0.15 + Math.sin(time * 0.9) * 0.03;
    p.elbowL.rotation.x = -0.25; p.elbowR.rotation.x = -0.35;
    p.armL.rotation.z = 0.08; p.armR.rotation.z = -0.08;
  } else {
    p.legL.rotation.x = Math.sin(ph) * amp;
    p.legR.rotation.x = -Math.sin(ph) * amp;
    p.kneeL.rotation.x = Math.max(0, -Math.sin(ph + 0.4)) * 0.8;
    p.kneeR.rotation.x = Math.max(0, Math.sin(ph + 0.4)) * 0.8;
    p.armL.rotation.x = -Math.sin(ph) * amp * 0.55;
    p.armR.rotation.x = -1.25 + Math.sin(ph) * 0.12;
    p.elbowL.rotation.x = -0.35;
    p.elbowR.rotation.x = -0.15;
    p.armL.rotation.z = 0.12; p.armR.rotation.z = -0.18;
  }
  if (mode === 'attack') {
    p.armR.rotation.x = -2.3 + Math.sin(time * 18) * 0.5;
    p.armR.rotation.z = -0.5;
    p.elbowR.rotation.x = -0.2;
    p.torso.rotation.x = 0.35;
  }
  if (mode === 'scream') {
    p.headPivot.rotation.x = -0.45;
    p.armL.rotation.x = -2.4; p.armR.rotation.x = -2.2;
    p.armL.rotation.z = 0.5; p.armR.rotation.z = -0.5;
    p.elbowL.rotation.x = -0.5; p.elbowR.rotation.x = -0.5;
    p.torso.rotation.x = -0.1;
  }
  if (mode === 'chase') {
    p.armR.rotation.x = -2.0 + Math.sin(ph * 0.5) * 0.2;
    p.armL.rotation.x = -0.9 + Math.sin(ph) * 0.5;
  }
  // eye glow pulse
  for (const e of p.eyes) e.material.color.setHSL(0.99, 1, 0.45 + Math.sin(time * 6) * 0.12);
}

// ─────────────────────────────────────────────────────────────
// items
// ─────────────────────────────────────────────────────────────
export function makeKeyModel(id = 1) {
  const g = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({ color: 0xe0b64c, roughness: 0.25, metalness: 0.9, emissive: 0x5a3c06, emissiveIntensity: 0.6 });
  const bow = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.032, 8, 18), gold);
  bow.position.y = 0.13; g.add(bow);
  const shaft = box(0.045, 0.32, 0.04, gold, 0, -0.08, 0);
  g.add(shaft);
  g.add(box(0.11, 0.05, 0.04, gold, 0.03, -0.2, 0));
  g.add(box(0.075, 0.05, 0.04, gold, 0.015, -0.1, 0));
  const tag = box(0.13, 0.09, 0.015, new THREE.MeshStandardMaterial({ color: 0xd8d2b4, roughness: 0.9 }), 0, 0.13, 0.04);
  tag.rotation.z = 0.1;
  g.add(tag);
  g.rotation.x = 0.2;
  return g;
}

export function makeCrowbarModel() {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: 0xb5432b, roughness: 0.55, metalness: 0.45, emissive: 0x2a0803, emissiveIntensity: 0.4 });
  const shaft = cyl(0.028, 0.028, 0.8, m, 0, 0.08, 0);
  shaft.rotation.z = 0.35;
  g.add(shaft);
  const hook = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.026, 6, 12, Math.PI * 1.15), m);
  hook.position.set(-0.15, 0.46, 0); hook.rotation.z = 0.5;
  g.add(hook);
  const foot = box(0.18, 0.035, 0.05, m, 0.24, -0.28, 0);
  foot.rotation.z = 0.5;
  g.add(foot);
  g.rotation.z = -0.3;
  return g;
}

export function makeBatteryModel() {
  const g = new THREE.Group();
  const bodyM = new THREE.MeshStandardMaterial({ color: 0x2c4a5a, roughness: 0.5, metalness: 0.4 });
  const b = cyl(0.075, 0.075, 0.3, bodyM, 0, 0, 0);
  g.add(b);
  g.add(cyl(0.077, 0.077, 0.09, new THREE.MeshStandardMaterial({ color: 0xc9a43a, roughness: 0.4, metalness: 0.6 }), 0, 0.08, 0));
  g.add(cyl(0.04, 0.04, 0.03, new THREE.MeshStandardMaterial({ color: 0xd7d7cf, metalness: 0.8, roughness: 0.2 }), 0, 0.17, 0));
  const glow = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshBasicMaterial({ color: 0x9dffbf }));
  glow.position.y = 0.18; g.add(glow);
  g.rotation.z = 0.25;
  return g;
}

export function makeNoteModel() {
  const g = new THREE.Group();
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.44), new THREE.MeshStandardMaterial({ map: T.paper(), roughness: 0.9, side: THREE.DoubleSide, emissive: 0x2a2618, emissiveIntensity: 0.3 }));
  paper.rotation.x = -0.4;
  paper.position.y = 0.08;
  g.add(paper);
  g.add(box(0.36, 0.01, 0.46, new THREE.MeshStandardMaterial({ color: 0xd8cfae, roughness: 0.95 }), 0, 0.0, 0));
  return g;
}

export function makeMedkitModel() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xe4e2d8, roughness: 0.6 });
  const red = new THREE.MeshStandardMaterial({ color: 0xb8262c, roughness: 0.6 });
  g.add(box(0.36, 0.24, 0.24, white, 0, 0, 0));
  g.add(box(0.2, 0.055, 0.26, red, 0, 0, 0));
  g.add(box(0.055, 0.18, 0.26, red, 0, 0, 0));
  g.add(box(0.14, 0.035, 0.035, red, 0, 0.14, 0));
  return g;
}

export function makeDangerIcon() {
  const g = new THREE.Group();
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(160,20,30,.92)';
  ctx.beginPath(); ctx.arc(64, 64, 46, 0, 7); ctx.fill();
  ctx.strokeStyle = '#ffd7d7'; ctx.lineWidth = 6; ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = 'bold 74px Courier New'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('!', 64, 70);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
  sprite.scale.set(0.8, 0.8, 1);
  sprite.position.y = 1.9;
  g.add(sprite);
  return g;
}

// ─────────────────────────────────────────────────────────────
// furniture & school equipment
// ─────────────────────────────────────────────────────────────
export function makeDesk() {
  const g = new THREE.Group();
  const wood = mat('deskWood', { map: T.wood(false), roughness: 0.72 });
  const edge = M(0x5c452d, 0.7);
  const metal = M(0x363c3e, 0.5, 0.55);
  g.add(box(1.2, 0.05, 0.64, wood, 0, 0.75, 0));
  g.add(box(1.22, 0.035, 0.66, edge, 0, 0.72, 0));
  [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]].forEach(([x, z]) => {
    g.add(box(0.045, 0.72, 0.045, metal, x, 0.36, z));
    g.add(box(0.06, 0.03, 0.06, metal, x, 0.02, z));
  });
  g.add(box(1.1, 0.24, 0.02, metal, 0, 0.5, 0.31));
  // pencil groove + paper
  g.add(box(1.0, 0.012, 0.02, edge, 0, 0.78, 0.2));
  return g;
}

export function makeChair() {
  const g = new THREE.Group();
  const metal = M(0x4a5052, 0.45, 0.55);
  const plast = M(0x3a5560, 0.62);
  g.add(box(0.44, 0.05, 0.44, plast, 0, 0.45, 0));
  const back = box(0.42, 0.38, 0.05, plast, 0, 0.67, -0.2);
  back.rotation.x = -0.08;
  g.add(back);
  [[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]].forEach(([x, z]) => {
    g.add(box(0.03, 0.45, 0.03, metal, x, 0.225, z));
  });
  g.add(box(0.4, 0.025, 0.025, metal, 0, 0.22, -0.18));
  return g;
}

export function makeTeacherDesk() {
  const g = new THREE.Group();
  const wood = mat('tDeskWood', { map: T.wood(true), roughness: 0.68 });
  const metal = M(0x3d4143, 0.5, 0.5);
  const top = box(1.9, 0.08, 0.85, wood, 0, 0.86, 0);
  g.add(top);
  g.add(box(1.78, 0.72, 0.78, mat('tDeskBody', { color: 0x584631, roughness: 0.8 }), 0, 0.45, 0));
  g.add(box(0.55, 0.42, 0.04, wood, -0.5, 0.55, 0.4));
  g.add(box(0.55, 0.42, 0.04, wood, 0.5, 0.55, 0.4));
  [-0.5, 0.5].forEach(x => g.add(sphere(0.035, metal, x, 0.55, 0.44)));
  g.add(box(0.5, 0.06, 0.36, M(0xd9d2ba, 0.9), -0.4, 0.94, 0.1));
  g.add(box(0.32, 0.02, 0.44, M(0x2a2f30, 0.7), 0.45, 0.91, -0.05));
  // apple
  const apple = sphere(0.085, M(0x9c2020, 0.45), 0.55, 0.99, 0.18);
  g.add(apple);
  g.add(box(0.012, 0.07, 0.012, M(0x3d6b2d, 0.8), 0.55, 1.07, 0.18));
  return g;
}

export function makeLockerBank(count = 3, startNum = 1) {
  const g = new THREE.Group();
  const frameMat = M(0x384d55, 0.55, 0.45);
  const w = 0.58;
  const half = (count * w) / 2;
  for (let i = 0; i < count; i++) {
    // Build around the group origin so the bank sits exactly where the
    // decor code places it. It used to run from x=0 to x=count*w.
    const x = i * w + w / 2 - half;
    const doorMat = mat('lockDoor' + ((startNum + i) % 8), { map: T.locker((startNum + i) % 8), roughness: 0.5, metalness: 0.45 });
    const door = box(w - 0.035, 1.56, 0.055, doorMat, x, 1.02, 0.04);
    g.add(door);
    g.add(box(w, 1.64, 0.04, frameMat, x, 1.02, -0.02));
    g.add(box(w - 0.04, 0.05, 0.06, frameMat, x, 1.82, 0.04));
    g.add(box(w - 0.04, 0.06, 0.06, frameMat, x, 0.22, 0.04));
  }
  g.add(box(count * w + 0.08, 0.1, 0.6, M(0x2b3a40, 0.7), 0, 1.88, 0));
  // plinth: the doors start at 0.2 m, so without this the bank floats
  g.add(box(count * w + 0.08, 0.2, 0.56, M(0x2a3236, 0.8), 0, 0.1, 0));
  return g;
}

export function makeBookshelf() {
  const g = new THREE.Group();
  const wood = M(0x57432f, 0.85);
  const books = mat('booksTex', { map: T.books(), roughness: 0.9 });
  g.add(box(1.9, 2.25, 0.05, wood, 0, 1.12, -0.32));
  g.add(box(0.07, 2.25, 0.64, wood, -0.92, 1.12, 0));
  g.add(box(0.07, 2.25, 0.64, wood, 0.92, 1.12, 0));
  g.add(box(1.9, 0.08, 0.66, wood, 0, 2.25, 0));
  for (let i = 0; i < 4; i++) g.add(box(1.84, 0.05, 0.64, wood, 0, 0.25 + i * 0.53, 0));
  g.add(box(1.8, 2.08, 0.04, books, 0, 1.1, -0.04));
  // a few leaning books
  for (let i = 0; i < 6; i++) {
    const b = box(0.07, 0.26, 0.2, M([0x7a2e33, 0x2c4d5c, 0x5b542e][i % 3], 0.85), -0.7 + i * 0.25, 0.42, 0.24);
    b.rotation.z = (Math.random() - 0.5) * 0.35; g.add(b);
  }
  return g;
}

export function makeTable(w = 2.4, d = 1.1) {
  const g = new THREE.Group();
  const wood = mat('tableWood', { map: T.wood(true), roughness: 0.68 });
  const metal = M(0x3b4143, 0.5, 0.5);
  g.add(box(w, 0.075, d, wood, 0, 0.76, 0));
  const lx = w / 2 - 0.16, lz = d / 2 - 0.14;
  [[-lx, -lz], [lx, -lz], [-lx, lz], [lx, lz]].forEach(([x, z]) => g.add(box(0.06, 0.74, 0.06, metal, x, 0.38, z)));
  g.add(box(w - 0.2, 0.05, 0.05, metal, 0, 0.3, 0));
  return g;
}

export function makeBench(w = 2.2) {
  const g = new THREE.Group();
  const wood = mat('benchWood', { map: T.wood(false), roughness: 0.85 });
  const metal = M(0x2b3032, 0.55, 0.5);
  g.add(box(w, 0.08, 0.5, wood, 0, 0.45, 0));
  g.add(box(w, 0.4, 0.06, wood, 0, 0.72, -0.24));
  [-w / 2 + 0.15, w / 2 - 0.15].forEach(x => {
    g.add(box(0.05, 0.45, 0.46, metal, x, 0.22, 0));
  });
  return g;
}

export function makeVending() {
  const g = new THREE.Group();
  const bodyM = M(0x7e2028, 0.45, 0.3);
  g.add(box(1.05, 1.9, 0.62, bodyM, 0, 0.95, 0));
  const front = new THREE.Mesh(new THREE.PlaneGeometry(0.76, 1.15), new THREE.MeshBasicMaterial({ color: 0x214353 }));
  front.position.set(-0.08, 1.2, 0.315); g.add(front);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const can = box(0.08, 0.13, 0.04, M([0xd94a3a, 0x3a8f5a, 0xe0c04a, 0x4a6fd9][(i + j) % 4], 0.5), -0.32 + j * 0.18, 1.55 - i * 0.24, 0.33);
      g.add(can);
    }
  }
  for (let i = 0; i < 4; i++) {
    const btn = sphere(0.022, new THREE.MeshBasicMaterial({ color: i === 1 ? 0xff3344 : 0x8dffb2 }), 0.37, 1.02 + i * 0.13, 0.325);
    g.add(btn);
  }
  g.add(box(0.78, 0.2, 0.06, M(0x15191a, 0.7), 0, 0.37, 0.32));
  const glow = new THREE.PointLight(0xb8e8ff, 1.8, 3.2, 2);
  glow.position.set(0, 1.25, 0.6); g.add(glow);
  return g;
}

export function makeSinkCounter() {
  const g = new THREE.Group();
  const porc = M(0xdfe2da, 0.32);
  const metal = M(0x9aa5a8, 0.25, 0.9);
  g.add(box(2.6, 0.12, 0.55, porc, 0, 0.82, 0));
  g.add(box(2.6, 0.5, 0.03, mat('sinkTile', { map: T.tile(), roughness: 0.55 }), 0, 0.55, -0.29));
  for (let i = -1; i <= 1; i++) {
    g.add(box(0.5, 0.1, 0.34, porc, i * 0.8, 0.85, 0.06));
    g.add(box(0.42, 0.05, 0.26, M(0x9ba39c, 0.4), i * 0.8, 0.9, 0.06));
    g.add(cyl(0.018, 0.018, 0.16, metal, i * 0.8, 0.98, -0.09));
    g.add(box(0.022, 0.022, 0.14, metal, i * 0.8, 1.06, -0.02));
  }
  return g;
}

export function makeMirror(w = 2.2, h = 0.9) {
  const g = new THREE.Group();
  g.add(box(w + 0.1, h + 0.1, 0.04, M(0x2c3234, 0.45, 0.4), 0, 0, 0));
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), M(0x8fa7ad, 0.08, 0.85));
  glass.position.z = 0.025; g.add(glass);
  return g;
}

export function makeStall(width = 2.0, doorOpen = 0.5, idx = 0) {
  const g = new THREE.Group();
  const doorMat = mat('stallDoor' + (idx % 7), { map: T.stall(idx), roughness: 0.72 });
  const partMat = M(0x526862, 0.78);
  g.add(box(width, 2.12, 0.06, partMat, width / 2, 1.06, -0.03));
  const door = group(g, 0.04, 0, 0.36);
  const leaf = box(width - 0.12, 1.9, 0.05, doorMat, (width - 0.12) / 2, 0.98, 0);
  door.add(leaf);
  door.add(sphere(0.025, M(0x9aa3a1, 0.3, 0.8), width - 0.2, 0.98, 0.05));
  door.rotation.y = -doorOpen;
  // wall mount
  g.add(box(width, 0.06, 0.06, partMat, width / 2, 2.1, -0.03));
  const porc = M(0xd8dcd4, 0.35);
  g.add(box(0.48, 0.32, 0.58, porc, width / 2, 0.22, 0.85));
  g.add(box(0.4, 0.12, 0.5, porc, width / 2, 0.44, 0.86));
  g.add(box(0.5, 0.5, 0.18, porc, width / 2, 0.52, 1.12));
  g.add(box(0.38, 0.03, 0.16, M(0x9aa39a, 0.4), width / 2, 0.78, 1.12));
  g.userData.door = door;
  return g;
}

export function makeTrash() {
  const g = new THREE.Group();
  g.add(cyl(0.27, 0.22, 0.66, M(0x393d3a, 0.75, 0.2), 0, 0.33, 0));
  g.add(cyl(0.28, 0.28, 0.05, M(0x212524, 0.7), 0, 0.67, 0));
  const bag = sphere(0.2, M(0x1b1e1d, 0.95), 0, 0.72, 0, 1, 0.6, 1);
  g.add(bag);
  return g;
}

export function makeCone() {
  const g = new THREE.Group();
  g.add(box(0.4, 0.04, 0.4, M(0x28211a, 0.9), 0, 0.02, 0));
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.6, 10), M(0xd0581f, 0.7));
  cone.position.y = 0.32; g.add(cone);
  g.add(cyl(0.09, 0.11, 0.1, M(0xe8e2d2, 0.8), 0, 0.36, 0));
  return g;
}

export function makeWetFloorSign() {
  const g = new THREE.Group();
  const yellow = M(0xd8b525, 0.6);
  const a = box(0.32, 0.7, 0.03, yellow, 0, 0.35, 0.1);
  a.rotation.x = 0.22; g.add(a);
  const b = box(0.32, 0.7, 0.03, yellow, 0, 0.35, -0.1);
  b.rotation.x = -0.22; g.add(b);
  g.add(makeLabel('WET', { color: '#2a2408', bg: 'rgba(220,190,50,.95)', size: 128, h: 64, font: 'bold 32px Arial' })).position.set(0, 0.4, 0.14);
  return g;
}

export function makeBoiler() {
  const g = new THREE.Group();
  const metalM = M(0x5d5f58, 0.6, 0.45);
  const rust = M(0x7a4a2c, 0.9);
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.82, 2.4, 18), metalM);
  tank.position.y = 1.22; g.add(tank);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.78, 18, 9, 0, Math.PI * 2, 0, Math.PI / 2), metalM);
  cap.position.y = 2.42; g.add(cap);
  for (let i = 0; i < 5; i++) {
    const pipe = cyl(0.075, 0.075, 2.8, i % 2 ? rust : metalM, 0, 2.78, -0.8 + i * 0.4);
    pipe.rotation.z = Math.PI / 2; g.add(pipe);
  }
  g.add(cyl(0.18, 0.18, 2.0, rust, 0.82, 1.0, 0.42));
  const gauge = new THREE.Mesh(new THREE.CircleGeometry(0.16, 16), new THREE.MeshBasicMaterial({ color: 0xd94a3a }));
  gauge.position.set(0.82, 1.8, 0.1); gauge.rotation.y = Math.PI / 2; g.add(gauge);
  const valve = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.03, 6, 12), rust);
  valve.position.set(-0.5, 1.4, 0.78); valve.rotation.x = 0; g.add(valve);
  return g;
}

export function makeBreaker() {
  const g = new THREE.Group();
  g.add(box(1.0, 1.3, 0.2, M(0x444a46, 0.55, 0.5), 0, 0, 0));
  g.add(box(0.86, 1.06, 0.04, M(0x2a302c, 0.7), 0, 0, 0.12));
  for (let i = 0; i < 6; i++) {
    g.add(box(0.19, 0.09, 0.07, M(0x171a18, 0.7), -0.27 + (i % 3) * 0.27, 0.24 - Math.floor(i / 3) * 0.3, 0.15));
    g.add(box(0.05, 0.02, 0.02, M(i % 2 ? 0x36ff8d : 0xff3747, 0.4), -0.27 + (i % 3) * 0.27, 0.19 - Math.floor(i / 3) * 0.3, 0.17));
  }
  g.add(box(0.55, 0.08, 0.04, M(0xd9d4bb, 0.9), 0, 0.47, 0.15));
  g.add(makeLabel('DANGER', { color: '#ff6a6a', bg: 'rgba(30,5,5,.9)', size: 128, h: 48, font: 'bold 24px Courier New' })).position.set(0, 0.43, 0.18);
  return g;
}

export function makeComputerDesk() {
  const g = makeDesk();
  const screenCase = M(0x171b1d, 0.5, 0.3);
  const screen = box(0.56, 0.38, 0.04, screenCase, 0, 1.02, -0.12);
  g.add(screen);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.32), new THREE.MeshBasicMaterial({ color: 0x4f8a74 }));
  glow.position.set(0, 1.02, -0.095); g.add(glow);
  g.add(box(0.3, 0.03, 0.18, screenCase, 0, 0.8, 0.12));
  // tower
  const tower = box(0.2, 0.48, 0.42, M(0x24292b, 0.6), 0.48, 0.48, 0.06);
  g.add(tower);
  g.add(sphere(0.02, new THREE.MeshBasicMaterial({ color: 0x4dff8b }), 0.48, 0.62, 0.27));
  return g;
}

export function makeClock() {
  const g = new THREE.Group();
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.32, 28), M(0xe6e2cf, 0.6));
  g.add(face);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.03, 8, 28), M(0x22262a, 0.4, 0.6));
  g.add(rim);
  const hand1 = box(0.018, 0.19, 0.008, M(0x1b1f21, 0.5), 0, 0.095, 0.02); g.add(hand1);
  const hand2 = box(0.012, 0.25, 0.008, M(0x8f2c2c, 0.5), 0.055, 0.07, 0.03);
  hand2.rotation.z = -0.6; g.add(hand2);
  g.add(sphere(0.02, M(0x1b1f21, 0.5), 0.02, 0, 0.04));
  for (let i = 0; i < 12; i++) {
    const tick = box(0.012, 0.03, 0.006, M(0x333735, 0.7), Math.sin(i / 12 * 7) * 0.25, Math.cos(i / 12 * 7) * 0.25, 0.018);
    g.add(tick);
  }
  g.userData.hands = [hand1, hand2];
  return g;
}

export function makeFireExtinguisher() {
  const g = new THREE.Group();
  g.add(cyl(0.12, 0.12, 0.62, M(0xa32323, 0.5, 0.3), 0, 0.42, 0));
  g.add(cyl(0.13, 0.13, 0.08, M(0x1c1f1f, 0.6), 0, 0.76, 0));
  g.add(box(0.1, 0.05, 0.06, M(0x151818, 0.6), 0, 0.8, 0.06));
  g.add(cyl(0.018, 0.018, 0.5, M(0x1b1e1e, 0.7), 0.08, 0.5, 0));
  return g;
}

export function makePlant() {
  const g = new THREE.Group();
  g.add(cyl(0.22, 0.18, 0.36, M(0x6b4432, 0.8), 0, 0.18, 0));
  g.add(cyl(0.235, 0.235, 0.05, M(0x4e3226, 0.8), 0, 0.36, 0));
  const leafMat = M(0x2f5a33, 0.8);
  const leafMat2 = M(0x3f7042, 0.8);
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * Math.PI * 2;
    const l = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.7, 5), i % 2 ? leafMat : leafMat2);
    l.position.set(Math.cos(a) * 0.13, 0.66, Math.sin(a) * 0.13);
    l.rotation.z = Math.cos(a) * 0.5;
    l.rotation.x = Math.sin(a) * 0.5;
    g.add(l);
  }
  return g;
}

export function makeTrophyCase(w = 1.8) {
  const g = new THREE.Group();
  g.add(box(w, 2.2, 0.5, M(0x4b3b2a, 0.8), 0, 1.1, 0));
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.2, 1.8), new THREE.MeshStandardMaterial({ color: 0x9fb8b8, transparent: true, opacity: 0.22, roughness: 0.05, metalness: 0.6 }));
  glass.position.set(0, 1.15, 0.26); g.add(glass);
  for (let i = 0; i < 3; i++) {
    const shelfY = 0.5 + i * 0.58;
    g.add(box(w - 0.3, 0.04, 0.36, M(0x6b5a40, 0.7), 0, shelfY, 0.02));
    for (let j = 0; j < 3; j++) {
      const trophy = new THREE.Group();
      trophy.add(cyl(0.06, 0.09, 0.1, M(0x2a2622, 0.5), 0, 0.05, 0));
      trophy.add(cyl(0.02, 0.02, 0.14, M(0xd8b54a, 0.25, 0.85), 0, 0.17, 0));
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.04, 0.16, 10), M(0xd8b54a, 0.25, 0.9));
      cup.position.y = 0.31; trophy.add(cup);
      trophy.position.set(-0.5 + j * 0.5, shelfY + 0.02, 0.03);
      g.add(trophy);
    }
  }
  return g;
}

export function makeSofa() {
  const g = new THREE.Group();
  const fab = M(0x3f4a52, 0.9);
  g.add(box(2.0, 0.35, 0.85, fab, 0, 0.35, 0));
  g.add(box(2.0, 0.6, 0.22, fab, 0, 0.72, -0.32));
  [-0.92, 0.92].forEach(x => g.add(box(0.2, 0.55, 0.9, fab, x, 0.55, 0)));
  for (let i = 0; i < 3; i++) g.add(box(0.6, 0.15, 0.72, M(0x48555d, 0.9), -0.65 + i * 0.65, 0.6, 0));
  return g;
}

export function makeBed() {
  const g = new THREE.Group();
  const frame = M(0x6b7072, 0.5, 0.5);
  g.add(box(2.0, 0.35, 0.9, frame, 0, 0.45, 0));
  g.add(box(1.95, 0.18, 0.85, M(0xd8d4c4, 0.9), 0, 0.7, 0));
  g.add(box(0.55, 0.12, 0.8, M(0xcfc8b4, 0.9), -0.68, 0.83, 0));
  g.add(box(2.0, 0.6, 0.1, frame, 0, 0.75, -0.46));
  [0.75, -0.75].forEach(x => [0.35, -0.35].forEach(z => g.add(cyl(0.03, 0.03, 0.35, frame, x, 0.18, z))));
  return g;
}

export function makeCabinet() {
  const g = new THREE.Group();
  const body = M(0x8d918a, 0.5, 0.4);
  g.add(box(0.9, 1.8, 0.5, body, 0, 0.9, 0));
  g.add(box(0.42, 0.5, 0.03, M(0x9fa39b, 0.4), -0.23, 1.25, 0.26));
  g.add(box(0.42, 0.5, 0.03, M(0x9fa39b, 0.4), 0.23, 1.25, 0.26));
  g.add(box(0.85, 0.05, 0.02, M(0x202423, 0.7), 0, 0.6, 0.26));
  [1.1, 1.34].forEach(y => { g.add(sphere(0.02, M(0xb8a05a, 0.3, 0.9), 0, y, 0.29)); });
  return g;
}

export function makeServerRack() {
  const g = new THREE.Group();
  const body = M(0x1b1f22, 0.6, 0.3);
  g.add(box(0.75, 1.9, 0.75, body, 0, 0.95, 0));
  for (let i = 0; i < 9; i++) {
    g.add(box(0.6, 0.12, 0.05, M(0x2b3034, 0.6), 0, 0.25 + i * 0.18, 0.39));
    const c = [0x45ff8b, 0x3ab8ff, 0xffb03a][i % 3];
    g.add(sphere(0.012, new THREE.MeshBasicMaterial({ color: c }), 0.2, 0.25 + i * 0.18, 0.42));
    g.add(sphere(0.012, new THREE.MeshBasicMaterial({ color: 0x2a6a45 }), 0.13, 0.25 + i * 0.18, 0.42));
  }
  return g;
}

export function makeLabBench() {
  const g = new THREE.Group();
  const topM = M(0x2f3536, 0.35, 0.4);
  const wood = M(0x5d4a32, 0.8);
  g.add(box(2.6, 0.1, 0.9, topM, 0, 0.82, 0));
  g.add(box(2.5, 0.55, 0.8, wood, 0, 0.45, 0));
  g.add(box(1.9, 0.38, 0.02, M(0x3c443f, 0.8), 0, 0.35, 0.42));
  // taps + glassware
  for (let i = -1; i <= 1; i++) {
    g.add(cyl(0.03, 0.03, 0.28, M(0x8fa0a2, 0.3, 0.8), i * 0.8, 0.99, -0.2));
    const flask = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.2, 8), new THREE.MeshStandardMaterial({ color: 0x8fc6c9, transparent: true, opacity: 0.55, roughness: 0.15 }));
    flask.position.set(i * 0.8 + 0.2, 0.97, 0.12); g.add(flask);
  }
  return g;
}

export function makeEasel() {
  const g = new THREE.Group();
  const wood = M(0x7c5c3b, 0.85);
  const a = box(0.05, 1.7, 0.05, wood, -0.35, 0.85, 0); a.rotation.z = 0.16; g.add(a);
  const b = box(0.05, 1.7, 0.05, wood, 0.35, 0.85, 0); b.rotation.z = -0.16; g.add(b);
  const c = box(0.05, 1.6, 0.05, wood, 0, 0.82, -0.3); c.rotation.x = 0.22; g.add(c);
  g.add(box(1.0, 0.06, 0.34, wood, 0, 1.1, 0.02));
  const canvas = box(0.9, 1.0, 0.04, M(0xd9d3bf, 0.95), 0, 1.33, 0.03);
  g.add(canvas);
  // painting smudge
  const paint = new THREE.Mesh(new THREE.CircleGeometry(0.17, 12), new THREE.MeshBasicMaterial({ color: 0x8b3a4a }));
  paint.position.set(0.15, 1.35, 0.052); g.add(paint);
  return g;
}

export function makeMusicStand() {
  const g = new THREE.Group();
  const metal = M(0x2a2e30, 0.4, 0.7);
  g.add(box(0.44, 0.02, 0.32, metal, 0, 1.12, 0));
  g.add(cyl(0.02, 0.02, 1.05, metal, 0, 0.6, 0));
  g.add(box(0.4, 0.03, 0.28, metal, 0, 1.12, 0));
  const sheet = box(0.36, 0.26, 0.01, M(0xe2dcc6, 0.95), 0, 1.26, -0.02);
  sheet.rotation.x = -0.22; g.add(sheet);
  return g;
}

export function makePiano() {
  const g = new THREE.Group();
  g.add(box(1.5, 1.1, 0.55, M(0x1b1b1c, 0.5), 0, 0.55, 0));
  g.add(box(1.4, 0.08, 0.26, M(0xe6e2d4, 0.5), 0, 0.82, 0.34));
  for (let i = 0; i < 14; i++) g.add(box(0.035, 0.05, 0.16, M(0x151515, 0.5), -0.6 + i * 0.09, 0.87, 0.29));
  g.add(box(1.5, 0.08, 0.4, M(0x1b1b1c, 0.5), 0, 1.14, -0.05));
  [0.6, -0.6].forEach(x => g.add(box(0.08, 0.5, 0.1, M(0x1b1b1c, 0.5), x, 0.2, 0)));
  return g;
}

export function makeFoodCounter(w = 5) {
  const g = new THREE.Group();
  const steel = M(0x8a918f, 0.35, 0.55);
  g.add(box(w, 0.9, 0.9, steel, 0, 0.45, 0));
  g.add(box(w + 0.1, 0.08, 1.0, M(0xb9bcb4, 0.3, 0.3), 0, 0.94, 0.05));
  const trayMat = M(0x4a3a2a, 0.7);
  for (let i = 0; i < 4; i++) {
    g.add(box(0.7, 0.06, 0.5, trayMat, -w / 2 + 0.6 + i * 1.1, 1.0, 0));
    g.add(sphere(0.1, M(0x8a6d3c, 0.65), -w / 2 + 0.6 + i * 1.1, 1.06, 0));
    g.add(sphere(0.07, M(0x6e7a3e, 0.7), -w / 2 + 0.6 + i * 1.1 + 0.15, 1.05, 0.1));
  }
  g.add(box(0.5, 0.45, 0.5, M(0x3a3f3e, 0.7), w / 2 - 0.8, 1.1, 0));
  return g;
}

export function makeTrayTable() {
  const g = new THREE.Group();
  const steel = M(0x8d9492, 0.45, 0.5);
  g.add(cyl(0.05, 0.05, 0.7, steel, 0, 0.35, 0));
  g.add(box(0.7, 0.05, 0.5, M(0x3c4140, 0.6), 0, 0.7, 0));
  [0.25, -0.25].forEach(x => g.add(box(0.05, 0.02, 0.5, steel, x, 0.68, 0)));
  return g;
}

export function makeCafeteriaTable() {
  const g = new THREE.Group();
  const top = M(0x7c8b8b, 0.55, 0.2);
  const steel = M(0x4b5354, 0.4, 0.6);
  g.add(box(3.2, 0.09, 1.1, top, 0, 0.76, 0));
  for (const x of [-1.4, 1.4]) for (const z of [-0.4, 0.4]) g.add(cyl(0.035, 0.035, 0.7, steel, x, 0.36, z));
  // attached benches
  [-0.95, 0.95].forEach(z => {
    g.add(box(3.1, 0.07, 0.32, top, 0, 0.46, z));
    for (const x of [-1.3, 1.3]) g.add(box(0.05, 0.45, 0.3, steel, x, 0.23, z));
  });
  return g;
}

export function makeBleacher() {
  const g = new THREE.Group();
  const wood = mat('bleachWood', { map: T.wood(true), roughness: 0.85 });
  const metal = M(0x3d4345, 0.5, 0.5);
  const rows = 4, rise = 0.33, run = 0.62;
  for (let i = 0; i < rows; i++) {
    const y = rise * (i + 1);          // seat top
    const z = -i * run;
    g.add(box(6, 0.1, 0.64, wood, 0, y, z));
    // riser closes the step down to the row in front (or the floor)
    const riserH = y - 0.06;
    g.add(box(6, riserH, 0.07, wood, 0, riserH / 2 + 0.03, z - 0.32));
    // legs actually reach the floor instead of hovering under each plank
    for (const x of [-2.85, 2.85]) g.add(box(0.08, y, 0.5, metal, x, y / 2, z));
  }
  return g;
}

export function makeStage() {
  const g = new THREE.Group();
  const wood = mat('stageWood', { map: T.wood(true), roughness: 0.75 });
  g.add(box(18, 0.8, 4.5, wood, 0, 0.4, 0));
  g.add(box(18, 0.08, 4.6, M(0x4a3426, 0.8), 0, 0.84, 0));
  // curtains
  const curtainMat = new THREE.MeshStandardMaterial({ map: T.curtain(), roughness: 0.95, side: THREE.DoubleSide });
  const left = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 5.2), curtainMat);
  left.position.set(-7.5, 3.5, 2.1); g.add(left);
  const right = left.clone(); right.position.x = 7.5; g.add(right);
  const top = new THREE.Mesh(new THREE.PlaneGeometry(18, 1.6), curtainMat);
  top.position.set(0, 5.1, 2.1); g.add(top);
  // lectern
  g.add(box(0.9, 1.1, 0.55, M(0x4b3827, 0.8), 0, 1.4, 0.4));
  return g;
}

export function makeEaselPaintingColor() { return 0; }

export function makeCar(color = 0x33454f) {
  const g = new THREE.Group();
  const paint = mat('car' + color, { color, roughness: 0.32, metalness: 0.55 });
  const glass = mat('carGlass', { color: 0x0b1114, roughness: 0.1, metalness: 0.7 });
  const wheelMat = M(0x0f1113, 0.9);
  const body = box(1.9, 0.5, 4.2, paint, 0, 0.62, 0); g.add(body);
  const hood = box(1.82, 0.22, 1.2, paint, 0, 0.9, 1.3); g.add(hood);
  const cabin = box(1.72, 0.55, 2.1, paint, 0, 1.07, -0.25); g.add(cabin);
  const roof = box(1.6, 0.08, 1.9, paint, 0, 1.37, -0.25); g.add(roof);
  g.add(box(1.58, 0.42, 0.04, glass, 0, 1.1, 0.8));
  g.add(box(1.58, 0.42, 0.04, glass, 0, 1.1, -1.31));
  [-0.86, 0.86].forEach(x => {
    g.add(box(0.04, 0.36, 1.4, glass, x, 1.08, -0.25));
  });
  for (const [x, z] of [[-0.95, 1.32], [0.95, 1.32], [-0.95, -1.32], [0.95, -1.32]]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.24, 14), wheelMat);
    wheel.rotation.z = Math.PI / 2; wheel.position.set(x, 0.36, z); g.add(wheel);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.26, 10), M(0x92958f, 0.3, 0.8));
    hub.rotation.z = Math.PI / 2; hub.position.set(x, 0.36, z); g.add(hub);
  }
  const light = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.12, 0.05), new THREE.MeshBasicMaterial({ color: 0xffe6b0 }));
  light.position.set(0.6, 0.72, 2.12); g.add(light);
  const light2 = light.clone(); light2.position.x = -0.6; g.add(light2);
  g.add(box(0.5, 0.14, 0.05, M(0x7e1616, 0.5), -0.6, 0.72, -2.12));
  g.add(box(0.5, 0.14, 0.05, M(0x7e1616, 0.5), 0.6, 0.72, -2.12));
  return g;
}

export function makeStreetlight() {
  const g = new THREE.Group();
  const metal = M(0x282e30, 0.55, 0.55);
  g.add(cyl(0.07, 0.11, 6.4, metal, 0, 3.2, 0));
  g.add(box(1.2, 0.1, 0.1, metal, 0.5, 6.25, 0));
  g.add(box(0.6, 0.14, 0.34, M(0x323a3b, 0.5, 0.4), 1.02, 6.15, 0));
  const lamp = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.24), new THREE.MeshBasicMaterial({ color: 0xffdba6 }));
  lamp.rotation.x = Math.PI / 2; lamp.position.set(1.02, 6.06, 0); g.add(lamp);
  const glow = makeGlow('#ffd9a0', 2.2); glow.position.set(1.02, 5.98, 0); g.add(glow);
  return g;
}

export function makeDumpster() {
  const g = new THREE.Group();
  const metal = M(0x2c4638, 0.65, 0.45);
  g.add(box(2.2, 1.3, 1.2, metal, 0, 0.7, 0));
  g.add(box(2.25, 0.12, 1.28, M(0x203328, 0.65), 0, 1.4, -0.1));
  for (const x of [-0.8, 0.8]) g.add(box(0.2, 0.14, 0.1, M(0x191d1c, 0.7), x, 0.12, 0.5));
  g.add(makeLabel('TRASH', { color: '#aec9b3', bg: 'rgba(10,18,12,.7)', size: 256, h: 64, font: 'bold 30px Courier New' })).position.set(0, 1.1, 0.62);
  return g;
}

export function makePoliceStation() {
  const g = new THREE.Group();
  const wall = M(0x5b6470, 0.85);
  const brick = new THREE.MeshStandardMaterial({ map: T.brick(), color: 0x9a9188, roughness: 0.9 });
  g.add(box(16, 7, 10, brick, 0, 3.5, -5));
  for (const x of [-3.4, 3.4]) g.add(box(0.7, 5.2, 0.8, wall, x, 2.6, 0.35));
  g.add(box(9.5, 0.55, 1.8, wall, 0, 5.2, 0.45));
  g.add(box(16, 0.3, 1.6, wall, 0, 7.05, 0));
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x3b5a63, roughness: 0.12, metalness: 0.55, emissive: 0x1b3f45, emissiveIntensity: 0.65 });
  g.add(box(3.3, 3.0, 0.1, glassMat, 0, 1.6, 0.62));
  g.add(box(0.1, 3.0, 0.16, wall, 0, 1.6, 0.62));
  g.add(box(4.2, 0.25, 1.6, M(0x3a4144, 0.5), 0, 0.12, 0.8));
  const sign = makeLabel('POLICE', { color: '#cfe9ff', bg: 'rgba(8,18,28,.94)', size: 640, h: 160, font: 'bold 112px Arial Black' });
  sign.scale.set(6.2, 1.55, 1); sign.position.set(0, 4.35, 0.9); g.add(sign);
  for (const x of [-5.5, 5.5]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.5), new THREE.MeshBasicMaterial({ color: 0x9fb7a8 }));
    w.position.set(x, 3.5, 0.03); g.add(w);
    g.add(box(2.4, 1.7, 0.06, M(0x22292c, 0.6), x, 3.5, -0.01));
  }
  // steps
  for (let i = 0; i < 3; i++) g.add(box(5.2 - i * 0.2, 0.16, 0.5 + i * 0.3, wall, 0, 0.08 + i * 0.16, 0.9 + i * 0.15));
  return g;
}
