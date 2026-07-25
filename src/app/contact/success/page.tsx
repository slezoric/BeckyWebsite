import type { Metadata } from "next";
import { ButtonLink, Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

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
          Message received
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-5xl text-cream sm:text-6xl">
          Thank you for reaching out
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream-muted">
          Your request has been received. We&rsquo;ll be in touch soon to find a
          time to talk. Taking this step takes courage — we&rsquo;re glad
          you&rsquo;re here.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/kap/" variant="ghost">
            Learn more about KAP
          </ButtonLink>
        </div>
        <p className="mx-auto mt-10 max-w-md text-sm text-cream-muted">
          If you&rsquo;re in crisis, please call or text 988 (U.S. Suicide &amp;
          Crisis Lifeline) or dial 911. This website is not a crisis service.
        </p>
      </Reveal>
    </Container>
  );
}
