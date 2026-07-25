import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How This Works",
  description:
    "A gentle, plain-language introduction to ketamine-assisted therapy — what the medicine is, what the experience feels like, and why it is always paired with real support.",
};

export default function KapPage() {
  return (
    <>
      <PageHeader
        eyebrow="How this works"
        title="A door opens. You don't walk through it alone."
        intro="Some medicines quiet a symptom. This one softens the walls we build over years — and for a little while, makes it possible to see ourselves with fresh eyes. What you do with that opening is where the real change happens."
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Prose>
              <h2>What this medicine is</h2>
              <p>
                Ketamine has been used safely in hospitals and doctors&rsquo;
                offices for more than fifty years — including with children, and
                including in surgery. It is one of the medicines the World Health
                Organization considers essential. That long track record is a big
                part of why it feels safe to use here.
              </p>
              <p>
                More recently, doctors and therapists discovered something else
                about it: given in small, careful amounts, it can lift the
                heaviness of depression and anxiety remarkably quickly — often in
                hours rather than the weeks other medicines take. This use is
                newer than its original one, and the doctor looking after you
                will talk that through with you honestly.
              </p>

              <h2>Why it helps</h2>
              <p>
                When we have hurt for a long time, our thinking wears grooves —
                the same worries, the same harsh voice, the same story about who
                we are. Those grooves feel like permanent truth. They aren&rsquo;t.
              </p>
              <p>
                This medicine gently loosens them. For a few hours, the usual
                sense of &ldquo;me&rdquo; softens and quiets, and something more
                spacious opens up behind it. People often describe stepping back
                far enough to finally see their life clearly — sometimes with
                relief, sometimes with tears, often with a tenderness toward
                themselves they had not felt in years.
              </p>

              <h2>What it feels like</h2>
              <p>
                Everyone&rsquo;s experience is their own, but there are common
                threads: a floating, dreamlike quality; colors and music felt more
                deeply; time stretching. Your body feels distant and pleasantly
                heavy. Many people feel a great sense of ease.
              </p>
              <p>
                With gentler amounts, you can still talk and be talked to — the
                conversation just goes somewhere more honest than usual. With
                stronger ones, the experience turns inward, more like a vivid
                dream you are travelling through.
              </p>
              <p>
                It usually begins within five or ten minutes, deepens for about
                half an hour, and eases off over the next hour or so. You&rsquo;ll
                feel gently tired afterward, and someone you trust will drive you
                home to rest.
              </p>
              <p>
                Sometimes what surfaces is hard — grief, or something long
                avoided. That is not a sign anything has gone wrong. Becky is
                trained to stay steady with you through exactly those moments, and
                they are often where the deepest healing lives.
              </p>

              <h2>Why the medicine alone isn&rsquo;t enough</h2>
              <p>
                The medicine opens a door. It does not walk you through, and it
                does not do the work for you. What matters is having someone
                beside you who knows the territory — before, during, and
                especially afterward.
              </p>
              <p>
                Just as a body knows how to knit a broken bone, something in us
                knows how to heal. This work simply clears the way and keeps you
                company while it happens.
              </p>
            </Prose>
          </div>

          {/* Aside: reassurance */}
          <div className="space-y-5">
            <Reveal>
              <Card>
                <h3 className="text-lg text-cream">You are safe here</h3>
                <p className="mt-3 text-sm text-cream-muted">
                  No needles — the medicine dissolves in your mouth or is a small
                  nasal spray. You rest somewhere comfortable, with music and an
                  eye mask if you like. Becky stays with you the entire time and
                  keeps a quiet eye on how you are doing.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card>
                <h3 className="text-lg text-cream">Things worth knowing</h3>
                <ul className="mt-3 space-y-2 text-sm text-cream-muted">
                  <li>· Over fifty years of use in medicine</li>
                  <li>· Relief can come quickly — sometimes the same day</li>
                  <li>· You are never left on your own</li>
                  <li>· Everything is paced to you, never rushed</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={160}>
              <Card className="border-gold/20 bg-gold/5">
                <p className="text-sm text-cream-muted">
                  Honest note: this is still a newer path, and no one can promise
                  you a particular outcome. It helps many people, it does not help
                  everyone, and it works best as part of a wider circle of care.
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
