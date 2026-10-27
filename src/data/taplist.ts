export interface TapEntry {
  tapNumber: number;
  tapLabel: string;
  name: string;
  batchNumber: string;
  style: string;
  bjcpCode: string;
  abv: number;
  ibu: number;
  og: number;
  fg: number;
  srm: number;
  kegRemainingPercent: number;
  servingTemp: string;
  glassware: string;
  tastingNotes: string;
  postSlug?: string;
}

export interface FermenterEntry {
  vessel: string;
  name: string;
  batchNumber: string;
  style: string;
  stage: 'Primary Fermentation' | 'Dry Hopping' | 'Cold Crashing' | 'Spunding / Lagering' | 'Bottle Conditioning';
  dayInFermenter: number;
  plannedTotalDays: number;
  currentGravity: number;
  targetFg: number;
  currentTemp: string;
  yeastStrain: string;
  srm: number;
  statusNote: string;
  postSlug?: string;
}

export const ACTIVE_TAPS: TapEntry[] = [
  {
    tapNumber: 1,
    tapLabel: 'TAP 01 · SIDE-PULL LUKR',
    name: 'Meadowgrass Pils',
    batchNumber: 'Batch #047',
    style: 'Czech Premium Pale Lager',
    bjcpCode: '3B',
    abv: 4.9,
    ibu: 36,
    og: 1.048,
    fg: 1.011,
    srm: 3.8,
    kegRemainingPercent: 74,
    servingTemp: '5.5°C · 11 PSI',
    glassware: 'Tübinger Mug',
    tastingNotes: 'Crackery floor-malted Bohemian pilsner base, spicy late Saaz floral snap, dense wet-foam meringue head.',
    postSlug: 'meadowgrass-bohemian-pilsner-recipe',
  },
  {
    tapNumber: 2,
    tapLabel: 'TAP 02 · STANDARD FAUCET',
    name: 'Hedgerow Golden Bitter',
    batchNumber: 'Batch #046',
    style: 'British Golden Ale',
    bjcpCode: '12A',
    abv: 4.3,
    ibu: 32,
    og: 1.043,
    fg: 1.010,
    srm: 5.5,
    kegRemainingPercent: 42,
    servingTemp: '9.0°C · 9 PSI',
    glassware: 'Nonic Pint',
    tastingNotes: 'Golden Promise biscuit backbone layered with whole-cone East Kent Goldings marmalade and lemon thyme.',
    postSlug: 'hedgerow-golden-bitter-brewday',
  },
  {
    tapNumber: 3,
    tapLabel: 'TAP 03 · NITRO / STOUT SPOUT',
    name: 'Vesper Oaten Stout',
    batchNumber: 'Batch #044',
    style: 'Oatmeal Stout',
    bjcpCode: '16B',
    abv: 5.4,
    ibu: 29,
    og: 1.055,
    fg: 1.014,
    srm: 34,
    kegRemainingPercent: 18,
    servingTemp: '8.5°C · Beer Gas',
    glassware: 'Imperial Pint',
    tastingNotes: 'Toasted naked oats, cold-steeped chocolate wheat, espresso crema texture, dry bittersweet cocoa finish.',
    postSlug: 'cold-steeped-roasted-grains-experiment',
  },
];

export const ACTIVE_FERMENTERS: FermenterEntry[] = [
  {
    vessel: 'FV-01 · 30L Stainless Conical',
    name: 'Broadmeadow Table Grisette',
    batchNumber: 'Batch #048',
    style: 'Mixed-Fermentation Grisette',
    stage: 'Spunding / Lagering',
    dayInFermenter: 11,
    plannedTotalDays: 16,
    currentGravity: 1.005,
    targetFg: 1.004,
    currentTemp: '21.5°C',
    yeastStrain: 'Dupont + Blaugies Co-Pitch',
    srm: 3.2,
    statusNote: 'Spunded at 1.009 SG for natural carbonation (2.9 vol CO₂). White pepper & pear esters peaking.',
    postSlug: 'spunded-saison-grisette-experiment',
  },
  {
    vessel: 'FV-02 · 27L FermZilla All-Rounder',
    name: 'Bramble & Bark Dark Mild',
    batchNumber: 'Batch #049',
    style: 'Dark Mild (Iteration v4)',
    stage: 'Primary Fermentation',
    dayInFermenter: 4,
    plannedTotalDays: 10,
    currentGravity: 1.016,
    targetFg: 1.012,
    currentTemp: '19.5°C',
    yeastStrain: 'Wyeast 1469 West Yorkshire',
    srm: 19.5,
    statusNote: 'Thick rocky krausen starting to drop; chewy Invert No. 3 dark plum and toasted walnut aromatics.',
    postSlug: 'bramble-and-bark-dark-mild-recipe',
  },
];
