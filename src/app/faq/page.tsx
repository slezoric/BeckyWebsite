import type { Metadata } from "next";
import { Card, Container, ConsultCTA, PageHeader, Prose } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { crisis } from "@/lib/site";
import content from "@/content/faq.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function QuestionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      {/* Questions and answers */}
      <Container className="py-10">
        <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/5 bg-surface/30">
          {content.items.map((f, i) => (
            <Reveal key={f.question} delay={i * 30} as="div">
              <details className="group px-6 py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg text-cream marker:content-['']">
                  <span>{f.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-gold transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-cream-muted">{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Is this for me — formerly its own page */}
      <section id="is-it-for-me" className="border-t border-white/5 bg-base-2/60">
        <Container className="py-20">
          <Reveal>
            <h2 className="max-w-3xl text-4xl text-cream sm:text-5xl">
              {content.eligibilityHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-cream-muted">
              {content.eligibilityIntro}
            </p>
          </Reveal>

          <Reveal className="mt-8">
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

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <h3 className="text-2xl text-cream">
                  {content.requirementsHeading}
                </h3>
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
                <h3 className="text-2xl text-cream">
                  {content.treatFirstHeading}
                </h3>
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
              <h3 className="text-2xl text-cream">{content.notRightHeading}</h3>
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
              <h3>{content.closingHeading}</h3>
              <p>{content.closingBody}</p>
            </Prose>
          </Reveal>
        </Container>
      </section>

      <ConsultCTA />
    </>
  );
}
