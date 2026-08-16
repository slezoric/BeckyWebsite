import { Prose } from "@/components/ui";
import RichText from "@/components/RichText";

type Section = { heading: string; paragraphs: string[] };

/**
 * Renders the {heading, paragraphs[]} shape used by the long-form pages
 * (How It Flows, Informed Consent, Disclaimer, Privacy, Terms).
 *
 * The actual parsing of Becky's typing — bullets, line breaks — lives in
 * RichText, so the FAQ answers behave identically. See that file.
 */
export default function ContentSections({
  sections,
  className = "",
}: {
  sections: Section[];
  className?: string;
}) {
  return (
    <Prose className={className}>
      {sections.map((s, si) => (
        // space-y-5 has to be repeated here. Prose puts it on its own element,
        // and space-y only reaches direct children — so without this the
        // paragraphs inside a section sat flush against each other.
        //
        // The first heading also drops its top margin: it follows the page
        // intro, which already leaves a gap, and the two together left a
        // conspicuous hole at the top of the page.
        <div
          key={s.heading}
          className={si === 0 ? "space-y-5 [&>h2]:mt-0" : "space-y-5"}
        >
          <h2>{s.heading}</h2>
          {s.paragraphs.map((raw, pi) => (
            <RichText key={pi} text={raw} keyPrefix={pi} />
          ))}
        </div>
      ))}
    </Prose>
  );
}
