export interface CompetitionRecord {
  id: string;
  competitionName: string;
  date: string;
  year: number;
  location: string;
  beerName: string;
  batchNumber: string;
  bjcpCategory: string;
  bjcpStyleName: string;
  abv: number;
  srm: number;
  score: number;
  maxScore: number;
  award: 'Best of Show' | 'Gold' | 'Silver' | 'Bronze' | 'Finalist' | 'Entered';
  tableEntries: number;
  scoresBreakdown: {
    aroma: number;      // /12
    appearance: number; // /3
    flavor: number;     // /20
    mouthfeel: number;  // /5
    overall: number;    // /10
  };
  judgeSummary: string;
  nextIterationPlan: string;
  postSlug?: string;
}

export const COMPETITION_RECORDS: CompetitionRecord[] = [
  {
    id: 'national-homebrew-2026-mild',
    competitionName: 'National Amateur Brewers Cup 2026',
    date: 'September 2026',
    year: 2026,
    location: 'Chester, UK',
    beerName: 'Bramble & Bark (v3)',
    batchNumber: 'Batch #042',
    bjcpCategory: '13A',
    bjcpStyleName: 'Dark Mild',
    abv: 3.6,
    srm: 19.5,
    score: 43.5,
    maxScore: 50,
    award: 'Gold',
    tableEntries: 28,
    scoresBreakdown: {
      aroma: 10.5,
      appearance: 3.0,
      flavor: 17.5,
      mouthfeel: 4.5,
      overall: 8.0,
    },
    judgeSummary:
      'Rich mahogany clarity with persistent ivory collar. Complex dark fruit from homemade Invert #3, toasted hazelnut crust, and seamless earthy Fuggle finish. Exceptional body for 3.6% ABV.',
    nextIterationPlan:
      'Keep the 68°C mash rest and homemade Invert No. 3; dial Pale Chocolate down by 0.5% to let the Simpson DRC raisin notes shine even brighter.',
    postSlug: 'national-cup-gold-dark-mild-competition',
  },
  {
    id: 'midlands-craft-open-2026-pils',
    competitionName: 'Midlands Craft Brewing Open',
    date: 'June 2026',
    year: 2026,
    location: 'Nottingham, UK',
    beerName: 'Meadowgrass Pils',
    batchNumber: 'Batch #039',
    bjcpCategory: '3B',
    bjcpStyleName: 'Czech Premium Pale Lager',
    abv: 4.9,
    srm: 3.8,
    score: 41.0,
    maxScore: 50,
    award: 'Silver',
    tableEntries: 34,
    scoresBreakdown: {
      aroma: 10.0,
      appearance: 3.0,
      flavor: 16.5,
      mouthfeel: 4.0,
      overall: 7.5,
    },
    judgeSummary:
      'Brilliant gold with dense rocky foam. Expressive herbal Saaz bouquet and rich decocted malt melanoidins. Slight sulfur whisper on initial swirl that blows off quickly into a crisp, rounded bitterness.',
    nextIterationPlan:
      'Extend diacetyl/maturation rest at 14°C by 48 hours before crashing to 0°C to scrub the last trace of young lager sulfur.',
    postSlug: 'meadowgrass-bohemian-pilsner-recipe',
  },
  {
    id: 'shire-spring-classic-2026-bitter',
    competitionName: 'Three Counties Spring Classic',
    date: 'March 2026',
    year: 2026,
    location: 'Worcester, UK',
    beerName: 'Hedgerow Golden Bitter',
    batchNumber: 'Batch #035',
    bjcpCategory: '12A',
    bjcpStyleName: 'British Golden Ale',
    abv: 4.3,
    srm: 5.5,
    score: 39.5,
    maxScore: 50,
    award: 'Bronze',
    tableEntries: 22,
    scoresBreakdown: {
      aroma: 9.5,
      appearance: 3.0,
      flavor: 16.0,
      mouthfeel: 4.0,
      overall: 7.0,
    },
    judgeSummary:
      'Bright citrus blossom and freshly zested orange over crisp Golden Promise cracker. Clean bitterness and refreshing dry finish; judges wanted just a touch more late-hop aroma punch in the bottle.',
    nextIterationPlan:
      'Shift 15g of East Kent Goldings from the 15-minute boil addition to a 76°C whirlpool steep and purge bottles with CO₂ prior to counter-pressure filling.',
    postSlug: 'hedgerow-golden-bitter-brewday',
  },
  {
    id: 'winter-stout-invitational-2025',
    competitionName: 'Winter Porter & Stout Invitational',
    date: 'November 2025',
    year: 2025,
    location: 'Bristol, UK',
    beerName: 'Vesper Oaten Stout',
    batchNumber: 'Batch #029',
    bjcpCategory: '16B',
    bjcpStyleName: 'Oatmeal Stout',
    abv: 5.4,
    srm: 34.0,
    score: 37.5,
    maxScore: 50,
    award: 'Finalist',
    tableEntries: 31,
    scoresBreakdown: {
      aroma: 9.0,
      appearance: 3.0,
      flavor: 15.0,
      mouthfeel: 4.0,
      overall: 6.5,
    },
    judgeSummary:
      'Velvety mouthfeel and lovely dark chocolate aroma, though slight roast astringency lingered on the back palate.',
    nextIterationPlan:
      'Inspired our Cold-Steeped vs. Full-Mash Roasted Grains split-batch experiment — moving roasted barley to an overnight cold extraction raised subsequent scores by 4 points.',
    postSlug: 'cold-steeped-roasted-grains-experiment',
  },
];
