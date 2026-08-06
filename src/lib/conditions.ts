// The conditions themselves live in `src/content/what-it-helps.json` so they
// can be edited without touching code. This file only maps an evidence level
// to its colour, which is a design decision rather than content.

export type Strength =
  | "Strong"
  | "Moderate to Strong"
  | "Moderate"
  | "Moderate but preliminary"
  | "Preliminary";

// Confidence ramp: brightest (gold) for the strongest evidence, fading to a
// muted neutral for the most preliminary — so strength reads at a glance.
export const strengthColor: Record<Strength, string> = {
  Strong: "text-gold border-gold/50 bg-gold/15",
  "Moderate to Strong": "text-clay border-clay/40 bg-clay/10",
  Moderate: "text-blush border-blush/40 bg-blush/10",
  "Moderate but preliminary": "text-blush-deep border-blush-deep/30 bg-blush/5",
  Preliminary: "text-cream-dim border-cream-dim/25 bg-cream-dim/5",
};
