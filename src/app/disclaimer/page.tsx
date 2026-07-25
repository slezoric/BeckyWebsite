import type { Metadata } from "next";
import { Container, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { crisis } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important information about the educational nature of this website, the off-label use of ketamine, and the limits of what's offered here.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Disclaimer" />
      <Container className="py-6 pb-20">
        <Reveal>
          <Prose className="max-w-3xl">
            <h2>Educational information only</h2>
            <p>
              The content on this website is provided for general educational
              purposes only. It is not medical advice, diagnosis, or treatment,
              and it is not a substitute for the guidance of a qualified health
              provider. Never disregard professional medical advice, or delay
              seeking it, because of something you have read here.
            </p>

            <h2>Off-label use</h2>
            <p>
              Ketamine is FDA-approved as an anesthetic. Its use for depression,
              anxiety, PTSD, and other mental health conditions is
              &ldquo;off-label.&rdquo; Off-label prescribing is legal and common
              when supported by sound medical evidence, but it means these uses
              have not been formally approved by the FDA for that purpose.
            </p>

            <h2>No guarantee of outcome</h2>
            <p>
              Ketamine-Assisted Psychotherapy is a relatively new and still
              developing intervention. While research is encouraging, individual
              results vary and no specific outcome is promised or guaranteed.
              Benefits are generally most durable as part of an overall treatment
              program.
            </p>

            <h2>No therapeutic relationship</h2>
            <p>
              Using this website or contacting us through it does not create a
              therapist–client or provider–patient relationship. Any such
              relationship begins only after a formal consultation, assessment,
              and agreement to treatment.
            </p>

            <h2>Not a crisis service</h2>
            <p>
              This website and its contact form are not monitored around the
              clock and are not a crisis or emergency service. {crisis.note}
            </p>

            <p className="text-sm text-cream-dim">
              {/* TODO(becky): have this disclaimer reviewed by your attorney
                  and/or malpractice carrier before launch. */}
              This disclaimer should be reviewed by qualified legal counsel
              before the site goes live.
            </p>
          </Prose>
        </Reveal>
      </Container>
    </>
  );
}
