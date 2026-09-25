import Link from "next/link";
import type { Project } from "@/data/site";
import { getProjectCardActions } from "@/lib/project-links";

export function ProjectCard({ project }: { project: Project }) {
  const actions = getProjectCardActions(project);

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055] sm:p-7">
      <div className="pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-cyan-300/5 blur-3xl transition group-hover:bg-cyan-300/10" />

      <div className="relative">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              {project.eyebrow}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            {project.status}
          </span>
        </div>

        <p className="min-h-24 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
          {actions.map((action) =>
            action.kind === "internal" ? (
              <Link
                key={`${action.label}-${action.href}`}
                href={action.href}
                className="inline-flex items-center text-sm font-medium text-cyan-200 transition hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                {action.label}
              </Link>
            ) : (
              <a
                key={`${action.label}-${action.href}`}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
              >
                {action.label}
              </a>
            ),
          )}
        </div>
      </div>
    </article>
  );
}
