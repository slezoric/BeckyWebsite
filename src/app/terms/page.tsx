import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing your use of the A World Within website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <Container className="py-6 pb-20">
        <Reveal>
          <Prose className="max-w-3xl">
            <p className="text-sm text-cream-dim">
              {/* TODO(becky): review with counsel before launch. */}
              Plain-language summary — to be reviewed by legal counsel.
            </p>

            <h2>Acceptance</h2>
            <p>
              By using this website, you agree to these terms. If you do not
              agree, please do not use the site.
            </p>

            <h2>Informational purpose</h2>
            <p>
              The site is provided for general information about
              Ketamine-Assisted Psychotherapy. It does not provide medical advice
              and does not create a provider–patient relationship. Please see our{" "}
              <a href="/disclaimer/">Disclaimer</a> for details.
            </p>

            <h2>No warranties</h2>
            <p>
              The site is provided &ldquo;as is,&rdquo; without warranties of any
              kind. We do not guarantee that the site will be error-free or
              continuously available, or that the information is complete or
              current.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any
              damages arising from your use of, or inability to use, this
              website.
            </p>

            <h2>External links</h2>
            <p>
              This site may link to third-party resources for your convenience.
              We are not responsible for the content or practices of those sites.
            </p>

            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. Continued use of the
              site after changes constitutes acceptance of the revised terms.
            </p>
          </Prose>
        </Reveal>
      </Container>
    </>
  );
}
