import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import content from "@/content/services.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      {/* The work she offers */}
      <Container className="py-10">
        <ol className="space-y-5">
          {content.services.map((s, i) => (
            <Reveal key={s.name} delay={i * 60} as="li">
              <Card className="h-full">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="text-2xl text-cream sm:text-3xl">{s.name}</h2>
                  {s.duration && (
                    <span className="text-sm text-cream-dim">{s.duration}</span>
                  )}
                </div>
                {s.note && (
                  <span className="mt-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm text-gold">
                    {s.note}
                  </span>
                )}
                <p className="mt-4 text-cream-muted">{s.body}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Container>

      {/* Fees */}
      {content.feesBody && (
        <section className="border-t border-white/5 bg-base-2/60">
          <Container className="py-16">
            <Reveal>
              <h2 className="text-4xl text-cream sm:text-5xl">
                {content.feesHeading}
              </h2>
              <p className="mt-4 max-w-2xl whitespace-pre-line text-cream-muted">
                {content.feesBody}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/*
        Products. Hidden entirely until there is something to sell — an empty
        "Coming soon" section reads as an unfinished website. To switch it on,
        add a heading and one or more products in the admin panel.
      */}
      {content.products.length > 0 && (
        <section className="border-t border-white/5">
          <Container className="py-20">
            <Reveal>
              <h2 className="text-4xl text-cream sm:text-5xl">
                {content.productsHeading}
              </h2>
              {content.productsIntro && (
                <p className="mt-4 max-w-2xl text-cream-muted">
                  {content.productsIntro}
                </p>
              )}
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.products.map(
                (
                  p: { name: string; body: string; price?: string },
                  i: number,
                ) => (
                  <Reveal key={p.name} delay={i * 70}>
                    <Card className="h-full">
                      <h3 className="text-xl text-cream">{p.name}</h3>
                      {p.price && (
                        <p className="mt-2 text-sm text-gold">{p.price}</p>
                      )}
                      <p className="mt-3 text-sm text-cream-muted">{p.body}</p>
                    </Card>
                  </Reveal>
                ),
              )}
            </div>
          </Container>
        </section>
      )}

      <ConsultCTA heading={content.ctaHeading} />
    </>
  );
}
