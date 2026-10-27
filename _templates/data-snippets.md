# Data File Copy-Paste Snippets

Use these snippets when updating the live **Taplist / Fermenters** (`src/data/taplist.ts`) or the **Competition Ledger** (`src/data/competitions.ts`).

---

## 1. New Tap Entry (`src/data/taplist.ts` -> `ACTIVE_TAPS`)

```ts
  {
    tapNumber: 4,
    tapLabel: 'TAP 04 · INTERTAP FORWARD SEAL',
    name: 'Beer Name',
    batchNumber: 'Batch #050',
    style: 'Beer Style Name',
    bjcpCode: '13A',
    abv: 4.5,
    ibu: 28,
    og: 1.045,
    fg: 1.011,
    srm: 12.0,                   // Controls the beer color swatch (2 = straw, 15 = amber, 35 = stout)
    kegRemainingPercent: 100,    // 0 to 100 (updates the visual keg level bar)
    servingTemp: '10°C · 1.8 vol CO₂',
    glassware: '20 oz Nonic Pint',
    tastingNotes: 'Short tasting notes shown on the taplist board.',
    postSlug: 'your-recipe-filename-without-md', // Optional: links to /posts/your-recipe-filename-without-md
  },
```

---

## 2. New Fermenter Entry (`src/data/taplist.ts` -> `FERMENTING_BATCHES`)

```ts
  {
    vessel: 'SS Brewtech Chronical #1 (26L)',
    name: 'Beer Name',
    batchNumber: 'Batch #051',
    style: 'Beer Style Name',
    // Allowed stages: 'Primary Fermentation' | 'Dry Hopping' | 'Cold Crashing' | 'Spunding / Lagering' | 'Bottle Conditioning'
    stage: 'Primary Fermentation',
    dayInFermenter: 4,
    plannedTotalDays: 14,
    currentGravity: 1.020,
    targetFg: 1.010,
    currentTemp: '19.0°C',
    yeastStrain: 'Wyeast 1469 West Yorkshire Ale',
    srm: 8.5,
    statusNote: 'High krausen starting to drop; raising temp 0.5°C/day for diacetyl rest.',
    postSlug: 'your-post-filename-without-md', // Optional
  },
```

---

## 3. New Competition Entry (`src/data/competitions.ts` -> `COMPETITION_RECORDS`)

```ts
  {
    id: 'comp-name-2026-beer',
    competitionName: 'Competition Name 2026',
    date: 'October 2026',
    year: 2026,
    location: 'City, UK',
    beerName: 'Beer Name',
    batchNumber: 'Batch #050',
    bjcpCategory: '13A',
    bjcpStyleName: 'Dark Mild',
    abv: 3.6,
    srm: 19.5,
    score: 42.0,
    maxScore: 50,
    // Allowed awards: 'Best of Show' | 'Gold' | 'Silver' | 'Bronze' | 'Finalist' | 'Entered'
    award: 'Gold',
    tableEntries: 24,
    scoresBreakdown: {
      aroma: 10.0,      // /12
      appearance: 3.0,  // /3
      flavor: 17.0,     // /20
      mouthfeel: 4.5,   // /5
      overall: 7.5,     // /10
    },
    judgeSummary: 'Summary of what the judges wrote on the BJCP scoresheets.',
    nextIterationPlan: 'What you plan to tweak on the next batch.',
    postSlug: 'your-competition-post-without-md', // Optional
  },
```
