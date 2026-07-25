import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "What the whole journey looks like — the first conversation, preparing together, the session itself, and the quiet work of making sense of it afterward.",
};

const phases = [
  {
    n: "01",
    title: "A first conversation",
    body: "We start by simply talking. You share what brought you here and what you are hoping for; Becky listens, and together you work out whether this feels right for you. If it does, she'll connect you with a doctor she trusts, who looks after the medical side — and she'll gladly work alongside anyone already caring for you.",
  },
  {
    n: "02",
    title: "Preparing together",
    body: "Before anything else, you get to know each other properly. You'll talk about what the day will be like, what you might meet along the way, and what kind of support helps you feel safest. Every question is welcome, however small. Nothing goes ahead until you are genuinely ready.",
  },
  {
    n: "03",
    title: "The journey inward",
    body: "You settle somewhere soft and quiet — a blanket, an eye mask if you want one, music chosen with care. The medicine dissolves gently in your mouth, or arrives as a small nasal spray. Then you rest and let it carry you. Becky stays beside you the entire time, keeping a quiet, watchful eye on how you are doing.",
  },
  {
    n: "04",
    title: "Finding your way back",
    body: "This is where lasting change is made. In the days and weeks that follow, you and Becky sit with whatever surfaced — the beautiful parts and the hard parts alike — and slowly turn what you glimpsed into something you can actually live.",
  },
];

const logistics = [
  {
    title: "The morning of",
    body: "Have nothing to eat or drink for about four hours beforehand — it simply helps your stomach stay settled. Wear whatever feels most comfortable.",
  },
  {
    title: "Getting home safely",
    body: "Arrange for someone you trust to drive you home, and give yourself the rest of the day off — no driving, no errands, nothing that asks much of you.",
  },
  {
    title: "During your time here",
    body: "It's most comfortable to lie still with your eyes closed or covered. The room is private, quiet, and yours for as long as you need it.",
  },
  {
    title: "Looking after you",
    body: "Becky keeps a gentle eye on how your body is doing throughout, working alongside the doctor overseeing your care.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="The journey"
        title="You'll know every step before you take it"
        intro="Nothing here is rushed, and nothing is a surprise. This is what the whole path looks like — from the first conversation to the quiet, unhurried work that comes after."
      />

      {/* Phases */}
      <Container className="py-10">
        <ol className="space-y-6">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 60} as="li">
              <div className="flex gap-6 rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                <span className="font-display text-5xl text-gold sm:text-6xl">
                  {p.n}
                </span>
                <div>
                  <h2 className="text-2xl text-cream sm:text-3xl">{p.title}</h2>
                  <p className="mt-3 text-cream-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>

      {/* Practical things */}
      <section className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-4xl text-cream sm:text-5xl">
              Small things that help the day go gently
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              None of this is complicated — and Becky will walk you through all
              of it well beforehand.
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
