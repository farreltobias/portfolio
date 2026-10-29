---
title: Ottoset Energy — Institutional Website
description: An institutional website for an energy services company, built and deployed to production as client work in 2022.
year: 2022
role: Full Stack Developer
featured: false
constraint: Basic site with no content workflow.
decision: Rebuild as a CMS-managed platform.
outcome: Gave the business a complete, self-managed institutional web presence.
outcomeMetric: Web presence
outcomeKind: change
outcomeFigure: Basic site → CMS platform
order: 6
plates:
  - image: ../../assets/projects/ottoset/home-desktop.jpg
    caption: Home, with the service areas as the main navigation.
    view: desktop
  - image: ../../assets/projects/ottoset/services-desktop.jpg
    caption: Services, each area with its own section.
    view: desktop
  - image: ../../assets/projects/ottoset/home-mobile.jpg
    caption: Home on a phone.
    view: mobile
platesSource: https://energy.farrel.tech/
structure:
  root: Home
  note: Service areas lead the navigation.
  branches:
    - title: About
    - title: Generator groups
      items: [Sale, Installation, Rental, Automation, Maintenance, Remote monitoring]
    - title: Aviation
      items: [GPU modernization]
    - title: Solar energy
      items: [Sale, Installation, Rental, Maintenance, Remote monitoring]
    - title: Building solutions
      items: [Electrical, Civil, Hydraulic]
    - title: Project portfolio
      note: Managed in Prismic.
    - title: Clients
    - title: Contact
      items: [Contact page, Service providers, Careers, FAQ]
---

Client work from an earlier stage of my career, delivered between September and December 2022 through the agency Lets Comunicação e Desenvolvimento.

## Many services, one company

Ottoset Energy sells and maintains power generators, and its work reaches well beyond that: aviation (modernizing ground power units), solar energy, and building solutions across electrical, civil and hydraulic work.

That breadth was the communication problem. The company needed a professional public presence that could present several quite different service areas without reading as a scattered list, and still make it obvious how to get in touch.

Before this project, Ottoset had a basic site with no content workflow. The rebuild replaced it with a structured site whose projects and job listings Ottoset could manage itself.

## How the site was organized

The delivered website brought everything into one structure:

- **Service areas as the main navigation:** generator groups, aviation, solar energy and building solutions each had their own place, so a visitor could go straight to the part of the business relevant to them.
- **Company information:** who Ottoset is and why to choose it, presented alongside the services rather than buried behind them.
- **Project portfolio:** completed cases, with a path to the full list.
- **Client references:** the companies Ottoset already served, shown as evidence.
- **Contact paths throughout:** a contact page, phone and WhatsApp, a link to Ottoset's solar simulator, and separate routes for prospective service providers and job applicants.

Projects and job listings were managed through Prismic, so Ottoset's content could change without code changes.

## My role

I was the full stack developer on a three-person team, working with a project manager and a UX/UI designer. The visual design was the designer's work, based on a community template.

I built the site from that design: a responsive experience for desktop and mobile, the animations throughout, and the Prismic integration that made projects and job listings editable.

## Delivered

The website was completed and deployed to production for Ottoset.

A reference copy of the version I delivered is hosted at <a href="https://energy.farrel.tech/" target="_blank" rel="noopener">energy.farrel.tech<span class="vh"> (opens in a new tab)</span></a>. It is preserved as a record of that work; it is not Ottoset's current website, and it does not reflect any ongoing relationship. No traffic or business results are claimed for it.

## Where it sits

This is client delivery from before my Product Engineering work: building and shipping a real production site to a team's design and a client's needs. The work that follows in this portfolio adds what this project did not ask of me then, which is owning the product decisions themselves.
