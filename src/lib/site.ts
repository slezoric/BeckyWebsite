// Central site configuration. Real contact details are placeholders until
// Becky confirms them — search for TODO to find what needs real values.

export const site = {
  name: "A World Within",
  // Legal entity name, used in copyright / legal pages.
  legalName: "A World Within LLC",
  // Brand tagline shown beneath the wordmark.
  tagline: "ExtraOrdinary Care",
  // What the practice actually does — used for SEO titles and descriptions.
  discipline: "Ketamine-Assisted Psychotherapy",
  practitioner: "Becky",
  // TODO(becky): confirm public-facing contact details before launch.
  email: "hello@aworldwithin.example",
  phone: "(555) 000-0000",
  phoneHref: "tel:+15550000000",
  url: "https://aworldwithin.example",
  description:
    "Warm, evidence-based Ketamine-Assisted Psychotherapy with Becky. A safe, grounded space for depression, anxiety, trauma, and deeper personal growth.",
} as const;

export const nav: { href: string; label: string }[] = [
  { href: "/about/", label: "About" },
  { href: "/kap/", label: "What is KAP" },
  { href: "/what-we-treat/", label: "What We Treat" },
  { href: "/process/", label: "The Process" },
  { href: "/getting-started/", label: "Getting Started" },
  { href: "/faq/", label: "FAQ" },
];

// U.S. 988 Suicide & Crisis Lifeline — surfaced sitewide so no one hits a dead end.
export const crisis = {
  line: "988",
  lineHref: "tel:988",
  text: "Text or call 988",
  label: "988 Suicide & Crisis Lifeline",
  note: "If you are in crisis or thinking about harming yourself, call or text 988 (U.S.), or dial 911 for emergencies. This website is not a crisis service.",
} as const;
