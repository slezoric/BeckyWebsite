/**
 * Emits a block of schema.org JSON-LD.
 *
 * The "<" escape is not cosmetic. JSON.stringify leaves "<" alone, so a
 * "</script>" typed into any CMS field would close this tag early and let the
 * rest of that field be parsed as markup. Becky edits these values through
 * /admin, so the input is not fully under our control. < is valid JSON
 * and parses back to "<" unchanged, so consumers see the original text.
 *
 * Undefined and empty values are stripped before serialising. Search engines
 * and AI crawlers treat an empty string as a claim that the field is blank,
 * which is worse than not making the claim at all — an empty `address` reads
 * as "this business has no address" rather than "we did not say".
 */
function prune(value: unknown): unknown {
  if (Array.isArray(value)) {
    const cleaned = value.map(prune).filter((v) => v !== undefined);
    return cleaned.length ? cleaned : undefined;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      const cleaned = prune(v);
      if (cleaned !== undefined) out[k] = cleaned;
    }
    // An object holding nothing but its own @type says nothing worth saying.
    // A lone @id is different: that is a reference to an entity described
    // elsewhere on the page, and dropping it silently breaks the link between
    // the two — which is the whole point of giving them stable ids.
    const meaningful = Object.keys(out).filter(
      (k) => !k.startsWith("@") || k === "@id",
    );
    return meaningful.length ? out : undefined;
  }
  if (typeof value === "string" && !value.trim()) return undefined;
  return value ?? undefined;
}

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(prune(data)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
