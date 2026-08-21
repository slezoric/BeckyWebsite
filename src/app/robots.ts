import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * AI answer engines are allowed, deliberately.
 *
 * They were already allowed by the catch-all rule, but only by accident of
 * the default. Naming them makes it a decision on the record rather than
 * something a later tidy-up might reverse without realising: people looking
 * for this kind of care increasingly ask an assistant before they ask a
 * search engine, and being absent from those answers means being invisible
 * to them.
 *
 * Nothing here is private. The site holds no client information of any kind —
 * the contact form collects no health data and submissions go to Netlify,
 * never into these pages.
 *
 * To opt out of AI training or answers later, change `allow` to `disallow`
 * for the relevant agent below. Note the trade-off: Google-Extended controls
 * Gemini and AI Overviews, so blocking it removes her from a growing share of
 * ordinary Google results too.
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — ChatGPT browsing and training
  "OAI-SearchBot", // OpenAI — ChatGPT search results
  "ChatGPT-User", // OpenAI — fetches a page a user has asked about
  "ClaudeBot", // Anthropic — Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity
  "Google-Extended", // Gemini and Google AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl, which many models are trained from
  "cohere-ai",
];

// Kept out of search results, for different reasons: the thank-you page is a
// dead end that means nothing on its own, and the editing panel is Becky's.
const PRIVATE = ["/contact/success/", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: PRIVATE,
      })),
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
