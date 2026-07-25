import { Card } from "@/components/ui";

const resources = [
  {
    label: "988 Suicide & Crisis Lifeline",
    detail: "Call or text 988",
    href: "tel:988",
  },
  {
    label: "Crisis Text Line",
    detail: "Text HOME to 741741",
    href: "sms:741741",
  },
  {
    label: "Emergency",
    detail: "Call 911",
    href: "tel:911",
  },
];

/** Always-visible crisis resources. Prominent on the contact page so no one
 *  in distress is left without an immediate, human option. */
export default function CrisisResources() {
  return (
    <Card className="border-clay/30 bg-clay/10">
      <h2 className="text-3xl text-cream">Need help right now?</h2>
      <p className="mt-2 text-sm text-cream-muted">
        This website isn&rsquo;t a crisis service and messages aren&rsquo;t
        monitored around the clock. If you&rsquo;re in crisis or thinking about
        harming yourself, please use one of these now:
      </p>
      <ul className="mt-5 space-y-3">
        {resources.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              className="flex items-baseline justify-between gap-4 rounded-lg border border-white/5 bg-base-2/60 px-4 py-3 transition-colors hover:border-gold/40"
            >
              <span className="text-sm text-cream">{r.label}</span>
              <span className="text-sm font-medium text-gold">{r.detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
