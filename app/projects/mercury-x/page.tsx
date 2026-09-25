import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MERCURY X | Abhay Kumar",
  description:
    "AI workload orchestration and scheduling engine for compiling workloads into hardware-aware, SLO-aware and safety-validated execution plans.",
};

const githubUrl = "https://github.com/abhay799/mercury-x";

const lifecycle = [
  "Understand",
  "Decompose",
  "Compile",
  "Select Models",
  "Select Precision",
  "Place Context",
  "Map Hardware",
  "Schedule",
  "Speculate",
  "Execute",
  "Migrate / Recover",
  "Verify",
  "Optimize",
  "Learn Safely",
];

const pillars = [
  {
    title: "Workload Compiler",
    description:
      "Transforms workload intent into structured execution plans with dependencies, model requirements, precision requirements, context requirements and execution constraints.",
  },
  {
    title: "Scheduler & Placement Engine",
    description:
      "Reasons over hardware compatibility, workload requirements, SLO constraints, placement choices, resource availability and execution ownership.",
  },
  {
    title: "Safe Execution Control Plane",
    description:
      "Validates execution decisions, preserves provenance, applies fail-closed constraints and coordinates verification, rollback and recovery behavior.",
  },
];

const architectureLayers = [
  {
    title: "Workload",
    items: [
      "Workload definitions",
      "Execution requirements",
      "Constraints",
      "Intent and policy context",
    ],
  },
  {
    title: "Compilation",
    items: [
      "Workload decomposition",
      "Execution graph construction",
      "Dependency analysis",
      "Execution-plan compilation",
    ],
  },
  {
    title: "Intelligence",
    items: [
      "Model selection",
      "Precision selection",
      "Reasoning requirements",
      "Quality constraints",
    ],
  },
  {
    title: "Resource",
    items: [
      "Hardware personality",
      "Topology information",
      "Resource metadata",
      "Compatibility information",
    ],
  },
  {
    title: "Scheduling",
    items: [
      "Placement",
      "SLO-aware planning",
      "Execution ownership",
      "Negotiation",
    ],
  },
  {
    title: "Execution",
    items: [
      "Execution controller",
      "Speculative execution",
      "Context coordination",
      "Runtime state",
    ],
  },
  {
    title: "Resilience",
    items: [
      "Logical migration",
      "Self-healing",
      "Rollback",
      "Failure handling",
    ],
  },
  {
    title: "Verification",
    items: [
      "Provenance",
      "Evidence classification",
      "Validation",
      "Post-execution verification",
    ],
  },
];

const schedulingDimensions = [
  "CPU / accelerator capability",
  "Memory availability",
  "Model compatibility",
  "Precision compatibility",
  "Dependency constraints",
  "Latency and SLO targets",
  "Context locality",
  "Execution ownership",
  "Recovery options",
];

const migrationStages = [
  "Eligibility",
  "Trigger",
  "State capture",
  "Transfer",
  "Restore",
  "Authority handoff",
  "Verification",
  "Rollback / escalation",
];

const safetyPrinciples = [
  "Unknown, incomplete, contradictory or stale evidence fails closed.",
  "Quality, verification, authorization, privacy and residency constraints are not silently weakened.",
  "Execution decisions preserve provenance and explicit evidence.",
  "Migration cutover preserves one authoritative executor.",
  "Counterfactual and simulated outputs remain advisory.",
  "Recovery and rollback paths remain explicit.",
];

const evidence = [
  "Typed and versioned control-plane contracts",
  "Deterministic decision engines",
  "Execution-plan and scheduler artifacts",
  "Provenance and evidence records",
  "Automated regression and certification-oriented tests",
  "Six deterministic Control Center scenarios",
  "Logical migration and self-healing state transitions",
];

const limitations = [
  "Not a Kubernetes replacement",
  "Not a cloud provider",
  "Not a proven hyperscale AI fabric",
  "Not a measured multi-datacenter scheduler",
  "Not a demonstrated production GPU-memory migration platform",
  "Not an externally certified infrastructure product",
  "Not a production SLA-backed inference service",
];

const stack = [
  "Python",
  "FastAPI",
  "Typed Contracts",
  "DAG / Execution Graphs",
  "Scheduling",
  "Resource Registries",
  "SLO Constraints",
  "Telemetry",
  "Provenance",
  "Deterministic Testing",
  "Docker",
];

const externalLinkClass =
  "inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70";

export default function MercuryXCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative isolate border-b border-white/8">
        <div className="hero-grid absolute inset-0 -z-20 opacity-45" />
        <div className="absolute left-1/2 top-0 -z-10 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10">
          <Link
            href="/"
            className="inline-flex text-sm font-medium text-zinc-400 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
          >
            ← Back to portfolio
          </Link>

          <div className="mt-20 max-w-5xl sm:mt-24">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Distributed AI Systems
              </p>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-100">
                Active Research Project
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              MERCURY X
            </h1>

            <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">
              AI Workload Orchestration &amp; Scheduling Engine
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              A research-oriented control plane for compiling AI workloads into
              hardware-aware, SLO-aware and safety-validated execution plans.
              MERCURY X focuses on workload understanding, model and precision
              decisions, placement, scheduling, resilience and verification.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                View GitHub ↗
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Execution", "CPU-first"],
                ["Focus", "Control Plane"],
                ["Validation", "Deterministic"],
                ["Source", "GitHub"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              AI execution is a systems problem, not just a model call.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              Modern AI workloads can depend on model choice, numerical
              precision, hardware compatibility, graph dependencies, memory and
              context placement, latency targets, SLOs, failure handling and
              verification.
            </p>

            <p>
              MERCURY X explores how those concerns can be coordinated through
              one explicit control plane that produces inspectable execution
              plans rather than hiding decisions behind static routing.
            </p>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5 text-sm font-medium leading-7 text-cyan-50">
              Current repository evidence is CPU-first and control-plane
              focused. Interfaces and simulations are not presented as measured
              production infrastructure.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Execution lifecycle
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From workload intent to safe execution and continuous verification.
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-medium text-white">
                  {step}
                </h3>
                {index < lifecycle.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-4 block text-cyan-300/60"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Core pillars
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Compile, schedule and execute with explicit constraints.
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Architecture
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A layered control plane from workload definition to verification.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {architectureLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {layer.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-zinc-400"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Scheduling &amp; placement
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Placement decisions consider more than available compute.
            </h2>

            <div className="mt-6 flex flex-wrap gap-2">
              {schedulingDimensions.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Model &amp; precision awareness
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Execution plans can reason about model and precision choices.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              The control plane represents model capability, precision support,
              quality constraints and hardware compatibility as explicit inputs
              to execution planning. These decisions do not imply guaranteed
              accuracy or performance improvements.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              SLO-aware execution
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Service constraints become scheduling inputs.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Latency targets, workload priority, resource limits, quality
              requirements and recovery expectations can influence planning and
              negotiation. MERCURY X does not claim externally measured
              production SLA compliance.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Migration &amp; recovery
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Migration is modeled as controlled authority transfer.
            </h2>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {migrationStages.map((stage) => (
                <div
                  key={stage}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300"
                >
                  {stage}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-500">
              This is logical/control-plane migration. It must not be interpreted
              as demonstrated live GPU-memory migration across production
              datacenters.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.05] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Fail-closed execution
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              No execution without explicit evidence, constraints and a
              verification path.
            </h2>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-6 font-mono text-sm leading-7 text-cyan-100 sm:text-base">
              NO EXECUTION WITHOUT
              <br />
              VALID PLAN
              <br />
              + VALID CONSTRAINTS
              <br />
              + RESOURCE COMPATIBILITY
              <br />
              + SAFETY CHECKS
              <br />
              + RECOVERY PATH
              <br />
              + VERIFICATION
            </div>

            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {safetyPrinciples.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-zinc-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Verification &amp; provenance
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Decisions are designed to remain inspectable.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {evidence.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Current engineering boundary
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Control-plane depth before infrastructure-scale claims.
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
              <p>
                The current baseline is CPU-first and designed for local,
                deterministic validation of control-plane behavior.
              </p>
              <p>
                Interfaces can represent accelerators, distributed resources,
                federation and cloud execution concerns, but those interfaces
                are not presented as measured production deployment.
              </p>
              <p>
                The Control Center demonstrates deterministic and simulated
                control-plane scenarios rather than live production telemetry.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              What MERCURY X is not
            </p>

            <ul className="mt-6 space-y-4">
              {limitations.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built around explicit systems contracts and deterministic control.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-transparent p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Research engineering project
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Inspect the MERCURY X implementation.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Review the control-plane architecture, scheduling logic,
              deterministic scenarios, safety boundaries, migration state
              transitions and repository evidence directly in the source.
            </p>

            <div className="mt-8">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                View MERCURY X on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}