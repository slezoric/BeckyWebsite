import type { Metadata } from "next";
import { ButtonLink, Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Becky",
  description:
    "Becky is a Ketamine-Assisted Psychotherapist who blends clinical expertise with a compassionate, human-centered approach — weaving somatic awareness, mindfulness, and trauma-informed care.",
};

const modalities = [
  {
    title: "Somatic awareness",
    body: "Listening to the body as part of the healing process — where so much of what we carry is held.",
  },
  {
    title: "Mindfulness",
    body: "Meeting each moment with curiosity and openness, softening rigid patterns of mind and mood.",
  },
  {
    title: "Trauma-informed care",
    body: "Grounded in safety and choice, honoring the unique story and strengths each person brings.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet Becky"
        intro="A Ketamine-Assisted Psychotherapist who blends clinical expertise with a compassionate, human-centered approach to care."
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Portrait placeholder */}
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-2 to-forest/30">
              {/* TODO(becky): replace with a professional portrait photograph. */}
              <div className="flex h-full items-center justify-center text-center text-sm text-cream-dim">
                Portrait of Becky
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-lg text-cream-muted">
              <p>
                With a deep respect for the mind&rsquo;s capacity to heal and
                transform, Becky draws from evidence-based practices and an
                integrative therapeutic style to help clients navigate
                depression, anxiety, trauma, and many of life&rsquo;s challenges
                with renewed breath.
              </p>
              <p>
                At the heart of her work is the belief that healing is not
                linear — it&rsquo;s an unfolding journey that requires safety,
                curiosity, and courage. Ketamine-Assisted Psychotherapy is
                offered as a powerful tool to help clients access deeper layers
                of insight, soften rigid patterns, and reconnect with their
                inner resilience.
              </p>
              <p>
                Through thoughtfully guided preparation, intentionally supported
                inner-work sessions, and integration, Becky helps participants
                turn breakthrough experiences into lasting change. Known for
                creating a warm, grounded, and non-judgmental space, she meets
                each individual exactly where they are.
              </p>
              <p>
                Whether someone is seeking relief from longstanding emotional
                pain or exploring personal growth on a deeper level, Becky is
                dedicated to walking alongside them.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Modalities */}
      <section className="border-y border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-3xl text-cream sm:text-4xl">
              An integrative approach
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              Becky&rsquo;s work weaves together several threads of care, chosen
              to fit each person&rsquo;s needs.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {modalities.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="text-xl text-cream">{m.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{m.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials placeholder */}
      <Container className="py-16">
        <Reveal>
          <Card>
            <h2 className="text-2xl text-cream">Credentials &amp; licensure</h2>
            <p className="mt-3 text-cream-muted">
              {/* TODO(becky): confirm license type, number, state(s), and any
                  certifications (e.g. KAP training) before launch. */}
              Licensure, certifications, and training details to be confirmed.
            </p>
            <div className="mt-6">
              <ButtonLink href="/process/" variant="ghost">
                How Becky works
              </ButtonLink>
            </div>
          </Card>
        </Reveal>
      </Container>

      <ConsultCTA heading="Let's begin the conversation" />
    </>
  );
}
