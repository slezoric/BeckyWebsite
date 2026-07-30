import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { crisis } from "@/lib/site";
import content from "@/content/is-it-for-me.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      {/* Crisis callout */}
      <Container className="pb-2">
        <Reveal>
          <div className="rounded-2xl border border-clay/30 bg-clay/10 p-6">
            <p className="text-sm text-cream">
              <strong className="text-cream">
                {content.crisisCalloutStrong}
              </strong>
              {content.crisisCalloutBeforeNumber}
              <a
                href={crisis.lineHref}
                className="font-medium text-gold underline-offset-4 hover:underline"
              >
                {crisis.line}
              </a>
              {content.crisisCalloutAfterNumber}
            </p>
          </div>
        </Reveal>
      </Container>

      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <h2 className="text-3xl text-cream">
                {content.requirementsHeading}
              </h2>
              <p className="mt-3 text-sm text-cream-muted">
                {content.requirementsIntro}
              </p>
              <ul className="mt-5 space-y-4">
                {content.requirements.map((r) => (
                  <li key={r} className="flex gap-3 text-cream-muted">
                    <span aria-hidden="true" className="mt-1 text-gold">
                      ✓
                    </span>
                    <span className="text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full">
              <h2 className="text-3xl text-cream">
                {content.treatFirstHeading}
              </h2>
              <p className="mt-3 text-sm text-cream-muted">
                {content.treatFirstIntro}
              </p>
              <ul className="mt-5 space-y-2">
                {content.treatFirst.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-cream-muted">
                    <span aria-hidden="true" className="mt-1 text-blush">
                      ·
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <Card className="border-clay/20">
            <h2 className="text-3xl text-cream">{content.notRightHeading}</h2>
            <p className="mt-3 text-sm text-cream-muted">
              {content.notRightIntro}
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {content.notRight.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-cream-muted">
                  <span aria-hidden="true" className="mt-1 text-clay">
                    ·
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-cream-muted">
              {content.notRightFootnote}
            </p>
          </Card>
        </Reveal>

        <Reveal className="mt-10">
          <Prose>
            <h2>{content.closingHeading}</h2>
            <p>{content.closingBody}</p>
          </Prose>
        </Reveal>
      </Container>

      <ConsultCTA heading={content.ctaHeading} />
    </>
  );
}
