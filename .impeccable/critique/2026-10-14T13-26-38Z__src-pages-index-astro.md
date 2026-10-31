---
target: home page (post adapt/typeset/distill/clarify/polish)
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:9c8aa770fb877cdf1003ef4a8478efdf541f199b8e72aa73e8792d1239e94219"
target_path: /Users/farreltobias/www/portfolio/src/pages/index.astro
timestamp: 2026-10-14T13-26-38Z
slug: src-pages-index-astro
closed: true
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Sheet 001/002, Status: Available, honest "not yet measured" |
| 2 | Match System / Real World | 2 | Zone 0–X numerals, Notation, Index, Recorded, Practice = insider vocabulary |
| 3 | User Control and Freedom | 3 | Skip link, plain links, no traps |
| 4 | Consistency and Standards | 2 | Black 45° control chip not in legend; Outcome label missing on index rows <1280; lead h2 vs rows h3 |
| 5 | Error Prevention | 2 | Lead chosen by year only, unstable on ties; schema accepts any string as a figure |
| 6 | Recognition Rather Than Recall | 3 | Fields labelled in words beside marks |
| 7 | Flexibility and Efficiency | n/a | Single-path Persuade page |
| 8 | Aesthetic and Minimalist Design | 3 | Restrained; lead figure stated twice; ramp keys tokens the page doesn't use |
| 9 | Error Recovery | 3 | Missing outcomes rendered honestly |
| 10 | Help and Documentation | n/a | Static evidence page |
| **Total** | | **21/32** | **Acceptable (66%)** |

## Design Specificity Verdict
Authored at ≥1280. Ramp is a false legend: --paper, --ink-faint, --rule-soft, --ink-soft match no ramp step; only g0/g10 are used. Ramp hidden <1280, so tablet/phone lose the signature. Detector: CLI 1 advisory (em-dash, inflated by `--` comment rules). Browser 27 desktop / 5 mobile; real: none blocking; desktop 10px nav (14px-tall hit areas), p.yr 11px. False positives: cream, stripes, oversized-h1, all-caps-body on .vh, tight-leading on sheet-link.

## Priority Issues
1. [P1] Lead outcome states its figure twice and doesn't name the metric — set outcomeMetric; sentence should add, not repeat, or drop when a figure exists.
2. [P1] Lead selection depends on year sort; ties unstable; an unmeasured project could lead — add explicit lead/order or prefer projects with outcomeFigure, stable tiebreak.
3. [P1] Ramp key is ornamental (tokens off-ramp) and missing <1280 — snap paper/faint/rule tokens to ramp steps; compact 11-step strip below 1280.
4. [P2] Index rows lose the Outcome label <1280 (header hidden) — in-cell Outcome label per row.
5. [P2] Black 45° hatch chip on controls not in legend; three identical bars dilute primary action.

## Persona Red Flags
- Jordan: 0–X unexplained; bare "OUTCOME" over magenta figure; jargon labels.
- Riley: figure-only rows lack unit context; non-delta figures accepted; unstable lead; stale complexity field/comment.
- Casey: no ramp; delta at fold edge; spec (availability) buried after notation; legend after card.
- Engineering leader: strong figure fast on desktop; unattached Outcomes row reads as unverifiable; generic Background.

## Minor Observations
- Hover removes sheet-link underline (only affordance vanishes on point).
- Closing CTA outside <main>; no footer landmark.
- --mag comment contradicts focus-ring use.
- Magenta 3.95:1: keep ≥24px semibold.
- At 1280x800 lead "Read case study" sits at the fold.
- Dev server on :4321 was stale (no lead delta) during review; restart required.

## Questions to Consider
- Is the ramp the world's signature or its alibi?
- Should the unattached Outcomes section exist, or move into Background as a sentence?
- Why is the delta half the size of the headline when it's the memorable moment?
