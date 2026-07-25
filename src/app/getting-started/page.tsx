import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { crisis } from "@/lib/site";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "How to begin with Ketamine-Assisted Psychotherapy — eligibility, the conditions that need care first, and contraindications. A careful assessment comes first.",
};

const requirements = [
  "Be under the care of a primary care physician who can evaluate your overall health, including heart and respiratory status.",
  "Be under the care of a mental health provider — either your current therapist, or someone you begin working with alongside treatment.",
  "Complete a careful interview and, if needed, a review of your medical and psychiatric history to confirm you're a good candidate.",
];

const treatFirst = [
  "Uncontrolled high blood pressure (hypertension)",
  "Unstable angina, recent heart attack, severe arrhythmia, or uncontrolled heart failure",
  "Untreated or uncontrolled hyperthyroidism",
  "Increased intracranial pressure or certain neurological conditions",
  "Severe liver disease",
  "Active hallucinations or untreated mania",
];

const notEligible = [
  "Primary psychotic or dissociative disorders, including schizophrenia and schizoaffective disorder",
  "A current manic or mixed episode",
  "Active substance use disorder or intoxication, particularly alcohol or sedatives",
  "Pregnancy or breastfeeding, unless specifically cleared by a qualified medical provider",
  "Known allergy or hypersensitivity to ketamine",
  "History of aneurysm, stroke, or intracranial bleeding",
  "Active suicidal intent requiring a higher level of care",
];

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Getting started"
        title="How to begin — and how we keep you safe"
        intro="KAP isn't right for everyone, and the guidelines below exist to protect you. Think of them as care, not gatekeeping. A thorough assessment is always the first step."
      />

      {/* Crisis callout */}
      <Container className="pb-2">
        <Reveal>
          <div className="rounded-2xl border border-clay/30 bg-clay/10 p-6">
            <p className="text-sm text-cream">
              <strong className="text-cream">
                If you&rsquo;re in crisis or thinking about harming yourself
              </strong>
              , please reach out now — call or text{" "}
              <a
                href={crisis.lineHref}
                className="font-medium text-gold underline-offset-4 hover:underline"
              >
                {crisis.line}
              </a>{" "}
              (U.S. Suicide &amp; Crisis Lifeline) or dial 911 for emergencies.
              This website is not a crisis service.
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="text-2xl text-cream">What&rsquo;s required</h2>
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
              <h2 className="text-2xl text-cream">
                Conditions to treat first
              </h2>
              <p className="mt-3 text-sm text-cream-muted">
                Some conditions need to be well-managed before ketamine can be
                used safely. These don&rsquo;t necessarily rule out treatment —
                they may simply require clearance or a modified plan.
              </p>
              <ul className="mt-5 space-y-2">
                {treatFirst.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-sm text-cream-muted"
                  >
                    <span aria-hidden="true" className="mt-1 text-sage">
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
            <h2 className="text-2xl text-cream">
              When KAP may not be appropriate
            </h2>
            <p className="mt-3 text-sm text-cream-muted">
              For safety, ketamine is generally not offered in the following
              situations. A comprehensive medical and psychiatric assessment
              determines what&rsquo;s right for each individual.
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
            <p className="mt-5 text-xs text-cream-dim">
              This is not a complete list. Certain medications — such as
              lamotrigine or benzodiazepines — may affect treatment, and all
              contraindications are reviewed individually with your prescribing
              clinician.
            </p>
          </Card>
        </Reveal>

        <Reveal className="mt-10">
          <Prose>
            <h2>Ready to take the first step?</h2>
            <p>
              Beginning is simple: reach out to request a consultation. We&rsquo;ll
              meet, talk through your goals and history, and figure out together
              whether Ketamine-Assisted Psychotherapy is a good fit — with no
              pressure either way.
            </p>
          </Prose>
        </Reveal>
      </Container>

      <ConsultCTA heading="Start with a conversation" />
    </>
  );
}
