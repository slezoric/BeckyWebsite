import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import ContentSections from "@/components/ContentSections";
import Reveal from "@/components/Reveal";
import content from "@/content/how-it-works.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function HowItFlowsPage() {
  return (
    <>
      {/* Centred to sit over the single reading column below it. */}
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        centered
      />

      {/* Long-form reading. With the side cards gone this is a single column,
          so it is centred rather than left-hugging — otherwise the whitespace
          all pools on the right and reads as a gap rather than a margin. */}
      <Container className="py-10">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="mb-12 whitespace-pre-line text-lg text-cream-muted">
              {content.intro.trim()}
            </p>
          </Reveal>
          <ContentSections sections={content.sections} />
        </div>
      </Container>

      {/* What actually happens — formerly its own page */}
      <section id="what-happens" className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="max-w-3xl text-4xl text-cream sm:text-5xl">
              {content.journeyHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              {content.journeyIntro}
            </p>
          </Reveal>
          <ol className="mt-10 space-y-6">
            {content.phases.map((p, i) => (
              <Reveal key={p.number} delay={i * 60} as="li">
                <div className="flex gap-6 rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                  {/* Sans, not the script: roman numerals in a calligraphic
                      face are near-impossible to tell apart at a glance. */}
                  <span className="shrink-0 font-sans text-3xl font-semibold uppercase tracking-widest text-gold sm:text-4xl">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-xl text-cream sm:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-cream-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Practical details */}
      <section className="border-t border-white/5">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-4xl text-cream sm:text-5xl">
              {content.logisticsHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              {content.logisticsIntro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {content.logistics.map((l, i) => (
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
