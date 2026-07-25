import type { Metadata } from "next";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Ketamine-Assisted Psychotherapy — safety, side effects, whether it's right for you, dosing, and what to expect afterward.",
};

const faqs = [
  {
    q: "Is ketamine safe?",
    a: "Ketamine has an extensive safety record and has been used at much higher doses for surgical anesthesia for decades. In our practice it's given in low, medically-appropriate doses, your vitals are monitored throughout, and a trained therapist stays with you. As with any medication there are potential side effects, which we review carefully beforehand.",
  },
  {
    q: "What are the common side effects?",
    a: "The most common is a short-term rise in blood pressure or heart rate. Others can include dizziness, nausea, impaired balance or coordination, slurred speech, and temporary confusion. These effects are transient and typically resolve as the medicine wears off, usually within about four hours.",
  },
  {
    q: "How will I know if it's right for me?",
    a: "We begin with a consultation and careful assessment of your medical and psychiatric history. Together we'll decide whether KAP is a safe, appropriate fit — and if it isn't, we'll help point you toward other options. There's no pressure to proceed.",
  },
  {
    q: "How is the ketamine given?",
    a: "In our practice, ketamine is administered as a sublingual (dissolving) tablet or a nasal spray — no injections. This approach allows for psychotherapy during the experience and tends to feel more comfortable for people who are hesitant about needles.",
  },
  {
    q: "How is my dose decided?",
    a: "Dosing is personalized and collaborative. Working with your prescriber, we consider your goals, prior experience, body size, and sensitivity. Those new to ketamine typically begin with lower doses to build familiarity and reduce anxiety.",
  },
  {
    q: "How quickly does it work, and how long does it last?",
    a: "Ketamine is distinguished by its rapid onset — relief can appear within hours. Research indicates a roughly 70% initial response rate. Durable improvement generally requires more than one session and is most robust as part of an overall treatment program. Results vary and are not guaranteed.",
  },
  {
    q: "What happens if I don't respond?",
    a: "If you don't respond after the first session, repeated treatment is offered. If there's no response after a series of eight sessions, additional ketamine won't be offered, as studies show continued dosing is unlikely to help — and we'll discuss other options together at that point.",
  },
  {
    q: "What should I do before and after a session?",
    a: "Avoid eating or drinking for four hours beforehand, and arrange for someone to drive you home. Don't drive or engage in hazardous activities for the rest of the day. In the days that follow, we'll meet for integration to make sense of the experience.",
  },
  {
    q: "Is my information kept private?",
    a: "Yes. Your privacy and all therapy records are kept confidential and maintained with the same precautions as ordinary medical records. Sharing records with anyone else requires your signed release.",
  },
  {
    q: "Do you take insurance? What does it cost?",
    a: "Fees and insurance details will be confirmed during your consultation.",
    todo: true,
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered"
        intro="Honest answers to what people most often ask. If your question isn't here, reach out — we're glad to talk it through."
      />

      <Container className="py-10">
        <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/5 bg-surface/30">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 30} as="div">
              <details className="group px-6 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg text-cream marker:content-['']">
                  <span>{f.q}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-cream-muted">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>

      <ConsultCTA />
    </>
  );
}
