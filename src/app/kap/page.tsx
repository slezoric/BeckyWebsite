import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import ContentSections from "@/components/ContentSections";
import Reveal from "@/components/Reveal";
import content from "@/content/how-it-works.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function KapPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <ContentSections sections={content.sections} />
          </div>

          {/* Aside: reassurance */}
          <div className="space-y-5">
            <Reveal>
              <Card>
                <h3 className="text-lg text-cream">
                  {content.safetyCardHeading}
                </h3>
                <p className="mt-3 text-sm text-cream-muted">
                  {content.safetyCardBody}
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card>
                <h3 className="text-lg text-cream">
                  {content.factsCardHeading}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-cream-muted">
                  {content.facts.map((f) => (
                    <li key={f}>· {f}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={160}>
              <Card className="border-gold/20 bg-gold/5">
                <p className="text-sm text-cream-muted">{content.honestNote}</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>

      <ConsultCTA />
    </>
  );
}
