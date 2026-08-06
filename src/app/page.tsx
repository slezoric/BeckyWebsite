import { ButtonLink, Card, Container, ConsultCTA } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Image from "next/image";
import content from "@/content/home.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* The path photograph, held back behind a deep wash so the headline
            keeps its contrast. The image sets the mood; it never competes
            with the words. */}
        <Image
          src={content.heroImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-85"
        />
        {/* Wash kept as light as the headline's contrast allows, so the path
            is actually visible rather than a hint behind a curtain. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(36,16,22,0.56),rgba(36,16,22,0.66)_45%,var(--color-base))]"
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

      {/* Ethos — the willow's roots carry the "world within" idea */}
      <section className="relative overflow-hidden border-y border-white/5 bg-base-2/60">
        <Image
          src={content.quoteImage}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-25"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-base-2/75"
        />
        <Container className="py-20">
          <Reveal>
            {/* Strip any quote marks she typed, so we never end up with two
                sets when the template adds its own. */}
            <p className="mx-auto max-w-3xl text-center font-display text-4xl leading-relaxed text-cream sm:text-5xl">
              &ldquo;{content.quote.trim().replace(/^["“”']+|["“”']+$/g, "")}
              &rdquo;
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
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_1.5fr]">
            {/* The painting sits beside the cards rather than behind them, so
                the weight it depicts is felt without obscuring the words. */}
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/5">
                <Image
                  src={content.conditionsImage}
                  alt={content.conditionsImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent"
                />
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {content.conditions.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <Card className="h-full">
                    <h3 className="text-xl text-cream">{c.title}</h3>
                    <p className="mt-3 text-sm text-cream-muted">{c.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
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
                  <span className="font-sans text-xl font-semibold uppercase tracking-[0.2em] text-gold">
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
