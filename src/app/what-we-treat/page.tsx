import type { Metadata } from "next";
import Link from "next/link";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { strengthColor, type Strength } from "@/lib/conditions";
import content from "@/content/what-it-helps.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function WhatWeTreatPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      <Container className="py-10">
        {/* Evidence table (cards on mobile, table on larger screens) */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-2xl border border-white/5 md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-surface/60 text-sm uppercase tracking-wide text-cream-dim">
                <tr>
                  <th className="px-6 py-4 font-medium">
                    {content.tableHeadCondition}
                  </th>
                  <th className="px-6 py-4 font-medium">
                    {content.tableHeadEvidence}
                  </th>
                  <th className="px-6 py-4 font-medium">
                    {content.tableHeadNote}
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.conditions.map((c) => (
                  <tr key={c.name} className="border-t border-white/5 align-top">
                    <td className="px-6 py-5 font-medium text-cream">
                      {c.name}
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-block whitespace-nowrap rounded-full border px-3 py-1 text-xs ${strengthColor[c.strength as Strength]}`}
                      >
                        {c.strength}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-cream-muted">
                      {c.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile: stacked cards */}
        <div className="space-y-4 md:hidden">
          {content.conditions.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="rounded-2xl border border-white/5 bg-surface/40 p-5">
                <h2 className="text-3xl text-cream">{c.name}</h2>
                <span
                  className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs ${strengthColor[c.strength as Strength]}`}
                >
                  {c.strength}
                </span>
                <p className="mt-3 text-sm text-cream-muted">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-3xl text-sm text-cream-dim">
            {content.footnote}{" "}
            <Link
              href="/faq/#is-it-for-me"
              className="text-gold underline-offset-4 hover:underline"
            >
              {content.footnoteLink}
            </Link>
          </p>
        </Reveal>
      </Container>

      <ConsultCTA heading={content.ctaHeading} />
    </>
  );
}
