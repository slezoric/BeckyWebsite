// What this work can help with, and how much research stands behind each.
// Names are kept as people commonly know them, so anyone can find themselves
// here — but the descriptions are written plainly, without clinical shorthand.

export type Strength =
  | "Strong"
  | "Moderate to Strong"
  | "Moderate"
  | "Moderate but preliminary"
  | "Preliminary";

export type Condition = {
  name: string;
  strength: Strength;
  note: string;
};

export const conditions: Condition[] = [
  {
    name: "Depression that hasn't lifted",
    strength: "Strong",
    note: "This is where the evidence is strongest. For people who have tried other things without much relief, the heaviness often begins to lift within hours or days rather than weeks.",
  },
  {
    name: "Depression",
    strength: "Strong",
    note: "Real, meaningful relief for many people — including those who wouldn't describe their depression as severe. It tends to arrive quickly, and usually holds better with more than one visit.",
  },
  {
    name: "Thoughts of ending your life",
    strength: "Strong",
    note: "Among the most striking findings: these thoughts can quieten remarkably fast, sometimes within hours — often before the wider heaviness has begun to lift.",
  },
  {
    name: "The low side of bipolar",
    strength: "Moderate to Strong",
    note: "Good evidence of real relief during the depressive stretches. Because it can occasionally tip things the other way, this is done with especially close care from your doctor.",
  },
  {
    name: "The weight of past trauma",
    strength: "Moderate",
    note: "Encouraging results, particularly when the medicine is paired with real therapeutic support — which is exactly how it is offered here. The research is younger than it is for depression.",
  },
  {
    name: "Anxiety",
    strength: "Moderate",
    note: "Many people find the constant background hum of worry quietens. Relief often comes quickly, though it usually takes more than one visit to settle in.",
  },
  {
    name: "Obsessive thoughts and compulsions",
    strength: "Moderate but preliminary",
    note: "Small studies have found relief from intrusive, looping thoughts in the short term. Genuinely promising, but the research is still early.",
  },
  {
    name: "Drinking that has taken hold",
    strength: "Preliminary",
    note: "Early signs suggest this work may help people drink less and return to it less often, especially alongside therapy. More research is still needed.",
  },
  {
    name: "Other substance use",
    strength: "Preliminary",
    note: "Some early, hopeful findings when paired with ongoing therapeutic support. This remains an area still being explored.",
  },
  {
    name: "Eating disorders",
    strength: "Preliminary",
    note: "A small number of studies point to possible benefit. There isn't yet enough evidence to consider this a settled path.",
  },
];

// Ordering + accent color for each evidence tier.
export const strengthOrder: Strength[] = [
  "Strong",
  "Moderate to Strong",
  "Moderate",
  "Moderate but preliminary",
  "Preliminary",
];

// Confidence ramp: brightest (gold) for the strongest evidence, fading to a
// muted neutral for the most preliminary — so strength reads at a glance.
export const strengthColor: Record<Strength, string> = {
  Strong: "text-gold border-gold/50 bg-gold/15",
  "Moderate to Strong": "text-clay border-clay/40 bg-clay/10",
  Moderate: "text-blush border-blush/40 bg-blush/10",
  "Moderate but preliminary": "text-blush-deep border-blush-deep/30 bg-blush/5",
  Preliminary: "text-cream-dim border-cream-dim/25 bg-cream-dim/5",
};
