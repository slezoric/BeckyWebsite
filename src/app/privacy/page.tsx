import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How A World Within handles the limited information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <Container className="py-6 pb-20">
        <Reveal>
          <Prose className="max-w-3xl">
            <p className="text-sm text-cream-dim">
              {/* TODO(becky): confirm with counsel; add state-specific and
                  HIPAA notice-of-privacy-practices references as needed. */}
              This is a plain-language summary and should be reviewed by legal
              counsel before launch.
            </p>

            <h2>What we collect</h2>
            <p>
              This website collects only the information you choose to submit
              through the consultation request form — your name, email address,
              optional phone number, and message. We ask that you do{" "}
              <strong>not</strong> include sensitive health information in that
              form.
            </p>

            <h2>How we use it</h2>
            <p>
              We use the information you provide solely to respond to your
              inquiry and, if appropriate, to schedule a consultation. We do not
              sell your information or share it with third parties for marketing.
            </p>

            <h2>Form processing</h2>
            <p>
              Form submissions are processed by our hosting provider (Netlify)
              and delivered to us by email. Their handling of submitted data is
              governed by their own privacy practices.
            </p>

            <h2>Health information</h2>
            <p>
              Any protected health information gathered as part of actual
              treatment is handled separately, under the confidentiality
              protections that apply to medical and therapy records — not through
              this website.
            </p>

            <h2>Your choices</h2>
            <p>
              You may request that we delete the information you submitted through
              this site at any time by contacting us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </Prose>
        </Reveal>
      </Container>
    </>
  );
}
