# Portfolio Professional Polish Design

## Goal

Polish the existing portfolio for internship and job applications without redesigning the site or rebuilding its existing case studies. The result should improve search and social presentation, site identity, external-link safety, contact and resume failure handling, accessibility, and responsive quality while preserving the portfolio's current technical claims and project boundaries.

## Existing System to Preserve

The current portfolio already includes:

- the homepage;
- GraphShield AML and SentinelOps AI case-study routes;
- GraphCite-GCN project integration;
- centralized project and deployment metadata;
- shared Experience the Project and deployment-flow components;
- verified Vercel and Railway deployment links;
- safe conditional deployment-link handling.

This work will not replace Tailwind, migrate frameworks, add a CMS, database, authentication, analytics, or unnecessary dependencies. It will not change the GraphShield or SentinelOps application repositories.

## SEO Metadata

The root App Router metadata in `app/layout.tsx` will use:

- Title: `Abhay Kumar | AI/ML Engineer, Data Scientist & AI Systems Builder`
- Description: `Portfolio of Abhay Kumar — AI/ML engineering, data science, graph intelligence, reliability systems and distributed AI infrastructure.`
- Metadata base: `https://abhay-portfolio-delta-five.vercel.app`

It will also include:

- a concise keyword set covering Abhay Kumar, AI/ML engineering, data science, graph intelligence, reliability engineering, distributed systems, and AI systems;
- author and creator metadata for Abhay Kumar;
- canonical root URL through Open Graph metadata;
- Open Graph type, locale, site name, title, description, URL, and generated preview image;
- Twitter `summary_large_image` metadata using the same title, description, and generated preview image.

The GraphShield route will define the title `GraphShield AML | Abhay Kumar` and a concise case-study description grounded in graph-native AML investigation and decision support.

The SentinelOps route will define the title `SentinelOps AI | Abhay Kumar` and a concise description grounded in reliability intelligence, guarded remediation, and verified recovery without implying production-infrastructure use.

## Open Graph Preview

`app/opengraph-image.tsx` will use Next.js `ImageResponse` to generate a 1200×630 image without third-party dependencies. It will use the existing near-black and cyan identity and contain:

- `Abhay Kumar`
- `AI/ML Engineer · Data Scientist · AI Systems Builder`
- `AI · Machine Learning · Data · Distributed Systems`

The design will prioritize legibility at reduced social-card sizes. It will use restrained grid or geometric accents, high-contrast type, and no copied logos.

## Favicon and Site Identity

`app/icon.tsx` will generate a small square icon using `ImageResponse`. It will use an original `AK` mark with the portfolio's dark background, cyan border/accent, and high-contrast lettering. It will not use any company or product logo.

## Centralized Contact Data

Contact and profile data will remain in `data/site.ts`.

The verified profile links remain:

- GitHub: `https://github.com/abhay799`
- LinkedIn: `https://www.linkedin.com/in/abhay-kumar-ba1719261`

The current email placeholder will be replaced with an absent value rather than exposed. A shared validator will reject:

- empty or whitespace-only values;
- `your-email@example.com` and equivalent known placeholder values;
- values beginning with `PASTE_` or `YOUR_`;
- malformed email addresses.

The homepage will render the email action only when the centralized value passes validation. No fabricated `mailto:` link will be created.

## Resume Support

The intended centralized resume path is `/Abhay-Kumar-Resume.pdf`.

The route will be treated as usable only when:

- it is a valid internal PDF path; and
- `public/Abhay-Kumar-Resume.pdf` exists at build/render time.

The server-rendered homepage will determine availability and pass it into the client Navbar. The desktop and mobile Resume actions will be rendered only when the real file exists, and will use the `download` attribute. The implementation will not generate a fake, empty, or placeholder PDF.

If the file remains absent, the Resume action stays hidden and the final report lists the file as remaining user input.

## Safe Link Handling

The existing safe-link utilities will be extended rather than replaced.

External deployment and profile URL validation will reject:

- empty or whitespace-only values;
- `#`;
- values beginning with `PASTE_` or `YOUR_`;
- malformed URLs;
- non-HTTPS external URLs.

Homepage project actions remain:

- GraphShield AML: Case Study, Live Demo, GitHub;
- SentinelOps AI: Case Study, Live Demo, GitHub;
- GraphCite-GCN: Live Demo, GitHub.

API, documentation, health, and readiness actions remain confined to detailed case studies.

Every rendered external link in the Navbar, homepage, project cards, case studies, and Experience sections will use `target="_blank"` and `rel="noopener noreferrer"`. Internal portfolio navigation will use Next.js `Link` where it represents a route transition.

## Experience and Deployment Presentation

The shared `ProjectExperience` component will remain the detailed access point for live applications, API documentation, API roots, health, readiness, and source code.

Live Application remains the primary recruiter-facing action. Health and readiness remain secondary inspection tools and will not be presented as fabricated online/offline indicators.

The existing deployment flows remain explanatory architecture views:

- GraphShield: Portfolio → Vercel Analyst UI → Railway FastAPI Backend → GraphShield intelligence/models/artifacts.
- SentinelOps: Portfolio → Vercel Control Center → Railway Backend → SentinelOps reliability services → Docker-based supporting infrastructure.

Docker will remain described as packaging and reproducible infrastructure, not as the public hosting provider.

## Deployment Wording and Project Boundaries

Publicly accessible systems will use neutral language such as Live Demo, Public Deployment, Public API, API Documentation, Health, Readiness, and View Source.

The site will not claim enterprise deployment, guaranteed availability, uptime targets, production SLAs, real customer usage, production traffic, or external certification.

GraphShield will continue to state that:

- the public experience uses synthetic or public benchmark data;
- the system supports investigation and decision support;
- human investigators remain authoritative;
- it does not autonomously block accounts or perform irreversible enforcement.

SentinelOps will continue to state that:

- the public experience demonstrates the reliability-intelligence system;
- evidence and scenarios are deterministic/local-demo oriented where applicable;
- RCA remains a hypothesis until supported by evidence;
- remediation is safety-gated;
- human authorization remains part of the control boundary;
- the public deployment is not a connection to real production infrastructure.

## Responsive Polish

The existing visual system will be retained. Targeted corrections will focus on:

- natural hero and technical-heading wrapping at 320px and 375px;
- mobile navigation and action visibility;
- wrapping button groups with usable touch targets;
- project, Experience, technology, repository, capability, and lifecycle cards stacking cleanly;
- understandable deployment-flow arrows when grids wrap;
- safe wrapping for long technical labels and boundary statements;
- no horizontal page overflow or clipped content at 320px, 375px, 768px, standard desktop, or wide desktop widths.

No animation library will be added. Existing reduced-motion handling will remain in effect.

## Accessibility Polish

The focused accessibility pass will verify:

- one meaningful `h1` per page;
- logical heading order;
- semantic `<main>`, `<nav>`, `<section>`, and list structures;
- descriptive visible link labels;
- keyboard-reachable controls;
- visible focus indicators for links and buttons;
- sufficient contrast for muted text, badges, and secondary controls;
- decorative marks hidden from assistive technology where appropriate;
- no important icon-only action without an accessible name.

The existing mobile-navigation button will remain a native button with `aria-label` and `aria-expanded`. Focus styles will be added where existing navigation or homepage actions lack them.

## Testing and Verification

Targeted tests will cover:

- placeholder and malformed email values being rejected;
- valid email values being accepted;
- empty, `#`, `PASTE_*`, `YOUR_*`, malformed, and non-HTTPS external links being rejected;
- the valid internal resume route being recognized;
- invalid resume routes being rejected;
- resume availability requiring both a valid configured path and the real public file;
- existing project-action ordering and conditional rendering remaining intact.

Final verification will run:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

The homepage and both case-study routes must return HTTP 200 from the production build. Rendered-output audits will confirm that:

- no placeholder email or URL appears;
- no missing resume link appears;
- project destinations remain correct;
- external links have both security attributes;
- GraphCite-GCN retains its live demo;
- case-study safety boundaries remain present.

Responsive QA will inspect 320px, 375px, 768px, standard desktop, and wide desktop widths using an available browser or headless browser. If no browser surface is available, that limitation will be reported rather than replaced by a fabricated result.

## Git and Deployment Handoff

The current local project directory has no `.git` metadata. After local verification, the existing GitHub repository will be cloned into a sibling integration checkout under the writable workspace. Only the intended verified source, test, and documentation changes will be transferred into that checkout.

Before committing or pushing, the integration checkout will be compared against remote `main` and will run the same tests, lint, build, and route checks. The workflow will then:

1. create one normal commit on `main` with message `Polish portfolio SEO accessibility and deployment UX`;
2. push normally to `origin/main` without force;
3. wait for the existing GitHub-connected Vercel deployment if its status is observable;
4. verify the production homepage and both case-study routes;
5. inspect the required recruiter journey and external destinations without claiming health merely from URL existence.

If cloning, authentication, pushing, or deployment observation is unavailable, the exact blocker and completed local verification will be reported. No success will be invented.

## Expected Files

- `app/layout.tsx`
- `app/opengraph-image.tsx` (new)
- `app/icon.tsx` (new)
- `app/page.tsx`
- `app/projects/graphshield-aml/page.tsx`
- `app/projects/sentinelops-ai/page.tsx`
- `components/Navbar.tsx`
- `components/ProjectCard.tsx` (audit or targeted focus/link changes only)
- `components/ProjectExperience.tsx` (audit or targeted polish only)
- `data/site.ts`
- `lib/project-links.ts`
- `lib/project-links.test.ts`
- supporting server-only asset-availability helper and focused test if required

