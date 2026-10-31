---
target: home page desktop + mobile
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:053faa4e059c673049e66a68fab07f61b540ea08483ac41a60b0d56d97ae01f1"
target_path: /Users/farreltobias/www/portfolio/src/pages/index.astro
timestamp: 2026-10-13T19-15-48Z
slug: src-pages-index-astro
closed: true
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Status: Available in spec; no current-page nav state |
| 2 | Match System / Real World | 2 | VII/X, Notation, Sheet, Index, Recorded = plan jargon to decode |
| 3 | User Control and Freedom | 3 | Plain links, no traps |
| 4 | Consistency and Standards | 2 | CTA chip uses 45° hatch not in legend; hover state on non-link index rows; ::selection spends magenta |
| 5 | Error Prevention | 3 | Schema blocks fabricated outcomes; latent nowrap overflow in index delta |
| 6 | Recognition Rather Than Recall | 2 | Legend far from marks; on mobile it precedes all marked content |
| 7 | Flexibility and Efficiency | n/a | Single-pass Persuade page |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined, but Pro Electric presented twice in one scroll |
| 9 | Error Recovery | 3 | Unmeasured outcome rendered honestly as empty |
| 10 | Help and Documentation | n/a | Marketing surface |
| **Total** | | **21/32** | **Acceptable (66%)** |

## Design Specificity Verdict
Authored at 1440 (ramp column, hairline field, notation key, askew sheet, condensed caps + mono); collapses to a generic stacked landing page below 1280. Detector: 1 CLI advisory (em-dash-overuse, 8, threshold). Browser: 38 desktop / 37 mobile — undersized-ui-text x32, tiny-text x4, oversized-h1 (desktop), cream-palette, repeating-stripes-gradient. Cream, stripes, oversized-h1 = false positives per brief. Undersized text is real for nav, legend keys (9px), multi-word notes (10px).

## Priority Issues
1. [P0] First viewport carries no measured evidence — lead sheet reads "Shipped — not yet measured"; real deltas orphaned in .outcomes. Fix: resolve attribution; set outcome on pro-electric.md or promote an unattributed record into the hero.
2. [P1] Home never links to the case study — /work/pro-electric exists; .rt, index h3 and rows aren't links; .index-row:hover implies clickability. Fix: link title + row to /work/{id}.
3. [P1] Mobile/tablet first viewport loses the world and misorders content — work starts y≈1024 at 390; at 1024 only headline/CTA/legend. Fix: ≤1279 order headline, sub, CTA, record sheet (inline gauge), compact key, spec; drop standalone horizontal gauge.
4. [P1] Complexity VII/X gauge reads as a self-rating dressed as measurement, detached from its project. Fix: label it inside the sheet as declared, or make the ramp a pure tonal key with legend beneath.
5. [P2] Legibility + tap targets — 9px legend keys, 9px mobile numerals, 10px notes; nav 14px tall. Fix: 12px floor for labels/notes on mobile, ~15px padding-block on nav.

## Persona Red Flags
- Jordan: VII/X and three hatch swatches unexplained in place; "Sheet 001 / 001" signals one item.
- Riley: index delta nowrap 30px in 300px column overflows once an outcome exists; no <main>/skip link; h1 larger at 1024 (82px) than 1440 (77px); ::selection magenta 3.95:1.
- Casey: ~1.2 screens before work; 9–10px text; 14px nav targets; 3216px page.
- Engineering leader: gets thin decision, empty outcome, self-scored complexity, hedged outcomes note, no click-through.

## Minor Observations
- Inline style="color:var(--ink-faint)" ×8 → class.
- Role rendered four times.
- .record stays tilted with shadow at 761–1279.
- Gauge cells depend on animation with fill backwards; can render blank.
- "Let's talk" twice; closing CTA could name action.
- Magenta deltas must never drop below 24px (3.95:1).

## Questions to Consider
- If Pro Electric can't carry a figure, should the lead sheet be the one that can?
- Is self-declared complexity evidence, or self-description PRODUCT.md ranks lower?
- Does a hiring manager need a legend, or should marks name themselves inline?
