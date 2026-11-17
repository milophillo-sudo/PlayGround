// Procedural audio engine — no external assets.
export class AudioFX {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.volume = 0.7;
    this.muted = false;
    this.started = false;
    this.noiseBuf = null;
    this.ambience = null;
    this.heart = null;
    this.alarm = null;
    this.lastStep = 0;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 24;
    comp.ratio.value = 4;
    comp.attack.value = 0.004;
    comp.release.value = 0.25;
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 20000;
    this.filter.Q.value = 0.4;
    this.master.connect(this.filter).connect(comp).connect(this.ctx.destination);
    this.underwater = false;
    this.noiseBuf = this.makeNoise(2.2);
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.setTargetAtTime(this.muted ? 0 : v, this.ctx.currentTime, 0.05);
  }

  toggleMute() {
    this.muted = !this.muted;
    this.setVolume(this.volume);
    return this.muted;
  }

  makeNoise(seconds) {
    const len = Math.floor(this.ctx.sampleRate * seconds);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      d[i] = last * 3.2;
    }
    return buf;
  }

  noise(dur = 0.2, gain = 0.2, filterFreq = 1200, type = 'lowpass', start = null) {
    if (!this.ctx) return;
    const t = start ?? this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = filterFreq;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.05);
    return { src, g, f };
  }

  tone(freq, dur = 0.2, gain = 0.12, type = 'sine', slideTo = null, start = null) {
    if (!this.ctx) return;
    const t = start ?? this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.05);
    return o;
  }

  startAmbience() {
    if (!this.ctx || this.started) return;
    this.started = true;
    const t = this.ctx.currentTime;

    const bus = this.ctx.createGain();
    bus.gain.value = 0.0;
    bus.gain.setTargetAtTime(1, t, 2.5);
    bus.connect(this.master);

    // Low detuned drone
    const droneGain = this.ctx.createGain();
    droneGain.gain.value = 0.055;
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 320; lp.Q.value = 3;
    [36.7, 55.0, 73.4].forEach((f, i) => {
      const o = this.ctx.createOscillator();
      o.type = i === 2 ? 'triangle' : 'sawtooth';
      o.frequency.value = f;
      o.detune.value = (i - 1) * 7;
      const g = this.ctx.createGain();
      g.gain.value = i === 0 ? 0.5 : 0.22;
      o.connect(g).connect(lp);
      o.start();
    });
    lp.connect(droneGain).connect(bus);

    // slow LFO on drone gain
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.055;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.025;
    lfo.connect(lfoGain).connect(droneGain.gain);
    lfo.start();

    // Fluorescent hum
    const hum = this.ctx.createOscillator();
    hum.type = 'sine'; hum.frequency.value = 120;
    const humG = this.ctx.createGain(); humG.gain.value = 0.008;
    hum.connect(humG).connect(bus);
    hum.start();

    this.ambience = { bus, droneGain, lp };

    // Occasional creaks
    this.creakTimer = setInterval(() => {
      if (!this.ctx || this.muted) return;
      const r = Math.random();
      if (r < 0.45) {
        this.noise(0.5 + Math.random() * 0.8, 0.035 + Math.random() * 0.03, 260 + Math.random() * 500, 'bandpass');
      } else if (r < 0.62) {
        this.tone(60 + Math.random() * 40, 0.6, 0.025, 'sine', 40);
      }
    }, 5200);
  }

  stopAmbience() {
    this.started = false;
    if (this.creakTimer) clearInterval(this.creakTimer);
    if (this.ambience) {
      try {
        this.ambience.bus.gain.setTargetAtTime(0, this.ctx.currentTime, 0.4);
      } catch {}
      this.ambience = null;
    }
  }

  setTension(amount) {
    if (!this.ambience) return;
    const t = this.ctx.currentTime;
    this.ambience.droneGain.gain.setTargetAtTime(0.05 + amount * 0.10, t, 0.6);
    this.ambience.lp.frequency.setTargetAtTime(300 + amount * 700, t, 0.8);
  }

  setUnderwater(on) {
    if (!this.ctx || !this.filter) return;
    if (this.underwater === on) return;
    this.underwater = on;
    const t = this.ctx.currentTime;
    this.filter.frequency.setTargetAtTime(on ? 430 : 20000, t, on ? 0.28 : 0.5);
    this.filter.Q.setTargetAtTime(on ? 2.4 : 0.4, t, 0.3);
    if (on) {
      this.tone(48, 1.2, 0.06, 'sine', 34);
      this.noise(0.9, 0.05, 380, 'lowpass');
    }
  }

  bell() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    for (let i = 0; i < 3; i++) {
      this.tone(880, 0.42, 0.055, 'square', 815, t + i * 0.46);
      this.tone(1320, 0.36, 0.025, 'sine', 1180, t + i * 0.46);
    }
  }

  footstep(sprint = false, crouch = false) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (now - this.lastStep < 0.09) return;
    this.lastStep = now;
    const vol = crouch ? 0.03 : sprint ? 0.16 : 0.085;
    const f = crouch ? 420 : sprint ? 1300 : 800;
    this.noise(crouch ? 0.09 : 0.13, vol, f, 'lowpass');
    this.tone(crouch ? 60 : 85, 0.09, crouch ? 0.02 : 0.05, 'sine', 40);
  }

  heartbeat(intensity = 0.4) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(48, 0.16, 0.07 + intensity * 0.12, 'sine', 32, t);
    this.tone(42, 0.20, 0.05 + intensity * 0.10, 'sine', 28, t + 0.22);
  }

  whistle() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(1780, 0.28, 0.12, 'sine', 2100, t);
    this.tone(2050, 0.4, 0.09, 'sine', 1650, t + 0.24);
  }

  growl() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(1.2, 0.16, 180, 'lowpass');
    this.tone(58, 1.3, 0.12, 'sawtooth', 31, t);
    this.tone(87, 1.1, 0.05, 'square', 44, t + 0.1);
  }

  scare() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.noise(1.4, 0.35, 4200, 'highpass');
    this.tone(1400, 0.9, 0.16, 'sawtooth', 90, t);
    this.tone(740, 1.2, 0.12, 'square', 55, t + 0.02);
    this.tone(210, 1.5, 0.18, 'sine', 40, t + 0.05);
    this.noise(2.2, 0.2, 320, 'lowpass', t + 0.2);
  }

  stinger() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.tone(110, 0.8, 0.09, 'sine', 55, t);
    this.tone(220, 0.6, 0.05, 'triangle', 165, t + 0.08);
    this.noise(0.7, 0.06, 900, 'bandpass', t + 0.05);
  }

  ui() { this.tone(660, 0.07, 0.05, 'square', 880); }
  pickup() {
    if (!this.ctx) return;
    [880, 1320, 1760].forEach((f, i) => this.tone(f, 0.18, 0.06, 'sine', f * 1.02, this.ctx.currentTime + i * 0.06));
  }
  unlock() {
    if (!this.ctx) return;
    this.noise(0.12, 0.12, 2400, 'bandpass');
    this.tone(320, 0.12, 0.07, 'square', 220, this.ctx.currentTime + 0.12);
    this.tone(180, 0.3, 0.09, 'sawtooth', 120, this.ctx.currentTime + 0.25);
  }
  door() {
    if (!this.ctx) return;
    this.noise(0.55, 0.07, 700, 'bandpass');
    this.tone(120, 0.4, 0.03, 'sine', 80);
  }
  hide() {
    if (!this.ctx) return;
    this.noise(0.3, 0.09, 500, 'lowpass');
    this.tone(90, 0.2, 0.03, 'sine', 55);
  }
  breath() {
    if (!this.ctx) return;
    this.noise(0.42, 0.045, 900, 'bandpass');
  }
  alarmStart() {
    if (!this.ctx || this.alarm) return;
    const bus = this.ctx.createGain();
    bus.gain.value = 0.055;
    bus.connect(this.master);
    const o = this.ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = 420;
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine'; lfo.frequency.value = 0.55;
    const lg = this.ctx.createGain(); lg.gain.value = 170;
    lfo.connect(lg).connect(o.frequency);
    const f = this.ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 1100;
    o.connect(f).connect(bus);
    o.start(); lfo.start();
    this.alarm = { bus, o, lfo };
  }
  alarmStop() {
    if (!this.alarm) return;
    const t = this.ctx.currentTime;
    this.alarm.bus.gain.setTargetAtTime(0, t, 0.3);
    setTimeout(() => {
      try { this.alarm.o.stop(); this.alarm.lfo.stop(); } catch {}
      this.alarm = null;
    }, 800);
  }
  chaseStart() {
    if (!this.ctx || this.chase) return;
    const bus = this.ctx.createGain();
    bus.gain.value = 0.0;
    bus.gain.setTargetAtTime(0.10, this.ctx.currentTime, 0.3);
    bus.connect(this.master);
    const o1 = this.ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 73;
    const o2 = this.ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 77.5;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    const trem = this.ctx.createOscillator(); trem.type = 'sine'; trem.frequency.value = 7.5;
    const tg = this.ctx.createGain(); tg.gain.value = 0.04;
    const vca = this.ctx.createGain(); vca.gain.value = 1;
    trem.connect(tg).connect(vca.gain);
    o1.connect(f); o2.connect(f); f.connect(vca).connect(bus);
    o1.start(); o2.start(); trem.start();
    this.chase = { bus, o1, o2, trem };
  }
  chaseStop() {
    if (!this.chase) return;
    const c = this.chase;
    this.chase = null;
    if (!this.ctx) return;
    c.bus.gain.setTargetAtTime(0, this.ctx.currentTime, 0.35);
    setTimeout(() => { try { c.o1.stop(); c.o2.stop(); c.trem.stop(); } catch {} }, 900);
  }
  win() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    [261.6, 329.6, 392, 523.3].forEach((f, i) => this.tone(f, 1.4, 0.09, 'triangle', f, t + i * 0.16));
  }
  typeBlip(pitch = 1) {
    if (!this.ctx) return;
    this.tone(420 * pitch + Math.random() * 80, 0.03, 0.014, 'square');
  }
}

export const audio = new AudioFX();
