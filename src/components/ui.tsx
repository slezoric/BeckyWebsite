import Link from "next/link";
import Reveal from "@/components/Reveal";

/** Centered max-width wrapper with consistent horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-content px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Gold pill link — the primary action across the site. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-gold text-base-2 hover:bg-gold-light"
      : "border border-blush/40 text-cream hover:border-blush hover:bg-surface/50";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3 text-center font-medium transition-[background-color,transform] duration-150 active:scale-[0.97] ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/** Interior-page header: eyebrow, title, optional intro paragraph. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <Container className="pb-4 pt-12 sm:pt-16">
      <Reveal>
        {eyebrow && (
          <p className="text-sm uppercase tracking-widest text-blush">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-5xl text-cream sm:text-6xl">
          {title}
        </h1>
        {intro && (
          // whitespace-pre-line honours line breaks typed in the editor.
          // Without it, HTML collapses them and separate lines run together.
          <p className="mt-6 max-w-2xl whitespace-pre-line text-lg text-cream-muted">
            {intro.trim()}
          </p>
        )}
      </Reveal>
    </Container>
  );
}

/** Soft warm card used for grouped content. */
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Long-form readable text block for education/legal pages.
 *
 * Paragraphs are held to about 68 characters a line. Long lines are the main
 * thing that makes body text tiring — the eye loses its place returning to the
 * start of the next one. The container can stay wide; only the prose narrows.
 *
 * Deliberately NOT justified. Browsers justify by stretching word spaces with
 * no hyphenation, which opens "rivers" of white space and makes it harder to
 * track along a line — worst for exactly the readers this site is built for.
 */
export function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-5 text-cream-muted [&_a]:text-gold [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-12 [&_h2]:text-4xl [&_h2]:text-cream [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-cream [&_li]:pl-1 [&_p]:max-w-152 [&_strong]:text-cream [&_ul]:list-disc [&_ul]:max-w-152 [&_ul]:space-y-2 [&_ul]:pl-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** Reusable consultation call-to-action band for the bottom of pages. */
export function ConsultCTA({
  heading = "Ready to take a first step?",
  body = "Reach out and we'll simply talk — about what brought you here, what you're hoping for, and whether this feels like your path. No pressure, and no commitment in asking.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <Container className="py-20">
      <Reveal className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-2 to-surface px-6 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-4xl text-cream sm:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream-muted">{body}</p>
        <div className="mt-8">
          <ButtonLink href="/contact/">Start the conversation</ButtonLink>
        </div>
      </Reveal>
    </Container>
  );
}
