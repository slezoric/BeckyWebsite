import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "What is Ketamine-Assisted Psychotherapy",
  description:
    "A calm, plain-language introduction to ketamine, how it works, and what the experience is like — paired with supportive psychotherapy.",
};

export default function KapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Understanding KAP"
        title="What is Ketamine-Assisted Psychotherapy?"
        intro="Ketamine can open a window for change. Paired with preparation, guidance, and integration, that window becomes an opportunity for real, lasting healing."
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Prose>
              <h2>What is ketamine?</h2>
              <p>
                Ketamine is one of the most widely used anesthetics in modern
                medicine and appears on the World Health Organization&rsquo;s
                List of Essential Medicines. Developed in 1963 and FDA-approved
                in 1970, it has been used in hospitals for decades because of
                its rapid onset, proven safety, and short duration.
              </p>
              <p>
                Over the last two decades, ketamine has been increasingly
                researched and used off-label to treat conditions such as
                depression, anxiety, PTSD, and substance dependencies. When a
                medication is FDA-approved, physicians may prescribe it
                &ldquo;off-label&rdquo; — for purposes beyond the original
                label — when supported by sound medical evidence.
              </p>

              <h2>How does it work?</h2>
              <p>
                While ketamine&rsquo;s pharmacology isn&rsquo;t fully
                understood, it works through a different pathway than typical
                psychiatric medications like SSRIs — acting mainly on the
                glutamate system as an NMDA antagonist.
              </p>
              <p>
                As a dissociative medicine, ketamine creates a gentle sense of
                detachment from your ordinary sense of self and surroundings.
                This shift can loosen entrenched negative patterns and open the
                door to new perspectives — often leading to meaningful changes
                in overall well-being.
              </p>

              <h2>What is the experience like?</h2>
              <p>
                Everyone&rsquo;s experience is different, but there are common
                threads: a relaxation of ordinary awareness, a softening of
                mental defenses, and a sense of emotional openness.
              </p>
              <ul>
                <li>
                  <strong>At lower doses</strong>, you may feel mild physical
                  numbing, reduced anxiety, altered sense of time, and heightened
                  sensitivity to light and sound. Many people can still take part
                  in therapy and conversation.
                </li>
                <li>
                  <strong>At higher doses</strong>, the experience becomes a more
                  internal journey — vivid imagery, a sense of floating, and
                  diminished body sensation — which some find offers a deeper,
                  longer-lasting effect.
                </li>
              </ul>
              <p>
                Effects typically begin 5–10 minutes after dosing, peak for
                about 20–30 minutes, and gently diminish over the following hour.
                You will rest with support the entire time. Because some effects
                can linger, you&rsquo;ll arrange for someone to drive you home,
                and you won&rsquo;t drive or do anything hazardous for the rest of
                the day.
              </p>

              <h2>Why pair ketamine with therapy?</h2>
              <p>
                Ketamine by itself is not the cure. It assists healing by
                creating an openness to change — and that change is best
                supported within a structured, caring therapeutic relationship.
                Preparation, skilled guidance during the session, and integration
                afterward are what turn a powerful experience into lasting
                growth.
              </p>
              <p>
                Just as the body can intuitively heal itself, so can the psyche.
                Having a highly-trained therapist beside you creates the safety
                to move through whatever arises — including the parts that feel
                difficult — and to make the best use of every part of the
                experience.
              </p>
            </Prose>
          </div>

          {/* Aside: reassurance + quick facts */}
          <div className="space-y-5">
            <Reveal>
              <Card>
                <h3 className="text-lg text-cream">You are safe here</h3>
                <p className="mt-3 text-sm text-cream-muted">
                  In our practice, ketamine is given as a sublingual
                  (dissolving) tablet or nasal spray — no injections required —
                  so we can support you with psychotherapy throughout, and your
                  vitals are monitored before, during, and after.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card>
                <h3 className="text-lg text-cream">At a glance</h3>
                <ul className="mt-3 space-y-2 text-sm text-cream-muted">
                  <li>· On the WHO List of Essential Medicines</li>
                  <li>· Decades of anesthetic safety record</li>
                  <li>· Rapid onset — sometimes within hours</li>
                  <li>· Personalized, collaborative dosing</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={160}>
              <Card className="border-gold/20 bg-gold/5">
                <p className="text-sm text-cream-muted">
                  Ketamine is a relatively new psychiatric treatment. There are
                  no guarantees of outcome, and it works best as part of an
                  overall treatment program.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>

      <ConsultCTA />
    </>
  );
}
