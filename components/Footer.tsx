import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.</p>
        <p>AI · Data · Systems</p>
      </div>
    </footer>
  );
}
