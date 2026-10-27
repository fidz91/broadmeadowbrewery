---
# ============================================================================
# EXPERIMENT POST TEMPLATE
# Copy this file into `src/content/posts/` and rename it (e.g. `my-experiment.md`).
# ============================================================================

title: "Split-Batch Experiment #013: Variable A vs. Variable B in a [Beer Style]"
subtitle: "One-sentence question that this brewing experiment sets out to answer."
description: "Summary of the split-batch methodology, control vs. experimental parameters, and triangle test verdict."
pubDate: 2026-10-27
category: "experiment"           # Automatically displays on the Experiments page
featured: true
batchNumber: "Batch #050A / #050B"
beerStyle: "Style Name — BJCP 00A"
readingTime: "7 min read"
heroImage: "https://images.unsplash.com/photo-1518176258769-f227c798150e?auto=format&fit=crop&w=1200&q=80"
tags: ["experiment", "split-batch", "triangle-test", "style-tag"]

experiment:
  hypothesis: "State what you expect to happen (e.g. Fermenting under 15 PSI pressure will suppress ester formation compared to open fermentation)."
  variableTested: "Name of the single variable tested (e.g. Fermentation Pressure: 0 PSI vs. 15 PSI)"
  controlBatch: "Batch #050A — Describe the standard/control treatment"
  experimentalBatch: "Batch #050B — Describe the experimental treatment"
  panelSize: "12 Blind Tasters (X Correct Identifications)"
  significantResult: false       # true if p < 0.05, false otherwise
  pValueSummary: "p = 0.18 (Not significant at α = 0.05)"
  verdict: "1–2 sentence takeaway summarizing whether tasters could tell the beers apart and which one you preferred."
  # Optional: Include `gravityCurve` to render the side-by-side attenuation table
  gravityCurve:
    - day: 0
      controlSg: 1.048
      experimentSg: 1.048
    - day: 2
      controlSg: 1.030
      experimentSg: 1.032
    - day: 4
      controlSg: 1.016
      experimentSg: 1.018
    - day: 7
      controlSg: 1.010
      experimentSg: 1.010
    - day: 10
      controlSg: 1.010
      experimentSg: 1.010

# Optional: Include `recipe:` if you also want the base recipe card displayed
recipe:
  batchSize: "21.0 L per split batch"
  boilTime: "60 min"
  efficiency: "75%"
  og: 1.048
  fg: 1.010
  abv: 5.0
  ibu: 28
  srm: 6.0
  fermentables:
    - name: "Base Malt"
      weight: "4.00 kg"
      percentage: 95.0
      lovibond: "2.0 °L"
    - name: "Specialty Malt"
      weight: "0.21 kg"
      percentage: 5.0
      lovibond: "10.0 °L"
  hops:
    - name: "Hop Variety"
      weight: "35 g"
      alphaAcid: "5.0%"
      timing: "60 min"
      use: "Boil"
      ibuContribution: 28
  yeast:
    name: "Yeast Strain"
    lab: "Yeast Lab"
    code: "Code"
    attenuation: "79%"
    tempRange: "18.0°C – 20.0°C"
  mash:
    - step: "Conversion Rest"
      temp: "65.5°C"
      duration: "60 min"
---

Introduce the brewing question behind this experiment. Why do brewers debate this technique or ingredient, and what prompted you to test it on your system?

## Experimental Design & How We Kept Everything Else Identical

Explain how the batch was split so that **only the single tested variable** differed between Control (`#050A`) and Experimental (`#050B`).

## Fermentation & Packaging Observations

Did one batch start faster, finish at a different final gravity, drop clearer, or smell different during fermentation?

## Blind Triangle Test & Sensory Notes

Summarize the blind tasting results:
- **Control Batch (`#050A`)**: Aroma, flavor, mouthfeel notes.
- **Experimental Batch (`#050B`)**: Aroma, flavor, mouthfeel notes.

## Brewhouse Takeaway

How will this result change (or confirm) your standard brewing process going forward?
