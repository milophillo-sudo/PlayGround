// The two playable partners and the absent third member. Art lives in
// public/art as self-contained SVG key art so the menu never waits on a
// network image. Partner choice is cosmetic and narrative: charts are shared,
// but the menu, story cards, HUD accents, and INTENTION memory frames change.

export const PARTNERS = [
  {
    id: 'kai',
    num: '01',
    name: 'KAI',
    role: 'VOCAL / GUITAR',
    tagline: 'THE ONE WHO STILL BELIEVES',
    portrait: './art/kai.svg',
    accent: '#5ee7ff',
    accent2: '#ff5fd2',
    aura: 'rgba(94,231,255,.42)',
    accessories: 'ear cuff · choker · guitar-pick chain · stage headphones',
    story: [
      'KAI founded CRYOUT out of a bedroom and a borrowed amp. For three years the band played every basement in the city. Now the rooms are half empty and the booker has stopped calling.',
      'He still prints flyers for shows nobody attends. He tells the others it is a slump. He knows the band is dying, and he is terrified that the songs will outlive the people who made them.',
    ],
    quote: '“If I stop moving, the silence wins.”',
    file: 'CHAPTER 01 // THE LAST FLYER',
  },
  {
    id: 'rei',
    num: '02',
    name: 'REI',
    role: 'BASS / SIGNAL',
    tagline: 'THE ONE WHO KEEPS THE DISTANCE',
    portrait: './art/rei.svg',
    accent: '#ffd166',
    accent2: '#65e5ff',
    aura: 'rgba(255,209,102,.4)',
    accessories: 'crescent clips · wired earbuds · constellation hoodie · pick necklace',
    story: [
      'REI joined through a classified ad and has spoken fewer than a hundred words to KAI since. She answers in basslines. She stands at the edge of every photo, as if she might leave before the shutter.',
      'She is not cold. She is waiting. The third chair in the practice room still has NOVA’s jacket on it, and REI is the only one who has not moved it.',
    ],
    quote: '“I can hear the part that is missing.”',
    file: 'CHAPTER 02 // THE EMPTY CHAIR',
  },
];

export const MISSING = {
  id: 'nova',
  num: '??',
  name: 'NOVA',
  role: 'KEYS / VOICE',
  portrait: './art/nova.svg',
  accent: '#ff3b5c',
  quote: '“Do not look for me in the mix.”',
  file: 'CHAPTER ?? // SIGNAL NOT FOUND',
};

export const BAND = {
  name: 'CRYOUT',
  years: 'THREE YEARS / ONE VAN / NO LABEL',
  logline:
    'A band that is slowly going quiet. Two people still showing up. One chair nobody will move.',
  lore:
    'KAI’s band CRYOUT is dying: the same twelve songs, smaller rooms, a van that needs a jump every morning. REI keeps her distance from everyone except the low end, because getting close means admitting that NOVA is not coming back. The ocean in INTENTION is the place where guilt becomes sound.',
};

export function getPartner(id) {
  return PARTNERS.find((p) => p.id === id) || PARTNERS[0];
}

export function applyPartnerCss(partner) {
  const root = document.documentElement;
  root.style.setProperty('--partner', partner.accent);
  root.style.setProperty('--partner-2', partner.accent2);
  root.style.setProperty('--partner-aura', partner.aura);
}
