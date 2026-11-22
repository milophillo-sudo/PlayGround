import * as THREE from 'three';
import { T } from './textures.js';
import {
  box, cyl, sphere, makeLabel, makeLabelPlane, makeSignPlane, makePoster, makeGlow,
  makeDesk, makeChair, makeTeacherDesk, makeLockerBank, makeBookshelf,
  makeTable, makeBench, makeVending, makeStall, makeSinkCounter, makeMirror,
  makeTrash, makeCone, makeWetFloorSign, makeBoiler, makeBreaker,
  makeComputerDesk, makeClock, makeFireExtinguisher, makePlant, makeTrophyCase,
  makeSofa, makeBed, makeCabinet, makeServerRack, makeLabBench, makeEasel,
  makeMusicStand, makePiano, makeFoodCounter, makeCafeteriaTable, makeBleacher,
  makeStage, makeCar, makeDumpster, makeLabel as L
} from './props.js';

const C = (hex, r = 0.8, m = 0) => new THREE.MeshStandardMaterial({ color: hex, roughness: r, metalness: m });
const PAPER = () => new THREE.MeshStandardMaterial({ map: T.paper(), roughness: 0.94, side: THREE.DoubleSide });

function add(world, mesh, x, y, z, ry = 0, rx = 0, rz = 0) {
  mesh.position.set(x, y, z);
  mesh.rotation.set(rx, ry, rz);
  world.propGroup.add(mesh);
  return mesh;
}

function collide(world, x, z, w, d, sight = false) {
  world.addCollider(x - w / 2, z - d / 2, x + w / 2, z + d / 2, { sight, type: 'prop' });
}

function poster(world, id, x, y, z, ry = 0, w = 1.05, h = 1.45) {
  const p = makePoster(id, w, h);
  add(world, p, x, y, z, ry);
  return p;
}

function wallClock(world, x, y, z, ry = 0) {
  const c = makeClock();
  c.scale.setScalar(0.82);
  add(world, c, x, y, z, ry);
  return c;
}

function makeGraffiti(text = 'Q!?', color = '#8dffb2') {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 256);
  g.save();
  g.translate(256, 140);
  g.rotate(-0.06);
  g.textAlign = 'center';
  g.font = 'bold 156px Impact, "Arial Black", sans-serif';
  g.lineWidth = 12;
  g.strokeStyle = 'rgba(3,14,9,.9)';
  g.strokeText(text, 0, 0);
  g.fillStyle = color;
  g.fillText(text, 0, 0);
  g.globalAlpha = 0.35;
  g.fillStyle = '#04130a';
  g.fillText(text, 5, 8);
  g.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false });
  return new THREE.Mesh(new THREE.PlaneGeometry(1.65, 0.82), mat);
}

function paperScatter(world, x, z, n = 6, spread = 3, spreadZ = spread) {
  for (let i = 0; i < n; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.3), PAPER());
    p.rotation.x = -Math.PI / 2;
    p.rotation.z = Math.random() * 7;
    p.position.set(x + (Math.random() - 0.5) * spread, 0.012, z + (Math.random() - 0.5) * spreadZ);
    world.propGroup.add(p);
  }
}

function deskGrid(world, xs, zs, facing = 0) {
  for (const x of xs) for (const z of zs) {
    const d = makeDesk();
    add(world, d, x, 0, z, facing);
    const c = makeChair();
    add(world, c, x, 0, z - 0.72 * Math.cos(facing) - 0.0, facing);
    // notebook + pencil
    const nb = box(0.24, 0.02, 0.3, C(0xe3dcc6, 0.95), x + 0.15, 0.79, z + 0.06);
    nb.rotation.y = (Math.random() - 0.5) * 0.3; world.propGroup.add(nb);
    const pencil = box(0.012, 0.012, 0.16, C(0xd0a63a, 0.6), x - 0.2, 0.79, z + 0.1);
    pencil.rotation.y = Math.random(); world.propGroup.add(pencil);
    collide(world, x, z, 1.2, 1.3);
  }
}

function bulletin(world, x, y, z, ry, title, notes = 5) {
  const g = new THREE.Group();
  g.add(box(2.2, 1.25, 0.06, C(0x6b5136, 0.85), 0, 0, 0));
  g.add(box(2.0, 1.08, 0.03, C(0x8e7a5e, 0.95), 0, 0, 0.04));
  for (let i = 0; i < notes; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.38), new THREE.MeshStandardMaterial({
      color: [0xe9e2c8, 0xf0e8b0, 0xd9e0d0][i % 3], roughness: 0.95
    }));
    p.position.set(-0.7 + (i % 3) * 0.6, 0.28 - Math.floor(i / 3) * 0.48, 0.06);
    p.rotation.z = (Math.random() - 0.5) * 0.2;
    g.add(p);
    g.add(sphere(0.022, C(0xa33434, 0.5), p.position.x, p.position.y + 0.17, 0.08));
  }
  const lbl = makeLabelPlane(title, { color: '#3a3322', bg: 'rgba(232,222,194,.96)', size: 512, h: 72, font: 'bold 34px Courier New' });
  lbl.scale.set(1.9, 0.27, 1); lbl.position.set(0, 0.42, 0.08); g.add(lbl);
  add(world, g, x, y, z, ry);
}

function fireAlarm(world, x, y, z, ry) {
  const g = new THREE.Group();
  g.add(box(0.22, 0.26, 0.1, C(0xa12525, 0.6), 0, 0, 0));
  g.add(cyl(0.06, 0.06, 0.04, C(0xd8d4c4, 0.5), 0, 0.01, 0.06));
  add(world, g, x, y, z, ry);
}

function ceilingCable(world, x1, z1, x2, z2, y = 3.15) {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const c = cyl(0.018, 0.018, len, C(0x181c1b, 0.8), (x1 + x2) / 2, y, (z1 + z2) / 2);
  c.rotation.z = Math.PI / 2;
  c.rotation.y = -Math.atan2(z2 - z1, x2 - x1);
  world.propGroup.add(c);
}

// ─────────────────────────────────────────────────────────────
export function decorateRoom(world, room) {
  switch (room.decor) {
    case 'class101': return decorateClass101(world, room);
    case 'senior': return decorateSenior(world, room);
    case 'principal': return decoratePrincipal(world, room);
    case 'computer': return decorateComputer(world, room);
    case 'toilets': return decorateToilets(world, room);
    case 'gym': return decorateGym(world, room);
    case 'storage': return decorateStorage(world, room);
    case 'av': return decorateAV(world, room);
    case 'nurse': return decorateNurse(world, room);
    case 'cafeteria': return decorateCafeteria(world, room);
    case 'science': return decorateScience(world, room);
    case 'library': return decorateLibrary(world, room);
    case 'music': return decorateMusic(world, room);
    case 'art': return decorateArt(world, room);
    case 'boiler': return decorateBoiler(world, room);
    case 'janitor': return decorateJanitor(world, room);
    case 'detention': return decorateDetention(world, room);
    case 'darkroom': return decorateDarkroom(world, room);
    case 'faculty': return decorateFaculty(world, room);
    case 'server': return decorateServer(world, room);
    case 'auditorium': return decorateAuditorium(world, room);
    default: return genericRoom(world, room);
  }
}

function commonRoom(world, room) {
  const { x1, x2, z1, z2, side } = room;
  // clock above door (inside)
  const zDoor = side === 'north' ? -3.04 : side === 'south' ? 3.04 : -30.04;
  const dx = (room.door[0] + room.door[1]) / 2;
  // Mount flush on the corridor face (wall skin is 0.24 m thick).
  const zClock = side === 'north' ? -2.8 : side === 'south' ? 2.8 : -29.8;
  const c = wallClock(world, dx + (dx > (x1 + x2) / 2 ? -1.3 : 1.3), 2.55, zClock, side === 'south' ? Math.PI : 0);
  world.clockHands = c.userData.hands;
  // extinguisher + trash + plant
  add(world, makeFireExtinguisher(), x1 + 0.5, 0.02, z1 + 0.5);
  add(world, makeTrash(), x2 - 0.7, 0, z1 + 0.7);
  add(world, makePlant(), x2 - 0.7, 0, z2 - 0.8);
  // posters on side walls (offset past the 0.24m wall skin)
  poster(world, Math.floor(Math.random() * 10), x1 + 0.14, 1.9, (z1 + z2) / 2 + 2, Math.PI / 2);
  poster(world, Math.floor(Math.random() * 10), x2 - 0.14, 1.75, (z1 + z2) / 2 - 1, -Math.PI / 2);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 3, 4);
}

function decorateClass101(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // blackboard on south wall (in front of the 0.24m wall skin)
  const board = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 1.9), new THREE.MeshStandardMaterial({ map: T.blackboard(0), roughness: 0.95 }));
  add(world, board, (x1 + x2) / 2, 1.8, z2 - 0.18, Math.PI);
  add(world, box(7.4, 0.08, 0.14, C(0x4a3a28, 0.8)), (x1 + x2) / 2, 0.82, z2 - 0.22);
  add(world, box(7.4, 0.08, 0.14, C(0x4a3a28, 0.8)), (x1 + x2) / 2, 2.78, z2 - 0.22);
  for (let i = 0; i < 3; i++) add(world, box(0.06, 0.06, 0.06, C(0xe2dcc8, 0.9)), x1 + 3 + i * 0.25, 0.87, z2 - 0.26);
  // teacher desk
  const td = makeTeacherDesk(); add(world, td, (x1 + x2) / 2, 0, z2 - 2.4, Math.PI);
  collide(world, (x1 + x2) / 2, z2 - 2.4, 1.9, 0.9);
  // desks rows facing the board (+z)
  deskGrid(world, [x1 + 2.4, x1 + 5.0, x2 - 2.4], [z1 + 3.8, z1 + 6.2, z1 + 8.6], 0);
  // player's and Jake's desks near the back
  const pd = makeDesk(); add(world, pd, -8.1, 0, z1 + 2.0, 0);
  const pc = makeChair(); add(world, pc, -8.1, 0, z1 + 1.3, 0);
  collide(world, -8.1, z1 + 2.0, 1.2, 1.2);
  const jd = makeDesk(); add(world, jd, -5.7, 0, z1 + 2.0, 0);
  const jc = makeChair(); add(world, jc, -5.7, 0, z1 + 1.3, 0);
  collide(world, -5.7, z1 + 2.0, 1.2, 1.2);
  // backpack at player's desk
  add(world, box(0.32, 0.42, 0.18, C(0x6b3a3a, 0.9)), -8.45, 0.25, z1 + 1.1, 0.3);
  // windowsills + clutter
  add(world, box(0.22, 0.06, 1.2, C(0x6b5a42, 0.8)), x1 + 0.15, 1.05, 9.4);
  add(world, makeBookshelf(), x2 - 0.4, 0, z1 + 3.4, -Math.PI / 2);
  // banner
  const banner = makeLabelPlane('ROOM 101  ·  NO EXCUSES', { color: '#d8cfb2', bg: 'rgba(40,55,40,.92)', size: 700, h: 110, font: 'bold 44px Courier New' });
  banner.scale.set(5.2, 0.82, 1); add(world, banner, (x1 + x2) / 2, 2.78, z1 + 0.18, 0);
  paperScatter(world, (x1 + x2) / 2, z1 + 3, 8, 5);
}

function decorateSenior(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // flipped desks as barricade near door
  const n = makeDesk(); n.rotation.z = Math.PI / 2; add(world, n, -14.2, 0.65, -4.2, 0.25);
  const n2 = makeDesk(); n2.rotation.z = Math.PI / 2; add(world, n2, -12.6, 0.65, -4.0, -0.3);
  const n3 = makeTable(1.8, 0.8); n3.rotation.z = Math.PI / 2; add(world, n3, -13.2, 0.8, -4.8, 0.1);
  add(world, box(1.8, 1.0, 0.1, C(0x6b5136, 0.85)), -13.2, 0.5, -4.9, 0.1);
  const caution = makeLabelPlane('SAFE ROOM (probably)', { color: '#ffcf6b', bg: 'rgba(20,16,4,.9)', size: 620, h: 96, font: 'bold 38px Courier New' });
  caution.scale.set(4.4, 0.7, 1); add(world, caution, -13, 2.55, -4.15, Math.PI);
  // circle of desks/chairs
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const c = makeChair(); add(world, c, -13 + Math.cos(a) * 2.2, 0, -14 + Math.sin(a) * 2.2, -a + Math.PI / 2);
  }
  const table = makeTable(1.6, 0.8); add(world, table, -13, 0, -14, 0.2);
  collide(world, -13, -14, 1.7, 1.0);
  // candles
  for (let i = 0; i < 5; i++) {
    const a = i / 5 * Math.PI * 2;
    const candle = cyl(0.035, 0.04, 0.22, C(0xe2d8bd, 0.8), -13 + Math.cos(a) * 0.55, 0.87, -14 + Math.sin(a) * 0.55);
    add(world, candle, candle.position.x, 0.87, candle.position.z);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffb44a }));
    add(world, flame, candle.position.x, 1.02, candle.position.z);
    const glow = makeGlow('#ffb44a', 0.7); add(world, glow, candle.position.x, 1.02, candle.position.z);
  }
  // whiteboard with plan
  const board = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 2.0), new THREE.MeshStandardMaterial({ color: 0xdfe3da, roughness: 0.5 }));
  add(world, board, x2 - 0.18, 1.85, -8.5, -Math.PI / 2);
  const plan = makeLabelPlane('PLAN: 1. DON\'T DIE  2. FIND KEYS  3. EXIT', { color: '#28352b', bg: 'rgba(230,235,226,.95)', size: 900, h: 100, font: 'bold 30px Courier New' });
  plan.scale.set(3.7, 0.4, 1); plan.position.set(x2 - 0.24, 2.0, -8.5); plan.rotation.y = -Math.PI / 2; world.propGroup.add(plan);
  // beds/rolls on floor
  add(world, makeBed(), x1 + 2.2, 0, z2 - 3.0, Math.PI / 2);
  add(world, box(1.4, 0.1, 0.7, C(0x3b4a4e, 0.9)), x2 - 2.4, 0.05, z2 - 2.4, 0.1);
  add(world, makeSofa(), x2 - 2.2, 0, z1 + 4.2, -Math.PI / 2);
  paperScatter(world, -13, -12, 10, 4);
}

function decoratePrincipal(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  const desk = makeTeacherDesk(); add(world, desk, x1 + 3.6, 0, z1 + 4.6, Math.PI / 2);
  collide(world, x1 + 3.6, z1 + 4.6, 1.9, 1.4);
  add(world, makeChair(), x1 + 5.2, 0, z1 + 4.6, Math.PI / 2);
  // leather chair
  const chair = new THREE.Group();
  chair.add(box(0.8, 0.35, 0.8, C(0x3c211d, 0.75), 0, 0.5, 0));
  chair.add(box(0.75, 0.8, 0.2, C(0x301a17, 0.75), 0, 0.95, -0.3));
  add(world, chair, x1 + 6.4, 0, z1 + 4.6, Math.PI / 2);
  // safe
  const safe = new THREE.Group();
  safe.add(box(1.0, 1.2, 0.8, C(0x333a3a, 0.45, 0.5), 0, 0.6, 0));
  safe.add(cyl(0.12, 0.12, 0.06, C(0x9aa3a0, 0.3, 0.8), 0.2, 0.65, 0.41));
  safe.add(box(0.05, 0.4, 0.05, C(0x9aa3a0, 0.3, 0.8), 0.2, 0.4, 0.41));
  add(world, safe, x2 - 1.2, 0, z1 + 1.2, 0); collide(world, x2 - 1.2, z1 + 1.2, 1.1, 0.9);
  // cabinets
  for (let i = 0; i < 3; i++) {
    const cab = makeCabinet(); add(world, cab, x1 + 1.2 + i * 1.0, 0, z1 + 0.6, 0);
    collide(world, x1 + 1.2 + i * 1.0, z1 + 0.6, 0.95, 0.55);
  }
  add(world, makeSofa(), x1 + 2.8, 0, z2 - 1.5, Math.PI);
  add(world, makePlant(), x2 - 1.2, 0, z2 - 1.2);
  // rug
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(5, 3.4), new THREE.MeshStandardMaterial({ color: 0x4a2c2e, roughness: 0.98 }));
  add(world, rug, x1 + 4.6, 0.014, z1 + 5.6, 0, -Math.PI / 2);
  // portrait
  const portrait = makePoster(6, 1.2, 1.5); add(world, portrait, x1 + 4.2, 2.35, z1 + 0.18, 0);
  const plaque = makeLabelPlane('PRINCIPAL G. GRADY', { color: '#d8c9a2', bg: 'rgba(30,24,14,.9)', size: 600, h: 84, font: 'bold 30px Courier New' });
  plaque.scale.set(3.4, 0.5, 1); add(world, plaque, x1 + 4.2, 1.6, z1 + 0.19);
  add(world, makeFireExtinguisher(), x2 - 0.6, 0, z2 - 0.7);
  paperScatter(world, x1 + 4, z1 + 6, 5, 4);
}

function decorateComputer(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const x = x1 + 2.4 + col * 2.5, z = z1 + 3.2 + row * 2.8;
      const desk = makeComputerDesk(); add(world, desk, x, 0, z, Math.PI);
      add(world, makeChair(), x, 0, z - 0.8, Math.PI);
      collide(world, x, z, 1.2, 1.2);
    }
  }
  const board = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 1.9), new THREE.MeshStandardMaterial({ map: T.blackboard(1), roughness: 0.95 }));
  add(world, board, (x1 + x2) / 2, 1.85, z2 - 0.18, Math.PI);
  for (let i = 0; i < 2; i++) add(world, makeServerRack(), x2 - 1.0, 0, z1 + 2 + i * 1.1, Math.PI / 2);
  add(world, makeVending(), x2 - 1.4, 0, z2 - 1.4, Math.PI);
  const sign = makeLabelPlane('COMPUTER LAB — PLEASE DO NOT LICK THE WIRES', { color: '#7de0b4', bg: 'rgba(6,18,12,.9)', size: 900, h: 90, font: 'bold 28px Courier New' });
  sign.scale.set(6.2, 0.62, 1); add(world, sign, (x1 + x2) / 2, 2.9, z1 + 0.18);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 8, 5);
  ceilingCable(world, x1 + 2, z1 + 1, x2 - 2, z2 - 1);
}

function decorateToilets(world, r) {
  const { x1, x2, z1, z2 } = r;
  // stalls along north (outer) wall
  const stallXs = [-6.1, -4.75, -3.4, -2.05, -0.7];
  for (let i = 0; i < stallXs.length; i++) {
    const st = makeStall(1.35, 0.55 + Math.random() * 0.5, i);
    st.position.set(stallXs[i] - 0.67, 0, z1 + 0.3);
    world.propGroup.add(st);
  }
  // Sinks must not block the doorway at x -3..-1. The old east sink sat
  // directly in front of the door, so walking in put a mirror in your
  // face. Keep one counter west of the door and mount the second on the
  // east wall instead.
  const sink1 = makeSinkCounter(); add(world, sink1, x1 + 2.15, 0, z2 - 0.45, Math.PI);
  const m1 = makeMirror(2.2, 0.85); add(world, m1, x1 + 2.15, 1.55, z2 - 0.15, Math.PI);
  const sink2 = makeSinkCounter(); add(world, sink2, x2 - 0.45, 0, z1 + 13.5, -Math.PI / 2);
  const m2 = makeMirror(1.8, 0.85); add(world, m2, x2 - 0.15, 1.55, z1 + 13.5, -Math.PI / 2);
  add(world, makeGraffiti('Q!?'), 0.15, 1.9, z2 - 0.17, Math.PI);
  // Urinals on the west wall. The forgotten-Jake close-up looks that
  // way, so the room needs more than a blank green band.
  for (let i = 0; i < 3; i++) {
    const u = new THREE.Group();
    const porc = C(0xe4e8e0, 0.32);
    u.add(box(0.5, 0.78, 0.34, porc, 0, 0.62, 0));
    u.add(box(0.4, 0.18, 0.27, C(0xd2d8d2, 0.3), 0, 0.86, 0.03));
    u.add(cyl(0.02, 0.02, 0.55, C(0x9aa5a8, 0.3, 0.8), 0, 1.16, -0.14));
    u.add(box(0.05, 0.05, 0.22, C(0x9aa5a8, 0.3, 0.8), 0, 1.4, -0.04));
    add(world, u, x1 + 0.27, 0, -13.4 - i * 1.7, Math.PI / 2);
  }
  add(world, makeWetFloorSign(), x1 + 1.8, 0, z2 - 2.2);
  add(world, makeTrash(), x2 - 1.1, 0, z2 - 1.1);
  // mop bucket
  const bucket = new THREE.Group();
  bucket.add(cyl(0.3, 0.25, 0.4, C(0x8a8f3f, 0.6), 0, 0.2, 0));
  bucket.add(cyl(0.032, 0.032, 1.0, C(0x6c4b2e, 0.8), 0.15, 0.6, 0.1));
  add(world, bucket, x1 + 1.2, 0, z2 - 3.2);
  ceilingCable(world, x1 + 1, z1 + 1, x2 - 1, z2 - 1, 3.05);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 4, 4);
  // mirror lights (emissive)
  const ml = box(2.2, 0.08, 0.14, new THREE.MeshBasicMaterial({ color: 0xe8fff6 }), x1 + 2.15, 2.15, z2 - 0.25);
  world.propGroup.add(ml);
}

function decorateGym(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // court lines
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xc7b478 });
  const mid = new THREE.Mesh(new THREE.PlaneGeometry(0.12, z2 - z1 - 2), lineMat);
  add(world, mid, (x1 + x2) / 2, 0.011, (z1 + z2) / 2, 0, -Math.PI / 2);
  const circle = new THREE.Mesh(new THREE.RingGeometry(2.4, 2.52, 40), lineMat);
  add(world, circle, (x1 + x2) / 2, 0.012, (z1 + z2) / 2, 0, -Math.PI / 2);
  // hoops: one on each end wall of the court (the centre line and
  // circle run between them). They used to sit side by side on the back
  // wall with their arms pointing sideways.
  for (const [hx, hz, ry] of [
    [x1 + 0.5, (z1 + z2) / 2, Math.PI / 2],
    [x2 - 0.5, (z1 + z2) / 2, -Math.PI / 2]
  ]) {
    const pole = new THREE.Group();
    pole.add(cyl(0.08, 0.1, 3.4, C(0x3c4345, 0.5, 0.5), 0, 1.7, 0));
    pole.add(box(0.1, 0.09, 1.0, C(0x3c4345, 0.5, 0.5), 0, 3.35, 0.5));
    pole.add(box(1.6, 1.05, 0.07, C(0xe7e4d8, 0.7), 0, 2.8, 0.98));
    pole.add(box(0.62, 0.46, 0.03, new THREE.MeshBasicMaterial({ color: 0xc0562c }), 0, 2.67, 1.02));
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.025, 8, 20), C(0xd0562c, 0.6));
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0, 3.05, 1.22);
    pole.add(rim);
    add(world, pole, hx, 0, hz, ry);
  }
  // bleachers
  const b1 = makeBleacher(); add(world, b1, x2 - 4.5, 0, z1 + 2.25, 0);
  const b2 = makeBleacher(); add(world, b2, x2 - 4.5, 0, z2 - 2.25, Math.PI);
  // equipment
  add(world, makeBench(3.0), x1 + 2.2, 0, z2 - 1.62, Math.PI / 2);
  for (let i = 0; i < 3; i++) {
    const ball = sphere(0.18, C(0xb56b2e, 0.75), x1 + 3 + i * 0.5, 0.2, z2 - 3);
    add(world, ball, ball.position.x, 0.2, ball.position.z);
  }
  // climbing ropes
  for (let i = 0; i < 4; i++) {
    const rope = cyl(0.025, 0.025, 2.6, C(0x8f7a55, 0.9), x1 + 4 + i * 0.7, 1.7, z1 + 1.0);
    add(world, rope, rope.position.x, 1.7, rope.position.z);
  }
  // scoreboard
  const sb = new THREE.Group();
  sb.add(box(4.4, 1.4, 0.2, C(0x22282a, 0.6), 0, 0, 0));
  sb.add(makeLabelPlane('HOME 00 : 00 VISITORS', { color: '#ff6045', bg: 'rgba(10,8,8,.95)', size: 700, h: 100, font: 'bold 38px Courier New' }));
  sb.children[1].position.set(0, 0.1, 0.13); sb.children[1].scale.set(3.8, 0.55, 1);
  add(world, sb, (x1 + x2) / 2, 2.6, z1 + 0.15);
  add(world, makeCone(), x1 + 2.2, 0, z1 + 2.2);
  add(world, makeCone(), x2 - 2.0, 0, z2 - 2.5);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 4, 8);
}

function decorateStorage(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let i = 0; i < 3; i++) {
    // shelving
    const g = new THREE.Group();
    const metal = C(0x5b6060, 0.55, 0.4);
    g.add(box(2.2, 2.4, 0.06, metal, 0, 1.2, -0.35));
    for (let s = 0; s < 4; s++) {
      g.add(box(2.2, 0.06, 0.7, metal, 0, 0.3 + s * 0.55, 0));
      for (let j = 0; j < 3; j++) {
        const bx = box(0.4, 0.32, 0.4, C([0x8d7048, 0x6f7b80, 0x7c5a44][j], 0.9), -0.7 + j * 0.6, 0.5 + s * 0.55, 0.05);
        g.add(bx);
      }
    }
    add(world, g, x1 + 1.45 + i * 2.55, 0, z1 + 1.2, 0);
    collide(world, x1 + 1.45 + i * 2.55, z1 + 1.2, 2.2, 0.9);
  }
  for (let i = 0; i < 7; i++) {
    const bx = box(0.6 + Math.random() * 0.5, 0.5 + Math.random() * 0.6, 0.5 + Math.random() * 0.4, C([0x7a5f42, 0x6c716c, 0x8d7a5d][i % 3], 0.9),
      x1 + 2 + Math.random() * 4, 0.3, z1 + 3 + Math.random() * 5);
    bx.rotation.y = Math.random() * 3;
    add(world, bx, bx.position.x, bx.position.y, bx.position.z);
  }
  add(world, makeWetFloorSign(), x2 - 2, 0, z2 - 2);
  add(world, makeFireExtinguisher(), x2 - 0.6, 0, z1 + 0.8);
  // mop
  const mop = new THREE.Group();
  mop.add(cyl(0.03, 0.03, 1.4, C(0x9a8455, 0.9), 0, 0.7, 0));
  mop.add(cyl(0.14, 0.05, 0.3, C(0xb9b6a5, 0.95), 0, 0.1, 0));
  add(world, mop, x1 + 1.0, 0, z2 - 1.2, 0.2, 0, 0.25);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 6, 4);
}

function decorateAV(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // TV cart
  const tv = new THREE.Group();
  tv.add(box(1.6, 1.0, 0.7, C(0x3a3e3f, 0.7), 0, 0.5, 0));
  tv.add(box(1.5, 0.95, 0.16, C(0x111516, 0.5), 0, 1.4, 0));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.32, 0.78), new THREE.MeshBasicMaterial({ color: 0x2c4a58 }));
  screen.position.set(0, 1.4, 0.09); tv.add(screen);
  add(world, tv, x1 + 3, 0, z1 + 2, 0.3);
  collide(world, x1 + 3, z1 + 2, 1.8, 1.0);
  // tripods + camera
  for (let i = 0; i < 3; i++) {
    const tripod = new THREE.Group();
    tripod.add(cyl(0.03, 0.03, 1.4, C(0x2e3332, 0.5, 0.6), 0, 0.7, 0));
    for (let j = 0; j < 3; j++) {
      const leg = box(0.03, 1.0, 0.03, C(0x2e3332, 0.5, 0.6), Math.cos(j / 3 * 7) * 0.2, 0.35, Math.sin(j / 3 * 7) * 0.2);
      leg.rotation.z = Math.cos(j / 3 * 7) * 0.3; leg.rotation.x = Math.sin(j / 3 * 7) * 0.3; tripod.add(leg);
    }
    tripod.add(box(0.3, 0.2, 0.4, C(0x171a1b, 0.5), 0, 1.45, 0));
    tripod.add(cyl(0.1, 0.1, 0.25, C(0x1b1e1f, 0.4, 0.5), 0, 1.45, 0.3));
    add(world, tripod, x1 + 2 + i * 1.2, 0, z2 - 2, 0.4 * i);
  }
  add(world, makeSofa(), x2 - 2.5, 0, z1 + 4, -Math.PI / 2);
  add(world, makeTable(2.0, 0.9), x1 + 5, 0, z1 + 4, 0.2);
  for (let i = 0; i < 5; i++) {
    const tape = box(0.16, 0.15, 0.04, C(0x1c1f1e, 0.5), x1 + 4.3 + i * 0.3, 0.8, z1 + 3.9);
    add(world, tape, tape.position.x, 0.8, tape.position.z);
  }
  const sign = makeLabelPlane('AV CLUB — WE SEE EVERYTHING', { color: '#8dffb2', bg: 'rgba(5,16,10,.9)', size: 700, h: 90, font: 'bold 30px Courier New' });
  sign.scale.set(5.0, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.85, z1 + 0.18);
  ceilingCable(world, x1 + 2, z1 + 2, x2 - 1, z1 + 2);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 5, 3);
}

function decorateNurse(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  add(world, makeBed(), x1 + 2.6, 0, z1 + 4.2, Math.PI / 2);
  add(world, makeBed(), x1 + 2.6, 0, z1 + 7.2, Math.PI / 2);
  // curtain
  const curtain = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 2.4), new THREE.MeshStandardMaterial({ map: T.curtain(), roughness: 0.95, side: THREE.DoubleSide }));
  add(world, curtain, x1 + 4.8, 1.3, z1 + 5.6, Math.PI / 2);
  for (let i = 0; i < 3; i++) add(world, makeCabinet(), x2 - 0.8, 0, z1 + 2 + i * 1.0, -Math.PI / 2);
  // nurse desk
  add(world, makeTeacherDesk(), x2 - 3.6, 0, z1 + 7.2, -Math.PI / 2);
  collide(world, x2 - 3.6, z1 + 7.2, 1.9, 1.0);
  // medical posters
  const cross = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), new THREE.MeshStandardMaterial({ color: 0xe8e2d0, roughness: 0.9 }));
  add(world, cross, x1 + 0.17, 2.1, z2 - 4, Math.PI / 2);
  const crossR = box(0.5, 0.1, 0.02, C(0xa62a2a, 0.7), x1 + 0.19, 2.1, z2 - 4);
  crossR.rotation.y = Math.PI / 2; world.propGroup.add(crossR);
  const crossR2 = box(0.1, 0.5, 0.02, C(0xa62a2a, 0.7), x1 + 0.19, 2.1, z2 - 4);
  crossR2.rotation.y = Math.PI / 2; world.propGroup.add(crossR2);
  const sign = makeLabelPlane('NURSE — OUT LUNCH (PERMANENTLY)', { color: '#cfe6d8', bg: 'rgba(8,20,14,.9)', size: 800, h: 90, font: 'bold 30px Courier New' });
  sign.scale.set(4.6, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.8, z2 - 0.18, Math.PI);
  add(world, makeTrash(), x1 + 1.2, 0, z2 - 0.4);
  add(world, makeFireExtinguisher(), x2 - 1.0, 0, z2 - 0.25);
}

function decorateCafeteria(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // serving counter along north wall
  const fc = makeFoodCounter(7.5); add(world, fc, x1 + 6.5, 0, z1 + 0.62, 0);
  collide(world, x1 + 6.5, z1 + 0.62, 7.6, 1.1);
  const menu = makeLabelPlane('TODAY: MYSTERY MEAT  ·  YESTERDAY: MYSTERY MEAT', { color: '#e8d8a0', bg: 'rgba(28,24,10,.92)', size: 900, h: 90, font: 'bold 26px Courier New' });
  menu.scale.set(5.8, 0.55, 1); add(world, menu, x1 + 6.5, 2.9, z1 + 0.15);
  // tables
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 2; col++) {
      const t = makeCafeteriaTable(); add(world, t, x1 + 4.2 + col * 5.0, 0, z1 + 5.0 + row * 3.0, 0);
      collide(world, x1 + 4.2 + col * 5.0, z1 + 5.0 + row * 3.0, 3.2, 2.0);
      // trays
      for (let i = 0; i < 3; i++) {
        const tray = box(0.4, 0.03, 0.28, C(0x9a4b39, 0.7), x1 + 3.4 + col * 5.0 + i * 0.7, 0.82, z1 + 4.6 + row * 3.0);
        add(world, tray, tray.position.x, tray.position.y, tray.position.z);
      }
    }
  }
  add(world, makeVending(), x2 - 1.4, 0, z1 + 1.0, Math.PI);
  // kitchen door
  add(world, box(1.3, 2.2, 0.1, C(0x8c9188, 0.7, 0.3)), x2 - 4.0, 1.1, z1 + 0.19);
  const kitchen = makeLabelPlane('KITCHEN — STAFF ONLY', { color: '#d8d2bc', bg: 'rgba(10,12,10,.9)', size: 512, h: 72, font: 'bold 28px Courier New' });
  kitchen.scale.set(2.6, 0.36, 1); add(world, kitchen, x2 - 4, 2.55, z1 + 0.24);
  // trash + wet floor
  add(world, makeTrash(), x1 + 1.2, 0, z2 - 0.4);
  add(world, makeTrash(), x2 - 1.2, 0, z2 - 0.4);
  add(world, makeWetFloorSign(), x1 + 9.5, 0, z2 - 2.2);
  // banner
  const banner = makeLabelPlane('MILLBROOK CAFETERIA  ·  EAT LIKE NOBODY\'S WATCHING', { color: '#d8c9a2', bg: 'rgba(42,30,16,.9)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  banner.scale.set(7.2, 0.64, 1); add(world, banner, (x1 + x2) / 2, 2.95, z2 - 0.18, Math.PI);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 10, 7);
}

function decorateScience(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      const bench = makeLabBench(); add(world, bench, x1 + 2.8 + col * 4.4, 0, z1 + 4.0 + row * 4.0, 0);
      collide(world, x1 + 2.8 + col * 4.4, z1 + 4.0 + row * 4.0, 2.7, 1.0);
      add(world, makeChair(), x1 + 2.8 + col * 4.4 - 0.8, 0, z1 + 3.1 + row * 4.0, Math.PI);
      add(world, makeChair(), x1 + 2.8 + col * 4.4 + 0.8, 0, z1 + 3.1 + row * 4.0, Math.PI);
    }
  }
  const board = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.9), new THREE.MeshStandardMaterial({ map: T.blackboard(0), roughness: 0.95 }));
  add(world, board, (x1 + x2) / 2, 1.85, z2 - 0.18, Math.PI);
  // periodic table poster
  const pt = poster(world, 7, x2 - 0.18, 1.8, z1 + 5.0, -Math.PI / 2, 1.8, 1.2);
  // skeleton (comedy)
  const skel = new THREE.Group();
  const bone = C(0xd8d0b8, 0.8);
  skel.add(sphere(0.13, bone, 0, 1.65, 0));
  skel.add(box(0.12, 0.12, 0.12, bone, 0, 1.52, 0));
  skel.add(box(0.04, 0.5, 0.04, bone, 0, 1.2, 0));
  for (let i = 0; i < 4; i++) skel.add(box(0.34, 0.035, 0.06, bone, 0, 1.4 - i * 0.1, 0));
  skel.add(box(0.32, 0.05, 0.1, bone, 0, 0.95, 0));
  for (const x of [-0.1, 0.1]) {
    skel.add(box(0.04, 0.42, 0.04, bone, x, 0.68, 0));
    skel.add(box(0.06, 0.05, 0.18, bone, x, 0.46, 0.04));
    skel.add(box(0.04, 0.5, 0.04, bone, x * 2.4, 1.2, 0));
  }
  add(world, skel, x1 + 1.0, 0, z1 + 1.6);
  const sign = makeLabelPlane('SCIENCE: BECAUSE MATH WASN\'T SCARY ENOUGH', { color: '#8dffb2', bg: 'rgba(5,16,10,.9)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  sign.scale.set(6.2, 0.58, 1); add(world, sign, (x1 + x2) / 2, 2.95, z1 + 0.18);
  add(world, makeFireExtinguisher(), x1 + 0.7, 0, z2 - 1.0);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 7, 4);
}

function decorateLibrary(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // shelves in rows
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      const shelf = makeBookshelf(); add(world, shelf, x1 + 2.5 + i * 3.0, 0, z1 + 3.0 + j * 1.2, Math.PI / 2);
      collide(world, x1 + 2.5 + i * 3.0, z1 + 3.0 + j * 1.2, 2.0, 0.7);
    }
  }
  add(world, makeTable(2.4, 1.1), x1 + 4.5, 0, z1 + 8.0, 0);
  add(world, makeTable(2.4, 1.1), x1 + 8.5, 0, z1 + 8.0, Math.PI / 2);
  for (let i = 0; i < 4; i++) {
    add(world, makeChair(), x1 + 3.3 + (i % 2) * 2.4, 0, z1 + 7.2 + Math.floor(i / 2) * 1.6, Math.PI);
  }
  // reading lamps
  for (const [x, z] of [[x1 + 4.5, z1 + 8.0], [x1 + 8.5, z1 + 8.0]]) {
    const lamp = new THREE.Group();
    lamp.add(cyl(0.16, 0.2, 0.04, C(0x2e332f, 0.5), 0, 0.82, 0));
    lamp.add(cyl(0.02, 0.02, 0.35, C(0x2e332f, 0.5), 0, 1.0, 0));
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 10), C(0x2f5d46, 0.7));
    shade.position.y = 1.2; shade.rotation.x = Math.PI; lamp.add(shade);
    add(world, lamp, x + 0.8, 0, z - 0.3);
  }
  add(world, makeSofa(), x2 - 2.5, 0, z1 + 2.2, -Math.PI / 2);
  add(world, makePlant(), x1 + 1.0, 0, z2 - 1.2);
  const quiet = makeLabelPlane('QUIET PLEASE  ·  THE HALL MONITOR IS LISTENING', { color: '#d8cfb2', bg: 'rgba(20,28,22,.92)', size: 900, h: 90, font: 'bold 30px Courier New' });
  quiet.scale.set(5.8, 0.62, 1); add(world, quiet, (x1 + x2) / 2, 2.95, z2 - 0.18, Math.PI);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 10, 5);
}

function decorateMusic(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  add(world, makePiano(), x2 - 3.0, 0, z1 + 3.0, Math.PI / 2);
  collide(world, x2 - 3.0, z1 + 3.0, 2.2, 1.2);
  for (let i = 0; i < 5; i++) {
    add(world, makeMusicStand(), x1 + 2.6 + i * 1.5, 0, z1 + 5.4, 0.2);
    add(world, makeChair(), x1 + 2.6 + i * 1.5, 0, z1 + 6.2, Math.PI);
  }
  const board = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 1.8), new THREE.MeshStandardMaterial({ map: T.blackboard(0), roughness: 0.95 }));
  add(world, board, (x1 + x2) / 2, 1.8, z2 - 0.18, Math.PI);
  // drum kit
  const drum = new THREE.Group();
  drum.add(cyl(0.35, 0.35, 0.4, C(0x9e2b2b, 0.55), 0, 0.5, 0));
  drum.add(cyl(0.4, 0.4, 0.02, C(0xd8d4c2, 0.6), 0, 0.72, 0));
  drum.add(cyl(0.28, 0.28, 0.35, C(0x8c2727, 0.55), 1.0, 0.45, 0.2));
  drum.add(cyl(0.32, 0.32, 0.02, C(0xd8d4c2, 0.6), 1.0, 0.64, 0.2));
  const cym = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.02, 16), C(0xc9a33a, 0.4, 0.7));
  cym.position.set(-0.6, 1.0, 0.3); cym.rotation.z = 0.2; drum.add(cym);
  add(world, drum, x1 + 4, 0, z2 - 3.0);
  // instrument cases
  for (let i = 0; i < 3; i++) {
    const c = box(1.2, 0.3, 0.4, C(0x25282a, 0.7), x1 + 2.5 + i * 1.4, 0.18, z1 + 2.0);
    add(world, c, c.position.x, 0.18, c.position.z);
  }
  const sign = makeLabelPlane('MUSIC ROOM  ·  BAND PRACTICE CANCELLED (AGAIN)', { color: '#d8cfb2', bg: 'rgba(22,22,30,.92)', size: 900, h: 90, font: 'bold 28px Courier New' });
  sign.scale.set(5.8, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.95, z1 + 0.18);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 5, 4);
}

function decorateArt(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let i = 0; i < 3; i++) add(world, makeEasel(), x1 + 2.5 + i * 2.4, 0, z1 + 4.5, 0.2 * i);
  // paint table
  add(world, makeTable(3.0, 1.2), x1 + 4.5, 0, z1 + 8.0, 0);
  collide(world, x1 + 4.5, z1 + 8.0, 3.0, 1.2);
  for (let i = 0; i < 8; i++) {
    const pot = cyl(0.06, 0.06, 0.08, C([0xb53737, 0x375bb5, 0xc9a33a, 0x3d8c4a][i % 4], 0.4), x1 + 3.4 + i * 0.28, 0.86, z1 + 7.8);
    add(world, pot, pot.position.x, 0.86, pot.position.z);
  }
  // sculpture
  const sculpt = new THREE.Group();
  sculpt.add(sphere(0.28, C(0x8a8f92, 0.7), 0, 0.45, 0, 0.9, 1.2, 0.8));
  sculpt.add(cyl(0.22, 0.28, 0.25, C(0x6d7274, 0.8), 0, 0.12, 0));
  add(world, sculpt, x2 - 2.0, 0, z2 - 2.0);
  // paintings on wall
  for (let i = 0; i < 3; i++) {
    const art = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.3), C([0x7a2e3a, 0x2e4a7a, 0x4c6b3a][i], 0.9));
    add(world, art, x1 + 0.17, 1.9, z1 + 3 + i * 1.8, Math.PI / 2);
  }
  add(world, makeSinkCounter(), x2 - 2.0, 0, z1 + 1.0, 0);
  const sign = makeLabelPlane('ART ROOM  ·  EVERYTHING IS ART IF YOU\'RE BRAVE ENOUGH', { color: '#e8d8b0', bg: 'rgba(28,20,14,.92)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  sign.scale.set(6.4, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.95, z2 - 0.18, Math.PI);
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 8, 5);
}

function decorateBoiler(world, r) {
  const { x1, x2, z1, z2 } = r;
  const b = makeBoiler(); add(world, b, x1 + 3.0, 0, z1 + 3.5, Math.PI / 4);
  collide(world, x1 + 3.0, z1 + 3.5, 2.4, 2.4);
  add(world, makeBreaker(), x2 - 0.22, 1.55, z1 + 5.4, -Math.PI / 2);
  // pipes across ceiling
  for (let i = 0; i < 4; i++) {
    const pipe = cyl(0.07, 0.07, x2 - x1 - 1, C(i % 2 ? 0x6b4a32 : 0x555b56, 0.7, 0.4), (x1 + x2) / 2, 2.8 - i * 0.12, z1 + 1.4 + i * 1.4);
    pipe.rotation.z = Math.PI / 2; world.propGroup.add(pipe);
  }
  // valves
  for (let i = 0; i < 3; i++) {
    const v = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 6, 12), C(0x8a3a2a, 0.6, 0.5));
    add(world, v, x1 + 1.5, 1.4 + i * 0.4, z2 - 1.2, 0);
  }
  const warn = makeSignPlane('!', 0.8, 0.8, '#ffb03a');
  add(world, warn, x1 + 0.17, 2.1, z2 - 2.5, Math.PI / 2);
  const sign = makeLabelPlane('BOILER ROOM  ·  AUTHORIZED STAFF ONLY  ·  AND YOU', { color: '#ffcf6b', bg: 'rgba(24,14,4,.92)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  sign.scale.set(6.4, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.95, z2 - 0.18, Math.PI);
  add(world, makeWetFloorSign(), x1 + 2, 0, z2 - 2);
  // steam particles
  const steamGeo = new THREE.BufferGeometry();
  const n = 70, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.28, rr = Math.random() * 1.4;
    pos[i * 3] = x1 + 3.0 + Math.cos(a) * rr;
    pos[i * 3 + 1] = Math.random() * 2.5;
    pos[i * 3 + 2] = z1 + 3.5 + Math.sin(a) * rr;
  }
  steamGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const steam = new THREE.Points(steamGeo, new THREE.PointsMaterial({ color: 0x8fa5a0, size: 0.25, transparent: true, opacity: 0.18, depthWrite: false }));
  world.scene.add(steam);
  world.steam = steam;
  const glow = makeGlow('#ff5a4a', 2.4); add(world, glow, x1 + 3.0, 1.5, z1 + 3.5);
  // hazard stripes
  for (let i = 0; i < 5; i++) {
    const s = box(1.2, 0.12, 0.04, new THREE.MeshBasicMaterial({ color: 0xc9a43a }), x1 + 1.5 + i * 0.3, 0.3, z1 + 0.2);
    add(world, s, s.position.x, 0.3, s.position.z);
  }
}

function decorateJanitor(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let i = 0; i < 2; i++) {
    const shelf = new THREE.Group();
    const metal = C(0x5b6060, 0.55, 0.4);
    shelf.add(box(1.8, 2.2, 0.06, metal, 0, 1.1, -0.28));
    for (let s = 0; s < 3; s++) shelf.add(box(1.8, 0.06, 0.6, metal, 0, 0.35 + s * 0.6, 0));
    for (let j = 0; j < 4; j++) {
      const bottle = cyl(0.07, 0.08, 0.25, C([0x3f6b8a, 0x7a8a3f, 0x8a4a3f][j % 3], 0.5), -0.6 + j * 0.4, 0.7 + (j % 3) * 0.6, 0);
      shelf.add(bottle);
    }
    add(world, shelf, x1 + 2.0 + i * 2.0, 0, z1 + 1.2, 0);
  }
  // mop bucket
  const bucket = new THREE.Group();
  bucket.add(cyl(0.3, 0.24, 0.45, C(0x8a8f3f, 0.6), 0, 0.23, 0));
  bucket.add(cyl(0.32, 0.32, 0.04, C(0x6e7231, 0.6), 0, 0.46, 0));
  bucket.add(cyl(0.03, 0.03, 1.3, C(0x6c4b2e, 0.8), 0.14, 0.85, 0.1));
  add(world, bucket, x1 + 2.0, 0, z2 - 2.0);
  const mop = new THREE.Group();
  mop.add(cyl(0.03, 0.03, 1.4, C(0x9a8455, 0.9), 0, 0.7, 0));
  mop.add(cyl(0.15, 0.05, 0.3, C(0xb9b6a5, 0.95), 0, 0.1, 0));
  add(world, mop, x1 + 4.5, 0, z2 - 1.0, 0.2, 0, 0.35);
  const sign = makeLabelPlane('JANITOR  ·  THE ONLY ONE WHO KNOWS WHERE ANYTHING IS', { color: '#d8d2c0', bg: 'rgba(14,18,14,.9)', size: 900, h: 90, font: 'bold 24px Courier New' });
  sign.scale.set(6.0, 0.58, 1); add(world, sign, (x1 + x2) / 2, 2.9, z2 - 0.18, Math.PI);
  add(world, makeWetFloorSign(), x1 + 2.5, 0, z1 + 2.5);
}

function decorateDetention(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let i = 0; i < 4; i++) {
    const dx = x1 + 1.6 + i * 1.8;
    const d = makeDesk(); add(world, d, dx, 0, z1 + 3.0, 0);
    add(world, makeChair(), dx, 0, z1 + 3.8, Math.PI);
    collide(world, dx, z1 + 3.0, 1.2, 1.0);
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.4), new THREE.MeshStandardMaterial({ color: 0xe4ddc4, roughness: 0.95 }));
    add(world, paper, dx, 0.79, z1 + 3.0, 0, -Math.PI / 2);
  }
  const board = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 1.9), new THREE.MeshStandardMaterial({ map: T.blackboard(1), roughness: 0.95 }));
  add(world, board, (x1 + x2) / 2, 1.85, z2 - 0.18, Math.PI);
  const sign = makeLabelPlane('DETENTION  ·  SIT DOWN. THINK ABOUT IT.', { color: '#ff8b96', bg: 'rgba(24,8,10,.92)', size: 800, h: 90, font: 'bold 30px Courier New' });
  sign.scale.set(5.4, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.9, z1 + 0.18);
  add(world, makeClock(), x2 - 0.18, 2.2, z1 + 4.0, -Math.PI / 2);
  paperScatter(world, (x1 + x2) / 2, z1 + 4, 8, 6, 4);
}

function decorateDarkroom(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  // hanging photos on lines
  for (let i = 0; i < 3; i++) {
    const line = box(x2 - x1 - 1, 0.01, 0.01, C(0x9a9280, 0.9), (x1 + x2) / 2, 2.2, z1 + 3 + i * 2.0);
    add(world, line, line.position.x, line.position.y, line.position.z);
    for (let j = 0; j < 6; j++) {
      const photo = box(0.28, 0.22, 0.01, C(0xd8d4c4, 0.9), x1 + 1.5 + j * 1.0, 2.05, z1 + 3 + i * 2.0);
      add(world, photo, photo.position.x, 2.05, photo.position.z);
    }
  }
  for (let i = 0; i < 3; i++) {
    add(world, makeTable(2.0, 0.8), x1 + 2.2 + i * 2.4, 0, z2 - 2.0, 0);
    const tray = box(0.7, 0.08, 0.5, C(0x353b38, 0.5), x1 + 2.2 + i * 2.4, 0.84, z2 - 2.0);
    add(world, tray, tray.position.x, 0.84, tray.position.z);
  }
  add(world, makeCabinet(), x2 - 0.7, 0, z1 + 1.2, -Math.PI / 2);
  // red light
  const red = world.addPointSource(0xff2a2a, 5, 9, (x1 + x2) / 2, 2.8, (z1 + z2) / 2);
  const bulb = sphere(0.1, new THREE.MeshBasicMaterial({ color: 0xff3a3a }), (x1 + x2) / 2, 2.9, (z1 + z2) / 2);
  add(world, bulb, bulb.position.x, 2.9, bulb.position.z);
  add(world, makeGlow('#ff3333', 2.0), (x1 + x2) / 2, 2.85, (z1 + z2) / 2);
  const sign = makeLabelPlane('DARKROOM  ·  DO NOT OPEN (EVER)', { color: '#ff6b7a', bg: 'rgba(24,4,8,.9)', size: 800, h: 90, font: 'bold 30px Courier New' });
  sign.scale.set(5.0, 0.58, 1); add(world, sign, (x1 + x2) / 2, 2.9, z1 + 0.18);
  add(world, makeFireExtinguisher(), x1 + 0.7, 0, z2 - 1.0);
}

function decorateFaculty(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  add(world, makeSofa(), x1 + 2.2, 0, z1 + 3.0, Math.PI / 2);
  add(world, makeSofa(), x1 + 2.2, 0, z1 + 5.0, Math.PI / 2);
  add(world, makeTable(2.0, 1.0), x1 + 4.8, 0, z1 + 4.0, 0);
  collide(world, x1 + 4.8, z1 + 4.0, 2.0, 1.0);
  // TV
  const tv = new THREE.Group();
  tv.add(box(1.5, 0.9, 0.12, C(0x171b1c, 0.5), 0, 1.6, 0));
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.7), new THREE.MeshBasicMaterial({ color: 0x355a64 }));
  screen.position.z = 0.07; tv.add(screen);
  add(world, tv, x2 - 2.0, 0, z1 + 0.2);
  // kitchenette
  const counter = box(3.0, 0.9, 0.7, C(0x8d918a, 0.5, 0.3), x2 - 2.4, 0.45, z2 - 0.48);
  add(world, counter, counter.position.x, 0.45, counter.position.z);
  add(world, box(0.7, 1.5, 0.7, C(0x9aa09a, 0.4, 0.4)), x2 - 0.52, 0.75, z2 - 0.47, 0);
  // coffee machine
  const coffee = new THREE.Group();
  coffee.add(box(0.5, 0.6, 0.4, C(0x232626, 0.5), 0, 0.3, 0));
  coffee.add(box(0.32, 0.18, 0.02, new THREE.MeshBasicMaterial({ color: 0xc94a2a }), 0, 0.4, 0.21));
  add(world, coffee, x2 - 3.2, 0.9, z2 - 0.48);
  add(world, makeTrash(), x1 + 1.0, 0, z2 - 0.4);
  const sign = makeLabelPlane('FACULTY LOUNGE  ·  PLEASE KNOCK (THEY WON\'T ANSWER)', { color: '#d8cfb2', bg: 'rgba(22,22,18,.9)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  sign.scale.set(6.4, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.9, z1 + 0.18);
  // donuts
  for (let i = 0; i < 3; i++) {
    const donut = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.05, 8, 14), C(0xc99a6a, 0.8));
    donut.position.set(x1 + 4.4 + i * 0.3, 0.78, z1 + 4.0); donut.rotation.x = Math.PI / 2;
    world.propGroup.add(donut);
  }
  paperScatter(world, (x1 + x2) / 2, (z1 + z2) / 2, 4, 3);
}

function decorateServer(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  for (let i = 0; i < 5; i++) add(world, makeServerRack(), x1 + 1.5 + i * 1.1, 0, z1 + 1.0, 0);
  for (let i = 0; i < 4; i++) add(world, makeServerRack(), x1 + 1.5 + i * 1.2, 0, z2 - 1.2, Math.PI);
  add(world, makeComputerDesk(), x1 + 5.0, 0, z1 + 5.0, Math.PI);
  add(world, makeCabinet(), x2 - 0.7, 0, z1 + 2.0, -Math.PI / 2);
  // cables
  for (let i = 0; i < 8; i++) ceilingCable(world, x1 + 1.5 + i * 0.7, z1 + 1, x1 + 1.5 + i * 0.5, z2 - 1.5, 2.8 - i * 0.05);
  // monitor wall
  for (let i = 0; i < 4; i++) {
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.8), new THREE.MeshBasicMaterial({ color: i % 2 ? 0x255a4a : 0x1b3a55 }));
    add(world, scr, x1 + 3 + (i % 2) * 1.4, 1.8 + Math.floor(i / 2) * 1.0, z2 - 0.18, Math.PI);
  }
  const sign = makeLabelPlane('SERVER ROOM  ·  DO NOT UNPLUG ANYTHING. EVER.', { color: '#8dd8ff', bg: 'rgba(6,14,22,.92)', size: 900, h: 90, font: 'bold 28px Courier New' });
  sign.scale.set(5.8, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.95, z1 + 0.18);
  add(world, makeTrash(), x2 - 1.0, 0, z2 - 1.0);
  paperScatter(world, x1 + 4, z1 + 5, 5, 3);
}

function decorateAuditorium(world, r) {
  const { x1, x2, z1, z2 } = r;
  commonRoom(world, r);
  const stage = makeStage(); add(world, stage, (x1 + x2) / 2, 0, z1 + 3.0, 0);
  collide(world, (x1 + x2) / 2, z1 + 3.0, 18, 4.5);
  // seats rows
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      const seat = box(0.55, 0.6, 0.5, C(0x4a1f24, 0.85), x1 + 3.5 + col * 2.0, 0.35, z1 + 9.5 + row * 1.8);
      add(world, seat, seat.position.x, 0.35, seat.position.z);
      add(world, box(0.52, 0.5, 0.08, C(0x3b181d, 0.85), x1 + 3.5 + col * 2.0, 0.7, z1 + 9.75 + row * 1.8), x1 + 3.5 + col * 2.0, 0.7, z1 + 9.75 + row * 1.8);
    }
  }
  add(world, makePiano(), x1 + 3.0, 0, z1 + 5.5, Math.PI / 2);
  // spotlights
  for (let i = 0; i < 3; i++) {
    const spot = new THREE.Group();
    spot.add(cyl(0.12, 0.18, 0.4, C(0x2a2e2e, 0.5), 0, 0.2, 0));
    add(world, spot, x1 + 8 + i * 5, 3.0, z1 + 4.0, 0, Math.PI / 2);
  }
  const sign = makeLabelPlane('AUDITORIUM  ·  "THE SHOW MUST GO ON" (IT DID NOT)', { color: '#e8d8b0', bg: 'rgba(24,18,10,.92)', size: 1000, h: 90, font: 'bold 26px Courier New' });
  sign.scale.set(6.4, 0.6, 1); add(world, sign, (x1 + x2) / 2, 2.95, z2 - 0.18, Math.PI);
  add(world, makeCone(), x2 - 2, 0, z2 - 2);
  paperScatter(world, (x1 + x2) / 2, z1 + 11, 12, 8, 4);
}

function genericRoom(world, room) {
  const { x1, x2, z1, z2 } = room;
  commonRoom(world, room);
  add(world, makeTable(2.0, 1.0), (x1 + x2) / 2, 0, (z1 + z2) / 2, 0);
  add(world, makeChair(), (x1 + x2) / 2, 0, (z1 + z2) / 2 + 0.8, Math.PI);
  for (let i = 0; i < 3; i++) add(world, makeBookshelf(), x1 + 2 + i * 2.4, 0, z1 + 1.0, 0);
}

// ─────────────────────────────────────────────────────────────
export function decorateCorridor(world) {
  // locker banks along north & south corridor walls
  // Wall skins are 0.24 m thick: a bank's back must sit near ±2.82 on
  // the central halls and -29.82 on the back hall, otherwise it visibly
  // floats away from the wall. x=32 also sat across the auditorium door.
  // (Bank depth is 0.6 m, so the origin sits 0.30 m off the wall face.)
  const banks = [
    [-35, -2.58, 0], [-22, -2.58, 0], [16.5, -2.58, 0], [30, -2.58, 0], [43, -2.58, 0],
    [-33, 2.58, Math.PI], [-18, 2.58, Math.PI], [24, 2.58, Math.PI], [37, 2.58, Math.PI],
    [-49, -29.58, 0], [-25, -29.58, 0], [8, -29.58, 0], [40, -29.58, 0]
  ];
  for (const [x, z, ry] of banks) {
    const b = makeLockerBank(4, 1 + Math.floor(Math.random() * 40));
    b.position.set(x, 0, z); b.rotation.y = ry;
    world.propGroup.add(b);
  }
  // trophy case
  const tc = makeTrophyCase(2.2); add(world, tc, -45.5, 0, -2.62, 0);
  // bulletin boards
  bulletin(world, -8.5, 1.85, -2.86, 0, 'NOTICES', 6);
  bulletin(world, 25.5, 1.85, 2.86, Math.PI, 'EXAM RESULTS', 5);
  // posters
  poster(world, 3, -16, 1.8, -2.86, 0);
  poster(world, 5, 42, 1.8, -2.86, 0);
  poster(world, 9, -10, 1.9, 2.86, Math.PI);
  poster(world, 7, 12, 1.9, 2.86, Math.PI);
  poster(world, 1, -34, 1.9, 2.86, Math.PI);
  poster(world, 4, 48, 1.9, 2.86, Math.PI);
  poster(world, 6, -21, 1.9, -29.86, 0);
  poster(world, 0, 11, 1.9, -29.86, 0);
  poster(world, 2, 28, 1.9, -29.86, 0);
  // benches
  add(world, makeBench(2.4), -48, 0, 2.60, Math.PI);
  add(world, makeBench(2.4), 9, 0, 2.60, Math.PI);
  add(world, makeBench(2.4), 35, 0, -2.60, 0);
  add(world, makeBench(2.4), -13.5, 0, -29.55, 0);
  // water fountain
  const fountain = new THREE.Group();
  fountain.add(box(0.55, 0.85, 0.4, C(0x8f9794, 0.4, 0.4), 0, 0.45, 0));
  fountain.add(box(0.5, 0.18, 0.3, C(0xb8c0bb, 0.3), 0, 0.9, 0.03));
  fountain.add(cyl(0.025, 0.025, 0.1, C(0x9aa3a0, 0.3, 0.8), 0, 1.0, 0.06));
  add(world, fountain, -26.5, 0, 2.65, Math.PI);
  // trash cans, cones, extinguishers
  add(world, makeTrash(), -4, 0, 2.62);
  add(world, makeTrash(), 21, 0, 2.62);
  add(world, makeTrash(), -38, 0, -2.62);
  add(world, makeCone(), 11, 0, 1.2);
  add(world, makeCone(), -11, 0, -1.4);
  add(world, makeWetFloorSign(), 2.5, 0, 1.4);
  add(world, makeFireExtinguisher(), -44, 0, -2.4);
  add(world, makeFireExtinguisher(), 20, 0, -2.4);
  // banners
  const banner1 = makeLabelPlane('MILLBROOK HIGH  ·  HOME OF THE FIGHTING FERNS', { color: '#d8cfb2', bg: 'rgba(32,44,32,.9)', size: 1000, h: 96, font: 'bold 30px Courier New' });
  banner1.scale.set(8.2, 0.74, 1); add(world, banner1, -20, 2.95, -2.8);
  const banner2 = makeLabelPlane('SENIOR PRANK 2026: WE\'RE STILL HERE', { color: '#c9d8c9', bg: 'rgba(26,34,28,.88)', size: 900, h: 88, font: 'bold 28px Courier New' });
  banner2.scale.set(7.4, 0.68, 1); add(world, banner2, 20, 2.95, 2.8, Math.PI);
  // clocks
  const clock = wallClock(world, 0, 2.6, -2.8, 0); world.clockHands = clock.userData.hands;
  // exit signs at ends
  for (const [x, z, ry] of [[-51.55, -2.80, 0], [51.55, -2.80, 0], [-51.55, 2.80, Math.PI], [51.55, 2.80, Math.PI]]) {
    const sign = makeLabelPlane('EXIT', { color: '#a9ffbe', bg: 'rgba(5,30,16,.92)', size: 256, h: 90, font: 'bold 56px Arial Black' });
    sign.scale.set(1.5, 0.5, 1); add(world, sign, x, 3.0, z, ry);
  }
  // central passage decor
  poster(world, 8, -9.86, 1.9, -10, Math.PI / 2);
  poster(world, 2, -7.14, 1.9, -17, -Math.PI / 2);
  // dust motes
  const geo = new THREE.BufferGeometry();
  const n = 900, pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = -52 + Math.random() * 104;
    pos[i * 3 + 1] = Math.random() * 3.2;
    pos[i * 3 + 2] = Math.random() < 0.3 ? -30 + Math.random() * 6 : -3 + Math.random() * 6;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const dust = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xc9d8c9, size: 0.022, transparent: true, opacity: 0.35, depthWrite: false }));
  world.scene.add(dust);
  world.dust = dust;
  // scattered papers
  paperScatter(world, 0, 0, 14, 96, 4.6);
  paperScatter(world, 0, -27, 10, 96, 4.6);
  // fire alarm pulls
  fireAlarm(world, -3.2, 1.5, -2.85, 0);
  fireAlarm(world, 30, 1.5, 2.85, Math.PI);
  // lost & found pile
  const pile = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const b = box(0.38, 0.25, 0.3, C([0x4a4a5a, 0x6a4a3a, 0x3a5a4a][i % 3], 0.9),
      -14 + (i % 3) * 0.35, 0.12 + Math.floor(i / 3) * 0.22, 2.1);
    b.rotation.y = Math.random();
    pile.add(b);
  }
  add(world, pile, 0, 0, 0);
  const lost = makeLabelPlane('LOST & FOUND', { color: '#d8cfb2', bg: 'rgba(20,24,20,.9)', size: 512, h: 80, font: 'bold 32px Courier New' });
  lost.scale.set(1.8, 0.28, 1); add(world, lost, -13.6, 1.15, 2.7, Math.PI);
}

export function decorateOutdoor(world) {
  // police car
  const pc = makeCar(0x1d2a3a);
  pc.position.set(128, 0, 6.5); pc.rotation.y = Math.PI / 2;
  world.scene.add(pc);
  world.addCollider(125.8, 5.4, 130.2, 7.6, { type: 'car' });
  const lightbar = box(1.0, 0.12, 0.28, new THREE.MeshBasicMaterial({ color: 0x3a5bff }), 128, 1.5, 6.5);
  world.scene.add(lightbar);
  const blue = world.addPointSource(0x3a6bff, 6, 12, 128, 1.6, 6.5);
  world.policeBlue = blue;
  // trees
  for (const [x, z] of [[63, 10.5], [76, -10.5], [96, 10.5], [116, -10.5]]) {
    const trunk = cyl(0.16, 0.22, 2.4, C(0x3a2c22, 0.9), x, 1.2, z);
    world.scene.add(trunk);
    const crown = sphere(1.2, C(0x1f3a2a, 0.9), x, 3.2, z, 1, 1.2, 1);
    world.scene.add(crown);
  }
  // bus stop
  const stop = new THREE.Group();
  stop.add(box(2.6, 0.12, 1.2, C(0x3a4142, 0.6, 0.4), 0, 2.5, 0));
  for (const x of [-1.2, 1.2]) stop.add(box(0.08, 2.5, 0.08, C(0x3a4142, 0.6, 0.4), x, 1.25, 0));
  stop.add(box(2.4, 1.4, 0.06, new THREE.MeshStandardMaterial({ color: 0x2a3a42, transparent: true, opacity: 0.35, roughness: 0.1 }), 0, 1.7, -0.5));
  stop.add(box(2.2, 0.1, 0.5, C(0x6b5136, 0.8), 0, 0.55, 0));
  world.scene.add(stop);
  stop.position.set(84, 0, 9.6);
  world.addCollider(82.5, 9.0, 85.5, 10.2, { type: 'prop' });
  // street sign
  const sign = makeLabelPlane('MILLBROOK  ·  POP. 1,203 (AND FALLING)', { color: '#cfe0d0', bg: 'rgba(10,16,12,.9)', size: 700, h: 100, font: 'bold 34px Courier New' });
  sign.scale.set(3.2, 0.45, 1); sign.position.set(80, 3.6, 10.4); world.scene.add(sign);
  // police tape near entrance
  for (let i = 0; i < 2; i++) {
    const tape = box(0.03, 0.6, 6.0, new THREE.MeshBasicMaterial({ color: 0xd8c43a }), 61 + i * 1.4, 1.0, 0);
    tape.rotation.y = 0.4 + i * 0.2;
    world.scene.add(tape);
  }
  const tapeLabel = makeLabelPlane('DO NOT CROSS  ·  ACTUALLY PLEASE CROSS  ·  HELP', { color: '#171b16', bg: 'rgba(216,196,58,.95)', size: 1000, h: 90, font: 'bold 34px Courier New' });
  tapeLabel.scale.set(3.8, 0.36, 1); tapeLabel.position.set(61, 1.35, 0); tapeLabel.rotation.y = 0.4; world.scene.add(tapeLabel);
  // stars? keep sky simple
}
