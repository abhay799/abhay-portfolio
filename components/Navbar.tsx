"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#07090d]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl border border-cyan-300/25 bg-cyan-300/8 text-sm font-semibold text-cyan-200 transition group-hover:bg-cyan-300/12">
            AK
          </span>
          <span className="hidden text-sm font-medium text-white sm:block">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resume}
            className="rounded-full border border-white/12 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-xl border border-white/10 text-zinc-200 md:hidden"
        >
          <span className="text-xl">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/8 bg-[#07090d] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-zinc-300"
              >
                {link.label}
              </a>
            ))}
            <a href={siteConfig.resume} className="text-sm font-medium text-cyan-200">
              Resume ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
