import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATLAS X | Abhay Kumar",
  description:
    "AI governance and mission-control platform for coordinating autonomous agents through policy, risk, authority, provenance and human oversight.",
};

const lifecycle = [
  "Register Agents",
  "Declare Capabilities",
  "Compile Mission",
  "Evaluate Policy",
  "Assess Risk",
  "Check Authority",
  "Resolve Conflicts",
  "Request Human Approval",
  "Execute Governed Action",
  "Record Provenance",
  "Verify Outcome",
  "Monitor Behavior",
];

const pillars = [
  {
    title: "Governance Kernel",
    description:
      "Evaluates proposed agent actions against policy, authority, risk and mission constraints before execution.",
  },
  {
    title: "Mission Control",
    description:
      "Coordinates agents, missions, dependencies, approvals, conflicts and execution state through one control layer.",
  },
  {
    title: "Human Authority",
    description:
      "Preserves explicit human control for sensitive, high-risk, ambiguous or irreversible decisions.",
  },
];

const architectureLayers = [
  {
    title: "Agent Identity",
    items: [
      "Agent registry",
      "Identity",
      "Declared role",
      "Capability boundaries",
    ],
  },
  {
    title: "Mission Layer",
    items: [
      "Mission compiler",
      "Mission graph",
      "Task dependencies",
      "Agent assignment",
    ],
  },
  {
    title: "Governance",
    items: [
      "Policy engine",
      "Risk engine",
      "Authority engine",
      "Trust context",
    ],
  },
  {
    title: "Decision Control",
    items: [
      "ALLOW",
      "REQUIRE_HUMAN_APPROVAL",
      "BLOCK",
      "Escalation",
    ],
  },
  {
    title: "Coordination",
    items: [
      "Conflict detection",
      "Consensus handling",
      "Agent coordination",
      "Collusion awareness",
    ],
  },
  {
    title: "Safety",
    items: [
      "Emergency brake",
      "Quarantine",
      "Prompt-injection defense",
      "Behavior monitoring",
    ],
  },
  {
    title: "Provenance",
    items: [
      "Decision records",
      "Authority chain",
      "Causal responsibility",
      "Evidence trail",
    ],
  },
  {
    title: "Verification",
    items: [
      "Outcome validation",
      "Mission monitoring",
      "Governance checks",
      "Post-action review",
    ],
  },
];

const safetyAuthorityPoints = [
  "No agent receives unlimited authority.",
  "High-risk actions can require explicit human approval.",
  "Policy and authority checks precede governed execution.",
  "Actions retain provenance and responsibility information.",
  "Emergency-stop paths remain available.",
  "Agents can be quarantined when behavior violates governance constraints.",
  "Unknown or contradictory authorization state should fail closed.",
];

const notList = [
  "Not a replacement for legal or regulatory governance.",
  "Not proof autonomous agents are safe in every environment.",
  "Not an unrestricted autonomous execution framework.",
  "Not a production certification system.",
  "Not a guarantee against malicious or emergent agent behavior.",
  "Not a substitute for organizational accountability.",
];

const techStack = [
  "Python",
  "FastAPI",
  "Pydantic",
  "SQLAlchemy",
  "PostgreSQL",
  "Alembic",
  "Policy Engines",
  "Agent Registries",
  "Mission Graphs",
  "Risk Controls",
  "Audit & Provenance",
  "pytest",
];


export default function AtlasXCaseStudy() {
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
                AI Governance & Mission Control
              </p>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-100">
                Active Engineering Project
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              ATLAS X
            </h1>

            <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-cyan-100 sm:text-2xl">
              AI Governance & Mission Control Platform
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              An AI governance and mission-control platform designed to coordinate autonomous agents while preserving policy compliance, authority boundaries, traceable decisions, risk controls and human oversight.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <p className="text-xs font-semibold text-cyan-300">
                Core principle:
              </p>
              <p className="text-xs font-semibold text-zinc-300">
                No agent receives unlimited authority.
              </p>
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
              Autonomous agents need governed authority.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              As agent autonomy increases, ensuring actions remain within policy,
              authority, and risk boundaries becomes critical. Unchecked agents
              can violate safety, compliance, or ethical constraints.
            </p>

            <p>
              ATLAS X explores how to embed governance into the agent lifecycle,
              providing explicit checks, human oversight, and provenance for every
              decision.
            </p>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5 text-sm font-medium leading-7 text-cyan-50">
              Current engineering boundary: ATLAS X is an active engineering project
              exploring governance architecture, mission control, authority boundaries
              and traceability. It does not imply external certification or
              production autonomy.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Governed lifecycle
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From agent registration to continuous verification.
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
            Governance, coordination and human oversight.
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
            Layered control plane from agent identity to verification.
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
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Safety & authority
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Design principles for safe agent governance.
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400">
            {safetyAuthorityPoints.map((point) => (
              <p key={point}>
                <span
                  aria-hidden="true"
                  className="mr-2 size-1.5 shrink-0 rounded-full bg-cyan-300"
                />
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Decision gateway
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three possible outcomes for every agent action.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                ALLOW
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                action satisfies applicable policy, risk and authority requirements
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                REQUIRE HUMAN APPROVAL
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                action may proceed only after approval from an authorized human
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                BLOCK
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                action violates policy, authority boundary or unacceptable risk constraint
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            What ATLAS X is not
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Clarifying the scope and limits.
          </h2>

          <ul className="mt-6 space-y-4">
            {notList.map((item) => (
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
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Chosen for strong typing, reliability and auditability.
          </h2>

          <div className="mt-8 flex flex-wrap gap-2">
            {techStack.map((technology) => (
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
              Active engineering project
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Explore the ATLAS X governance architecture.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Review the control-plane design, mission lifecycle, authority
              mechanisms, safety boundaries and provenance tracking directly in
              the source. This is a research project—interfaces are not presented
              as measured production deployment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}