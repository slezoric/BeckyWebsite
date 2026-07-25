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
      : "border border-sage/40 text-cream hover:border-sage hover:bg-surface/50";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3 font-medium transition-colors ${styles} ${className}`}
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
    <Container className="pb-4 pt-20 sm:pt-24">
      <Reveal>
        {eyebrow && (
          <p className="text-sm uppercase tracking-widest text-sage">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-cream-muted">{intro}</p>
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

/** Long-form readable text block for education/legal pages. */
export function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-5 text-cream-muted [&_a]:text-gold [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-cream [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:text-cream [&_li]:pl-1 [&_strong]:text-cream [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 ${className}`}
    >
      {children}
    </div>
  );
}

/** Reusable consultation call-to-action band for the bottom of pages. */
export function ConsultCTA({
  heading = "Ready to take a first step?",
  body = "Reach out for a no-pressure consultation. We'll talk through your goals and whether Ketamine-Assisted Psychotherapy is a good fit for you.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <Container className="py-20">
      <Reveal className="overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-2 to-surface px-6 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl text-cream sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream-muted">{body}</p>
        <div className="mt-8">
          <ButtonLink href="/contact/">Request a Consultation</ButtonLink>
        </div>
      </Reveal>
    </Container>
  );
}
