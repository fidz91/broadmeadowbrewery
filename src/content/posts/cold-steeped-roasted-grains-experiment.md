---
title: "Split-Batch Experiment #011: Cold-Steeped vs. Full-Mash Roasted Barley in an Oatmeal Stout"
subtitle: "Does isolating roasted grains from the hot mash actually eliminate acrid astringency, or does it sacrifice essential stout backbone?"
description: "We split a 42L mash of 'Vesper Oaten Stout' into two identical fermenters—one mashed with all dark grains for 60 minutes, the other dosed with a 16-hour room-temperature cold extraction at vorlauf."
pubDate: 2026-09-28
category: "experiment"
featured: true
batchNumber: "Batch #044A / #044B"
beerStyle: "Oatmeal Stout — BJCP 16B"
readingTime: "8 min read"
heroImage: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=1200&q=80"
tags: ["experiment", "split-batch", "stout", "cold-steeping", "mash-ph", "triangle-test"]
experiment:
  hypothesis: "Cold-steeping the Roasted Barley and Chocolate Wheat for 16 hours at 18°C and adding the liquor with 10 minutes left in the boil will produce a noticeably smoother, less astringent finish than mashing the dark grains for the full 60-minute rest."
  variableTested: "Roasted Grain Extraction Method (Full 60-Min Mash vs. 16-Hour Cold Steep)"
  controlBatch: "Batch #044A — All 10.5% dark roasted grains included in the 67°C mash for 60 min"
  experimentalBatch: "Batch #044B — Dark grains steeped 16h in 2.5L RO water at 18°C; liquid added at 10 min boil"
  panelSize: "18 Blind Tasters (11 Correct Identifications)"
  significantResult: true
  pValueSummary: "p = 0.011 (Significant at α = 0.05)"
  verdict: "Cold-steeping yielded a statistically significant difference. Tasters overwhelmingly preferred Batch #044B for its velvety dark-chocolate smoothness, though it required increasing dark grain weight by 15% to match the exact SRM color of the control batch."
  gravityCurve:
    - day: 0
      controlSg: 1.055
      experimentSg: 1.055
    - day: 2
      controlSg: 1.036
      experimentSg: 1.034
    - day: 4
      controlSg: 1.021
      experimentSg: 1.019
    - day: 7
      controlSg: 1.014
      experimentSg: 1.014
    - day: 12
      controlSg: 1.014
      experimentSg: 1.014
recipe:
  batchSize: "21.0 L per split arm"
  boilTime: "60 min"
  efficiency: "74%"
  og: 1.055
  fg: 1.014
  abv: 5.4
  ibu: 29
  srm: 34.0
  fermentables:
    - name: "Crisp Maris Otter Pale Ale Malt"
      weight: "3.45 kg"
      percentage: 70.0
      lovibond: "3.0 °L"
      notes: "Rich British pale base"
    - name: "Simpsons Golden Naked Oats + Flaked Oats"
      weight: "0.64 kg"
      percentage: 13.0
      lovibond: "6.0 °L"
      notes: "Toasted in oven at 160°C for 20 min prior to brewday for nutty porridge depth"
    - name: "Bairds Medium Crystal (65L)"
      weight: "0.32 kg"
      percentage: 6.5
      lovibond: "65 °L"
      notes: "Toffee and caramel bridge"
    - name: "Weyermann Chocolate Wheat (Dehusked)"
      weight: "0.27 kg"
      percentage: 5.5
      lovibond: "415 °L"
      notes: "Smooth milk-to-dark chocolate richness"
    - name: "Crisp Roasted Barley"
      weight: "0.25 kg"
      percentage: 5.0
      lovibond: "550 °L"
      notes: "Signature espresso bite — tested in Full Mash (44A) vs Cold Steep (44B)"
  hops:
    - name: "East Kent Bramling Cross"
      weight: "38 g"
      alphaAcid: "6.1%"
      timing: "60 min"
      use: "Boil"
      ibuContribution: 26
    - name: "East Kent Bramling Cross"
      weight: "15 g"
      alphaAcid: "6.1%"
      timing: "10 min"
      use: "Boil"
      ibuContribution: 3
  yeast:
    name: "Irish Ale Yeast"
    lab: "Wyeast"
    code: "1084"
    attenuation: "74%"
    tempRange: "18.0°C"
    pitchNotes: "Identical 200B cell pitch split from a single homogenized 3L starter."
  mash:
    - step: "Beta/Alpha Balanced Rest"
      temp: "67.0°C"
      duration: "60 min"
      notes: "Control included dark grains; Treatment mashed base + oats + crystal only, adjusted with lactic acid to match 5.38 pH."
  waterProfile:
    profileName: "Dublin Velvet Stout"
    ca: 65
    mg: 10
    na: 30
    cl: 110
    so4: 55
    hco3: 140
    mashPh: 5.38
    notes: "Matched mash pH between both arms so pH differences wouldn't confound the roast extraction test."
---

After receiving a `37.5/50` scoresheet on **Vesper Oaten Stout** at last winter's Porter & Stout Invitational—where two BJCP judges noted a *"pleasant espresso nose but slight acrid husk bite lingering on the back of the tongue"*—we decided to put cold-steeping to a controlled test.

## Controlling for the Confounding Variable: Mash pH

Many homebrewers try cold-steeping dark grains and immediately notice a different beer, but often that difference is actually caused by an **uncontrolled shift in mash pH**! Dark roasted barley (`550 °L`) is strongly acidic. If you pull `10.5%` dark roasted grain out of your main mash without adjusting your water salts or acid additions, your base mash pH will sit `0.15 to 0.22 pH units` higher than the full-mash version.

To isolate the **extraction method itself**, we matched the mash pH of both batches at **`5.38 pH`**:
- **Batch #044A (Control — Full Mash)**: Included all `5.5% Chocolate Wheat` and `5.0% Roasted Barley` for the full 60-minute mash at `67.0°C`, buffered with `140 ppm HCO₃⁻`.
- **Batch #044B (Treatment — Cold Steep)**: Mashed only the **70.0% Maris Otter**, **13.0% Oats**, and **6.5% Medium Crystal**, acidified with `2.8 mL` of `88% Lactic Acid` to hit `5.38 pH`. Meanwhile, the dark grains were steeped for 16 hours in `2.5 L` of `18°C` water, strained through a 200-micron bag, and added with 10 minutes left in the boil.

## Blind Triangle Test Results ($n = 18$)

Three weeks after kegging at identical carbonation (`1.9 volumes CO₂` on beer gas), we poured blind flights for 18 tasters (including 4 certified BJCP judges) at our local homebrew club meeting:

- **11 of 18 tasters** (`61%`) correctly identified the odd glass out, achieving statistical significance ($p = 0.011$, well below the $\alpha = 0.05$ threshold of 10 correct).
- Among the 11 tasters who correctly separated the beers, **9 preferred Batch #044B (Cold Steep)**, describing it as *"cold-brew coffee crema, Dutch-process cocoa, and zero char bite."*
- The 2 tasters who preferred the Control (`#044A`) noted that they actually enjoyed the sharper Guinness-like dry roast snap at the finish.

> "Cold-steeping eliminated every trace of dry husk astringency, transforming the finish from dark-roast espresso into velvety 70% dark chocolate."
