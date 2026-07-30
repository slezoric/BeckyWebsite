import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/ui";
import ContentSections from "@/components/ContentSections";
import Reveal from "@/components/Reveal";
import legal from "@/content/legal.json";

const content = legal.disclaimer;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader eyebrow={content.eyebrow} title={content.heading} />
      <Container className="py-6 pb-20">
        <Reveal>
          <p className="mb-8 max-w-3xl text-sm text-cream-dim">
            {content.reviewNote}
          </p>
          <ContentSections sections={content.sections} className="max-w-3xl" />
        </Reveal>
      </Container>
    </>
  );
}
