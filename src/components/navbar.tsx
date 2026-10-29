"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import SiteLogo from "@/components/site-logo";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 ${
            scrolled ? "border-white/10 bg-ink/95 shadow-card backdrop-blur-md" : "border-white/10 bg-ink/80 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="shrink-0" aria-label="UP Circuit — back to top">
            <SiteLogo className="w-40 sm:w-48" light />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 text-sm font-medium text-fog lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-xl bg-upblue px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-azure sm:inline-flex"
            >
              Partner With Us
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`mt-2 origin-top rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-card backdrop-blur-md transition-all duration-200 lg:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col text-base font-medium text-fog">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-upblue px-4 py-3 text-center font-semibold text-white transition hover:bg-azure"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
