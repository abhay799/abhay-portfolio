import Link from "next/link";
import { DeploymentFlow } from "@/components/DeploymentFlow";
import { ProjectExperience } from "@/components/ProjectExperience";
import { sentinelOpsProject } from "@/data/site";

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

const operationalQuestions = [
  "What changed?",
  "Which signals are related?",
  "What is the likely root cause?",
  "How confident are we?",
  "What happens if we take an action?",
  "Is the action safe?",
  "Can it be rolled back?",
  "Did the remediation actually work?",
];

const safetyRules = [
  "RCA remains a hypothesis until it is reviewed and validated.",
  "Agents cannot independently confirm their own RCA.",
  "Agents cannot bypass SentinelGuard.",
  "Agents cannot bypass human authorization.",
  "Execution is constrained to a local sandbox.",
  "Rollback is the currently configured execution adapter.",
  "Restart and traffic-shift are planning or allowlist concepts, not unrestricted production actions.",
];

const capabilities = [
  [
    "Telemetry Intelligence",
    "Transforms generated metrics, logs and traces into structured reliability signals.",
  ],
  [
    "Failure Detection",
    "Identifies abnormal or failure-related behavior from system evidence.",
  ],
  [
    "Failure Prediction",
    "Uses temporal and engineered signals to estimate elevated failure risk before an incident fully develops. Historical development evidence is not presented as production-calibrated performance.",
  ],
  [
    "Correlation",
    "Connects related operational signals across services and time.",
  ],
  [
    "Root-Cause Analysis",
    "Generates evidence-backed RCA hypotheses from correlated system behavior.",
  ],
  [
    "RCA Challenge",
    "Challenges the initial root-cause hypothesis rather than allowing the first explanation to become automatically accepted truth.",
  ],
  [
    "Counterfactual Simulation",
    "Simulates potential outcomes of candidate remediation decisions. Counterfactual results are simulated, not measured production outcomes.",
  ],
  [
    "SLO-Aware Prioritization",
    "Prioritizes incidents and candidate actions using service reliability objectives and operational impact.",
  ],
  [
    "Remediation Planning",
    "Produces controlled remediation plans with explicit preconditions.",
  ],
  [
    "SentinelGuard",
    "Applies safety constraints before execution can proceed.",
  ],
  [
    "Human Authorization",
    "Requires explicit human authority where remediation is gated.",
  ],
  [
    "Verification",
    "Checks whether a controlled recovery actually produced the expected result.",
  ],
] as const;

const scenarioExamples = [
  "Cautious system operation",
  "RCA uncertainty",
  "SentinelGuard rejection",
  "Pending human authorization",
  "Controlled local recovery",
  "Safe failure",
];

const architectureLayers = [
  ["Runtime / Configuration", "Runtime and safety configuration."],
  [
    "Telemetry",
    "Metrics, logs, traces and generated operational evidence.",
  ],
  [
    "Intelligence",
    "Detection, prediction, correlation and root-cause analysis.",
  ],
  ["Reasoning", "RCA challenge and counterfactual simulation."],
  [
    "Reliability Decision Layer",
    "SLO-aware prioritization and remediation planning.",
  ],
  ["Safety Control Plane", "SentinelGuard and human authorization."],
  ["Execution", "Controlled local sandbox execution."],
  ["Verification", "Post-action validation and investigation."],
] as const;

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

const stack = [
  "Python",
  "FastAPI",
  "React",
  "Vite",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "OpenTelemetry",
  "Prometheus",
  "Grafana",
  "Docker",
  "Polars",
  "Machine Learning",
  "Distributed Systems",
  "SRE",
  "AIOps",
];

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

const deploymentBadges = [
  ["Frontend", "Vercel"],
  ["Backend", "Railway"],
  ["Containerization", "Docker"],
  ["Source", "GitHub"],
] as const;

const externalLinkClass =
  "inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70";

export default function SentinelOpsCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative isolate border-b border-white/8">
        <div className="hero-grid absolute inset-0 -z-20 opacity-40" />
        <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-400/[0.065] blur-[120px]" />

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
                Reliability Intelligence &amp; Failure Prevention
              </p>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-100">
                Flagship / Active Engineering
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              SentinelOps AI
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              A reliability engineering platform that moves from telemetry and
              failure signals to prediction, correlation, root-cause
              hypotheses, safety-gated remediation planning and verified local
              recovery.
            </p>

            <div className="mt-7 inline-flex rounded-full border border-amber-300/25 bg-amber-300/[0.07] px-4 py-2 text-xs font-semibold tracking-[0.08em] text-amber-100">
              Local / Synthetic / Deterministic Demo
            </div>
            <p className="mt-4 max-w-3xl text-xs font-semibold uppercase leading-6 tracking-[0.16em] text-zinc-400">
              LOCAL · SYNTHETIC · DETERMINISTIC · NOT CONNECTED TO PRODUCTION
              INFRASTRUCTURE
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {sentinelOpsProject.demo && (
                <a
                  href={sentinelOpsProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Open Live Application ↗
                </a>
              )}
              <a
                href={sentinelOpsProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                View GitHub ↗
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {deploymentBadges.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                >
                  <p className="text-xs text-zinc-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectExperience project={sentinelOpsProject} />

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              The reliability problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Operational failures are rarely explained by a single metric.
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              Distributed systems generate logs, metrics, traces, alerts and
              dependency signals across many services. The hard problem is not
              merely detecting that something is wrong.
            </p>
          </div>
          <div>
            <p className="text-base leading-8 text-zinc-400">
              A useful reliability system must help investigators move through
              the full decision lifecycle:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {operationalQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-zinc-200"
                >
                  {question}
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-zinc-400">
              SentinelOps is designed around this complete reliability
              lifecycle rather than a single anomaly detector.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Reliability lifecycle
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Telemetry → intelligence → diagnosis → safety → controlled action →
            verification
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((stage, index) => (
              <article
                key={stage}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.14em] text-zinc-600">
                    {index < 4
                      ? "Signals"
                      : index < 8
                        ? "Reasoning"
                        : index < 12
                          ? "Control"
                          : "Assurance"}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-medium text-white">{stage}</h3>
                {index < lifecycle.length - 1 && (
                  <span aria-hidden="true" className="mt-4 block text-cyan-300/60">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-cyan-300/[0.055]">
            <div className="border-b border-cyan-300/15 p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                NO REMEDIATION WITHOUT
              </p>
              <h2 className="mt-6 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
                EVIDENCE + CONFIDENCE + SAFETY + AUTHORIZATION + ROLLBACK +
                VERIFICATION
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300">
                Safety is part of the architecture: decisions move through
                explicit controls before any constrained action can proceed.
              </p>
            </div>
            <div className="grid gap-px bg-white/8 md:grid-cols-2 lg:grid-cols-3">
              {safetyRules.map((rule) => (
                <div key={rule} className="bg-[#090c11] p-5 text-sm leading-6 text-zinc-300">
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Core intelligence &amp; control
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Evidence-backed reasoning with guarded execution.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(([title, description]) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Control Center
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                A local demonstration interface for reliability investigation.
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-400">
                The React/Vite Control Center organizes system evidence and
                lifecycle state without presenting itself as a live production
                operations console.
              </p>
            </div>
            <div className="grid gap-px bg-white/8 sm:grid-cols-2">
              {[
                ["15", "reliability/SRE views"],
                ["demo", "deterministic provider boundary"],
                ["local-api", "optional API fallback"],
                ["Local", "demonstration UI"],
              ].map(([value, label]) => (
                <div key={label} className="bg-[#090c11] p-6 sm:p-7">
                  <p className="text-2xl font-semibold text-cyan-100">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Reproducible demonstrations
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Reliability scenarios
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
            The repository contains nine deterministic scenarios designed for
            reproducibility and traceability across representative control and
            failure states.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {scenarioExamples.map((scenario) => (
              <div
                key={scenario}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-medium text-zinc-200"
              >
                {scenario}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            System architecture
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            An end-to-end reliability architecture, not a collection of isolated
            AI features.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {architectureLayers.map(([title, description], index) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-semibold text-cyan-300">
                  Layer {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-400">
            The repository includes seven local demo services supporting the
            broader lifecycle.
          </p>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Deployment flow</h3>
            <div className="mt-6">
              <DeploymentFlow
                stages={[
                  "Portfolio",
                  "Vercel Control Center",
                  "Railway Backend",
                  "SentinelOps reliability services",
                  "Docker-based supporting infrastructure",
                ]}
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-500">
              Vercel and Railway are the public access paths. Docker supports
              reproducible packaging and local infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Validation &amp; evidence
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Evidence-oriented engineering across Phases 0–15.
              </h2>
              <p className="mt-5 text-base leading-7 text-zinc-400">
                These materials document implementation and development
                validation. They are not external certification, production
                validation, or independently measured production benchmarks.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {validationEvidence.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-amber-300/20 bg-amber-300/[0.035] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Scope transparency
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Current Engineering Boundaries
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400">
              These boundaries define what the current system demonstrates and
              keep its maturity claims inspectable.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {engineeringBoundaries.map((boundary) => (
                <div
                  key={boundary}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-zinc-300"
                >
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-200" />
                  {boundary}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Technology stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Reliability engineering across software, telemetry and systems.
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Repository structure
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Organized around runtime responsibilities.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {repositoryStructure.map(([path, description]) => (
                <div
                  key={path}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <code className="text-sm font-semibold text-cyan-200">{path}</code>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.08] to-transparent p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Reliability intelligence
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Explore SentinelOps AI
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Review the implementation, reliability lifecycle, safety controls
              and validation evidence in the repository.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {sentinelOpsProject.demo && (
                <a
                  href={sentinelOpsProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Open Live Application ↗
                </a>
              )}
              <a
                href={sentinelOpsProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                View GitHub ↗
              </a>
              <Link
                href="/#projects"
                className={externalLinkClass}
              >
                Back to projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

