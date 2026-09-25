import Link from "next/link";
import { DeploymentFlow } from "@/components/DeploymentFlow";
import { ProjectExperience } from "@/components/ProjectExperience";
import { graphShieldProject } from "@/data/site";

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
  [
    "Graph Investigation",
    "Investigates relationships between accounts, entities, counterparties and transaction paths instead of treating transactions as isolated rows.",
  ],
  [
    "Point-in-Time Features",
    "Builds historical features while preserving temporal correctness and reducing future-information leakage risk.",
  ],
  [
    "Risk Intelligence",
    "Combines machine-learning signals, graph-derived features and investigation context.",
  ],
  [
    "Evidence Search",
    "Provides investigator-oriented retrieval across supporting evidence and case artifacts.",
  ],
  [
    "Policy Intelligence",
    "Retrieves relevant AML/KYC policy and regulatory guidance to support investigator reasoning.",
  ],
  [
    "Explainability",
    "Surfaces graph paths, signals and supporting context behind findings rather than exposing only an unexplained score.",
  ],
] as const;

const validation = [
  "Point-in-time feature construction is used to reduce temporal leakage risk.",
  "Graph paths and evidence artifacts are validated as part of the investigation workflow.",
  "Public demo scenarios are deterministic for reproducible demonstrations.",
  "Models are treated as decision-support components rather than unquestioned ground truth.",
];

const governance = [
  "No autonomous account blocking.",
  "No irreversible enforcement decisions.",
  "Human investigator remains responsible for the final decision.",
  "Public demo uses synthetic or public benchmark data.",
  "Explainability, evidence and policy context are surfaced to support inspection and review.",
];

const stack = [
  "Python",
  "FastAPI",
  "Polars",
  "DuckDB",
  "PyArrow",
  "pandas",
  "scikit-learn",
  "LightGBM",
  "CatBoost",
  "FAISS",
  "LangChain",
  "Docker",
];

const deploymentBadges = [
  ["Frontend", "Vercel"],
  ["Backend", "Railway"],
  ["Containerization", "Docker"],
  ["Source", "GitHub"],
] as const;

const externalLinkClass =
  "inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70";

export default function GraphShieldCaseStudy() {
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
                {graphShieldProject.eyebrow}
              </p>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1 text-xs font-medium text-cyan-100">
                Flagship Project
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
              GraphShield AML
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              A graph-native anti-money-laundering intelligence platform
              designed to help investigators understand suspicious activity
              across transactions, entities, relationships, evidence and
              regulatory context.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {graphShieldProject.demo && (
                <a
                  href={graphShieldProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Live Analyst UI ↗
                </a>
              )}
              <a
                href={graphShieldProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                GitHub ↗
              </a>
              {graphShieldProject.apiDocs && (
                <a
                  href={graphShieldProject.apiDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  API Docs ↗
                </a>
              )}
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

      <ProjectExperience project={graphShieldProject} />

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Financial crime is rarely visible in a single transaction.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              Transaction-level monitoring can miss suspicious activity that
              becomes visible only through relationships, repeated behavior,
              counterparties, transaction paths and time.
            </p>
            <p>
              GraphShield treats AML investigation as a connected intelligence
              problem, bringing graph structure, temporal features, evidence
              and policy context into one investigator-oriented workflow.
            </p>
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5 text-sm font-medium leading-7 text-cyan-50">
              Human investigators remain authoritative. GraphShield is decision
              support, not autonomous enforcement.
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Investigation workflow
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From raw activity to evidence-backed investigator review.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-medium text-white">{step}</h3>
                {index < workflow.length - 1 && (
                  <span aria-hidden="true" className="mt-4 block text-cyan-300/60">
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
            Core intelligence
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Connected signals, inspectable reasoning.
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Deployment architecture
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A direct path from portfolio to the working system.
          </h2>
          <div className="mt-10">
            <DeploymentFlow
              stages={[
                "Portfolio",
                "Vercel Analyst UI",
                "Railway FastAPI",
                "GraphShield intelligence / models / artifacts",
              ]}
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-zinc-500">
            Docker supports reproducible infrastructure and packaging; Vercel
            and Railway provide the public access paths.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Validation
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Temporal and investigation integrity
            </h2>
            <ul className="mt-6 space-y-4">
              {validation.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.04] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Safety & governance
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              Investigation support with human authority
            </h2>
            <ul className="mt-6 space-y-4">
              {governance.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-300">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
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
            Technology stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built across data, intelligence and delivery.
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
              Flagship project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Explore GraphShield
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              Explore the deployed analyst experience, inspect the source, or
              work directly with the public API contract.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {graphShieldProject.demo && (
                <a
                  href={graphShieldProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                >
                  Open Live Demo ↗
                </a>
              )}
              <a
                href={graphShieldProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={externalLinkClass}
              >
                View Source ↗
              </a>
              {graphShieldProject.apiDocs && (
                <a
                  href={graphShieldProject.apiDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLinkClass}
                >
                  API Documentation ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

