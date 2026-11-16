import * as THREE from 'three';
import { MAT, box, cyl, plane, blobShadow } from './models.js';
import { canvasTex, mulberry32 } from './textures.js';

/* ================================================================== *
 *  Face rig — expressions, blinks, lip-sync
 * ================================================================== */
class FaceRig {
  constructor(head, { skin, hair, teen = false, mask = null } = {}) {
    this.head = head;
    this.teen = teen;
    this.mask = mask;
    this.expression = 'neutral';
    this.talkEnergy = 0;
    this.talkTime = 0;
    this.blink = 0;
    this.blinkTimer = 1.5 + Math.random() * 2.5;
    this.time = 0;
    this.parts = {};

    const skinMat = skin;
    const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xe6dfcf, roughness: 0.42 });
    const irisMat = new THREE.MeshStandardMaterial({ color: teen ? 0x4d6b4a : 0x3c4d43, roughness: 0.4 });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x08090a, roughness: 0.5 });

    // eye sockets / lids
    for (const s of [-1, 1]) {
      const socket = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 8), eyeWhite);
      socket.scale.set(1.0, 0.82, 0.55);
      socket.position.set(s * 0.055, 0.035, 0.126);
      head.add(socket);
      const iris = new THREE.Mesh(new THREE.CircleGeometry(0.017, 12), irisMat);
      iris.position.set(s * 0.055, 0.035, 0.155);
      head.add(iris);
      const pupil = new THREE.Mesh(new THREE.CircleGeometry(0.008, 10), pupilMat);
      pupil.position.set(s * 0.055, 0.035, 0.157);
      head.add(pupil);
      const glint = new THREE.Mesh(new THREE.CircleGeometry(0.0035, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      glint.position.set(s * 0.055 + 0.006, 0.043, 0.1585);
      head.add(glint);

      const lid = new THREE.Group();
      lid.position.set(s * 0.055, 0.055, 0.118);
      const lidMesh = new THREE.Mesh(new THREE.SphereGeometry(0.037, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), skinMat);
      lidMesh.scale.set(1.02, 0.9, 0.5);
      lid.add(lidMesh);
      head.add(lid);
      this.parts['lid' + (s < 0 ? 'L' : 'R')] = lid;

      // brow
      const brow = box(0.055, 0.012, 0.016, hair, s * 0.058, 0.082, 0.142);
      brow.rotation.z = s * -0.06;
      head.add(brow);
      this.parts['brow' + (s < 0 ? 'L' : 'R')] = brow;

      // cheek
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 6), skinMat);
      cheek.scale.set(0.9, 0.7, 0.5);
      cheek.position.set(s * 0.085, -0.01, 0.1);
      head.add(cheek);
    }

    // nose
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.075, 5), skinMat);
    nose.rotation.x = Math.PI / 2.15;
    nose.position.set(0, -0.008, 0.152);
    head.add(nose);
    this.parts.nose = nose;

    // jaw group
    const jaw = new THREE.Group();
    jaw.position.set(0, -0.035, 0.018);
    head.add(jaw);
    this.parts.jaw = jaw;
    const chin = new THREE.Mesh(new THREE.SphereGeometry(0.082, 9, 7), skinMat);
    chin.scale.set(0.92, 0.62, 0.82);
    chin.position.set(0, -0.075, 0.035);
    jaw.add(chin);
    const lowerLip = box(0.062, 0.012, 0.02, skinMat, 0, -0.006, 0.13);
    jaw.add(lowerLip);
    this.parts.lowerLip = lowerLip;
    // dark mouth line
    const mouth = box(0.058, 0.01, 0.012, new THREE.MeshStandardMaterial({ color: 0x4a2a24, roughness: 0.85 }), 0, 0.012, 0.148);
    head.add(mouth);
    this.parts.mouth = mouth;
    const upperLip = box(0.06, 0.01, 0.014, skinMat, 0, 0.026, 0.149);
    head.add(upperLip);
    // mouth corners
    for (const s of [-1, 1]) {
      const corner = box(0.02, 0.008, 0.008, new THREE.MeshStandardMaterial({ color: 0x5a342b, roughness: 0.9 }), s * 0.036, 0.012, 0.147);
      corner.rotation.z = s * 0.2;
      head.add(corner);
      this.parts['corner' + (s < 0 ? 'L' : 'R')] = corner;
    }
    // ears
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.034, 8, 6), skinMat);
      ear.scale.set(0.45, 1, 0.72);
      ear.position.set(s * 0.148, 0.018, -0.004);
      head.add(ear);
    }
  }

  setExpression(name) {
    this.expression = name;
    const B = [this.parts.browL, this.parts.browR];
    const L = [this.parts.lidL, this.parts.lidR];
    const C = [this.parts.cornerL, this.parts.cornerR];
    for (const b of B) { b.position.y = 0.082; b.rotation.z = 0; }
    for (const l of L) { l.position.y = 0.055; l.scale.y = 1; }
    for (const c of C) { c.rotation.z = c.position.x > 0 ? 0.2 : -0.2; }
    this.parts.jaw.rotation.x = 0;
    this.parts.mouth.scale.y = 1;
    switch (name) {
      case 'angry':
      case 'snarl':
        B[0].position.y = 0.074; B[0].rotation.z = -0.34;
        B[1].position.y = 0.074; B[1].rotation.z = 0.34;
        L[0].scale.y = 0.62; L[1].scale.y = 0.62;
        C[0].rotation.z = -0.55; C[1].rotation.z = 0.55;
        this.parts.jaw.rotation.x = 0.06;
        this.parts.mouth.scale.y = 1.5;
        break;
      case 'scared':
        B[0].position.y = 0.096; B[0].rotation.z = 0.22;
        B[1].position.y = 0.096; B[1].rotation.z = -0.22;
        C[0].rotation.z = -0.5; C[1].rotation.z = 0.5;
        this.parts.jaw.rotation.x = 0.1;
        this.parts.mouth.scale.y = 1.8;
        break;
      case 'smirk':
        C[0].rotation.z = -0.15; C[1].rotation.z = -0.6;
        B[1].rotation.z = 0.18; B[1].position.y = 0.09;
        L[0].scale.y = 0.72;
        break;
      case 'sad':
        B[0].rotation.z = -0.28; B[1].rotation.z = 0.28;
        C[0].rotation.z = 0.32; C[1].rotation.z = -0.32;
        this.parts.jaw.rotation.x = 0.03;
        break;
      case 'determined':
        B[0].rotation.z = -0.18; B[1].rotation.z = 0.18;
        B[0].position.y = 0.078; B[1].position.y = 0.078;
        L[0].scale.y = 0.8; L[1].scale.y = 0.8;
        break;
      case 'tired':
        L[0].scale.y = 0.55; L[1].scale.y = 0.55;
        B[0].position.y = 0.076; B[1].position.y = 0.076;
        C[0].rotation.z = 0.34; C[1].rotation.z = -0.34;
        break;
      case 'shock':
        B[0].position.y = 0.1; B[1].position.y = 0.1;
        L[0].scale.y = 1.25; L[1].scale.y = 1.25;
        this.parts.jaw.rotation.x = 0.2;
        this.parts.mouth.scale.y = 2.4;
        break;
      default: // neutral / calm
        break;
    }
  }

  speak(seconds, energy = 1) {
    this.talkTime = Math.max(this.talkTime, seconds);
    this.talkEnergy = energy;
  }

  update(dt) {
    this.time += dt;
    // blink
    this.blinkTimer -= dt;
    if (this.blinkTimer <= 0) {
      this.blinkTimer = 2.2 + Math.random() * 4.4;
      this.blink = 0.16;
    }
    if (this.blink > 0) {
      this.blink -= dt;
      const k = this.blink > 0.08 ? (0.16 - this.blink) / 0.08 : this.blink / 0.08;
      for (const l of [this.parts.lidL, this.parts.lidR]) l.scale.y = 1 + Math.max(0, 1 - Math.abs(k)) * 0.0 + (1 - Math.min(1, k * 2)) * 2.4;
    } else if (this.expression !== 'shock') {
      for (const l of [this.parts.lidL, this.parts.lidR]) {
        const base = this.expression === 'tired' ? 1.35 : this.expression === 'angry' || this.expression === 'snarl' ? 1.5 : 1;
        l.scale.y += (base - l.scale.y) * Math.min(1, dt * 12);
      }
    }

    // talk
    if (this.talkTime > 0) {
      this.talkTime -= dt;
      this.talkEnergy = Math.min(1, this.talkEnergy + dt * 2);
      const t = this.time;
      const env = Math.min(1, this.talkTime * 2.2) * this.talkEnergy;
      const jaw = (0.08 + Math.abs(Math.sin(t * 15.5) * 0.16 + Math.sin(t * 27.3) * 0.04)) * env;
      this.parts.jaw.rotation.x = Math.max(this.parts.jaw.rotation.x * 0.7, jaw);
      this.parts.mouth.scale.y = 1 + env * (0.8 + Math.sin(t * 9) * 0.35);
      this.parts.browL.position.y += Math.sin(t * 5.4) * 0.0018 * env;
      this.parts.browR.position.y += Math.cos(t * 4.7) * 0.0018 * env;
      this.head.rotation.z = Math.sin(t * 2.1) * 0.018 * env;
      this.head.position.y = 1.62 + Math.sin(t * 3.1) * 0.006 * env;
    } else {
      this.parts.jaw.rotation.x += (0 - this.parts.jaw.rotation.x) * Math.min(1, dt * 10);
      this.parts.mouth.scale.y += (1 - this.parts.mouth.scale.y) * Math.min(1, dt * 10);
      this.head.rotation.z += (0 - this.head.rotation.z) * Math.min(1, dt * 4);
    }
  }
}

/* ================================================================== *
 *  Shared hand builder
 * ================================================================== */
function makeHand(parent, side, skinMat, { fingers = 4, scale = 1 } = {}) {
  const hand = new THREE.Group();
  parent.add(hand);
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.055 * scale, 7, 6), skinMat);
  palm.scale.set(0.82, 1.1, 0.62);
  hand.add(palm);
  const fingerParts = [];
  for (let i = 0; i < fingers; i++) {
    const f = new THREE.Group();
    f.position.set((-0.5 + (i + 0.5) / fingers) * 0.075 * scale, -0.05 * scale, 0.005);
    const seg = new THREE.Mesh(new THREE.CapsuleGeometry(0.009 * scale, 0.05 * scale, 3, 5), skinMat);
    seg.position.y = -0.03 * scale;
    seg.rotation.x = 0.15;
    f.add(seg);
    hand.add(f);
    fingerParts.push(f);
  }
  // thumb
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.011 * scale, 0.045 * scale, 3, 5), skinMat);
  thumb.position.set(side * 0.045 * scale, -0.01, 0.012);
  thumb.rotation.z = side * 0.75;
  hand.add(thumb);
  hand.userData.fingers = fingerParts;
  return hand;
}

/* ================================================================== *
 *  TIM — teenage boy, old band tee, backpack, headphones
 * ================================================================== */
function teeTexture() {
  return canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(404);
    ctx.fillStyle = '#4d5b54'; ctx.fillRect(0, 0, w, h);
    // fabric weave
    for (let i = 0; i < 5000; i++) {
      const v = 50 + r() * 60;
      ctx.fillStyle = `rgba(${v},${v + 8},${v + 2},${0.05 + r() * 0.1})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 3, 1 + r() * 2);
    }
    // worn band print
    ctx.save();
    ctx.translate(w / 2, h * 0.46);
    ctx.rotate(-0.03);
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(226,208,174,.62)';
    ctx.font = '400 74px "Bebas Neue", Impact, sans-serif';
    ctx.fillText('DEAD', 0, -34);
    ctx.fillStyle = 'rgba(196,91,52,.72)';
    ctx.font = '400 54px "Bebas Neue", Impact, sans-serif';
    ctx.fillText('SIGNAL', 0, 14);
    ctx.strokeStyle = 'rgba(226,208,174,.5)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, -10, 104, 0.15, Math.PI - 0.15); ctx.stroke();
    ctx.beginPath(); ctx.arc(0, -10, 96, 3.3, 6.1); ctx.stroke();
    ctx.restore();
    // cracks in the print
    ctx.strokeStyle = 'rgba(42,46,40,.36)'; ctx.lineWidth = 2;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath(); ctx.moveTo(r() * w, h * 0.2 + r() * h * 0.5); ctx.lineTo(r() * w, h * 0.3 + r() * h * 0.5); ctx.stroke();
    }
    // holes and stains
    for (let i = 0; i < 9; i++) {
      ctx.fillStyle = `rgba(30,32,26,${0.3 + r() * 0.3})`;
      ctx.beginPath(); ctx.ellipse(r() * w, h * 0.5 + r() * h * 0.45, 2 + r() * 9, 2 + r() * 6, r() * 3, 0, 7); ctx.fill();
    }
    for (let i = 0; i < 10; i++) {
      const g = ctx.createRadialGradient(r() * w, r() * h, 1, r() * w, r() * h, 35 + r() * 60);
      g.addColorStop(0, 'rgba(50,38,24,.24)'); g.addColorStop(1, 'rgba(50,38,24,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    }
  });
}

export class TimCharacter {
  constructor(opts = {}) {
    this.group = new THREE.Group();
    this.group.name = 'Tim';
    const parts = this.parts = {};
    const body = this.body = new THREE.Group();
    this.group.add(body);

    const skinMat = new THREE.MeshStandardMaterial({ color: 0xc08a63, roughness: 0.82 });
    const skinShade = new THREE.MeshStandardMaterial({ color: 0xa87652, roughness: 0.86 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 0.95 });
    const teeMat = new THREE.MeshStandardMaterial({ map: teeTexture(), roughness: 0.96 });
    const jeansMat = new THREE.MeshStandardMaterial({ color: 0x3c4652, roughness: 0.96 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x2a251d, roughness: 0.94 });
    const laceMat = new THREE.MeshStandardMaterial({ color: 0xb9ac8b, roughness: 1 });
    const packMat = new THREE.MeshStandardMaterial({ color: 0x5a3d2a, roughness: 0.94 });
    const flannelMat = new THREE.MeshStandardMaterial({ color: 0x5d3b32, roughness: 1 });

    const hips = box(0.35, 0.19, 0.23, jeansMat, 0, 0.93, 0);
    body.add(hips);
    // belt
    body.add(box(0.37, 0.045, 0.245, new THREE.MeshStandardMaterial({ color: 0x2c2419, roughness: 0.9 }), 0, 0.99, 0));
    const buckle = box(0.055, 0.045, 0.02, new THREE.MeshStandardMaterial({ color: 0x8a7c5a, metalness: 0.7, roughness: 0.4 }), 0, 0.99, 0.13);
    body.add(buckle);

    const torso = new THREE.Group();
    torso.position.y = 1.02;
    body.add(torso);
    parts.torso = torso;
    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(0.195, 0.34, 5, 10), teeMat);
    chest.scale.set(1.04, 1, 0.72);
    chest.position.y = 0.22;
    torso.add(chest);
    // neckline
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.018, 5, 12), teeMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 0.44, 0.02);
    torso.add(collar);
    // sleeves (rolled)
    for (const s of [-1, 1]) {
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.085, 0.18, 8), teeMat);
      sleeve.position.set(s * 0.27, 0.3, 0);
      sleeve.rotation.z = s * 0.24;
      torso.add(sleeve);
      const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.072, 0.013, 5, 8), teeMat);
      cuff.position.set(s * 0.3, 0.22, 0);
      cuff.rotation.z = s * 0.24;
      cuff.rotation.x = Math.PI / 2;
      torso.add(cuff);
    }
    // flannel tied around waist
    const flannel = new THREE.Group();
    const waistWrap = new THREE.Mesh(new THREE.CylinderGeometry(0.235, 0.21, 0.2, 10, 1, true), flannelMat);
    waistWrap.position.y = 0.05;
    flannel.add(waistWrap);
    for (const s of [-1, 1]) {
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.42, 6), flannelMat);
      sleeve.position.set(s * 0.15, -0.12, -0.13);
      sleeve.rotation.z = s * 0.16;
      sleeve.rotation.x = 0.3;
      flannel.add(sleeve);
    }
    flannel.position.y = 0.02;
    body.add(flannel);

    // messy shirt wrinkles
    for (let i = 0; i < 5; i++) {
      const wr = box(0.012, 0.06, 0.004, new THREE.MeshStandardMaterial({ color: 0x39443c, roughness: 1 }), -0.1 + i * 0.05, 0.1 + (i % 2) * 0.1, 0.135);
      wr.rotation.z = (i - 2) * 0.15;
      torso.add(wr);
    }

    // head
    const neck = cyl(0.062, 0.072, 0.12, skinMat, 8, 0, 0.51, 0);
    torso.add(neck);
    const head = new THREE.Group();
    head.position.set(0, 0.63, 0);
    torso.add(head);
    parts.head = head;
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.145, 16, 14), skinMat);
    skull.scale.set(0.93, 1.06, 0.97);
    skull.position.y = 0.03;
    head.add(skull);
    // jawline / chin
    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), skinMat);
    jaw.scale.set(0.86, 0.78, 0.9);
    jaw.position.set(0, -0.055, 0.03);
    head.add(jaw);
    // messy hair — cap + fringe strands
    const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.152, 14, 12, 0, Math.PI * 2, 0, 1.85), hairMat);
    hairCap.position.set(0, 0.055, -0.008);
    hairCap.rotation.x = -0.12;
    head.add(hairCap);
    const fringe = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const strand = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.11, 5), hairMat);
      strand.position.set(-0.1 + i * 0.033, 0.105, 0.12 + (i % 2) * 0.012);
      strand.rotation.set(2.7 + Math.random() * 0.4, 0, (i - 3) * 0.12);
      fringe.add(strand);
    }
    head.add(fringe);
    for (const s of [-1, 1]) {
      const sideburn = box(0.022, 0.06, 0.02, hairMat, s * 0.135, 0.01, 0.026);
      head.add(sideburn);
    }

    parts.face = new FaceRig(head, { skin: skinMat, hair: hairMat, teen: true });
    parts.face.setExpression('tired');

    // band-aid on cheek, dirt smudge
    const bandaid = box(0.045, 0.012, 0.006, new THREE.MeshStandardMaterial({ color: 0xd0b183, roughness: 0.9 }), 0.085, -0.03, 0.128);
    bandaid.rotation.z = 0.5; head.add(bandaid);
    const dirt = new THREE.Mesh(new THREE.SphereGeometry(0.03, 7, 5), new THREE.MeshStandardMaterial({ color: 0x6b5038, roughness: 1, transparent: true, opacity: 0.3 }));
    dirt.scale.set(1.2, 0.6, 0.3); dirt.position.set(-0.09, -0.05, 0.108); head.add(dirt);

    // headphones around neck
    const hp = new THREE.Group();
    const bandMat = new THREE.MeshStandardMaterial({ color: 0x272b28, roughness: 0.7, metalness: 0.3 });
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.155, 0.014, 5, 16, Math.PI), bandMat);
    band.rotation.z = Math.PI;
    band.position.set(0, 0.47, 0.02);
    hp.add(band);
    for (const s of [-1, 1]) {
      const cup = box(0.055, 0.09, 0.04, new THREE.MeshStandardMaterial({ color: 0x1a1d1b, roughness: 0.6 }), s * 0.15, 0.44, 0.03);
      cup.rotation.z = s * 0.25; hp.add(cup);
      const pad = box(0.04, 0.06, 0.012, new THREE.MeshStandardMaterial({ color: 0x4a4d47, roughness: 1 }), s * 0.15, 0.44, 0.055);
      hp.add(pad);
    }
    torso.add(hp);

    // backpack
    const pack = box(0.33, 0.44, 0.18, packMat, 0, 0.24, -0.19);
    pack.rotation.x = -0.05;
    torso.add(pack);
    const packFlap = box(0.31, 0.14, 0.02, new THREE.MeshStandardMaterial({ color: 0x4b3223, roughness: 1 }), 0, 0.38, -0.29);
    torso.add(packFlap);
    const packTop = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.1, 8, 1, false, 0, Math.PI), packMat);
    packTop.rotation.z = Math.PI / 2; packTop.rotation.x = Math.PI / 2;
    packTop.position.set(0, 0.48, -0.19);
    torso.add(packTop);
    for (const s of [-1, 1]) {
      const strap = box(0.045, 0.4, 0.025, new THREE.MeshStandardMaterial({ color: 0x3d2a1d, roughness: 1 }), s * 0.12, 0.27, 0.14);
      strap.rotation.x = -0.08;
      torso.add(strap);
    }
    const bedroll = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.4, 7), new THREE.MeshStandardMaterial({ color: 0x4d5142, roughness: 1 }));
    bedroll.rotation.z = Math.PI / 2;
    bedroll.position.set(0, 0.47, -0.29);
    torso.add(bedroll);
    // dangling key on pack
    const key = box(0.012, 0.06, 0.006, new THREE.MeshStandardMaterial({ color: 0x8a7c5a, metalness: 0.6, roughness: 0.5 }), 0.12, 0.18, 0.14);
    torso.add(key);

    // arms
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.265, 1.42, 0);
      body.add(shoulder);
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.066, 0.21, 4, 8), skinMat);
      upper.position.y = -0.15;
      shoulder.add(upper);
      // sleeve edge
      const sleeveEnd = new THREE.Mesh(new THREE.TorusGeometry(0.067, 0.016, 5, 9), teeMat);
      sleeveEnd.position.y = -0.04;
      sleeveEnd.rotation.x = Math.PI / 2;
      shoulder.add(sleeveEnd);
      const elbow = new THREE.Group();
      elbow.position.y = -0.31;
      shoulder.add(elbow);
      const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.2, 4, 8), skinMat);
      lower.position.y = -0.13;
      elbow.add(lower);
      const wristband = new THREE.Mesh(new THREE.TorusGeometry(0.047, 0.015, 5, 9), new THREE.MeshStandardMaterial({ color: side < 0 ? 0x8d6b2d : 0x39424a, roughness: 1 }));
      wristband.position.y = -0.255;
      wristband.rotation.x = Math.PI / 2;
      elbow.add(wristband);
      const hand = makeHand(elbow, side, skinMat, { scale: 0.92 });
      hand.position.y = -0.3;
      return { shoulder, elbow, hand };
    };
    parts.armL = makeArm(-1);
    parts.armR = makeArm(1);

    // legs
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.105, 0.94, 0);
      body.add(hip);
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.082, 0.26, 4, 8), jeansMat);
      thigh.position.y = -0.2;
      hip.add(thigh);
      // cargo pocket
      const pocket = box(0.07, 0.08, 0.02, new THREE.MeshStandardMaterial({ color: 0x333c47, roughness: 1 }), side * 0.055, -0.22, 0.07);
      thigh.add(pocket);
      const knee = new THREE.Group();
      knee.position.y = -0.4;
      hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.27, 4, 8), jeansMat);
      shin.position.y = -0.19;
      knee.add(shin);
      // cuffed hem
      const hem = new THREE.Mesh(new THREE.CylinderGeometry(0.078, 0.075, 0.05, 8), jeansMat);
      hem.position.y = -0.345;
      knee.add(hem);
      const boot = box(0.15, 0.13, 0.28, bootMat, 0, -0.41, 0.055);
      knee.add(boot);
      const toe = box(0.145, 0.08, 0.1, bootMat, 0, -0.44, 0.185);
      knee.add(toe);
      const sole = box(0.16, 0.035, 0.3, new THREE.MeshStandardMaterial({ color: 0x141311, roughness: 1 }), 0, -0.478, 0.055);
      knee.add(sole);
      // laces
      for (let i = 0; i < 3; i++) {
        const lace = box(0.09, 0.008, 0.008, laceMat, 0, -0.365 - i * 0.03, 0.15 - i * 0.012);
        knee.add(lace);
      }
      return { hip, knee, boot };
    };
    parts.legL = makeLeg(-1);
    parts.legR = makeLeg(1);

    // pistol (hidden)
    const gun = new THREE.Group();
    const grip = box(0.042, 0.12, 0.055, MAT.black, 0, -0.03, -0.01); grip.rotation.x = -0.18; gun.add(grip);
    const slide = box(0.042, 0.058, 0.22, MAT.darkMetal, 0, 0.052, 0.075); gun.add(slide);
    const barrel = cyl(0.011, 0.011, 0.08, MAT.black, 6, 0, 0.052, 0.2); barrel.rotation.x = Math.PI / 2; gun.add(barrel);
    const sight = box(0.008, 0.014, 0.01, MAT.metal, 0, 0.086, 0.16); gun.add(sight);
    gun.position.set(0, -0.31, 0.02);
    gun.rotation.x = 1.35;
    gun.visible = false;
    parts.armR.hand.add(gun);
    this.gun = gun;

    this.time = 0;
    this.state = opts.state ?? 'idle';
    this.crouch = 0;
    this.moveSpeed = 0;
    this.seated = false;
    this.poseLock = false;
    this.setLocomotion(0, 0);
    this.group.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    const sh = blobShadow(0.62, 0.9);
    sh.position.y = 0.012;
    this.group.add(sh);
    this.face = parts.face;
  }

  setGun(v) { this.gun.visible = v; }
  setTalking(seconds = 2, energy = 1) { this.face.speak(seconds, energy); }
  setExpression(name) { this.face.setExpression(name); }

  setSeated(v = true) {
    this.seated = v;
    if (v) {
      this.parts.legL.hip.rotation.x = -1.42;
      this.parts.legL.knee.rotation.x = 1.38;
      this.parts.legR.hip.rotation.x = -1.42;
      this.parts.legR.knee.rotation.x = 1.38;
      this.body.position.y = 0.16;
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

  updateFace(dt) {
    this.face.update(dt);
  }

  update(dt) {
    this.time += dt;
    this.updateFace(dt);
    if (this.poseLock) return;
    const t = this.time;
    const speed = this.moveSpeed ?? 0;
    const c = this.crouch;
    const stride = Math.sin(t * (5.3 + speed * 1.1)) * Math.min(1, speed / 2.4);
    const idle = speed < 0.2 ? Math.sin(t * 1.7) * 0.012 : 0;

    if (!this.seated) {
      this.body.position.y = -0.32 * c + (speed > 0.2 ? Math.abs(Math.sin(t * 9.4)) * 0.022 : 0);
      this.parts.legL.hip.rotation.x = -0.78 * c + stride * 0.6;
      this.parts.legR.hip.rotation.x = -0.78 * c - stride * 0.6;
      this.parts.legL.knee.rotation.x = 1.45 * c + Math.max(0, -stride) * 0.75;
      this.parts.legR.knee.rotation.x = 1.45 * c + Math.max(0, stride) * 0.75;
      this.parts.armL.shoulder.rotation.x = 0.08 * c - stride * 0.5;
      this.parts.armR.shoulder.rotation.x = 0.08 * c + stride * 0.5;
      this.parts.armL.elbow.rotation.x = -0.18 - Math.max(0, stride) * 0.25;
      this.parts.armR.elbow.rotation.x = -0.18 - Math.max(0, -stride) * 0.25;
      this.parts.armL.shoulder.rotation.z = 0.04;
      this.parts.armR.shoulder.rotation.z = -0.04;
      this.parts.torso.rotation.x = 0.16 * c + Math.abs(idle) * 0.1;
      this.parts.head.rotation.x = -0.12 * c + idle;
      this.parts.head.rotation.y = Math.sin(t * 0.42) * 0.06;
      this.parts.torso.position.y = 1.02 + idle * 0.2;
    }
  }
}

/* ================================================================== *
 *  MACE — masked heavy, shotgun
 * ================================================================== */
function tattooSkinTexture(seed = 77) {
  return canvasTex(512, 512, (ctx, w, h) => {
    const r = mulberry32(seed);
    // skin base
    ctx.fillStyle = '#b07b56';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) {
      const v = r();
      ctx.fillStyle = `rgba(${120 + v * 70},${80 + v * 50},${58 + v * 38},${0.04 + r() * 0.09})`;
      ctx.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2);
    }
    // tattoos in dark blue-green ink
    ctx.strokeStyle = 'rgba(28,56,60,.78)';
    ctx.fillStyle = 'rgba(28,56,60,.66)';
    ctx.lineWidth = 4;
    // snake
    ctx.beginPath();
    let x = 40, y = 80;
    ctx.moveTo(x, y);
    for (let i = 0; i < 14; i++) {
      x += 26 + Math.sin(i * 1.7) * 14;
      y += 24;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    // snake head
    ctx.beginPath(); ctx.ellipse(x + 10, y + 8, 22, 12, 0.6, 0, 7); ctx.fill();
    ctx.fillStyle = '#b07b56';
    ctx.beginPath(); ctx.arc(x + 18, y + 4, 2.6, 0, 7); ctx.fill();
    // dagger
    ctx.fillStyle = 'rgba(28,56,60,.7)';
    ctx.beginPath(); ctx.moveTo(330, 60); ctx.lineTo(362, 300); ctx.lineTo(340, 330); ctx.lineTo(322, 300); ctx.closePath(); ctx.fill();
    ctx.fillRect(300, 330, 76, 18);
    // flames
    ctx.strokeStyle = 'rgba(28,56,60,.55)';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      const bx = 90 + i * 34, by = 400;
      ctx.moveTo(bx, by + 70);
      ctx.quadraticCurveTo(bx - 26, by + 20, bx + 2, by - 30);
      ctx.quadraticCurveTo(bx + 30, by + 20, bx + 8, by + 70);
      ctx.stroke();
    }
    // rose + text
    ctx.strokeStyle = 'rgba(28,56,60,.62)'; ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath(); ctx.ellipse(420, 400, 38 - i * 6, 30 - i * 4, 0.4 + i * 0.5, 0, 7); ctx.stroke();
    }
    ctx.font = '400 34px "Special Elite", monospace';
    ctx.fillStyle = 'rgba(28,56,60,.66)';
    ctx.fillText('NO FEAR', 250, 500);
    // scars
    ctx.strokeStyle = 'rgba(150,104,76,.5)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(380, 120); ctx.lineTo(410, 180); ctx.stroke();
    // grime
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = `rgba(60,44,30,${r() * 0.12})`;
      ctx.beginPath(); ctx.ellipse(r() * w, r() * h, 4 + r() * 22, 3 + r() * 14, r() * 3, 0, 7); ctx.fill();
    }
  });
}

function maskKnitTexture() {
  return canvasTex(256, 256, (ctx, w, h) => {
    const r = mulberry32(911);
    ctx.fillStyle = '#2b2f2b'; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 2400; i++) {
      const v = 30 + r() * 34;
      ctx.strokeStyle = `rgba(${v},${v + 4},${v},${0.15 + r() * 0.3})`;
      ctx.lineWidth = 1 + r();
      const x = r() * w, y = r() * h;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 2 + r() * 4, y + 1 + r() * 2); ctx.stroke();
    }
    // fabric ribs
    for (let y = 0; y < h; y += 9) {
      ctx.strokeStyle = 'rgba(80,86,78,.1)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    // grime
    for (let i = 0; i < 20; i++) {
      const g = ctx.createRadialGradient(r() * w, r() * h, 1, r() * w, r() * h, 18 + r() * 40);
      g.addColorStop(0, 'rgba(20,18,14,.3)'); g.addColorStop(1, 'rgba(20,18,14,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    }
  }, { repeat: [2, 2] });
}

export class BanditCharacter {
  constructor(variant = 'mace') {
    this.variant = variant;
    this.group = new THREE.Group();
    const parts = this.parts = {};
    const body = this.body = new THREE.Group();
    this.group.add(body);
    const isMace = variant === 'mace';

    const skinMat = new THREE.MeshStandardMaterial({
      map: isMace ? null : tattooSkinTexture(variant === 'jake' ? 78 : 77),
      color: isMace ? 0xa97450 : 0xffffff,
      roughness: 0.84,
    });
    const skinPlain = new THREE.MeshStandardMaterial({ color: 0xa97450, roughness: 0.85 });
    const maskMat = new THREE.MeshStandardMaterial({ map: maskKnitTexture(), roughness: 1 });
    const shirtMat = new THREE.MeshStandardMaterial({
      color: isMace ? 0x4a4535 : 0x2c3430, roughness: 0.97,
    });
    const pantsMat = new THREE.MeshStandardMaterial({ color: isMace ? 0x3a382f : 0x28303a, roughness: 0.96 });
    const bootMat = new THREE.MeshStandardMaterial({ color: 0x1b1813, roughness: 0.95 });
    const gloveMat = new THREE.MeshStandardMaterial({ color: 0x272620, roughness: 0.92 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1b1a16, roughness: 1 });

    const scale = isMace ? 1.07 : 1.0;
    this.scale = scale;

    const hips = box(0.37 * scale, 0.2, 0.24, pantsMat, 0, 0.94, 0);
    body.add(hips);
    const belt = box(0.39 * scale, 0.06, 0.26, new THREE.MeshStandardMaterial({ color: 0x24211a, roughness: 0.9 }), 0, 1.0, 0);
    body.add(belt);
    const buckle = box(0.07, 0.05, 0.02, new THREE.MeshStandardMaterial({ color: 0x93845a, metalness: 0.7, roughness: 0.4 }), 0, 1.0, 0.135);
    body.add(buckle);

    const torso = new THREE.Group();
    torso.position.y = 1.04;
    body.add(torso);
    parts.torso = torso;
    const chest = new THREE.Mesh(new THREE.CapsuleGeometry(isMace ? 0.27 : 0.225, isMace ? 0.3 : 0.34, 5, 9), shirtMat);
    chest.scale.set(1.14, 1, isMace ? 0.9 : 0.78);
    chest.position.y = 0.24;
    torso.add(chest);
    // chest rig / harness
    if (isMace) {
      const rig = box(0.42, 0.3, 0.06, new THREE.MeshStandardMaterial({ color: 0x35342a, roughness: 0.95 }), 0, 0.25, 0.16);
      torso.add(rig);
      for (let i = 0; i < 3; i++) {
        const shell = cyl(0.022, 0.022, 0.1, new THREE.MeshStandardMaterial({ color: 0x8c3a2a, roughness: 0.6 }), 7, -0.12 + i * 0.09, 0.28, 0.2);
        shell.rotation.x = Math.PI / 2;
        torso.add(shell);
      }
      const strap = box(0.05, 0.5, 0.04, new THREE.MeshStandardMaterial({ color: 0x2b2a22, roughness: 1 }), -0.16, 0.25, 0.15);
      strap.rotation.z = 0.32; torso.add(strap);
    } else {
      // dog tags + neck tattoo
      const chain = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.006, 4, 12), MAT.metal);
      chain.rotation.x = Math.PI / 2.2; chain.position.set(0, 0.42, 0.1); torso.add(chain);
      const tag = box(0.05, 0.07, 0.006, MAT.metal, 0, 0.34, 0.14); tag.rotation.z = 0.15; torso.add(tag);
      const neckTat = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), new THREE.MeshStandardMaterial({ map: tattooSkinTexture(80), transparent: true, opacity: 0.85, roughness: 0.85 }));
      neckTat.scale.set(0.8, 0.6, 0.45); neckTat.position.set(0, 0.48, 0.06); torso.add(neckTat);
    }

    // head
    const neck = cyl(0.075, 0.085, 0.13, skinPlain, 8, 0, 0.51, 0);
    torso.add(neck);
    const head = new THREE.Group();
    head.position.set(0, 0.63, 0);
    torso.add(head);
    parts.head = head;
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 12), isMace ? maskMat : skinMat);
    skull.scale.set(0.95, 1.06, 0.96);
    skull.position.y = 0.03;
    head.add(skull);
    const jawMesh = new THREE.Mesh(new THREE.SphereGeometry(0.105, 10, 8), isMace ? maskMat : skinMat);
    jawMesh.scale.set(0.9, 0.78, 0.92);
    jawMesh.position.set(0, -0.06, 0.03);
    head.add(jawMesh);

    if (isMace) {
      // balaclava mask — eye and mouth openings, knit texture
      const eyeHole = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.062, 0.02), new THREE.MeshStandardMaterial({ color: 0x0d0f0d, roughness: 1 }));
      eyeHole.position.set(0, 0.03, 0.135);
      head.add(eyeHole);
      for (const s of [-1, 1]) {
        const eye = new THREE.Mesh(new THREE.SphereGeometry(0.023, 8, 6), new THREE.MeshStandardMaterial({ color: 0xd8d0bc, roughness: 0.35 }));
        eye.scale.set(1, 0.8, 0.5);
        eye.position.set(s * 0.05, 0.032, 0.143);
        head.add(eye);
        const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.009, 6, 5), new THREE.MeshStandardMaterial({ color: 0x0a0b09, roughness: 0.5 }));
        pupil.position.set(s * 0.05, 0.032, 0.152);
        head.add(pupil);
        const brow = box(0.06, 0.014, 0.012, new THREE.MeshStandardMaterial({ color: 0x2b2c26, roughness: 1 }), s * 0.055, 0.067, 0.145);
        brow.rotation.z = s * 0.18;
        head.add(brow);
      }
      const mouthHole = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.04, 0.02), new THREE.MeshStandardMaterial({ color: 0x1a1512, roughness: 1 }));
      mouthHole.position.set(0, -0.075, 0.128);
      head.add(mouthHole);
      // lip / teeth hint
      const teeth = box(0.08, 0.012, 0.006, new THREE.MeshStandardMaterial({ color: 0xd0c7ad, roughness: 0.5 }), 0, -0.064, 0.139);
      head.add(teeth);
      parts.mouth = teeth;
      // beanie
      const beanie = new THREE.Mesh(new THREE.SphereGeometry(0.158, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.6), new THREE.MeshStandardMaterial({ color: 0x3a3d32, roughness: 1 }));
      beanie.position.y = 0.075;
      beanie.scale.set(1.01, 0.86, 1.01);
      head.add(beanie);
      const fold = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.022, 5, 16), new THREE.MeshStandardMaterial({ color: 0x2f322a, roughness: 1 }));
      fold.rotation.x = Math.PI / 2;
      fold.position.y = 0.088;
      head.add(fold);
      // scarred eyebrow / dirt
      const scar = box(0.012, 0.045, 0.008, new THREE.MeshStandardMaterial({ color: 0x7d5140, roughness: 1 }), 0.105, 0.06, 0.11);
      scar.rotation.z = 0.5; head.add(scar);
      parts.face = new FaceRig(head, { skin: maskMat, hair: hairMat });
      // hide original eyes created by face rig? Keep — they sit behind mask hole; but duplicate. Remove face rig eye whites? simpler: face rig built eyes; hide them
      ['lidL','lidR'].forEach(k => { if (parts.face.parts[k]) parts.face.parts[k].visible = false; });
    } else {
      // Jake — buzz cut, scar, grin
      const buzz = new THREE.Mesh(new THREE.SphereGeometry(0.153, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.58), new THREE.MeshStandardMaterial({ color: 0x24231e, roughness: 1 }));
      buzz.position.y = 0.055;
      buzz.scale.set(0.99, 0.92, 0.99);
      head.add(buzz);
      for (let i = 0; i < 9; i++) {
        const stubble = box(0.012, 0.02, 0.008, new THREE.MeshStandardMaterial({ color: 0x34312a, roughness: 1 }), (Math.random() - 0.5) * 0.22, 0.06 + Math.random() * 0.04, (Math.random() - 0.5) * 0.2);
        head.add(stubble);
      }
      const scar = box(0.012, 0.075, 0.006, new THREE.MeshStandardMaterial({ color: 0x8a5a48, roughness: 1 }), -0.085, 0.0, 0.128);
      scar.rotation.z = -0.34;
      head.add(scar);
      const stubbleJaw = new THREE.Mesh(new THREE.SphereGeometry(0.104, 8, 6), new THREE.MeshStandardMaterial({ color: 0x3a332a, roughness: 1, transparent: true, opacity: 0.32 }));
      stubbleJaw.scale.set(0.92, 0.62, 0.94);
      stubbleJaw.position.set(0, -0.06, 0.04);
      head.add(stubbleJaw);
      parts.face = new FaceRig(head, { skin: skinMat, hair: new THREE.MeshStandardMaterial({ color: 0x1e1d18, roughness: 1 }) });
      parts.face.setExpression('smirk');
    }

    // arms
    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * (isMace ? 0.31 : 0.28), 1.44 * scale, 0);
      body.add(shoulder);
      const upMat = isMace ? shirtMat : skinMat;
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(isMace ? 0.085 : 0.073, 0.22, 4, 8), upMat);
      upper.position.y = -0.15;
      upper.scale.set(isMace ? 1.1 : 1, 1, isMace ? 1.1 : 0.96);
      shoulder.add(upper);
      if (isMace) {
        // rolled sleeve + forearm wrap
        const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.072, 0.078, 0.18, 8), new THREE.MeshStandardMaterial({ color: 0x39372c, roughness: 1 }));
        wrap.position.y = -0.25; wrap.rotation.z = 0; shoulder.add(wrap);
      }
      const elbow = new THREE.Group();
      elbow.position.y = -0.31;
      shoulder.add(elbow);
      const lower = new THREE.Mesh(new THREE.CapsuleGeometry(isMace ? 0.07 : 0.062, 0.2, 4, 8), isMace ? skinPlain : skinMat);
      lower.position.y = -0.13;
      elbow.add(lower);
      if (isMace) {
        const gloveCuff = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 5, 9), gloveMat);
        gloveCuff.rotation.x = Math.PI / 2;
        gloveCuff.position.y = -0.26;
        elbow.add(gloveCuff);
      }
      const hand = makeHand(elbow, side, isMace ? gloveMat : skinMat, { scale: isMace ? 1.15 : 1 });
      hand.position.y = -0.3;
      return { shoulder, elbow, hand };
    };
    parts.armL = makeArm(-1);
    parts.armR = makeArm(1);

    // gold chain for Jake
    if (!isMace) {
      const chain = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.007, 4, 16), new THREE.MeshStandardMaterial({ color: 0xc2a252, metalness: 0.85, roughness: 0.35 }));
      chain.rotation.x = Math.PI / 2.3;
      chain.position.set(0, 0.44, 0.07);
      torso.add(chain);
    }

    // knife sheath on thigh
    if (!isMace) {
      const sheath = box(0.04, 0.18, 0.03, new THREE.MeshStandardMaterial({ color: 0x2a2118, roughness: 1 }), 0.16, 0.76, 0.08);
      sheath.rotation.z = 0.25;
      body.add(sheath);
    }

    // legs
    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.11, 0.94, 0);
      body.add(hip);
      const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(isMace ? 0.1 : 0.09, 0.26, 4, 8), pantsMat);
      thigh.position.y = -0.2;
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.4;
      hip.add(knee);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(isMace ? 0.084 : 0.074, 0.27, 4, 8), pantsMat);
      shin.position.y = -0.19;
      knee.add(shin);
      const boot = box(isMace ? 0.17 : 0.15, 0.15, 0.3, bootMat, 0, -0.4, 0.06);
      knee.add(boot);
      const sole = box(isMace ? 0.18 : 0.16, 0.035, 0.32, new THREE.MeshStandardMaterial({ color: 0x121110, roughness: 1 }), 0, -0.48, 0.06);
      knee.add(sole);
      return { hip, knee, boot };
    };
    parts.legL = makeLeg(-1);
    parts.legR = makeLeg(1);

    if (isMace) {
      // shotgun
      const sg = new THREE.Group();
      const barrel = cyl(0.024, 0.028, 0.9, new THREE.MeshStandardMaterial({ color: 0x2f3330, metalness: 0.65, roughness: 0.35 }), 8, 0, 0, 0.3);
      barrel.rotation.x = Math.PI / 2; sg.add(barrel);
      const tube = cyl(0.02, 0.02, 0.64, new THREE.MeshStandardMaterial({ color: 0x262a27, metalness: 0.5, roughness: 0.45 }), 7, 0, -0.045, 0.25);
      tube.rotation.x = Math.PI / 2; sg.add(tube);
      const pump = box(0.08, 0.075, 0.2, MAT.wood, 0, -0.03, 0.18); sg.add(pump);
      const receiver = box(0.07, 0.09, 0.24, new THREE.MeshStandardMaterial({ color: 0x24261f, metalness: 0.5, roughness: 0.5 }), 0, 0, -0.07); sg.add(receiver);
      const stock = box(0.06, 0.11, 0.4, MAT.wood, 0, -0.01, -0.36); stock.rotation.x = 0.08; sg.add(stock);
      const grip = box(0.055, 0.11, 0.1, MAT.wood, 0, -0.075, -0.1); sg.add(grip);
      const trigger = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.005, 4, 8, Math.PI), MAT.metal);
      trigger.position.set(0, -0.06, -0.04); sg.add(trigger);
      sg.position.set(0, -0.3, 0.08);
      sg.rotation.x = 1.42;
      parts.armR.hand.add(sg);
      parts.gun = sg;
    } else {
      // dagger
      const knife = new THREE.Group();
      const blade = box(0.016, 0.045, 0.3, new THREE.MeshStandardMaterial({ color: 0xc2c8bd, metalness: 0.85, roughness: 0.22 }), 0, 0.02, 0.15);
      blade.scale.z = 1;
      knife.add(blade);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.1, 4), new THREE.MeshStandardMaterial({ color: 0xc2c8bd, metalness: 0.85, roughness: 0.2 }));
      tip.rotation.x = Math.PI / 2;
      tip.position.set(0, 0.02, 0.35);
      knife.add(tip);
      const guard = box(0.09, 0.02, 0.025, MAT.darkMetal, 0, 0, 0.0); knife.add(guard);
      const hilt = box(0.032, 0.048, 0.11, new THREE.MeshStandardMaterial({ color: 0x2a2420, roughness: 0.9 }), 0, 0, -0.06); knife.add(hilt);
      knife.position.set(0, -0.31, 0.03);
      knife.rotation.x = 1.45;
      parts.armR.hand.add(knife);
      parts.knife = knife;
    }

    this.time = 0;
    this.moveSpeed = 0;
    this.crouch = 0;
    this.seated = false;
    this.poseLock = false;
    this.face = parts.face;
    this.group.scale.setScalar(scale);
    this.group.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.group.add(blobShadow(0.62 * scale, 0.9));
  }

  setTalking(seconds = 2, energy = 1) { this.face?.speak(seconds, energy); }
  setExpression(name) { this.face?.setExpression(name); }
  setCrouch(a) { this.crouch = a; }
  setLocomotion(speed, dt) { this.moveSpeed = speed; this.time += dt; }
  setGunRaised(v) {
    if (!this.parts.gun) return;
    this.parts.armR.shoulder.rotation.x = v ? -1.35 : 0;
    this.parts.armR.elbow.rotation.x = v ? -0.5 : 0;
    this.parts.armL.shoulder.rotation.x = v ? -1.1 : 0;
    this.parts.armL.elbow.rotation.x = v ? -1.0 : 0;
  }
  update(dt) {
    this.time += dt;
    this.face?.update(dt);
    if (this.poseLock) return;
    const t = this.time;
    const speed = this.moveSpeed || 0;
    const stride = Math.sin(t * (5.2 + speed * 1.1)) * Math.min(1, speed / 2.4);
    const c = this.crouch;
    if (!this.seated) {
      this.body.position.y = -0.28 * c + (speed > 0.2 ? Math.abs(Math.sin(t * 9.4)) * 0.02 : 0);
      this.parts.legL.hip.rotation.x = -0.7 * c + stride * 0.58;
      this.parts.legR.hip.rotation.x = -0.7 * c - stride * 0.58;
      this.parts.legL.knee.rotation.x = 1.4 * c + Math.max(0, -stride) * 0.7;
      this.parts.legR.knee.rotation.x = 1.4 * c + Math.max(0, stride) * 0.7;
      if (!this.holdingGun) {
        this.parts.armL.shoulder.rotation.x = 0.06 * c - stride * 0.44;
        this.parts.armR.shoulder.rotation.x = 0.06 * c + stride * 0.44;
        this.parts.armL.elbow.rotation.x = -0.16 - Math.max(0, stride) * 0.22;
        this.parts.armR.elbow.rotation.x = -0.16 - Math.max(0, -stride) * 0.22;
      }
      this.parts.torso.rotation.x = 0.12 * c + (speed > 0.2 ? Math.abs(stride) * 0.025 : 0);
      this.parts.head.rotation.y = Math.sin(t * 0.38) * 0.05;
    }
  }
}

export function createMace() {
  const c = new BanditCharacter('mace');
  c.setExpression('angry');
  return c;
}

export function createJake() {
  const c = new BanditCharacter('jake');
  c.setExpression('smirk');
  return c;
}
