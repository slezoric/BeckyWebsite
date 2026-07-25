// Conditions and their research evidence strength, sourced directly from the
// "CIFI_KAP Introduction" source document. Presented honestly — transparency about the
// state of the evidence is a trust asset, not a liability.

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
    name: "Treatment-Resistant Depression",
    strength: "Strong",
    note: "The condition with the strongest research support. Multiple trials and meta-analyses show rapid antidepressant effects, often within hours to days.",
  },
  {
    name: "Major Depressive Disorder",
    strength: "Strong",
    note: "Significant short-term antidepressant effects, including in people not formally classified as treatment-resistant. Benefits are rapid but may need maintenance.",
  },
  {
    name: "Suicidal Ideation in Depression",
    strength: "Strong",
    note: "Shown to reduce suicidal thoughts rapidly — sometimes within hours, even before broader depressive symptoms improve.",
  },
  {
    name: "Bipolar Depression",
    strength: "Moderate to Strong",
    note: "Meaningful reductions in depressive symptoms during the depressive phase. Careful psychiatric supervision is important given a risk of triggering mania.",
  },
  {
    name: "Post-Traumatic Stress Disorder (PTSD)",
    strength: "Moderate",
    note: "Multiple studies report reduced PTSD symptoms, particularly when ketamine is combined with psychotherapy. The research base is smaller than for depression.",
  },
  {
    name: "Anxiety Disorders",
    strength: "Moderate",
    note: "Reductions in generalized and social anxiety in some people. Benefits often appear rapidly but may require repeated treatment to persist.",
  },
  {
    name: "Obsessive-Compulsive Disorder (OCD)",
    strength: "Moderate but preliminary",
    note: "Small trials show short-term reductions in obsessive symptoms. Promising but preliminary compared with depression research.",
  },
  {
    name: "Alcohol Use Disorder",
    strength: "Preliminary",
    note: "Some evidence that ketamine-assisted psychotherapy may reduce relapse and consumption. More large-scale trials are needed.",
  },
  {
    name: "Other Substance Use Disorders",
    strength: "Preliminary",
    note: "Early evidence for cocaine and opioid use disorders, particularly when paired with behavioral therapy. Research remains exploratory.",
  },
  {
    name: "Eating Disorders",
    strength: "Preliminary",
    note: "Limited studies, particularly in anorexia nervosa, suggest potential benefit. Evidence is currently insufficient to consider it established.",
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

export const strengthColor: Record<Strength, string> = {
  Strong: "text-forest-light border-forest-light/40 bg-forest/20",
  "Moderate to Strong": "text-sage border-sage/40 bg-sage/10",
  Moderate: "text-sage border-sage/30 bg-sage/5",
  "Moderate but preliminary": "text-gold border-gold/30 bg-gold/5",
  Preliminary: "text-clay border-clay/30 bg-clay/5",
};
