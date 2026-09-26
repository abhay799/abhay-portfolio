import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, siteConfig, skills } from "@/data/site";
import { isUsableEmail, hasPublicResume } from "@/lib/site-links";

export default function Home() {
  const resumeAvailable = hasPublicResume(siteConfig.resume);
  const contactEmail = isUsableEmail(siteConfig.email) ? siteConfig.email : null;

  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <Navbar resumeAvailable={resumeAvailable} />

      <section className="relative isolate flex min-h-screen items-center pt-24">
        <div className="hero-grid absolute inset-0 -z-20 opacity-60" />
        <div className="absolute left-1/2 top-10 -z-10 h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-cyan-400/[0.065] blur-[120px]" />

        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3.5 py-2 text-xs font-medium text-cyan-100">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
              Building AI, data and distributed systems
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.8rem]">
              Engineering intelligent systems from
              <span className="text-gradient"> data to deployment.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                View projects
              </a>
              <a
                href={siteConfig.github}
                className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.linkedin}
                className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-4">
              {[
                ["AI / ML", "Engineering"],
                ["Graph", "Intelligence"],
                ["Reliability", "Systems"],
                ["Distributed", "AI Infra"],
              ].map(([top, bottom]) => (
                <div key={top} className="bg-[#090c11] px-5 py-5">
                  <p className="text-sm font-medium text-white">{top}</p>
                  <p className="mt-1 text-xs text-zinc-500">{bottom}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/8 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="About" title="I like building beyond the notebook." />

          <div className="space-y-6 text-base leading-8 text-zinc-400">
            <p>
              I work across data science, machine learning and AI engineering,
              with growing depth in backend systems, graph intelligence and
              distributed infrastructure.
            </p>
            <p>
              My projects are built around complete engineering workflows:
              understanding the problem, designing the architecture, building
              the data and intelligence layers, validating behavior, and
              turning the result into something that can actually be used.
            </p>
            <p className="text-zinc-300">
              Current focus: financial intelligence, reliability engineering
              and AI infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="A stack organized around the ML lifecycle."
            description="Tools grouped by where I use them across data, modeling, serving and production systems."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
              >
                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="max-w-full rounded-full border border-white/8 bg-black/20 px-3 py-1.5 text-sm text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects designed as real systems."
              description="Each flagship project will get a dedicated case study covering the problem, architecture, engineering decisions, validation and results."
            />
            <a
              href={siteConfig.github}
              className="text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
            >
              View GitHub ↗
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.055] to-transparent p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Engineering approach
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-5">
              {[
                ["01", "Understand", "Frame the problem and constraints."],
                ["02", "Design", "Choose architecture and interfaces."],
                ["03", "Build", "Implement the core vertical slice."],
                ["04", "Validate", "Test behavior, evidence and failure modes."],
                ["05", "Deploy", "Package the system for real use."],
              ].map(([number, title, description]) => (
                <div key={number} className="border-t border-white/10 pt-5">
                  <p className="text-xs text-zinc-600">{number}</p>
                  <h3 className="mt-4 font-medium text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/8 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">
              Interested in AI, data or engineering work?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I’m interested in opportunities where machine learning, AI and
              strong engineering meet real business or systems problems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
                >
                  Email me
                </a>
              )}
              <a
                href={siteConfig.linkedin}
                className="rounded-full border border-white/12 px-5 py-3 text-sm font-medium text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}