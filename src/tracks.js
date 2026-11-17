import { CHART as cryout } from './charts/cryout.js';
import { CHART as world } from './charts/world.js';
import { CHART as chronostasis } from './charts/chronostasis.js';

// Track metadata is intentionally separate from the generated chart: the menu
// can show a track before its audio has been decoded.
export const TRACKS = [
  {
    id: 'cryout',
    title: 'CRYOUT',
    shortTitle: 'CRYOUT',
    artist: 'ORIGINAL TRACK',
    bpm: 100,
    duration: 138.1,
    audio: './audio/cryout.mp3',
    difficulty: 'ADVANCED',
    laneLabel: '4 · 6 · 8',
    blurb: 'Neon field • 360° camera • 8-lane climax',
    accent: '#5ee7ff',
    chart: cryout,
    fadeStart: 131.4,
    fadeEnd: 133.4,
  },
  {
    id: 'world',
    title: 'WORLD YEARNING FOR AN END',
    shortTitle: 'WORLD YEARNING',
    artist: 'ORIGINAL TRACK',
    bpm: 120,
    duration: 143.47,
    audio: './audio/world-yearning.mp3',
    difficulty: 'HARD',
    laneLabel: '4 · 6',
    blurb: 'City intro • diagonal lanes • thumb-hard patterns',
    accent: '#ffb45e',
    chart: world,
    fadeStart: 140.8,
    fadeEnd: 142.9,
  },
  {
    id: 'chronostasis',
    title: 'CHRONOSTASIS',
    shortTitle: 'CHRONOSTASIS',
    artist: 'ORIGINAL TRACK',
    bpm: 99.4,
    duration: 142.1,
    audio: './audio/chronostasis.mp3',
    difficulty: 'EXPERT',
    laneLabel: '4 · 6',
    blurb: 'Clockwork skyline • frozen time • swinging pendulum',
    accent: '#ffd166',
    chart: chronostasis,
    fadeStart: 138.4,
    fadeEnd: 140.0,
  },
];

export const DEFAULT_TRACK_ID = 'cryout';
export const TRACK_BY_ID = Object.fromEntries(TRACKS.map((t) => [t.id, t]));
