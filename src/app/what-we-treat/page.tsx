import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, ConsultCTA, PageHeader } from "@/components/ui";
import Reveal from "@/components/Reveal";
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
        Becky removed the evidence table, so the illustrations are now the
        whole page. They sit in two pairs; the order comes from the gallery
        list in the content file, so rearranging them there moves them on the
        page with no code change.
      */}
      <Container className="pt-6">
        <GalleryPair items={content.gallery.slice(0, 2)} />
        <GalleryPair items={content.gallery.slice(2, 4)} startDelay={2} />

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
