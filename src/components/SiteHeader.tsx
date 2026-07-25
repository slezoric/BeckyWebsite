"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — ${site.tagline}`}
        >
          <span className="font-serif text-2xl tracking-tight text-cream">
            {site.name}
          </span>
          <span className="mt-1 text-[0.7rem] font-sans uppercase tracking-[0.22em] text-sage">
            {site.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-cream ${
                  active ? "text-gold" : "text-cream-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact/"
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-base-2 transition-colors hover:bg-gold-light"
          >
            Request a Consultation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-cream-muted lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-white/5 bg-base-2 px-5 py-4 lg:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-cream-muted hover:bg-surface hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-gold px-5 py-3 text-center font-medium text-base-2"
              >
                Request a Consultation
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
