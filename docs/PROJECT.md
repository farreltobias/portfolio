# Project: Guilherme Farrel — Personal Portfolio

## Overview

Personal portfolio and engineering website for Guilherme Farrel, a Product Engineer with a backend-first mindset. The site communicates engineering depth, product thinking, and execution quality to international hiring teams and technical decision-makers.

## Vision

This portfolio is not a resume rendered as a website. It is an engineering artifact.

The implementation itself is part of the message. Every architectural decision — how content is modeled, how pages are rendered, how components are composed, how performance is managed — should reflect the same standards Farrel would apply to a production product.

A hiring manager who reads the source code, inspects the Lighthouse scores, or reviews the CMS schema should reach the same conclusion as someone who reads the case studies: this is someone who thinks carefully about systems and ships work that holds up.

**What the implementation must demonstrate:**

- **Product thinking** — deliberate decisions about what to build, what to cut, and why
- **Software architecture** — a clear, navigable structure that a new contributor could understand without a guided tour
- **Maintainability** — code that Farrel can return to after months away and edit without confusion
- **Performance** — Lighthouse ≥ 95 on every page; Core Web Vitals in the green; zero gratuitous JavaScript
- **Accessibility** — semantic HTML, visible focus states, contrast compliance; not an audit-time afterthought
- **Craftsmanship** — the gap between working and well-made; the kind of attention to detail that's invisible when present and obvious when absent

When in doubt about an implementation choice, ask: would a senior engineer reviewing this code be impressed, or would they raise a concern? Build the version that earns the former.

## Primary Goal

Secure international engineering opportunities in product-focused roles: Product Engineer, Full Stack Engineer, or Backend Engineer. Every page and content decision should serve this objective.

## Target Audience

1. **Engineering hiring managers** at product companies, startups, and scale-ups — evaluating technical depth and product instinct
2. **Technical recruiters** sourcing for senior IC or tech-lead roles with international scope
3. **CTOs and founders** at smaller organizations looking for someone who can own a problem end-to-end

## Success Metrics

| Metric | Target |
|---|---|
| Time to understand Farrel's value prop | < 30 seconds on the home page |
| Case study completion rate | Measure with Vercel Analytics |
| Inbound contact quality | Role-relevant messages only |
| Lighthouse performance score | ≥ 95 on all pages |
| Accessibility score | 100 |

## Scope

### In scope

- Personal portfolio as an engineering artifact (the site itself demonstrates craft)
- Work page with curated case studies
- Insights section with short engineering notes
- About page with professional narrative
- Contact page with availability, FAQ, and global social links

### Out of scope

- Farrel.tech institutional website (consulting, SaaS, freelancing) — future separate project
- Blog platform with comments, subscriptions, or user accounts
- Client portals or authenticated sections
- Multi-language support

## Constraints

- **Language**: English only
- **CMS**: Prismic — content must be editable without code deploys
- **Stack**: Astro + React islands + TypeScript + Tailwind + Vercel — no deviations without documented rationale
- **Performance**: No client-side rendering of content that can be server-rendered at build time
- **Maintenance**: Solo-maintained; content model must be simple enough to edit months after initial setup

## Relationship to Farrel.tech

This site (`portfolio.farrel.tech`) is the personal engineering portfolio. Farrel.tech is a future institutional site for consulting and products. The two should eventually link to each other but remain independent properties with distinct purposes and audiences.
