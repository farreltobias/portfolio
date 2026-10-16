---
target: home page (fifth run)
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/index.astro"
target_fingerprint: "sha256:c8d6aec667a236cc3dc4c82973f048bf5bdd3ec489715096cd775267095c163b"
target_path: /Users/farreltobias/www/portfolio/src/pages/index.astro
timestamp: 2026-10-15T17-15-38Z
slug: src-pages-index-astro
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Sheet hover/focus clear; Status: Available visible |
| 2 | Match System / Real World | 2 | Sheet 001/004, roman numerals, Notation, CSS-role key labels |
| 3 | User Control and Freedom | 3 | Skip link, plain links; stretched links block text selection |
| 4 | Consistency and Standards | 2 | Magenta "measured" on a non-numeric change; API figure as prose; band width varies with layout |
| 5 | Error Prevention | 3 | Figure cap and empty states guarded; long unbroken figure still overflows on phones |
| 6 | Recognition Rather Than Recall | 3 | Rows self-label; hatch legend far from index on desktop |
| 7 | Flexibility and Efficiency | n/a | Single-pass Persuade |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined; ramp key and per-row hatch cost attention |
| 9 | Error Recovery | 3 | CTA now leads to real contact paths |
| 10 | Help and Documentation | n/a | Persuade |
| **Total** | | **22/32** | **Acceptable (69%)** |

## Design Specificity Verdict
Highly specific; record-sheet model is the positioning made visible. Risk is the instrument competing with evidence. CLI clean; browser 6 groups desktop / 5 mobile, all intentional or artifacts. No overflow at real content; contact links valid except LinkedIn display "in/farrel" vs href "in/farreltobias".

## Priority Issues
1. [P1] Mobile order rec → key → spec pushes "Status: Available" to y≈1379; ramp is a valley after the peak. Order rec → spec → key at ≤760, or collapse the ramp.
2. [P1] Ramp role labels (Hover, Field, Rules) speak to designers; legend far from index rows. Drop role words or move notation beside the index.
3. [P2] Closing action redundant: "Let's talk" → /contact repeats the four rows; headline bottom-heavy at desktop.
4. [P2] Long unbroken figure (e.g. "R$12.000/mês→R$3.400/mês") overflows at 390 — word joiners + no overflow-wrap fallback.
5. [P2] Magenta "measured" on "External → In-platform" (content, user-owned).
Deferred: lead figure fold at 1024×768 / wraps; Portuguese stress.

## Persona Red Flags
- Jordan: jargon labels; hatched chip may read as empty slot.
- Riley: unbroken-figure overflow; single-featured index shows heading with no rows; total count includes non-featured; sheet text unselectable.
- Casey: index at y≈1555; 3874px page.
- Engineering leader: one hard number up front, one buried; magenta on non-measure reads as padding; no employment/client/personal context on sheets.

## Minor Observations
- Lead h2 outside "Selected work" in the outline.
- Index hover tint has no inline padding.
- "Read case study" sits between year and fields on tablet/mobile.
- Hatch band stretches to 876px at tablet.
- Magenta 3.32:1 on hover tint — large only.

## Questions to Consider
- What else could own column 1 that is evidence, not vocabulary?
- Should the band's width carry meaning or be fixed-length?
- What one action should the black bar do that the rows can't?
