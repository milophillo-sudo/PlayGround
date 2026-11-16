import * as THREE from 'three';
import { MAT, box, cyl, plane, createTrashPile, createAsh, createSkeleton, createFernPatch, blobShadow } from './models.js';
import { canvasTex, mulberry32, smallSignTexture, labelTexture, glowTexture, woodTexture, metalTexture } from './textures.js';

/* ================================================================== *
 *  textures local to the store
 * ================================================================== */
function bloodWallTexture() {
  return canvasTex(1024, 384, (ctx, w, h) => {
    const r = mulberry32(1926);
    ctx.clearRect(0, 0, w, h);
    // smeared blood background
    for (let i = 0; i < 42; i++) {
      const g = ctx.createRadialGradient(r() * w, r() * h, 1, r() * w, r() * h, 20 + r() * 90);
      g.addColorStop(0, `rgba(${70 + r() * 30},${8 + r() * 10},${5 + r() * 8},${0.12 + r() * 0.28})`);
      g.addColorStop(1, 'rgba(60,8,6,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }
    // hand drag smear
    ctx.strokeStyle = 'rgba(74,10,7,.4)';
    ctx.lineWidth = 30; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(80, 300); ctx.quadraticCurveTo(180, 250, 230, 180); ctx.stroke();
    // the message
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-0.03);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '400 118px "Bebas Neue", Impact, sans-serif';
    ctx.fillStyle = 'rgba(96,12,8,.9)';
    ctx.fillText('BUILD IN 12/12/1926', 0, -8);
    ctx.restore();
    // drips
    for (let i = 0; i < 28; i++) {
      const x = 160 + r() * 700;
      const y = 170 + r() * 80;
      ctx.strokeStyle = `rgba(${70 + r() * 40},${8 + r() * 10},${4 + r() * 8},${0.3 + r() * 0.45})`;
      ctx.lineWidth = 2 + r() * 6;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 6, y + 30 + r() * 120); ctx.stroke();
      if (r() > 0.6) { ctx.beginPath(); ctx.arc(x, y + 30 + r() * 120, 2 + r() * 4, 0, 7); ctx.fill(); }
    }
    // fingerprints
    ctx.fillStyle = 'rgba(80,10,7,.35)';
    for (let i = 0; i < 6; i++) {
      ctx.beginPath(); ctx.ellipse(120 + i * 16, 320 + (i % 3) * 8, 4, 7, 0.3, 0, 7); ctx.fill();
    }
  }, { clamp: true });
}

function paperNoteTexture() {
  return canvasTex(512, 640, (ctx, w, h) => {
    const r = mulberry32(261212);
    ctx.fillStyle = '#d9d0b6'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(120,105,75,${0.03 + r() * 0.07})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 3 + r() * 30, 2 + r() * 16, r() * 3, 0, 7); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(60,48,34,.7)';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(40, 48); ctx.lineTo(w - 40, 42); ctx.lineTo(w - 46, h - 40); ctx.lineTo(44, h - 34); ctx.closePath(); ctx.stroke();
    ctx.fillStyle = 'rgba(40,34,26,.92)';
    ctx.textAlign = 'left';
    ctx.font = '400 34px "Special Elite", monospace';
    ctx.fillText('FUEL ROOM', 66, 120);
    ctx.font = '400 26px "Special Elite", monospace';
    ctx.fillText('code = last two digits of', 66, 178);
    ctx.fillText('YEAR / DAY / MONTH', 66, 214);
    ctx.fillText('of the build date.', 66, 250);
    ctx.fillStyle = 'rgba(120,32,24,.9)';
    ctx.font = '400 30px "Special Elite", monospace';
    ctx.fillText('— ask the wall.', 66, 310);
    ctx.strokeStyle = 'rgba(60,48,34,.3)'; ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(66, 380 + i * 30); ctx.lineTo(w - 80, 380 + i * 30); ctx.stroke(); }
    // keypad doodle
    ctx.strokeStyle = 'rgba(40,34,26,.55)'; ctx.lineWidth = 3;
    for (let ky = 0; ky < 3; ky++) for (let kx = 0; kx < 3; kx++) ctx.strokeRect(350 + kx * 42, 420 + ky * 42, 28, 28);
    ctx.fillStyle = 'rgba(70,20,15,.8)';
    ctx.font = '400 24px "Special Elite", monospace';
    ctx.fillText('don\'t guess.', 66, 600);
  }, { clamp: true });
}

function canLabel(name, color) {
  return canvasTex(256, 128, (ctx, w, h) => {
    ctx.fillStyle = color; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(235,226,205,.9)';
    ctx.fillRect(0, 18, w, 12);
    ctx.fillRect(0, h - 30, w, 12);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '400 48px "Bebas Neue", Impact, sans-serif';
    ctx.fillStyle = 'rgba(238,228,204,.94)';
    ctx.fillText(name, w / 2, h / 2 - 2);
    ctx.font = '400 18px "Special Elite", monospace';
    ctx.fillStyle = 'rgba(238,228,204,.7)';
    ctx.fillText('HOMEWOOD', w / 2, h - 14);
    // rust
    const r = mulberry32(name.length * 31);
    for (let i = 0; i < 22; i++) {
      ctx.fillStyle = `rgba(${70 + r() * 30},${40 + r() * 20},${20 + r() * 15},${0.2 + r() * 0.4})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 2 + r() * 9, 1 + r() * 6, 0, 0, 7); ctx.fill();
    }
  }, { clamp: true, repeat: [3, 1] });
}

/* ================================================================== *
 *  Playable store interior
 * ================================================================== */
export function buildStoreInterior(scene, { evening = true } = {}) {
  const root = new THREE.Group();
  root.name = 'StoreInterior';
  scene.add(root);

  const colliders = [];
  const wallMeshes = [];
  const addCollider = (minX, maxX, minZ, maxZ, name = '') => colliders.push({ minX, maxX, minZ, maxZ, name });
  const addWall = (mesh) => { wallMeshes.push(mesh); return mesh; };

  /* ---------------- shell ---------------- */
  const floorMat = new THREE.MeshStandardMaterial({ map: (() => { const t = MAT.concrete.map.clone(); t.repeat.set(8, 6); t.needsUpdate = true; return t; })(), roughness: 0.97, color: 0x8d8878 });
  const floor = box(34, 0.12, 26.4, floorMat, 0, -0.04, 0);
  floor.receiveShadow = true; root.add(floor);
  // checkerboard accent near entrance
  const checker = new THREE.Group();
  for (let ix = 0; ix < 6; ix++) for (let iz = 0; iz < 2; iz++) {
    const tileMat = new THREE.MeshStandardMaterial({ color: (ix + iz) % 2 ? 0x49453c : 0x7a7362, roughness: 0.9 });
    const tile = box(1.6, 0.02, 1.6, tileMat, -4.8 + ix * 1.6, 0.035, 10.0 + iz * 1.6);
    checker.add(tile);
  }
  root.add(checker);

  const wallMat = new THREE.MeshStandardMaterial({ map: (() => { const t = MAT.yellow.map.clone(); t.repeat.set(4, 2); t.needsUpdate = true; return t; })(), roughness: 0.96 });
  const wallDark = MAT.concreteDark;

  // ceiling
  const ceiling = box(34.4, 0.25, 26.8, new THREE.MeshStandardMaterial({ color: 0x24251f, roughness: 1 }), 0, 5.1, 0);
  root.add(ceiling);
  // ceiling beams
  for (let i = -2; i <= 2; i++) {
    root.add(box(34, 0.18, 0.22, MAT.darkMetal, 0, 4.94, i * 4.6));
  }

  // north wall (back) with fuel room door gap x 6.2..10.8
  root.add(addWall(box(23.2, 5.1, 0.3, wallMat, -5.4, 2.55, -13.05)));
  root.add(addWall(box(6.2, 5.1, 0.3, wallMat, 13.9, 2.55, -13.05)));
  root.add(addWall(box(4.6, 1.7, 0.3, wallMat, 8.5, 4.25, -13.05))); // lintel
  addCollider(-17.2, 6.2, -13.4, -12.8, 'north wall');
  addCollider(10.8, 17.2, -13.4, -12.8, 'north wall 2');
  // south wall with entrance gap
  root.add(addWall(box(14.5, 5.1, 0.3, wallMat, -9.75, 2.55, 13.05)));
  root.add(addWall(box(14.5, 5.1, 0.3, wallMat, 9.75, 2.55, 13.05)));
  root.add(addWall(box(5, 2.2, 0.3, wallMat, 0, 4.0, 13.05)));
  addCollider(-17.2, -2.5, 12.8, 13.4, 'south wall');
  addCollider(2.5, 17.2, 12.8, 13.4, 'south wall 2');
  // west / east
  root.add(addWall(box(0.3, 5.1, 26.4, wallMat, -17.05, 2.55, 0)));
  root.add(addWall(box(0.3, 5.1, 13.2, wallMat, 17.05, 2.55, 6.6)));
  root.add(addWall(box(0.3, 5.1, 6.4, wallMat, 17.05, 2.55, -16.1)));
  addCollider(-17.4, -16.8, -13.4, 13.4, 'west wall');
  addCollider(16.8, 17.4, -19.6, 13.4, 'east wall');

  // baseboards
  for (const [w, d, x, z] of [[33.6, 0.14, 0, -12.86], [33.6, 0.14, 0, 12.86], [0.14, 26.2, -16.86, 0], [0.14, 13.0, 16.86, 6.6]]) {
    root.add(box(w, 0.22, d, new THREE.MeshStandardMaterial({ color: 0x2c2b24, roughness: 1 }), x, 0.11, z));
  }

  // front windows / glass remains
  for (const s of [-1, 1]) {
    root.add(box(11, 3.2, 0.12, new THREE.MeshPhysicalMaterial({ color: 0x5d7770, transparent: true, opacity: 0.18, roughness: 0.1, metalness: 0.2, side: THREE.DoubleSide }), s * 10.6, 2.7, 12.88));
    for (let i = 0; i < 3; i++) root.add(box(0.09, 3.3, 0.16, MAT.darkMetal, s * (6.4 + i * 4.2), 2.7, 12.9));
    root.add(box(11, 0.12, 0.18, MAT.darkMetal, s * 10.6, 4.3, 12.9));
  }
  // broken glass shards on floor near doors
  for (let i = 0; i < 22; i++) {
    const shard = new THREE.Mesh(new THREE.PlaneGeometry(0.06 + Math.random() * 0.22, 0.06 + Math.random() * 0.16),
      new THREE.MeshPhysicalMaterial({ color: 0xa8c2ba, transparent: true, opacity: 0.4, roughness: 0.06, side: THREE.DoubleSide }));
    shard.rotation.x = -Math.PI / 2 + (Math.random() - 0.5) * 0.3;
    shard.rotation.z = Math.random() * 6;
    shard.position.set((Math.random() - 0.5) * 8, 0.045, 10.5 + Math.random() * 2.2);
    root.add(shard);
  }

  /* ---------------- fuel room ---------------- */
  const fuel = new THREE.Group(); root.add(fuel);
  const fuelFloor = box(9, 0.1, 6.4, new THREE.MeshStandardMaterial({ color: 0x4a4a40, roughness: 1 }), 9, -0.02, -16.3);
  fuel.add(fuelFloor);
  fuel.add(box(9.3, 0.25, 6.6, MAT.concreteDark, 9, 5.05, -16.3));
  fuel.add(addWall(box(0.28, 5.1, 6.6, wallMat, 4.5, 2.55, -16.3)));
  fuel.add(addWall(box(0.28, 5.1, 6.6, wallMat, 13.5, 2.55, -16.3)));
  fuel.add(addWall(box(9.3, 5.1, 0.3, wallMat, 9, 2.55, -19.6)));
  addCollider(4.2, 4.8, -19.8, -13.0, 'fuel west');
  addCollider(13.2, 13.8, -19.8, -13.0, 'fuel east');
  addCollider(4.4, 10.2, -19.9, -19.3, 'fuel north');
  addCollider(12.2, 13.8, -19.9, -19.3, 'fuel north 2');
  // iron roll-up door in north wall, x 10.2..12.2
  const ironFrame = new THREE.Group();
  ironFrame.position.set(11.2, 0, -19.35);
  root.add(ironFrame);
  const ironMat = new THREE.MeshStandardMaterial({ map: metalTexture({ seed: 88, base: [78, 74, 64] }), roughness: 0.62, metalness: 0.55 });
  const ironDoor = new THREE.Group();
  ironDoor.position.set(0, 0, 0);
  ironFrame.add(ironDoor);
  for (let i = 0; i < 12; i++) {
    const slat = box(2.0, 0.16, 0.08, ironMat, 0, 0.1 + i * 0.17, 0);
    ironDoor.add(slat);
  }
  ironDoor.add(box(2.1, 0.2, 0.14, MAT.rust, 0, 0.02, 0.02));
  for (const s of [-1, 1]) ironFrame.add(box(0.18, 2.4, 0.24, MAT.darkMetal, s * 1.12, 1.2, 0));
  ironFrame.add(box(2.5, 0.2, 0.3, MAT.darkMetal, 0, 2.35, 0));
  // darkness behind iron door
  const tunnelDark = box(2.1, 2.1, 2.6, new THREE.MeshStandardMaterial({ color: 0x050605, roughness: 1 }), 11.2, 1.05, -21.2);
  root.add(tunnelDark);
  const ironCollider = { minX: 10.0, maxX: 12.4, minZ: -19.6, maxZ: -19.1, name: 'iron door' };
  colliders.push(ironCollider);
  // iron door light hazard stripes
  const stripeTex = canvasTex(256, 64, (ctx, w, h) => {
    ctx.fillStyle = '#23241f'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(190,154,60,.8)';
    for (let i = -1; i < 8; i++) { ctx.beginPath(); ctx.moveTo(i * 46, h); ctx.lineTo(i * 46 + 24, h); ctx.lineTo(i * 46 + 54, 0); ctx.lineTo(i * 46 + 30, 0); ctx.fill(); }
  }, { repeat: [2, 1] });
  const hazard = plane(2.2, 0.2, new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.9 }), 11.2, 2.42, -19.22);
  root.add(hazard);

  // fuel room keypad door (double steel doors)
  const keyDoor = new THREE.Group();
  keyDoor.position.set(8.5, 0, -13.0);
  root.add(keyDoor);
  const keyDoorMat = new THREE.MeshStandardMaterial({ map: metalTexture({ seed: 91, base: [66, 70, 66] }), roughness: 0.6, metalness: 0.55 });
  const keyFrame = box(5.0, 3.4, 0.22, MAT.darkMetal, 0, 1.7, 0);
  keyDoor.add(keyFrame);
  const leafL = new THREE.Group(); leafL.position.set(-2.35, 0, 0); keyDoor.add(leafL);
  const leafR = new THREE.Group(); leafR.position.set(2.35, 0, 0); keyDoor.add(leafR);
  const leafLm = box(2.28, 3.2, 0.14, keyDoorMat, 1.14, 1.6, 0.03); leafL.add(leafLm);
  const leafRm = box(2.28, 3.2, 0.14, keyDoorMat, -1.14, 1.6, 0.03); leafR.add(leafRm);
  for (const [leaf, s] of [[leafL, -1], [leafR, 1]]) {
    leaf.add(box(0.16, 3.25, 0.2, MAT.darkMetal, s * 0.04, 1.62, 0.11));
    leaf.add(box(0.05, 0.7, 0.06, MAT.metal, -s * 1.95, 1.65, 0.14));
    leaf.add(plane(1.2, 0.5, new THREE.MeshStandardMaterial({ map: smallSignTexture('FUEL', 'AUTHORIZED ONLY', { w: 512, h: 256, bg: '#a8a184', fg: '#4b211a', size: 104, seed: 61 }), roughness: 0.9 }), 0, 2.5, 0.12));
  }
  addCollider(6.0, 11.0, -13.3, -12.7, 'fuel door');
  // keypad
  const keypad = new THREE.Group(); keypad.position.set(10.95, 1.55, -12.72); root.add(keypad);
  keypad.add(box(0.4, 0.6, 0.12, MAT.darkMetal, 0, 0, 0));
  const keypadFace = box(0.32, 0.42, 0.04, new THREE.MeshStandardMaterial({ color: 0x20221f, roughness: 0.6 }), 0, -0.02, 0.08);
  keypad.add(keypadFace);
  const keyLed = box(0.2, 0.06, 0.02, new THREE.MeshStandardMaterial({ color: 0x8a1a12, emissive: 0xff2a12, emissiveIntensity: 1.6 }), 0, 0.2, 0.09);
  keypad.add(keyLed);
  for (let ky = 0; ky < 3; ky++) for (let kx = 0; kx < 3; kx++) {
    keypad.add(box(0.055, 0.035, 0.02, new THREE.MeshStandardMaterial({ color: 0x4e5048, metalness: 0.4, roughness: 0.6 }), -0.09 + kx * 0.09, 0.07 - ky * 0.075, 0.085));
  }
  const keypadGlow = new THREE.PointLight(0xff3a20, 2.2, 4, 2);
  keypadGlow.position.set(11.0, 1.7, -12.3); root.add(keypadGlow);

  // bloody note wall
  const bloodTex = bloodWallTexture();
  const bloodSign = plane(7.4, 2.6, new THREE.MeshStandardMaterial({ map: bloodTex, transparent: true, roughness: 0.85, depthWrite: false }), -1.6, 2.6, -12.86);
  root.add(bloodSign);

  // fuel room contents
  const genset = new THREE.Group();
  genset.position.set(6.4, 0, -17.9);
  genset.add(box(1.6, 0.9, 1.0, new THREE.MeshStandardMaterial({ color: 0x4b4c3c, roughness: 0.75, metalness: 0.3 }), 0, 0.55, 0));
  genset.add(box(1.4, 0.24, 0.8, MAT.darkMetal, 0, 1.08, 0));
  genset.add(cyl(0.09, 0.09, 0.7, MAT.metal, 8, 0.6, 1.3, 0));
  for (const s of [-1, 1]) { const wheel = cyl(0.2, 0.2, 0.12, MAT.rubber, 10, s * 0.8, 0.2, 0.4); wheel.rotation.z = Math.PI / 2; genset.add(wheel); }
  genset.add(box(0.3, 0.12, 0.02, new THREE.MeshStandardMaterial({ color: 0xb5452a, emissive: 0x521508, emissiveIntensity: 0.5 }), 0.2, 0.8, 0.51));
  root.add(genset);
  addCollider(5.5, 7.3, -18.5, -17.3, 'generator');

  // shelf with jerry cans
  const fuelShelf = new THREE.Group();
  fuelShelf.position.set(5.4, 0, -15.2);
  root.add(fuelShelf);
  for (let lvl = 0; lvl < 2; lvl++) {
    fuelShelf.add(box(0.9, 0.06, 3.4, new THREE.MeshStandardMaterial({ color: 0x54503f, roughness: 0.9 }), 0, 0.35 + lvl * 0.8, 0));
  }
  for (const z of [-1.5, 1.5]) fuelShelf.add(box(0.06, 1.9, 0.06, MAT.darkMetal, 0, 0.95, z));
  for (let i = 0; i < 4; i++) {
    const can = box(0.4, 0.5, 0.24, new THREE.MeshStandardMaterial({ color: i % 2 ? 0x6e3422 : 0x3f4d3d, roughness: 0.8, metalness: 0.25 }), 0.1, 0.62 + (i % 2) * 0.8, -1.0 + i * 0.6);
    can.rotation.y = 0.1; fuelShelf.add(can);
  }
  addCollider(4.9, 5.9, -17.0, -13.5, 'fuel shelf');

  // work table with scissor jack
  const table = new THREE.Group();
  table.position.set(8.6, 0, -17.4);
  root.add(table);
  const tableTop = box(2.8, 0.12, 1.3, new THREE.MeshStandardMaterial({ color: 0x4b3f30, roughness: 0.85, metalness: 0.2 }), 0, 0.92, 0);
  table.add(tableTop);
  for (const [sx, sz] of [[-1.2, -0.5], [1.2, -0.5], [-1.2, 0.5], [1.2, 0.5]]) table.add(box(0.08, 0.9, 0.08, MAT.darkMetal, sx, 0.45, sz));
  table.add(box(2.9, 0.05, 1.4, MAT.metal, 0, 1.0, 0));
  // tools
  table.add(box(0.4, 0.06, 0.16, MAT.metal, -0.9, 1.02, 0.1));
  table.add(box(0.3, 0.1, 0.2, MAT.rust, 1.0, 1.06, 0.2));
  addCollider(7.1, 10.0, -18.1, -16.7, 'table');

  // scissor jack
  const jack = new THREE.Group();
  jack.position.set(8.55, 1.03, -17.4);
  jack.rotation.y = 0.15;
  const jackMat = new THREE.MeshStandardMaterial({ color: 0x7d3a24, roughness: 0.55, metalness: 0.6 });
  const jackBase = box(0.6, 0.06, 0.28, jackMat, 0, 0.03, 0);
  jack.add(jackBase);
  jack.add(box(0.6, 0.06, 0.28, jackMat, 0, 0.62, 0));
  const armGeo = new THREE.BoxGeometry(0.64, 0.055, 0.05);
  for (const s of [-1, 1]) {
    const a = new THREE.Mesh(armGeo, jackMat);
    a.position.set(0, 0.33, s * 0.11); a.rotation.z = 0.72;
    jack.add(a);
    const b = new THREE.Mesh(armGeo, jackMat);
    b.position.set(0, 0.33, s * 0.11); b.rotation.z = -0.72;
    jack.add(b);
  }
  const screw = cyl(0.022, 0.022, 0.72, MAT.metal, 6, 0, 0.33, 0);
  screw.rotation.z = Math.PI / 2; jack.add(screw);
  const handle = new THREE.Group();
  handle.position.set(0.42, 0.33, 0);
  const handleArm = box(0.34, 0.028, 0.028, MAT.darkMetal, 0.17, 0, 0);
  handle.add(handleArm);
  handle.add(cyl(0.018, 0.018, 0.16, MAT.darkMetal, 6, 0.36, 0, 0));
  jack.add(handle);
  jack.userData.handle = handle;
  root.add(jack);

  // actual fuel can (pickup) — bright red jerry can
  const fuelPickup = new THREE.Group();
  fuelPickup.position.set(9.7, 0.35, -18.9);
  const canBody = box(0.42, 0.62, 0.26, new THREE.MeshStandardMaterial({ color: 0x9e2f1f, roughness: 0.55, metalness: 0.3 }), 0, 0.31, 0);
  fuelPickup.add(canBody);
  fuelPickup.add(box(0.44, 0.06, 0.28, MAT.darkMetal, 0, 0.64, 0));
  const cap = cyl(0.05, 0.05, 0.07, MAT.darkMetal, 8, 0.12, 0.68, 0.06); fuelPickup.add(cap);
  const handleSlot = box(0.22, 0.04, 0.08, new THREE.MeshStandardMaterial({ color: 0x3a2a20, roughness: 0.9 }), 0, 0.53, 0.02); fuelPickup.add(handleSlot);
  const fuelGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,170,80,1)', 'rgba(255,110,30,0)'), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
  fuelGlow.position.set(0, 0.9, 0); fuelGlow.scale.set(1.7, 1.7, 1); fuelPickup.add(fuelGlow);
  root.add(fuelPickup);
  addCollider(9.4, 10.0, -19.1, -18.7, 'fuel can');

  // locker inside the fuel room, near the steel door
  const locker = new THREE.Group();
  locker.position.set(5.55, 0, -13.95);
  locker.rotation.y = 0.08;
  root.add(locker);
  const lockerMat = new THREE.MeshStandardMaterial({ map: metalTexture({ seed: 77, base: [76, 80, 72] }), roughness: 0.7, metalness: 0.35 });
  const lockerBody = box(0.95, 2.2, 0.55, lockerMat, 0, 1.1, 0);
  locker.add(lockerBody);
  locker.add(box(0.98, 0.06, 0.58, MAT.darkMetal, 0, 2.22, 0));
  for (let i = 0; i < 4; i++) locker.add(box(0.8, 0.02, 0.02, MAT.darkMetal, 0, 0.5 + i * 0.42, 0.29));
  const lockerDoor = box(0.42, 2.0, 0.05, new THREE.MeshStandardMaterial({ color: 0x59604f, roughness: 0.8, metalness: 0.3 }), -0.22, 1.1, 0.29);
  locker.add(lockerDoor);
  locker.add(box(0.04, 0.14, 0.04, MAT.metal, 0.02, 1.15, 0.33));
  addCollider(5.0, 6.1, -14.3, -13.6, 'locker');

  // note on the counter
  const note = plane(1.0, 1.25, new THREE.MeshStandardMaterial({ map: paperNoteTexture(), roughness: 0.9, side: THREE.DoubleSide }), -9.3, 1.12, 7.1);
  note.rotation.set(-0.32, 0.14, 0.02);
  root.add(note);

  // fuel door warning light
  const warningLight = new THREE.PointLight(0xff3a1c, 6, 10, 2);
  warningLight.position.set(8.5, 3.3, -11.8); root.add(warningLight);
  const warningGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,70,30,1)', 'rgba(255,20,10,0)'), transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }));
  warningGlow.position.set(8.5, 3.35, -12.2); warningGlow.scale.set(2.4, 2.4, 1); root.add(warningGlow);

  /* ---------------- showroom furniture ---------------- */
  const woodFurn = new THREE.MeshStandardMaterial({ map: woodTexture({ seed: 21, light: true }), roughness: 0.8 });
  const fabricA = new THREE.MeshStandardMaterial({ color: 0x5c4c3d, roughness: 1 });
  const fabricB = new THREE.MeshStandardMaterial({ color: 0x40514a, roughness: 1 });
  const fabricC = new THREE.MeshStandardMaterial({ color: 0x6b5a49, roughness: 1 });
  const mattressMat = new THREE.MeshStandardMaterial({ color: 0x8c8370, roughness: 1 });

  // helper builders
  const couch = (x, z, rot, mat, len = 3.1) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; root.add(g);
    g.add(box(len, 0.5, 1.25, mat, 0, 0.42, 0));
    g.add(box(len, 0.82, 0.32, mat, 0, 0.88, -0.48));
    g.add(box(0.32, 0.62, 1.25, mat, -len / 2 + 0.16, 0.7, 0));
    g.add(box(0.32, 0.62, 1.25, mat, len / 2 - 0.16, 0.7, 0));
    for (let i = 0; i < Math.floor(len / 0.9); i++) {
      const cushionMat = new THREE.MeshStandardMaterial({ color: mat.color.clone().multiplyScalar(0.9), roughness: 1 });
      g.add(box(0.78, 0.14, 1.0, cushionMat, -len / 2 + 0.55 + i * 0.9, 0.74, 0.04));
    }
    // feet
    for (const [sx, sz] of [[-len / 2 + 0.12, -0.5], [len / 2 - 0.12, -0.5], [-len / 2 + 0.12, 0.5], [len / 2 - 0.12, 0.5]]) {
      g.add(box(0.1, 0.18, 0.1, MAT.wood, sx, 0.09, sz));
    }
    // dust sheet over one arm
    if (Math.random() > 0.5) {
      const sheet = box(len * 0.4, 0.02, 1.3, new THREE.MeshStandardMaterial({ color: 0xb9b09b, roughness: 1, transparent: true, opacity: 0.8 }), len * 0.15, 0.96, 0);
      sheet.rotation.z = 0.03; g.add(sheet);
    }
    addCollider(x - (Math.abs(Math.cos(rot)) * len + Math.abs(Math.sin(rot)) * 1.25) / 2 - 0.1,
      x + (Math.abs(Math.cos(rot)) * len + Math.abs(Math.sin(rot)) * 1.25) / 2 + 0.1,
      z - (Math.abs(Math.sin(rot)) * len + Math.abs(Math.cos(rot)) * 1.25) / 2 - 0.1,
      z + (Math.abs(Math.sin(rot)) * len + Math.abs(Math.cos(rot)) * 1.25) / 2 + 0.1, 'couch');
    return g;
  };

  const tableUnit = (x, z, rot, mat) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rot; root.add(g);
    g.add(box(2.2, 0.12, 1.3, mat, 0, 0.82, 0));
    for (const [sx, sz] of [[-0.95, -0.5], [0.95, -0.5], [-0.95, 0.5], [0.95, 0.5]]) g.add(box(0.1, 0.8, 0.1, mat, sx, 0.4, sz));
    addCollider(x - 1.2, x + 1.2, z - 0.75, z + 0.75, 'table');
    return g;
  };

  couch(-5.8, 2.2, 0.1, fabricA, 3.3);
  couch(10.5, 4.6, -0.35, fabricB, 3.5);
  couch(-11.5, -5.4, Math.PI * 0.52, fabricC, 2.8);
  couch(4.2, -3.1, -0.12, fabricB, 2.6);
  tableUnit(-1.2, -5.6, 0.08, woodFurn);
  tableUnit(9.6, 8.0, -0.2, woodFurn);
  tableUnit(-12.6, 8.6, 0.4, woodFurn);

  // shelves along the west wall
  for (let i = 0; i < 3; i++) {
    const shelf = new THREE.Group(); shelf.position.set(-15.4, 0, -7 + i * 6); root.add(shelf);
    for (const s of [-1, 1]) shelf.add(box(0.1, 2.6, 0.1, MAT.darkMetal, 0, 1.3, s * 2.3));
    for (let lvl = 0; lvl < 4; lvl++) shelf.add(box(1.5, 0.06, 4.7, new THREE.MeshStandardMaterial({ color: 0x5c5a4c, roughness: 0.9 }), 0, 0.35 + lvl * 0.62, 0));
    // clutter / lamps
    for (let lvl = 0; lvl < 3; lvl++) {
      for (let j = 0; j < 4; j++) {
        if ((i + lvl + j) % 3 === 0) continue;
        const trinket = new THREE.Mesh(new THREE.SphereGeometry(0.09 + Math.random() * 0.1, 6, 5), new THREE.MeshStandardMaterial({ color: [0x7a5d3d, 0x4f5a52, 0x8a7654][((i + lvl + j) % 3)], roughness: 1 }));
        trinket.scale.y = 1.2 + Math.random();
        trinket.position.set(-0.2 + Math.random() * 0.5, 0.45 + lvl * 0.62, -2.0 + j * 1.2);
        shelf.add(trinket);
      }
    }
    addCollider(-16.2, -14.6, -9.4 + i * 6, -4.6 + i * 6, 'shelf');
  }

  // central display island
  const island = new THREE.Group(); island.position.set(0, 0, 1.5); root.add(island);
  island.add(box(5.6, 0.35, 2.2, new THREE.MeshStandardMaterial({ color: 0x3b3a31, roughness: 1 }), 0, 0.17, 0));
  island.add(box(5.6, 0.06, 2.2, MAT.wood, 0, 0.38, 0));
  island.add(cyl(0.35, 0.4, 0.1, MAT.concrete, 8, -1.6, 0.4, 0));
  const lampStand = cyl(0.035, 0.045, 1.4, MAT.darkMetal, 6, -1.6, 1.1, 0); island.add(lampStand);
  const lampShade = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.34, 10, 1, true), new THREE.MeshStandardMaterial({ color: 0xb59b74, roughness: 0.9, side: THREE.DoubleSide }));
  lampShade.position.set(-1.6, 1.82, 0); island.add(lampShade);
  const lampGlow = new THREE.PointLight(0xffbe7a, 5, 5, 2); lampGlow.position.set(-1.6, 1.7, 0); island.add(lampGlow);
  addCollider(-2.9, 2.9, 0.3, 2.7, 'island');

  // mattress + bed display
  const bed = new THREE.Group(); bed.position.set(12.8, 0, -7.2); root.add(bed);
  bed.add(box(2.0, 0.3, 3.0, woodFurn, 0, 0.2, 0));
  bed.add(box(1.9, 0.35, 2.9, mattressMat, 0, 0.52, 0));
  bed.add(box(1.8, 0.08, 2.8, new THREE.MeshStandardMaterial({ color: 0x6d6352, roughness: 1 }), 0, 0.72, 0));
  bed.add(box(1.7, 0.18, 0.55, new THREE.MeshStandardMaterial({ color: 0x8e8b76, roughness: 1 }), 0, 0.82, -1.15));
  // mattress stack
  for (let i = 0; i < 3; i++) {
    const m = box(2.0, 0.32, 3.0, new THREE.MeshStandardMaterial({ color: [0x8a806d, 0x6f6758, 0x9a8f79][i], roughness: 1 }), 12.6, 1.02 + i * 0.34, -7.2 + (i % 2) * 0.15);
    m.rotation.y = (i - 1) * 0.06; bed.add(m);
  }
  addCollider(11.6, 13.9, -8.8, -5.6, 'bed');

  // wardrobe wall
  for (let i = 0; i < 3; i++) {
    const wd = new THREE.Group(); wd.position.set(-10.5 + i * 2.1, 0, -9.8); wd.rotation.y = 0.02 * i; root.add(wd);
    wd.add(box(2.0, 3.2, 0.75, woodFurn, 0, 1.6, 0));
    wd.add(box(0.06, 3.0, 0.06, MAT.darkMetal, 0, 1.55, 0.4));
    wd.add(box(0.05, 0.2, 0.05, MAT.metal, 0.14, 1.55, 0.4));
    wd.add(box(0.05, 0.2, 0.05, MAT.metal, -0.14, 1.55, 0.4));
    addCollider(-11.6 + i * 2.1, -9.4 + i * 2.1, -10.2, -9.4, 'wardrobe');
  }

  // rug rolls
  for (let i = 0; i < 5; i++) {
    const roll = cyl(0.18, 0.18, 2.8, new THREE.MeshStandardMaterial({ color: [0x5c4335, 0x40514a, 0x7d3a28, 0x6b5a49, 0x3e4238][i], roughness: 1 }), 8, -14.3 + (i % 2) * 0.36, 0.2, 11.0 + i * 0.06);
    roll.rotation.z = Math.PI / 2; roll.rotation.y = 0.25; root.add(roll);
  }

  // checkout counter
  const counter = new THREE.Group(); counter.position.set(-9.6, 0, 6.6); root.add(counter);
  counter.add(box(4.6, 1.1, 1.1, new THREE.MeshStandardMaterial({ color: 0x4b3d2d, roughness: 0.9 }), 0, 0.55, 0));
  counter.add(box(4.8, 0.1, 1.25, MAT.wood, 0, 1.14, 0));
  counter.add(box(0.5, 0.34, 0.4, MAT.darkMetal, -1.5, 1.35, 0.1));
  counter.add(box(0.3, 0.16, 0.06, new THREE.MeshStandardMaterial({ color: 0x1b241d, roughness: 0.4, emissive: 0x2a3b2a, emissiveIntensity: 0.4 }), -1.5, 1.5, 0.31));
  counter.add(box(0.6, 0.3, 0.48, MAT.rust, 1.6, 1.34, 0.15));
  addCollider(-11.9, -7.3, 6.0, 7.2, 'counter');

  // mannequin / display figure
  const mann = new THREE.Group(); mann.position.set(2.5, 0, 5.6); mann.rotation.y = -0.4; root.add(mann);
  const mannMat = new THREE.MeshStandardMaterial({ color: 0x9c8e78, roughness: 0.95 });
  mann.add(cyl(0.05, 0.05, 0.9, MAT.darkMetal, 6, 0, 0.45, 0));
  mann.add(cyl(0.28, 0.3, 0.05, MAT.darkMetal, 12, 0, 0.03, 0));
  const torso = cyl(0.17, 0.22, 0.62, mannMat, 10, 0, 1.42, 0);
  mann.add(torso);
  mann.add(box(0.42, 0.16, 0.22, mannMat, 0, 1.76, 0));
  for (const s of [-1, 1]) {
    const arm = cyl(0.055, 0.07, 0.55, mannMat, 7, s * 0.26, 1.5, 0);
    arm.rotation.z = s * 0.12; mann.add(arm);
    const forearm = cyl(0.045, 0.055, 0.42, mannMat, 7, s * 0.3, 1.08, 0.03);
    forearm.rotation.x = 0.25; mann.add(forearm);
  }
  mann.add(cyl(0.05, 0.06, 0.1, mannMat, 6, 0, 1.86, 0));
  const mannHead = new THREE.Mesh(new THREE.SphereGeometry(0.115, 9, 8), mannMat);
  mannHead.scale.set(0.86, 1.1, 0.95);
  mannHead.position.set(0, 1.98, 0); mann.add(mannHead);
  addCollider(2.1, 2.9, 5.2, 6.0, 'mannequin');

  // scattered cans (10 pickups)
  const canNames = [
    ['BEANS', '#a83b28'], ['PEACHES', '#b06c2f'], ['SOUP', '#a8402f'], ['CORN', '#a78c32'],
    ['TUNA', '#3f6a72'], ['PEARS', '#8a6c2d'], ['CHILI', '#8e2f25'], ['PINEAPPLE', '#9a7c2f'],
    ['TOMATO', '#a03428'], ['DOG FOOD', '#5c6b3a'],
  ];
  const canPositions = [
    [-10.9, 1.24, 6.35], [-5.9, 0.78, 2.4], [-1.2, 0.94, -5.6], [-15.3, 1.62, -1.0],
    [12.9, 1.98, -7.2], [-12.5, 0.22, 5.6], [9.6, 0.94, 8.0], [-10.4, 0.55, -9.3],
    [-13.9, 0.5, 9.4], [2.5, 0.34, 4.9],
  ];
  const cans = [];
  for (let i = 0; i < 10; i++) {
    const g = new THREE.Group();
    const [name, color] = canNames[i];
    const bodyMat = new THREE.MeshStandardMaterial({ map: canLabel(name, color), roughness: 0.55, metalness: 0.45 });
    const canBody = cyl(0.075, 0.075, 0.21, bodyMat, 12, 0, 0, 0);
    g.add(canBody);
    const top = cyl(0.077, 0.077, 0.02, MAT.metal, 12, 0, 0.115, 0);
    g.add(top);
    const bottom = cyl(0.077, 0.077, 0.015, MAT.metal, 12, 0, -0.11, 0);
    g.add(bottom);
    // dents/rust
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 4, 10), MAT.rust);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.03; g.add(ring);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,196,110,1)', 'rgba(255,150,60,0)'), transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.set(0.8, 0.8, 1); glow.position.y = 0.2; g.add(glow);
    g.position.set(...canPositions[i]);
    g.rotation.z = Math.PI / 2 * (i % 3 === 0 ? 1 : 0);
    g.rotation.y = i * 0.7;
    g.userData = { index: i, glow, base: new THREE.Vector3(...canPositions[i]), taken: false, name };
    root.add(g);
    cans.push(g);
  }

  // debris & trash
  for (const [x, z, s] of [[-3.4, 10.2, 1.1], [14.2, 2.0, 0.9], [-13.8, 3.5, 0.8], [7.2, -10.2, 0.7], [15.4, -12.0, 0.6], [-8.6, 3.2, 0.7]]) {
    const pile = createTrashPile(Math.floor(x * 17 + z * 3 + 500));
    pile.position.set(x, 0, z); pile.scale.setScalar(s); root.add(pile);
  }
  for (let i = 0; i < 34; i++) {
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.16 + Math.random() * 0.3, 0.2 + Math.random() * 0.35), MAT.paper);
    paper.rotation.x = -Math.PI / 2;
    paper.rotation.z = Math.random() * 6.28;
    paper.position.set(-15 + Math.random() * 30, 0.06, -11 + Math.random() * 22);
    root.add(paper);
  }
  // skeleton by the shelves
  const sk = createSkeleton({ pose: 'lying' });
  sk.position.set(-13.4, 0.1, -3.4); sk.rotation.y = 0.7; sk.scale.setScalar(0.95); root.add(sk);
  const sk2 = createSkeleton({ pose: 'slumped' });
  sk2.position.set(14.6, 0, -9.6); sk2.rotation.y = -1.2; root.add(sk2);

  // hanging lights
  const lamps = [];
  for (const [x, z] of [[-6, -6], [5, -6], [-6, 5], [6, 5], [-11, 10], [11, 10]]) {
    const wire = cyl(0.008, 0.008, 0.9, MAT.black, 4, x, 4.7, z); root.add(wire);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.26, 10, 1, true), new THREE.MeshStandardMaterial({ color: 0x1e1f1a, roughness: 0.9, side: THREE.DoubleSide }));
    shade.position.set(x, 4.25, z); root.add(shade);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe2b4, emissive: 0xffb45d, emissiveIntensity: 1.8, roughness: 0.4 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 7, 6), bulbMat);
    bulb.position.set(x, 4.18, z); root.add(bulb);
    const light = new THREE.PointLight(0xffc07a, 14, 16, 2);
    light.position.set(x, 4.0, z); root.add(light);
    lamps.push({ light, bulbMat, base: 14 });
  }

  // soft pools of moonlight just inside the front windows
  const shaftMat = new THREE.SpriteMaterial({ map: glowTexture('rgba(150,180,178,1)', 'rgba(120,150,148,0)'), color: 0x9fb8b4, transparent: true, opacity: 0.05, depthWrite: false, blending: THREE.AdditiveBlending });
  for (let i = 0; i < 3; i++) {
    const pool = new THREE.Sprite(shaftMat.clone());
    pool.position.set(-8 + i * 8, 1.1, 9.2);
    pool.scale.set(9, 5, 1);
    root.add(pool);
  }

  // dust
  const dust = createAsh({ count: 300, area: 30, height: 5, color: 0xd8c9a4, size: 0.025, seed: 31 });
  dust.points.position.y = 0; root.add(dust.points);

  // emergency exit sign above fuel door
  const exitTex = smallSignTexture('EXIT', '', { w: 512, h: 256, bg: '#2f5c3a', fg: '#e6f0dd', size: 130, seed: 71 });
  const exitSign = plane(1.2, 0.6, new THREE.MeshStandardMaterial({ map: exitTex, emissive: 0x2a5a36, emissiveIntensity: 0.7, roughness: 0.6 }), 8.5, 4.0, -12.8);
  root.add(exitSign);
  const exitLight = new THREE.PointLight(0x5dff96, 2.2, 5, 2); exitLight.position.set(8.5, 4.0, -12.2); root.add(exitLight);

  /* ---------------- markers ---------------- */
  const markerTex = glowTexture('rgba(255,196,110,1)', 'rgba(255,150,60,0)');
  const makeMarker = (x, y, z, color = 0xffb168) => {
    const g = new THREE.Group();
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: markerTex, color, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    s.position.y = y; s.scale.set(0.9, 0.9, 1); g.add(s);
    g.position.set(x, 0, z); root.add(g);
    return g;
  };
  const keyMarker = makeMarker(8.5, 2.2, -11.6, 0xff8a5a);
  keyMarker.visible = false;
  const fuelMarker = makeMarker(9.7, 1.4, -18.6, 0xffb168);
  fuelMarker.visible = false;
  const jackMarker = makeMarker(8.55, 1.9, -17.4, 0xffd08a);
  jackMarker.visible = false;

  /* ---------------- state / animation ---------------- */
  const state = {
    keypadOpen: false,
    fuelTaken: false,
    ironLift: 0,
    lockerPushed: false,
    jackTaken: false,
  };

  let time = 0;
  let flicker = 0;
  const animate = (dt, t) => {
    time = t;
    dust.update(dt, t);
    // can bob / glow
    for (const can of cans) {
      if (can.userData.taken) continue;
      can.position.y = can.userData.base.y + Math.sin(t * 1.8 + can.userData.index) * 0.025;
      can.rotation.y += dt * 0.55;
      if (can.userData.glow) can.userData.glow.material.opacity = 0.16 + Math.sin(t * 2.4 + can.userData.index) * 0.08;
    }
    // flicker
    if (t > flicker) {
      flicker = t + 0.4 + Math.random() * 2.4;
      for (const l of lamps) {
        const off = Math.random() > 0.72;
        l.light.intensity = off ? 2.6 : l.base;
        l.bulbMat.emissiveIntensity = off ? 0.2 : 1.8;
      }
      warningLight.intensity = Math.random() > 0.25 ? 6 : 1.5;
      keypadGlow.intensity = Math.random() > 0.1 ? 2.2 : 0.4;
    }
    // keypad door LED pulse
    keyLed.material.emissiveIntensity = 1.2 + Math.sin(t * 3) * 0.6;
    // markers
    for (const m of [keyMarker, fuelMarker, jackMarker]) {
      if (!m.visible) continue;
      const s = m.children[0];
      s.material.opacity = 0.35 + Math.sin(t * 2.6) * 0.18;
      s.position.y = 2.1 + Math.sin(t * 1.7) * 0.08;
      s.scale.setScalar(0.9 + Math.sin(t * 2) * 0.08);
    }
    // fuel glow pulse
    fuelGlow.material.opacity = 0.4 + Math.sin(t * 2.2) * 0.14;
    // iron door
    ironDoor.position.y = state.ironLift * 1.75;
    // jack handle idle spin when applied
    if (state.jackTaken) jack.userData.handle.rotation.x = t * 8;
  };

  const spawn = new THREE.Vector3(0, 0, 10.6);
  const bounds = { minX: -16.4, maxX: 16.4, minZ: -19.2, maxZ: 12.4 };

  const interactables = {
    keypad: new THREE.Vector3(10.9, 0, -12.1),
    note: new THREE.Vector3(-9.3, 0, 6.7),
    blood: new THREE.Vector3(-1.6, 0, -12.2),
    fuel: new THREE.Vector3(9.7, 0, -18.7),
    jack: new THREE.Vector3(8.55, 0, -17.2),
    iron: new THREE.Vector3(11.2, 0, -19.0),
    locker: new THREE.Vector3(5.55, 0, -13.7),
  };

  return {
    root, cans, colliders, wallMeshes, floor, fuel, keyDoor, keypad, keyLed, keyPadGlow: keypadGlow,
    bloodSign, note, locker, jack, ironDoor, ironFrame, ironCollider, fuelPickup, fuelGlow, genset, table, leafL, leafR,
    keyMarker, fuelMarker, jackMarker, warningLight, exitLight,
    state, animate, dust, spawn, bounds, interactables,
    openKeypadDoor() {
      state.keypadOpen = true;
      keyLed.material.color.set(0x2a9a4a);
      keyLed.material.emissive.set(0x4dff86);
      keypadGlow.color.set(0x4dff86);
      keyDoor.userData.opening = true;
      const doorCollider = colliders.find(c => c.name === 'fuel door');
      if (doorCollider) doorCollider.maxZ = -99; // disable
      // swing leaves
      let u = 0;
      const anim = { update(dt) { u = Math.min(1, u + dt * 1.4); leafL.rotation.y = -u * 1.5; leafR.rotation.y = u * 1.5; return u < 1; } };
      keyDoor.userData.anim = anim;
    },
    updateDoorAnimation(dt) {
      if (keyDoor.userData.anim && !keyDoor.userData.anim.update(dt)) delete keyDoor.userData.anim;
    },
    takeCan(can) {
      if (!can || can.userData.taken) return false;
      can.userData.taken = true;
      can.visible = false;
      return true;
    },
    takeFuel() {
      if (state.fuelTaken) return false;
      state.fuelTaken = true;
      fuelPickup.visible = false;
      fuelMarker.visible = false;
      return true;
    },
    takeJack() {
      if (state.jackTaken) return false;
      state.jackTaken = true;
      jack.visible = false;
      jackMarker.visible = false;
      return true;
    },
    pushLocker(toZ = -12.4) {
      state.lockerPushed = true;
      locker.position.set(6.7, 0, toZ);
      locker.rotation.y = 0.05;
      const c = colliders.find(c => c.name === 'locker');
      if (c) { c.minX = 6.2; c.maxX = 7.2; c.minZ = toZ - 0.4; c.maxZ = toZ + 0.4; }
    },
    closeKeypadDoor() {
      state.keypadOpen = false;
      keyLed.material.color.set(0x8a1a12);
      keyLed.material.emissive.set(0xff2a12);
      keypadGlow.color.set(0xff3a20);
      keyDoor.userData.anim = { update(dt) { leafL.rotation.y += (0 - leafL.rotation.y) * Math.min(1, dt * 7); leafR.rotation.y += (0 - leafR.rotation.y) * Math.min(1, dt * 7); return Math.abs(leafL.rotation.y) > 0.01; } };
      const c = colliders.find(c => c.name === 'fuel door');
      if (c) { c.minZ = -13.3; c.maxZ = -12.7; }
    },
    blockFuelDoor() {
      state.lockerPushed = true;
      locker.position.set(7.6, 0, -13.2);
      locker.rotation.y = 0.32;
      const c = colliders.find(c => c.name === 'locker');
      if (c) { c.minX = 7.1; c.maxX = 8.2; c.minZ = -13.5; c.maxZ = -12.9; }
    },
    resetEscape() {
      state.ironLift = 0;
      state.lockerPushed = false;
      locker.position.set(5.55, 0, -13.95);
      locker.rotation.y = 0.08;
      const c = colliders.find(c => c.name === 'locker');
      if (c) { c.minX = 5.0; c.maxX = 6.1; c.minZ = -14.3; c.maxZ = -13.6; }
      ironCollider.minZ = -19.6; ironCollider.maxZ = -19.1;
    },
    setIronLift(v) {
      state.ironLift = THREE.MathUtils.clamp(v, 0, 1);
      if (state.ironLift > 0.55) { ironCollider.minZ = -99; ironCollider.maxZ = -98; }
      else { ironCollider.minZ = -19.6; ironCollider.maxZ = -19.1; }
    },
    showKeyMarker(v) { keyMarker.visible = v; },
    showFuelMarker(v) { fuelMarker.visible = v; },
    showJackMarker(v) { jackMarker.visible = v; },
    canCount() { return cans.filter(c => c.userData.taken).length; },
    dispose() {
      scene.remove(root);
      root.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
        }
      });
    },
  };
}
