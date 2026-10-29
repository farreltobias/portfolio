---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/styles/home.css"]
---

# Home

Scope: the Home surface (`src/pages/index.astro`) and the shared visual system it establishes for Work, Case Study, About and Contact.

Visitor mode: **Persuade.**

Audience: engineering leaders, product leaders, and founders evaluating Farrel from an application, referral, or vendor comparison, skimming with other candidates open.

Job: form an accurate impression of what kind of engineer Farrel is within seconds, then reach the work or a contact path.

Proof and content: positioning copy already written on the Home; one real project (Pro Electric) in the content collection; two real outcome figures (API response several seconds -> ~500 ms; support requests ~4/day -> 1-2/week). No other project, client, metric, or testimonial may be invented. An unrecorded outcome renders as an empty field, never a claim.

Constraints: Astro-first, no client JS without a required interaction; English default with `/pt` later, so type must carry Portuguese diacritics and labels must tolerate ~20% longer strings; 1 project today growing to 3-4.

**Maintenance constraint (binding, user-stated 2026-10-11):** the previous world was replaced because it was expensive to maintain and poor value for the work. This world is colour, type, rule and layout only. No per-project raster assets. A small fixed set of shared assets is permitted but must never grow with the content: adding a project is a markdown file and nothing else. **Amended by Farrel, 2026-10-20:** projects may carry optional screenshot plates (`plates` in frontmatter, files in `src/assets/projects/<id>/`, each with embedded provenance) where the screens are the evidence; a project without plates still needs nothing but its markdown file.

Memorable moment: the outcome delta set at collision scale with its hatch band, read against the eleven-step ramp.

Unresolved: the contact backend (Home links to `/contact` as today); whether `4/day -> 1-2/week` belongs to Pro Electric specifically or to Farrel's work generally.

## Direction contract

THESIS: The portfolio is the measured plan behind the operation, not a brochure about it. Every claim carries a value on one strict scale, and the page shows the working as well as the result. It refuses the centred column over a row of bordered cards, and it refuses decoration that carries no value.

OWN-WORLD: A bone working field (near-#F2F0EC) ruled by hairlines in near-black. One eleven-step ramp from black to paper is the only tonal vocabulary; nothing is tinted off it. A single dichroic magenta is reserved for one job and never spent elsewhere: the measured delta and the active state. Widened by Farrel (2026-10-16): the magenta hatch now marks any recorded before → after figure, keyed "Before → after". Narrowed by Farrel (2026-10-29): magenta marks only a measured before → after (`outcomeKind: measured`), keyed "Before → after, measured"; a recorded change of state is set in ink over an ink hatch, keyed "Before → after, changed". Hatch is notation, not texture - a legend binds each hatch density to a numeric delta, 45-degree hatch marks a measured change, crossed hatch at ninety degrees marks a conflict, a two-step mask marks what is held back. Type is three voices: a tall condensed grotesk for display caps, tracked caps for legends, tabular mono with real fractions for every quantity. Body prose sits only on cleared ground, never over hatch. Recognizable with all content removed by the ramp column, the hatch legend, and the hairline field divisions.

STORY: The visitor reads the positioning line at plan scale and understands the mechanism in one line. They see each project as a record sheet: the constraint hatched as conflict, the decision stated plainly, the outcome carried as a delta at collision scale against the ramp. They believe it because every figure is placed on a declared scale with a legend, and an unrecorded one is visibly empty. They act on a primary control that reads as part of the instrument.

FIRST VIEWPORT: A bone field divided by hairlines. Left, a narrow ramp column: eleven labelled steps, top to bottom, with the legend beneath. Centre, the positioning line in condensed display caps at plan scale, the supporting line in mono beneath it on cleared ground, and the primary action as a black bar control with its delta chip hatched at the right end. Upper right, a specification block in tracked caps and tabular mono: ROLE, STATUS, LOCATION with real values. Lower right, the first project's record sheet overlapping the field slightly askew, its outcome delta in magenta at the largest numeral on the page. The section below begins as the next record sheet, squared to the field.

FORM: Zone Sheets, the darkroom exposure record, taken in the register the user named - the architectural plan behind the system. Dealt as a competitive challenger and chosen over the assigned direction (Consignment) and over my own pick (Line Map). Seed key cba33ffc.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
