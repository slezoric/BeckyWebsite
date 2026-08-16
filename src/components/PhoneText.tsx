import type { ReactNode } from "react";

/**
 * Renders text and turns any phone number inside it into a tel: link.
 *
 * ── Why this exists ───────────────────────────────────────────────────────
 * The crisis wording used to be split into "text before the number" and
 * "text after the number", with the number injected between them by the
 * code. Becky cannot see that injection in the admin panel — she is looking
 * at two ordinary text boxes — so when she rewrote the sentence it came out
 * as "...emergency department988 to reach someone straight away", naming 911
 * twice. The footer had the matching fault from the other direction: the
 * note already said 988, and the code appended a second "Call or text 988"
 * link after it.
 *
 * Now she writes one ordinary sentence with the number in it, exactly as she
 * would say it aloud, and the number becomes tappable on its own. There is
 * no hidden piece to line up, so the whole class of mistake is gone.
 *
 * Numbers are worth linking here specifically: someone reading this on a
 * phone, in the state this paragraph is written for, should be one tap from
 * the call rather than having to memorise digits and switch apps.
 */

// Full numbers first, so a 10-digit number is not partly eaten by the
// short-code branch. "\b9(?:88|11)\b" deliberately will not match inside a
// longer run of digits — a year like 1988 is left alone.
const PHONE =
  /(?:\+?1[\s.-]?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}|\b9(?:88|11)\b/g;

function telHref(match: string) {
  return `tel:${match.replace(/[^\d+]/g, "")}`;
}

export default function PhoneText({
  text,
  linkClassName = "font-medium text-gold underline-offset-4 hover:underline",
}: {
  text: string;
  linkClassName?: string;
}) {
  const parts: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(PHONE)) {
    const start = match.index;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <a
        key={start}
        href={telHref(match[0])}
        className={`whitespace-nowrap ${linkClassName}`}
      >
        {match[0]}
      </a>,
    );
    cursor = start + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}
