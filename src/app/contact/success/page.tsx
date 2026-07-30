import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";
import Reveal from "@/components/Reveal";
import content from "@/content/contact.json";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your consultation request has been received.",
  robots: { index: false, follow: false },
};

export default function ContactSuccessPage() {
  return (
    <Container className="py-28 text-center">
      <Reveal>
        <p className="text-sm uppercase tracking-widest text-blush">
          {content.successEyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-5xl text-cream sm:text-6xl">
          {content.successHeading}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream-muted">
          {content.successBody}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">{content.successPrimaryButton}</ButtonLink>
          <ButtonLink href="/kap/" variant="ghost">
            {content.successSecondaryButton}
          </ButtonLink>
        </div>
        <p className="mx-auto mt-10 max-w-md text-sm text-cream-muted">
          {content.successCrisisNote}
        </p>
      </Reveal>
    </Container>
  );
}
