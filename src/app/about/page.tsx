import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet Becky",
  description:
    "Becky brings deep training and an even deeper belief that people know how to heal — offering a warm, grounded, unhurried place to do that work.",
};

const approaches = [
  {
    title: "Listening to the body",
    body: "So much of what we carry is held in the body, not the mind. Becky pays attention to both.",
  },
  {
    title: "Meeting the moment",
    body: "Coming to each moment with curiosity rather than judgment — which is how rigid things start to soften.",
  },
  {
    title: "Gentle with old hurt",
    body: "Nothing forced, nothing rushed. You stay in charge of the pace, and of what you do and don't touch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meet Becky"
        title="Someone to walk beside you"
        intro="Deep training, and an even deeper belief that people already carry what they need to heal — sometimes they just need good company while they find it."
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Portrait placeholder */}
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-2 to-wine/40">
              {site.portrait ? (
                <Image
                  src={site.portrait}
                  alt={site.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-center text-sm text-cream-dim">
                  Portrait of Becky
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-lg text-cream-muted">
              <p>
                Becky has a deep respect for what the mind can do when it is
                given room. She works with people carrying depression, anxiety,
                old hurt, and the ordinary hard parts of being alive — and helps
                them find their way back to breathing a little easier.
              </p>
              <p>
                At the heart of her work is a simple belief: healing is not
                linear. It is an unfolding journey, and it asks for safety,
                curiosity, and courage. This medicine is one way of reaching the
                quieter, more resilient part of yourself — the one that has been
                there all along, underneath everything.
              </p>
              <p>
                She&rsquo;ll prepare you properly, stay with you through the
                whole of it, and sit with you afterward while you make sense of
                what you found. People describe her space as warm, grounded, and
                entirely without judgment. She meets you exactly where you are —
                not where you think you ought to be.
              </p>
              <p>
                Whether you are worn down by something you have carried for
                years, or simply sense there is more waiting for you, Becky would
                be glad to walk alongside you.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>

      {/* Modalities */}
      <section className="border-y border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-4xl text-cream sm:text-5xl">
              How she works
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              A few threads run through everything Becky does, woven differently
              for each person who sits down with her.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {approaches.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="text-xl text-cream">{m.title}</h3>
                  <p className="mt-3 text-sm text-cream-muted">{m.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Credentials placeholder */}
      <Container className="py-16">
        <Reveal>
          <Card>
            <h2 className="text-3xl text-cream">Credentials &amp; licensure</h2>
            {site.credentials.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {site.credentials.map((c) => (
                  <li key={c} className="flex gap-3 text-cream-muted">
                    <span aria-hidden="true" className="mt-1 text-gold">
                      ·
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-cream-muted">
                {/* Add credentials in src/lib/site.ts → credentials[] */}
                Licensure, certifications, and training details to be confirmed.
              </p>
            )}
            <div className="mt-6">
              <ButtonLink href="/process/" variant="ghost">
                See the whole journey
              </ButtonLink>
            </div>
          </Card>
        </Reveal>
      </Container>

      <ConsultCTA heading="Let's begin the conversation" />
    </>
  );
}
