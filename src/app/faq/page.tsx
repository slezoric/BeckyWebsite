import type { Metadata } from "next";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import content from "@/content/faq.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-10">
        <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/5 bg-surface/30">
          {content.items.map((f, i) => (
            <Reveal key={f.question} delay={i * 30} as="div">
              <details className="group px-6 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg text-cream marker:content-['']">
                  <span>{f.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-cream-muted">{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>

      <ConsultCTA />
    </>
  );
}
