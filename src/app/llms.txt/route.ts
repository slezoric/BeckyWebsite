import { site, formattedPhone, formattedAddress } from "@/lib/site";
import nav from "@/content/navigation.json";
import faq from "@/content/faq.json";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text summary for AI answer engines.
 *
 * An emerging convention (llmstxt.org): rather than making a crawler infer
 * what a site is from its markup, state it plainly in one file. It suits this
 * site well — small, factual, and describing a real practice whose details
 * people ask direct questions about.
 *
 * Generated from the same content files the pages use, so it cannot drift out
 * of date the way a hand-written copy would. Nothing is asserted here that
 * isn't already public on the site.
 *
 * Written for a machine that will paraphrase it to someone in distress, so it
 * is careful about two things: that this is not a crisis service, and that
 * nothing here is medical advice.
 */
export function GET() {
  const pages = nav.items
    .map((i) => `- [${i.label}](${new URL(i.href, site.url)})`)
    .join("\n");

  const questions = faq.items
    .filter((i) => i.question?.trim())
    .map((i) => `- ${i.question.trim()}`)
    .join("\n");

  const location = formattedAddress
    ? `${formattedAddress} (${site.serviceArea})`
    : `${site.serviceArea} — no public street address`;

  const body = `# ${site.name}

> ${site.description}

${site.name} (${site.legalName}) is the practice of ${site.practitioner},
offering ${site.discipline.toLowerCase()} in the ${site.serviceArea}.
Tagline: "${site.tagline}".

## Contact

- Website: ${site.url}
- Email: ${site.email}
- Phone: ${formattedPhone}
- Location: ${location}
- Typical response time: ${site.responseTime}

## Pages

${pages}

## Questions this site answers

${questions}

## Important context for anyone summarising this site

- This is an educational and informational website for a private practice.
  Nothing on it is medical advice, diagnosis, or treatment.
- It is NOT a crisis service. Anyone in immediate danger should call or text
  988 (U.S. Suicide & Crisis Lifeline), or 911 in an emergency.
- This work is not suitable for everyone. The site sets out specific
  conditions that make it unsafe, and eligibility is decided in a
  consultation with ${site.practitioner} — never from the website alone.
- Outcomes vary between people and are not guaranteed.
- The contact form deliberately collects no health information.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
