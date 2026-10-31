# Rules

## Portfolio

### Rules

- Work is the primary evidence of competence.
- Claims about capability must be supported by work, experience, or outcomes when evidence is available.
- Measurable outcomes take precedence over descriptions of responsibilities.
- Product and engineering decisions take precedence over implementation trivia.
- Technology is relevant when it explains a constraint, decision, or outcome.

## Project

### Fields

- `title`: required
- `description`: required
- `year`: required
- `role`: required
- `featured`: `true | false`
- `cover`: optional
- `tags`: 0..N

### Rules

- Each project represents a distinct piece of work.
- Project summaries must communicate the problem or value of the work.
- Projects must not be presented as technology lists.

## Case Study

### Relations

- Belongs to exactly 1 project.

### Rules

- Must provide enough information to understand the problem.
- Must identify Farrel's contribution when the work involved other people.
- Must expose relevant product or engineering decisions.
- Must communicate the resulting solution.
- Must communicate outcomes when known.
- Unknown outcomes must not be fabricated.
- A case study may omit sections that add no relevant information.
- Case studies are not required to use identical narrative structures.

## Selected Work

### Rules

- Contains 1 or more projects.
- Prioritizes projects that best demonstrate Farrel's positioning.
- Featured status controls eligibility for prominent portfolio placement.

## Contact

### Rules

- At least 1 contact path must remain available.
- Contact paths must support professional opportunities, client work, or both.

## Content

### Rules

- Professional evidence takes precedence over self-description.
- Resume-style responsibility lists must not replace explanation of work or impact.
- Repeated facts must have one canonical presentation when repetition adds no user value.
 