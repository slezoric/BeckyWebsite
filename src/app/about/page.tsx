import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import content from "@/content/about.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
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
                  Portrait of {site.practitioner}
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-5 text-lg text-cream-muted">
              {content.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>

      {/* How she works */}
      <section className="border-y border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="text-4xl text-cream sm:text-5xl">
              {content.approachesHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              {content.approachesIntro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.approaches.map((m, i) => (
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

      {/* Credentials */}
      <Container className="py-16">
        <Reveal>
          <Card>
            <h2 className="text-3xl text-cream">{content.credentialsHeading}</h2>
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
              <p className="mt-3 text-cream-muted">{content.credentialsEmpty}</p>
            )}
            <div className="mt-6">
              <ButtonLink href="/kap/#what-happens" variant="ghost">
                {content.credentialsButton}
              </ButtonLink>
            </div>
          </Card>
        </Reveal>
      </Container>

      <ConsultCTA heading={content.ctaHeading} />
    </>
  );
}
