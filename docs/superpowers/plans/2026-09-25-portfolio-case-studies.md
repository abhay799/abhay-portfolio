# GraphShield and SentinelOps Case Studies Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add production-quality GraphShield AML and SentinelOps AI case-study routes, connect both from the homepage, and expose verified deployment links through safe, centralized metadata.

**Architecture:** Keep deployment URLs and project identity in `data/site.ts`, isolate URL filtering and link-list construction in a small tested helper, and share only the Experience and deployment-flow presentation primitives. Each route remains a server component with page-local narrative data so GraphShield and SentinelOps retain distinct technical identities.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5.9, Tailwind CSS 4, Node.js built-in test runner, ESLint

**Specs:** `docs/superpowers/specs/2026-09-25-graphshield-aml-case-study-design.md` and `docs/superpowers/specs/2026-09-25-sentinelops-ai-case-study-design.md`

## Global Constraints

- Do not add runtime or development dependencies.
- Do not redesign unrelated homepage sections or rewrite working global styles.
- Internal case-study navigation must use Next.js `Link`.
- Every external link must use `target="_blank"` and `rel="noopener noreferrer"`.
- Missing, empty, `#`, or `PASTE_...` deployment values must not render links or cards.
- Do not invent metrics, customers, certifications, production results, deployment URLs, or unsupported technologies.
- Preserve SentinelOps language that data and scenarios are synthetic/deterministic, RCA is a hypothesis, counterfactuals are simulations, and execution is constrained by safety controls.
- Keep Docker positioned as reproducible/containerized infrastructure, not as a public hosting platform.
- Preserve GraphCite-GCN's configured live demo and every unrelated project entry.
- This workspace currently has no `.git` metadata; omit commit commands unless a repository is initialized before execution.

## Review Focus

- A `demo`, `api`, `apiDocs`, `health`, or `readiness` value containing whitespace, `#`, or a `PASTE_` marker must be treated as absent; Task 1 tests every case.
- A project with only GitHub configured must still produce one usable experience link and no empty cards; Task 1 tests this case.
- Homepage actions must stay in Case Study → Live Demo → GitHub order while omitting unavailable actions; Task 2 tests the derived action model and the production build checks rendering.
- External links must consistently carry both security attributes while internal links remain Next.js links; Tasks 2 and 3 include source assertions and the final audit checks both routes.
- The public SentinelOps deployment must not erase the local/synthetic/deterministic execution boundary; Task 5 includes explicit copy assertions in the final audit.

---

### Task 1: Centralized Project Metadata and Safe Link Models

**Files:**
- Create: `lib/project-links.ts`
- Create: `lib/project-links.test.ts`
- Modify: `package.json`
- Modify: `tsconfig.json`
- Modify: `data/site.ts`

**Interfaces:**
- Produces: `ProjectLinkKey`, `ExperienceLink`, `isUsableExternalUrl(value?: string): value is string`, `getExperienceLinks(project: Project): ExperienceLink[]`, and `getProjectCardActions(project: Project): ProjectCardAction[]`.
- Produces: named `graphShieldProject` and `sentinelOpsProject` constants plus the existing `projects: Project[]` export.
- Consumes: no new application interfaces.

- [ ] **Step 1: Add a failing Node test for URL filtering and link construction**

Create `lib/project-links.test.ts` with these tests:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import type { Project } from "../data/site.ts";
import {
  getExperienceLinks,
  getProjectCardActions,
  isUsableExternalUrl,
} from "./project-links.ts";

const baseProject: Project = {
  title: "Example",
  eyebrow: "Example category",
  description: "Example description",
  status: "Active",
  tags: [],
  github: "https://github.com/example/project",
};

test("rejects empty and placeholder-like deployment values", () => {
  assert.equal(isUsableExternalUrl(undefined), false);
  assert.equal(isUsableExternalUrl(""), false);
  assert.equal(isUsableExternalUrl("   "), false);
  assert.equal(isUsableExternalUrl("#"), false);
  assert.equal(isUsableExternalUrl("PASTE_SENTINELOPS_URL_HERE"), false);
  assert.equal(isUsableExternalUrl("https://example.com"), true);
});

test("builds only configured experience links in product-first order", () => {
  const links = getExperienceLinks({
    ...baseProject,
    demo: "https://demo.example.com",
    apiDocs: "https://api.example.com/docs",
    api: "https://api.example.com",
    health: "#",
    readiness: "PASTE_READY_URL_HERE",
  });

  assert.deepEqual(
    links.map(({ key }) => key),
    ["demo", "apiDocs", "api", "github"],
  );
});

test("keeps GitHub when no optional deployment fields are configured", () => {
  assert.deepEqual(
    getExperienceLinks(baseProject).map(({ key }) => key),
    ["github"],
  );
});

test("builds compact homepage actions in the required order", () => {
  const actions = getProjectCardActions({
    ...baseProject,
    demo: "https://demo.example.com",
    caseStudy: "/projects/example",
  });

  assert.deepEqual(
    actions.map(({ kind, label }) => [kind, label]),
    [
      ["internal", "Case Study →"],
      ["external", "Live Demo ↗"],
      ["external", "GitHub ↗"],
    ],
  );
});
```

- [ ] **Step 2: Add the test script and verify the test fails**

Add this script to `package.json`:

```json
"test": "node --test lib/project-links.test.ts"
```

Add `"allowImportingTsExtensions": true` under `compilerOptions` in `tsconfig.json`. The project already uses `noEmit`, so this setting permits the explicit `.ts` imports required by Node's built-in TypeScript test execution without changing application output.

Run: `npm.cmd test`

Expected: FAIL because `lib/project-links.ts` does not exist.

- [ ] **Step 3: Extend the project type and centralize verified metadata**

Update `Project` in `data/site.ts` to:

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

Define and export the two case-study projects exactly:

```ts
export const graphShieldProject: Project = {
  title: "GraphShield AML",
  eyebrow: "Financial Crime Intelligence",
  description:
    "Graph-native AML intelligence platform combining graph investigation, temporal feature engineering, machine learning, policy retrieval, explainability and evidence-backed investigation workflows.",
  status: "Flagship",
  tags: ["Graph ML", "RAG", "Polars", "DuckDB", "FastAPI"],
  github: "https://github.com/abhay799/graphshield-aml",
  demo: "https://portfolio-sandy-eta-4ipb9hl1lz.vercel.app",
  api: "https://graphshield-api-production.up.railway.app",
  apiDocs: "https://graphshield-api-production.up.railway.app/docs",
  health: "https://graphshield-api-production.up.railway.app/health",
  readiness: "https://graphshield-api-production.up.railway.app/ready",
  caseStudy: "/projects/graphshield-aml",
};

export const sentinelOpsProject: Project = {
  title: "SentinelOps AI",
  eyebrow: "Reliability Intelligence",
  description:
    "Reliability intelligence and failure-prevention platform combining telemetry, prediction, correlation, RCA, safety-gated remediation and verified recovery.",
  status: "Flagship",
  tags: ["AIOps", "SRE", "Causal RCA", "Kafka", "OpenTelemetry", "Docker"],
  github: "https://github.com/abhay799/sentinelops-ai",
  demo: "https://sentinelops-ai-weld.vercel.app",
  api: "https://sentinelops-ai-backend-production.up.railway.app",
  apiDocs: "https://sentinelops-ai-backend-production.up.railway.app/docs",
  health: "https://sentinelops-ai-backend-production.up.railway.app/health",
  readiness: "https://sentinelops-ai-backend-production.up.railway.app/ready",
  caseStudy: "/projects/sentinelops-ai",
};
```

Build `projects` from those named constants followed by the unchanged MERCURY X and GraphCite-GCN objects. Preserve the existing project order unless the current homepage intentionally uses another order.

- [ ] **Step 4: Implement the safe link helper**

Create `lib/project-links.ts` with these exported models and behavior:

```ts
import type { Project } from "@/data/site";

export type ProjectLinkKey =
  | "demo"
  | "apiDocs"
  | "api"
  | "health"
  | "readiness"
  | "github";

export type ExperienceLink = {
  key: ProjectLinkKey;
  title: string;
  description: string;
  label: string;
  href: string;
  primary?: boolean;
};

export type ProjectCardAction = {
  kind: "internal" | "external";
  label: string;
  href: string;
};

export function isUsableExternalUrl(value?: string): value is string {
  const candidate = value?.trim();
  return Boolean(
    candidate &&
      candidate !== "#" &&
      !candidate.toUpperCase().startsWith("PASTE_") &&
      /^https:\/\//i.test(candidate),
  );
}

export function getExperienceLinks(project: Project): ExperienceLink[] {
  const candidates: Array<ExperienceLink | null> = [
    isUsableExternalUrl(project.demo)
      ? {
          key: "demo",
          title: "Live Application",
          description:
            "Use the deployed interface and explore the project from a user's perspective.",
          label: "Launch Application ↗",
          href: project.demo,
          primary: true,
        }
      : null,
    isUsableExternalUrl(project.apiDocs)
      ? {
          key: "apiDocs",
          title: "Interactive API",
          description:
            "Inspect supported backend endpoints through the deployed FastAPI/OpenAPI interface.",
          label: "Open API Docs ↗",
          href: project.apiDocs,
        }
      : null,
    isUsableExternalUrl(project.api)
      ? {
          key: "api",
          title: "Backend Service",
          description: "Access the deployed Railway API that powers the frontend.",
          label: "Open API ↗",
          href: project.api,
        }
      : null,
    isUsableExternalUrl(project.health)
      ? {
          key: "health",
          title: "Service Health",
          description: "Check whether the public service is currently reachable.",
          label: "Check Health ↗",
          href: project.health,
        }
      : null,
    isUsableExternalUrl(project.readiness)
      ? {
          key: "readiness",
          title: "Service Readiness",
          description: "Inspect the service's public readiness response.",
          label: "Check Readiness ↗",
          href: project.readiness,
        }
      : null,
    isUsableExternalUrl(project.github)
      ? {
          key: "github",
          title: "Source Code",
          description: "Inspect the implementation, architecture, tests and documentation.",
          label: "View GitHub ↗",
          href: project.github,
        }
      : null,
  ];

  return candidates.filter((link): link is ExperienceLink => link !== null);
}

export function getProjectCardActions(project: Project): ProjectCardAction[] {
  return [
    project.caseStudy
      ? { kind: "internal" as const, label: "Case Study →", href: project.caseStudy }
      : null,
    isUsableExternalUrl(project.demo)
      ? { kind: "external" as const, label: "Live Demo ↗", href: project.demo }
      : null,
    isUsableExternalUrl(project.github)
      ? { kind: "external" as const, label: "GitHub ↗", href: project.github }
      : null,
  ].filter((action): action is ProjectCardAction => action !== null);
}
```

If the Node test runner cannot resolve the `@/` alias, change only the helper's type import to `../data/site.ts`; keep application imports using `@/` elsewhere.

- [ ] **Step 5: Run focused tests and type-aware production compilation**

Run: `npm.cmd test`

Expected: all four tests PASS.

Run: `npm.cmd run build`

Expected at this stage: FAIL only because the existing `ProjectCard` still accesses `project.href`; record that failure as the red state for Task 2.

### Task 2: Homepage Project Card Actions

**Files:**
- Modify: `components/ProjectCard.tsx`
- Test: `lib/project-links.test.ts`

**Interfaces:**
- Consumes: `getProjectCardActions(project: Project): ProjectCardAction[]` from Task 1.
- Produces: project cards that render internal and external actions with correct semantics.

- [ ] **Step 1: Strengthen the action-model test for missing demos**

Add this test to `lib/project-links.test.ts`:

```ts
test("omits Live Demo when a project has no usable deployment", () => {
  const actions = getProjectCardActions({
    ...baseProject,
    demo: "PASTE_DEPLOYMENT_HERE",
    caseStudy: "/projects/example",
  });

  assert.deepEqual(
    actions.map(({ label }) => label),
    ["Case Study →", "GitHub ↗"],
  );
});
```

- [ ] **Step 2: Run the focused test**

Run: `npm.cmd test`

Expected: PASS for helper behavior while `npm.cmd run build` still fails on `project.href`.

- [ ] **Step 3: Replace the invalid single link with semantic conditional actions**

Import Next.js Link and the helper:

```tsx
import Link from "next/link";
import type { Project } from "@/data/site";
import { getProjectCardActions } from "@/lib/project-links";
```

Inside `ProjectCard`, derive `const actions = getProjectCardActions(project);`. Replace the current `project.href` anchor with a wrapping action row using `mt-7 flex flex-wrap gap-x-5 gap-y-3`. Render internal actions with:

```tsx
<Link
  key={`${action.label}-${action.href}`}
  href={action.href}
  className="inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
>
  {action.label}
</Link>
```

Render external actions with:

```tsx
<a
  key={`${action.label}-${action.href}`}
  href={action.href}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
>
  {action.label}
</a>
```

Keep the card's existing title, status, description, tags, background, and hover treatment unchanged.

- [ ] **Step 4: Verify tests, lint, and build**

Run: `npm.cmd test`

Expected: all tests PASS.

Run: `npm.cmd run lint`

Expected: PASS.

Run: `npm.cmd run build`

Expected: PASS before the new case-study routes are added.

### Task 3: Shared Experience and Deployment Flow Components

**Files:**
- Create: `components/ProjectExperience.tsx`
- Create: `components/DeploymentFlow.tsx`

**Interfaces:**
- Consumes: `Project`, `getExperienceLinks`, and a page-specific list of deployment stages.
- Produces: `ProjectExperience({ project }: { project: Project })` and `DeploymentFlow({ stages }: { stages: string[] })`.

- [ ] **Step 1: Add a source-level external-link contract test**

Extend `lib/project-links.test.ts` with:

```ts
import { readFileSync } from "node:fs";

test("experience component applies external-link security attributes", () => {
  const source = readFileSync(
    new URL("../components/ProjectExperience.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /target="_blank"/);
  assert.match(source, /rel="noopener noreferrer"/);
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm.cmd test`

Expected: FAIL because `components/ProjectExperience.tsx` does not exist.

- [ ] **Step 3: Implement `ProjectExperience`**

Create a server component that calls `getExperienceLinks(project)`, renders the heading `Experience the Project`, and maps links into a responsive `md:grid-cols-2 lg:grid-cols-3` card grid. Each card must include `title`, `description`, and `label`; primary links receive a white button treatment while secondary links receive a bordered cyan/zinc treatment. Every anchor must include the two external-link security attributes.

Use this component contract:

```tsx
export function ProjectExperience({ project }: { project: Project }) {
  const links = getExperienceLinks(project);

  return (
    <section aria-labelledby="experience-title" className="border-t border-white/8 py-20 sm:py-24">
      {/* max-w-7xl container, heading, explanatory copy, responsive cards */}
    </section>
  );
}
```

The explanatory copy should state that public services can occasionally restart or wake from an idle state without claiming guaranteed availability.

- [ ] **Step 4: Implement `DeploymentFlow`**

Create a presentational component that uses an ordered list so stage order remains semantic:

```tsx
export function DeploymentFlow({ stages }: { stages: string[] }) {
  return (
    <ol className="grid gap-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
      {stages.map((stage, index) => (
        <li key={stage} className="relative rounded-2xl border border-white/10 bg-black/20 p-4">
          <span className="text-xs font-semibold text-cyan-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-sm font-medium text-white">{stage}</p>
          {index < stages.length - 1 && (
            <span aria-hidden="true" className="mt-3 block text-cyan-300 md:absolute md:-right-2.5 md:top-1/2 md:mt-0 md:-translate-y-1/2">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
```

Keep arrow placement readable if the grid wraps; if absolute arrows become ambiguous at a breakpoint, show arrows only within each card rather than between cards.

- [ ] **Step 5: Verify shared components**

Run: `npm.cmd test`

Expected: all tests PASS, including the security-attribute source assertion.

Run: `npm.cmd run lint`

Expected: PASS.

### Task 4: GraphShield AML Case Study

**Files:**
- Create: `app/projects/graphshield-aml/page.tsx`

**Interfaces:**
- Consumes: `graphShieldProject`, `ProjectExperience`, and `DeploymentFlow`.
- Produces: the `/projects/graphshield-aml` App Router page.

- [ ] **Step 1: Add a failing GraphShield page contract test**

Add a source-contract test to `lib/project-links.test.ts` that reads `app/projects/graphshield-aml/page.tsx` and asserts the presence of:

```ts
for (const phrase of [
  "GraphShield AML",
  "Financial crime is rarely visible in a single transaction.",
  "Human investigators remain authoritative.",
  "ProjectExperience",
  "Point-in-Time Features",
  "No autonomous account blocking.",
  "Explore GraphShield",
]) {
  assert.match(source, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
}
```

Expected path resolution should use `new URL("../app/projects/graphshield-aml/page.tsx", import.meta.url)`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm.cmd test`

Expected: FAIL because the GraphShield page does not exist.

- [ ] **Step 3: Create page-local content data**

In the page module, define these arrays above the component:

```tsx
const workflow = [
  "Transaction & entity data",
  "Temporal feature engineering",
  "Graph construction",
  "ML / risk scoring",
  "Graph-path investigation",
  "Evidence retrieval",
  "Policy retrieval",
  "Explainability",
  "Investigator review",
];

const capabilities = [
  ["Graph Investigation", "Investigates relationships between accounts, entities, counterparties and transaction paths instead of treating transactions as isolated rows."],
  ["Point-in-Time Features", "Builds historical features while preserving temporal correctness and reducing future-information leakage risk."],
  ["Risk Intelligence", "Combines machine-learning signals, graph-derived features and investigation context."],
  ["Evidence Search", "Provides investigator-oriented retrieval across supporting evidence and case artifacts."],
  ["Policy Intelligence", "Retrieves relevant AML/KYC policy and regulatory guidance to support investigator reasoning."],
  ["Explainability", "Surfaces graph paths, signals and supporting context behind findings rather than exposing only an unexplained score."],
] as const;
```

Also define exact validation, governance, and stack arrays from the GraphShield spec. Use `graphShieldProject` as the only source for deployment URLs.

- [ ] **Step 4: Implement the GraphShield page structure**

Create a default server component with semantic `<main>`, `<section>`, `<h1>`, and `<h2>` elements. Implement, in order:

1. Back link using `<Link href="/">← Back to portfolio</Link>`.
2. Hero with category, flagship badge, exact supplied description, primary Live Analyst UI action, and GitHub/API Docs secondary actions.
3. Deployment badges for Vercel, Railway, Docker, and GitHub.
4. `<ProjectExperience project={graphShieldProject} />`.
5. Problem section and prominent human-authority statement.
6. Nine-step workflow using numbered cards.
7. Six capability cards.
8. Deployment architecture using `<DeploymentFlow stages={["Portfolio", "Vercel Analyst UI", "Railway FastAPI", "GraphShield intelligence / models / artifacts"]} />`.
9. Validation and safety/governance sections.
10. Technology chips.
11. Final `Explore GraphShield` CTA with demo, GitHub, and API Docs links from `graphShieldProject`.

Use `mx-auto max-w-7xl px-5 sm:px-8`, section borders, rounded translucent cards, cyan accents, and responsive grids matching the homepage. Do not add client directives or animations.

- [ ] **Step 5: Verify GraphShield**

Run: `npm.cmd test`

Expected: all tests PASS.

Run: `npm.cmd run lint`

Expected: PASS.

Run: `npm.cmd run build`

Expected: PASS and route output includes `/projects/graphshield-aml`.

### Task 5: SentinelOps AI Case Study

**Files:**
- Create: `app/projects/sentinelops-ai/page.tsx`
- Test: `lib/project-links.test.ts`

**Interfaces:**
- Consumes: `sentinelOpsProject`, `ProjectExperience`, and `DeploymentFlow`.
- Produces: the `/projects/sentinelops-ai` App Router page.

- [ ] **Step 1: Add a failing SentinelOps boundary and content contract test**

Add a test that reads `app/projects/sentinelops-ai/page.tsx` and asserts all phrases below are present:

```ts
const requiredPhrases = [
  "SentinelOps AI",
  "LOCAL · SYNTHETIC · DETERMINISTIC · NOT CONNECTED TO PRODUCTION INFRASTRUCTURE",
  "Operational failures are rarely explained by a single metric.",
  "NO REMEDIATION WITHOUT",
  "EVIDENCE + CONFIDENCE + SAFETY + AUTHORIZATION + ROLLBACK + VERIFICATION",
  "RCA remains a hypothesis",
  "Counterfactual results are simulated",
  "15 reliability/SRE views",
  "nine deterministic scenarios",
  "Current Engineering Boundaries",
  "Explore SentinelOps AI",
];
```

Also assert that the source does not contain `99.9%`, `MTTR reduction`, `Kubernetes deployment`, or `Helm chart`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm.cmd test`

Expected: FAIL because the SentinelOps page does not exist.

- [ ] **Step 3: Create page-local lifecycle and capability data**

Define the exact lifecycle:

```tsx
const lifecycle = [
  "Sense",
  "Detect",
  "Predict",
  "Correlate",
  "Diagnose",
  "Challenge RCA",
  "Simulate",
  "Prioritize",
  "Plan",
  "Guard",
  "Human Authorization",
  "Controlled Execution",
  "Verify",
  "Investigate",
];
```

Define capability records with this exact content:

```tsx
const capabilities = [
  ["Telemetry Intelligence", "Transforms generated metrics, logs and traces into structured reliability signals."],
  ["Failure Detection", "Identifies abnormal or failure-related behavior from system evidence."],
  ["Failure Prediction", "Uses temporal and engineered signals to estimate elevated failure risk before an incident fully develops. Historical development evidence is not presented as production-calibrated performance."],
  ["Correlation", "Connects related operational signals across services and time."],
  ["Root-Cause Analysis", "Generates evidence-backed RCA hypotheses from correlated system behavior."],
  ["RCA Challenge", "Challenges the initial root-cause hypothesis rather than allowing the first explanation to become automatically accepted truth."],
  ["Counterfactual Simulation", "Simulates potential outcomes of candidate remediation decisions. Counterfactual results are simulated, not measured production outcomes."],
  ["SLO-Aware Prioritization", "Prioritizes incidents and candidate actions using service reliability objectives and operational impact."],
  ["Remediation Planning", "Produces controlled remediation plans with explicit preconditions."],
  ["SentinelGuard", "Applies safety constraints before execution can proceed."],
  ["Human Authorization", "Requires explicit human authority where remediation is gated."],
  ["Verification", "Checks whether a controlled recovery actually produced the expected result."],
] as const;
```

Define architecture layers with these labels and descriptions:

```tsx
const architectureLayers = [
  ["Runtime / Configuration", "Runtime and safety configuration."],
  ["Telemetry", "Metrics, logs, traces and generated operational evidence."],
  ["Intelligence", "Detection, prediction, correlation and root-cause analysis."],
  ["Reasoning", "RCA challenge and counterfactual simulation."],
  ["Reliability Decision Layer", "SLO-aware prioritization and remediation planning."],
  ["Safety Control Plane", "SentinelGuard and human authorization."],
  ["Execution", "Controlled local sandbox execution."],
  ["Verification", "Post-action validation and investigation."],
] as const;
```

Define repository paths exactly:

```tsx
const repositoryStructure = [
  ["configs/", "Runtime and safety configuration"],
  ["docs/", "Architecture, evidence, scenarios and guides"],
  ["frontend/", "React/Vite Control Center"],
  ["infra/", "Docker Compose local infrastructure"],
  ["monitoring/", "Prometheus and OpenTelemetry configuration"],
  ["scripts/", "Build, preflight and local API entry points"],
  ["services/", "Seven local demo services"],
  ["src/", "SentinelOps Python implementation"],
  ["tests/", "Contract and phase tests"],
] as const;
```

Use this stack array:

```tsx
const stack = [
  "Python", "FastAPI", "React", "Vite", "PostgreSQL", "Redis", "Kafka",
  "OpenTelemetry", "Prometheus", "Grafana", "Docker", "Polars",
  "Machine Learning", "Distributed Systems", "SRE", "AIOps",
];
```

Use these remaining arrays:

```tsx
const scenarioExamples = [
  "Cautious system operation",
  "RCA uncertainty",
  "SentinelGuard rejection",
  "Pending human authorization",
  "Controlled local recovery",
  "Safe failure",
];

const validationEvidence = [
  "Architecture documentation",
  "Phase index and system overview",
  "Execution lifecycle documentation",
  "Safety-control-plane documentation",
  "Safety invariants and limitations",
  "Validation scope",
  "Benchmark/evidence documentation",
  "Evidence manifest",
  "Deterministic scenarios",
  "Python contract and phase tests",
  "Internal release documentation",
];

const engineeringBoundaries = [
  "SentinelOps is currently a local demonstration system.",
  "It is not connected to production infrastructure.",
  "Production telemetry is not connected.",
  "Production performance is not measured.",
  "Counterfactual outcomes are simulated.",
  "Generated processed data and model binaries may remain local or Git-ignored.",
  "Execution is constrained to a local sandbox.",
  "Rollback is the currently configured execution adapter.",
  "Traffic-shift and restart are planning or allowlist concepts rather than unrestricted production actions.",
  "Kubernetes assets are not currently present.",
  "Helm assets are not currently present.",
];
```

- [ ] **Step 4: Implement the SentinelOps page structure**

Create a default server component with these sections in order:

1. Next.js back link.
2. Hero with category, `Flagship / Active Engineering`, exact description, boundary badge, Live Application, and GitHub actions.
3. Deployment badges for Vercel, Railway, Docker, and GitHub.
4. `<ProjectExperience project={sentinelOpsProject} />`.
5. Problem section with the eight operational questions.
6. Fourteen numbered lifecycle stages.
7. Dominant safety invariant panel plus the seven enforcement statements.
8. Twelve capability cards with simulation/hypothesis wording.
9. Control Center textual UI panel describing 15 views, deterministic `demo`, optional `local-api`, and non-production-console status.
10. Reliability scenarios section describing nine deterministic scenarios and the six supplied behavior examples.
11. Eight architecture layers and seven local demo services statement.
12. `<DeploymentFlow stages={["Portfolio", "Vercel Control Center", "Railway Backend", "SentinelOps reliability services", "Docker-based supporting infrastructure"]} />`.
13. Validation and evidence section stating implementation evidence covers Phases 0–15 without certification language.
14. Current Engineering Boundaries section with every approved limitation.
15. Technology chips and repository structure cards.
16. Final `Explore SentinelOps AI` CTA using deployment and GitHub URLs from `sentinelOpsProject`.

Visually distinguish this page through lifecycle numbering, safety-control emphasis, and verification framing while retaining the shared dark/cyan portfolio system.

- [ ] **Step 5: Verify SentinelOps**

Run: `npm.cmd test`

Expected: all tests PASS, including boundary and prohibited-claim assertions.

Run: `npm.cmd run lint`

Expected: PASS.

Run: `npm.cmd run build`

Expected: PASS and route output includes `/projects/sentinelops-ai` and `/projects/graphshield-aml`.

### Task 6: Integrated Route and Link Verification

**Files:**
- Modify only files from Tasks 1–5 if verification finds an issue.

**Interfaces:**
- Consumes: the completed homepage, shared components, metadata, and two case-study routes.
- Produces: a verified production build and user-facing completion report.

- [ ] **Step 1: Run the complete automated verification suite**

Run:

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
```

Expected: every command exits with code 0. The Next.js build lists `/`, `/projects/graphshield-aml`, and `/projects/sentinelops-ai`.

- [ ] **Step 2: Start the production server for route checks**

Run: `npm.cmd start`

Use a background or persistent terminal session. Confirm the server reports a local URL, normally `http://localhost:3000`.

- [ ] **Step 3: Check local routes and rendered content**

Request these URLs:

```text
http://localhost:3000/
http://localhost:3000/projects/graphshield-aml
http://localhost:3000/projects/sentinelops-ai
```

Expected: HTTP 200 for all three. Confirm the homepage contains both project titles, both case-study paths, both live-demo URLs, and GraphCite-GCN's existing demo URL.

- [ ] **Step 4: Audit generated source and visible claims**

Confirm:

- GraphShield and SentinelOps homepage cards each show Case Study, Live Demo, and GitHub.
- Projects with no `demo` field omit Live Demo.
- Every detailed deployment card uses centralized metadata and has both external-link attributes.
- Both Experience sections expose live UI, API docs, API root, health, readiness, and GitHub.
- SentinelOps visibly retains the local/synthetic/deterministic boundary and simulation/hypothesis wording.
- No unsupported metrics, external certification, Kubernetes, Helm, or guaranteed-availability claims appear.
- No unrelated homepage section changed.

- [ ] **Step 5: Stop the local server and report completion**

Stop only the server process started in Step 2. Report every changed file, summarize both pages and shared integration, list the exact verification commands and outcomes, and confirm these local routes:

```text
http://localhost:3000/projects/graphshield-aml
http://localhost:3000/projects/sentinelops-ai
```
