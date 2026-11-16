import * as THREE from 'three';
import {
  canvasTex, mulberry32, woodTexture, woodCrateTexture, metalTexture, barkTexture,
  grassTexture, dirtTexture, paperTexture, chainlinkMaterial, labelTexture, glowTexture,
  foggyGlassTexture, doorGlassTexture, bloodTexture, windowTexture, brickTexture,
  yellowWallTexture, concreteTexture, asphaltTexture
} from './textures.js';

/* ------------------------------------------------------------------ *
 *  shared materials
 * ------------------------------------------------------------------ */
export const MAT = {
  wood: new THREE.MeshStandardMaterial({ map: woodTexture({ seed: 11 }), roughness: 0.9 }),
  woodLight: new THREE.MeshStandardMaterial({ map: woodTexture({ seed: 19, light: true }), roughness: 0.85 }),
  crate: new THREE.MeshStandardMaterial({ map: woodCrateTexture(), roughness: 0.95 }),
  metal: new THREE.MeshStandardMaterial({ map: metalTexture({ seed: 51, base: [88, 92, 86] }), roughness: 0.55, metalness: 0.55 }),
  rust: new THREE.MeshStandardMaterial({ map: metalTexture({ seed: 58, base: [112, 68, 42] }), roughness: 0.82, metalness: 0.35 }),
  darkMetal: new THREE.MeshStandardMaterial({ color: 0x2a2c28, roughness: 0.6, metalness: 0.6 }),
  black: new THREE.MeshStandardMaterial({ color: 0x111310, roughness: 0.9 }),
  rubber: new THREE.MeshStandardMaterial({ color: 0x151514, roughness: 0.95 }),
  concrete: new THREE.MeshStandardMaterial({ map: concreteTexture({ seed: 33 }), roughness: 0.95 }),
  concreteDark: new THREE.MeshStandardMaterial({ map: concreteTexture({ seed: 43, tint: [88, 88, 80] }), roughness: 0.95 }),
  asphalt: new THREE.MeshStandardMaterial({ map: asphaltTexture({ seed: 21 }), roughness: 0.96 }),
  skin: new THREE.MeshStandardMaterial({ color: 0xc08a63, roughness: 0.86 }),
  skinDark: new THREE.MeshStandardMaterial({ color: 0x9b6a4c, roughness: 0.88 }),
  hair: new THREE.MeshStandardMaterial({ color: 0x2c231a, roughness: 0.95 }),
  jacket: new THREE.MeshStandardMaterial({ color: 0x515944, roughness: 0.94 }),
  jacketDark: new THREE.MeshStandardMaterial({ color: 0x3b4133, roughness: 0.95 }),
  jeans: new THREE.MeshStandardMaterial({ color: 0x3a404a, roughness: 0.95 }),
  boot: new THREE.MeshStandardMaterial({ color: 0x241d15, roughness: 0.95 }),
  pack: new THREE.MeshStandardMaterial({ color: 0x5b3d28, roughness: 0.92 }),
  bone: new THREE.MeshStandardMaterial({ color: 0xc9bfa2, roughness: 0.88 }),
  boneDark: new THREE.MeshStandardMaterial({ color: 0x9f967e, roughness: 0.9 }),
  socket: new THREE.MeshStandardMaterial({ color: 0x0d0c09, roughness: 1 }),
  rag: new THREE.MeshStandardMaterial({ color: 0x494a3e, roughness: 1, side: THREE.DoubleSide }),
  glass: new THREE.MeshPhysicalMaterial({ color: 0x4a6663, transparent: true, opacity: 0.22, roughness: 0.08, metalness: 0.1, side: THREE.DoubleSide, depthWrite: false }),
  darkGlass: new THREE.MeshStandardMaterial({ color: 0x0d1514, roughness: 0.25, metalness: 0.4 }),
  grass: new THREE.MeshStandardMaterial({ map: grassTexture(), roughness: 1 }),
  dirt: new THREE.MeshStandardMaterial({ map: dirtTexture(), roughness: 1 }),
  yellow: new THREE.MeshStandardMaterial({ map: yellowWallTexture(), roughness: 0.94 }),
  brick: new THREE.MeshStandardMaterial({ map: brickTexture(), roughness: 0.96 }),
  paper: new THREE.MeshStandardMaterial({ map: paperTexture(), roughness: 1, side: THREE.DoubleSide }),
  headlight: new THREE.MeshStandardMaterial({ color: 0xfff0d0, emissive: 0xffc070, emissiveIntensity: 2.2, roughness: 0.3 }),
  taillight: new THREE.MeshStandardMaterial({ color: 0x8a1a12, emissive: 0x6a0d08, emissiveIntensity: 1.2, roughness: 0.4 }),
};

export function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  return m;
}

export function cyl(rt, rb, h, material, seg = 10, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
  m.position.set(x, y, z);
  return m;
}

export function plane(w, h, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  m.position.set(x, y, z);
  return m;
}

export function tagShadows(root, cast = true, receive = true) {
  root.traverse(o => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return root;
}

const shadowTex = (() => {
  let t;
  return () => {
    if (!t) {
      t = canvasTex(128, 128, (ctx, w, h) => {
        const g = ctx.createRadialGradient(w / 2, h / 2, 2, w / 2, h / 2, w / 2);
        g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(0.5, 'rgba(0,0,0,.25)'); g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
      }, { clamp: true });
    }
    return t;
  };
})();

export function blobShadow(radius = 1, opacity = 1) {
  const mat = new THREE.MeshBasicMaterial({ map: shadowTex(), transparent: true, opacity, depthWrite: false });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), mat);
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.012;
  m.renderOrder = 2;
  return m;
}

/* ------------------------------------------------------------------ *
 *  Sky
 * ------------------------------------------------------------------ */
const skyVert = `
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const skyFrag = `
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 groundColor;
uniform vec3 sunColor;
uniform vec3 sunDir;
uniform float sunSize;
uniform float haze;
uniform float stars;
varying vec3 vWorld;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

void main() {
  vec3 dir = normalize(vWorld);
  float h = dir.y;
  float sky = clamp(h * 1.35 + 0.06, 0.0, 1.0);
  vec3 col = mix(horizonColor, topColor, pow(sky, 0.72));
  col = mix(groundColor, col, smoothstep(-0.12, 0.04, h));

  float sd = max(dot(dir, normalize(sunDir)), 0.0);
  float disc = smoothstep(1.0 - sunSize, 1.0 - sunSize * 0.72, sd);
  float halo = pow(sd, 12.0) * haze;
  float wide = pow(sd, 3.0) * haze * 0.32;
  col += sunColor * (disc * 1.35 + halo + wide);

  if (stars > 0.0 && h > 0.08) {
    vec3 p = floor(dir * 460.0);
    float s = hash(p);
    float tw = smoothstep(0.9982, 1.0, s);
    col += vec3(0.72, 0.78, 0.72) * tw * stars * smoothstep(0.08, 0.35, h);
  }
  gl_FragColor = vec4(col, 1.0);
}`;

export function createSky(opts = {}) {
  const uniforms = {
    topColor: { value: new THREE.Color(opts.top ?? 0x0b1519) },
    horizonColor: { value: new THREE.Color(opts.horizon ?? 0x8b6a4f) },
    groundColor: { value: new THREE.Color(opts.ground ?? 0x171b16) },
    sunColor: { value: new THREE.Color(opts.sunColor ?? 0xffc08a) },
    sunDir: { value: new THREE.Vector3(...(opts.sunDir ?? [0.3, 0.06, -1])).normalize() },
    sunSize: { value: opts.sunSize ?? 0.0018 },
    haze: { value: opts.haze ?? 0.55 },
    stars: { value: opts.stars ?? 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, vertexShader: skyVert, fragmentShader: skyFrag,
    side: THREE.BackSide, depthWrite: false, fog: false
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(600, 32, 20), mat);
  mesh.name = 'sky';
  mesh.frustumCulled = false;
  return mesh;
}

export function createMoon(size = 18, color = 0xd8ddc8, opacity = 0.9) {
  const tex = glowTexture('rgba(230,236,220,1)', 'rgba(180,200,180,0)');
  const mat = new THREE.SpriteMaterial({ map: tex, color, transparent: true, opacity, depthWrite: false, fog: false });
  const s = new THREE.Sprite(mat);
  s.scale.set(size, size, 1);
  return s;
}

/* ------------------------------------------------------------------ *
 *  Forest & ground
 * ------------------------------------------------------------------ */
export function createGround(size = 200, material = MAT.grass) {
  const g = new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);
  g.rotation.x = -Math.PI / 2;
  g.receiveShadow = true;
  return g;
}

export function createRoad(length = 200, width = 8, opts = {}) {
  const grp = new THREE.Group();
  const road = new THREE.Mesh(new THREE.PlaneGeometry(width, length), MAT.asphalt);
  road.rotation.x = -Math.PI / 2;
  road.position.y = 0.02;
  road.receiveShadow = true;
  grp.add(road);

  // shoulders
  const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x383a30, roughness: 1 });
  for (const s of [-1, 1]) {
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(1.6, length), shoulderMat);
    sh.rotation.x = -Math.PI / 2;
    sh.position.set(s * (width / 2 + 0.8), 0.016, 0);
    sh.receiveShadow = true;
    grp.add(sh);
  }
  // faded centerline
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xb8a976, roughness: 0.9, transparent: true, opacity: 0.55 });
  for (let z = -length / 2; z < length / 2; z += 8) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.13, 3.4), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.035, z);
    grp.add(line);
  }
  // edge lines
  for (const s of [-1, 1]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.09, length), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(s * (width / 2 - 0.3), 0.03, 0);
    line.material = lineMat.clone(); line.material.opacity = 0.25;
    grp.add(line);
  }
  return grp;
}

export function createPineTree(scale = 1, dead = false) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1 * scale, 0.2 * scale, 5.4 * scale, 6), MAT.wood);
  trunk.position.y = 2.7 * scale;
  trunk.castShadow = true;
  g.add(trunk);
  const foliageMat = new THREE.MeshStandardMaterial({ color: dead ? 0x3a3c2e : 0x27382b, roughness: 1, flatShading: true });
  if (!dead) {
    for (let i = 0; i < 4; i++) {
      const r = (1.65 - i * 0.3) * scale;
      const h = (2.2 - i * 0.18) * scale;
      const cone = new THREE.Mesh(new THREE.ConeGeometry(r, h, 7), foliageMat);
      cone.position.y = (2.9 + i * 1.02) * scale;
      cone.rotation.y = i * 0.7;
      cone.castShadow = i < 2;
      g.add(cone);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.02 * scale, 0.055 * scale, (1.4 + Math.random() * 1.5) * scale, 4), MAT.wood);
      br.position.y = (2.5 + i * 0.55) * scale;
      br.rotation.z = (Math.random() - 0.5) * 1.9;
      br.rotation.x = (Math.random() - 0.5) * 1.4;
      g.add(br);
    }
  }
  return g;
}

export function createForest({ count = 140, seed = 42, center = [0, 0], radius = 70, roadWidth = 8, minZ = -80, maxZ = 70 } = {}) {
  const g = new THREE.Group();
  const r = mulberry32(seed);
  const trunkGeo = new THREE.CylinderGeometry(0.12, 0.24, 5.8, 5);
  const trunkMat = MAT.wood;
  const foliageGeo = new THREE.ConeGeometry(1.45, 2.6, 6);
  const foliageMat = new THREE.MeshStandardMaterial({ color: 0x26352a, roughness: 1, flatShading: true });
  const trunkInst = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
  const foliage1 = new THREE.InstancedMesh(foliageGeo, foliageMat, count);
  const foliage2 = new THREE.InstancedMesh(foliageGeo, foliageMat, count);
  const foliage3 = new THREE.InstancedMesh(foliageGeo, foliageMat, count);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3();
  const p = new THREE.Vector3();
  let placed = 0;
  let guard = 0;
  while (placed < count && guard++ < count * 12) {
    const side = r() > 0.5 ? 1 : -1;
    const x = side * (roadWidth / 2 + 1.5 + r() * radius);
    const z = minZ + r() * (maxZ - minZ);
    if (Math.abs(x) < roadWidth / 2 + 1.4) continue;
    // keep a clearing near the store front / gameplay area
    if (Math.abs(x) < 38 && z > -28 && z < 26) continue;
    const sc = 0.65 + r() * 1.05;
    const rot = r() * 6.28;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    p.set(x, 2.9 * sc, z);
    s.set(sc, sc, sc);
    m.compose(p, q, s);
    trunkInst.setMatrixAt(placed, m);
    p.set(x, 3.0 * sc, z); s.set(sc * 0.82, sc, sc * 0.82);
    m.compose(p, q, s); foliage1.setMatrixAt(placed, m);
    p.set(x, 4.1 * sc, z); s.set(sc * 0.68, sc * 0.9, sc * 0.68);
    m.compose(p, q, s); foliage2.setMatrixAt(placed, m);
    p.set(x, 5.0 * sc, z); s.set(sc * 0.5, sc * 0.78, sc * 0.5);
    m.compose(p, q, s); foliage3.setMatrixAt(placed, m);
    placed++;
  }
  trunkInst.count = foliage1.count = foliage2.count = foliage3.count = placed;
  trunkInst.castShadow = false; trunkInst.receiveShadow = false;
  g.add(trunkInst, foliage1, foliage2, foliage3);
  return g;
}

export function createFernPatch(count = 300, seed = 3, area = 30) {
  const r = mulberry32(seed);
  const geo = new THREE.BufferGeometry();
  // crossed blade quads
  const verts = [], uvs = [], idx = [];
  for (let b = 0; b < 3; b++) {
    const a = b / 3 * Math.PI;
    const cx = Math.cos(a) * 0.08, cz = Math.sin(a) * 0.08;
    const start = verts.length / 3;
    verts.push(-Math.cos(a) * 0.3 + cx, 0, -Math.sin(a) * 0.3 + cz, Math.cos(a) * 0.3 + cx, 0, Math.sin(a) * 0.3 + cz, Math.cos(a) * 0.1 + cx, 0.45, Math.sin(a) * 0.1 + cz);
    uvs.push(0, 0, 1, 0, 0.5, 1);
    idx.push(start, start + 1, start + 2);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ color: 0x4a5636, roughness: 1, side: THREE.DoubleSide, flatShading: true });
  const inst = new THREE.InstancedMesh(geo, mat, count);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    const x = (r() - 0.5) * area;
    const z = (r() - 0.5) * area;
    const sc = 0.6 + r() * 1.2;
    p.set(x, 0.02, z); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * 6.28); s.set(sc, sc, sc);
    m.compose(p, q, s); inst.setMatrixAt(i, m);
  }
  inst.receiveShadow = true;
  return inst;
}

/* ------------------------------------------------------------------ *
 *  Tim — stylized playable character
 * ------------------------------------------------------------------ */
export class TimCharacter {
  constructor(opts = {}) {
    this.group = new THREE.Group();
    this.group.name = 'Tim';
    const parts = this.parts = {};
    const body = this.body = new THREE.Group();
    this.group.add(body);

    // hips and torso
    const hips = box(0.36, 0.2, 0.23, MAT.jeans, 0, 0.93, 0);
    body.add(hips);
    const torso = new THREE.Group();
    torso.position.y = 1.0;
    body.add(torso);
    parts.torso = torso;
    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.3, 4, 8), MAT.jacket);
    chest.scale.set(1.15, 1, 0.78);
    chest.position.y = 0.24;
    torso.add(chest);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.035, 5, 9), MAT.jacketDark);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 0.49;
    torso.add(collar);
    // zipper
    const zip = box(0.015, 0.4, 0.01, MAT.jacketDark, 0, 0.25, 0.157);
    torso.add(zip);
    // hood bundle
    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.13, 7, 5, 0, 6.28, 0, 2.1), MAT.jacketDark);
    hood.scale.set(1.2, 0.7, 0.9); hood.position.set(0, 0.44, -0.13); hood.rotation.x = 0.4;
    torso.add(hood);

    // head
    const neck = cyl(0.06, 0.07, 0.11, MAT.skin, 7, 0, 1.52, 0);
    body.add(neck);
    const head = new THREE.Group();
    head.position.set(0, 1.62, 0);
    body.add(head); parts.head = head;
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.155, 12, 10), MAT.skin);
    skull.scale.set(0.92, 1.08, 0.96); skull.position.y = 0.05;
    head.add(skull);
    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), MAT.skin);
    jaw.scale.set(0.88, 0.7, 0.9); jaw.position.set(0, -0.05, 0.04); head.add(jaw);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.162, 10, 8, 0, 6.28, 0, 1.9), MAT.hair);
    hair.scale.set(0.96, 1.0, 0.98); hair.position.set(0, 0.09, -0.01); hair.rotation.x = -0.1; head.add(hair);
    // messy fringe
    const fringe = box(0.19, 0.05, 0.08, MAT.hair, 0, 0.13, 0.12); fringe.rotation.x = 0.3; head.add(fringe);
    // eyes
    const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xddd6c4, roughness: 0.4 });
    for (const s of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 7, 6), eyeWhite);
      eye.position.set(s * 0.058, 0.06, 0.136); eye.scale.set(1, 0.8, 0.5); head.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.012, 6, 5), MAT.socket);
      pupil.position.set(s * 0.058, 0.06, 0.155); head.add(pupil);
      const brow = box(0.06, 0.012, 0.02, MAT.hair, s * 0.06, 0.105, 0.142);
      brow.rotation.z = s * -0.08; head.add(brow);
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.033, 6, 5), MAT.skinDark);
      ear.scale.set(0.5, 1, 0.8); ear.position.set(s * 0.148, 0.045, 0); head.add(ear);
    }
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.026, 0.07, 4), MAT.skinDark);
    nose.rotation.x = Math.PI / 2; nose.position.set(0, 0.02, 0.155); head.add(nose);
    const mouth = box(0.07, 0.012, 0.01, MAT.skinDark, 0, -0.075, 0.148);
    head.add(mouth);
    // stubble shade
    const stubble = new THREE.Mesh(new THREE.SphereGeometry(0.105, 8, 6), new THREE.MeshStandardMaterial({ color: 0x8f6a4d, roughness: 1, transparent: true, opacity: 0.28 }));
    stubble.scale.set(0.9, 0.75, 0.92); stubble.position.set(0, -0.02, 0.035); head.add(stubble);

    // backpack
    const pack = box(0.32, 0.42, 0.17, MAT.pack, 0, 1.25, -0.2);
    pack.rotation.x = -0.06; body.add(pack);
    const packTop = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.12, 8, 1, false, 0, Math.PI), MAT.pack);
    packTop.rotation.z = Math.PI / 2; packTop.rotation.x = Math.PI / 2;
    packTop.position.set(0, 1.47, -0.2); body.add(packTop);
    for (const s of [-1, 1]) {
      const strap = box(0.05, 0.38, 0.03, MAT.jacketDark, s * 0.12, 1.28, 0.16);
      strap.rotation.x = -0.1; body.add(strap);
    }
    const bedroll = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.42, 7), MAT.rag);
    bedroll.rotation.z = Math.PI / 2; bedroll.position.set(0, 1.48, -0.29); body.add(bedroll);

    // arms
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.29, 1.42, 0);
      body.add(shoulder);
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.066, 0.22, 3, 7), MAT.jacket);
      upper.position.y = -0.15; shoulder.add(upper);
      const elbow = new THREE.Group(); elbow.position.y = -0.31; shoulder.add(elbow);
      const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.2, 3, 7), MAT.jacket);
      lower.position.y = -0.13; elbow.add(lower);
      const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.062, 0.05, 7), MAT.jacketDark);
      cuff.position.y = -0.26; elbow.add(cuff);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.062, 7, 6), MAT.skin);
      hand.scale.set(0.8, 1.05, 0.8); hand.position.y = -0.31; elbow.add(hand);
      return { shoulder, elbow, hand };
    };
    parts.armL = makeArm(-1);
    parts.armR = makeArm(1);

    // legs
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.115, 0.92, 0);
      body.add(hip);
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.083, 0.26, 3, 7), MAT.jeans);
      thigh.position.y = -0.2; hip.add(thigh);
      const knee = new THREE.Group(); knee.position.y = -0.4; hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.27, 3, 7), MAT.jeans);
      shin.position.y = -0.19; knee.add(shin);
      const boot = box(0.15, 0.14, 0.27, MAT.boot, 0, -0.4, 0.05);
      knee.add(boot);
      const sole = box(0.16, 0.03, 0.28, MAT.black, 0, -0.47, 0.05);
      knee.add(sole);
      return { hip, knee, boot };
    };
    parts.legL = makeLeg(-1);
    parts.legR = makeLeg(1);

    // pistol (hidden until needed)
    const gun = new THREE.Group();
    const grip = box(0.045, 0.13, 0.06, MAT.black, 0, -0.04, -0.01); grip.rotation.x = -0.18; gun.add(grip);
    const slide = box(0.045, 0.06, 0.24, MAT.darkMetal, 0, 0.05, 0.08); gun.add(slide);
    const barrel = cyl(0.012, 0.012, 0.09, MAT.black, 6, 0, 0.05, 0.21); barrel.rotation.x = Math.PI / 2; gun.add(barrel);
    gun.position.set(0, -0.31, 0.02);
    gun.rotation.x = 1.35;
    gun.visible = false;
    parts.armR.elbow.add(gun);
    this.gun = gun;

    this.time = 0;
    this.state = opts.state ?? 'idle';
    this.crouch = 0;
    this.walkPhase = 0;
    this.look = new THREE.Vector3();
    this.seated = false;
    this.setLocomotion(0, 0);
    this.group.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    const sh = blobShadow(0.65, 0.9); sh.position.y = 0.01; this.group.add(sh);
  }

  setGun(v) { this.gun.visible = v; }

  setSeated(v = true) {
    this.seated = v;
    if (v) {
      this.parts.legL.hip.rotation.x = -1.42;
      this.parts.legL.knee.rotation.x = 1.38;
      this.parts.legR.hip.rotation.x = -1.42;
      this.parts.legR.knee.rotation.x = 1.38;
      this.body.position.y = 0.18;
      this.parts.torso.rotation.x = 0.06;
    } else {
      this.body.position.y = 0;
      this.parts.torso.rotation.x = 0;
    }
  }

  setCrouch(amount) { this.crouch = THREE.MathUtils.clamp(amount, 0, 1); }

  setLocomotion(speed, dt) {
    this.moveSpeed = speed;
    this.time += dt;
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    const speed = this.moveSpeed ?? 0;
    const c = this.crouch;
    const stride = Math.sin(t * (5.2 + speed * 0.9)) * Math.min(1, speed / 2.4);
    const idle = speed < 0.2 ? Math.sin(t * 1.7) * 0.012 : 0;

    if (!this.seated) {
      this.body.position.y = -0.34 * c + (speed > 0.2 ? Math.abs(Math.sin(t * 9)) * 0.025 : 0);
      this.parts.legL.hip.rotation.x = -0.82 * c + stride * 0.62;
      this.parts.legR.hip.rotation.x = -0.82 * c - stride * 0.62;
      this.parts.legL.knee.rotation.x = 1.5 * c + Math.max(0, -stride) * 0.7;
      this.parts.legR.knee.rotation.x = 1.5 * c + Math.max(0, stride) * 0.7;
      this.parts.armL.shoulder.rotation.x = 0.1 * c - stride * 0.52;
      this.parts.armR.shoulder.rotation.x = 0.1 * c + stride * 0.52;
      this.parts.armL.elbow.rotation.x = -0.15 - Math.max(0, stride) * 0.26;
      this.parts.armR.elbow.rotation.x = -0.15 - Math.max(0, -stride) * 0.26;
      this.parts.torso.rotation.x = 0.18 * c + Math.abs(idle) * 0.1;
      this.parts.head.rotation.x = -0.13 * c + idle;
      this.parts.head.rotation.y = Math.sin(t * 0.42) * 0.07;
      this.parts.torso.position.y = 1.0 + idle * 0.2;
    }
  }
}

/* ------------------------------------------------------------------ *
 *  Skeleton
 * ------------------------------------------------------------------ */
export function createSkeleton({ pose = 'lying', rag = true } = {}) {
  const g = new THREE.Group();
  const bone = MAT.bone, boneDark = MAT.boneDark;
  // skull
  const skull = new THREE.Group(); skull.position.y = 1.52; g.add(skull);
  const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), bone);
  cranium.scale.set(0.94, 1.05, 0.92); skull.add(cranium);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.095, 8, 6), bone);
  face.scale.set(0.85, 0.72, 0.9); face.position.set(0, -0.075, 0.035); skull.add(face);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.035, 0.1), boneDark);
  jaw.position.set(0, -0.15, 0.04); skull.add(jaw);
  for (const s of [-1, 1]) {
    const socket = new THREE.Mesh(new THREE.SphereGeometry(0.034, 7, 6), MAT.socket);
    socket.scale.set(1, 1.1, 0.5); socket.position.set(s * 0.048, 0.008, 0.108); skull.add(socket);
  }
  const nasal = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.04, 3), MAT.socket);
  nasal.position.set(0, -0.055, 0.118); skull.add(nasal);
  for (let i = 0; i < 6; i++) {
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.013, 0.018, 0.008), bone);
    tooth.position.set(-0.044 + i * 0.018, -0.122, 0.102); skull.add(tooth);
  }
  // neck / spine
  for (let i = 0; i < 5; i++) {
    const vert = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.07, 6), boneDark);
    vert.position.y = 1.36 - i * 0.075; g.add(vert);
  }
  // ribcage
  const ribs = new THREE.Group(); g.add(ribs);
  for (let i = 0; i < 6; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.17 - i * 0.012, 0.013, 4, 14, Math.PI * 1.35), bone);
    rib.rotation.x = Math.PI / 2;
    rib.rotation.z = Math.PI * 0.33;
    rib.position.y = 1.29 - i * 0.075;
    ribs.add(rib);
  }
  const sternum = box(0.035, 0.35, 0.02, boneDark, 0, 1.12, 0.14); ribs.add(sternum);
  // shoulders / arms
  for (const s of [-1, 1]) {
    const clavicle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.25, 5), bone);
    clavicle.rotation.z = Math.PI / 2; clavicle.position.set(s * 0.12, 1.34, 0); ribs.add(clavicle);
    const arm = new THREE.Group(); arm.position.set(s * 0.24, 1.33, 0); g.add(arm);
    const humerus = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.018, 0.31, 5), bone);
    humerus.position.y = -0.16; arm.add(humerus);
    const elbow = new THREE.Group(); elbow.position.y = -0.32; arm.add(elbow);
    const radius = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.013, 0.29, 5), boneDark);
    radius.position.y = -0.15; elbow.add(radius);
    const hand = new THREE.Group(); hand.position.y = -0.31; elbow.add(hand);
    for (let f = 0; f < 4; f++) {
      const finger = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.004, 0.07, 4), boneDark);
      finger.position.set(-0.022 + f * 0.015, -0.03, 0); finger.rotation.z = (f - 1.5) * 0.12; hand.add(finger);
    }
    if (s < 0) { arm.rotation.x = -0.16; arm.rotation.z = 0.2; elbow.rotation.x = -0.5; }
    else { arm.rotation.x = -0.3; arm.rotation.z = -0.25; elbow.rotation.x = -0.8; }
  }
  // pelvis / legs
  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.16), boneDark);
  pelvis.position.y = 0.86; g.add(pelvis);
  for (const s of [-1, 1]) {
    const hip = new THREE.Group(); hip.position.set(s * 0.09, 0.83, 0); g.add(hip);
    const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.02, 0.38, 5), bone);
    femur.position.y = -0.2; hip.add(femur);
    const knee = new THREE.Group(); knee.position.y = -0.4; hip.add(knee);
    const tibia = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.014, 0.4, 5), boneDark);
    tibia.position.y = -0.2; knee.add(tibia);
    const foot = box(0.07, 0.035, 0.16, boneDark, 0, -0.42, 0.04); knee.add(foot);
    if (pose === 'lying') {
      hip.rotation.x = s < 0 ? -0.22 : 0.13; knee.rotation.x = s < 0 ? 0.7 : 0.18;
      hip.rotation.z = s * 0.12;
    } else if (pose === 'sitting') {
      hip.rotation.x = -1.35; knee.rotation.x = 1.15;
    } else if (pose === 'slumped') {
      hip.rotation.x = 0.4; knee.rotation.x = 0.35;
    }
  }
  // tattered clothes
  if (rag) {
    const shirt = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.2, 0.55, 8, 3, true), MAT.rag);
    shirt.position.y = 1.05; shirt.scale.z = 0.7;
    shirt.material = MAT.rag.clone(); shirt.material.transparent = true; shirt.material.opacity = 0.7;
    shirt.material.side = THREE.DoubleSide;
    g.add(shirt);
    const pants = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.3, 7, 2, true), MAT.rag);
    pants.position.y = 0.7; pants.scale.z = 0.7; g.add(pants);
    const rag1 = box(0.12, 0.18, 0.01, MAT.rag, 0.11, 1.2, 0.13); rag1.rotation.z = 0.4; g.add(rag1);
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  if (pose === 'lying') {
    g.rotation.z = Math.PI / 2;
    g.rotation.y = 0.25;
    g.position.y = 0.25;
  } else if (pose === 'sitting') {
    g.position.y = 0.24;
  }
  return g;
}

/* ------------------------------------------------------------------ *
 *  Vehicles
 * ------------------------------------------------------------------ */
export function createTruck({ headlights = false } = {}) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: 0x4e5b52, roughness: 0.72, metalness: 0.25 });
  const paintDark = new THREE.MeshStandardMaterial({ color: 0x38443e, roughness: 0.8, metalness: 0.2 });
  // chassis
  g.add(box(2.1, 0.35, 5.3, MAT.darkMetal, 0, 0.55, 0));
  // bed
  g.add(box(2.1, 0.16, 2.5, paint, 0, 0.95, -1.45));
  g.add(box(2.16, 0.55, 0.1, paint, 0, 1.18, -2.7));
  for (const s of [-1, 1]) g.add(box(0.1, 0.52, 2.5, paint, s * 1.03, 1.18, -1.45));
  // cab
  const cab = new THREE.Group(); cab.position.set(0, 1.0, 0.65); g.add(cab);
  cab.add(box(2.14, 0.95, 2.2, paint, 0, 0.42, 0));
  const roof = box(2.0, 0.14, 1.9, paintDark, 0, 0.94, -0.1); cab.add(roof);
  // hood
  g.add(box(2.06, 0.5, 1.25, paint, 0, 1.02, 2.2));
  const grille = box(1.7, 0.38, 0.07, MAT.darkMetal, 0, 0.92, 2.85); g.add(grille);
  for (let i = -2; i <= 2; i++) g.add(box(0.06, 0.32, 0.08, MAT.metal, i * 0.3, 0.92, 2.9));
  // bumpers
  g.add(box(2.2, 0.18, 0.18, MAT.metal, 0, 0.58, 2.92));
  g.add(box(2.16, 0.16, 0.16, MAT.metal, 0, 0.62, -2.79));
  // windshield
  const windshield = box(1.78, 0.6, 0.04, MAT.glass, 0, 1.42, 1.74);
  windshield.rotation.x = -0.28; g.add(windshield);
  const wFrame = box(1.92, 0.08, 0.1, paintDark, 0, 1.72, 1.68); g.add(wFrame);
  // side windows (thin boxes)
  for (const s of [-1, 1]) {
    const win = box(0.035, 0.5, 1.05, MAT.glass, s * 1.06, 1.42, 0.78); g.add(win);
    const frame = box(0.05, 0.06, 1.1, paintDark, s * 1.07, 1.68, 0.8); g.add(frame);
    const doorLine = box(0.01, 0.85, 0.01, MAT.darkMetal, s * 1.075, 1.0, 0.65); g.add(doorLine);
    const handle = box(0.03, 0.035, 0.13, MAT.metal, s * 1.085, 1.09, 0.9); g.add(handle);
  }
  // wheels
  const wheelGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.34, 12);
  for (const [x, z] of [[-1.02, 1.82], [1.02, 1.82], [-1.02, -1.78], [1.02, -1.78]]) {
    const w = new THREE.Mesh(wheelGeo, MAT.rubber);
    w.rotation.z = Math.PI / 2; w.position.set(x, 0.47, z); w.castShadow = true; g.add(w);
    const hub = cyl(0.17, 0.17, 0.36, MAT.metal, 8, x, 0.47, z); hub.rotation.z = Math.PI / 2; g.add(hub);
  }
  // headlights
  for (const s of [-1, 1]) {
    const hl = cyl(0.15, 0.15, 0.06, MAT.headlight, 10, s * 0.72, 0.96, 2.9);
    hl.rotation.x = Math.PI / 2; g.add(hl);
    const tl = box(0.22, 0.13, 0.03, MAT.taillight, s * 0.72, 0.98, -2.75); g.add(tl);
  }
  if (headlights) {
    for (const s of [-1, 1]) {
      const light = new THREE.SpotLight(0xffd6a0, 45, 45, 0.48, 0.5, 1.4);
      light.position.set(s * 0.72, 1.0, 2.95);
      light.target.position.set(s * 0.8, -0.4, 18);
      g.add(light, light.target);
    }
  }
  // rust & details
  const rustDecal = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.4), new THREE.MeshStandardMaterial({ color: 0x6b4027, transparent: true, opacity: 0.5, roughness: 1 }));
  rustDecal.position.set(-1.075, 0.85, -0.4); rustDecal.rotation.y = -Math.PI / 2; g.add(rustDecal);
  // cargo in bed
  const can = cyl(0.15, 0.15, 0.3, MAT.metal, 10, 0.4, 1.3, -1.3); g.add(can);
  const can2 = cyl(0.14, 0.14, 0.28, MAT.rust, 10, 0.15, 1.25, -1.8); g.add(can2);
  const crate = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), MAT.crate); crate.position.set(-0.5, 1.24, -1.5); g.add(crate);
  const tarp = box(0.8, 0.12, 0.8, MAT.rag, 0.4, 1.14, -2.1); tarp.rotation.y = 0.3; g.add(tarp);
  // roof rack
  g.add(box(1.6, 0.06, 0.08, MAT.darkMetal, 0, 2.07, 0.3));
  g.add(box(1.6, 0.06, 0.08, MAT.darkMetal, 0, 2.07, 1.2));
  // antenna
  g.add(cyl(0.008, 0.012, 1.1, MAT.darkMetal, 4, -0.8, 2.2, 1.4));
  // mud flaps
  g.add(box(0.4, 0.35, 0.03, MAT.rubber, -0.8, 0.3, -2.5));
  g.add(box(0.4, 0.35, 0.03, MAT.rubber, 0.8, 0.3, -2.5));
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

export function createTruckInterior() {
  const g = new THREE.Group();
  const plastic = new THREE.MeshStandardMaterial({ color: 0x2b2e29, roughness: 0.86 });
  const fabric = new THREE.MeshStandardMaterial({ color: 0x4c4437, roughness: 1 });
  const trim = new THREE.MeshStandardMaterial({ color: 0x1c1f1b, roughness: 0.8 });
  // floor
  g.add(box(2.1, 0.1, 2.3, trim, 0, 0.62, 0));
  // dashboard
  const dash = box(2.0, 0.42, 0.55, plastic, 0, 1.04, 1.2); g.add(dash);
  g.add(box(1.9, 0.18, 0.25, trim, 0, 1.28, 1.35));
  // windshield frame
  g.add(box(2.1, 0.16, 0.16, trim, 0, 1.82, 1.55));
  for (const s of [-1, 1]) g.add(box(0.12, 0.8, 0.16, trim, s * 1.0, 1.45, 1.55));
  // side panels
  for (const s of [-1, 1]) {
    g.add(box(0.08, 0.9, 1.8, plastic, s * 1.02, 1.2, 0.1));
    g.add(box(0.11, 0.7, 0.6, fabric, s * 1.0, 1.45, -0.3));
    // window frame
    g.add(box(0.1, 1.2, 0.09, trim, s * 1.02, 1.6, -0.8));
    g.add(box(0.1, 1.2, 0.09, trim, s * 1.02, 1.6, 0.6));
  }
  // rear wall
  g.add(box(2.1, 1.0, 0.1, plastic, 0, 1.3, -1.15));
  g.add(box(1.3, 0.55, 0.04, MAT.glass, 0, 1.6, -1.21));
  // roof
  g.add(box(2.1, 0.08, 2.0, trim, 0, 1.96, 0.1));
  // bench seat
  const seat = box(1.8, 0.18, 0.6, fabric, 0, 1.02, -0.55); g.add(seat);
  const back = box(1.8, 0.72, 0.16, fabric, 0, 1.35, -0.88); back.rotation.x = -0.12; g.add(back);
  const headrest1 = box(0.34, 0.26, 0.12, fabric, -0.6, 1.72, -0.94); g.add(headrest1);
  const headrest2 = box(0.34, 0.26, 0.12, fabric, 0.6, 1.72, -0.94); g.add(headrest2);
  // steering wheel
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.028, 6, 18), trim);
  wheel.position.set(-0.58, 1.46, 0.92); wheel.rotation.x = -1.1; g.add(wheel);
  const column = cyl(0.035, 0.04, 0.36, trim, 6, -0.58, 1.33, 1.0); column.rotation.x = 1.15; g.add(column);
  // gear stick
  g.add(cyl(0.015, 0.02, 0.4, MAT.metal, 5, 0.0, 1.1, 0.78));
  const gearKnob = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), trim);
  gearKnob.position.set(0, 1.3, 0.78); g.add(gearKnob);
  // radio & vents
  g.add(box(0.5, 0.16, 0.03, MAT.darkMetal, 0, 1.25, 1.49));
  const radioGlow = new THREE.MeshStandardMaterial({ color: 0x8a5a2c, emissive: 0xff8b2e, emissiveIntensity: 0.7, roughness: 0.4 });
  const display = box(0.16, 0.05, 0.02, radioGlow, 0, 1.26, 1.515); g.add(display);
  // mirror
  g.add(box(0.25, 0.1, 0.03, MAT.metal, 0.1, 1.83, 1.62));
  // clutter: cans, map
  const can = cyl(0.06, 0.06, 0.12, MAT.metal, 8, 0.14, 1.06, 0.35); g.add(can);
  const can2 = cyl(0.06, 0.06, 0.12, MAT.rust, 8, 0.31, 1.06, 0.16); g.add(can2);
  const map = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.36), MAT.paper);
  map.rotation.x = -Math.PI / 2; map.rotation.z = 0.3; map.position.set(0.32, 0.985, -0.62); g.add(map);
  // overhead light
  const dome = box(0.2, 0.03, 0.1, radioGlow, 0, 1.92, -0.2); g.add(dome);
  g.traverse(o => { if (o.isMesh) { o.receiveShadow = true; } });
  return g;
}

export function createSedan({ rustColor = 0x6b4a3a } = {}) {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: rustColor, roughness: 0.8, metalness: 0.25 });
  const body = box(1.9, 0.55, 4.3, paint, 0, 0.65, 0); g.add(body);
  const hood = box(1.8, 0.18, 1.2, paint, 0, 0.96, 1.45); g.add(hood);
  const trunk = box(1.8, 0.2, 1.0, paint, 0, 0.96, -1.6); g.add(trunk);
  const cabin = box(1.72, 0.62, 2.0, paint, 0, 1.24, -0.1); g.add(cabin);
  const roof = box(1.5, 0.1, 1.5, paint, 0, 1.57, -0.25); g.add(roof);
  // windshield + side windows
  const front = box(1.5, 0.5, 0.03, MAT.darkGlass, 0, 1.38, 0.95); front.rotation.x = -0.42; g.add(front);
  for (const s of [-1, 1]) {
    const side = box(0.03, 0.42, 0.78, MAT.darkGlass, s * 0.865, 1.35, 0.3); g.add(side);
    const side2 = box(0.03, 0.4, 0.62, MAT.darkGlass, s * 0.865, 1.35, -0.55); g.add(side2);
  }
  // wheels
  const wg = new THREE.CylinderGeometry(0.36, 0.36, 0.25, 10);
  for (const [x, z] of [[-0.88, 1.4], [0.88, 1.4], [-0.88, -1.4], [0.88, -1.4]]) {
    const w = new THREE.Mesh(wg, MAT.rubber); w.rotation.z = Math.PI / 2; w.position.set(x, 0.36, z); g.add(w);
  }
  // details
  for (const s of [-1, 1]) {
    g.add(box(0.24, 0.13, 0.03, MAT.taillight, s * 0.65, 0.82, -2.16));
    g.add(box(0.22, 0.12, 0.03, MAT.headlight, s * 0.65, 0.82, 2.16));
  }
  g.add(box(0.8, 0.18, 0.08, MAT.metal, 0, 0.55, 2.18));
  g.add(box(0.8, 0.18, 0.08, MAT.metal, 0, 0.55, -2.18));
  // driver skeleton
  const sk = createSkeleton({ pose: 'sitting' });
  sk.scale.set(1.0, 1.0, 1.0);
  sk.position.set(-0.45, -0.2, -0.1);
  sk.traverse(o => { if (o.isMesh) o.castShadow = false; });
  g.add(sk);
  // foggy side window (left side)
  const fogTex = foggyGlassTexture();
  const fogMat = new THREE.ShaderMaterial({
    uniforms: {
      map: { value: fogTex },
      wipe: { value: new THREE.Vector2(-1, 0.5) },
      radius: { value: 0.0 },
      opacity: { value: 0.92 },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `
      uniform sampler2D map; uniform vec2 wipe; uniform float radius; uniform float opacity;
      varying vec2 vUv;
      void main(){
        vec4 c = texture2D(map, vUv*vec2(1.0,1.4));
        float d = distance(vUv, wipe);
        float clear = smoothstep(radius, radius*0.72, d);
        c.a *= opacity * (1.0 - clear*0.97);
        gl_FragColor = c;
      }`,
    transparent: true, side: THREE.DoubleSide, depthWrite: false
  });
  const fog = new THREE.Mesh(new THREE.PlaneGeometry(0.82, 0.47), fogMat);
  fog.rotation.y = -Math.PI / 2;
  fog.position.set(-0.888, 1.35, 0.3);
  g.add(fog);
  // sleeve/hand that wipes
  const sleeve = new THREE.Group();
  const arm = box(0.09, 0.09, 0.34, MAT.jacket, 0, 0, 0);
  sleeve.add(arm);
  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 7, 6), MAT.skin);
  hand.position.set(0, 0.0, 0.2); sleeve.add(hand);
  sleeve.position.set(-0.93, 1.32, 0.15);
  sleeve.rotation.y = -Math.PI / 2;
  sleeve.rotation.x = -0.1;
  sleeve.visible = false;
  g.add(sleeve);
  return { group: g, fog, fogMat, sleeve, skeleton: sk };
}

export function createShoppingCart() {
  const g = new THREE.Group();
  const mat = MAT.metal;
  const basket = new THREE.Group();
  for (const s of [-1, 1]) {
    basket.add(box(0.03, 0.42, 0.72, mat, s * 0.24, 0.62, 0));
    basket.add(box(0.48, 0.03, 0.72, mat, 0, 0.84, 0));
  }
  for (let i = 0; i < 5; i++) basket.add(box(0.46, 0.02, 0.02, mat, 0, 0.56 + i * 0.06, -0.36 + i * 0.18));
  basket.rotation.x = 0.08; g.add(basket);
  g.add(box(0.44, 0.03, 0.5, mat, 0, 0.32, 0));
  for (const [x, z] of [[-0.18, 0.22], [0.18, 0.22], [-0.18, -0.22], [0.18, -0.22]]) {
    const w = cyl(0.05, 0.05, 0.04, MAT.rubber, 8, x, 0.26, z); w.rotation.z = Math.PI / 2; g.add(w);
  }
  g.add(box(0.03, 0.03, 0.55, mat, 0, 1.02, -0.52));
  g.add(box(0.26, 0.05, 0.04, MAT.rubber, 0, 1.04, -0.8));
  g.rotation.z = 0.18; g.rotation.y = 0.4;
  g.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return g;
}

export function createCrate(size = 1) {
  const c = new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.8, size), MAT.crate);
  c.castShadow = true; c.receiveShadow = true;
  return c;
}

export function createTrashPile(seed = 1) {
  const g = new THREE.Group();
  const r = mulberry32(seed);
  for (let i = 0; i < 16; i++) {
    const type = r();
    let o;
    if (type < 0.35) {
      o = new THREE.Mesh(new THREE.PlaneGeometry(0.2 + r() * 0.25, 0.25 + r() * 0.3), MAT.paper);
    } else if (type < 0.6) {
      o = cyl(0.04, 0.04, 0.12, r() > 0.5 ? MAT.metal : MAT.rust, 7);
      o.rotation.z = Math.PI / 2;
    } else if (type < 0.8) {
      o = new THREE.Mesh(new THREE.BoxGeometry(0.2 + r() * 0.3, 0.1 + r() * 0.2, 0.2 + r() * 0.3), r() > 0.5 ? MAT.crate : MAT.rag);
    } else {
      o = new THREE.Mesh(new THREE.SphereGeometry(0.08 + r() * 0.12, 6, 5), MAT.rag);
      o.scale.y = 0.5;
    }
    o.position.set((r() - 0.5) * 1.8, 0.06 + r() * 0.25, (r() - 0.5) * 1.5);
    o.rotation.set(r() * 3, r() * 6, r() * 2);
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
    g.add(o);
  }
  return g;
}

export function createStreetLamp({ height = 6, light = true, color = 0xffb36a, intensity = 26 } = {}) {
  const g = new THREE.Group();
  const pole = cyl(0.07, 0.11, height, MAT.darkMetal, 7, 0, height / 2, 0); g.add(pole);
  const arm = box(1.5, 0.08, 0.08, MAT.darkMetal, 0.7, height, 0); g.add(arm);
  const head = box(0.5, 0.14, 0.26, MAT.darkMetal, 1.35, height - 0.07, 0); g.add(head);
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe0b0, emissive: color, emissiveIntensity: 2.5, roughness: 0.3 });
  const bulb = box(0.32, 0.05, 0.16, bulbMat, 1.35, height - 0.15, 0); g.add(bulb);
  if (light) {
    const l = new THREE.PointLight(color, intensity, 22, 1.8);
    l.position.set(1.35, height - 0.35, 0); g.add(l);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,190,110,1)', 'rgba(255,130,40,0)'), color: 0xffbb77, transparent: true, opacity: 0.6, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(1.35, height - 0.2, 0); glow.scale.set(4, 4, 1); g.add(glow);
  }
  return g;
}

export function createFencePanel(width = 6, height = 2.6) {
  const g = new THREE.Group();
  const mat = chainlinkMaterial();
  mat.map.repeat.set(Math.max(2, width / 1.6), 1.6);
  const panel = plane(width, height, mat, 0, height / 2, 0);
  panel.receiveShadow = true;
  g.add(panel);
  const postMat = MAT.darkMetal;
  for (const s of [-1, 1]) g.add(cyl(0.05, 0.06, height + 0.15, postMat, 6, s * width / 2, height / 2, 0));
  const topRail = cyl(0.035, 0.035, width, postMat, 6, 0, height, 0);
  topRail.rotation.z = Math.PI / 2; g.add(topRail);
  const bottomRail = cyl(0.03, 0.03, width, postMat, 6, 0, 0.12, 0);
  bottomRail.rotation.z = Math.PI / 2; g.add(bottomRail);
  return g;
}

/* ------------------------------------------------------------------ *
 *  Airplane & school
 * ------------------------------------------------------------------ */
export function createBrokenAirplane() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xb8bcb3, roughness: 0.68, metalness: 0.35 });
  const bodyDark = new THREE.MeshStandardMaterial({ color: 0x5a615b, roughness: 0.7, metalness: 0.3 });
  const stripe = new THREE.MeshStandardMaterial({ color: 0x8b2f2a, roughness: 0.75 });
  // main fuselage (broken in two)
  const f1 = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.3, 16, 14, 1, true), bodyMat);
  f1.rotation.z = Math.PI / 2; f1.position.set(2, 2.6, 0); f1.rotation.y = 0.02; g.add(f1);
  const f2 = new THREE.Mesh(new THREE.CylinderGeometry(1.7, 2.05, 8, 12, 1, true), bodyMat);
  f2.rotation.z = Math.PI / 2; f2.position.set(14.5, 1.5, 2.5); f2.rotation.y = 0.42; f2.rotation.z = Math.PI / 2 + 0.1; g.add(f2);
  // interior dark
  const inside = new THREE.Mesh(new THREE.CylinderGeometry(1.95, 2.1, 13, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0x191a17, side: THREE.BackSide, roughness: 1 }));
  inside.rotation.z = Math.PI / 2; inside.position.copy(f1.position); g.add(inside);
  // nose
  const nose = new THREE.Mesh(new THREE.SphereGeometry(2.12, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), bodyMat);
  nose.rotation.z = -Math.PI / 2; nose.position.set(-6, 2.6, 0); g.add(nose);
  // tail section
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.8, 6, 10, 1, true), bodyMat);
  tail.rotation.z = Math.PI / 2; tail.position.set(-12.5, 2.0, 0); tail.rotation.y = -0.08; g.add(tail);
  const fin = box(0.3, 6, 3.4, bodyMat, -15, 5.4, 0); fin.rotation.z = 0.15; fin.rotation.y = 0.06; g.add(fin);
  const finStripe = box(0.34, 1.0, 3.2, stripe, -15.05, 5.5, 0); finStripe.rotation.z = 0.15; g.add(finStripe);
  const stabilizer = box(0.25, 0.25, 9, bodyMat, -15, 3.5, 0); stabilizer.rotation.z = 0.1; g.add(stabilizer);
  // wings (snapped)
  const wing = box(5.5, 0.35, 15, bodyMat, 0, 2.4, 0); wing.rotation.x = 0.04; wing.rotation.y = 0.05; g.add(wing);
  const wingBreak = box(5, 0.3, 6, bodyMat, 3.2, 1.2, 9.5); wingBreak.rotation.set(0.2, 0.6, 0.08); g.add(wingBreak);
  // engines
  for (const z of [-5.2, 5.2]) {
    const engine = cyl(0.9, 1.05, 2.6, bodyDark, 10, 1.0, 1.9, z); engine.rotation.x = Math.PI / 2; g.add(engine);
    const nacelle = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.1, 6, 14), bodyDark); nacelle.position.set(1.0, 1.9, z + 1.3); g.add(nacelle);
    // broken prop blades
    for (let i = 0; i < 3; i++) {
      const blade = box(0.12, 1.5, 0.05, bodyDark, 1.0, 1.9 + Math.cos(i * 2.1) * 0.5, z + 1.4 + Math.sin(i * 2.1) * 0.5);
      blade.rotation.z = i * 2.1; g.add(blade);
    }
  }
  // windows
  for (let i = 0; i < 9; i++) {
    for (const s of [-1, 1]) {
      const w = box(0.5, 0.3, 0.04, MAT.darkGlass, -4 + i * 1.35, 2.9, s * 2.12); g.add(w);
    }
  }
  // stripe
  for (const s of [-1, 1]) {
    const st = box(14, 0.32, 0.05, stripe, 1, 1.9, s * 2.2); st.rotation.z = 0.02; g.add(st);
  }
  // debris
  const r = mulberry32(82);
  for (let i = 0; i < 28; i++) {
    const d = box(0.3 + r() * 2, 0.08 + r() * 0.3, 0.4 + r() * 2.5, r() > 0.3 ? bodyMat : bodyDark,
      -8 + r() * 26, 0.1 + r() * 0.4, -8 + r() * 18);
    d.rotation.set(r() * 3, r() * 6, r() * 3); g.add(d);
  }
  // smoke wisps
  const smokeMat = new THREE.SpriteMaterial({ map: glowTexture('rgba(50,48,44,.8)', 'rgba(40,40,36,0)'), color: 0x2e2f2a, transparent: true, opacity: 0.4, depthWrite: false });
  for (let i = 0; i < 3; i++) {
    const sm = new THREE.Sprite(smokeMat); sm.position.set(2 + i * 2, 4 + i * 2.4, 1); sm.scale.set(8 + i * 3, 10 + i * 4, 1); g.add(sm);
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

export function createSchool() {
  const g = new THREE.Group();
  const b = box(30, 10, 16, MAT.brick, 0, 5, 0); g.add(b);
  // windows rows
  const litMat = new THREE.MeshStandardMaterial({ color: 0x2a332f, roughness: 0.3, metalness: 0.2, emissive: 0x0e1a16, emissiveIntensity: 0.4 });
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 8; i++) {
      g.add(box(1.5, 1.7, 0.08, litMat, -12 + i * 3.4, 3 + row * 3.2, 8.04));
      // broken panes
      if ((i + row) % 3 === 0) g.add(box(1.1, 0.8, 0.1, MAT.darkGlass, -12 + i * 3.4, 3 + row * 3.2, 8.08));
    }
  }
  // entrance
  g.add(box(5, 3.4, 0.3, MAT.concreteDark, 0, 1.7, 8.2));
  g.add(box(3.2, 2.6, 0.1, MAT.darkGlass, 0, 1.3, 8.4));
  // roof ledge
  g.add(box(30.6, 0.4, 0.6, MAT.concrete, 0, 10, 8.1));
  g.add(box(30.6, 0.4, 0.6, MAT.concrete, 0, 10, -8.1));
  // sign
  const signTex = canvasTex(1024, 200, (ctx, w, h) => {
    ctx.fillStyle = '#3f3325'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#d9cfb2'; ctx.font = '400 128px "Bebas Neue", Impact, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('EVERETT HIGH', w / 2, h / 2);
  }, { clamp: true });
  const sign = plane(11, 2, new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.8 }), 0, 8.2, 8.16); g.add(sign);
  // fence
  const fence = new THREE.Group();
  for (let i = 0; i < 8; i++) fence.add(createFencePanel(5, 2));
  fence.children.forEach((p, i) => { p.position.x = -20 + i * 5; p.position.z = 16; });
  g.add(fence);
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

export function createSchoolBus() {
  const g = new THREE.Group();
  const paint = new THREE.MeshStandardMaterial({ color: 0xb28a2f, roughness: 0.8, metalness: 0.1 });
  g.add(box(2.4, 2.2, 7, paint, 0, 1.8, 0));
  g.add(box(2.3, 0.5, 6.6, MAT.darkMetal, 0, 0.6, 0));
  g.add(box(2.3, 0.4, 6.9, paint, 0, 3.0, 0));
  for (let i = 0; i < 5; i++) {
    for (const s of [-1, 1]) g.add(box(0.03, 0.75, 0.8, MAT.darkGlass, s * 1.21, 2.35, -2.6 + i * 1.25));
  }
  g.add(box(2.1, 0.9, 0.06, MAT.darkGlass, 0, 2.3, 3.52));
  for (const [x, z] of [[-1.05, 2.2], [1.05, 2.2], [-1.05, -2.2], [1.05, -2.2]]) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.47, 0.47, 0.3, 10), MAT.rubber);
    w.rotation.z = Math.PI / 2; w.position.set(x, 0.48, z); g.add(w);
  }
  g.rotation.z = 0.12; g.rotation.y = -0.4;
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}

/* ------------------------------------------------------------------ *
 *  City buildings / storefronts
 * ------------------------------------------------------------------ */
export function createBuilding({ w = 12, h = 18, d = 12, seed = 1, type = 'office' } = {}) {
  const g = new THREE.Group();
  const r = mulberry32(seed);
  const mat = r() > 0.5 ? MAT.brick : MAT.concreteDark;
  const b = box(w, h, d, mat, 0, h / 2, 0); g.add(b);
  // window grid
  const winMat = new THREE.MeshStandardMaterial({ map: windowTexture({ lit: false, seed: 62 + seed, grime: 0.8 }), roughness: 0.35, metalness: 0.3 });
  const litMat = new THREE.MeshStandardMaterial({ map: windowTexture({ lit: true, seed: 80 + seed }), emissive: 0x6d3d17, emissiveIntensity: 0.55, roughness: 0.4 });
  const cols = Math.max(2, Math.floor(w / 2.4));
  const rows = Math.max(2, Math.floor(h / 3));
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (r() > 0.78) continue;
      const lit = r() > 0.88;
      const win = box(1.0, 1.4, 0.06, lit ? litMat : winMat,
        -w / 2 + 1.2 + x * (w - 2.4) / Math.max(1, cols - 1), 2 + y * (h - 3) / Math.max(1, rows - 1), d / 2 + 0.02);
      g.add(win);
      if (r() > 0.7) g.add(box(1.12, 1.52, 0.03, MAT.darkMetal, win.position.x, win.position.y, d / 2 - 0.01));
    }
  }
  // roof edge
  g.add(box(w + 0.3, 0.2, d + 0.3, MAT.concreteDark, 0, h, 0));
  // AC units
  if (r() > 0.4) g.add(box(1.6, 0.8, 1.4, MAT.metal, -w / 4, h + 0.4, 0));
  // damage
  if (r() > 0.45) {
    const rubble = createTrashPile(seed + 4); rubble.position.set(0, 0, d / 2 + 0.8); rubble.scale.set(1.6, 1.2, 1.4); g.add(rubble);
  }
  tagShadows(g, true, true);
  return g;
}

export function createStorefront({ seed = 5, name = 'MART' } = {}) {
  const g = new THREE.Group();
  const h = 7;
  const b = box(12, h, 8, MAT.concreteDark, 0, h / 2, 0); g.add(b);
  // storefront glass
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x33443e, transparent: true, opacity: 0.45, roughness: 0.15, metalness: 0.2, side: THREE.DoubleSide });
  g.add(box(7, 2.4, 0.08, glassMat, 0, 1.7, 4.02));
  g.add(box(0.2, 3.2, 0.2, MAT.darkMetal, -3.6, 1.7, 4.02));
  g.add(box(0.2, 3.2, 0.2, MAT.darkMetal, 3.6, 1.7, 4.02));
  g.add(box(0.2, 0.2, 7.2, MAT.darkMetal, 0, 3.0, 4.02));
  // broken glass hole
  g.add(box(2.2, 2.2, 0.1, MAT.black, 1.2, 1.6, 4.06));
  // sign
  const tex = smallSignTexture(name, 'GROCERY · 24H', { bg: '#b8a066', fg: '#2f2b20', seed });
  g.add(plane(6, 1.2, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75 }), 0, 4.8, 4.03));
  // awning
  const awning = box(7.4, 0.12, 1.5, new THREE.MeshStandardMaterial({ color: 0x42332a, roughness: 0.9 }), 0, 3.4, 4.7); awning.rotation.x = 0.12; g.add(awning);
  // interior floor + shelves visible
  const interior = new THREE.Group(); interior.position.z = -2; g.add(interior);
  interior.add(box(9, 0.05, 6, MAT.concrete, 0, 0.06, 0));
  for (let i = 0; i < 3; i++) {
    const shelf = box(2.2, 1.8, 0.5, MAT.metal, -2.8 + i * 2.7, 0.95, -0.5);
    interior.add(shelf);
    for (let j = 0; j < 3; j++) {
      interior.add(box(2.0, 0.05, 0.42, MAT.darkMetal, -2.8 + i * 2.7, 0.5 + j * 0.55, -0.5));
      for (let k = 0; k < 4; k++) {
        if (rngChance(seed + i * 9 + j * 3 + k)) interior.add(cyl(0.06, 0.06, 0.13, MAT.rust, 7, -3.5 + i * 2.7 + k * 0.38, 0.58 + j * 0.55, -0.35).rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2));
      }
    }
  }
  // rubble
  const rubble = createTrashPile(seed + 2); rubble.position.set(-3.8, 0, 4.8); g.add(rubble);
  tagShadows(g);
  return g;
}

function rngChance(seed) { return mulberry32(seed)() > 0.45; }

/* ------------------------------------------------------------------ *
 *  Particles
 * ------------------------------------------------------------------ */
export function createAsh({ count = 900, area = 70, height = 22, color = 0x9d9a8b, size = 0.06, seed = 9 } = {}) {
  const r = mulberry32(seed);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const speed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (r() - 0.5) * area;
    pos[i * 3 + 1] = r() * height;
    pos[i * 3 + 2] = (r() - 0.5) * area;
    speed[i] = 0.15 + r() * 0.55;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.55, depthWrite: false, sizeAttenuation: true });
  const points = new THREE.Points(geo, mat);
  const baseX = new Float32Array(pos);
  return {
    points,
    update(dt, time) {
      const p = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        p[i * 3] += Math.sin(time * 0.3 + i) * dt * 0.18;
        p[i * 3 + 1] -= speed[i] * dt;
        p[i * 3 + 2] += Math.cos(time * 0.22 + i * 1.7) * dt * 0.14;
        if (p[i * 3 + 1] < 0) { p[i * 3 + 1] = height; p[i * 3] = (r() - 0.5) * area; p[i * 3 + 2] = (r() - 0.5) * area; }
      }
      geo.attributes.position.needsUpdate = true;
    }
  };
}

export function createRain({ count = 700, area = 12, height = 8 } = {}) {
  const r = mulberry32(12);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 6);
  const data = [];
  for (let i = 0; i < count; i++) {
    const x = (r() - 0.5) * area, y = r() * height, z = (r() - 0.5) * area;
    const len = 0.12 + r() * 0.18;
    pos[i * 6] = x; pos[i * 6 + 1] = y; pos[i * 6 + 2] = z;
    pos[i * 6 + 3] = x + 0.015; pos[i * 6 + 4] = y - len; pos[i * 6 + 5] = z;
    data.push(x, y, z, len);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.LineBasicMaterial({ color: 0x9fb0ad, transparent: true, opacity: 0.32 });
  const lines = new THREE.LineSegments(geo, mat);
  return {
    lines,
    update(dt) {
      const p = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        p[i * 6 + 1] -= 9 * dt; p[i * 6 + 4] -= 9 * dt;
        p[i * 6] += 0.9 * dt; p[i * 6 + 3] += 0.9 * dt;
        if (p[i * 6 + 4] < 0) {
          const y = height + r() * 1.5;
          p[i * 6 + 1] = y; p[i * 6 + 4] = y - data[i * 4 + 3];
          p[i * 6] = (r() - 0.5) * area; p[i * 6 + 3] = p[i * 6] + 0.015;
        }
      }
      geo.attributes.position.needsUpdate = true;
    }
  };
}

export function createFlies({ count = 60, area = 8, center = [0, 1.4, 0] } = {}) {
  const r = mulberry32(3);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const seeds = [];
  for (let i = 0; i < count; i++) {
    pos[i * 3] = center[0] + (r() - 0.5) * area;
    pos[i * 3 + 1] = center[1] + (r() - 0.5) * 2;
    pos[i * 3 + 2] = center[2] + (r() - 0.5) * area;
    seeds.push(r() * 6.28, r() * 6.28, 0.2 + r() * 0.7);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({ color: 0xb8b18d, size: 0.035, transparent: true, opacity: 0.6, depthWrite: false });
  const pts = new THREE.Points(geo, mat);
  return {
    points: pts,
    update(dt, time) {
      const p = geo.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const s = seeds[i * 3 + 2];
        p[i * 3] += Math.sin(time * s + seeds[i * 3]) * dt * 0.25;
        p[i * 3 + 1] += Math.cos(time * s * 1.3 + seeds[i * 3 + 1]) * dt * 0.18;
        p[i * 3 + 2] += Math.cos(time * s + seeds[i * 3 + 1]) * dt * 0.25;
      }
      geo.attributes.position.needsUpdate = true;
    }
  };
}

/* ------------------------------------------------------------------ *
 *  decals & misc
 * ------------------------------------------------------------------ */
export function bloodDecal(w = 2.2, h = 1.6) {
  const mat = new THREE.MeshStandardMaterial({ map: bloodTexture(), transparent: true, depthWrite: false, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -2 });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.rotation.x = -Math.PI / 2;
  m.rotation.z = Math.random() * 6.28;
  return m;
}

export function textPlane(texture, w, h, opts = {}) {
  const mat = new THREE.MeshStandardMaterial({ map: texture, transparent: opts.transparent ?? false, roughness: 0.8, side: THREE.DoubleSide, emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 0 });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
}

/* ------------------------------------------------------------------ *
 *  Human enemies — shotgun bandit / knife runner
 * ------------------------------------------------------------------ */
export function createBandit({ variant = 'shotgun' } = {}) {
  const g = new THREE.Group();
  const parts = {};
  g.userData.parts = parts;
  const skin = new THREE.MeshStandardMaterial({ color: variant === 'shotgun' ? 0x9c6c4e : 0xb78461, roughness: 0.9 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: variant === 'shotgun' ? 0x6b3a2e : 0x252a27, roughness: 0.95 });
  const pantsMat = new THREE.MeshStandardMaterial({ color: variant === 'shotgun' ? 0x3b3a2f : 0x31343a, roughness: 0.95 });
  const bootMat = new THREE.MeshStandardMaterial({ color: 0x1c1813, roughness: 0.95 });
  const hatMat = new THREE.MeshStandardMaterial({ color: variant === 'shotgun' ? 0x3e4a33 : 0x1f211f, roughness: 0.95 });

  const hips = box(0.34, 0.18, 0.22, pantsMat, 0, 0.94, 0); g.add(hips);
  const torso = new THREE.Group(); torso.position.y = 1.02; g.add(torso); parts.torso = torso;
  const chest = new THREE.Mesh(new THREE.CapsuleGeometry(variant === 'shotgun' ? 0.25 : 0.2, 0.3, 4, 7), shirtMat);
  chest.scale.set(1.1, 1, 0.78); chest.position.y = 0.26; torso.add(chest);
  if (variant === 'shotgun') {
    // plaid-ish straps / belly
    torso.add(box(0.04, 0.42, 0.02, new THREE.MeshStandardMaterial({ color: 0x9a543f, roughness: 1 }), 0.1, 0.27, 0.16));
    torso.add(box(0.04, 0.42, 0.02, new THREE.MeshStandardMaterial({ color: 0x9a543f, roughness: 1 }), -0.1, 0.27, 0.16));
  }
  const head = new THREE.Group(); head.position.y = 1.67; g.add(head); parts.head = head;
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), skin);
  skull.scale.set(0.92, 1.06, 0.94); skull.position.y = 0.03; head.add(skull);
  const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), skin);
  jaw.scale.set(0.9, 0.7, 0.9); jaw.position.set(0, -0.06, 0.03); head.add(jaw);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 5), MAT.socket);
    eye.position.set(s * 0.052, 0.045, 0.134); head.add(eye);
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.03, 5, 4), skin);
    ear.position.set(s * 0.145, 0.02, 0); head.add(ear);
  }
  if (variant === 'shotgun') {
    const hat = new THREE.Mesh(new THREE.SphereGeometry(0.16, 9, 7, 0, 6.28, 0, 1.7), hatMat);
    hat.scale.set(0.98, 0.9, 1.02); hat.position.y = 0.085; head.add(hat);
    const brim = box(0.3, 0.025, 0.08, hatMat, 0, 0.12, 0.12); head.add(brim);
    const beard = new THREE.Mesh(new THREE.SphereGeometry(0.105, 7, 6), new THREE.MeshStandardMaterial({ color: 0x34281d, roughness: 1 }));
    beard.scale.set(0.95, 0.8, 0.8); beard.position.set(0, -0.07, 0.06); head.add(beard);
  } else {
    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.165, 8, 7, 0, 6.28, 0, 2.0), shirtMat);
    hood.position.y = 0.03; hood.scale.set(1, 1.05, 1.02); head.add(hood);
    const mask = box(0.2, 0.07, 0.04, new THREE.MeshStandardMaterial({ color: 0x111311, roughness: 1 }), 0, -0.08, 0.13); head.add(mask);
  }
  // arms
  const makeArm = (side) => {
    const sh = new THREE.Group(); sh.position.set(side * 0.27, 1.44, 0); g.add(sh);
    const up = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.22, 3, 6), shirtMat);
    up.position.y = -0.15; sh.add(up);
    const el = new THREE.Group(); el.position.y = -0.31; sh.add(el);
    const lo = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.2, 3, 6), variant === 'shotgun' || side > 0 ? skin : shirtMat);
    lo.position.y = -0.13; el.add(lo);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 5), skin);
    hand.position.y = -0.3; el.add(hand);
    return { sh, el, hand };
  };
  parts.armL = makeArm(-1); parts.armR = makeArm(1);
  // legs
  const makeLeg = (side) => {
    const hip = new THREE.Group(); hip.position.set(side * 0.11, 0.92, 0); g.add(hip);
    const th = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.26, 3, 6), pantsMat);
    th.position.y = -0.2; hip.add(th);
    const kn = new THREE.Group(); kn.position.y = -0.4; hip.add(kn);
    const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.27, 3, 6), pantsMat);
    shin.position.y = -0.19; kn.add(shin);
    const boot = box(0.15, 0.14, 0.27, bootMat, 0, -0.4, 0.05); kn.add(boot);
    return { hip, kn };
  };
  parts.legL = makeLeg(-1); parts.legR = makeLeg(1);

  if (variant === 'shotgun') {
    const sg = new THREE.Group();
    const barrel = cyl(0.022, 0.025, 0.8, MAT.darkMetal, 8, 0, 0, 0.28); barrel.rotation.x = Math.PI / 2; sg.add(barrel);
    const tube = cyl(0.018, 0.018, 0.55, MAT.darkMetal, 7, 0, -0.04, 0.2); tube.rotation.x = Math.PI / 2; sg.add(tube);
    const stock = box(0.055, 0.09, 0.34, MAT.wood, 0, -0.01, -0.28); sg.add(stock);
    const grip = box(0.05, 0.1, 0.1, MAT.wood, 0, -0.07, -0.08); sg.add(grip);
    sg.position.set(0, -0.29, 0.1); sg.rotation.x = 1.2;
    parts.armR.el.add(sg);
    parts.shotgun = sg;
  } else {
    const knife = new THREE.Group();
    const blade = box(0.015, 0.035, 0.28, new THREE.MeshStandardMaterial({ color: 0xb9c0b5, metalness: 0.8, roughness: 0.25 }), 0, 0.02, 0.14); knife.add(blade);
    const hilt = box(0.03, 0.05, 0.1, MAT.black, 0, 0, -0.03); knife.add(hilt);
    knife.position.set(0, -0.3, 0.03); knife.rotation.x = 1.4;
    parts.armR.el.add(knife);
    parts.knife = knife;
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  const sh = blobShadow(0.6, 0.85); g.add(sh);
  return g;
}
