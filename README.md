# PlayGround

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://go.ondev.store/).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://go.ondev.store/milophillo-sudo/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/milophillo-sudo/PlayGround)

- 🎮 [Open the project](https://go.ondev.store/milophillo-sudo/PlayGround).
- ✨ [Remix this project](https://go.ondev.store/milophillo-sudo/PlayGround?remix=1).
- 💻 [Explore the source](https://github.com/milophillo-sudo/PlayGround).
- 🛠️ [Check build runs](https://github.com/milophillo-sudo/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/milophillo-sudo/PlayGround/issues).
- 👤 [Explore the creator's projects](https://go.ondev.store/milophillo-sudo).
- 🌍 [Create with OMGithub](https://go.ondev.store/).
<!-- omgithub:readme:end -->

## CRYOUT — Dynamic 3D Rhythm

A browser rhythm game built around a flat, bold 2D hit-circle language placed inside a moving 3D field.

- **Dynamic lane count:** the chart moves through 4, 6, and 8-lane sections; the field, ring row, and touch pads expand and re-align with it.
- **Camera-facing hit positions:** each lane's circle, centre line, hit rule, and falling notes are billboards, so they stay crisp and circular while the stage tilts, floats, and rotates in 3D.
- **Full chart:** 331 notes and 6 holds generated from beat/onset analysis of the supplied `Cryout.mp3` (100 BPM grid), running from the first phrase to the outro.
- **Controls:** `A S D F J K L ;`, numpad, or the eight touch pads. Hold notes must be held until the tail passes the ring. `Esc` pauses.
- **Feedback:** perfect/great/good/bad/miss windows, combo, score, accuracy, sync meter, hit bursts, shockwaves, rank screen, retry.
- **Responsive:** landscape and portrait layouts, safe-area padding, multi-touch pointer capture, no page scrolling during play.

### Development

```bash
npm install
npm run dev     # http://localhost:3002
npm run build   # static bundle in dist/
```

The playfield is Three.js with an Unreal Bloom pass; audio transport is Web Audio so pause/resume freezes the chart and the music together.
