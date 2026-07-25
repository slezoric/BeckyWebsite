import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Process",
  description:
    "The KAP journey step by step — consultation, preparation, the supported session, and integration — plus the practical details you'll want to know.",
};

const phases = [
  {
    n: "01",
    title: "Consultation & assessment",
    body: "We start with an initial meeting to go over basic information and assess together whether KAP is a viable, safe option for you. If we move forward, we'll refer you to a qualified prescriber for medical evaluation — coordinating with your existing care team when helpful.",
  },
  {
    n: "02",
    title: "Preparation",
    body: "Preparation includes education about the medicine and the experiences it can bring, along with a shared understanding of how support is provided, boundaries, and expectations. Nothing moves forward until you feel ready.",
  },
  {
    n: "03",
    title: "The medicine session",
    body: "Ketamine is given as a sublingual tablet or nasal spray. You rest in a supported space — often with an eye mask and music — while a highly-trained therapist stays with you. Your vitals are monitored throughout for safety.",
  },
  {
    n: "04",
    title: "Integration",
    body: "In the days and weeks that follow, we work together to make sense of what surfaced — including anything that felt challenging — and translate insight into lasting changes in mind, mood, and behavior.",
  },
];

const logistics = [
  {
    title: "Before your session",
    body: "Avoid eating or drinking for 4 hours prior to reduce the chance of nausea.",
  },
  {
    title: "Getting home",
    body: "Arrange for a responsible person to drive you home. You won't drive or do anything hazardous for the rest of the day.",
  },
  {
    title: "During the session",
    body: "It's best to rest still with your eyes closed or an eye mask. We provide a calm, private setting and stay with you the whole time.",
  },
  {
    title: "Monitoring",
    body: "Under your prescriber's direction, we monitor blood pressure and oxygen before, during, and after your experience.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The process"
        title="A structured, supported journey"
        intro="Change is best facilitated within a safe, caring container — preparation, guidance, and integration. Here's what to expect at each stage."
      />

      {/* Phases */}
      <Container className="py-10">
        <ol className="space-y-6">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 60} as="li">
              <div className="flex gap-6 rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                <span className="font-serif text-4xl text-gold sm:text-5xl">
                  {p.n}
                </span>
                <div>
                  <h2 className="text-xl text-cream sm:text-2xl">{p.title}</h2>
                  <p className="mt-3 text-cream-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>

      {/* Logistics */}
      <section className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-3xl text-cream sm:text-4xl">
              Practical things to know
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              A few details that help each session go smoothly and safely.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {logistics.map((l, i) => (
              <Reveal key={l.title} delay={i * 70}>
                <Card className="h-full">
                  <h3 className="text-lg text-cream">{l.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{l.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultCTA />
    </>
  );
}
