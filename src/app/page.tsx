import { ButtonLink, Card, Container, ConsultCTA } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const conditions = [
  {
    title: "Heaviness that won't lift",
    body: "When sadness has settled in and stayed — even after you've tried the things that were supposed to help.",
  },
  {
    title: "A mind that won't rest",
    body: "Worry running quietly behind everything, and the tiredness that comes from always bracing for what's next.",
  },
  {
    title: "What the past still holds",
    body: "Old hurt that lives in the body and shapes today, long after you thought you had moved on.",
  },
  {
    title: "A longing for something more",
    body: "For those who aren't in crisis, but sense there is more depth and aliveness available to them.",
  },
];

const steps = [
  {
    n: "01",
    title: "Finding your footing",
    body: "We meet, take our time, and get to know one another. You'll learn what to expect and ask anything you like. Nothing moves forward until you feel genuinely ready.",
  },
  {
    n: "02",
    title: "The journey inward",
    body: "You settle somewhere soft and quiet, with music and a blanket if you'd like. The medicine opens a door, and Becky stays with you the whole way through.",
  },
  {
    n: "03",
    title: "Finding your way back",
    body: "Afterward we sit together and make sense of what surfaced — gently turning what you glimpsed into something that lasts in everyday life.",
  },
];

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
              A gentle path inward, walked with Becky
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
              Healing is not linear. You don&rsquo;t have to walk it alone.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg text-cream-muted">
              There is a world within you — quieter and more resilient than the
              pain you have been carrying. This is a warm, unhurried place to go
              looking for it, with someone beside you the whole way.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href="/contact/">Start the conversation</ButtonLink>
              <ButtonLink href="/kap/" variant="ghost">
                How this works
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
              &ldquo;Healing is not linear — it&rsquo;s an unfolding journey that
              requires safety, curiosity, and courage.&rdquo;
            </p>
            <p className="mt-6 text-center text-sm uppercase tracking-widest text-cream-dim">
              Becky
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What people come with */}
      <section>
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-blush">
              You might recognize yourself here
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl text-cream sm:text-5xl">
              Support for the weight you&rsquo;ve been carrying
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conditions.map((c, i) => (
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
              See what this can help with, honestly →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* The journey */}
      <section className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-blush">
              The journey
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl text-cream sm:text-5xl">
              You&rsquo;ll know every step before you take it
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div>
                  <span className="font-display text-5xl text-gold">{s.n}</span>
                  <h3 className="mt-3 text-xl text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ButtonLink href="/process/" variant="ghost">
              Walk through the whole journey
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ConsultCTA />
    </>
  );
}
