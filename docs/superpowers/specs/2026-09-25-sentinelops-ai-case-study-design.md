# SentinelOps AI Case Study Design

## Goal

Add a production-quality case-study page for SentinelOps AI and connect it from the existing homepage project card. The page should help a technical recruiter or engineer understand the complete reliability lifecycle, safety architecture, implemented evidence, and current engineering boundaries without overstating project maturity.

The work must preserve all unrelated portfolio sections and the existing dark AI/fintech design language.

## Scope

This change will:

- Add the App Router route `/projects/sentinelops-ai`.
- Extend the shared `Project` type with an optional `caseStudy` path if that field is not already present.
- Replace the SentinelOps homepage entry with the supplied project content and verified deployment metadata.
- Ensure project cards support conditional Case Study and Live Demo actions plus an always-present GitHub action.
- Preserve GraphShield AML, GraphCite-GCN, MERCURY X, and all other configured projects.

This change will not add dependencies, redesign unrelated pages, create fake product imagery, or make unsupported production, certification, benchmark, or business-impact claims.

## Implementation Approach

The case study will be a server-rendered React page in `app/projects/sentinelops-ai/page.tsx`. Page-specific content will be represented with local typed or inferred arrays and rendered through small internal layout patterns. This keeps the implementation readable without introducing a general-purpose case-study framework that would constrain the distinct SentinelOps and GraphShield narratives.

The page will use only Next.js, TypeScript, Tailwind CSS, and existing portfolio styling conventions. It requires no client-side state, animation package, charting library, or diagramming library.

## Visual Language

SentinelOps will remain part of the portfolio's dark design system while communicating its own progression:

`Reliability signals → Diagnosis → Safety gates → Controlled recovery → Verification`

The page will use:

- the existing near-black background;
- cyan accents and restrained gradients;
- subtle translucent cards and borders;
- white and zinc typography hierarchy;
- strong whitespace and responsive grids;
- compact technical labels, numbered stages, and status treatments;
- no decorative element that implies unavailable production data.

GraphShield communicates investigation, graph intelligence, evidence, and policy context. SentinelOps will instead emphasize lifecycle progression, guarded decisions, controlled action, and verification. The two pages may share foundational styling but will not duplicate section structure or visual composition.

## Content Structure

The page will present content in this order:

1. Back navigation to the portfolio homepage.
2. Hero, deployment badges, and visible project boundary.
3. A prominent Experience the Project section.
4. Reliability problem framing.
5. Fourteen-stage reliability lifecycle.
6. Safety invariant and enforcement boundaries.
7. Twelve intelligence and control capabilities.
8. Control Center overview.
9. Deterministic reliability scenarios.
10. Architecture layers and deployment flow.
11. Validation and evidence.
12. Current Engineering Boundaries.
13. Technology stack.
14. Repository structure.
15. Final CTA.

## Hero and Project Boundary

The hero will show:

- `SentinelOps AI`;
- `Reliability Intelligence & Failure Prevention`;
- `Flagship / Active Engineering` as project status context;
- the supplied hero description;
- a visible `Local / Synthetic / Deterministic Demo` badge;
- primary external actions for the deployed Control Center and GitHub repository.

The boundary `LOCAL · SYNTHETIC · DETERMINISTIC · NOT CONNECTED TO PRODUCTION INFRASTRUCTURE` will be visible near the hero rather than relegated to fine print. The public deployment provides access to the demonstration system; it does not change the synthetic data, deterministic scenario, local-sandbox execution, or non-production-infrastructure boundaries.

Compact badges will identify `Frontend: Vercel`, `Backend: Railway`, `Containerization: Docker`, and `Source: GitHub`. Docker will be described as packaging and supporting infrastructure, not as the live hosting platform.

## Experience the Project

A prominent section near the top of the page will use explanatory cards for:

- Live Application — the deployed Vercel Control Center;
- Interactive API — the deployed FastAPI/OpenAPI documentation;
- Backend Service — the Railway API root;
- Service Health — the confirmed `/health` endpoint;
- Service Readiness — the confirmed `/ready` endpoint;
- Source Code — the GitHub repository.

The Live Application will be the strongest action. Secondary cards will provide direct backend, operational-status, and source access. All cards will read URLs from centralized project metadata. Missing, empty, or placeholder-like values will omit the related card and action.

## Problem Framing

The problem section will use the headline `Operational failures are rarely explained by a single metric.` It will explain that distributed-system diagnosis requires reasoning across metrics, logs, traces, alerts, dependencies, change context, confidence, safety, rollback, and post-action verification.

The operational questions from the brief will be presented as scan-friendly prompts. The narrative will position SentinelOps as a lifecycle-oriented reliability system rather than a standalone anomaly detector.

## Reliability Lifecycle

The lifecycle will use lightweight numbered cards with visual grouping and progression cues. It will remain a linear semantic sequence even when responsive layouts wrap it across rows.

The exact stages are:

1. Sense
2. Detect
3. Predict
4. Correlate
5. Diagnose
6. Challenge RCA
7. Simulate
8. Prioritize
9. Plan
10. Guard
11. Human Authorization
12. Controlled Execution
13. Verify
14. Investigate

On mobile, the stages will form a readable vertical or compact single-column sequence. On larger screens, they will use a multi-column layout with numbered ordering and restrained connector cues. No graph dependency will be introduced.

## Safety Invariant

One of the page's strongest visual sections will state:

`NO REMEDIATION WITHOUT`

`EVIDENCE + CONFIDENCE + SAFETY + AUTHORIZATION + ROLLBACK + VERIFICATION`

Supporting content will make these boundaries explicit:

- RCA remains a hypothesis until reviewed and validated.
- Agents cannot independently confirm or authorize their own RCA.
- SentinelGuard cannot be bypassed.
- Human authorization cannot be bypassed.
- Execution is limited to a local sandbox.
- Rollback is the currently configured execution adapter.
- Restart and traffic shift are planning or allowlist concepts, not unrestricted production actions.

The section will communicate that safety is an architectural control plane, not a decorative disclaimer.

## Core Capabilities

The page will include cards for:

1. Telemetry Intelligence
2. Failure Detection
3. Failure Prediction
4. Correlation
5. Root-Cause Analysis
6. RCA Challenge
7. Counterfactual Simulation
8. SLO-Aware Prioritization
9. Remediation Planning
10. SentinelGuard
11. Human Authorization
12. Verification

The wording will distinguish hypotheses from established facts, simulations from measured outcomes, and development evidence from production-calibrated performance.

## Control Center

The Control Center section will use a structured textual technical panel, not a fabricated screenshot. It will state that the repository contains a React/Vite local demonstration UI with:

- 15 reliability/SRE views;
- a provider boundary supporting deterministic `demo` data;
- an optional `local-api` fallback;
- no connection to a live production operations environment.

## Reliability Scenarios

The `Reliability scenarios` section will state that the repository includes nine deterministic scenarios. It will describe the supplied example behavior categories:

- cautious system operation;
- RCA uncertainty;
- SentinelGuard rejection;
- pending human authorization;
- controlled local recovery;
- safe failure.

The section will emphasize reproducibility and traceability without inventing scenario outcomes.

## Architecture Layers

The architecture overview will present eight layers:

1. Runtime / Configuration — runtime and safety configuration.
2. Telemetry — metrics, logs, traces, and generated operational evidence.
3. Intelligence — detection, prediction, correlation, and RCA.
4. Reasoning — RCA challenge and counterfactual simulation.
5. Reliability Decision Layer — SLO-aware prioritization and remediation planning.
6. Safety Control Plane — SentinelGuard and human authorization.
7. Execution — controlled local sandbox actions.
8. Verification — post-action validation and investigation.

The section will also state that the repository includes seven local demo services.

The architecture area will include a lightweight deployment flow:

`Portfolio → Vercel Control Center → Railway Backend → SentinelOps reliability services → Docker-based supporting infrastructure`

This flow identifies public access paths separately from containerized reproducibility and local supporting services. It will not imply guaranteed availability or production infrastructure integration.

## Validation and Evidence

The validation section will describe the repository's evidence-oriented development materials:

- architecture documentation;
- phase index and system overview;
- execution lifecycle documentation;
- safety-control-plane documentation;
- safety invariants and limitations;
- validation scope;
- benchmark/evidence documentation;
- evidence manifest;
- deterministic scenarios;
- Python contract and phase tests;
- internal release documentation.

Implementation evidence will be described as covering Phases 0–15. The copy will not claim external certification, production validation, production benchmarks, or third-party verification. Internal Git tags, release markers, or certification documents will not be presented as independent certifications.

## Current Engineering Boundaries

A dedicated, professionally framed section will state:

- SentinelOps is currently a local demonstration system.
- It is not connected to production infrastructure.
- Production telemetry is not connected.
- Production performance is not measured.
- Counterfactual outcomes are simulated.
- Generated processed data and model binaries may remain local or Git-ignored.
- Execution is constrained to a local sandbox.
- Rollback is the currently configured execution adapter.
- Traffic-shift and restart are planning or allowlist concepts rather than unrestricted production actions.
- Kubernetes assets are not currently present.
- Helm assets are not currently present.

These are deliberate transparency and scope boundaries, not hidden disclaimers.

## Technology Stack

The stack will be shown as clean chips using only the supplied technologies:

- Python
- FastAPI
- React
- Vite
- PostgreSQL
- Redis
- Kafka
- OpenTelemetry
- Prometheus
- Grafana
- Docker
- Polars
- Machine Learning
- Distributed Systems
- SRE
- AIOps

Kubernetes and Helm will not be included.

## Repository Structure

The repository structure will be presented as a compact grid of developer-oriented path cards rather than an oversized raw code block:

- `configs/` — Runtime and safety configuration
- `docs/` — Architecture, evidence, scenarios, and guides
- `frontend/` — React/Vite Control Center
- `infra/` — Docker Compose local infrastructure
- `monitoring/` — Prometheus and OpenTelemetry configuration
- `scripts/` — Build, preflight, and local API entry points
- `services/` — Seven local demo services
- `src/` — SentinelOps Python implementation
- `tests/` — Contract and phase tests

## Homepage Data and Project Cards

`data/site.ts` will support:

```ts
export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  github: string;
  demo?: string;
  api?: string;
  apiDocs?: string;
  health?: string;
  readiness?: string;
  caseStudy?: string;
};
```

The SentinelOps entry will use the `Flagship` status, six supplied tags, GitHub URL, `/projects/sentinelops-ai` case-study path, and these verified deployment URLs:

- `demo: "https://sentinelops-ai-weld.vercel.app"`;
- `api: "https://sentinelops-ai-backend-production.up.railway.app"`;
- `apiDocs: "https://sentinelops-ai-backend-production.up.railway.app/docs"`;
- `health: "https://sentinelops-ai-backend-production.up.railway.app/health"`;
- `readiness: "https://sentinelops-ai-backend-production.up.railway.app/ready"`.

`components/ProjectCard.tsx` will render:

- `Case Study →` only when `caseStudy` exists, using Next.js `Link`;
- `Live Demo ↗` only when `demo` exists, using an external anchor;
- `GitHub ↗` for every project, using an external anchor.

Every external anchor will use `target="_blank"` and `rel="noopener noreferrer"`. SentinelOps will therefore show `Case Study →`, `Live Demo ↗`, and `GitHub ↗` on the homepage card. Detailed API, health, readiness, and deployment links belong only on the case-study page.

## Final CTA

The closing section will use:

- title: `Explore SentinelOps AI`;
- description: `Review the implementation, reliability lifecycle, safety controls and validation evidence in the repository.`;
- primary external action: `Open Live Application ↗`;
- secondary external action: `View GitHub ↗`.

It may include an internal link to the homepage projects section.

## Accessibility and Responsive Behavior

- The page will use semantic sectioning and a logical heading hierarchy.
- Native links will remain keyboard accessible and receive visible focus styles.
- Text and controls will preserve sufficient contrast.
- Card grids, repository paths, workflow stages, and CTA groups will collapse cleanly on small screens.
- No content will require horizontal scrolling.
- Existing reduced-motion behavior will apply.
- Animation will not be required to understand architecture or state.

## Verification

After implementation:

1. Run the configured lint command.
2. Run the production build command.
3. Fix errors introduced by the work.
4. Verify `/projects/sentinelops-ai` is generated and corresponds locally to `http://localhost:3000/projects/sentinelops-ai`.
5. Confirm the homepage still renders.
6. Confirm the GraphShield case-study route renders.
7. Confirm GraphCite-GCN retains its configured external links.
8. Confirm projects without `demo` omit the Live Demo action.
9. Confirm SentinelOps renders Case Study, Live Demo, and GitHub card actions.
10. Confirm the local, synthetic, deterministic boundary is visible.
11. Scan the page for unsupported production, performance, certification, Kubernetes, or Helm claims.
12. Confirm unrelated portfolio sections were not modified.
13. Confirm all six configured SentinelOps experience links render with correct external-link attributes.
14. Confirm no placeholder or empty deployment value can render a link.

## Files Expected to Change

- `app/projects/sentinelops-ai/page.tsx` (new)
- `components/ProjectCard.tsx`
- `data/site.ts`
- `docs/superpowers/specs/2026-09-25-sentinelops-ai-case-study-design.md` (new)

The existing GraphShield spec separately governs `app/projects/graphshield-aml/page.tsx`. Shared homepage files should satisfy both approved case-study integrations without overwriting either project.
