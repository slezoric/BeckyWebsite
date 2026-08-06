import { Prose } from "@/components/ui";

type Section = { heading: string; paragraphs: string[] };

/**
 * Renders the {heading, paragraphs[]} shape used by the long-form pages.
 *
 * ── Why this is more than a .map() ────────────────────────────────────────
 * Becky writes in the admin panel the way anyone writes in a text box: she
 * presses Enter for a new line, and types "•" followed by a tab to make a
 * bullet. HTML ignores both — newlines collapse to spaces — so what she
 * intended as a tidy list came out as one long run-on sentence.
 *
 * Rather than teach her a markup syntax, this reads what she naturally
 * types:
 *
 *   • or - or *  at the start of a line  ->  becomes a list item
 *   a blank line                         ->  starts a new paragraph
 *   any other line break                 ->  is preserved as a line break
 *
 * ── If you need to change this later ──────────────────────────────────────
 * - To support another bullet character, add it to BULLET below.
 * - To stop treating bullets specially and print text exactly as typed,
 *   delete the grouping loop and render each block with
 *   `<p className="whitespace-pre-line">`.
 * - The same "honour her line breaks" behaviour exists in PageHeader
 *   (components/ui.tsx) for page intros; keep the two consistent.
 */

// Characters Becky might reasonably start a bullet with.
const BULLET = /^\s*[•·▪‣*-]\s+/;

type Block =
  | { type: "text"; lines: string[] }
  | { type: "list"; items: string[] };

/** Split one paragraph of raw text into ordered text/list blocks. */
function toBlocks(raw: string): Block[] {
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

export default function ContentSections({
  sections,
  className = "",
}: {
  sections: Section[];
  className?: string;
}) {
  return (
    <Prose className={className}>
      {sections.map((s) => (
        <div key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.flatMap((raw, pi) =>
            toBlocks(raw).map((block, bi) =>
              block.type === "list" ? (
                <ul key={`${pi}-${bi}`}>
                  {block.items.map((item, ii) => (
                    <li key={ii}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={`${pi}-${bi}`} className="whitespace-pre-line">
                  {block.lines.join("\n")}
                </p>
              ),
            ),
          )}
        </div>
      ))}
    </Prose>
  );
}
