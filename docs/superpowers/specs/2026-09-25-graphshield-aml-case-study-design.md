# GraphShield AML Case Study Design

## Goal

Add a production-quality case-study page for GraphShield AML and connect it from the existing homepage project card without redesigning unrelated portfolio sections.

The result should present GraphShield as a credible AI/ML engineering project for recruiters and technical reviewers while preserving the portfolio's existing dark AI/fintech visual language.

## Scope

This change will:

- Add the App Router route `/projects/graphshield-aml`.
- Extend the shared `Project` type with an optional `caseStudy` path.
- Update the GraphShield project data with the supplied description, deployment URLs, and case-study path.
- Upgrade project cards to support conditional Case Study, Live Demo, and GitHub actions.
- Preserve every other project's content and existing live-demo behavior.

It will not add dependencies, fabricate performance claims, create dashboard mockups, or redesign the homepage outside the project-card actions.

## Page Architecture

The route will be implemented in `app/projects/graphshield-aml/page.tsx` as a server-rendered React page using only Next.js, TypeScript, and Tailwind CSS.

The page will use the same visual primitives already established by the portfolio:

- near-black page background;
- cyan accent color;
- white and zinc typography hierarchy;
- subtle translucent cards and borders;
- rounded containers and pills;
- the existing responsive content width and horizontal padding patterns.

No client-side state or animation library is needed. The page will remain lightweight and readable with reduced-motion behavior inherited from the global stylesheet.

## Content Structure

The page will present the supplied content in this order:

1. Back link to the portfolio homepage.
2. Hero with category, project name, flagship badge, description, primary actions, and deployment badges.
3. A prominent Experience the Project section.
4. Problem framing with an emphasized human-authority statement.
5. Nine-step investigation workflow.
6. Six core intelligence capability cards.
7. Deployment architecture.
8. Validation principles.
9. Safety and governance principles.
10. Technology stack chips.
11. Final CTA repeating the primary external project actions.

All claims will be limited to the project facts supplied in the request. The page will contain no inferred metrics, certifications, user counts, or model-performance figures.

## Investigation Workflow

The workflow will use a responsive grid of numbered cards rather than a diagramming package. On smaller screens, the steps will form a clear vertical sequence. On wider screens, they will form a multi-column flow with restrained connecting accents where they do not reduce readability.

The exact sequence is:

1. Transaction & entity data
2. Temporal feature engineering
3. Graph construction
4. ML / risk scoring
5. Graph-path investigation
6. Evidence retrieval
7. Policy retrieval
8. Explainability
9. Investigator review

## Shared Project Data

`data/site.ts` will add optional `demo`, `api`, `apiDocs`, `health`, `readiness`, and `caseStudy` deployment metadata to `Project` while retaining the required `github` field.

The GraphShield entry will use the exact supplied project object, including:

- the expanded description;
- `demo: "https://portfolio-sandy-eta-4ipb9hl1lz.vercel.app"`;
- `api: "https://graphshield-api-production.up.railway.app"`;
- `apiDocs: "https://graphshield-api-production.up.railway.app/docs"`;
- `health: "https://graphshield-api-production.up.railway.app/health"`;
- `readiness: "https://graphshield-api-production.up.railway.app/ready"`;
- `caseStudy: "/projects/graphshield-aml"`.

All other project entries will remain unchanged. GraphCite-GCN will keep its configured live demo.

## Experience the Project

A prominent section near the top of the case study will make the deployed system directly accessible. It will use compact explanatory cards for:

- Live Application — the Vercel analyst interface;
- Interactive API — the deployed FastAPI/OpenAPI documentation;
- Backend Service — the Railway API root;
- Service Health — the confirmed `/health` endpoint;
- Service Readiness — the confirmed `/ready` endpoint;
- Source Code — the GitHub repository.

The Live Application will be the strongest action. All other links will be secondary actions. Every card will be rendered from the centralized project metadata, and a missing or placeholder-like value will omit the corresponding card rather than render a broken control.

Near the hero, compact badges will identify `Frontend: Vercel`, `Backend: Railway`, `Containerization: Docker`, and `Source: GitHub`. Docker will be described as reproducible/containerized infrastructure rather than a public hosting destination.

## Deployment Architecture

A lightweight Tailwind flow will show:

`Portfolio → Vercel Analyst UI → Railway FastAPI → GraphShield intelligence / models / artifacts`

The diagram will use cards and directional cues without a diagramming dependency. Availability language will remain neutral; the page will not claim guaranteed uptime.

## Project Card Behavior

`components/ProjectCard.tsx` will render a responsive action row beneath the tags:

- `Case Study →` only when `caseStudy` exists, using Next.js `Link`;
- `Live Demo ↗` only when `demo` exists, using an external anchor;
- `GitHub ↗` for every project, using an external anchor.

Every external anchor will use `target="_blank"` and `rel="noopener noreferrer"`. This replaces the current invalid `project.href` access while retaining the card's existing layout, hover treatment, spacing, and typography.

## Responsive and Accessibility Behavior

- Content will remain readable at mobile widths without horizontal scrolling.
- Button groups will wrap naturally.
- Workflow and capability layouts will collapse to single-column arrangements on small screens.
- Headings will follow a logical hierarchy.
- Links will have visible labels and keyboard-accessible focus behavior through native link elements and existing browser behavior.
- Decorative elements will not carry semantic meaning.

## Verification

After implementation:

1. Run the configured lint command.
2. Run the production build command.
3. Fix errors introduced by the change.
4. Confirm the generated route is `/projects/graphshield-aml`, corresponding locally to `http://localhost:3000/projects/graphshield-aml` when the development server is running.
5. Confirm all six configured GraphShield experience links render with correct external-link attributes.
6. Confirm no placeholder or empty deployment value can render a link.

## Files Expected to Change

- `app/projects/graphshield-aml/page.tsx` (new)
- `components/ProjectCard.tsx`
- `data/site.ts`
- `docs/superpowers/specs/2026-09-25-graphshield-aml-case-study-design.md` (new)
