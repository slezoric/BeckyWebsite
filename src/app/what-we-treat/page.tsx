import type { Metadata } from "next";
import Link from "next/link";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { conditions, strengthColor } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "What We Treat",
  description:
    "The conditions Ketamine-Assisted Psychotherapy can help with — presented honestly alongside the strength of the research evidence behind each.",
};

export default function WhatWeTreatPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we treat"
        title="Where ketamine can help — and how strong the evidence is"
        intro="We believe you deserve an honest picture. Below is each condition alongside the current strength of the research, from well-established to still-emerging."
      />

      <Container className="py-10">
        {/* Evidence table (cards on mobile, table on larger screens) */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-2xl border border-white/5 md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-surface/60 text-sm uppercase tracking-wide text-cream-dim">
                <tr>
                  <th className="px-6 py-4 font-medium">Condition</th>
                  <th className="px-6 py-4 font-medium">Evidence</th>
                  <th className="px-6 py-4 font-medium">What the research shows</th>
                </tr>
              </thead>
              <tbody>
                {conditions.map((c) => (
                  <tr
                    key={c.name}
                    className="border-t border-white/5 align-top"
                  >
                    <td className="px-6 py-5 font-medium text-cream">
                      {c.name}
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-block whitespace-nowrap rounded-full border px-3 py-1 text-xs ${strengthColor[c.strength]}`}
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
          {conditions.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="rounded-2xl border border-white/5 bg-surface/40 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg text-cream">{c.name}</h2>
                </div>
                <span
                  className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs ${strengthColor[c.strength]}`}
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
            For some conditions — including primary psychotic disorders,
            schizophrenia, and certain personality disorders — evidence is weak,
            mixed, or raises safety concerns, and KAP may not be appropriate. A
            careful assessment is always the first step.{" "}
            <Link
              href="/getting-started/"
              className="text-gold underline-offset-4 hover:underline"
            >
              See eligibility and getting started →
            </Link>
          </p>
        </Reveal>
      </Container>

      <ConsultCTA heading="Wondering if it could help you?" />
    </>
  );
}
