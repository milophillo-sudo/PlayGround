import * as THREE from 'three';
import {
  createSky, createMoon, createGround, createRoad, createForest, createFernPatch,
  createPineTree, createTruck, createTruckInterior, createSedan, createBrokenAirplane,
  createSchool, createSchoolBus, createBuilding, createStorefront, createSkeleton,
  createStreetLamp, createFencePanel, createCrate, createTrashPile, createShoppingCart,
  createAsh, createRain, createFlies, bloodDecal, textPlane, blobShadow, box, cyl, plane, MAT,
  tagShadows
} from './models.js';
import { TimCharacter } from './characters.js';
import {
  watchSignTexture, sprayPlankTexture, storeSignTexture, smallSignTexture,
  canvasTex, mulberry32, woodTexture, glowTexture, chainlinkMaterial,
  grassTexture, dirtTexture, labelTexture
} from './textures.js';

/* ================================================================== *
 *  shared environment helpers
 * ================================================================== */
export function makeEnvironment(scene, {
  fog = 0x151c18, fogDensity = 0.018, bg = null,
  top = 0x0b1519, horizon = 0x9c6d4b, ground = 0x131711, sunColor = 0xffb885,
  sunDir = [0.4, 0.08, -1], sunSize = 0.0018, haze = 0.7, stars = 0,
  ambient = 0.55, hemiSky = 0x8d9a87, hemiGround = 0x22251b, dirColor = 0xffc79a,
  dirIntensity = 2.1, dirPos = [26, 34, 18], shadows = true,
} = {}) {
  scene.fog = new THREE.FogExp2(fog, fogDensity);
  if (bg !== null) scene.background = new THREE.Color(bg);
  const sky = createSky({ top, horizon, ground, sunColor, sunDir, sunSize, haze, stars });
  scene.add(sky);
  const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, ambient);
  scene.add(hemi);
  const dir = new THREE.DirectionalLight(dirColor, dirIntensity);
  dir.position.set(...dirPos);
  dir.castShadow = shadows;
  if (shadows) {
    dir.shadow.mapSize.set(1024, 1024);
    dir.shadow.camera.near = 1;
    dir.shadow.camera.far = 100;
    dir.shadow.camera.left = -32; dir.shadow.camera.right = 32;
    dir.shadow.camera.top = 32; dir.shadow.camera.bottom = -32;
    dir.shadow.bias = -0.0006;
    dir.shadow.normalBias = 0.03;
  }
  scene.add(dir);
  scene.add(dir.target);
  return { sky, hemi, dir };
}

function signBoard(texture, w, h) {
  const g = new THREE.Group();
  const board = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.12), new THREE.MeshStandardMaterial({ map: woodTexture({ seed: 5 }), roughness: 0.95 }));
  g.add(board);
  const face = plane(w * 0.98, h * 0.96, new THREE.MeshStandardMaterial({ map: texture, roughness: 0.82, emissive: 0x1a120a, emissiveIntensity: 0.06 }), 0, 0, 0.075); 
  g.add(face); g.userData.face = face;
  return g;
}

/* ================================================================== *
 *  Main menu world
 * ================================================================== */
export function buildMenuWorld(scene) {
  const env = makeEnvironment(scene, {
    fog: 0x0e1714, fogDensity: 0.024,
    top: 0x071017, horizon: 0x9b6242, ground: 0x0b100d,
    sunColor: 0xffa566, sunDir: [-0.12, 0.045, -1], sunSize: 0.0032, haze: 1.05,
    ambient: 0.5, dirColor: 0xffa86e, dirIntensity: 2.3, dirPos: [18, 22, 8],
    hemiSky: 0x6e8179, hemiGround: 0x181c14,
  });
  // road
  const road = createRoad(240, 8.4);
  scene.add(road);
  const ground = createGround(260, MAT.dirt);
  ground.position.y = -0.02;
  scene.add(ground);
  const ferns1 = createFernPatch(420, 8, 46); ferns1.position.set(-4, 0, 2); scene.add(ferns1);
  const ferns2 = createFernPatch(300, 9, 34); ferns2.position.set(5, 0, -5); scene.add(ferns2);

  // forest
  const forest = createForest({ count: 190, seed: 42, radius: 68, roadWidth: 8.4, minZ: -95, maxZ: 45 });
  scene.add(forest);
  // hero trees near the road
  for (const [x, z, s] of [[-8.4, 4.5, 1.15], [7.2, 1.5, 1.0], [-10, -10, 1.3], [9.5, -14, 0.9], [-7.6, -20, 1.05]]) {
    const tree = createPineTree(s);
    tree.position.set(x, 0, z);
    scene.add(tree);
  }

  // watch out sign
  const sign = new THREE.Group();
  sign.position.set(4.9, 0, -3.6);
  sign.rotation.y = -0.16;
  const postMat = new THREE.MeshStandardMaterial({ map: woodTexture({ seed: 2 }), roughness: 0.95 });
  for (const x of [-1.55, 1.55]) {
    const p = box(0.14, 3.5, 0.14, postMat, x, 1.75, 0);
    p.rotation.z = x < 0 ? 0.02 : -0.025; sign.add(p);
  }
  const board = signBoard(watchSignTexture(), 3.5, 1.75);
  board.position.set(0, 2.5, 0.06); board.rotation.z = -0.035;
  sign.add(board);
  // nails
  for (const [x, y] of [[-1.5, 2.85], [1.5, 2.85], [-1.5, 2.1], [1.5, 2.1]]) {
    const nail = cyl(0.035, 0.04, 0.03, MAT.darkMetal, 6, x, y, 0.16); nail.rotation.x = Math.PI / 2; sign.add(nail);
  }
  // little hooded work lamp above the sign
  const lampBox = box(0.5, 0.2, 0.28, MAT.darkMetal, 0, 3.72, 0.05); sign.add(lampBox);
  const lampFace = box(0.36, 0.05, 0.2, new THREE.MeshStandardMaterial({ color: 0xffe0b0, emissive: 0xffb45d, emissiveIntensity: 2.8 }), 0, 3.61, 0.08); sign.add(lampFace);
  const signLight = new THREE.PointLight(0xffc384, 16, 10, 2);
  signLight.position.set(0, 3.5, 1.2); sign.add(signLight);
  scene.add(sign);

  // abandoned car on the left shoulder
  const car = createSedan({ rustColor: 0x5a4439 });
  car.group.position.set(-5.4, 0, 1.8);
  car.group.rotation.y = 1.37;
  car.group.rotation.z = -0.03;
  car.fog.visible = false;
  car.sleeve.visible = false;
  car.skeleton.visible = false;
  scene.add(car.group);

  // streetlamp further down the road, flickering
  const lamp = createStreetLamp({ height: 7, light: true, color: 0xffb36a, intensity: 30 });
  lamp.position.set(-5.6, 0, -16);
  lamp.rotation.y = Math.PI;
  scene.add(lamp);

  // moon
  const moon = createMoon(24, 0xd9ddc2, 0.75);
  moon.position.set(17, 9.5, -74);
  scene.add(moon);

  // dust
  const ash = createAsh({ count: 520, area: 48, height: 16, color: 0xc2b89c, size: 0.035, seed: 6 });
  scene.add(ash.points);
  const flies = createFlies({ count: 26, area: 6, center: [-5.4, 1.5, 1.8] });
  scene.add(flies.points);

  // faint monster silhouette behind the tree line
  const monster = createMonsterSilhouette();
  monster.position.set(-13, 0, -33);
  monster.rotation.y = 0.5;
  monster.scale.set(1.4, 1.4, 1.4);
  scene.add(monster);
  monster.visible = false;

  const camera = new THREE.PerspectiveCamera(46, 16 / 9, 0.1, 700);
  camera.position.set(0.6, 1.75, 16);
  const look = new THREE.Vector3(1.8, 1.7, -4);

  let flicker = 0;
  const update = (dt, t) => {
    camera.position.x = 0.45 + Math.sin(t * 0.055) * 2.2;
    camera.position.y = 1.66 + Math.sin(t * 0.21) * 0.035;
    camera.position.z = 14.6 - Math.sin(t * 0.045) * 1.1;
    const sway = Math.sin(t * 0.07) * 0.6;
    look.set(1.5 + sway, 1.62 + Math.sin(t * 0.11) * 0.06, -5);
    camera.lookAt(look);
    ash.update(dt, t);
    flies.update(dt, t);
    if (t > flicker) {
      flicker = t + 2.5 + Math.random() * 6;
      lamp.children.forEach(c => {
        if (c.isPointLight) c.intensity = Math.random() > 0.4 ? 26 : 4;
        if (c.isSprite) c.material.opacity = Math.random() > 0.4 ? 0.55 : 0.1;
      });
    }
    sign.rotation.z = Math.sin(t * 0.6) * 0.002;
    if (Math.sin(t * 0.11) > 0.994) {
      monster.visible = true;
      monster.position.x = -13 + Math.sin(t * 0.4) * 0.3;
    } else if (Math.sin(t * 0.13) > 0.985) {
      monster.visible = false;
    }
  };
  return { camera, update, env, sign, moon, car };
}

export function createMonsterSilhouette() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x0a0c09, roughness: 1 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff5a32, emissive: 0xff3b12, emissiveIntensity: 3 });
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.45, 2.1, 4, 7), mat); torso.position.y = 2.3; torso.scale.z = 0.6; g.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.36, 7, 6), mat); head.scale.set(0.8, 1.3, 0.9); head.position.y = 3.75; g.add(head);
  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 2.5, 3, 6), mat);
    arm.position.set(s * 0.55, 2.0, 0); arm.rotation.z = s * 0.2; g.add(arm);
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 2.0, 3, 6), mat);
    leg.position.set(s * 0.25, 0.9, 0); g.add(leg);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 5), eyeMat);
    eye.position.set(s * 0.12, 3.82, 0.29); g.add(eye);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,70,30,1)', 'rgba(255,40,10,0)'), transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(s * 0.12, 3.82, 0.3); glow.scale.set(0.4, 0.4, 1); g.add(glow);
  }
  return g;
}

/* ================================================================== *
 *  Furniture store compound (shared by chapter intro + gameplay)
 * ================================================================== */
export function buildFurnitureCompound(scene, { cutscene = false } = {}) {
  const root = new THREE.Group();
  scene.add(root);

  // night sky + ambient moonlight so the lot reads on every display
  const env = makeEnvironment(scene, {
    fog: 0x111a17, fogDensity: 0.017,
    top: 0x070e15, horizon: 0x8a6248, ground: 0x0a0e0b,
    sunColor: 0xffb283, sunDir: [-0.22, 0.06, -1], sunSize: 0.0026, haze: 0.85,
    ambient: 0.62, dirColor: 0xffb888, dirIntensity: 1.55, dirPos: [-20, 28, 12],
    hemiSky: 0x7d8b80, hemiGround: 0x191d14, stars: 0.6,
  });

  /* ---- ground & road ---- */
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(62, 44), new THREE.MeshStandardMaterial({ map: (() => { const t = MAT.asphalt.map.clone(); t.repeat.set(5, 4); t.needsUpdate = true; return t; })(), roughness: 0.97 }));
  lot.rotation.x = -Math.PI / 2;
  lot.position.set(0, 0.005, -4.5);
  lot.receiveShadow = true;
  root.add(lot);
  const road = createRoad(240, 8.4);
  road.position.set(0, 0, 30);
  root.add(road);
  const surround = createGround(240, MAT.dirt);
  surround.position.y = -0.04;
  root.add(surround);
  // sidewalk in front of store
  const walkMat = new THREE.MeshStandardMaterial({ map: MAT.concrete.map.clone(), roughness: 0.95 });
  walkMat.map.repeat.set(8, 1);
  const walk = box(44, 0.16, 4.2, walkMat, 0, 0.08, -14.8);
  walk.receiveShadow = true; root.add(walk);
  const curb = box(44, 0.22, 0.3, MAT.concreteDark, 0, 0.11, -12.62); root.add(curb);
  // faded parking spaces
  const paint = new THREE.MeshStandardMaterial({ color: 0xc2b181, roughness: 0.9, transparent: true, opacity: 0.28 });
  for (let i = -2; i <= 2; i++) {
    const stripe = box(0.12, 0.01, 4.6, paint, i * 6.4, 0.02, 2.4); root.add(stripe);
  }

  /* ---- store building ---- */
  const building = new THREE.Group();
  root.add(building);
  const body = box(44, 10.2, 24, MAT.yellow, 0, 5.1, -29.1);
  body.castShadow = true; body.receiveShadow = true; building.add(body);
  // concrete base + parapet
  building.add(box(44.4, 0.9, 24.3, MAT.concreteDark, 0, 0.45, -29.1));
  building.add(box(44.6, 0.55, 24.6, MAT.concrete, 0, 10.15, -29.1));
  building.add(box(44.7, 0.3, 0.5, MAT.concreteDark, 0, 10.5, -16.8));
  // vertical pilasters
  for (const x of [-22.1, -8.4, 8.4, 22.1]) building.add(box(0.6, 9.8, 0.6, MAT.concrete, x, 4.9, -16.85));

  // storefront recess
  building.add(box(15.5, 5.2, 0.4, MAT.concreteDark, 0, 3.0, -16.85));
  // entrance frame
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x2b2e2a, metalness: 0.55, roughness: 0.45 });
  building.add(box(5.4, 3.9, 0.22, frameMat, 0, 2.0, -16.66));
  building.add(box(5.0, 3.5, 0.06, new THREE.MeshStandardMaterial({ color: 0x3b2e1e, roughness: 0.85 }), 0, 2.0, -16.55));
  // interior glow rectangle behind doors
  const glowMat = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffb45d, emissiveIntensity: 0.9, roughness: 0.9 });
  building.add(box(4.4, 1.4, 0.04, glowMat, 0, 3.1, -16.54));

  // glass doors (two panels)
  const doors = new THREE.Group();
  doors.position.set(0, 0, -16.5);
  const doorGlass = new THREE.MeshPhysicalMaterial({ color: 0x8fb0a6, transparent: true, opacity: 0.32, roughness: 0.06, metalness: 0.15, side: THREE.DoubleSide, depthWrite: false });
  for (const s of [-1, 1]) {
    const hinge = new THREE.Group();
    hinge.position.set(s * 2.15, 0, 0);
    hinge.userData.side = s;
    const dFrame = box(0.12, 3.5, 0.14, frameMat, -s * 0.08, 1.85, 0); hinge.add(dFrame);
    for (const yy of [0.15, 3.55]) hinge.add(box(2.05, 0.12, 0.12, frameMat, -s * 1.06, yy, 0));
    hinge.add(box(0.09, 3.4, 0.07, frameMat, -s * 2.04, 1.85, 0));
    const pane = plane(1.92, 3.3, doorGlass, -s * 1.06, 1.85, 0.02); pane.rotation.y = Math.PI; hinge.add(pane);
    const handle = box(0.06, 0.7, 0.08, MAT.metal, -s * 1.78, 1.8, 0.1); hinge.add(handle);
    const kick = box(1.9, 0.3, 0.1, MAT.metal, -s * 1.06, 0.31, 0.05); hinge.add(kick);
    doors.add(hinge);
  }
  building.add(doors);
  // door decal
  const decal = plane(0.55, 0.8, new THREE.MeshStandardMaterial({ map: smallSignTexture('PUSH', '', { w: 256, h: 256, bg: '#d9d0b8', fg: '#2f332b', size: 92, seed: 33 }), roughness: 0.7 }), 1.0, 1.65, -16.53);
  decal.rotation.y = Math.PI; building.add(decal);

  // big store windows
  for (const s of [-1, 1]) {
    const gx = s * 13.9;
    building.add(box(9.6, 4.4, 0.18, frameMat, gx, 3.2, -16.8));
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x4a6a64, transparent: true, opacity: 0.5, roughness: 0.12, metalness: 0.2, side: THREE.DoubleSide, depthWrite: false });
    const win = plane(9.1, 3.9, glass, gx, 3.2, -16.68); building.add(win);
    // mullions
    for (let i = -1; i <= 1; i++) building.add(box(0.1, 4.0, 0.12, frameMat, gx + i * 3.0, 3.2, -16.66));
    // posters inside glass
    const posterTex = smallSignTexture(s < 0 ? 'SALE' : 'LIQUIDATION', s < 0 ? 'UP TO 70% OFF' : 'EVERYTHING MUST GO', { bg: '#c6b48a', fg: '#8f2b21', seed: 22 + s });
    const poster = plane(1.6, 2.1, new THREE.MeshStandardMaterial({ map: posterTex, roughness: 0.85 }), gx + 1.8 * s, 3.0, -16.6);
    poster.rotation.y = Math.PI; building.add(poster);
  }

  // store sign
  const signTex = storeSignTexture();
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, emissive: 0x5a4025, emissiveMap: signTex, emissiveIntensity: 0.5, roughness: 0.7 });
  const storeSign = plane(30, 4.5, signMat, 0, 9.0, -16.72);
  building.add(storeSign);
  const signBack = box(30.4, 4.9, 0.18, MAT.concreteDark, 0, 9.0, -16.82); building.add(signBack);
  // sign lights
  for (const x of [-10, 0, 10]) {
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,200,130,1)', 'rgba(255,150,70,0)'), transparent: true, opacity: 0.3, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(x, 11.4, -15.9); glow.scale.set(4, 2.4, 1); root.add(glow);
  }
  const entranceLight = new THREE.PointLight(0xffc988, 32, 20, 2);
  entranceLight.position.set(0, 4.2, -14.2); root.add(entranceLight);
  const signLight = new THREE.PointLight(0xffbd7a, 24, 24, 2);
  signLight.position.set(0, 10.6, -13.8); root.add(signLight);

  // roof details
  for (const [x, z] of [[-10, -26], [4, -31], [15, -24]]) {
    root.add(box(2.6, 1.2, 2.0, MAT.metal, x, 10.8, z));
    root.add(box(2.0, 0.15, 0.4, MAT.darkMetal, x, 11.5, z));
  }
  // vent stack
  root.add(cyl(0.35, 0.4, 2.0, MAT.metal, 8, 19, 11, -33));

  /* ---- interior (visible through windows) ---- */
  const interior = new THREE.Group();
  root.add(interior);
  const floor = box(42, 0.08, 22, MAT.concrete, 0, 0.1, -29.2); interior.add(floor);
  interior.add(box(42, 4.2, 0.2, MAT.yellow, 0, 2.1, -40.2));
  interior.add(box(0.2, 4.2, 22, MAT.yellow, -21, 2.1, -29.2));
  interior.add(box(0.2, 4.2, 22, MAT.yellow, 21, 2.1, -29.2));
  interior.add(box(42, 0.2, 22, MAT.concreteDark, 0, 4.1, -29.2));
  // warm hanging lights
  for (const x of [-12, 0, 12]) {
    const wire = cyl(0.01, 0.01, 1.6, MAT.black, 4, x, 3.2, -24); interior.add(wire);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.3, 8, 1, true), MAT.darkMetal);
    shade.position.set(x, 2.4, -24); interior.add(shade);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffe1b0, emissive: 0xffb45d, emissiveIntensity: 2.2 });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), bulbMat);
    bulb.position.set(x, 2.3, -24); interior.add(bulb);
    const l = new THREE.PointLight(0xffc27a, 18, 16, 2); l.position.set(x, 2.3, -24); interior.add(l);
  }
  // furniture silhouettes
  const furnMat = new THREE.MeshStandardMaterial({ color: 0x3c352b, roughness: 0.95 });
  const furnMat2 = new THREE.MeshStandardMaterial({ color: 0x54483a, roughness: 0.95 });
  for (let i = 0; i < 5; i++) {
    const couch = new THREE.Group();
    couch.add(box(3.2, 0.5, 1.2, i % 2 ? furnMat : furnMat2, 0, 0.42, 0));
    couch.add(box(3.2, 0.8, 0.3, i % 2 ? furnMat : furnMat2, 0, 0.85, -0.5));
    couch.add(box(0.3, 0.6, 1.2, i % 2 ? furnMat : furnMat2, -1.45, 0.65, 0));
    couch.add(box(0.3, 0.6, 1.2, i % 2 ? furnMat : furnMat2, 1.45, 0.65, 0));
    couch.position.set(-14 + i * 7, 0, -21 - (i % 2) * 5); couch.rotation.y = (i % 3 - 1) * 0.3; interior.add(couch);
  }
  for (const [x, z] of [[7, -34], [-8, -32], [13, -27]]) {
    const table = new THREE.Group();
    table.add(box(1.5, 0.1, 1.0, furnMat2, 0, 0.74, 0));
    for (const [sx, sz] of [[-0.6, -0.4], [0.6, -0.4], [-0.6, 0.4], [0.6, 0.4]]) table.add(box(0.08, 0.74, 0.08, furnMat, sx, 0.37, sz));
    table.position.set(x, 0, z); interior.add(table);
  }
  // big rug rolls
  for (let i = 0; i < 4; i++) {
    const roll = cyl(0.24, 0.24, 2.4, new THREE.MeshStandardMaterial({ color: [0x5d4b38, 0x3e4a44, 0x6a4a3c, 0x4b4639][i], roughness: 1 }), 8, -16 + i * 0.6, 0.35, -36 + i * 0.1);
    roll.rotation.z = Math.PI / 2; interior.add(roll);
  }
  // counter
  interior.add(box(5, 1.1, 1.1, furnMat2, 6, 0.55, -30));
  interior.add(box(5.2, 0.1, 1.2, MAT.darkMetal, 6, 1.12, -30));
  // scattered debris inside
  const inTrash = createTrashPile(31); inTrash.position.set(-5, 0, -24); interior.add(inTrash);
  const inTrash2 = createTrashPile(37); inTrash2.position.set(14, 0, -33); interior.add(inTrash2);

  /* ---- fence & gate ---- */
  const fence = new THREE.Group(); root.add(fence);
  const fenceZ = 12;
  // panels: left long, left short, right long
  const addPanel = (x, width) => {
    const p = createFencePanel(width, 2.9);
    p.position.set(x, 0, fenceZ);
    fence.add(p);
  };
  addPanel(-20.35, 19.3); // -30 .. -10.7
  addPanel(-7.1, 4.2);    // -9.2 .. -5
  addPanel(17.5, 25);     // 5 .. 30
  // hole edges
  for (const x of [-10.7, -9.2]) {
    const post = cyl(0.07, 0.08, 3.05, MAT.darkMetal, 6, x, 1.5, fenceZ);
    fence.add(post);
  }
  // torn wire flaps
  const tornMat = chainlinkMaterial(); tornMat.map = tornMat.map.clone(); tornMat.map.repeat.set(0.8, 1.2); tornMat.map.needsUpdate = true;
  for (let i = 0; i < 3; i++) {
    const flap = plane(0.5, 0.7, tornMat, -10 + (i - 1) * 0.42, 0.8 + i * 0.15, fenceZ + 0.04);
    flap.rotation.z = (i - 1) * 0.5; flap.rotation.x = 0.2 + i * 0.1;
    fence.add(flap);
  }
  // bent wire loops
  for (let i = 0; i < 6; i++) {
    const wire = new THREE.Mesh(new THREE.TorusGeometry(0.07 + Math.random() * 0.05, 0.008, 4, 8, Math.PI * 1.2), MAT.metal);
    wire.position.set(-10.3 + Math.random() * 0.8, 0.2 + Math.random() * 0.9, fenceZ + 0.05);
    wire.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    fence.add(wire);
  }
  // side fences
  for (const s of [-1, 1]) {
    for (let i = 0; i < 6; i++) {
      const p = createFencePanel(5, 2.9);
      p.position.set(s * 29.5, 0, fenceZ - 2.5 - i * 5);
      p.rotation.y = Math.PI / 2;
      fence.add(p);
    }
  }

  // gate
  const gate = new THREE.Group(); gate.position.set(0, 0, fenceZ); root.add(gate);
  const gateFrameMat = MAT.darkMetal;
  for (const s of [-1, 1]) {
    const post = cyl(0.12, 0.14, 3.4, gateFrameMat, 8, s * 5.1, 1.7, 0); gate.add(post);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.28, 8), MAT.rust); cap.position.set(s * 5.1, 3.5, 0); gate.add(cap);
  }
  const gatePanelL = new THREE.Group(); gate.add(gatePanelL);
  for (const s of [-1, 1]) {
    const rail = box(5.0, 0.08, 0.08, gateFrameMat, s * 2.5, 0, 0); gatePanelL.add(rail);
  }
  for (let i = 0; i < 10; i++) gatePanelL.add(box(0.05, 2.7, 0.05, gateFrameMat, -4.8 + i * 1.06, 1.35, 0));
  // plywood warning board
  const warning = new THREE.Group(); warning.position.set(0, 1.65, 0.16); gate.add(warning);
  const warnMat = new THREE.MeshStandardMaterial({ map: sprayPlankTexture(), roughness: 0.88 });
  const warnBoard = box(10.2, 2.5, 0.12, warnMat, 0, 0, 0);
  warning.add(warnBoard);
  // backing frame + diagonal planks
  warning.add(box(10.4, 0.14, 0.2, MAT.wood, 0, -1.2, -0.1));
  warning.add(box(10.4, 0.14, 0.2, MAT.wood, 0, 1.2, -0.1));
  const brace1 = box(10.4, 0.16, 0.08, MAT.wood, 0, -0.5, -0.14); brace1.rotation.z = 0.19; warning.add(brace1);
  const brace2 = box(10.4, 0.16, 0.08, MAT.wood, 0, 0.55, -0.14); brace2.rotation.z = -0.17; warning.add(brace2);
  // extra planks nailed across opening behind board
  for (let i = 0; i < 3; i++) {
    const plank = box(10.4, 0.24, 0.09, MAT.wood, 0, 0.7 + i * 0.7, -0.2);
    plank.rotation.z = (i - 1) * 0.035; gate.add(plank);
  }
  // gate floodlight from a bent pole
  const floodPole = cyl(0.06, 0.08, 4.4, MAT.darkMetal, 6, 5.9, 2.2, 0.6); gate.add(floodPole);
  const floodArm = box(1.2, 0.07, 0.07, MAT.darkMetal, 5.4, 4.35, 0.6); gate.add(floodArm);
  const flood = box(0.42, 0.24, 0.3, MAT.metal, 4.85, 4.22, 0.6); gate.add(flood);
  const floodFace = box(0.32, 0.04, 0.2, new THREE.MeshStandardMaterial({ color: 0xffe2b4, emissive: 0xffbd76, emissiveIntensity: 3 }), 4.85, 4.08, 0.65); gate.add(floodFace);
  const floodLight = new THREE.SpotLight(0xffc68a, 110, 24, 0.55, 0.55, 1.6);
  floodLight.position.set(4.8, 4.1, 1.0); floodLight.target.position.set(0, 1.2, 0); gate.add(floodLight, floodLight.target);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,210,150,1)', 'rgba(255,160,80,0)'), transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.position.set(4.85, 4.1, 0.7); glow.scale.set(3.4, 3.4, 1); gate.add(glow);

  // hidden gap tutorial marker / rag
  const rag = box(0.45, 0.7, 0.03, MAT.rag, -9.55, 0.45, fenceZ + 0.08); rag.rotation.z = 0.2; fence.add(rag);
  // dirt path to hole
  const pathMat = new THREE.MeshStandardMaterial({ map: (() => { const t = dirtTexture().clone(); t.repeat.set(2, 3); t.needsUpdate = true; return t; })(), roughness: 1 });
  const path = box(2.6, 0.02, 9, pathMat, -10, 0.03, 16.5); path.rotation.y = 0.03; root.add(path);

  /* ---- props / trash ---- */
  const r = mulberry32(1804);
  // abandoned cars
  const car1 = createSedan({ rustColor: 0x5e4a3c }); car1.group.position.set(-15.5, 0, 2.2); car1.group.rotation.y = 0.35; car1.fog.visible = false; car1.sleeve.visible = false; root.add(car1.group);
  const car2 = createSedan({ rustColor: 0x3f4946 }); car2.group.position.set(16.5, 0, -4.0); car2.group.rotation.y = -1.1; car2.fog.visible = false; car2.sleeve.visible = false; root.add(car2.group);
  const car3 = createSedan({ rustColor: 0x6d3e30 }); car3.group.position.set(23.2, 0, 7.2); car3.group.rotation.y = 2.6; car3.group.rotation.z = 0.06; car3.fog.visible = false; car3.sleeve.visible = false; root.add(car3.group);

  // carts
  const cart1 = createShoppingCart(); cart1.position.set(5.5, 0, -10.8); cart1.rotation.y = 0.8; root.add(cart1);
  const cart2 = createShoppingCart(); cart2.position.set(-7.2, 0, -7.5); cart2.rotation.y = 2.3; cart2.rotation.z = 1.45; cart2.position.y = 0.4; root.add(cart2);

  // trash piles
  for (const [x, z, s] of [[-17, -10, 1], [8.5, -9, 1.2], [19, 1, 0.9], [-6, 5, 0.8], [12, 8, 1.1], [-21, 6, 1.3], [2.5, -8.5, 0.8], [-12, 6.5, 0.9]]) {
    const p = createTrashPile(Number(x * 13 + z * 7 + 100)); p.position.set(x, 0, z); p.scale.setScalar(s); root.add(p);
  }
  // papers & cans scattered
  for (let i = 0; i < 44; i++) {
    const paper = new THREE.Mesh(new THREE.PlaneGeometry(0.16 + r() * 0.25, 0.2 + r() * 0.3), MAT.paper);
    paper.rotation.x = -Math.PI / 2; paper.rotation.z = r() * 6.28;
    paper.position.set(-25 + r() * 50, 0.035, -11 + r() * 22);
    paper.receiveShadow = true; root.add(paper);
  }
  for (let i = 0; i < 26; i++) {
    const can = cyl(0.045, 0.045, 0.12, r() > 0.5 ? MAT.metal : MAT.rust, 7, -24 + r() * 48, 0.07, -10 + r() * 20);
    can.rotation.z = Math.PI / 2; can.rotation.y = r() * 6;
    root.add(can);
  }
  // bottles
  for (let i = 0; i < 12; i++) {
    const bottleMat = new THREE.MeshPhysicalMaterial({ color: 0x2e4a35, transparent: true, opacity: 0.72, roughness: 0.18, metalness: 0.1 });
    const b = new THREE.Group();
    const bd = cyl(0.055, 0.055, 0.24, bottleMat, 8, 0, 0.12, 0); b.add(bd);
    const neck = cyl(0.022, 0.04, 0.14, bottleMat, 8, 0, 0.29, 0); b.add(neck);
    b.position.set(-18 + r() * 36, 0, -8 + r() * 18); b.rotation.z = Math.PI / 2 * (r() > 0.5 ? 1 : 0); b.rotation.y = r() * 6;
    root.add(b);
  }
  // mattress + pallet + tires
  const mattress = new THREE.Group();
  const mattressMat = new THREE.MeshStandardMaterial({ color: 0x6e6552, roughness: 1 });
  mattress.add(box(2.4, 0.28, 1.4, mattressMat, 0, 0.15, 0));
  for (let i = 0; i < 5; i++) mattress.add(box(2.2, 0.02, 0.06, MAT.rag, 0, 0.29, -0.5 + i * 0.25));
  mattress.position.set(-3.5, 0, -6.3); mattress.rotation.y = 0.4; mattress.rotation.z = 0.05; root.add(mattress);
  for (const [x, z, rot] of [[-18, 8, 0.4], [18, 9.5, 1.2], [21, -11, 0.7]]) {
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.14, 6, 12), MAT.rubber);
    tire.rotation.x = -Math.PI / 2; tire.rotation.z = rot; tire.position.set(x, 0.15, z); root.add(tire);
  }
  for (let i = 0; i < 4; i++) {
    const pallet = box(1.1, 0.08, 1.1, MAT.woodLight, -20 + r() * 4, 0.1 + i * 0.09, -4 - r() * 3);
    pallet.rotation.y = r(); root.add(pallet);
  }
  // dumpster at right side
  const dumpster = new THREE.Group();
  dumpster.add(box(2.4, 1.5, 1.4, new THREE.MeshStandardMaterial({ color: 0x3c4b3d, roughness: 0.8, metalness: 0.3 }), 0, 0.75, 0));
  const lid = box(2.5, 0.1, 1.5, MAT.metal, 0, 1.55, -0.1); lid.rotation.x = -0.18; dumpster.add(lid);
  dumpster.position.set(24.5, 0, -13.5); dumpster.rotation.y = 0.2; root.add(dumpster);
  // dumpster trash
  const dtrash = createTrashPile(88); dtrash.position.set(24, 0, -12.5); root.add(dtrash);
  // cable spool
  const spool = new THREE.Group();
  for (const y of [0.12, 0.85]) {
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.08, 14), MAT.wood);
    disc.position.y = y; spool.add(disc);
  }
  spool.add(cyl(0.3, 0.3, 0.65, MAT.wood, 10, 0, 0.48, 0));
  spool.position.set(-20.5, 0, -3.5); root.add(spool);

  // boxes + vent for alternate route (west side)
  const boxStack = new THREE.Group();
  const b1 = createCrate(1.3); b1.position.set(0, 0.52, 0); boxStack.add(b1);
  const b2 = createCrate(1.1); b2.position.set(-0.15, 1.3, 0.15); b2.rotation.y = 0.18; boxStack.add(b2);
  const b3 = createCrate(0.9); b3.position.set(0.1, 2.0, -0.1); b3.rotation.y = -0.2; boxStack.add(b3);
  const b4 = createCrate(1.0); b4.position.set(1.1, 0.4, 0.7); b4.rotation.y = 0.4; boxStack.add(b4);
  boxStack.position.set(-24.2, 0, -27.2); root.add(boxStack);
  // pallets to climb
  const palletClimb = box(1.4, 0.2, 1.0, MAT.woodLight, -24.0, 0.1, -25.9); palletClimb.rotation.y = 0.1; root.add(palletClimb);
  // vent on west wall
  const vent = new THREE.Group(); vent.position.set(-22.02, 2.35, -27.2); root.add(vent);
  const ventFrame = box(0.08, 1.4, 1.9, MAT.darkMetal, 0, 0, 0); vent.add(ventFrame);
  const ventInner = box(0.04, 1.1, 1.55, MAT.black, -0.01, 0, 0); vent.add(ventInner);
  for (let i = 0; i < 6; i++) {
    const slat = box(0.09, 0.06, 1.6, MAT.metal, 0.02, -0.5 + i * 0.2, 0);
    slat.rotation.x = 0.3; vent.add(slat);
  }
  // a shaft of light / dust near vent
  const ventLight = new THREE.PointLight(0xffb266, 8, 6, 2); ventLight.position.set(-23, 3.0, -27.2); root.add(ventLight);
  const ventMarker = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,190,120,1)', 'rgba(255,140,60,0)'), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  ventMarker.position.set(-23.3, 3.3, -27.2); ventMarker.scale.set(3, 3, 1); root.add(ventMarker);

  // note nailed to crate: "SERVICE"
  const serviceSign = plane(0.8, 0.4, new THREE.MeshStandardMaterial({ map: smallSignTexture('SERVICE', '', { w: 512, h: 256, bg: '#b7aa86', fg: '#3b3a2d', size: 120, seed: 45 }), roughness: 0.9 }), -23.8, 1.8, -26.4);
  serviceSign.rotation.y = -Math.PI / 2; root.add(serviceSign);

  // grass and weeds
  const grass1 = createFernPatch(600, 21, 46); grass1.position.set(0, 0, 14); root.add(grass1);
  const grass2 = createFernPatch(250, 22, 26); grass2.position.set(-24, 0, -20); root.add(grass2);
  const grass3 = createFernPatch(220, 23, 22); grass3.position.set(20, 0, -16); root.add(grass3);
  // dead tree outside fence
  const deadTree = createPineTree(1.3, true); deadTree.position.set(19, 0, 18.5); root.add(deadTree);

  // skeletons tucked against the wall
  const sk1 = createSkeleton({ pose: 'slumped' }); sk1.position.set(9.7, 0, -15.6); sk1.rotation.y = -0.3; sk1.scale.setScalar(0.94); root.add(sk1);
  const sk2 = createSkeleton({ pose: 'lying' }); sk2.position.set(-18.5, 0, 5.7); sk2.rotation.y = 0.6; sk2.scale.setScalar(0.9); root.add(sk2);
  const blood = bloodDecal(1.6, 1.2); blood.position.set(9.8, 0.05, -14.2); root.add(blood);

  // street lamps
  const lamp1 = createStreetLamp({ height: 6.5, light: true, color: 0xffb36a, intensity: 34 });
  lamp1.position.set(-16, 0, 6); lamp1.rotation.y = Math.PI; root.add(lamp1);
  const lamp2 = createStreetLamp({ height: 6.5, light: true, color: 0xffb36a, intensity: 22 });
  lamp2.position.set(15, 0, 7.5); lamp2.rotation.y = 0.2; root.add(lamp2);

  // monster on the roof, mostly hidden
  const monster = createMonsterSilhouette();
  monster.position.set(13, 10.1, -33.5);
  monster.scale.set(1.12, 1.12, 1.12);
  monster.visible = false;
  root.add(monster);

  // background forest outside
  const forest = createForest({ count: 120, seed: 91, radius: 52, roadWidth: 8, minZ: -70, maxZ: 18 });
  root.add(forest);

  // ash / dust
  const ash = createAsh({ count: 700, area: 55, height: 18, color: 0xb3ab92, size: 0.045, seed: 17 });
  root.add(ash.points);

  // signage on fence
  const noEntry = plane(1.4, 0.9, new THREE.MeshStandardMaterial({ map: smallSignTexture('NO ENTRY', '', { w: 512, h: 320, bg: '#b2a787', fg: '#6b201a', size: 120, seed: 51 }), roughness: 0.9 }), -8.1, 1.7, fenceZ + 0.06);
  root.add(noEntry);

  // vents / fog light
  const lamps = [lamp1, lamp2];
  let flicker = 0;
  const animate = (dt, t) => {
    ash.update(dt, t);
    if (t > flicker) {
      flicker = t + 1.8 + Math.random() * 5;
      for (const lamp of lamps) {
        lamp.children.forEach(c => {
          if (c.isPointLight) c.intensity = Math.random() > 0.25 ? c.intensity : 2;
        });
      }
    }
    // monster tease every ~24 seconds
    const cycle = t % 32;
    monster.visible = cycle > 23 && cycle < 27.5;
    if (monster.visible) {
      monster.position.y = 10.1 + Math.sin(t * 2.2) * 0.03;
      monster.rotation.y = Math.sin(t * 0.5) * 0.15;
    }
    ventMarker.material.opacity = 0.12 + Math.sin(t * 2) * 0.05;
    signLight.intensity = 20 + Math.sin(t * 8) * 3 + Math.sin(t * 31) * 2;
  };

  const colliders = [
    { minX: -22.4, maxX: 22.4, minZ: -42, maxZ: -16.9, name: 'store' },
    { minX: -16.9, maxX: -14.1, minZ: 0.7, maxZ: 3.8, name: 'car1' },
    { minX: 15.2, maxX: 17.9, minZ: -5.2, maxZ: -2.7, name: 'car2' },
    { minX: -25.6, maxX: -22.8, minZ: -28.5, maxZ: -25.8, name: 'boxes' },
    { minX: 23.2, maxX: 25.8, minZ: -14.4, maxZ: -12.5, name: 'dumpster' },
  ];

  return {
    env, root, building, doors, gate, boxStack, vent, ventMarker, monster,
    signLight, entranceLight, floodLight, ash, animate, colliders,
    spawn: new THREE.Vector3(0, 0, 22),
    bounds: { minX: -27.6, maxX: 27.6, minZ: -38.5, maxZ: 26.5 },
    gateZ: 12, holeX: -10, holeHalf: 0.8,
    doorTrigger: new THREE.Vector3(0, 0, -14.2),
    ventTrigger: new THREE.Vector3(-24.2, 0, -26.0),
    cutscene,
    dispose() {
      scene.remove(root);
      root.traverse(o => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
        }
      });
    }
  };
}

/* ================================================================== *
 *  Cutscene: truck interior
 * ================================================================== */
export function buildTruckInteriorScene(scene) {
  const env = makeEnvironment(scene, {
    fog: 0x2b3633, fogDensity: 0.045, top: 0x6d7d78, horizon: 0xa08d72, ground: 0x34392f,
    sunColor: 0xd7c29e, sunDir: [0.4, 0.35, -0.8], sunSize: 0.01, haze: 0.35, ambient: 0.4,
    dirColor: 0xb9c1a8, dirIntensity: 1.0, dirPos: [10, 16, 4], hemiSky: 0x8a9991, hemiGround: 0x2a2c24,
  });
  const cab = createTruckInterior();
  cab.position.set(0, 0, 0);
  scene.add(cab);

  // outside world through windshield
  const ground = createGround(80, MAT.dirt); ground.position.set(0, -0.2, 20); scene.add(ground);
  const outsideRoad = new THREE.Mesh(new THREE.PlaneGeometry(9, 50), MAT.asphalt);
  outsideRoad.rotation.x = -Math.PI / 2; outsideRoad.position.set(0, -0.18, 22); scene.add(outsideRoad);
  const forest = createForest({ count: 80, seed: 5, radius: 28, roadWidth: 5, minZ: 6, maxZ: 42 });
  scene.add(forest);
  for (const [x, z, s] of [[-5.6, 9, 0.8], [5.4, 12, 0.7], [-7, 19, 1], [7.5, 24, 0.9]]) {
    const tree = createPineTree(s); tree.position.set(x, -0.2, z); scene.add(tree);
  }
  // windshield glass
  const glass = plane(2.0, 0.85, new THREE.MeshPhysicalMaterial({ color: 0x9fb2a9, transparent: true, opacity: 0.09, roughness: 0.05, metalness: 0.2, side: THREE.DoubleSide, depthWrite: false }), 0, 1.55, 1.62);
  glass.rotation.x = -0.28; scene.add(glass);

  const tim = new TimCharacter(); tim.setSeated(true); tim.group.position.set(-0.55, 0.02, -0.55); tim.group.rotation.y = 0; scene.add(tim.group);
  // can in left hand and spoon in right hand
  const can = cyl(0.075, 0.075, 0.15, MAT.metal, 10); can.rotation.x = Math.PI / 2; can.position.set(0, -0.31, -0.02); tim.parts.armL.elbow.add(can);
  const label = cyl(0.078, 0.078, 0.1, new THREE.MeshStandardMaterial({ map: labelTexture('BEANS\nDAY 47', { bg: '#b5402a', fg: '#e4dcc0' }), roughness: 0.7 }), 10); label.rotation.x = Math.PI / 2; label.position.set(0, -0.31, -0.02); tim.parts.armL.elbow.add(label);
  const spoon = new THREE.Group();
  const handle = box(0.012, 0.012, 0.22, MAT.metal, 0, 0, 0); spoon.add(handle);
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.035, 7, 5, 0, 6.28, 0, 1.8), MAT.metal); bowl.scale.set(1, 0.5, 1.2); bowl.position.set(0, 0, 0.12); spoon.add(bowl);
  spoon.position.set(0, -0.33, 0.02); spoon.rotation.x = 0.35; tim.parts.armR.elbow.add(spoon);

  // rain outside
  const rain = createRain({ count: 420, area: 15, height: 8 }); rain.lines.position.set(0, 0, 12); scene.add(rain.lines);
  // interior warm light
  const dome = new THREE.PointLight(0xffc27a, 4.4, 5, 2); dome.position.set(0, 1.8, -0.1); scene.add(dome);
  const dash = new THREE.PointLight(0xff8a3c, 1.2, 2, 2); dash.position.set(0, 1.25, 1.3); scene.add(dash);
  const fill = new THREE.PointLight(0xbfd2ca, 2.4, 6, 2); fill.position.set(1.2, 1.5, -0.3); scene.add(fill);

  // empty cans on the seat / floor
  const emptyMat = new THREE.MeshStandardMaterial({ map: labelTexture('BEANS', { bg: '#8d7d60', fg: '#d6cdb4' }), roughness: 0.8, metalness: 0.2 });
  for (let i = 0; i < 5; i++) {
    const c = cyl(0.07, 0.07, 0.14, emptyMat, 9, 0.25 + i * 0.12, 0.86, -0.75);
    c.rotation.z = Math.PI / 2; c.rotation.y = i * 0.8; scene.add(c);
  }

  const update = (dt, t) => {
    rain.update(dt);
    tim.time += dt;
    // slow eating loop: raise spoon to mouth
    const phase = (Math.sin(t * 0.9) + 1) / 2;
    tim.parts.armR.shoulder.rotation.x = -1.15 - phase * 0.25;
    tim.parts.armR.elbow.rotation.x = -1.4 + phase * 0.35;
    tim.parts.armL.shoulder.rotation.x = -0.7;
    tim.parts.armL.elbow.rotation.x = -1.1;
    tim.parts.head.rotation.x = 0.1 + Math.sin(t * 0.7) * 0.03;
    tim.parts.head.rotation.y = Math.sin(t * 0.3) * 0.05;
    tim.body.position.y = 0.18 + Math.sin(t * 1.7) * 0.006;
    dome.intensity = 4.1 + Math.sin(t * 13) * 0.08 + (Math.sin(t * 29) > 0.98 ? -2 : 0);
    // rain streak animation on glass could be added here
  };
  return { cab, tim, update, env, rain };
}

/* ================================================================== *
 *  Cutscene: ruined city + store
 * ================================================================== */
export function buildCityBlock(scene) {
  const env = makeEnvironment(scene, {
    fog: 0x4a4d42, fogDensity: 0.032,
    top: 0x59625d, horizon: 0xa38c6d, ground: 0x34352b,
    sunColor: 0xe0c49a, sunDir: [0.4, 0.2, -0.8], sunSize: 0.008, haze: 0.35,
    ambient: 0.7, dirColor: 0xd8caae, dirIntensity: 1.8, dirPos: [20, 28, 12],
    hemiSky: 0xa3a894, hemiGround: 0x333529,
  });
  const ground = createGround(120, MAT.dirt); scene.add(ground);
  const street = new THREE.Mesh(new THREE.PlaneGeometry(16, 110), MAT.asphalt);
  street.rotation.x = -Math.PI / 2; street.position.set(0, 0.01, 10); scene.add(street);
  // sidewalks
  for (const s of [-1, 1]) {
    const walk = box(5, 0.18, 110, MAT.concrete, s * 10.5, 0.09, 10);
    walk.receiveShadow = true; scene.add(walk);
    // cracked slabs
    const r = mulberry32(30 + s);
    for (let i = 0; i < 16; i++) {
      const slab = box(1.4 + r() * 1.4, 0.2 + r() * 0.3, 1.4 + r() * 1.4, MAT.concreteDark, -20 + r() * 40, 0.15, -35 + r() * 85);
      slab.rotation.set(r() * 1.5, r() * 6, r() * 1.5); scene.add(slab);
    }
  }
  // buildings lining street
  const buildingData = [[-19, -22, 20, 14, 16, 2], [19, -6, 18, 18, 14, 3], [-19, 12, 16, 22, 14, 4], [20, 24, 22, 13, 16, 5], [-22, 38, 18, 20, 12, 6]];
  for (const [x, z, w, h, d, seed] of buildingData) {
    const b = createBuilding({ w, h, d, seed });
    b.position.set(x, 0, z); b.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2; scene.add(b);
  }
  // the store
  const store = createStorefront({ seed: 5, name: 'MART' });
  store.position.set(0, 0, -14);
  scene.add(store);
  // debris & grass
  const grass = createFernPatch(700, 31, 60); grass.position.set(0, 0, 4); scene.add(grass);
  const trashA = createTrashPile(41); trashA.position.set(-4.2, 0, -7); scene.add(trashA);
  const trashB = createTrashPile(42); trashB.position.set(3.4, 0, 2); scene.add(trashB);
  // rubble
  const r = mulberry32(66);
  for (let i = 0; i < 26; i++) {
    const chunk = box(0.4 + r() * 1.8, 0.2 + r() * 0.8, 0.4 + r() * 1.8, MAT.concreteDark, -16 + r() * 32, 0.15, -14 + r() * 28);
    chunk.rotation.set(r() * 2, r() * 6, r() * 2); scene.add(chunk);
  }
  // skeletons
  const skeleton = createSkeleton({ pose: 'lying' });
  skeleton.position.set(-2.6, 0.14, -10.2);
  skeleton.rotation.y = 0.7; skeleton.scale.setScalar(1.02);
  scene.add(skeleton);
  const skeleton2 = createSkeleton({ pose: 'slumped' });
  skeleton2.position.set(-7.4, 0, 3.4); skeleton2.rotation.y = -0.5; scene.add(skeleton2);
  const sk3 = createSkeleton({ pose: 'lying' }); sk3.position.set(6.3, 0.1, -2.5); sk3.rotation.y = 1.8; scene.add(sk3);
  // abandoned cars
  const car = createSedan({ rustColor: 0x50463a }); car.group.position.set(-14.8, 0, -3.5); car.group.rotation.y = 0.2; car.fog.visible = false; car.sleeve.visible = false; scene.add(car.group);
  const car2 = createSedan({ rustColor: 0x3f4844 }); car2.group.position.set(12.7, 0, 8.2); car2.group.rotation.y = Math.PI * 0.8; car2.fog.visible = false; car2.sleeve.visible = false; scene.add(car2.group);
  // street lamps
  for (const z of [-8, 10, 28]) {
    const l = createStreetLamp({ height: 7, light: z === 10, intensity: 20 });
    l.position.set(8.7, 0, z); l.rotation.y = Math.PI; scene.add(l);
  }
  // flyers / papers
  for (let i = 0; i < 30; i++) {
    const p = new THREE.Mesh(new THREE.PlaneGeometry(0.2 + r() * 0.3, 0.25 + r() * 0.35), MAT.paper);
    p.rotation.x = -Math.PI / 2; p.rotation.z = r() * 6;
    p.position.set(-18 + r() * 36, 0.03, -18 + r() * 44); scene.add(p);
  }
  const ash = createAsh({ count: 600, area: 55, height: 20, color: 0xc3b79a, size: 0.04, seed: 14 }); scene.add(ash.points);
  const flies = createFlies({ count: 40, area: 5, center: [-2.6, 0.7, -10.2] }); scene.add(flies.points);
  const update = (dt, t) => { ash.update(dt, t); flies.update(dt, t); };
  return { env, store, skeleton, update };
}

export function buildStoreInteriorScene(scene) {
  const env = makeEnvironment(scene, {
    fog: 0x2d2f28, fogDensity: 0.03, top: 0x3e453e, horizon: 0x6b5e4a, ground: 0x23251d,
    sunColor: 0xd8bd8e, sunDir: [0.2, 0.5, -1], sunSize: 0.01, haze: 0.2,
    ambient: 0.4, dirColor: 0xe0c59d, dirIntensity: 1.4, dirPos: [10, 18, 8],
    hemiSky: 0x707a6e, hemiGround: 0x26261d,
  });
  const room = new THREE.Group(); scene.add(room);
  const W = 14, D = 10, H = 4;
  // back and side walls
  room.add(box(W, H, 0.2, new THREE.MeshStandardMaterial({ color: 0x6c6858, roughness: 0.95 }), 0, H / 2, -D / 2));
  room.add(box(0.2, H, D, new THREE.MeshStandardMaterial({ color: 0x77715d, roughness: 0.95 }), -W / 2, H / 2, 0));
  room.add(box(0.2, H, D, new THREE.MeshStandardMaterial({ color: 0x63614f, roughness: 0.95 }), W / 2, H / 2, 0));
  // front wall with big broken window / doorway
  room.add(box(W, 0.5, 0.2, MAT.concreteDark, 0, H - 0.25, D / 2));
  for (const x of [-4.8, 4.8]) room.add(box(3.2, H, 0.2, MAT.concreteDark, x, H / 2, D / 2));
  room.add(box(1.4, 2.6, 0.2, MAT.darkGlass, -3.3, 1.3, D / 2));
  room.add(box(1.4, 2.6, 0.2, MAT.darkGlass, 3.3, 1.3, D / 2));
  room.add(box(W, 0.06, D, MAT.concrete, 0, 0.03, 0));
  room.add(box(W, 0.2, D, MAT.concreteDark, 0, H, 0));
  // shelves
  const metal = new THREE.MeshStandardMaterial({ color: 0x4c4d42, metalness: 0.4, roughness: 0.7 });
  const r = mulberry32(18);
  for (const side of [-1, 1]) {
    for (let s = 0; s < 2; s++) {
      const x = side * (2.8 + s * 2.2), z = -1.5;
      const shelf = new THREE.Group(); room.add(shelf);
      for (const zz of [-0.9, 0.9]) shelf.add(box(0.1, 2.3, 0.1, metal, x, 1.15, zz));
      for (let level = 0; level < 4; level++) {
        shelf.add(box(1.7, 0.05, 2.0, metal, x, 0.3 + level * 0.58, 0));
        for (let i = 0; i < 5; i++) {
          if (r() > 0.6) continue;
          const can = cyl(0.08, 0.08, 0.18, r() > 0.5 ? MAT.rust : MAT.metal, 8, x - 0.5 + i * 0.25, 0.4 + level * 0.58, -0.55 + r() * 1.1);
          room.add(can);
        }
      }
    }
  }
  // counter
  room.add(box(4, 1.1, 1, new THREE.MeshStandardMaterial({ color: 0x4a3d2e, roughness: 0.9 }), 2.6, 0.55, 3.2));
  room.add(box(4.2, 0.1, 1.1, MAT.metal, 2.6, 1.13, 3.2));
  const register = box(0.5, 0.3, 0.4, MAT.darkMetal, 3.2, 1.32, 3.1); room.add(register);
  // toppled shelves / debris
  const fallen = new THREE.Group();
  fallen.add(box(0.08, 2.0, 2.0, metal, 0, 0, 0));
  for (let i = 0; i < 4; i++) fallen.add(box(1.7, 0.05, 1.8, metal, 0.8, -0.6 + i * 0.5, 0));
  fallen.rotation.z = Math.PI / 2; fallen.rotation.y = 0.2; fallen.position.set(-4.3, 0.9, 2.4); room.add(fallen);
  const trash = createTrashPile(19); trash.position.set(-1.5, 0, 2.1); room.add(trash);
  // hero can on shelf with light highlight
  const heroCan = cyl(0.09, 0.09, 0.22, new THREE.MeshStandardMaterial({ map: labelTexture('BEANS', { bg: '#a83a25', fg: '#e8ddc0' }), roughness: 0.65, metalness: 0.2 }), 10, -2.8, 1.24, -1.5);
  room.add(heroCan);
  // light shafts through window
  const shaftMat = new THREE.MeshBasicMaterial({ color: 0xead2a0, transparent: true, opacity: 0.055, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
  for (let i = 0; i < 3; i++) {
    const shaft = new THREE.Mesh(new THREE.ConeGeometry(1.4, 7, 4, 1, true), shaftMat);
    shaft.position.set(-3.4 + i * 3.3, 2.4, 1.0); shaft.rotation.x = 0.32; shaft.rotation.z = 0.2; room.add(shaft);
  }
  // hanging broken lights
  for (const x of [-3.5, 1.5]) {
    room.add(cyl(0.008, 0.008, 1.2, MAT.black, 4, x, 3.4, 0.5));
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.25, 8, 1, true), MAT.darkMetal);
    shade.position.set(x, 2.8, 0.5); room.add(shade);
  }
  const warm = new THREE.PointLight(0xffc384, 12, 12, 2); warm.position.set(-1, 2.4, 1); scene.add(warm);
  const cool = new THREE.DirectionalLight(0xbfd0c7, 1.4); cool.position.set(-8, 8, 12); scene.add(cool);
  const dust = createAsh({ count: 240, area: 14, height: 5, color: 0xd8c9a4, size: 0.03, seed: 21 }); scene.add(dust.points);
  const update = (dt, t) => dust.update(dt, t);
  return { env, room, heroCan, trash, update, dims: { W, D, H } };
}

/* ================================================================== *
 *  Cutscene: highway, broken plane, car with fogged window
 * ================================================================== */
export function buildHighwayScene(scene, { withCar = false } = {}) {
  const env = makeEnvironment(scene, {
    fog: 0x6e6c5c, fogDensity: 0.021,
    top: 0x6b7775, horizon: 0xa28663, ground: 0x3b3a2e,
    sunColor: 0xd8b68a, sunDir: [-0.5, 0.12, -1], sunSize: 0.005, haze: 0.55,
    ambient: 0.75, dirColor: 0xcfc1a5, dirIntensity: 1.8, dirPos: [-20, 26, 10],
    hemiSky: 0x98a095, hemiGround: 0x303126,
  });
  const ground = createGround(340, MAT.grass); scene.add(ground);
  const road = new THREE.Mesh(new THREE.PlaneGeometry(9, 300), MAT.asphalt);
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.02, -40); road.receiveShadow = true; scene.add(road);
  // faded center line
  for (let z = -180; z < 100; z += 9) {
    const l = box(0.14, 0.02, 4.2, new THREE.MeshStandardMaterial({ color: 0xb9ac7b, roughness: 0.9, transparent: true, opacity: 0.34 }), 0, 0.04, z);
    scene.add(l);
  }
  // shoulder gravel
  for (const s of [-1, 1]) {
    const sh = box(2.4, 0.03, 300, new THREE.MeshStandardMaterial({ color: 0x5d5848, roughness: 1 }), s * 5.8, 0.015, -40);
    scene.add(sh);
  }
  // guard rails
  for (const s of [-1, 1]) {
    for (let z = -120; z < 60; z += 12) {
      const post = box(0.1, 1.0, 0.1, MAT.metal, s * 6.8, 0.45, z); scene.add(post);
      const rail = box(0.16, 0.32, 12, new THREE.MeshStandardMaterial({ map: MAT.metal.map, color: 0x777a6d, roughness: 0.7, metalness: 0.5 }), s * 6.8, 0.88, z);
      scene.add(rail);
    }
  }
  // power poles
  for (let i = 0; i < 7; i++) {
    const z = -10 - i * 24;
    const pole = cyl(0.15, 0.22, 11, MAT.wood, 6, -9.2, 5.5, z); scene.add(pole);
    const cross = box(2.6, 0.12, 0.12, MAT.wood, -9.2, 9.8, z); scene.add(cross);
    const cross2 = box(1.8, 0.12, 0.12, MAT.wood, -9.2, 8.7, z); scene.add(cross2);
    // sagging wires
    const pts = [];
    for (let j = 0; j <= 8; j++) {
      const t = j / 8;
      pts.push(new THREE.Vector3(-9.2 + (t - 0.5) * 0.2, 9.6 - Math.sin(t * Math.PI) * 0.8, z + t * 24));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const wire = new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.015, 3, false), MAT.black);
    scene.add(wire);
  }
  // school + plane on the right
  const school = createSchool();
  school.position.set(43, 0, -23); school.rotation.y = -Math.PI / 2;
  scene.add(school);
  const planeObj = createBrokenAirplane();
  planeObj.position.set(31, 0.2, -15);
  planeObj.rotation.y = -0.35;
  scene.add(planeObj);
  const bus = createSchoolBus(); bus.position.set(24, 0.1, 1.2); bus.rotation.y = 0.4; scene.add(bus);
  // school field fence
  for (let i = 0; i < 9; i++) {
    const p = createFencePanel(5, 2.2); p.position.set(16, 0, -18 + i * 5); p.rotation.y = Math.PI / 2; scene.add(p);
  }
  // dead trees
  const forest = createForest({ count: 100, seed: 13, radius: 55, roadWidth: 7, minZ: -120, maxZ: 40 });
  scene.add(forest);
  for (const [x, z, s] of [[-13, 8, 1.1], [14, -2, 0.9], [-16, -34, 1], [18, -44, 1.2]]) {
    const tree = createPineTree(s, true); tree.position.set(x, 0, z); scene.add(tree);
  }
  // grass / fields
  const grassPatch = createFernPatch(800, 41, 80); grassPatch.position.set(0, 0, -30); scene.add(grassPatch);
  // debris along road
  const r = mulberry32(71);
  for (let i = 0; i < 18; i++) {
    const d = box(0.3 + r() * 1.2, 0.05 + r() * 0.3, 0.3 + r() * 1.4, r() > 0.5 ? MAT.concreteDark : MAT.rust, -8 + r() * 16, 0.1, 30 - r() * 140);
    d.rotation.set(r() * 2, r() * 6, r() * 2); scene.add(d);
  }
  // truck
  const truck = createTruck({ headlights: true });
  truck.position.set(0, 0, 18);
  truck.rotation.y = Math.PI; // faces -z (toward plane)
  scene.add(truck);
  // other abandoned car optionally for the wipe scene
  let car = null;
  if (withCar) {
    car = createSedan({ rustColor: 0x5c4a3d });
    car.group.position.set(-5.8, 0, 1.0);
    car.group.rotation.y = Math.PI / 2 + 0.1;
    scene.add(car.group);
    // truck parked
    truck.position.set(1.8, 0, -4.2);
    truck.rotation.y = 0.15;
  }
  const ash = createAsh({ count: 700, area: 80, height: 24, color: 0xcfc3a6, size: 0.045, seed: 8 }); scene.add(ash.points);
  const update = (dt, t) => { ash.update(dt, t); };
  return { env, truck, plane: planeObj, school, car, update, road };
}
