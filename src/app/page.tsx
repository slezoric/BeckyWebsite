import { ButtonLink, Card, Container, ConsultCTA } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import content from "@/content/home.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Warm, deep wash (placeholder for a real nature photograph). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_80%_-10%,rgba(90,39,51,0.55),transparent_55%),radial-gradient(90%_80%_at_0%_100%,rgba(156,107,78,0.32),transparent_60%)]"
        />
        <Container className="pb-16 pt-24 text-center sm:pt-32">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-blush">
              {content.heroEyebrow}
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
              {content.heroHeading}
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg text-cream-muted">
              {content.heroIntro}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact/">
                {content.heroPrimaryButton}
              </ButtonLink>
              <ButtonLink href="/kap/" variant="ghost">
                {content.heroSecondaryButton}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ethos */}
      <section className="border-y border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-display text-4xl leading-relaxed text-cream sm:text-5xl">
              &ldquo;{content.quote}&rdquo;
            </p>
            <p className="mt-6 text-center text-sm uppercase tracking-widest text-cream-dim">
              {content.quoteAttribution}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What people come with */}
      <section>
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-blush">
              {content.conditionsEyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl text-cream sm:text-5xl">
              {content.conditionsHeading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.conditions.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="text-xl text-cream">{c.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{c.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link
              href="/what-we-treat/"
              className="text-sm text-gold underline-offset-4 hover:underline"
            >
              {content.conditionsLink}
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* The journey */}
      <section className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-blush">
              {content.journeyEyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl text-cream sm:text-5xl">
              {content.journeyHeading}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {content.steps.map((s, i) => (
              <Reveal key={s.number} delay={i * 100}>
                <div>
                  <span className="font-display text-5xl text-gold">
                    {s.number}
                  </span>
                  <h3 className="mt-3 text-xl text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ButtonLink href="/kap/#what-happens" variant="ghost">
              {content.journeyButton}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ConsultCTA />
    </>
  );
}
