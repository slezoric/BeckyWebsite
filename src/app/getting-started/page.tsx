import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { crisis } from "@/lib/site";

export const metadata: Metadata = {
  title: "Is It For Me?",
  description:
    "How to begin, and how Becky keeps you safe — what's needed beforehand, what should be settled first, and when this work isn't the right path.",
};

const requirements = [
  "Have a regular doctor who knows you, so someone is keeping an eye on your general health — particularly your heart and your breathing.",
  "Have a therapist in your life — either someone you already see, or someone you begin seeing as this work starts.",
  "Sit down for an unhurried conversation about your history, so you and Becky can decide together whether this is right for you.",
];

const treatFirst = [
  "Blood pressure that isn't yet well controlled",
  "Heart trouble — chest pain, a recent heart attack, an irregular heartbeat, or heart failure",
  "A thyroid that hasn't settled yet",
  "Raised pressure in the brain, or certain neurological conditions",
  "Serious liver trouble",
  "Seeing or hearing things others don't, or a manic episode that isn't yet being treated",
];

const notEligible = [
  "Schizophrenia, schizoaffective disorder, or psychosis that is currently active",
  "A manic or mixed episode happening right now",
  "Drinking or sedative use that has taken hold, or being under the influence",
  "Pregnancy or breastfeeding, unless a doctor has specifically said it's safe",
  "A known allergy to this medicine",
  "A history of aneurysm, stroke, or bleeding in the brain",
  "Thoughts of ending your life that need more immediate, intensive care than this",
];

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Is this for me?"
        title="This isn't right for everyone — and that's said with care"
        intro="Some of what follows may read like a list of rules. It isn't. Every line exists to keep you safe, and Becky would far rather tell you honestly that this isn't your path than take you somewhere that could harm you."
      />

      {/* Crisis callout */}
      <Container className="pb-2">
        <Reveal>
          <div className="rounded-2xl border border-clay/30 bg-clay/10 p-6">
            <p className="text-sm text-cream">
              <strong className="text-cream">
                If you&rsquo;re in danger of hurting yourself right now
              </strong>
              , please don&rsquo;t wait for an appointment — call or text{" "}
              <a
                href={crisis.lineHref}
                className="font-medium text-gold underline-offset-4 hover:underline"
              >
                {crisis.line}
              </a>{" "}
              to reach someone straight away, or 911 in an emergency. You deserve
              help sooner than a website can offer it.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="text-3xl text-cream">What you&rsquo;ll need</h2>
              <p className="mt-3 text-sm text-cream-muted">
                Not hurdles — just the circle of support that makes this work
                safe and lasting.
              </p>
              <ul className="mt-5 space-y-4">
                {requirements.map((r) => (
                  <li key={r} className="flex gap-3 text-cream-muted">
                    <span aria-hidden="true" className="mt-1 text-gold">
                      ✓
                    </span>
                    <span className="text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full">
              <h2 className="text-3xl text-cream">Things to settle first</h2>
              <p className="mt-3 text-sm text-cream-muted">
                These don&rsquo;t close the door — they just need looking after
                before you begin. Often it&rsquo;s a matter of one conversation
                with your doctor.
              </p>
              <ul className="mt-5 space-y-2">
                {treatFirst.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-cream-muted">
                    <span aria-hidden="true" className="mt-1 text-blush">
                      ·
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <Card className="border-clay/20">
            <h2 className="text-3xl text-cream">
              When this isn&rsquo;t the right path
            </h2>
            <p className="mt-3 text-sm text-cream-muted">
              In these situations this work could genuinely cause harm, so it
              isn&rsquo;t offered. If that&rsquo;s you, it doesn&rsquo;t mean
              nothing can help — it means something else will serve you better,
              and Becky will point you toward it.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {notEligible.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-cream-muted">
                  <span aria-hidden="true" className="mt-1 text-clay">
                    ·
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-cream-muted">
              This isn&rsquo;t a complete list. Some medicines — certain mood
              stabilisers and anxiety medicines among them — can also change how
              this works. Everything is looked at properly, and individually,
              with the doctor overseeing your care.
            </p>
          </Card>
        </Reveal>

        <Reveal className="mt-10">
          <Prose>
            <h2>If you&rsquo;re still reading, that means something</h2>
            <p>
              Beginning is simpler than it looks: you reach out, and you talk.
              You&rsquo;ll say what brought you here and what you&rsquo;re hoping
              for, and together you&rsquo;ll work out whether this is your path.
              There is no pressure either way, and no commitment in asking.
            </p>
          </Prose>
        </Reveal>
      </Container>

      <ConsultCTA heading="Start with a conversation" />
    </>
  );
}
