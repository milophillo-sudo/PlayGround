import * as THREE from 'three';
import { T } from './textures.js';
import {
  box, cyl, makeLabel, makeSignPlane, makePerson, makeKillerModel,
  makeLockerBank, makeDesk, makeChair, makeBookshelf, makeTable, makeBench,
  makeVending, makeStall, makeTrash, makeCone, makeBoiler, makeBreaker,
  makeComputerDesk, makeClock, makeSinkCounter, makeMirror, makeCar,
  makeStreetlight, makeDumpster, makePoliceStation, makeBatteryModel,
  makeKeyModel, makeCrowbarModel, makeNoteModel, makeMedkitModel, makeGlow
} from './props.js';
import { decorateRoom, decorateCorridor, decorateOutdoor } from './decor.js';

export const WALL_H = 3.3;
const T_WALL = 0.24;
const SCHOOL_E = 58;
const EXIT_Z1 = -2.1, EXIT_Z2 = 2.1;

export const ROOMS = [
  // ── north band, doors on z = -3 ─────────────────────────────
  { id: 'principal', name: 'PRINCIPAL\u2019S OFFICE', short: 'PRINCIPAL', x1: -46, x2: -34, z1: -24, z2: -3, side: 'north', door: [-41, -39], scheme: 2, floor: 1, eligible: true, decor: 'office' },
  { id: 'computer', name: 'COMPUTER LAB', short: 'COMPUTERS', x1: -32, x2: -20, z1: -24, z2: -3, side: 'north', door: [-27, -25], scheme: 0, floor: 1, eligible: true, decor: 'computer' },
  { id: 'seniors', name: 'SENIOR CLASSROOM', short: 'SENIORS', x1: -18, x2: -10, z1: -24, z2: -3, side: 'north', door: [-15, -13], scheme: 0, floor: 0, safe: true, decor: 'senior' },
  { id: 'toilets', name: 'BOYS\u2019 TOILETS', short: 'TOILETS', x1: -7, x2: 1, z1: -24, z2: -3, side: 'north', door: [-3, -1], scheme: 1, floor: 1, tile: true, decor: 'toilets' },
  { id: 'gym', name: 'GYMNASIUM', short: 'GYM', x1: 3, x2: 21, z1: -24, z2: -3, side: 'north', door: [10, 14], scheme: 5, floor: 1, big: true, decor: 'gym' },
  { id: 'storage', name: 'STORAGE', short: 'STORAGE', x1: 23, x2: 31, z1: -24, z2: -3, side: 'north', door: [26, 28], scheme: 4, floor: 2, decor: 'storage' },
  { id: 'av', name: 'AV CLUB', short: 'AV CLUB', x1: 33, x2: 46, z1: -24, z2: -3, side: 'north', door: [38, 40], scheme: 0, floor: 2, decor: 'av' },

  // ── south band, doors on z = 3 ──────────────────────────────
  { id: 'nurse', name: 'NURSE\u2019S OFFICE', short: 'NURSE', x1: -46, x2: -36, z1: 3, z2: 18, side: 'south', door: [-41, -39], scheme: 1, floor: 1, eligible: true, decor: 'nurse' },
  { id: 'cafeteria', name: 'CAFETERIA', short: 'CAFETERIA', x1: -34, x2: -16, z1: 3, z2: 18, side: 'south', door: [-25, -22], scheme: 5, floor: 1, big: true, decor: 'cafeteria' },
  { id: 'class101', name: 'CLASSROOM 101', short: 'ROOM 101', x1: -14, x2: -2, z1: 3, z2: 18, side: 'south', door: [-9, -7], scheme: 0, floor: 0, decor: 'class101' },
  { id: 'science', name: 'SCIENCE LAB', short: 'SCIENCE', x1: 0, x2: 10, z1: 3, z2: 18, side: 'south', door: [4, 6], scheme: 0, floor: 2, eligible: true, decor: 'science' },
  { id: 'library', name: 'LIBRARY', short: 'LIBRARY', x1: 12, x2: 24, z1: 3, z2: 18, side: 'south', door: [17, 20], scheme: 3, floor: 1, eligible: true, decor: 'library' },
  { id: 'music', name: 'MUSIC ROOM', short: 'MUSIC', x1: 26, x2: 36, z1: 3, z2: 18, side: 'south', door: [30, 32], scheme: 0, floor: 1, eligible: true, decor: 'music' },
  { id: 'art', name: 'ART ROOM', short: 'ART', x1: 38, x2: 46, z1: 3, z2: 18, side: 'south', door: [41, 43], scheme: 0, floor: 2, eligible: true, decor: 'art' },

  // ── back band, doors on z = -30 ─────────────────────────────
  { id: 'boiler', name: 'BOILER ROOM', short: 'BOILER', x1: -46, x2: -34, z1: -44, z2: -30, side: 'back', door: [-41, -39], scheme: 4, floor: 2, decor: 'boiler' },
  { id: 'janitor', name: 'JANITOR\u2019S CLOSET', short: 'JANITOR', x1: -32, x2: -24, z1: -44, z2: -30, side: 'back', door: [-29, -27], scheme: 4, floor: 2, decor: 'janitor' },
  { id: 'detention', name: 'DETENTION', short: 'DETENTION', x1: -22, x2: -14, z1: -44, z2: -30, side: 'back', door: [-19, -17], scheme: 2, floor: 1, eligible: true, decor: 'detention' },
  { id: 'darkroom', name: 'PHOTO DARKROOM', short: 'DARKROOM', x1: -12, x2: -2, z1: -44, z2: -30, side: 'back', door: [-8, -6], scheme: 4, floor: 2, eligible: true, decor: 'darkroom' },
  { id: 'faculty', name: 'FACULTY LOUNGE', short: 'FACULTY', x1: 0, x2: 10, z1: -44, z2: -30, side: 'back', door: [4, 6], scheme: 3, floor: 1, decor: 'faculty' },
  { id: 'server', name: 'SERVER ROOM', short: 'SERVER', x1: 12, x2: 22, z1: -44, z2: -30, side: 'back', door: [16, 18], scheme: 4, floor: 2, eligible: true, decor: 'server' },
  { id: 'auditorium', name: 'AUDITORIUM', short: 'AUDITORIUM', x1: 24, x2: 46, z1: -44, z2: -30, side: 'back', door: [32, 36], scheme: 2, floor: 1, big: true, decor: 'auditorium' },
];

const ROOM_BY_ID = Object.fromEntries(ROOMS.map(r => [r.id, r]));

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function rnd(arr) { return arr[(Math.random() * arr.length) | 0]; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function segmentAABB(ax, az, bx, bz, b) {
  let tmin = 0, tmax = 1;
  const dx = bx - ax, dz = bz - az;
  if (Math.abs(dx) < 1e-9) {
    if (ax < b.x1 || ax > b.x2) return false;
  } else {
    let t1 = (b.x1 - ax) / dx, t2 = (b.x2 - ax) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  if (Math.abs(dz) < 1e-9) {
    if (az < b.z1 || az > b.z2) return false;
  } else {
    let t1 = (b.z1 - az) / dz, t2 = (b.z2 - az) / dz;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  return true;
}

class Door {
  constructor(world, room) {
    this.world = world;
    this.room = room;
    this.side = room.side;
    this.width = room.door[1] - room.door[0] - 0.12;
    this.wallZ = this.side === 'south' ? 3 : (this.side === 'back' ? -30 : -3);
    this.hingeX = room.door[0] + 0.06;
    this.locked = false;
    this.keyId = 0;
    this.label = 0;
    this.open = false;
    this.angle = 0;
    this.target = 0;
    this.collider = { x1: room.door[0], x2: room.door[1], z1: this.wallZ - 0.14, z2: this.wallZ + 0.14, sight: true, enabled: true, type: 'door' };
    world.colliders.push(this.collider);
    this.group = new THREE.Group();
    this.group.position.set(this.hingeX, 0, this.wallZ);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x5c4a35, roughness: 0.78, metalness: 0.05 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0x7d725c, roughness: 0.6 });
    this.leaf = new THREE.Group();
    this.leaf.position.x = this.width / 2;
    const panel = box(this.width, 2.16, 0.07, doorMat, 0, 1.08, 0);
    this.leaf.add(panel);
    // inset panels
    const inMat = new THREE.MeshStandardMaterial({ color: 0x4a3b2c, roughness: 0.85 });
    this.leaf.add(box(this.width - 0.28, 0.8, 0.02, inMat, 0, 1.5, 0.045));
    this.leaf.add(box(this.width - 0.28, 0.55, 0.02, inMat, 0, 0.62, 0.045));
    this.leaf.add(box(this.width - 0.28, 0.8, 0.02, inMat, 0, 1.5, -0.045));
    this.leaf.add(box(this.width - 0.28, 0.55, 0.02, inMat, 0, 0.62, -0.045));
    // kick plate
    this.leaf.add(box(this.width - 0.1, 0.22, 0.09, new THREE.MeshStandardMaterial({ color: 0x8b9394, roughness: 0.3, metalness: 0.8 }), 0, 0.16, 0));
    // handle
    const brass = new THREE.MeshStandardMaterial({ color: 0xb8a05a, roughness: 0.25, metalness: 0.9 });
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), brass);
    knob.position.set(this.width / 2 - 0.16, 1.02, 0.08);
    this.leaf.add(knob);
    const knob2 = knob.clone(); knob2.position.z = -0.08; this.leaf.add(knob2);
    this.group.add(this.leaf);

    // frame
    const frame = new THREE.Group();
    frame.position.set(0, 0, 0);
    frame.add(box(0.1, 2.26, 0.36, trimMat, -0.06, 1.13, 0));
    frame.add(box(0.1, 2.26, 0.36, trimMat, room.door[1] - room.door[0] - 0.02, 1.13, 0));
    frame.add(box(room.door[1] - room.door[0], 0.12, 0.36, trimMat, (room.door[1] - room.door[0]) / 2 - 0.06, 2.3, 0));
    this.group.add(frame);

    this.plate = makeSignPlane('?', 0.5, 0.42, '#ff5566');
    this.plate.visible = false;
    this.plate.position.set(this.width / 2, 1.55, this.side === 'south' ? -0.09 : 0.09);
    if (this.side === 'south') this.plate.rotation.y = Math.PI;
    this.group.add(this.plate);

    this.nameSprite = makeLabel(room.short, { color: '#b6c8bb', bg: 'rgba(4,8,6,.55)', size: 512, h: 90, font: 'bold 30px Courier New' });
    this.nameSprite.scale.set(2.1, 0.37, 1);
    this.nameSprite.position.set(room.door[0] - this.hingeX + 0.2, 2.62, this.side === 'south' ? -0.14 : 0.14);
    this.group.add(this.nameSprite);
    world.scene.add(this.group);
    if (Math.random() < 0.45) this.setOpen(true, false);
  }

  setLocked(label) {
    this.locked = true;
    this.keyId = label;
    this.label = label;
    this.plate.visible = true;
    this.plate.material.map.image.getContext('2d');
    // regenerate plate with number
    this.group.remove(this.plate);
    this.plate = makeSignPlane(String(label), 0.52, 0.44, '#ff4455');
    this.plate.position.set(this.width / 2, 1.55, this.side === 'south' ? -0.09 : 0.09);
    if (this.side === 'south') this.plate.rotation.y = Math.PI;
    this.group.add(this.plate);
    this.open = false;
    this.angle = 0;
    this.target = 0;
    this.leaf.rotation.y = 0;
    this.collider.enabled = true;
  }

  setOpen(v, sound = true) {
    this.open = v;
    this.target = v ? (this.side === 'south' ? -1.75 : 1.75) : 0;
    if (!this.open) this.collider.enabled = true;
    else this.collider.enabled = false;
    if (sound && this.world.audio) this.world.audio.door();
  }

  unlock() {
    this.locked = false;
    if (this.plate) this.plate.material.color.set('#8dffb2');
    this.plate.visible = false;
    this.setOpen(true);
  }

  update(dt) {
    const diff = this.target - this.leaf.rotation.y;
    if (Math.abs(diff) > 0.001) {
      this.leaf.rotation.y += diff * Math.min(1, dt * 7);
    }
  }
}

export class World {
  constructor(scene, audio, renderer) {
    this.scene = scene;
    this.audio = audio;
    this.renderer = renderer;
    this.rooms = ROOMS;
    this.roomById = ROOM_BY_ID;
    this.colliders = [];
    this.doors = [];
    this.navNodes = [];
    this.navEdges = [];
    this.hidespots = [];
    this.items = [];
    this.keyItems = [];
    this.crowbarItem = null;
    this.notes = [];
    this.batteries = [];
    this.medkits = [];
    this.fixtures = [];
    this.hideGroup = new THREE.Group();
    this.itemGroup = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.propGroup = new THREE.Group();
    this.scene.add(this.hideGroup, this.itemGroup, this.bodyGroup, this.propGroup);
    this.time = 0;
    this.exit = { unlocked: false, barricaded: true, open: false, y: 0, collider: null, mesh: null, planks: [] };
    this.powerOn = false;
    this.bodiesVisible = false;
    this._paths = new Map();
    this.build();
  }

  // ── basic builders ────────────────────────────────────────────
  addCollider(x1, z1, x2, z2, opts = {}) {
    const c = { x1: Math.min(x1, x2), x2: Math.max(x1, x2), z1: Math.min(z1, z2), z2: Math.max(z1, z2), sight: opts.sight !== false, enabled: opts.enabled !== false, type: opts.type || 'furniture' };
    this.colliders.push(c);
    return c;
  }

  floorMaterial(room) {
    const key = 'floorMat' + room.id;
    if (!this[key]) {
      const map = (room.tile ? T.tile() : room.decor === 'library' ? T.carpet() : T.floor(room.floor || 0)).clone();
      map.needsUpdate = true;
      map.repeat.set(Math.max(1, (room.x2 - room.x1) / 4), Math.max(1, (room.z2 - room.z1) / 4));
      this[key] = new THREE.MeshStandardMaterial({ map, roughness: 0.86, metalness: 0.02 });
    }
    return this[key];
  }

  wallMaterial(scheme, len) {
    const map = T.wall(scheme).clone();
    map.needsUpdate = true;
    map.repeat.set(Math.max(1, len / 4.5), 1);
    return new THREE.MeshStandardMaterial({ map, roughness: 0.88 });
  }

  addFloorRect(x1, z1, x2, z2, material, y = 0) {
    const g = new THREE.PlaneGeometry(x2 - x1, z2 - z1);
    const m = new THREE.Mesh(g, material);
    m.rotation.x = -Math.PI / 2;
    m.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    m.receiveShadow = false;
    this.scene.add(m);
    return m;
  }

  addCeilingRect(x1, z1, x2, z2, y = WALL_H) {
    const mat = new THREE.MeshStandardMaterial({ map: T.ceiling(), roughness: 0.95, color: 0x8b8f88 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(x2 - x1, z2 - z1), mat);
    m.rotation.x = Math.PI / 2;
    m.position.set((x1 + x2) / 2, y, (z1 + z2) / 2);
    this.scene.add(m);
  }

  wallX(x1, x2, z, scheme = 0, gaps = []) {
    const sorted = gaps.slice().sort((a, b) => a[0] - b[0]);
    let cursor = x1;
    const segs = [];
    for (const [a, b] of sorted) {
      if (a > cursor) segs.push([cursor, a]);
      // lintel
      const lintelMat = this.wallMaterial(scheme, b - a);
      const lintel = box(b - a, WALL_H - 2.3, T_WALL, lintelMat, (a + b) / 2, 2.3 + (WALL_H - 2.3) / 2, z);
      this.scene.add(lintel);
      cursor = b;
    }
    if (cursor < x2) segs.push([cursor, x2]);
    for (const [a, b] of segs) {
      const len = b - a;
      if (len <= 0.01) continue;
      const m = this.wallMaterial(scheme, len);
      const mesh = box(len, WALL_H, T_WALL, m, (a + b) / 2, WALL_H / 2, z);
      this.scene.add(mesh);
      this.addCollider(a, z - T_WALL / 2, b, z + T_WALL / 2, { type: 'wall' });
      // baseboard
      this.scene.add(box(len, 0.14, T_WALL + 0.06, new THREE.MeshStandardMaterial({ color: 0x3f3c32, roughness: 0.7 }), (a + b) / 2, 0.07, z));
    }
  }

  wallZ(z1, z2, x, scheme = 0, gaps = []) {
    const sorted = gaps.slice().sort((a, b) => a[0] - b[0]);
    let cursor = z1;
    const segs = [];
    for (const [a, b] of sorted) {
      if (a > cursor) segs.push([cursor, a]);
      const lintelMat = this.wallMaterial(scheme, b - a);
      this.scene.add(box(T_WALL, WALL_H - 2.3, b - a, lintelMat, x, 2.3 + (WALL_H - 2.3) / 2, (a + b) / 2));
      cursor = b;
    }
    if (cursor < z2) segs.push([cursor, z2]);
    for (const [a, b] of segs) {
      const len = b - a;
      if (len <= 0.01) continue;
      const m = this.wallMaterial(scheme, len);
      this.scene.add(box(T_WALL, WALL_H, len, m, x, WALL_H / 2, (a + b) / 2));
      this.addCollider(x - T_WALL / 2, a, x + T_WALL / 2, b, { type: 'wall' });
    }
  }

  build() {
    this.buildFloors();
    this.buildWalls();
    this.buildDoors();
    decorateCorridor(this);
    for (const room of ROOMS) {
      decorateRoom(this, room);
      // add a ceiling fixture to each room
      this.ceilingLight((room.x1 + room.x2) / 2, (room.z1 + room.z2) / 2, room.big ? 2.0 : 1.4, room);
    }
    this.buildCorridorLights();
    this.buildHideSpots();
    this.buildBodies();
    this.buildExit();
    this.buildOutdoor();
    this.buildNav();
    this.setLighting('day');
    this.spawnRoundItems();
  }

  buildFloors() {
    const corrFloor = T.floor(2).clone();
    corrFloor.repeat.set(14, 1.4);
    this.addFloorRect(-52, -3, 52, 3, new THREE.MeshStandardMaterial({ map: corrFloor, roughness: 0.8 }));
    const backFloor = T.floor(2).clone();
    backFloor.repeat.set(14, 1.4);
    this.addFloorRect(-52, -30, 52, -24, new THREE.MeshStandardMaterial({ map: backFloor, roughness: 0.8 }));
    const wingFloor = T.floor(1).clone();
    wingFloor.repeat.set(2, 8);
    const wingMat = new THREE.MeshStandardMaterial({ map: wingFloor, roughness: 0.8 });
    this.addFloorRect(-58, -30, -52, 3, wingMat);
    const wingFloor2 = wingFloor.clone(); wingFloor2.repeat.set(2, 8);
    this.addFloorRect(52, -30, 58, 3, new THREE.MeshStandardMaterial({ map: wingFloor2, roughness: 0.8 }));
    const cent = T.floor(2).clone(); cent.repeat.set(1, 6);
    this.addFloorRect(-10, -24, -7, -3, new THREE.MeshStandardMaterial({ map: cent, roughness: 0.8 }));
    for (const r of ROOMS) {
      this.addFloorRect(r.x1, r.z1, r.x2, r.z2, this.floorMaterial(r));
      this.addCeilingRect(r.x1, r.z1, r.x2, r.z2);
    }
    this.addCeilingRect(-52, -3, 52, 3);
    this.addCeilingRect(-52, -30, 52, -24);
    this.addCeilingRect(-58, -30, -52, 3);
    this.addCeilingRect(52, -30, 58, 3);
    this.addCeilingRect(-10, -24, -7, -3);
    // door thresholds
    for (const r of ROOMS) {
      const z = r.side === 'south' ? 3 : (r.side === 'back' ? -30 : -3);
      const th = new THREE.Mesh(new THREE.PlaneGeometry(r.door[1] - r.door[0], 0.5), new THREE.MeshStandardMaterial({ map: T.metal(true), roughness: 0.4, metalness: 0.6 }));
      th.rotation.x = -Math.PI / 2;
      th.position.set((r.door[0] + r.door[1]) / 2, 0.012, z);
      this.scene.add(th);
    }
  }

  buildWalls() {
    const northGaps = [
      [-41, -39], [-27, -25], [-15, -13], [-10, -7], [-3, -1],
      [10, 14], [26, 28], [38, 40]
    ];
    const southGaps = [
      [-41, -39], [-25, -22], [-9, -7], [4, 6], [17, 20], [30, 32], [41, 43]
    ];
    const backGaps = [
      [-41, -39], [-29, -27], [-19, -17], [-8, -6], [4, 6], [16, 18], [32, 36]
    ];
    // corridor walls
    this.wallX(-52, 52, -3, 0, northGaps);
    this.wallX(-52, 52, 3, 0, southGaps);
    this.wallX(-52, 52, -24, 0, [[-10, -7]]);
    this.wallX(-52, 52, -30, 0, backGaps);
    // corridor end walls
    this.wallZ(-30, 3, -52, 0, [[-30, -24], [-3, 3], [-24, -3]]);
    this.wallZ(-30, 3, 52, 0, [[-30, -24], [-3, 3], [-24, -3]]);
    // outer bands
    this.wallX(-46, 46, 18, 0, []);
    this.wallX(-46, 46, -44, 0, []);
    // south room sides
    for (const r of ROOMS) {
      if (r.side === 'south') {
        this.wallZ(r.z1, r.z2, r.x1, r.scheme);
        this.wallZ(r.z1, r.z2, r.x2, r.scheme);
      } else if (r.side === 'north') {
        this.wallZ(r.z1, r.z2, r.x1, r.scheme);
        this.wallZ(r.z1, r.z2, r.x2, r.scheme);
      } else {
        this.wallZ(r.z1, r.z2, r.x1, r.scheme);
        this.wallZ(r.z1, r.z2, r.x2, r.scheme);
      }
    }
    // central passage side walls (between seniors and toilets)
    this.wallZ(-24, -3, -10, 0);
    this.wallZ(-24, -3, -7, 0);
    // wing walls
    this.wallZ(-30, 3, -58, 3, []);
    this.wallX(-58, -52, 3, 3, []);
    this.wallX(-58, -52, -30, 3, []);
    this.wallX(52, 58, -30, 3, []);
    // east outer wall with entrance
    this.wallZ(-30, 3, 58, 3, [[EXIT_Z1, EXIT_Z2]]);
    // windows on outer walls (visual)
    this.addWindows();
  }

  addWindows() {
    const glassMat = new THREE.MeshBasicMaterial({ map: T.window() });
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x2b2f2c, roughness: 0.6, metalness: 0.3 });
    const addWin = (x, z, w, faceX) => {
      const g = new THREE.Group();
      const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.7), glassMat);
      g.add(glass);
      g.add(box(w + 0.16, 0.09, 0.12, frameMat, 0, 0.87, 0));
      g.add(box(w + 0.16, 0.09, 0.12, frameMat, 0, -0.87, 0));
      g.add(box(0.08, 1.8, 0.12, frameMat, -w / 2, 0, 0));
      g.add(box(0.08, 1.8, 0.12, frameMat, w / 2, 0, 0));
      g.add(box(0.05, 1.75, 0.1, frameMat, 0, 0, 0.01));
      g.position.set(x, 1.8, z);
      if (faceX) g.rotation.y = faceX;
      this.scene.add(g);
    };
    // east wing exterior wall windows
    this.scene.add(box(0.2, 1.0, 1.6, new THREE.MeshStandardMaterial({ color: 0x1d2a31, roughness: 0.4 }), 58.02, 2.3, -8));
    // north rooms windows on outer wall z=-44
    addWin(-40, -43.86, 2.4);
    addWin(-28, -43.86, 2.2);
    addWin(4, -43.86, 2.4);
    addWin(17, -43.86, 2.0);
    addWin(35, -43.86, 3.0);
    // south rooms windows on outer wall z=18
    addWin(-41, 17.86, 2.2, Math.PI);
    addWin(-25, 17.86, 3.2, Math.PI);
    addWin(6, 17.86, 2.4, Math.PI);
    addWin(18, 17.86, 2.6, Math.PI);
    addWin(31, 17.86, 2.0, Math.PI);
    addWin(42, 17.86, 2.2, Math.PI);
    // classroom 101 west window
    addWin(-13.86, 7, 2.4, Math.PI / 2);
    addWin(-13.86, 12.5, 2.4, Math.PI / 2);
    addWin(45.86, 8, 2.0, -Math.PI / 2);
    addWin(45.86, 13, 2.0, -Math.PI / 2);
    // wing windows
    addWin(-57.86, -12, 2.6, Math.PI / 2);
    addWin(-57.86, -20, 2.6, Math.PI / 2);
    addWin(57.7, -18, 2.2, -Math.PI / 2);
  }

  buildDoors() {
    for (const room of ROOMS) {
      const d = new Door(this, room);
      room.doorObj = d;
      this.doors.push(d);
    }
  }

  buildCorridorLights() {
    const positions = [
      [-46, 0], [-34, 0], [-22, 0], [-10, 0], [2, 0], [14, 0], [26, 0], [38, 0], [49, 0],
      [-46, -27], [-34, -27], [-22, -27], [-10, -27], [2, -27], [14, -27], [26, -27], [38, -27],
      [-55, -6], [-55, -18], [55, -6], [55, -18], [55, -26], [-8.5, -8], [-8.5, -16], [-8.5, -22]
    ];
    for (const [x, z] of positions) {
      const fixture = new THREE.Group();
      const strip = box(1.5, 0.06, 0.24, new THREE.MeshStandardMaterial({ color: 0x1b1f1e, roughness: 0.7 }), 0, 0, 0);
      fixture.add(strip);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1.34, 0.16), new THREE.MeshBasicMaterial({ color: 0xd8e8d8, transparent: true, opacity: 0.8 }));
      panel.rotation.x = Math.PI / 2;
      panel.position.y = -0.035;
      fixture.add(panel);
      fixture.position.set(x, WALL_H - 0.06, z);
      this.scene.add(fixture);
      this.fixtures.push({ mesh: panel, light: null, base: 0.8, phase: Math.random() * 10 });
    }
    // a handful of real corridor lights (kept low for performance)
    for (const [x, z] of [[-34, 0], [-10, 0], [14, 0], [38, 0], [-22, -27], [14, -27]]) {
      const l = new THREE.PointLight(0xffe9c4, 2.2, 12, 2);
      l.position.set(x, 2.9, z);
      this.scene.add(l);
      this.powerLights = this.powerLights || [];
      this.powerLights.push(l);
    }
  }

  ceilingLight(x, z, scale = 1, room = null) {
    const g = new THREE.Group();
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.28, 6), new THREE.MeshStandardMaterial({ color: 0x2a2e2d }));
    c.position.y = -0.14; g.add(c);
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.44 * scale, 0.3 * scale, 0.14, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0x565d59, roughness: 0.65, metalness: 0.4, side: THREE.DoubleSide }));
    shade.position.y = -0.34; g.add(shade);
    const panel = new THREE.Mesh(new THREE.CircleGeometry(0.28 * scale, 12), new THREE.MeshBasicMaterial({ color: 0xfff2d8 }));
    panel.rotation.x = Math.PI / 2; panel.position.y = -0.41; g.add(panel);
    g.position.set(x, WALL_H - 0.04, z);
    this.scene.add(g);
    this.fixtures.push({ mesh: panel, light: null, base: 1.0, phase: Math.random() * 10, room: room?.id });
  }

  buildHideSpots() {
    // toilet stalls
    const t = this.roomById.toilets;
    for (let i = 0; i < 5; i++) {
      const x = -6.1 + i * 1.35;
      const spot = { type: 'stall', name: 'stall', x, z: -21.8, enterX: x, enterZ: -20.1, yaw: Math.PI, occupied: false };
      this.hidespots.push(spot);
    }
    // corridor lockers
    const lockers = [
      { x: -30, z: -2.4, ex: -30, ez: -1.55, yaw: Math.PI },
      { x: -19, z: -2.4, ex: -19, ez: -1.55, yaw: Math.PI },
      { x: 7.5, z: 2.4, ex: 7.5, ez: 1.55, yaw: 0 },
      { x: 33.5, z: -2.4, ex: 33.5, ez: -1.55, yaw: Math.PI },
      { x: -44, z: 2.4, ex: -44, ez: 1.55, yaw: 0 }
    ];
    for (const l of lockers) {
      this.hidespots.push({ type: 'locker', name: 'locker', x: l.x, z: l.z, enterX: l.ex, enterZ: l.ez, yaw: l.yaw, occupied: false });
    }
    // visual locker banks at those spots
    for (const l of lockers) {
      const bank = makeLockerBank(3, 10 + Math.floor(Math.random() * 60));
      const horiz = Math.abs(l.z) > 2;
      bank.position.set(l.x, 0, l.z + (l.z > 0 ? 0.22 : -0.22));
      bank.rotation.y = l.z > 0 ? Math.PI : 0;
      this.scene.add(bank);
    }
  }

  buildBodies() {
    const spots = [
      [-30, 0.2, 0.4, 0x3e5a75], [-18, -0.8, 1.1, 0x7a4c4c], [-4, 0.9, 2.4, 0x445d46],
      [12, -0.4, 0.3, 0x5d4d6e], [22, 1.2, 1.8, 0x715c3e], [36, 0.3, 2.9, 0x3f5660],
      [55, -0.7, 1.2, 0x66504a], [-42, -27.3, 0.6, 0x4a5c68], [-6, -27.4, 2.2, 0x6b4d55],
      [18, -26.9, 1.4, 0x3f4a5b]
    ];
    for (let i = 0; i < spots.length; i++) {
      const [x, z, rot, shirt] = spots[i];
      const p = makePerson({ shirt, pants: 0x242a35, skin: [0xc79b7d, 0x8a5a3c, 0xd9b08e, 0x6b4630][i % 4], hair: 0x241c17, height: 1.0 });
      p.rotation.z = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      p.rotation.y = rot;
      p.position.set(x, 0.2, z);
      p.traverse(o => { if (o.isMesh) o.castShadow = false; });
      this.bodyGroup.add(p);
      // comedic prop
      if (i % 3 === 0) {
        const phone = box(0.09, 0.015, 0.16, new THREE.MeshBasicMaterial({ color: 0xd8f6ff }), 0.35, 0.03, 0.55);
        phone.rotation.y = Math.random() * 3;
        p.add(phone);
      }
      if (i % 4 === 1) {
        const duck = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), new THREE.MeshStandardMaterial({ color: 0xffcc33, roughness: 0.5 }));
        duck.position.set(-0.2, 0.62, 0.4);
        p.add(duck);
      }
    }
    this.bodyGroup.visible = false;
    // scattered papers
    const paperMat = new THREE.MeshStandardMaterial({ map: T.paper(), roughness: 0.9, side: THREE.DoubleSide });
    for (let i = 0; i < 60; i++) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.29), paperMat);
      p.rotation.x = -Math.PI / 2; p.rotation.z = Math.random() * 7;
      const inBack = Math.random() < 0.3;
      p.position.set(-48 + Math.random() * 96, 0.013, inBack ? -29 + Math.random() * 5 : -2.5 + Math.random() * 5);
      this.bodyGroup.add(p);
    }
  }

  buildExit() {
    const gate = new THREE.Group();
    const shutterMat = new THREE.MeshStandardMaterial({ color: 0x4b5559, roughness: 0.5, metalness: 0.6, map: T.metal() });
    const shutter = box(0.14, 3.0, EXIT_Z2 - EXIT_Z1, shutterMat, SCHOOL_E, 1.5, 0);
    gate.add(shutter);
    gate.add(box(0.2, 0.12, EXIT_Z2 - EXIT_Z1 + 0.4, new THREE.MeshStandardMaterial({ color: 0x272c2d, metalness: 0.6, roughness: 0.4 }), SCHOOL_E, 3.05, 0));
    // EXIT sign above
    const exitLabel = makeLabel('EXIT', { color: '#a9ffbe', bg: 'rgba(5,40,18,.92)', size: 256, h: 90, font: 'bold 58px Arial Black' });
    exitLabel.scale.set(1.6, 0.55, 1); exitLabel.position.set(SCHOOL_E - 0.3, 3.25, 0); gate.add(exitLabel);
    // number 8 plate
    const plate = makeSignPlane('8', 0.6, 0.5, '#ff4455');
    plate.rotation.y = -Math.PI / 2;
    plate.position.set(SCHOOL_E - 0.2, 1.7, 0.4);
    gate.add(plate);
    // wooden barricade
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e4c2b, roughness: 0.9 });
    for (let i = 0; i < 5; i++) {
      const plank = box(0.16, 0.3, 4.6, woodMat, SCHOOL_E - 0.14, 0.45 + i * 0.58, (i % 2 ? 0.12 : -0.12));
      plank.rotation.x = (i % 2 ? 0.06 : -0.05);
      gate.add(plank);
      this.exit.planks.push(plank);
    }
    const line = box(0.18, 0.1, 4.3, new THREE.MeshStandardMaterial({ color: 0x3c2a18, roughness: 0.9 }), SCHOOL_E - 0.16, 1.65, 0);
    gate.add(line);
    gate.userData.cullSkip = true;
    this.scene.add(gate);
    this.exit.group = gate;
    this.exit.shutter = shutter;
    this.exit.plate = plate;
    const c = this.addCollider(SCHOOL_E - 0.2, EXIT_Z1, SCHOOL_E + 0.2, EXIT_Z2, { type: 'exit' });
    this.exit.collider = c;
    // outside vestibule lights
    const lamp = new THREE.PointLight(0x9fd8ff, 4, 11, 2);
    lamp.position.set(60.5, 3.1, 0);
    this.scene.add(lamp);
    this.outdoorLamp = lamp;
  }

  buildOutdoor() {
    const g = new THREE.Group();
    // ground
    const asphalt = new THREE.MeshStandardMaterial({ map: T.asphalt(), roughness: 0.95 });
    const lot = new THREE.Mesh(new THREE.PlaneGeometry(78, 26), asphalt);
    lot.rotation.x = -Math.PI / 2; lot.position.set(97, -0.02, 0); g.add(lot);
    const grassMat = new THREE.MeshStandardMaterial({ map: T.grass(), roughness: 1 });
    const grass = new THREE.Mesh(new THREE.PlaneGeometry(78, 10), grassMat);
    grass.rotation.x = -Math.PI / 2; grass.position.set(97, -0.03, 13); g.add(grass);
    const grass2 = grass.clone(); grass2.position.z = -13; g.add(grass2);
    // road markings
    for (let i = 0; i < 11; i++) {
      const line = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.22), new THREE.MeshBasicMaterial({ color: 0xb9b28a }));
      line.rotation.x = -Math.PI / 2; line.position.set(70 + i * 5.5, 0.01, -4.8); g.add(line);
    }
    // sidewalk
    const walk = new THREE.Mesh(new THREE.PlaneGeometry(78, 2.6), new THREE.MeshStandardMaterial({ color: 0x6f726b, roughness: 0.9 }));
    walk.rotation.x = -Math.PI / 2; walk.position.set(97, 0.0, 2.5); g.add(walk);
    // school facade exterior (visual)
    const brick = new THREE.MeshStandardMaterial({ map: T.brick(), roughness: 0.9 });
    g.add(box(0.6, 7.5, 33, brick, 58.4, 3.7, -13));
    // flat roof so the school reads as a whole block from the lot
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x262b30, roughness: 0.96 });
    g.add(box(120, 0.5, 64, roofMat, 0, 7.62, -13));
    g.add(box(121, 0.16, 65, new THREE.MeshStandardMaterial({ color: 0x333a40, roughness: 0.9 }), 0, 7.92, -13));
    // lit classroom windows along the east face
    const winGlass = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffc27a, emissiveIntensity: 1.5, roughness: 0.4 });
    const winFrame = new THREE.MeshStandardMaterial({ color: 0x20262a, roughness: 0.7, metalness: 0.2 });
    for (const z of [-25, -20, -15.5, -6.5, 5.6]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.9), winGlass);
      win.position.set(58.72, 4.6, z);
      win.rotation.y = Math.PI / 2;
      g.add(win);
      g.add(box(0.1, 2.1, 0.1, winFrame, 58.7, 4.6, z - 1.15));
      g.add(box(0.1, 2.1, 0.1, winFrame, 58.7, 4.6, z + 1.15));
      g.add(box(0.1, 0.1, 2.4, winFrame, 58.7, 5.62, z));
      g.add(box(0.1, 0.1, 2.4, winFrame, 58.7, 3.58, z));
      g.add(box(0.1, 1.9, 0.06, winFrame, 58.71, 4.6, z));
    }
    const canopy = box(3.2, 0.22, 7, new THREE.MeshStandardMaterial({ color: 0x2f3739, roughness: 0.55, metalness: 0.3 }), 60.2, 3.5, 0);
    g.add(canopy);
    for (const z of [-2.8, 2.8]) g.add(box(0.18, 3.4, 0.18, new THREE.MeshStandardMaterial({ color: 0x2a3032, metalness: 0.6, roughness: 0.4 }), 61.7, 1.7, z));
    const schoolSign = makeLabel('MILLBROOK HIGH', { color: '#cfd8c8', bg: 'rgba(8,12,10,.9)', size: 512, h: 110, font: 'bold 52px Courier New' });
    schoolSign.scale.set(6, 1.3, 1); schoolSign.position.set(58.8, 5.3, 0); schoolSign.rotation.y = Math.PI / 2; g.add(schoolSign);
    // cars
    const carSpots = [[66, 8, 0x354a52, 0], [72, 8, 0x5a3030, 0], [85, 7.5, 0x3f4650, 0], [95, -8, 0x4b4b55, Math.PI], [74, -8, 0x384f45, Math.PI]];
    for (const [x, z, c, ry] of carSpots) {
      const car = makeCar(c); car.position.set(x, 0, z); car.rotation.y = ry; g.add(car);
      this.addCollider(x - 1.1, z - 2.2, x + 1.1, z + 2.2, { type: 'car' });
    }
    // streetlights
    for (const [x, z] of [[68, 3.1], [88, 3.1], [108, 3.1], [120, -3.1]]) {
      const sl = makeStreetlight(); sl.position.set(x, 0, z); if (z < 0) sl.rotation.y = Math.PI; g.add(sl);
    }
    const streetGlow1 = new THREE.PointLight(0xffd9a0, 9, 20, 2); streetGlow1.position.set(88, 5.8, 0); g.add(streetGlow1);
    const streetGlow2 = new THREE.PointLight(0xffd9a0, 9, 20, 2); streetGlow2.position.set(112, 5.8, 0); g.add(streetGlow2);
    // dumpster
    const dump = makeDumpster(); dump.position.set(63, 0, 5.4); dump.rotation.y = 0.4; g.add(dump);
    this.addCollider(61.6, 4.6, 64.4, 6.4, { type: 'dumpster' });
    // fence
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x2b3032, metalness: 0.5, roughness: 0.6 });
    for (let x = 58; x <= 140; x += 2.2) {
      if (x < 62) continue;
      g.add(box(0.06, 1.8, 0.06, fenceMat, x, 0.9, 12));
      g.add(box(0.06, 1.8, 0.06, fenceMat, x, 0.9, -12));
    }
    for (const z of [-12, 12]) {
      g.add(box(82, 0.05, 0.05, fenceMat, 99, 1.7, z));
      g.add(box(82, 0.05, 0.05, fenceMat, 99, 0.9, z));
    }
    this.addCollider(58, 11.7, 140, 12.3, { type: 'fence' });
    this.addCollider(58, -12.3, 140, -11.7, { type: 'fence' });
    // police station
    const police = makePoliceStation();
    police.position.set(134, 0, 0);
    police.rotation.y = -Math.PI / 2;
    g.add(police);
    this.addCollider(129.3, -8.5, 139, 8.5, { type: 'police' });
    const policeGlow = new THREE.PointLight(0x9fd0ff, 16, 26, 2);
    policeGlow.position.set(130.5, 4.5, 0); g.add(policeGlow);
    // police parking lights
    this.scene.add(g);
    this.outdoorGroup = g;
    this.outdoor = { start: { x: 62, z: 0 }, killerStart: { x: 59.2, z: 0 }, police: { x: 133.2, z: 0 }, minX: 58, maxX: 134 };
    // outdoor floor bounds colliders to keep in lane
    this.addCollider(58, 12.4, 134, 14, { type: 'bound' });
    this.addCollider(58, -14, 134, -12.4, { type: 'bound' });
  }

  // ── nav graph ─────────────────────────────────────────────────
  addNav(x, z) {
    const n = { x, z, id: this.navNodes.length, edges: [] };
    this.navNodes.push(n);
    return n;
  }

  buildNav() {
    // main corridor
    for (let x = -48; x <= 48; x += 6) this.addNav(x, 0);
    // back corridor
    for (let x = -48; x <= 48; x += 6) this.addNav(x, -27);
    // wings
    for (let z = -27; z <= 0; z += 5.4) { this.addNav(-55, z); this.addNav(55, z); }
    this.addNav(-55, -14); this.addNav(55, -14);
    // central passage
    for (const z of [-2, -7, -12, -17, -22, -27]) this.addNav(-8.5, z);
    // rooms
    for (const r of ROOMS) {
      const cx = (r.x1 + r.x2) / 2, cz = (r.z1 + r.z2) / 2;
      let oz, iz;
      if (r.side === 'north') { oz = -1.6; iz = -4.6; }
      else if (r.side === 'south') { oz = 1.6; iz = 4.6; }
      else { oz = -28.4; iz = -31.6; }
      this.addNav((r.door[0] + r.door[1]) / 2, oz);
      this.addNav((r.door[0] + r.door[1]) / 2, iz);
      this.addNav(cx, cz);
      this.addNav(r.x1 + 2.3, r.z1 + 2.3);
      this.addNav(r.x2 - 2.3, r.z1 + 2.3);
      this.addNav(r.x1 + 2.3, r.z2 - 2.3);
      this.addNav(r.x2 - 2.3, r.z2 - 2.3);
    }
    // outside
    for (let x = 60; x <= 132; x += 6) this.addNav(x, 0);
    // edges
    for (let i = 0; i < this.navNodes.length; i++) {
      for (let j = i + 1; j < this.navNodes.length; j++) {
        const a = this.navNodes[i], b = this.navNodes[j];
        const d = Math.hypot(a.x - b.x, a.z - b.z);
        if (d > 11) continue;
        if (this.segmentHitsWall(a.x, a.z, b.x, b.z, true)) continue;
        const e = { a: i, b: j, d };
        this.navEdges.push(e);
        a.edges.push(e); b.edges.push(e);
      }
    }
  }

  segmentHitsWall(ax, az, bx, bz, ignoreDoors = false) {
    for (const c of this.colliders) {
      if (!c.enabled || !c.sight) continue;
      if (ignoreDoors && c.type === 'door') continue;
      if (segmentAABB(ax, az, bx, bz, c)) return true;
    }
    return false;
  }

  navEdgeBlocked(edge) {
    const a = this.navNodes[edge.a], b = this.navNodes[edge.b];
    if (this.exit.collider.enabled && segmentAABB(a.x, a.z, b.x, b.z, this.exit.collider)) return true;
    for (const d of this.doors) {
      if (!d.collider.enabled) continue;
      if (segmentAABB(a.x, a.z, b.x, b.z, d.collider)) return true;
    }
    return false;
  }

  nearestNode(x, z) {
    let best = null, bd = 1e9;
    for (const n of this.navNodes) {
      const d = (n.x - x) ** 2 + (n.z - z) ** 2;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }

  findPath(fromX, fromZ, toX, toZ) {
    const start = this.nearestNode(fromX, fromZ);
    const goal = this.nearestNode(toX, toZ);
    if (!start || !goal) return null;
    if (start === goal) return [{ x: toX, z: toZ }];
    const dist = new Float32Array(this.navNodes.length).fill(Infinity);
    const prev = new Int32Array(this.navNodes.length).fill(-1);
    const visited = new Uint8Array(this.navNodes.length);
    dist[start.id] = 0;
    // simple binary heap
    const heap = [[0, start.id]];
    const push = (p) => {
      heap.push(p); let i = heap.length - 1;
      while (i > 0) { const par = (i - 1) >> 1; if (heap[par][0] <= heap[i][0]) break; [heap[par], heap[i]] = [heap[i], heap[par]]; i = par; }
    };
    const pop = () => {
      const top = heap[0]; const last = heap.pop();
      if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[i], heap[m]] = [heap[m], heap[i]]; i = m; } }
      return top;
    };
    while (heap.length) {
      const [, id] = pop();
      if (visited[id]) continue;
      visited[id] = 1;
      if (id === goal.id) break;
      for (const e of this.navNodes[id].edges) {
        if (this.navEdgeBlocked(e)) continue;
        const other = e.a === id ? e.b : e.a;
        const nd = dist[id] + e.d;
        if (nd < dist[other]) {
          dist[other] = nd;
          prev[other] = id;
          push([nd, other]);
        }
      }
    }
    if (!visited[goal.id]) return null;
    const path = [];
    let cur = goal.id;
    while (cur !== -1) { path.push({ x: this.navNodes[cur].x, z: this.navNodes[cur].z }); cur = prev[cur]; }
    path.reverse();
    // skip the first node (we are already near it)
    if (path.length > 1) path.shift();
    path.push({ x: toX, z: toZ });
    return path;
  }

  // ── collision & sight ────────────────────────────────────────
  resolveCircle(pos, radius) {
    for (let pass = 0; pass < 3; pass++) {
      let moved = false;
      for (const c of this.colliders) {
        if (!c.enabled) continue;
        const cx = clamp(pos.x, c.x1, c.x2);
        const cz = clamp(pos.z, c.z1, c.z2);
        let dx = pos.x - cx, dz = pos.z - cz;
        let d2 = dx * dx + dz * dz;
        if (d2 < radius * radius) {
          if (d2 < 1e-8) {
            const l = pos.x - c.x1, r = c.x2 - pos.x, t = pos.z - c.z1, b = c.z2 - pos.z;
            const m = Math.min(l, r, t, b);
            if (m === l) pos.x = c.x1 - radius;
            else if (m === r) pos.x = c.x2 + radius;
            else if (m === t) pos.z = c.z1 - radius;
            else pos.z = c.z2 + radius;
          } else {
            const d = Math.sqrt(d2);
            const push = (radius - d) / d;
            pos.x += dx * push;
            pos.z += dz * push;
          }
          moved = true;
        }
      }
      if (!moved) break;
    }
    pos.x = clamp(pos.x, -75, 141);
    pos.z = clamp(pos.z, -52, 20);
    return pos;
  }

  losBlocked(ax, az, bx, bz) {
    for (const c of this.colliders) {
      if (!c.enabled || !c.sight) continue;
      if (segmentAABB(ax, az, bx, bz, c)) return true;
    }
    return false;
  }

  // ── lighting ─────────────────────────────────────────────────
  setupLights() {
    this.hemi = new THREE.HemisphereLight(0x8fa8b8, 0x232a25, 0.9);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0x6f7d76, 0.32);
    this.scene.add(this.ambient);
    this.moon = new THREE.DirectionalLight(0x9fb8d8, 1.1);
    this.moon.position.set(-20, 38, -12);
    this.scene.add(this.moon);
    // emergency lights
    this.emergency = [];
    for (const [x, z] of [[-30, 0], [0, 0], [30, 0], [-20, -27], [20, -27], [-55, -12], [55, -12], [58.5, 0]]) {
      const l = new THREE.PointLight(0xff3344, 0, 14, 2);
      l.position.set(x, 2.85, z);
      this.scene.add(l);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), new THREE.MeshBasicMaterial({ color: 0x5a0a10 }));
      bulb.position.set(x, 2.95, z);
      this.scene.add(bulb);
      this.emergency.push({ light: l, bulb });
    }
    this.lightState = 'day';
    this.setLighting('day');
  }

  setLighting(state) {
    this.lightState = state;
    if (!this.hemi) return;
    const t = this.renderer;
    if (state === 'day') {
      this.hemi.intensity = 1.15; this.hemi.color.set(0xdfe8dd);
      this.ambient.intensity = 0.55;
      this.moon.intensity = 1.2;
      this.scene.background = new THREE.Color(0x9fb3c2);
      this.scene.fog.color.set(0x9aa89a);
      this.scene.fog.density = 0.006;
      this.setFixturePower(true, 0.9);
      for (const e of this.emergency) { e.light.intensity = 0; e.bulb.material.color.set(0x5a0a10); }
    } else if (state === 'lockdown') {
      this.hemi.intensity = 0.42; this.hemi.color.set(0x7f9cb8);
      this.ambient.intensity = 0.27;
      this.moon.intensity = 0.72;
      this.scene.background = new THREE.Color(0x05080d);
      this.scene.fog.color.set(0x060a10);
      this.scene.fog.density = 0.032;
      this.setFixturePower(false, 0);
      for (const e of this.emergency) { e.light.intensity = 1.4; e.bulb.material.color.set(0xff2637); }
    } else if (state === 'power') {
      this.hemi.intensity = 0.4; this.hemi.color.set(0xa8bcc4);
      this.ambient.intensity = 0.22;
      this.moon.intensity = 0.45;
      this.scene.background = new THREE.Color(0x070b10);
      this.scene.fog.color.set(0x080d12);
      this.scene.fog.density = 0.028;
      this.setFixturePower(true, 0.55);
      for (const e of this.emergency) { e.light.intensity = 0.1; e.bulb.material.color.set(0x5a0a10); }
    } else if (state === 'dark') {
      this.hemi.intensity = 0.12; this.ambient.intensity = 0.06;
      this.moon.intensity = 0.25;
      this.scene.background = new THREE.Color(0x03060a);
      this.scene.fog.color.set(0x03060a);
      this.scene.fog.density = 0.05;
      this.setFixturePower(false, 0);
      for (const e of this.emergency) e.light.intensity = 0.25;
    } else if (state === 'outside') {
      this.hemi.intensity = 0.45; this.hemi.color.set(0x6c88a8);
      this.ambient.intensity = 0.2;
      this.moon.intensity = 1.0; this.moon.position.set(-30, 50, -30);
      this.scene.background = new THREE.Color(0x0a1424);
      this.scene.fog.color.set(0x060a14);
      this.scene.fog.density = 0.018;
      this.setFixturePower(false, 0);
      for (const e of this.emergency) e.light.intensity = 0.3;
    }
  }

  setFixturePower(on, intensity = 1) {
    for (const f of this.fixtures) {
      if (f.mesh && f.mesh.material) {
        f.mesh.material.color.set(on ? 0xfff2d8 : 0x232820);
      }
    }
    if (this.powerLights) for (const l of this.powerLights) l.intensity = on ? 2.4 * intensity : 0;
  }

  // ── round setup / items ──────────────────────────────────────
  roomSpots(room) {
    const { x1, x2, z1, z2 } = room;
    return [
      [x1 + 2.2, z1 + 2.2], [x2 - 2.2, z1 + 2.2], [x1 + 2.2, z2 - 2.2],
      [x2 - 2.2, z2 - 2.2], [(x1 + x2) / 2, (z1 + z2) / 2],
      [x1 + 2.2, (z1 + z2) / 2], [x2 - 2.2, (z1 + z2) / 2]
    ];
  }

  addItem(kind, x, z, extra = {}) {
    let mesh;
    if (kind === 'key') mesh = makeKeyModel(extra.keyId);
    else if (kind === 'crowbar') mesh = makeCrowbarModel();
    else if (kind === 'battery') mesh = makeBatteryModel();
    else if (kind === 'note') mesh = makeNoteModel();
    else mesh = makeMedkitModel();
    const g = new THREE.Group();
    g.add(mesh);
    const glow = makeGlow(extra.keyId ? '#ffd166' : '#8dffb2', kind === 'key' ? 1.0 : 0.75);
    g.add(glow);
    let label = null;
    if (kind === 'key') {
      label = makeLabel('KEY ' + extra.keyId, { color: '#ffd166', bg: 'rgba(20,14,2,.82)', size: 256, h: 64, font: 'bold 32px Courier New' });
      label.position.y = 0.62; label.scale.set(1.05, 0.26, 1); g.add(label);
    }
    if (kind === 'crowbar') {
      label = makeLabel('CROWBAR', { color: '#ffb066', bg: 'rgba(18,8,2,.82)', size: 256, h: 64, font: 'bold 28px Courier New' });
      label.position.y = 0.6; label.scale.set(1.1, 0.28, 1); g.add(label);
    }
    g.position.set(x, 1.05, z);
    this.itemGroup.add(g);
    const item = { kind, x, z, y: 1.05, mesh: g, base: mesh, label, data: extra, picked: false, id: this.items.length, phase: Math.random() * 6.28 };
    this.items.push(item);
    if (kind === 'key') this.keyItems.push(item);
    if (kind === 'note') this.notes.push(item);
    if (kind === 'battery') this.batteries.push(item);
    if (kind === 'medkit') this.medkits.push(item);
    if (kind === 'crowbar') this.crowbarItem = item;
    return item;
  }

  spawnRoundItems() {
    // lock 7 random eligible rooms
    const eligible = shuffle(ROOMS.filter(r => r.eligible)).slice(0, 7);
    const labels = shuffle([1, 2, 3, 4, 5, 6, 7]);
    this.lockedRooms = eligible.map((r, i) => {
      r.doorObj.setLocked(labels[i]);
      r.lockLabel = labels[i];
      return r;
    });
    this.doorByLabel = {};
    for (const r of this.lockedRooms) this.doorByLabel[r.lockLabel] = r.doorObj;

    // key 1 spawns in the corridor outside Classroom 101
    this.addItem('key', -8, 2.05, { keyId: 1 });
    // keys 2..8 inside the keyed rooms
    for (const r of this.lockedRooms) {
      const spots = shuffle(this.roomSpots(r));
      const [x, z] = spots[0];
      if (r.lockLabel < 8) {
        this.addItem('key', x, z, { keyId: r.lockLabel + 1 });
      }
    }
    // crowbar: random hard-to-find spot in an unlocked room
    const spots = [
      ['cafeteria', -29, 15.2], ['cafeteria', -17.6, 4.6], ['gym', 18.5, -21.5],
      ['gym', 4.5, -4.8], ['toilets', -5.8, -22.3], ['storage', 29.5, -22.3],
      ['boiler', -44.4, -42.4], ['janitor', -31, -42.5], ['faculty', 8.4, -42],
      ['auditorium', 43, -42.2], ['auditorium', 25.4, -30.9], ['av', 44.2, -22.3],
      ['seniors', -16.8, -22.3], ['corridor', -47, 2.2], ['corridor', 44, -2.2]
    ];
    const lockedSet = new Set(this.lockedRooms.map(r => r.id));
    const valid = spots.filter(([id]) => id === 'corridor' || !lockedSet.has(id));
    const pick = valid[(Math.random() * valid.length) | 0];
    this.crowbarItem = this.addItem('crowbar', pick[1], pick[2]);
    this.crowbarRoom = pick[0];
    // notes
    const noteSpots = [
      [-11.8, 16.6], [-31, 16.4], [15.6, 16.6], [8.6, 16.4], [-43, -40.6],
      [35.6, -40.4], [-9, -22.2], [30, -22.2], [44, -6.2]
    ];
    shuffle(noteSpots).slice(0, 7).forEach(([x, z]) => this.addItem('note', x, z));
    // batteries
    const batSpots = [[3, -22], [19, -5], [-30, -5], [44, -41], [27, 16], [-3, -40], [53, -24], [-12, -4.2]];
    shuffle(batSpots).slice(0, 6).forEach(([x, z]) => this.addItem('battery', x, z));
    // medkits
    [[-43, 5.6], [4.6, -21.8], [7.4, -42.2]].forEach(([x, z]) => this.addItem('medkit', x, z));
  }

  // ── exit actions ─────────────────────────────────────────────
  unlockExit() {
    if (this.exit.unlocked) return false;
    this.exit.unlocked = true;
    if (this.exit.plate) this.exit.plate.material.color.set('#8dffb2');
    if (this.audio) this.audio.unlock();
    return true;
  }

  pryExit() {
    if (!this.exit.unlocked || !this.exit.barricaded) return false;
    this.exit.barricaded = false;
    for (const p of this.exit.planks) {
      p.userData.remove = true;
    }
    this.exit.collider.enabled = false;
    this.exit.open = true;
    if (this.audio) this.audio.door();
    return true;
  }

  // ── updates ──────────────────────────────────────────────────
  update(dt) {
    this.time += dt;
    for (const d of this.doors) d.update(dt);
    if (this.exit.open) {
      this.exit.shutter.position.y = Math.min(4.7, this.exit.shutter.position.y + dt * 1.6);
    }
    for (const p of this.exit.planks) {
      if (p.userData.remove) {
        p.position.y += dt * 2.5;
        p.rotation.z += dt * 1.4;
        p.rotation.x += dt * 1.2;
        if (p.position.y > 4) p.visible = false;
      }
    }
    for (const it of this.items) {
      if (it.picked) continue;
      it.mesh.position.y = it.y + Math.sin(this.time * 1.8 + it.phase) * 0.08;
      it.base.rotation.y += dt * (it.kind === 'key' ? 1.4 : 0.7);
      if (it.label) it.label.material.opacity = 0.72 + Math.sin(this.time * 3 + it.phase) * 0.2;
    }
    // flicker lights
    if (this.lightState === 'lockdown' || this.lightState === 'power') {
      for (let i = 0; i < this.fixtures.length; i += 7) {
        const f = this.fixtures[i];
        if (!f.mesh) continue;
        const on = Math.sin(this.time * 9 + f.phase) > 0.92;
        f.mesh.material.opacity = 0.6;
        if (on) f.mesh.material.color.set(0x40463a);
      }
    }
    if (this.lightState === 'lockdown') {
      for (const e of this.emergency) {
        const pulse = 0.6 + Math.abs(Math.sin(this.time * 1.4 + e.bulb.position.x)) * 0.6;
        e.light.intensity = 1.2 * pulse;
      }
    }
    // clocks
    if (this.clockHands) {
      this.clockHands[0].rotation.z = -this.time * 0.05;
      this.clockHands[1].rotation.z = -this.time * 0.6;
    }
    // dust
    if (this.dust) {
      this.dust.rotation.y += dt * 0.008;
      this.dust.position.y = Math.sin(this.time * 0.1) * 0.1;
    }
  }

  setBodiesVisible(v) {
    this.bodiesVisible = v;
    this.bodyGroup.visible = v;
  }

  nearestHide(x, z, maxDist = 2.2) {
    let best = null, bd = maxDist;
    for (const h of this.hidespots) {
      const d = Math.hypot(h.enterX - x, h.enterZ - z);
      if (d < bd && !h.occupied) { bd = d; best = h; }
    }
    return best;
  }

  nearestItem(x, z, ignorePicked = true) {
    let best = null, bd = 2.2;
    for (const it of this.items) {
      if (it.picked && ignorePicked) continue;
      const d = Math.hypot(it.x - x, it.z - z);
      if (d < bd) { bd = d; best = it; }
    }
    return best;
  }

  nearestDoor(x, z, maxDist = 2.4) {
    let best = null, bd = maxDist;
    for (const d of this.doors) {
      const cx = (d.collider.x1 + d.collider.x2) / 2;
      const cz = (d.collider.z1 + d.collider.z2) / 2;
      const dist = Math.hypot(cx - x, cz - z);
      if (dist < bd) { bd = dist; best = d; }
    }
    return best;
  }

  autoOpenDoors(x, z, radius = 1.6) {
    let opened = false;
    for (const d of this.doors) {
      if (d.locked || d.open) continue;
      const cx = (d.collider.x1 + d.collider.x2) / 2;
      const cz = (d.collider.z1 + d.collider.z2) / 2;
      if (Math.hypot(cx - x, cz - z) < radius) { d.setOpen(true); opened = true; }
    }
    return opened;
  }
}
