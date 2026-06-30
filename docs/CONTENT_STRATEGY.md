# Content Strategy

## Voice and Tone

**Voice**: Direct, specific, technically confident. Not boastful. Let the work speak.

**Tone**: Conversational but precise. Write like a senior engineer explaining to a capable peer, not a resume bullet point.

**Avoid**:
- Buzzword soup ("passionate", "results-driven", "synergize")
- Vague impact claims without context
- First-person overuse — lead with the work, not "I"
- Wall-of-text paragraphs; use short paragraphs and white space

**Prefer**:
- Concrete outcomes: latency reduced, team size, user count, timeframe
- Active verbs: built, designed, led, replaced, reduced, shipped
- Specificity over superlatives

---

## Page Content Hierarchies

Each page has a defined content hierarchy. These hierarchies are the implementation contract — they drive the Prismic content model, the component structure, and the page layout. Every element listed below must appear in the rendered page.

---

### Home

**Job**: Make a hiring manager understand who Farrel is and why they should keep reading, in under 30 seconds.

```
Hero
  ↓ Headline (positioning statement — a value proposition, not a job title)
  ↓ Subheadline (1–2 supporting sentences)
  ↓ Primary CTA ("View my work" → Work page)
  ↓ Static architecture panel placeholder (visual right column)

Featured Work
  ↓ Eyebrow label
  ↓ 2–3 featured Case Study cards (title, outcome summary, tech tags)
  ↓ "View all work" link → Work page

About Preview
  ↓ 2–3 sentences — who Farrel is and what he cares about
  ↓ "More about me" link → About page

Insights Preview
  ↓ Eyebrow label
  ↓ Latest 2–3 Insight cards (title, date)
  ↓ "View all insights" link → Insights page

CTA
  ↓ Headline ("Open to the right opportunity")
  ↓ Supporting sentence
  ↓ Primary CTA button → Contact page
```

---

### Work

**Job**: Demonstrate engineering depth, product instinct, and execution track record through curated Case Studies.

```
Page Header
  ↓ Page title ("Work")
  ↓ Optional intro (1–2 sentences from Prismic)

Case Study Grid
  ↓ CaseStudyCard × N (sorted by sort_order)
    ↓ Cover image
    ↓ Title
    ↓ Company / context
    ↓ Outcome summary
    ↓ Tech tags
    ↓ "Read case study" link
```

**Initial Case Studies** (ordered by display priority):
1. Internal Customer Success Platform
2. Auction Platform Modernization
3. AI-assisted Workflow Automation

---

### Case Study Detail

**Job**: Give a hiring manager enough detail to understand the problem, Farrel's contribution, and the outcome. Readable in 5–8 minutes.

```
Header
  ↓ Cover image (full-width or contained)
  ↓ Title
  ↓ Company (or anonymized descriptor)
  ↓ Role
  ↓ Timeline
  ↓ Tech tags

Problem
  ↓ What was the problem? What were the constraints?
  ↓ (2–3 paragraphs — sets context before any solution)

Architecture
  ↓ System design, technical decisions, trade-offs considered
  ↓ Optional: architecture diagram or system map

Implementation
  ↓ How it was built; key engineering choices
  ↓ Optional: inline code example

Results
  ↓ What shipped; narrative context
  ↓ Metric callouts (2–4 stats: label + value)

Reflection (optional)
  ↓ What would be done differently?
  ↓ What was learned?

Navigation
  ↓ "← Back to Work" link
  ↓ Optional: next/prev Case Study
```

**Content rules**:
- No NDA violations — anonymize company name or context as needed
- Metrics are powerful but only when real; do not fabricate numbers
- Diagrams and system maps are strongly encouraged (static images from Stitch or Excalidraw)
- Keep jargon accessible — not every reader is a backend specialist

---

### About

**Job**: Build trust and personality. Make Farrel feel like a real person with a point of view, not a CV in prose.

```
Header
  ↓ Profile image
  ↓ Lead paragraph (3–4 sentences — who Farrel is and what he cares about)

Engineering Philosophy
  ↓ How he thinks about building software (1–2 paragraphs)
  ↓ Not a list of technologies — a genuine point of view

Background
  ↓ Career narrative with key inflection points
  ↓ NOT a chronological resume
  ↓ Optional: visual timeline component

Beyond Work
  ↓ 2–4 sentences; humanizing; kept genuinely short

Connect
  ↓ "Want to work together?" prompt
  ↓ Link → Contact page
```

---

### Insights

**Job**: Demonstrate that Farrel thinks actively about engineering problems. Establishes intellectual presence beyond the case studies.

```
Page Header
  ↓ Page title ("Insights")
  ↓ Optional intro (1–2 sentences from Prismic)

Insights Grid
  ↓ InsightCard × N (sorted by published_date desc)
    ↓ Title
    ↓ Published date
    ↓ Tags
    ↓ Excerpt
    ↓ "Read" link
```

**Format**: Short engineering notes. 300–800 words. Not long-form blog posts.

**What qualifies**:
- A specific technical problem solved and the reasoning behind the solution
- A pattern encountered across multiple projects
- A clear opinion on a tool, approach, or trade-off — with rationale
- A short explainer that would have helped a past version of Farrel

**What does not qualify**:
- Link roundups
- Rehashed tutorials
- Vague opinion pieces without concrete technical grounding

**Cadence**: No fixed schedule. Publish only when there is something specific and useful to say.

**Initial Insights** (3 real engineering notes to launch with):
- TBD — Farrel to provide drafts; topics should reflect backend, product, or systems thinking

---

### Insight Detail

**Job**: Deliver a specific technical idea clearly and concisely. Leave the reader with something actionable or a shifted perspective.

```
Header
  ↓ Title
  ↓ Published date
  ↓ Tags

Body (free-form, composed from slices)
  ↓ prose — main narrative
  ↓ code_block — code examples when relevant
  ↓ callout — aside, note, or caveat
  ↓ image_block — diagram or supporting visual

Footer
  ↓ "← Back to Insights" link
  ↓ Related Insights (optional; manual curation, not algorithmic)
```

---

### Contact

**Job**: Give the right people a clear, low-friction way to reach Farrel. Communicate openness without being generic.

```
Header
  ↓ Headline (from contact.hero_headline)
  ↓ Intro (from contact.hero_intro — what Farrel is open to)

Availability
  ↓ Intro text (from contact.availability_intro)
  ↓ Availability items list (from contact.availability_items)

FAQ (optional)
  ↓ Question/answer pairs (from contact.faq_items)

Contact options
  ↓ Email address (from settings.contact_email)
  ↓ LinkedIn link (from settings.linkedin_url)
  ↓ GitHub link (from settings.github_url)
  ↓ Scheduling link (from settings.scheduling_url, optional)

CTA
  ↓ Headline (from contact.cta_headline)
  ↓ Body (from contact.cta_body)
  ↓ Button (from contact.cta_button_label)
```

**Content note:** Page-specific text (headline, intro, availability, FAQ) lives in the `contact` Prismic document. Global social links (email, LinkedIn, GitHub) live in `settings` and are shared with the footer.

---

## Editorial Workflow

1. Draft content in Prismic (rich text fields)
2. Preview via Prismic preview mode before publishing
3. Publish triggers a Vercel deploy via webhook (no manual deploy needed)
4. No staging environment for content-only changes — Prismic preview is sufficient

## Content Maintenance

| Content | Review trigger |
|---|---|
| Home hero and positioning | When changing roles or focus |
| Case Studies | After significant project milestones |
| About | Annually or after meaningful career shifts |
| Insights | Publish-driven; no deletion policy |
| Settings and Navigation | As needed |
