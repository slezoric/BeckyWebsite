import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { strengthColor, type Strength } from "@/lib/conditions";
import content from "@/content/what-it-helps.json";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
  body: string;
};

/**
 * A row of two illustrations. Used twice: once above the table, once below.
 *
 * The pictures are shown whole — object-contain rather than object-cover — so
 * nothing is cut off. They are all square, so the frame is square too and
 * there is nothing to letterbox in practice; if a non-square image is ever
 * swapped in it will sit inside the frame rather than being cropped to fit.
 */
function GalleryPair({
  items,
  startDelay = 0,
}: {
  items: GalleryItem[];
  startDelay?: number;
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {items.map((g, i) => (
        <Reveal key={g.image} delay={(startDelay + i) * 70}>
          <figure className="h-full overflow-hidden rounded-2xl border border-white/5 bg-surface/40">
            <div className="relative aspect-square">
              <Image
                src={g.image}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 100vw, 45vw"
                className="object-contain"
              />
            </div>
            <figcaption className="p-6">
              <h3 className="text-xl text-cream">{g.caption}</h3>
              <p className="mt-2 text-sm text-cream-muted">{g.body}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export default function WhatWeTreatPage() {
  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.heading}
        intro={content.intro}
      />

      {/*
        The illustrations sit in two pairs, one pair above the table and one
        below. Order comes from the gallery list in the content file: the
        first two render above, the last two below. Reordering there moves
        them on the page — no code change needed.
      */}
      <Container className="pt-6">
        <Reveal>
          <h2 className="max-w-3xl text-4xl text-cream sm:text-5xl">
            {content.galleryHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-cream-muted">
            {content.galleryIntro}
          </p>
        </Reveal>
        <GalleryPair items={content.gallery.slice(0, 2)} />
      </Container>

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

      <Container className="pb-6">
        <GalleryPair items={content.gallery.slice(2, 4)} startDelay={2} />
      </Container>

      <ConsultCTA heading={content.ctaHeading} />
    </>
  );
}
