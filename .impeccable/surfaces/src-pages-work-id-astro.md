---
version: 1
slug: "src-pages-work-id-astro"
primary_target: "src/pages/work/[id].astro"
related_targets: ["src/styles/work.css"]
---

# Case study

Scope: the shared case-study layout (`src/pages/work/[id].astro`) for every project route. Inherits the Home world.

Visitor mode: **Read**: the visitor understands one project — problem, approach, solution, verified outcome.

Audience/job: an evaluator who opened one sheet from Home or Work and wants enough context to judge Farrel's decisions, then reach contact or the next sheet. Content: frontmatter (title, description, year, role, constraint, decision, outcome, outcomeMetric, outcomeFigure) and the Markdown narrative, whose sections vary per project. Nothing invented; confidentiality wording stays as written.

Plan: an optional typed `plan` list in frontmatter renders the game-plan drawing (solid only into built moves, dashed otherwise), sticky in the right column on desktop. Plates: optional `plates` (screenshots of the delivered work, provenance embedded) render as drawing-sheet plates in a band after the record strip; the project keeps its own visual identity inside the frame. Structure: an optional `structure` list renders an information-architecture blueprint in the right column (priority: plan, then structure, then contents). Sheet marks: crop marks at the corners of sheets and plates. Constraints: before → after figure only when outcomeMetric and outcomeFigure both exist; cover and tags optional and not rendered (no per-project rasters); no client JS.

## Direction contract

THESIS: The full sheet behind the index row — the record's three fields as its title block, the narrative as the working notes. It refuses the blog-post template with a hero image.

OWN-WORLD: Home's field and tokens; the record strip in Home's field language; narrative in Plex Mono on cleared ground at a reading measure, each section opening a ruled band; magenta only for a before → after figure and focus (widened by Farrel, 2026-10-16: magenta marks any recorded before → after figure, keyed "Before → after", plus focus).

STORY: The visitor reads what was in the way, what was decided and what changed in three cells, then the reasoning in order, then moves to the next sheet or to contact.

FIRST VIEWPORT: Masthead with Work current. Left zone label "Sheet 00N"; centre the project title in condensed caps with its description; right a spec of Sheet, Year, Role. Below, the three-cell record strip (Constraint with crossed hatch, Decision, Outcome in its honest state), then the narrative begins.

FORM: Zone Sheets record sheet (inherited). Seed key: n/a (task-directed extension, no roll).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
