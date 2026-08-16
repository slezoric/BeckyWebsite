/**
 * Renders one block of text the way Becky actually types it.
 *
 * ── Why this exists ───────────────────────────────────────────────────────
 * Becky writes in the admin panel the way anyone writes in a text box: she
 * presses Enter for a new line, and types "•" or "*" to make a bullet. HTML
 * ignores both — newlines collapse to spaces and the bullet character is
 * printed literally — so what she intended as a tidy list came out as a
 * run-on sentence with stray asterisks in it.
 *
 * Rather than teach her a markup syntax, this reads what she naturally types:
 *
 *   • or · or - or *  at the start of a line  ->  becomes a list item
 *   a blank line                              ->  starts a new paragraph
 *   any other line break                      ->  is preserved as a line break
 *
 * ── Where it is used ──────────────────────────────────────────────────────
 * Anywhere Becky can type more than one line: the long-form page sections
 * (via ContentSections) and the FAQ answers. If you add another free-text
 * field to the CMS, render it through this — otherwise that field will show
 * raw asterisks the first time she makes a list in it.
 *
 * ── Styling ───────────────────────────────────────────────────────────────
 * This emits bare <p> and <ul> elements and deliberately styles neither.
 * Put it inside <Prose>, which supplies the list bullets, spacing and colour.
 *
 * ── If you need to change this later ──────────────────────────────────────
 * - To support another bullet character, add it to BULLET below.
 * - To print text exactly as typed instead, replace the call site with
 *   `<p className="whitespace-pre-line">{text}</p>`.
 */

// Characters Becky might reasonably start a bullet with.
const BULLET = /^\s*[•·▪‣*-]\s+/;

type Block =
  { type: "text"; lines: string[] } | { type: "list"; items: string[] };

/** Split one paragraph of raw text into ordered text/list blocks. */
export function toBlocks(raw: string): Block[] {
  const blocks: Block[] = [];

  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue; // blank line: just ends the current run

    if (BULLET.test(trimmed)) {
      const item = trimmed.replace(BULLET, "").trim();
      const last = blocks[blocks.length - 1];
      if (last?.type === "list") last.items.push(item);
      else blocks.push({ type: "list", items: [item] });
    } else {
      const last = blocks[blocks.length - 1];
      if (last?.type === "text") last.lines.push(trimmed);
      else blocks.push({ type: "text", lines: [trimmed] });
    }
  }

  return blocks;
}

export default function RichText({
  text,
  keyPrefix = "",
}: {
  text: string;
  /** Keeps keys unique when several RichTexts render into one parent. */
  keyPrefix?: string | number;
}) {
  return (
    <>
      {toBlocks(text).map((block, bi) =>
        block.type === "list" ? (
          <ul key={`${keyPrefix}-${bi}`}>
            {block.items.map((item, ii) => (
              <li key={ii}>{item}</li>
            ))}
          </ul>
        ) : (
          <p key={`${keyPrefix}-${bi}`} className="whitespace-pre-line">
            {block.lines.join("\n")}
          </p>
        ),
      )}
    </>
  );
}
