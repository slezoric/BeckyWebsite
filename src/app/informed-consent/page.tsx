import type { Metadata } from "next";
import { Card, Container, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Informed Consent",
  description:
    "Key information about Ketamine-Assisted Psychotherapy — its benefits, risks, side effects, eligibility, alternatives, and the voluntary nature of participation.",
};

export default function InformedConsentPage() {
  return (
    <>
      <PageHeader
        eyebrow="For your understanding"
        title="Informed Consent & Beyond"
        intro="This summary covers important information about Ketamine-Assisted Psychotherapy and about ketamine itself. Please read it carefully and bring any questions to your consultation."
      />

      <Container className="py-6 pb-4">
        <Reveal>
          <Card className="border-gold/20 bg-gold/5">
            <p className="text-sm text-cream-muted">
              This page is educational. Before beginning treatment, you&rsquo;ll
              review and sign a complete informed-consent document with Becky,
              and you&rsquo;ll have the chance to ask anything you wish. It&rsquo;s
              very important to us that you feel safe and respected throughout.
            </p>
          </Card>
        </Reveal>
      </Container>

      <Container className="py-6 pb-20">
        <Reveal>
          <Prose className="max-w-3xl">
            <h2>Why ketamine-assisted psychotherapy</h2>
            <p>
              Ketamine may be most effective when paired with therapy. It
              doesn&rsquo;t cure on its own; rather, it creates an altered,
              open state that supports change. Preparation, guidance during the
              session, and integration afterward are what help turn a powerful
              experience into lasting growth. Your active engagement shapes the
              results.
            </p>

            <h2>Benefits</h2>
            <p>
              Many people experience improvement in mood and a reduction in
              symptoms such as depression, anxiety, and post-traumatic
              manifestations. Ketamine is distinguished by its rapid onset, and
              the research indicates a roughly 70% initial response rate. Durable
              improvement usually requires more than one session and is most
              robust as part of an overall treatment program. Results are not
              guaranteed.
            </p>

            <h2>Potential risks & side effects</h2>
            <p>
              Ketamine has an extensive safety record, but as with any medicine
              there are potential risks. The most common physical effect is a
              short-term rise in blood pressure, pulse, or heart rate, which can
              matter for those with heart disease. Other possible effects
              include:
            </p>
            <ul>
              <li>Dizziness, lightheadedness, or sedation</li>
              <li>Impaired balance, coordination, or slurred speech</li>
              <li>Temporary confusion or altered perception</li>
              <li>Nausea or vomiting</li>
              <li>Headache or anxiety</li>
            </ul>
            <p>
              These effects are transient and generally resolve within about
              four hours. Repeated, high-dose, non-medical use of ketamine has
              been linked to urinary and bladder problems; this is much less
              likely under medically-supervised treatment. Ketamine can also
              worsen certain conditions in people with psychotic, severe
              personality, or dissociative disorders.
            </p>

            <h2>Managing adverse effects</h2>
            <p>
              To reduce nausea, avoid eating or drinking for four hours before
              your session. Resting still with your eyes closed or an eye mask
              helps with balance and comfort. Your vitals are monitored
              throughout. We reserve the right to activate emergency response
              (such as calling 911) if clinical judgment indicates you need a
              higher level of care.
            </p>

            <h2>Eligibility</h2>
            <p>
              Before participating, you&rsquo;ll be carefully interviewed to
              determine whether ketamine treatment is appropriate. You&rsquo;re
              required to be under the care of a primary care physician and a
              mental health provider. Some medical and psychiatric conditions
              must be treated first, and some make treatment inadvisable. See{" "}
              <a href="/getting-started/">Getting Started</a> for details.
            </p>

            <h2>Potential for abuse & dependence</h2>
            <p>
              Addiction resulting from medically-supervised ketamine treatment is
              exceedingly rare, but non-medical use and addiction do occur.
              Because ketamine can affect mood, thinking, and perception in ways
              some find compelling, it should only be used under the direct
              supervision of a licensed prescriber.
            </p>

            <h2>Alternatives</h2>
            <p>
              No other medicine produces ketamine&rsquo;s specific effect.
              Psychotherapy without ketamine is available and can be effective.
              Depression, PTSD, and bipolar disorders are commonly treated with
              antidepressants, mood stabilizers, and psychotherapy; PTSD is often
              treated with EMDR; and ECT and TMS are used for treatment-resistant
              depression.
            </p>

            <h2>Confidentiality</h2>
            <p>
              Your privacy and all therapy records are kept confidential and
              maintained with the same precautions as ordinary medical records.
              Allowing anyone else access to your records requires your signed
              release.
            </p>

            <h2>Voluntary participation</h2>
            <p>
              Ketamine is a newer psychiatric treatment, and your decision to
              undertake it is completely voluntary. Even after agreeing to begin,
              you may withdraw from treatment at any time.
            </p>

            <p className="text-sm text-cream-dim">
              {/* TODO(becky): replace this educational summary's legal wording
                  with the finalized consent document reviewed by counsel, and
                  add a downloadable PDF for clients to keep. */}
              A complete, signed consent document is provided during intake. This
              summary should be reviewed by qualified legal counsel before
              launch.
            </p>
          </Prose>
        </Reveal>
      </Container>
    </>
  );
}
