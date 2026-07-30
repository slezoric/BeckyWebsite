import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import content from "@/content/journey.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      {/* Phases */}
      <Container className="py-10">
        <ol className="space-y-6">
          {content.phases.map((p, i) => (
            <Reveal key={p.number} delay={i * 60} as="li">
              <div className="flex gap-6 rounded-2xl border border-white/5 bg-surface/40 p-6 sm:p-8">
                <span className="font-display text-5xl text-gold sm:text-6xl">
                  {p.number}
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
