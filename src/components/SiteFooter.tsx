import Link from "next/link";
import Image from "next/image";
import { crisis, music, nav, navExtras, site, socialLinks } from "@/lib/site";
import PhoneText from "@/components/PhoneText";

const legal = [
  { href: "/informed-consent/", label: "Informed Consent" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-base-2">
      {/* Crisis line — always present, never a dead end */}
      <div className="border-b border-white/5 bg-surface/40">
        <div className="mx-auto max-w-content px-5 py-5 text-sm text-cream-muted sm:px-8">
          {/* The note already names the numbers, so they are linked in place
              rather than repeated. A second "Call or text 988" used to be
              appended here, which meant every page said 988 twice. */}
          <p>
            <span className="font-medium text-cream">In crisis?</span>{" "}
            <PhoneText text={crisis.note.replace(/^If you are/, "If you're")} />
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand block: centred on phones, left-aligned once the columns
            sit side by side. */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Image
            src="/images/logo-cream.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1023}
            height={457}
            className="h-28 w-auto sm:h-32"
          />
          <p className="mt-4 max-w-xs text-sm text-cream-muted">
            {navExtras.footerBlurb}
          </p>
          {socialLinks.length > 0 && (
            <ul className="mt-5 flex gap-4 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-muted hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Site">
          <p className="text-xs uppercase tracking-widest text-cream-dim">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-muted hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal and getting started">
          <p className="text-xs uppercase tracking-widest text-cream-dim">
            Practice
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-muted hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact/"
                className="text-gold hover:text-gold-light"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-content px-5 pb-10 sm:px-8">
        {/* Music credit. Royalty-free tracks almost always require visible
            attribution — this is a licence condition, not a courtesy. It
            appears only once a track has actually been added. */}
        {music.file && music.creditLine && (
          <p className="mb-3 text-xs text-cream-dim">
            Music:{" "}
            {music.sourceUrl ? (
              <a
                href={music.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-cream-muted hover:underline"
              >
                {music.creditLine}
              </a>
            ) : (
              music.creditLine
            )}
          </p>
        )}
        <p className="text-xs leading-relaxed text-cream-dim">
          © {"2025"} {site.legalName}. {site.discipline} with{" "}
          {site.practitioner}. {navExtras.legalFootnote}
        </p>
        {/* Build credit. Kept quiet and last — this is Becky's site, not a
            shop window — but present and linked. */}
        <p className="mt-3 text-xs text-cream-dim">
          Built by{" "}
          <a
            href="https://lumenworks-llc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-cream-muted hover:underline"
          >
            LumenWorks LLC, NE
          </a>
        </p>
      </div>
    </footer>
  );
}
