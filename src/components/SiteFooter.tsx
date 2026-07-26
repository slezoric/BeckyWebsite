import Link from "next/link";
import Image from "next/image";
import { crisis, nav, site, socialLinks } from "@/lib/site";

const legal = [
  { href: "/getting-started/", label: "Getting Started" },
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
          <p>
            <span className="font-medium text-cream">In crisis?</span>{" "}
            {crisis.note.replace(/^If you are/, "If you're")}{" "}
            <a
              href={crisis.lineHref}
              className="whitespace-nowrap font-medium text-gold underline-offset-4 hover:underline"
            >
              Call or text {crisis.line}
            </a>
            .
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
            A warm, grounded space for healing — meeting you exactly where you
            are.
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
              <Link href="/contact/" className="text-gold hover:text-gold-light">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-content px-5 pb-10 sm:px-8">
        <p className="text-xs leading-relaxed text-cream-dim">
          © {"2025"} {site.legalName}. {site.discipline} with{" "}
          {site.practitioner}. The content on this site is for educational
          purposes only and is not medical advice, diagnosis, or treatment.
          Ketamine is used off-label for mental health conditions; individual
          results vary and are not guaranteed. Always consult a qualified health
          provider.
        </p>
      </div>
    </footer>
  );
}
