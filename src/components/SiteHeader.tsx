"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, navExtras, site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Escape closes the menu. Without this, an overlay can only be dismissed by
  // tapping, which strands anyone navigating by keyboard.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-base/85 backdrop-blur-md">
      {/* On phones the logo is centred and the menu button is absolutely
          placed, so the button's width doesn't pull the logo off-centre.
          From sm up the logo sits left with the nav opposite it. */}
      <div className="relative mx-auto flex max-w-content items-center justify-center px-5 py-4 sm:justify-between sm:px-8">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} — ${site.tagline}`}
        >
          {/* Phones: the lockup as supplied, circle above the name. */}
          <Image
            src="/images/logo-cream.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1023}
            height={457}
            priority
            className="h-20 w-auto sm:hidden"
          />
          {/* Wider screens: circle moves beside the name so the header bar
              stays shallow and sits alongside the navigation.

              Height is fixed from sm up. It used to grow at 2xl, but with the
              container capped at 72rem there isn't the room — five links plus
              the button need most of the bar. */}
          <Image
            src="/images/logo-horizontal.png"
            alt=""
            aria-hidden="true"
            width={1244}
            height={213}
            className="hidden h-12 w-auto sm:block xl:h-14"
          />
        </Link>

        {/* Desktop nav */}
        {/* min-w-0 lets this shrink rather than push into the logo if the
            labels are ever made longer in the admin panel. */}
        <nav
          className="hidden min-w-0 items-center gap-4 xl:flex"
          aria-label="Primary"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-base transition-colors hover:text-cream ${
                  active ? "text-gold" : "text-cream-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact/"
            className="whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-base font-medium text-base-2 transition-[background-color,transform] duration-150 hover:bg-gold-light active:scale-[0.97]"
          >
            {navExtras.headerButton}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="absolute right-3 inline-flex items-center justify-center rounded-md p-2 text-cream-muted sm:static sm:right-auto xl:hidden"
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

      {/* Mobile nav. Absolutely positioned so it floats over the page instead
          of adding height to the sticky header, which used to shove all the
          content down when the menu opened. A scrim behind it dims the page
          and closes the menu when tapped. */}
      {open && (
        <>
          {/* Scrim: dims the page and closes the menu when tapped outside. */}
          <div
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 bg-base/70 xl:hidden"
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-100%)] overflow-y-auto border-b border-white/5 bg-base-2 px-5 py-4 shadow-2xl shadow-black/50 xl:hidden"
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
                  className="block rounded-full bg-gold px-5 py-3.5 text-center font-medium text-base-2 transition-transform duration-150 active:scale-[0.98]"
                >
                  {navExtras.headerButton}
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
