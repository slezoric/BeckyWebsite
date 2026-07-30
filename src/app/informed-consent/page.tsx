import type { Metadata } from "next";
import { Card, Container, PageHeader } from "@/components/ui";
import ContentSections from "@/components/ContentSections";
import Reveal from "@/components/Reveal";
import legal from "@/content/legal.json";

const content = legal.informedConsent;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function InformedConsentPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-6 pb-4">
        <Reveal>
          <Card className="border-gold/20 bg-gold/5">
            <p className="text-sm text-cream-muted">{content.callout}</p>
          </Card>
        </Reveal>
      </Container>

      <Container className="py-6 pb-20">
        <Reveal>
          <ContentSections sections={content.sections} className="max-w-3xl" />
          <p className="mt-8 max-w-3xl text-sm text-cream-dim">
            {content.reviewNote}
          </p>
        </Reveal>
      </Container>
    </>
  );
}
