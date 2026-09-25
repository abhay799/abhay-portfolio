import type { Project } from "@/data/site";
import { getExperienceLinks } from "@/lib/project-links";

export function ProjectExperience({ project }: { project: Project }) {
  const links = getExperienceLinks(project);

  return (
    <section
      aria-labelledby="experience-title"
      className="border-t border-white/8 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Deployed system
          </p>
          <h2
            id="experience-title"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Experience the Project
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Move directly from the case study into the working interface,
            backend contract, service status, or source. Public services may
            occasionally restart or wake from an idle state.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <article
              key={link.key}
              className={`flex min-h-56 flex-col rounded-3xl border p-6 ${
                link.primary
                  ? "border-cyan-300/25 bg-cyan-300/[0.07]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{link.title}</h3>
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]"
                />
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">
                {link.description}
              </p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-fit rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                  link.primary
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/12 bg-white/[0.04] text-cyan-100 hover:bg-white/[0.08]"
                }`}
              >
                {link.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

