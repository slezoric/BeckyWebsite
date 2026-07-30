import { Prose } from "@/components/ui";

type Section = { heading: string; paragraphs: string[] };

/**
 * Renders the {heading, paragraphs[]} structure used by the long-form pages.
 * Keeping this in one place means the CMS only ever has to describe one shape.
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
      {sections.map((s) => (
        <div key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ))}
    </Prose>
  );
}
