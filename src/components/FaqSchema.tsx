import JsonLd from "@/components/JsonLd";
import { PRACTICE_ID } from "@/components/StructuredData";
import { site } from "@/lib/site";
import content from "@/content/faq.json";

/**
 * Marks Becky's questions and answers up as a schema.org FAQPage.
 *
 * ── Why bother ────────────────────────────────────────────────────────────
 * She has already written plain answers to the things people actually type:
 * whether it is safe, what it feels like, whether it is right for them. In
 * plain HTML that is just prose. Marked up, it is a machine-readable set of
 * question/answer pairs, which is the exact shape answer engines look for
 * when deciding what to quote.
 *
 * A caveat worth keeping in this file so nobody expects the wrong thing:
 * Google narrowed FAQ *rich results* in 2023 to government and major health
 * sites, so this will probably not draw the expandable accordion in ordinary
 * search results. The value is comprehension — AI answer engines and Bing
 * still read it, and it states plainly that this page answers these
 * questions.
 *
 * ── Keeping the answers honest ────────────────────────────────────────────
 * The text is taken from the same content file the page renders, so what a
 * machine is told and what a person reads can never drift apart. Becky's
 * bullet characters are stripped, because "* Relief can come quickly" is
 * formatting she typed, not words she meant to say.
 */

// Mirrors the bullet characters RichText understands; keep the two in step.
const BULLET = /^\s*[•·▪‣*-]\s+/;

function plainText(answer: string) {
  return answer
    .split("\n")
    .map((line) => line.replace(BULLET, "").trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function FaqSchema() {
  const questions = content.items
    .filter((item) => item.question?.trim() && item.answer?.trim())
    .map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: plainText(item.answer),
      },
    }));

  if (!questions.length) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${site.url}/faq/#faq`,
        name: content.metaTitle,
        description: content.metaDescription,
        // Ties these answers to the practice rather than leaving them
        // floating, so the two blocks describe one entity.
        about: { "@id": PRACTICE_ID },
        mainEntity: questions,
      }}
    />
  );
}
