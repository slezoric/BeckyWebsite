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
          <ContentSections sections={content.sections} className="max-w-3xl" />
        </Reveal>
      </Container>
    </>
  );
}
