import { CHART as cryout } from './charts/cryout.js';
import { CHART as world } from './charts/world.js';
import { CHART as chronostasis } from './charts/chronostasis.js';
import { CHART as untouchable } from './charts/untouchable.js';
import { CHART as intention } from './charts/intention.js';
import { CHART as intentionChaos } from './charts/intention-chaos.js';
import { CHART as sleeve } from './charts/sleeve.js';

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
  {
    id: 'untouchable',
    title: "THE UNTOUCHABLE OF f RA IA'S LAND",
    shortTitle: 'THE UNTOUCHABLE',
    artist: 'f RA IA',
    bpm: 111.1,
    bpmLabel: '111 / 96 BPM',
    duration: 147.54,
    audio: './audio/untouchable.mp3',
    difficulty: 'BOSS',
    laneLabel: '4 · 6 · 8',
    blurb: 'Gothic nave • cathedral clock • free-flying notes',
    accent: '#ff3b5c',
    chart: untouchable,
    boss: true,
    theme: 'untouchable',
    fadeStart: 139.8,
    fadeEnd: 141.8,
    clearTag: 'THE UNTOUCHABLE // FELLED',
  },
  {
    id: 'intention',
    title: 'INTENTION',
    shortTitle: 'INTENTION',
    artist: 'ORIGINAL TRACK',
    bpm: 180,
    bpmLabel: '180 / 195 BPM',
    duration: 213.5,
    audio: './audio/intention.mp3',
    difficulty: 'BOSS',
    laneLabel: '1 · 2 · 4 · 6',
    blurb: 'Ocean void • golden libra • guilt engine',
    accent: '#ffd166',
    chart: intention,
    boss: true,
    theme: 'intention',
    fadeStart: 209.6,
    fadeEnd: 212.2,
    clearTag: 'INTENTION // FORGIVEN',
  },
  {
    id: 'sleeve',
    title: 'ONE TRICK LEFT UP MY SLEEVE',
    shortTitle: 'ONE TRICK LEFT',
    artist: 'ORIGINAL TRACK',
    bpm: 120,
    duration: 205.129,
    audio: './audio/one-trick-left.mp3',
    difficulty: 'EXPERT',
    laneLabel: '4 · 6 · 8',
    blurb: 'Scarlet ruin • shattered glass • burned memory',
    accent: '#ff3b5c',
    chart: sleeve,
    theme: 'sleeve',
    fadeStart: 198.7,
    fadeEnd: 201.9,
  },
];

export const DEFAULT_TRACK_ID = 'cryout';
export const TRACK_BY_ID = Object.fromEntries(TRACKS.map((t) => [t.id, t]));
// The menu's INTENTION CHAOS mode swaps the chart, not the track. Keeping the
// chart separate means the audio, stage and partner fiction stay shared.
export const CHAOS_CHARTS = { intention: intentionChaos };
