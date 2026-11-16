/* ------------------------------------------------------------------ *
 *  Procedural audio engine — no external assets.
 *  Everything is synthesized with WebAudio after the first gesture.
 * ------------------------------------------------------------------ */
const SCALES = {
  menu: [55, 55, 82.41, 110, 130.81, 164.81, 220],
  tense: [49, 58.27, 73.42, 98, 116.54, 146.83, 196],
  sad: [43.65, 55, 65.41, 87.31, 110, 130.81, 174.61],
  calm: [65.41, 82.41, 98, 130.81, 164.81, 196],
  dark: [41.2, 43.65, 61.74, 82.41, 103.83, 123.47, 164.81],
};

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = localStorage.getItem('lastcan_muted') === '1';
    this.mood = 'menu';
    this.noteTimer = 0;
    this.musicTimer = 0;
    this.ambient = {};
    this.volume = 0.85;
  }

  ensure() {
    if (this.ready) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return true;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    try {
      const ctx = this.ctx = new AC();
      this.master = ctx.createGain();
      this.master.gain.value = this.muted ? 0 : this.volume;
      this.master.connect(ctx.destination);
      this.ambientBus = ctx.createGain(); this.ambientBus.gain.value = 0.9; this.ambientBus.connect(this.master);
      this.musicBus = ctx.createGain(); this.musicBus.gain.value = 0.58; this.musicBus.connect(this.master);
      this.sfxBus = ctx.createGain(); this.sfxBus.gain.value = 0.9; this.sfxBus.connect(this.master);
      // simple generated reverb
      this.reverb = ctx.createConvolver();
      this.reverb.buffer = this.makeImpulse(2.6, 2.4);
      this.reverbGain = ctx.createGain(); this.reverbGain.gain.value = 0.32;
      this.reverb.connect(this.reverbGain); this.reverbGain.connect(this.master);
      this.musicSend = ctx.createGain(); this.musicSend.gain.value = 0.5; this.musicBus.connect(this.musicSend); this.musicSend.connect(this.reverb);
      this.noise = this.makeNoise(4);
      this.ready = true;
      this.startWind(0.55);
      this.setMood('menu');
      return true;
    } catch (err) {
      console.warn('Audio unavailable', err);
      return false;
    }
  }

  makeNoise(seconds) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  makeImpulse(seconds, decay) {
    const ctx = this.ctx;
    const len = ctx.sampleRate * seconds;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }

  setMuted(m) {
    this.muted = m;
    localStorage.setItem('lastcan_muted', m ? '1' : '0');
    if (this.ready) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.linearRampToValueAtTime(m ? 0 : this.volume, this.ctx.currentTime + 0.25);
    }
  }

  setVolume(v) {
    this.volume = v;
    localStorage.setItem('lastcan_volume', String(v));
    if (this.ready && !this.muted) this.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.1);
  }

  startWind(level = 0.5) {
    if (!this.ready || this.ambient.wind) return;
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420; lp.Q.value = 0.7;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 90;
    const gain = ctx.createGain(); gain.gain.value = 0.11 * level;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
    const lfoGain = ctx.createGain(); lfoGain.gain.value = 0.035;
    lfo.connect(lfoGain); lfoGain.connect(gain.gain);
    src.connect(hp); hp.connect(lp); lp.connect(gain); gain.connect(this.ambientBus);
    src.start(); lfo.start();
    this.ambient.wind = { src, gain, lfo };
  }

  setWind(level) {
    if (!this.ready || !this.ambient.wind) return;
    this.ambient.wind.gain.gain.setTargetAtTime(0.11 * level, this.ctx.currentTime, 2.5);
  }

  startDrone() {
    if (!this.ready || this.ambient.drone) return;
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = 0.035; g.connect(this.ambientBus);
    const o1 = ctx.createOscillator(); o1.type = 'sine'; o1.frequency.value = 43.65;
    const o2 = ctx.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 65.41;
    const o3 = ctx.createOscillator(); o3.type = 'sine'; o3.frequency.value = 87.31; o3.detune.value = 8;
    const g2 = ctx.createGain(); g2.gain.value = 0.35;
    o1.connect(g); o2.connect(g2); g2.connect(g); o3.connect(g);
    o1.start(); o2.start(); o3.start();
    this.ambient.drone = { g, nodes: [o1, o2, o3] };
  }

  setMood(mood) {
    this.mood = mood;
    if (!this.ready) return;
    this.startDrone();
    if (this.ambient.drone) {
      const base = SCALES[mood]?.[0] ?? 55;
      const nodes = this.ambient.drone.nodes;
      nodes[0].frequency.setTargetAtTime(base, this.ctx.currentTime, 2);
      nodes[1].frequency.setTargetAtTime(base * 1.5, this.ctx.currentTime, 2);
      nodes[2].frequency.setTargetAtTime(base * 2, this.ctx.currentTime, 2);
      this.ambient.drone.g.gain.setTargetAtTime(mood === 'tense' || mood === 'dark' ? 0.05 : 0.03, this.ctx.currentTime, 2);
    }
    this.musicTimer = 0;
    this.noteTimer = 1.5;
  }

  setAmbientScene(name) {
    if (!this.ready) return;
    const levels = { menu: 0.65, truck: 0.42, city: 0.7, highway: 0.85, gameplay: 0.7, store: 0.3, vent: 0.2, end: 0.4 };
    this.setWind(levels[name] ?? 0.55);
    if (name === 'city') this.setMood('sad');
    else if (name === 'highway') this.setMood('calm');
    else if (name === 'gameplay') this.setMood('tense');
    else if (name === 'menu') this.setMood('menu');
    else if (name === 'truck') this.setMood('sad');
    else if (name === 'store' || name === 'vent') this.setMood('dark');
    if (name === 'menu' || name === 'city') this.startBirds();
  }

  /* ---------------- one-shots ---------------- */
  noiseBurst({ dur = 0.2, freq = 700, q = 0.8, gain = 0.3, type = 'bandpass', pan = 0, delay = 0 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    src.connect(f); f.connect(g); g.connect(p); p.connect(this.sfxBus);
    src.start(t); src.stop(t + dur + 0.05);
  }

  tone({ freq = 220, dur = 0.4, gain = 0.15, type = 'sine', slide = 0, delay = 0, attack = 0.01, pan = 0 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + delay;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    o.connect(g); g.connect(p); p.connect(this.sfxBus);
    o.start(t); o.stop(t + dur + 0.05);
  }

  ui() { this.tone({ freq: 620, dur: 0.06, gain: 0.04, type: 'triangle' }); }
  hover() { this.tone({ freq: 340, dur: 0.045, gain: 0.018, type: 'triangle' }); }
  woodKnock() {
    this.noiseBurst({ dur: 0.12, freq: 320, q: 1.2, gain: 0.38 });
    this.tone({ freq: 108, dur: 0.18, gain: 0.24, type: 'sine', slide: 0.65 });
    this.tone({ freq: 220, dur: 0.07, gain: 0.07, type: 'square', slide: 0.7 });
  }
  step(hard = false) {
    this.noiseBurst({ dur: 0.1, freq: hard ? 180 : 300, q: 0.6, gain: 0.06 });
    this.tone({ freq: 65, dur: 0.08, gain: 0.045, type: 'sine', slide: 0.7 });
  }
  cloth() { this.noiseBurst({ dur: 0.28, freq: 1100, q: 0.5, gain: 0.07, type: 'highpass' }); }
  canOpen() {
    this.noiseBurst({ dur: 0.08, freq: 2600, q: 2, gain: 0.1 });
    this.tone({ freq: 1400, dur: 0.3, gain: 0.045, type: 'triangle', slide: 0.8 });
    this.tone({ freq: 1860, dur: 0.18, gain: 0.03, type: 'sine', slide: 0.6, delay: 0.06 });
  }
  swallow() { this.noiseBurst({ dur: 0.18, freq: 420, q: 1.4, gain: 0.06 }); }
  glass() {
    this.noiseBurst({ dur: 0.55, freq: 2800, q: 0.5, gain: 0.5, type: 'highpass' });
    for (let i = 0; i < 8; i++) this.tone({ freq: 1500 + Math.random() * 3000, dur: 0.25 + Math.random() * 0.5, gain: 0.035, type: 'sine', slide: 0.55, delay: 0.03 + Math.random() * 0.22 });
    this.tone({ freq: 90, dur: 0.4, gain: 0.2, type: 'sine', slide: 0.5 });
  }
  shot() {
    this.noiseBurst({ dur: 0.6, freq: 900, q: 0.4, gain: 0.75, type: 'lowpass' });
    this.tone({ freq: 140, dur: 0.5, gain: 0.4, type: 'sawtooth', slide: 0.3 });
    this.noiseBurst({ dur: 0.25, freq: 3200, q: 0.6, gain: 0.22, type: 'highpass', delay: 0.02 });
  }
  roar() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(160, t); o.frequency.exponentialRampToValueAtTime(38, t + 2.4);
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.setValueAtTime(78, t); o2.frequency.exponentialRampToValueAtTime(31, t + 2.2);
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(1300, t); f.frequency.exponentialRampToValueAtTime(120, t + 2.2);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.32, t + 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.5);
    const p = ctx.createStereoPanner(); p.pan.value = 0.15;
    o.connect(f); o2.connect(f); f.connect(g); g.connect(p); p.connect(this.sfxBus);
    o.start(t); o2.start(t); o.stop(t + 2.6); o2.stop(t + 2.6);
  }
  sting() {
    [880, 932.3, 1244.5, 1760].forEach((f, i) => this.tone({ freq: f, dur: 1.4 + i * 0.1, gain: 0.035, type: 'sine', slide: 0.98, delay: i * 0.018 }));
    this.tone({ freq: 55, dur: 1.6, gain: 0.16, type: 'triangle', slide: 0.7 });
  }
  doorCreak() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(70, t); o.frequency.linearRampToValueAtTime(210, t + 0.8); o.frequency.linearRampToValueAtTime(120, t + 1.4);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 620; f.Q.value = 5;
    const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.055, t + 0.2); g.gain.setValueAtTime(0.04, t + 1.1); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
    o.connect(f); f.connect(g); g.connect(this.sfxBus); o.start(t); o.stop(t + 1.6);
    this.noiseBurst({ dur: 1.2, freq: 2400, q: 1.2, gain: 0.02, type: 'bandpass' });
  }
  alarm() {
    for (let i = 0; i < 4; i++) {
      this.tone({ freq: 780, dur: 0.18, gain: 0.07, type: 'square', delay: i * 0.34 });
      this.tone({ freq: 560, dur: 0.16, gain: 0.05, type: 'square', delay: i * 0.34 + 0.16 });
    }
  }
  heartbeat() {
    this.tone({ freq: 58, dur: 0.2, gain: 0.18, type: 'sine', slide: 0.6 });
    this.tone({ freq: 48, dur: 0.24, gain: 0.14, type: 'sine', slide: 0.55, delay: 0.24 });
  }
  whoosh() { this.noiseBurst({ dur: 0.9, freq: 700, q: 0.4, gain: 0.12, type: 'bandpass' }); }
  climb() { this.noiseBurst({ dur: 0.4, freq: 420, q: 0.5, gain: 0.12 }); this.cloth(); }
  vent() { this.noiseBurst({ dur: 0.5, freq: 1600, q: 3, gain: 0.09, type: 'bandpass' }); this.tone({ freq: 320, dur: 0.35, gain: 0.05, type: 'triangle', slide: 0.7 }); }
  birds(level = 0.5) {
    for (let i = 0; i < 3; i++) {
      const f = 1200 + Math.random() * 1400;
      this.tone({ freq: f, dur: 0.08, gain: 0.012 * level, type: 'sine', slide: 1.3, delay: Math.random() * 1.5, pan: Math.random() * 1.6 - 0.8 });
    }
  }
  startBirds() {
    if (!this.ready || this.birdTimer) return;
    this.birdTimer = setInterval(() => {
      if (this.mood === 'menu' || this.mood === 'sad') this.birds(this.mood === 'menu' ? 0.6 : 0.35);
    }, 4200);
  }

  update(dt) {
    if (!this.ready) return;
    this.noteTimer -= dt;
    this.musicTimer -= dt;
    if (this.noteTimer <= 0) {
      this.noteTimer = 3.4 + Math.random() * 4.2;
      const scale = SCALES[this.mood] ?? SCALES.menu;
      const f = scale[(Math.random() * scale.length) | 0] * (Math.random() > 0.65 ? 2 : 1);
      // gentle music-box note through the reverb bus
      const ctx = this.ctx, t = ctx.currentTime;
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.045, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
      const p = ctx.createStereoPanner(); p.pan.value = Math.random() * 1.4 - 0.7;
      o.connect(g); g.connect(p); p.connect(this.musicBus); p.connect(this.musicSend);
      o.start(t); o.stop(t + 3);
    }
    if (this.musicTimer <= 0) {
      this.musicTimer = 9 + Math.random() * 7;
      if (this.mood === 'tense' || this.mood === 'dark') this.tone({ freq: 32, dur: 3.4, gain: 0.07, type: 'sine', slide: 0.96 });
    }
  }
}

export const audio = new AudioEngine();
