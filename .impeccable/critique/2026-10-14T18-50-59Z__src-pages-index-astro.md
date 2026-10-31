---
target: home page (third run)
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:c973ce6daa1a8dd9e800da37f2ec7f456b0d8568a4513e43508675d3ebbe57f2"
target_path: /Users/farreltobias/www/portfolio/src/pages/index.astro
timestamp: 2026-10-14T18-50-59Z
slug: src-pages-index-astro
closed: true
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Hover step, whole-sheet focus ring, Sheet 001/004 |
| 2 | Match System / Real World | 2 | Plan vocabulary (Sheet, Index, Practice, I–X, Field/Rules); "0 refs" jargon |
| 3 | User Control and Freedom | 3 | Skip link, plain links; stretched links block text selection on sheets |
| 4 | Consistency and Standards | 2 | Magenta measured mark on a non-delta (HowdyShip); "Selected work" twice; index head duplicates row labels; key says II = Rules but hard rules are X |
| 5 | Error Prevention | 2 | Any outcomeFigure accepted; Figure nowrap turns a long figure into page overflow |
| 6 | Recognition Rather Than Recall | 3 | Legend beside marks on desktop; far from index rows ≤1279 |
| 7 | Flexibility and Efficiency | n/a | Single-pass Persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Strong restraint; ramp carries no evaluative information |
| 9 | Error Recovery | 2 | Long figure degrades silently into horizontal scroll |
| 10 | Help and Documentation | n/a | Persuade surface |
| **Total** | | **20/32** | **Acceptable (63%)** |

## Design Specificity Verdict
Highly specific at ≥1280; delivers the brief's first viewport. Detector: CLI clean (0). Browser 32 desktop / 6 mobile; real: text-overflow on span.figure-side (HowdyShip "12 players · 124 moves · 0 refs") — page scrolls 185px at 1440, 54px at 390. 10px interactive text (nav, Read case study) worth judging. False positives: cream, stripes, oversized-h1, all-caps on headings and .vh, tight-leading on single-line figures.

## Priority Issues
1. [P0] Horizontal overflow from an arrow-less outcomeFigure — Figure.astro wraps the whole string in one nowrap span inside a fixed 300px track. Fix: nowrap sides only when an arrow exists, min-width:0/overflow-wrap on .fo, minmax(0,300px).
2. [P1] Magenta measured mark on a count, not a change (HowdyShip) — breaks the legend. Fix: only style as delta when the figure contains "→", or rewrite as a real delta, or move to sentence.
3. [P1] Tablet/mobile first viewport leads with the ramp scale bar; delta below fold at 1024/768/390; mobile bar unlabelled. Fix: move the ramp into one Key block with the notation after the lead sheet, or drop at ≤760.
4. [P2] Legend separated from index marks ≤1279; "Selected work" twice; index head duplicates row labels.
5. [P2] 10px interactive text at ≥761 (nav, Read case study); line-height 1 on wrapping labels cramps Portuguese; nav 38×14 on non-coarse tablets.

## Persona Red Flags
- Jordan: ramp roles (Ink/Prose/Labels/Rules/Field) read as a design artefact beside the headline; jargon labels.
- Riley: long figure overflow; Portuguese gauge role collides with headline at 1280; index grows unbounded at 5+.
- Casey: side-scroll; delta below fold; spec/"Available" last at y≈1180.
- Engineering leader: strongest number (API ~500 ms) buried in Background; no direct email/LinkedIn/GitHub on Home.

## Minor Observations
- Record tilt/shadow overhang ~10–13px at 1280/390.
- Hover uses g1, a step the key leaves unnamed.
- "→" outside the font unicode-range; falls back to system font.
- Background "Along the way, brought…" has no subject.
- complexity schema field still dead.

## Questions to Consider
- Would anyone miss the ramp if it were deleted?
- Should the API figure, the most engineering-leader number, be the only measured result without a sheet while a game's player count gets magenta?
- Should the closing band carry direct contact paths instead of only linking to /contact?
