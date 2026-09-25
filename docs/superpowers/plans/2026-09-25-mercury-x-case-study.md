# MERCURY X Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a technically credible MERCURY X case study presenting the project as an AI Workload Orchestration & Scheduling Engine.

**Architecture:** Extend the centralized project metadata, reuse existing portfolio primitives, and add a dedicated static case-study route. MERCURY X remains GitHub-first with no Live Demo/API/health actions unless verified public deployment metadata exists.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-25-mercury-x-case-study-design.md`

## Global constraints

- Position MERCURY X as **AI Workload Orchestration & Scheduling Engine**.
- Do not claim production-scale distributed infrastructure.
- Do not claim production GPU scheduling unless repository evidence proves it.
- Do not claim physical multi-node live migration unless demonstrated.
- Do not claim Kubernetes/Ray/Slurm integration unless present in the repository.
- Do not create a fake Live Demo.
- Do not add placeholder deployment URLs.
- Preserve GraphShield, SentinelOps and GraphCite behavior.
- Reuse centralized metadata in `data/site.ts`.
- Reuse existing safe project-link handling.
- Maintain dark/cyan portfolio visual system.
- No unnecessary dependencies.
- No broad architectural rewrite.
- Maintain responsive and accessibility standards.
- Existing email/resume behavior must remain unchanged.

## Review focus

Include at least these likely failure modes and map each one to an explicit test/check in the task that owns it:

1. MERCURY X accidentally renders a Live Demo without a verified deployment.
2. Existing GraphShield/SentinelOps/GraphCite actions regress.
3. Long lifecycle/architecture flows overflow on 320px mobile.
4. Case-study copy overstates physical distributed execution or migration.
5. Homepage MERCURY X Case Study/GitHub action order or routing is wrong.

## File structure

Plan around the smallest necessary set of files.

Likely modifications:

```text
data/site.ts
app/projects/mercury-x/page.tsx
lib/project-links.test.ts
```

Potential reusable component changes only if genuinely necessary:

```text
components/DeploymentFlow.tsx
components/SectionHeading.tsx
```

Avoid touching shared components if the existing interfaces already support the page.

Do not create a MERCURY X-specific component unless the page becomes too large to maintain cleanly.

## Task structure

Break the implementation into approximately 5–6 independently testable tasks.

### Task 1 — Centralized MERCURY X metadata and homepage actions

Update MERCURY X in `data/site.ts` to use:

- title: `MERCURY X`
- eyebrow: `AI Workload Orchestration`
- accurate concise description
- existing GitHub URL
- `caseStudy: "/projects/mercury-x"`

Do NOT add:
- `demo`
- `api`
- `apiDocs`
- `health`
- `readiness`

Add or extend tests proving:

- MERCURY X homepage actions are `Case Study` then `GitHub`
- no Live Demo action is produced
- existing GraphShield/SentinelOps/GraphCite behavior remains unchanged

Use TDD:
1. failing test
2. run and observe failure
3. minimal implementation
4. passing test
5. commit

---

### Task 2 — MERCURY X route foundation and page metadata

Create:

`app/projects/mercury-x/page.tsx`

Add:

```ts
export const metadata: Metadata = {
  title: "MERCURY X | Abhay Kumar",
  description:
    "AI workload orchestration and scheduling engine for compiling workloads into hardware-aware, SLO-aware and safety-validated execution plans.",
};
```

Build the page shell using existing case-study patterns.

Required hero content:

- Back to Projects
- eyebrow: Distributed AI Systems
- MERCURY X
- AI Workload Orchestration & Scheduling Engine
- concise research/control-plane description
- GitHub CTA only
- no Live Demo button

Add a route-level verification step.

---

### Task 3 — Core technical narrative

Implement:

- Problem
- execution lifecycle
- three core pillars
- architecture layers

Lifecycle:

```text
Understand
→ Decompose
→ Compile
→ Select Models
→ Select Precision
→ Place Context
→ Map Hardware
→ Schedule
→ Speculate
→ Execute
→ Migrate / Recover
→ Verify
→ Optimize
→ Learn Safely
```

Three pillars:

- Workload Compiler
- Scheduler & Placement Engine
- Safe Execution Control Plane

Architecture layers:

- Workload
- Compilation
- Intelligence
- Resource
- Scheduling
- Execution
- Resilience
- Verification

Require responsive implementation:
- desktop may use grid/horizontal grouping
- mobile must stack vertically
- no horizontal overflow

---

### Task 4 — Scheduling, SLO, migration, safety and evidence

Implement sections for:

- Scheduling & Placement
- Model & Precision Awareness
- SLO-Aware Execution
- Migration & Recovery
- Safety / Fail-Closed Execution
- Verification & Provenance

Use conservative wording.

Include a visible conceptual invariant based on the approved spec:

```text
NO EXECUTION WITHOUT
VALID PLAN
+ VALID CONSTRAINTS
+ RESOURCE COMPATIBILITY
+ SAFETY CHECKS
+ RECOVERY PATH
+ VERIFICATION
```

If repository evidence uses a more precise invariant, use the repository wording instead.

Migration wording must clearly distinguish:

**logical/control-plane migration**

from

**production physical GPU/multi-node migration**

Do not imply the latter has been demonstrated unless repository evidence proves it.

---

### Task 5 — Engineering boundaries, technologies and source evidence

Implement:

- Current Engineering Boundary
- What MERCURY X Is Not
- Technology
- Repository Evidence
- final GitHub CTA

Engineering boundary must communicate:

- CPU-first/local-friendly execution
- control-plane emphasis
- deterministic validation where supported
- distributed/GPU/cloud interfaces as interfaces or future integration when that is the actual state

“What MERCURY X Is Not” should explicitly avoid describing it as:

- Kubernetes replacement
- cloud provider
- hyperscale production AI fabric
- proven multi-datacenter scheduler
- demonstrated production GPU-memory migration platform
- externally certified infrastructure platform

Only list technologies verified in the repository.

Do not infer technologies from the roadmap alone.

---

### Task 6 — Regression, responsive, accessibility and production verification

Run:

```powershell
npm test
npm run lint
npm run build
```

Verify routes:

```text
/
/projects/graphshield-aml
/projects/sentinelops-ai
/projects/mercury-x
```

Verify:

- homepage MERCURY X Case Study works
- MERCURY X GitHub action works
- no Live Demo appears for MERCURY X
- GraphShield card still has correct actions
- SentinelOps card still has correct actions
- GraphCite live demo remains configured
- email remains `abhaykumar38921@gmail.com`
- resume remains hidden
- no placeholder URLs
- no horizontal overflow in lifecycle/architecture structures
- one meaningful H1
- logical headings
- keyboard-visible focus states
- external GitHub link uses secure new-tab attributes

Also run:

```powershell
git diff --check
git status
```

Do not commit until all verification passes.

## Commit strategy

Each meaningful task should preferably get a focused commit.

Possible commit messages:

```text
feat: add Mercury X portfolio metadata
feat: add Mercury X case study foundation
feat: document Mercury X orchestration architecture
feat: add Mercury X safety and execution boundaries
test: verify Mercury X portfolio integration
```

Do not force-push.

## Self-review before presenting the plan

Before reporting completion:

1. Compare every plan task against the approved spec.
2. Check that every major spec section is implemented by a task.
3. Search the plan for placeholders such as:
   - TBD
   - TODO
   - implement later
   - similar to
4. Verify all file paths and property names are consistent.
5. Verify every Review Focus item has a corresponding explicit test/check.
6. Verify no task invents deployment metadata.
7. Verify the plan preserves existing portfolio functionality.

When complete, stop.

Do NOT start implementation yet.

Report:

1. plan path
2. number of tasks
3. files expected to change/create
4. self-review result
5. recommended execution approach

Recommend **Native execution** unless inspection discovers a strong reason to split work, because the tasks share the same project metadata and page structure and are tightly dependent.