import { ButtonLink, Card, Container, ConsultCTA } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const conditions = [
  {
    title: "Depression",
    body: "Including treatment-resistant depression, where ketamine has the strongest research support.",
  },
  {
    title: "Anxiety",
    body: "Generalized and social anxiety that hasn't fully eased with conventional care.",
  },
  {
    title: "Trauma & PTSD",
    body: "Trauma-informed work that pairs the medicine with careful psychotherapy.",
  },
  {
    title: "Deeper growth",
    body: "For those seeking insight, perspective, and reconnection beyond symptom relief.",
  },
];

const steps = [
  {
    n: "01",
    title: "Preparation",
    body: "We meet, build trust, and talk through the medicine, your goals, safety, and what to expect. Nothing happens before you feel ready.",
  },
  {
    n: "02",
    title: "The Session",
    body: "Ketamine is given as a sublingual tablet or nasal spray while you rest in a supported, guided space — a highly-trained therapist with you throughout.",
  },
  {
    n: "03",
    title: "Integration",
    body: "Together we make sense of the experience and turn insight into lasting change in the days and weeks that follow.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Warm, deep botanical wash (placeholder for a real nature photograph). */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_80%_-10%,rgba(58,90,68,0.55),transparent_55%),radial-gradient(90%_80%_at_0%_100%,rgba(156,107,78,0.35),transparent_60%)]"
        />
        <Container className="pb-16 pt-24 sm:pt-32">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-sage">
              Ketamine-Assisted Psychotherapy with Becky
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
              Healing is not linear. You don&rsquo;t have to walk it alone.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-cream-muted">
              A warm, grounded, non-judgmental space to work with depression,
              anxiety, and trauma — meeting you exactly where you are, and
              guiding you every step of the way.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact/">Request a Consultation</ButtonLink>
              <ButtonLink href="/kap/" variant="ghost">
                What is KAP?
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ethos */}
      <section className="border-y border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-serif text-2xl leading-relaxed text-cream sm:text-3xl">
              &ldquo;Healing is not linear — it&rsquo;s an unfolding journey that
              requires safety, curiosity, and courage.&rdquo;
            </p>
            <p className="mt-6 text-center text-sm uppercase tracking-widest text-cream-dim">
              Becky · Ketamine-Assisted Psychotherapist
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Conditions */}
      <section>
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-sage">
              What we work with
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-cream sm:text-4xl">
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
              See all conditions and the evidence behind them →
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-widest text-sage">
              The journey
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl text-cream sm:text-4xl">
              A structured, supported path — not a leap into the unknown
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div>
                  <span className="font-serif text-4xl text-gold">{s.n}</span>
                  <h3 className="mt-3 text-xl text-cream">{s.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <ButtonLink href="/process/" variant="ghost">
              Walk through the full process
            </ButtonLink>
          </Reveal>
        </Container>
      </section>

      <ConsultCTA />
    </>
  );
}
