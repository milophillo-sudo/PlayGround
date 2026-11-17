import * as THREE from 'three';
import {
  makePerson, animatePerson, makeBench, makeTrash, makeCar
} from './props.js';
import { makeGlowTexture } from './textures.js';

// ─────────────────────────────────────────────────────────────
// Title diorama — Jake walks a slow loop through his town at dusk.
// Runs in its own scene so the menu is a living, looping shot.
// ─────────────────────────────────────────────────────────────
const mat = (color, rough = 0.85, metal = 0, emissive = 0x000000, eIntensity = 1) =>
  new THREE.MeshStandardMaterial({
    color, roughness: rough, metalness: metal,
    emissive, emissiveIntensity: eIntensity
  });

function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  return m;
}

function cyl(rt, rb, h, material, x = 0, y = 0, z = 0, seg = 16) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
  m.position.set(x, y, z);
  return m;
}

function signPlane(text, color, w, h = 0.62) {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 128;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 512, 128);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = 'bold 62px "Courier New", monospace';
  g.shadowColor = color;
  g.shadowBlur = 22;
  g.fillStyle = color;
  g.fillText(text, 256, 68);
  g.shadowBlur = 0;
  g.lineWidth = 2;
  g.strokeStyle = 'rgba(255,255,255,.35)';
  g.strokeText(text, 256, 68);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  return mesh;
}

function windowPanel(w, h, color, intensity = 1.6) {
  return new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshStandardMaterial({
      color: 0x1a2028, emissive: color, emissiveIntensity: intensity,
      roughness: 0.5, metalness: 0.1
    })
  );
}

function gableRoof(w, d, h, material) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d, bevelEnabled: false });
  geo.translate(0, 0, -d / 2);
  return new THREE.Mesh(geo, material);
}

export class TownTitle {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0c1624);
    this.scene.fog = new THREE.FogExp2(0x0d1826, 0.014);

    this.camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 140);
    this.camera.position.set(0.9, 2.6, 10.6);

    this.time = 0;
    this.angle = -0.5;
    this._look = new THREE.Vector3(-1.35, 1.3, 0);
    this._glowTex = makeGlowTexture('#ffcf8a');

    this.buildSky();
    this.buildGround();
    this.buildTown();
    this.buildFountain();
    this.buildLamps();
    this.buildJake();
    this.buildRain();
    this.buildWeatherGlow();
  }

  buildSky() {
    // gradient sky dome
    const c = document.createElement('canvas');
    c.width = 8; c.height = 256;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, 256);
    grd.addColorStop(0, '#050912');
    grd.addColorStop(0.45, '#101c30');
    grd.addColorStop(0.72, '#2a3446');
    grd.addColorStop(0.86, '#6a5a52');
    grd.addColorStop(1, '#121a20');
    g.fillStyle = grd;
    g.fillRect(0, 0, 8, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(70, 24, 16),
      new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false })
    );
    this.scene.add(dome);
    // stars
    const stars = [];
    for (let i = 0; i < 220; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 62;
      const y = 8 + Math.random() * 46;
      const rr = Math.sqrt(Math.max(0, 1 - (y / 60) ** 2)) * r;
      stars.push(Math.cos(a) * rr, y, Math.sin(a) * rr);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(stars, 3));
    this.scene.add(new THREE.Points(sg, new THREE.PointsMaterial({
      color: 0xcfe4ff, size: 0.22, transparent: true, opacity: 0.7,
      depthWrite: false, fog: false
    })));
    // moon
    const moon = new THREE.Mesh(
      new THREE.CircleGeometry(2.6, 32),
      new THREE.MeshBasicMaterial({ color: 0xdfeaff, transparent: true, opacity: 0.85, fog: false })
    );
    moon.position.set(-27, 34, -52);
    moon.lookAt(0, 2, 0);
    this.scene.add(moon);
    const halo = this.makeGroundGlow('#b9d4ff', 14);
    halo.position.set(-27, 34, -51.5);
    halo.material.opacity = 0.35;
    this.scene.add(halo);
  }

  buildGround() {
    const asphalt = mat(0x1b1e24, 0.7, 0.3);
    const road = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), asphalt);
    road.rotation.x = -Math.PI / 2;
    road.position.y = -0.02;
    this.scene.add(road);

    // plaza slab
    const plaza = new THREE.Mesh(new THREE.CircleGeometry(7.2, 48), mat(0x363b43, 0.84, 0.1));
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.y = 0.015;
    this.scene.add(plaza);
    const ring = new THREE.Mesh(new THREE.RingGeometry(5.35, 5.65, 48), mat(0x3a4048, 0.8, 0.12));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.scene.add(ring);

    // grass verges
    const grass = mat(0x1c2c20, 0.98);
    [-1, 1].forEach(side => {
      const g = box(12, 0.14, 7, grass, side * 13, 0.03, -2.5);
      this.scene.add(g);
    });
    // sidewalk strips
    const walkMat = mat(0x3e434a, 0.88, 0.06);
    [-1, 1].forEach(side => {
      const w = box(2.6, 0.1, 30, walkMat, side * 9.8, 0.04, -1);
      this.scene.add(w);
    });
    // road behind shops
    const street = new THREE.Mesh(new THREE.PlaneGeometry(120, 9), mat(0x111318, 0.6, 0.35));
    street.rotation.x = -Math.PI / 2;
    street.position.set(0, 0.005, -17);
    this.scene.add(street);
    for (let x = -46; x <= 46; x += 7) {
      const dash = box(3.4, 0.02, 0.18, mat(0x9a8f68, 0.7, 0, 0x8a7648, 0.4), x, 0.02, -17);
      this.scene.add(dash);
    }
    // curbs
    const curbMat = mat(0x43484f, 0.9, 0.05);
    [-1, 1].forEach(side => {
      this.scene.add(box(120, 0.16, 0.4, curbMat, 0, 0.08, -12.4));
      if (side < 0) return;
    });
    this.scene.add(box(0.4, 0.16, 22, curbMat, 7.4, 0.08, -1));
    this.scene.add(box(0.4, 0.16, 22, curbMat, -7.4, 0.08, -1));
  }

  buildTown() {
    // storefront row across the back
    const shops = [
      { x: -9.5, w: 6.4, name: 'MEL’S DINER', color: '#ffb36b', face: 0x6c3a2a },
      { x: -2.6, w: 6.0, name: 'MILLBROOK MART', color: '#8dffb2', face: 0x3a4a3c },
      { x: 4.6, w: 6.8, name: 'VIDEO 2000', color: '#ff6b8a', face: 0x3f3550 },
      { x: 12.0, w: 6.4, name: 'LAUNDROMAT', color: '#8fd7ff', face: 0x36414f }
    ];
    for (const s of shops) {
      const h = 4.0 + (Math.abs(s.x) % 3) * 0.3;
      const body = box(s.w, h, 4.2, mat(s.face, 0.94), s.x, h / 2, -11.4);
      this.scene.add(body);
      // roof lip
      this.scene.add(box(s.w + 0.3, 0.28, 4.5, mat(0x1c2026, 0.9), s.x, h + 0.1, -11.4));
      // glowing shop window
      const win = windowPanel(s.w * 0.66, 1.9, 0xffd9a0, 2.4);
      win.position.set(s.x, 1.85, -9.25);
      this.scene.add(win);
      // dark mullions so the glass does not read as a blank white panel
      const frameMat = mat(0x14171c, 0.8, 0.2);
      for (let m = -1; m <= 1; m++) {
        this.scene.add(box(0.06, 2.0, 0.05, frameMat, s.x + m * s.w * 0.2, 1.85, -9.2));
      }
      this.scene.add(box(s.w * 0.68, 0.07, 0.05, frameMat, s.x, 1.85, -9.2));
      this.scene.add(box(s.w * 0.68, 0.07, 0.05, frameMat, s.x, 2.78, -9.2));
      // door
      const door = new THREE.Mesh(
        new THREE.PlaneGeometry(1.1, 2.2),
        mat(0x171a1e, 0.7, 0.2, 0x3a2a1c, 0.4)
      );
      door.position.set(s.x - s.w * 0.34, 1.1, -9.24);
      this.scene.add(door);
      // sign
      const sign = signPlane(s.name, s.color, Math.min(4.6, s.w * 0.86));
      sign.position.set(s.x, h - 0.55, -9.22);
      this.scene.add(sign);
      // awning
      const awning = box(s.w * 0.8, 0.1, 1.3, mat(0x2a1d22, 0.9), s.x, 2.95, -8.8);
      awning.rotation.x = -0.28;
      this.scene.add(awning);
      // window light spill
      const spill = this.makeGroundGlow(s.color, 4.2);
      spill.position.set(s.x, 0.045, -7.6);
      spill.rotation.x = -Math.PI / 2;
      spill.material.opacity = 0.22;
      this.scene.add(spill);
    }

    const openSign = signPlane('OPEN', '#ffd166', 1.25, 0.5);
    openSign.position.set(7.3, 2.85, -8.7);
    this.scene.add(openSign);

    // upper apartment block behind shops
    const block = box(30, 7, 5, mat(0x3a4258, 0.96, 0, 0x161d2b, 0.8), 1, 7.2, -15.5);
    this.scene.add(block);
    for (let i = 0; i < 9; i++) {
      const wx = -12 + i * 3.2;
      const lit = i % 3 !== 1;
      const wpanel = windowPanel(1.05, 1.35, lit ? 0xffcf8a : 0x2c3644, lit ? 0.55 : 0.1);
      wpanel.position.set(wx, 6.4, -12.98);
      this.scene.add(wpanel);
      const wpanel2 = windowPanel(1.05, 1.35, lit ? 0xffb87a : 0x28313e, lit ? 0.45 : 0.1);
      wpanel2.position.set(wx, 9.0, -12.98);
      this.scene.add(wpanel2);
    }
    this.scene.add(box(31, 0.4, 5.2, mat(0x151920, 0.9), 1, 10.8, -15.5));

    // houses flanking the plaza
    this.house(-15.5, -4.5, 9, 6.6, 7.5, 0x3b3444, 0x241f2b, 0.35);
    this.house(16.5, -3.0, 8.4, 6.0, 7.0, 0x2f3b3d, 0x1d2628, -0.5);
    this.house(-20.5, 7.5, 7.5, 5.2, 6.4, 0x3a3530, 0x241f1c, 0.9);
    this.house(21.0, 8.0, 8.0, 5.6, 6.8, 0x33363f, 0x202228, -1.15);

    // trees
    this.tree(-9.2, -3.4, 1.05);
    this.tree(8.6, -5.2, 0.9);
    this.tree(-18, 2.2, 1.25);
    this.tree(18.5, 2.8, 1.1);
    this.tree(-3.6, -8.2, 0.7);

    // benches + bins
    const bench1 = makeBench(2.1);
    bench1.position.set(-5.6, 0, 2.2);
    bench1.rotation.y = 0.5;
    this.scene.add(bench1);
    const bench2 = makeBench(2.1);
    bench2.position.set(5.8, 0, 1.6);
    bench2.rotation.y = -0.55;
    this.scene.add(bench2);
    const trash = makeTrash();
    trash.position.set(4.4, 0, 3.4);
    this.scene.add(trash);

    // parked car on the street
    const car = makeCar(0x5a2430);
    car.position.set(9.5, 0, -15.2);
    car.rotation.y = Math.PI / 2;
    car.scale.setScalar(0.92);
    this.scene.add(car);
    const car2 = makeCar(0x2c3e55);
    car2.position.set(-11, 0, -18.4);
    car2.rotation.y = -Math.PI / 2;
    car2.scale.setScalar(0.95);
    this.scene.add(car2);

    // bus stop / route sign near the plaza
    const post = cyl(0.05, 0.05, 2.3, mat(0x2d333b, 0.6, 0.6), 6.9, 1.15, 4.6, 8);
    this.scene.add(post);
    const busSign = signPlane('SCHOOL → 7:40', '#ffd166', 1.5, 0.4);
    busSign.position.set(6.9, 2.05, 4.62);
    this.scene.add(busSign);

    // cat on the bench, because every town has one
    const cat = new THREE.Group();
    const fur = mat(0x1b1a1c, 0.95);
    cat.add(new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), fur));
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), fur);
    head.position.set(0, 0.19, 0.06);
    cat.add(head);
    [-1, 1].forEach(s => {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.09, 5), fur);
      ear.position.set(s * 0.065, 0.29, 0.06);
      cat.add(ear);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.014, 6, 6),
        new THREE.MeshBasicMaterial({ color: 0xa8ff9a }));
      eye.position.set(s * 0.045, 0.2, 0.155);
      cat.add(eye);
    });
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.5, 6), fur);
    tail.position.set(0.13, 0.02, -0.16);
    tail.rotation.z = -0.8;
    cat.add(tail);
    cat.position.set(5.8, 0.63, 1.5);
    cat.rotation.y = -0.7;
    this.cat = cat;
    this.scene.add(cat);
  }

  house(x, z, w, h, d, color, roofColor, ry) {
    const g = new THREE.Group();
    const body = box(w, h, d, mat(color, 0.96), 0, h / 2, 0);
    g.add(body);
    const roof = gableRoof(w + 0.7, d + 0.7, 2.1, mat(roofColor, 0.92));
    roof.position.y = h;
    g.add(roof);
    // windows
    for (let i = -1; i <= 1; i++) {
      const lit = (i + 2) % 2 === 0;
      const win = windowPanel(1.0, 1.25, lit ? 0xffc884 : 0x26303b, lit ? 1.25 : 0.12);
      win.position.set(i * (w * 0.27), h * 0.62, d / 2 + 0.01);
      g.add(win);
    }
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.9),
      mat(0x211a16, 0.85, 0.1, 0x2a1a10, 0.35));
    door.position.set(0, 0.96, d / 2 + 0.015);
    g.add(door);
    const porch = box(1.6, 0.12, 0.9, mat(0x3a3d42, 0.9), 0, 0.06, d / 2 + 0.45);
    g.add(porch);
    g.position.set(x, 0, z);
    g.rotation.y = ry;
    this.scene.add(g);
    return g;
  }

  tree(x, z, scale = 1) {
    const g = new THREE.Group();
    const trunk = cyl(0.11, 0.17, 2.4, mat(0x2a211b, 0.98), 0, 1.2, 0, 7);
    g.add(trunk);
    const leaf = mat(0x1f3324, 0.98);
    for (let i = 0; i < 4; i++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(0.95 - i * 0.12, 10, 8), leaf);
      s.position.set((Math.random() - 0.5) * 0.8, 2.5 + i * 0.5, (Math.random() - 0.5) * 0.8);
      s.scale.y = 0.82;
      g.add(s);
    }
    g.position.set(x, 0, z);
    g.scale.setScalar(scale);
    this.scene.add(g);
  }

  buildFountain() {
    const g = new THREE.Group();
    const stone = mat(0x3d434b, 0.84, 0.12);
    const stoneDark = mat(0x2b3037, 0.9, 0.1);
    g.add(cyl(2.65, 2.9, 0.55, stone, 0, 0.28, 0, 32));
    g.add(cyl(2.48, 2.48, 0.16, stoneDark, 0, 0.55, 0, 32));
    const water = new THREE.Mesh(
      new THREE.CircleGeometry(2.36, 32),
      new THREE.MeshStandardMaterial({
        color: 0x0e2536, emissive: 0x0b3f52, emissiveIntensity: 0.5,
        roughness: 0.15, metalness: 0.6
      })
    );
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.56;
    g.add(water);
    g.add(cyl(0.24, 0.36, 1.1, stone, 0, 1.15, 0, 16));
    g.add(cyl(0.75, 0.2, 0.22, stoneDark, 0, 1.72, 0, 24));
    // water jets
    const drops = [];
    for (let i = 0; i < 90; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.25;
      drops.push({
        a, r,
        t: Math.random(),
        speed: 0.5 + Math.random() * 0.45
      });
    }
    const positions = new Float32Array(drops.length * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0xa9dcff, size: 0.045, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    g.add(pts);
    this.fountainDrops = drops;
    this.fountainPts = pts;
    this.fountainGeo = geo;
    const glow = this.makeGroundGlow('#69c8ff', 6.5);
    glow.position.set(0, 0.03, 0);
    glow.rotation.x = -Math.PI / 2;
    glow.material.opacity = 0.22;
    g.add(glow);
    this.scene.add(g);
    const light = new THREE.PointLight(0x6fc6ff, 2.2, 10, 2);
    light.position.set(0, 1.4, 0);
    this.scene.add(light);
    this.fountainLight = light;
  }

  buildLamps() {
    const lampMat = mat(0x1f242b, 0.55, 0.7);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffdcae });
    this.lamps = [];
    const positions = [[-6.6, 2.2], [5.0, 0.8], [-2.4, -7.6], [10.5, -6.4]];
    for (const [x, z] of positions) {
      const g = new THREE.Group();
      g.add(cyl(0.075, 0.11, 3.5, lampMat, 0, 1.75, 0, 8));
      g.add(cyl(0.16, 0.2, 0.24, lampMat, 0, 0.12, 0, 10));
      const arm = box(0.9, 0.07, 0.07, lampMat, 0.42, 3.45, 0);
      g.add(arm);
      const head = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.24, 10), lampMat);
      head.position.set(0.82, 3.34, 0);
      g.add(head);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), bulbMat);
      bulb.position.set(0.82, 3.2, 0);
      g.add(bulb);
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this._glowTex, color: 0xffc98a, transparent: true,
        blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.85
      }));
      halo.scale.set(3.0, 3.0, 1);
      halo.position.set(0.82, 3.2, 0);
      g.add(halo);
      const light = new THREE.PointLight(0xffc07a, 22, 19, 2);
      light.position.set(0.82, 3.2, 0);
      g.add(light);
      const glow = this.makeGroundGlow('#ffbe78', 7.4);
      glow.position.set(0.82, 0.045, 0);
      glow.rotation.x = -Math.PI / 2;
      glow.material.opacity = 0.3;
      g.add(glow);
      g.position.set(x, 0, z);
      this.scene.add(g);
      this.lamps.push({ light, bulb, base: 15, seed: Math.random() * 9 });
    }
    const hemi = new THREE.HemisphereLight(0x9db8d8, 0x24272c, 1.3);
    this.scene.add(hemi);
    const amb = new THREE.AmbientLight(0x536a86, 0.95);
    this.scene.add(amb);
    const moonLight = new THREE.DirectionalLight(0x9db9de, 1.25);
    moonLight.position.set(-18, 28, -20);
    this.scene.add(moonLight);
    // warm key from the shops
    const shopKey = new THREE.PointLight(0xffb066, 4.2, 24, 2);
    shopKey.position.set(0, 3.4, -7.4);
    this.scene.add(shopKey);
    // soft warm follow light so Jake always reads against the background
    this.heroLight = new THREE.PointLight(0xffd2a0, 5.5, 8, 2);
    this.heroLight.position.set(0, 2.7, 3);
    this.scene.add(this.heroLight);
  }

  buildJake() {
    this.jake = makePerson({
      shirt: 0x2f3f5e, pants: 0x23262e, hair: 0x241a14, hairStyle: 'short',
      skin: 0xc79b7d, height: 1.84, backpack: 0x3c4a5e, shoes: 0x1a1c22
    });
    this.scene.add(this.jake);
    this.jakeLight = new THREE.PointLight(0xffe2c0, 4.2, 6, 2);
    this.jakeLight.position.set(0.35, 2.1, 1.35);
    this.jake.add(this.jakeLight);
    this.jakePos = new THREE.Vector3();
  }

  buildRain() {
    const N = 900;
    const arr = new Float32Array(N * 3);
    this.rainSeed = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 44;
      arr[i * 3 + 1] = Math.random() * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 36;
      this.rainSeed[i] = 7 + Math.random() * 9;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    this.rain = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0x9fc4e8, size: 0.035, transparent: true, opacity: 0.34,
      depthWrite: false
    }));
    this.rainGeo = geo;
    this.rainN = N;
    this.scene.add(this.rain);

    // drifting fireflies
    const M = 70;
    const fa = new Float32Array(M * 3);
    for (let i = 0; i < M; i++) {
      fa[i * 3] = (Math.random() - 0.5) * 22;
      fa[i * 3 + 1] = 0.3 + Math.random() * 2.6;
      fa[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.BufferAttribute(fa, 3));
    this.fireflies = new THREE.Points(fg, new THREE.PointsMaterial({
      color: 0xffd68a, size: 0.06, transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending, depthWrite: false
    }));
    this.fireflyGeo = fg;
    this.fireflyN = M;
    this.scene.add(this.fireflies);
  }

  buildWeatherGlow() {
    // subtle ghost light behind the shops for silhouette separation
    const back = new THREE.PointLight(0x5f83b8, 4.0, 34, 2);
    back.position.set(-8, 6, -22);
    this.scene.add(back);
  }

  makeGroundGlow(color, size) {
    const tex = this._glowTex;
    const m = new THREE.MeshBasicMaterial({
      map: tex, color: new THREE.Color(color), transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), m);
    return mesh;
  }

  resize(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  update(dt) {
    dt = Math.min(0.05, dt);
    this.time += dt;
    const t = this.time;

    // Jake loops the fountain, facing his direction of travel. Portrait
    // screens use a tighter path in front of the fountain so he stays framed.
    const portrait = this.camera.aspect < 1.05;
    let x, z;
    if (portrait) {
      this.angle += dt * (Math.PI * 2 / 23);
      const rx = 0.95, rz = 0.5;
      x = 1.35 + Math.cos(this.angle) * rx;
      z = 3.05 + Math.sin(this.angle) * rz;
      const dx = -Math.sin(this.angle) * rx;
      const dz = Math.cos(this.angle) * rz;
      this.jake.position.set(x, 0, z);
      this.jake.rotation.y = Math.atan2(dx, dz);
    } else {
      this.angle += dt * (Math.PI * 2 / 36);
      const rx = 4.15, rz = 2.55;
      x = Math.cos(this.angle) * rx;
      z = Math.sin(this.angle) * rz;
      const dx = -Math.sin(this.angle) * rx;
      const dz = Math.cos(this.angle) * rz;
      this.jake.position.set(x, 0, z);
      this.jake.rotation.y = Math.atan2(dx, dz);
    }
    animatePerson(this.jake, dt, { mode: 'walk', speed: 1, lookAt: { x: 0, z: 0 } });
    this.jakePos.set(x, 0, z);

    // camera: slow drift + dolly, framing Jake in the right half on desktop
    // and centring him on portrait / mobile screens.
    if (portrait) {
      this.camera.position.set(
        1.3 + Math.sin(t * 0.07) * 0.16,
        2.35 + Math.sin(t * 0.11) * 0.04,
        9.1 - Math.sin(t * 0.05) * 0.35
      );
      this._look.set(1.22 + Math.sin(t * 0.06) * 0.06, 1.18, 3.1);
    } else {
      const dolly = 10.6 - Math.sin(t * 0.055) * 0.7;
      this.camera.position.set(
        0.9 + Math.sin(t * 0.07) * 0.45,
        2.56 + Math.sin(t * 0.11) * 0.05,
        dolly
      );
      this._look.set(-1.5 + Math.sin(t * 0.05 + 0.8) * 0.2, 1.3 + Math.sin(t * 0.09) * 0.02, 0.1);
    }
    this.camera.lookAt(this._look);
    this.camera.rotation.z = Math.sin(t * 0.045) * 0.006;
    if (this.heroLight) {
      this.heroLight.position.set(x + 0.9, 2.7, z + 1.7);
    }

    // lamp flicker
    for (const l of this.lamps) {
      const f = 0.88 + Math.sin(t * 2.1 + l.seed) * 0.05 + Math.sin(t * 11.3 + l.seed * 3) * 0.03;
      l.light.intensity = l.base * f;
      l.bulb.material.color.setRGB(1 * f, 0.82 * f, 0.62 * f);
    }
    if (this.fountainLight) this.fountainLight.intensity = 2 + Math.sin(t * 1.3) * 0.25;

    // fountain droplets
    const fp = this.fountainGeo.attributes.position.array;
    for (let i = 0; i < this.fountainDrops.length; i++) {
      const d = this.fountainDrops[i];
      d.t += dt * d.speed;
      if (d.t > 1) d.t -= 1;
      const rr = 0.22 + d.t * 2.3 + d.r;
      const a = d.a + t * 0.2;
      const h = 1.95 + Math.sin(d.t * Math.PI) * 1.15 - d.t * 1.5;
      fp[i * 3] = Math.cos(a) * rr;
      fp[i * 3 + 1] = Math.max(0.58, h);
      fp[i * 3 + 2] = Math.sin(a) * rr;
    }
    this.fountainGeo.attributes.position.needsUpdate = true;

    // rain
    const ra = this.rainGeo.attributes.position.array;
    for (let i = 0; i < this.rainN; i++) {
      const s = this.rainSeed[i];
      ra[i * 3 + 1] -= dt * s;
      ra[i * 3] += dt * 0.8;
      if (ra[i * 3 + 1] < 0) {
        ra[i * 3 + 1] = 11 + Math.random() * 3;
        ra[i * 3] = (Math.random() - 0.5) * 44;
        ra[i * 3 + 2] = (Math.random() - 0.5) * 36;
      }
    }
    this.rainGeo.attributes.position.needsUpdate = true;

    // fireflies
    const fa = this.fireflyGeo.attributes.position.array;
    for (let i = 0; i < this.fireflyN; i++) {
      const ph = i * 1.7;
      fa[i * 3] += Math.sin(t * 0.6 + ph) * dt * 0.18;
      fa[i * 3 + 1] += Math.sin(t * 0.9 + ph * 1.3) * dt * 0.12;
      fa[i * 3 + 2] += Math.cos(t * 0.5 + ph) * dt * 0.16;
    }
    this.fireflyGeo.attributes.position.needsUpdate = true;
    this.fireflies.material.opacity = 0.6 + Math.sin(t * 1.7) * 0.2;

    // cat tail flick
    if (this.cat) this.cat.rotation.y = -0.7 + Math.sin(t * 0.8) * 0.05;
  }

  render(renderer) {
    renderer.render(this.scene, this.camera);
  }
}
