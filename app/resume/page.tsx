import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <section className="border-b border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Resume
            </p>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Abhay Kumar
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              AI/ML Engineer · Data Science · AI Systems Builder
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.07]"
            >
              ← Back to Portfolio
            </Link>

            <a
              href={siteConfig.resume}
              download="Abhay-Kumar-Resume.pdf"
              className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#071014] transition hover:bg-cyan-200"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
          <div className="border-b border-white/8 px-5 py-4">
            <p className="text-sm text-zinc-400">
              Preview the resume below, then download the PDF if needed.
            </p>
          </div>

          <div className="h-[78vh] min-h-[620px] bg-zinc-950">
            <iframe
              src={`${siteConfig.resume}#view=FitH`}
              title="Abhay Kumar Resume"
              className="h-full w-full border-0"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={siteConfig.resume}
            download="Abhay-Kumar-Resume.pdf"
            className="rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.12]"
          >
            Download Resume ↓
          </a>
        </div>
      </section>
    </main>
  );
}