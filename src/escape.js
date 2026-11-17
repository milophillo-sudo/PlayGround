import * as THREE from 'three';
import { createTruckInterior, createAsh, createPineTree, box, cyl, plane, MAT, createStreetLamp } from './models.js';
import { TimCharacter, createMace, createJake } from './characters.js';
import { asphaltTexture, glowTexture, canvasTex, mulberry32 } from './textures.js';
import { audio } from './audio.js';

function crackTexture(seed = 1) {
  return canvasTex(512, 256, (ctx, w, h) => {
    const r = mulberry32(seed);
    ctx.clearRect(0, 0, w, h);
    // impact hole
    const hx = w * 0.34, hy = h * 0.44;
    const g = ctx.createRadialGradient(hx, hy, 2, hx, hy, 34);
    g.addColorStop(0, 'rgba(235,242,236,.5)');
    g.addColorStop(0.3, 'rgba(80,90,86,.55)');
    g.addColorStop(1, 'rgba(20,24,22,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(hx, hy, 34, 0, 7); ctx.fill();
    // spider cracks
    ctx.strokeStyle = 'rgba(220,232,224,.55)';
    for (let i = 0; i < 16; i++) {
      const a = r() * Math.PI * 2;
      let x = hx, y = hy;
      ctx.lineWidth = 0.7 + r() * 1.8;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let s = 0; s < 4 + r() * 5; s++) {
        const len = 8 + r() * 30;
        x += Math.cos(a + (r() - 0.5) * 0.9) * len;
        y += Math.sin(a + (r() - 0.5) * 0.9) * len;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    // secondary holes
    for (let i = 0; i < 3; i++) {
      const x = w * (0.6 + r() * 0.3), y = h * (0.2 + r() * 0.6);
      ctx.fillStyle = 'rgba(20,24,22,.5)';
      ctx.beginPath(); ctx.arc(x, y, 4 + r() * 6, 0, 7); ctx.fill();
      ctx.strokeStyle = 'rgba(220,232,224,.35)'; ctx.lineWidth = 1;
      for (let j = 0; j < 5; j++) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 70, y + (r() - 0.5) * 50); ctx.stroke();
      }
    }
  }, { clamp: true });
}

export function buildTruckScene(scene, { mode = 'start' } = {}) {
  scene.fog = new THREE.FogExp2(mode === 'drive' ? 0x0c1212 : 0x0a0e0d, mode === 'drive' ? 0.024 : 0.03);
  scene.background = new THREE.Color(0x060a0a);
  const hemi = new THREE.HemisphereLight(0x6d827c, 0x10120d, 0.85);
  scene.add(hemi);
  const moon = new THREE.DirectionalLight(0xa8c0b6, 0.95);
  moon.position.set(-18, 24, 12); scene.add(moon);

  // ground & road ahead
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(220, 260), new THREE.MeshStandardMaterial({ color: 0x262b20, roughness: 1 }));
  grass.rotation.x = -Math.PI / 2; grass.position.y = -0.25; scene.add(grass);
  const roadTex = asphaltTexture({ seed: 55 }).clone();
  roadTex.repeat.set(1.4, 26); roadTex.needsUpdate = true;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(10, 220), new THREE.MeshStandardMaterial({ map: roadTex, roughness: 0.95 }));
  road.rotation.x = -Math.PI / 2; road.position.set(0, -0.2, 60); scene.add(road);
  // center lines
  const lineMat = new THREE.MeshStandardMaterial({ color: 0xb9ac7b, roughness: 0.9, transparent: true, opacity: 0.5 });
  const lines = [];
  for (let i = 0; i < 30; i++) {
    const l = box(0.14, 0.01, 4.2, lineMat, 0, -0.185, -10 + i * 8);
    scene.add(l); lines.push(l);
  }
  // shoulders
  for (const s of [-1, 1]) {
    const sh = box(2.4, 0.02, 220, new THREE.MeshStandardMaterial({ color: 0x4a4538, roughness: 1 }), s * 6.4, -0.24, 60);
    scene.add(sh);
  }
  // guardrails
  const railMat = new THREE.MeshStandardMaterial({ map: MAT.metal.map, color: 0x6d7065, metalness: 0.5, roughness: 0.7 });
  const rails = [];
  for (const s of [-1, 1]) {
    for (let i = 0; i < 24; i++) {
      const z = -8 + i * 8;
      const post = box(0.1, 1.0, 0.1, MAT.metal, s * 7.4, 0.25, z);
      scene.add(post); rails.push(post);
      const rail = box(0.14, 0.3, 8, railMat, s * 7.4, 0.7, z);
      scene.add(rail); rails.push(rail);
    }
  }
  // trees
  const trees = [];
  const treeRng = mulberry32(4242);
  for (let i = 0; i < 26; i++) {
    const s = i % 2 ? 1 : -1;
    const tree = createPineTree(0.7 + treeRng() * 1.2, treeRng() > 0.8);
    tree.position.set(s * (11 + treeRng() * 16), -0.2, -4 + treeRng() * 120);
    scene.add(tree); trees.push(tree);
  }
  // distant street lamp
  const lamp = createStreetLamp({ height: 7, light: true, color: 0xffb36a, intensity: 20 });
  lamp.position.set(-9, -0.2, 26); lamp.rotation.y = Math.PI / 2; scene.add(lamp);

  // cab interior
  const cab = new THREE.Group();
  scene.add(cab);
  cab.add(createTruckInterior());
  // dome light + instrument glow so the cab reads on dark displays
  const cabLight = new THREE.PointLight(0xffc98f, 7.5, 4.6, 2);
  cabLight.position.set(0.1, 1.82, 0.05); scene.add(cabLight);
  const dashLight = new THREE.PointLight(0xff9b52, 3, 2.4, 2);
  dashLight.position.set(-0.45, 1.3, 1.0); scene.add(dashLight);
  const gaugeMat = new THREE.MeshStandardMaterial({ color: 0x0d1712, emissive: 0x4dff9a, emissiveIntensity: 0.9, roughness: 0.4 });
  cab.add(box(0.44, 0.13, 0.03, gaugeMat, -0.58, 1.19, 1.36));
  cab.add(box(0.12, 0.05, 0.02, new THREE.MeshStandardMaterial({ color: 0x2a0d08, emissive: 0xff3a1a, emissiveIntensity: 1.2 }), 0.0, 1.26, 1.52));
  // windshield glass
  const windshield = new THREE.Group();
  const windMat = new THREE.MeshPhysicalMaterial({ color: 0x9fb2a9, transparent: true, opacity: mode === 'start' ? 0.16 : 0.1, roughness: 0.05, metalness: 0.2, side: THREE.DoubleSide, depthWrite: false });
  const wind = plane(2.02, 0.82, windMat, 0, 1.55, 1.62);
  wind.rotation.x = -0.28;
  windshield.add(wind);
  const crackMat = new THREE.MeshBasicMaterial({ map: crackTexture(3), transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const cracks = plane(1.95, 0.8, crackMat, 0, 1.56, 1.63);
  cracks.rotation.x = -0.28;
  windshield.add(cracks);
  scene.add(windshield);

  // rear window — this is what the gate shooters hit
  const rearCrackMat = new THREE.MeshBasicMaterial({ map: crackTexture(9), transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const rearCracks = plane(1.26, 0.52, rearCrackMat, 0, 1.6, -1.17);
  rearCracks.rotation.y = Math.PI;
  cab.add(rearCracks);

  // dashboard warning lamp for the shot-out tire
  const tireWarnMat = new THREE.MeshStandardMaterial({ color: 0x2a0d08, emissive: 0xff2a12, emissiveIntensity: 0, roughness: 0.4 });
  const tireWarn = box(0.07, 0.05, 0.02, tireWarnMat, 0.27, 1.26, 1.53);
  cab.add(tireWarn);

  // driver side window glass
  const sideGlassMat = new THREE.MeshPhysicalMaterial({ color: 0x8fa49b, transparent: true, opacity: 0.13, roughness: 0.06, metalness: 0.2, side: THREE.DoubleSide, depthWrite: false });
  const sideGlass = plane(0.94, 0.5, sideGlassMat, -1.075, 1.42, 0.1);
  sideGlass.rotation.y = -Math.PI / 2;
  scene.add(sideGlass);

  // side mirror / exterior details
  scene.add(box(0.16, 0.26, 0.1, MAT.darkMetal, -1.25, 1.4, 0.62));
  scene.add(box(0.1, 0.2, 0.4, MAT.darkMetal, -1.12, 1.46, 1.3));

  // headlight beams
  const beams = [];
  for (const s of [-1, 1]) {
    const spot = new THREE.SpotLight(0xffdcaa, mode === 'drive' ? 160 : 46, 60, 0.5, 0.55, 1.3);
    spot.position.set(s * 0.7, 0.2, 4.2);
    spot.target.position.set(s * 0.9, -1.5, 36);
    scene.add(spot, spot.target);
    beams.push(spot);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,230,180,1)', 'rgba(255,180,80,0)'), transparent: true, opacity: mode === 'drive' ? 0.55 : 0.28, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.position.set(s * 0.7, 0.25, 4.3); glow.scale.set(2.6, 2.6, 1); scene.add(glow);
  }
  // hood
  scene.add(box(2.05, 0.14, 2.0, new THREE.MeshStandardMaterial({ color: 0x4a564d, roughness: 0.7, metalness: 0.3 }), 0, 0.55, 4.4));
  const hoodGlow = new THREE.PointLight(0xffcf9a, 2.4, 7, 2);
  hoodGlow.position.set(0, 0.9, 3.2); scene.add(hoodGlow);

  // Tim in the driver seat
  const tim = new TimCharacter();
  tim.setSeated(true);
  tim.group.position.set(-0.55, 0.03, -0.02);
  tim.group.rotation.y = 0;
  tim.body.position.y = 0.1;
  tim.parts.torso.rotation.x = 0.12;
  tim.parts.head.rotation.x = -0.02;
  scene.add(tim.group);
  // hands on the wheel
  const wheelPose = () => {
    tim.parts.armL.shoulder.rotation.x = -1.18;
    tim.parts.armL.shoulder.rotation.z = 0.16;
    tim.parts.armL.elbow.rotation.x = -0.72;
    tim.parts.armR.shoulder.rotation.x = -1.24;
    tim.parts.armR.shoulder.rotation.z = -0.12;
    tim.parts.armR.elbow.rotation.x = -0.68;
  };
  wheelPose();

  // The attackers stay back at the gate and shoot at the truck from there.
  let mace = null;
  let jake = null;
  const attackers = [];
  let gateGroup = null;
  if (mode === 'start') {
    gateGroup = new THREE.Group();
    gateGroup.position.set(0, 0, -15.2);
    scene.add(gateGroup);
    for (const s of [-1, 1]) {
      gateGroup.add(box(0.16, 3.4, 0.16, MAT.darkMetal, s * 4.2, 1.7, 0));
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.32, 8), MAT.rust);
      cap.position.set(s * 4.2, 3.55, 0); gateGroup.add(cap);
    }
    const panel = plane(8.2, 2.8, new THREE.MeshStandardMaterial({ color: 0x2c322d, roughness: 0.9, transparent: true, opacity: 0.55, side: THREE.DoubleSide }), 0, 1.4, 0);
    gateGroup.add(panel);
    for (let i = 0; i < 14; i++) gateGroup.add(box(0.035, 2.8, 0.035, MAT.darkMetal, -3.9 + i * 0.6, 1.4, 0.02));
    const gateLamp = new THREE.PointLight(0xffc07a, 12, 14, 2);
    gateLamp.position.set(-3.4, 3.1, -1.0); gateGroup.add(gateLamp);
    const gateGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,200,140,1)', 'rgba(255,140,60,0)'), transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }));
    gateGlow.position.set(-3.4, 3.1, -1.0); gateGlow.scale.set(2.6, 2.6, 1); gateGroup.add(gateGlow);

    // Mace holds the gate on the left
    mace = createMace();
    mace.group.position.set(-2.7, 0, -12.1);
    mace.group.rotation.y = 0;
    mace.parts.armR.shoulder.rotation.x = -1.42;
    mace.parts.armR.elbow.rotation.x = -0.18;
    mace.parts.armL.shoulder.rotation.x = -1.2;
    mace.parts.armL.elbow.rotation.x = -0.5;
    mace.holdingGun = true;
    scene.add(mace.group);
    attackers.push(mace);
    // Jake takes the right side of the gate
    jake = createJake();
    jake.group.position.set(2.9, 0, -11.4);
    jake.group.rotation.y = 0;
    jake.parts.armR.shoulder.rotation.x = -1.3;
    jake.parts.armR.elbow.rotation.x = -0.32;
    jake.holdingGun = true;
    scene.add(jake.group);
    attackers.push(jake);
    const rim = new THREE.PointLight(0xa9c4bc, 13, 16, 2);
    rim.position.set(0.4, 4.2, -9.0);
    scene.add(rim);
  }

  // dust / rain
  const ash = createAsh({ count: 320, area: 40, height: 12, color: 0x9c9484, size: 0.03, seed: 19 });
  scene.add(ash.points);

  // engine smoke for crash
  const smokeMat = new THREE.SpriteMaterial({ map: glowTexture('rgba(30,28,24,.7)', 'rgba(20,20,18,0)'), color: 0x2b2b25, transparent: true, opacity: 0, depthWrite: false });
  const smoke = new THREE.Sprite(smokeMat);
  smoke.position.set(-1, 0.9, 4.4); smoke.scale.set(3, 3, 1); scene.add(smoke);

  let speed = mode === 'drive' ? 15 : 0;
  let driving = mode === 'drive';
  let shake = 0;
  let crashT = 0;
  const update = (dt, t) => {
    tim.updateFace(dt);
    mace?.update(dt);
    jake?.update(dt);
    ash.update(dt, t);
    wheelPose();
    // keep Tim's head and shoulders alive
    tim.parts.head.rotation.y = Math.sin(t * 0.8) * 0.04;
    const steer = Math.sin(t * 0.6) * 0.06;
    tim.parts.torso.rotation.z = steer * 0.4;
    // wheel turn
    if (driving) {
      // move world toward camera
      const move = speed * dt;
      for (const tree of trees) {
        tree.position.z -= move;
        if (tree.position.z < -14) tree.position.z += 130;
      }
      for (const rail of rails) {
        rail.position.z -= move;
        if (rail.position.z < -12) rail.position.z += 192;
      }
      for (const l of lines) {
        l.position.z -= move;
        if (l.position.z < -12) l.position.z += 240;
      }
      roadTex.offset.y -= move * 0.04;
      roadTex.needsUpdate = true;
      // cabin rattle
      cab.position.y = Math.sin(t * 22) * 0.003 + Math.sin(t * 37) * 0.0015;
      cab.rotation.z = Math.sin(t * 8) * 0.0015;
      tim.parts.head.rotation.x = -0.02 + Math.sin(t * 13) * 0.006;
    }
    if (crashT > 0) {
      crashT = Math.max(0, crashT - dt);
      smokeMat.opacity = Math.min(0.75, smokeMat.opacity + dt * 0.5);
      smoke.scale.setScalar(3 + (2 - crashT) * 1.4);
    }
    if (shake > 0) shake = Math.max(0, shake - dt * 0.8);
    for (let i = muzzleLights.length - 1; i >= 0; i--) {
      const m = muzzleLights[i];
      m.t -= dt;
      m.light.intensity *= 0.72;
      m.g.material.opacity *= 0.7;
      if (m.t <= 0) { scene.remove(m.g, m.light); muzzleLights.splice(i, 1); }
    }
  };
  const muzzleLights = [];
  const muzzleFlash = (side = -1) => {
    const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,235,180,1)', 'rgba(255,140,40,0)'), transparent: true, opacity: 0.95, depthWrite: false, blending: THREE.AdditiveBlending }));
    if (mace && jake) {
      const shooter = side < 0 ? mace : jake;
      g.position.copy(shooter.group.position).add(new THREE.Vector3(side < 0 ? 0.12 : -0.1, 1.48, 0.34));
    } else {
      g.position.set(side < 0 ? -2.1 : 0.4, 1.45, side < 0 ? 0.9 : 5.1);
    }
    g.scale.set(1.5, 1.5, 1);
    scene.add(g);
    const light = new THREE.PointLight(0xffd7a0, 30, 16, 2);
    light.position.copy(g.position);
    scene.add(light);
    muzzleLights.push({ g, light, t: 0.1 });
  };
  return {
    cab, tim, mace, jake, attackers, windshield, cracks, crackMat, rearCrackMat, tireWarn, sideGlass, windMat, beams, get speed() { return speed; }, update, trees, rails, lines, road, roadTex, smoke, smokeMat,
    setSpeed(v) { speed = v; },
    setShake(v) { shake = v; },
    startEngine() {
      driving = true;
      speed = 13;
      for (const b of beams) b.intensity = 150;
      for (const a of attackers) { a.setExpression?.('angry'); a.setTalking?.(1.2, 1); }
      tim.setExpression('determined');
      audio.setWind(0.95);
      audio.tone({ freq: 70, dur: 1.6, gain: 0.14, type: 'sawtooth', slide: 0.5 });
      audio.tone({ freq: 140, dur: 1.2, gain: 0.05, type: 'square', slide: 0.7, delay: 0.2 });
    },
    attack(side = -1) {
      muzzleFlash(side);
      shake = 0.16;
      crackMat.opacity = Math.min(1, crackMat.opacity + 0.55);
      audio.shot();
    },
    breakSideGlass() {
      sideGlass.visible = false;
      windMat.opacity = 0.03;
      shake = 0.2;
      audio.glass();
    },
    get driving() { return driving; },
    updateMuzzle(dt) {
      for (let i = muzzleLights.length - 1; i >= 0; i--) {
        const m = muzzleLights[i];
        m.t -= dt;
        m.light.intensity *= 0.72;
        m.g.material.opacity *= 0.7;
        if (m.t <= 0) { scene.remove(m.g, m.light); muzzleLights.splice(i, 1); }
      }
    },
    shootFromGate() {
      muzzleFlash(-1);
      rearCrackMat.opacity = Math.min(1, rearCrackMat.opacity + 0.8);
      shake = 0.22;
      audio.shot();
    },
    blowTire() {
      tireWarnMat.emissiveIntensity = 2.2;
      shake = 0.4;
      audio.noiseBurst({ dur: 0.55, freq: 900, q: 0.6, gain: 0.28, type: 'bandpass' });
      audio.tone({ freq: 70, dur: 0.8, gain: 0.12, type: 'sawtooth', slide: 0.4 });
      const burst = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,235,180,1)', 'rgba(255,140,40,0)'), transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
      burst.position.set(-1.35, 0.62, -1.9); burst.scale.set(1.8, 1.8, 1); scene.add(burst);
      setTimeout(() => { burst.material.opacity = 0; }, 140);
    },
    crash() {
      crashT = 2;
      for (const b of beams) b.intensity = 0;
      for (const c of cab.children) c.traverse?.(o => { if (o.isMesh && o.material && o.material.color) o.material = o.material.clone(); });
      cab.rotation.z = 0.18;
      cab.rotation.x = -0.1;
      cab.position.y = -0.12;
    },
    hitWindshield(amount = 0.5) {
      crackMat.opacity = Math.min(1, crackMat.opacity + amount);
    },
    get shake() { return shake; },
  };
}
