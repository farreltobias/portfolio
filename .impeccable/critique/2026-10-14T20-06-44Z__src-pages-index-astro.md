---
target: home page (fourth run)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:11e42878208a32c057e1465630995e74bd9587e8cbafc1da65f9034f8a47361c"
target_path: /Users/farreltobias/www/portfolio/src/pages/index.astro
timestamp: 2026-10-14T20-06-44Z
slug: src-pages-index-astro
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Hover step, rotated focus ring, Sheet 001/004 |
| 2 | Match System / Real World | 2 | Sheet/Index/Notation/0–X vocabulary; key roles (Hover, Prose, Field) are CSS jargon; "Sheet …/004" beside "5 projects" |
| 3 | User Control and Freedom | 3 | Skip link, persistent nav |
| 4 | Consistency and Standards | 3 | Same three fields everywhere; lead puts year in foot, rows under title |
| 5 | Error Prevention | 3 | Figure cap, empty contacts skip, mask for missing outcomes; 32-char cap still wraps to 3 lines in lead |
| 6 | Recognition Rather Than Recall | 3 | Legend always present on desktop; after the lead sheet below 1280 |
| 7 | Flexibility and Efficiency | n/a | Single-pass Persuade |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined; 5 silent ramp steps; "Product Engineer" ×6 |
| 9 | Error Recovery | 2 | Both CTAs land on placeholder /contact |
| 10 | Help and Documentation | n/a | Persuade |
| **Total** | | **22/32** | **Acceptable (69%)** |

## Design Specificity Verdict
Specific and holding. CLI clean. Browser 9 desktop / 5 mobile, all intentional or detector artifacts (cream, stripes, oversized-h1, all-caps on .vh-padded links, 11px tiny-text, tight-leading 1.25 on single-line caps, em-dash count incl. titles). No overflow at any width; arrow renders in Plex Mono; shadow within ~2px of masthead edge.

## Priority Issues
1. [P1] Primary action dead-ends: both "Let's talk" go to /contact which is placeholder copy; contact.ts empty → no working contact path, violating PRODUCT.md. Fill contact.ts or give /contact a real path.
2. [P1] Memorable moment misses the fold at 1024x768; 40px figure wraps at 1280/768; 32-char figure takes 3 lines in the lead. Size .record .delta to its container (cqi clamp); tablet grid lets the sheet run full width.
3. [P2] DOM order puts the Key aside (legend) before the h1 for screen readers. Move aside after content; place with grid.
4. [P2] Portuguese stress: long single role word reaches the headline gutter at 1280; spec dd ragged; display line-height 0.92 crowds diacritics.
5. [P3] Role repeated in every index .yr; unmeasured mask too faint (opacity 0.5).

## Persona Red Flags
- Jordan: plan vocabulary and CSS-role key before evidence.
- Riley: 3-line 32-char figure; PT word collision; diacritic crowding; count mismatch; placeholder CTA.
- Casey: ~600px of key + spec between lead sheet and index.
- Engineering leader: "External → In-platform" as measured reads as inflation (pending rewrite); API number buried; CTA lands nowhere.

## Minor Observations
- Lead h2 is a peer of "Selected work" in the outline.
- ~150px dead air before the outcome track at 1440.
- Archivo latin range lacks U+2192 (only matters if an arrow is set in Archivo).
- Primary control gets lighter on hover.

## Questions to Consider
- Would a key naming what tones mean about the work need eleven steps?
- Order the index by evidence strength so the page builds rather than fades?
- Give the API figure a sheet once attributable?
