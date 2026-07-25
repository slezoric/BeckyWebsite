/**
 * ============================================================
 *   CLIENT INFORMATION  —  EDIT THIS ONE FILE
 * ============================================================
 *  This is the single source of truth for everything about the
 *  practice. Change a value here and it updates everywhere on the
 *  site automatically — the header, footer, contact page, SEO tags,
 *  and Google structured data. For routine content updates you only
 *  ever need to touch THIS file; no other code required.
 *
 *  HOW TO EDIT: change only the text inside the quotes "like this".
 *  Keep the commas, quotes, and brackets exactly as they are.
 *
 *  Fields marked  «TODO»  still hold placeholder values and MUST be
 *  filled in with real information before the site goes live.
 * ============================================================
 */

export const site = {
  // ---- Identity ---------------------------------------------------
  name: "A World Within",
  legalName: "A World Within LLC",
  tagline: "Extra-Ordinary Care",
  discipline: "Ketamine-Assisted Psychotherapy",
  practitioner: "Becky",
  // «TODO» e.g. "LCSW" — shown after the name where credentials appear.
  practitionerTitle: "",

  // ---- Contact ----------------------------------------------------
  email: "hello@aworldwithin.example", // «TODO» real email
  phone: "(555) 000-0000", // «TODO» real phone (display format)
  phoneHref: "tel:+15550000000", // «TODO» real phone (digits, keep the tel: prefix)
  // How long clients should expect to wait for a reply.
  responseTime: "within a couple of business days",

  // ---- Location & reach -------------------------------------------
  // Set inPerson to false for a telehealth-only practice (hides the address).
  inPerson: true,
  address: {
    line1: "", // «TODO» e.g. "123 Calm Way, Suite 200"
    city: "", // «TODO»
    state: "", // «TODO» e.g. "CA"
    zip: "", // «TODO»
  },
  // «TODO» e.g. "In-person in Portland + telehealth across Oregon"
  serviceArea: "",

  // ---- Hours (set value to "Closed" for days off) -----------------
  hours: [
    { day: "Monday – Thursday", value: "By appointment" },
    { day: "Friday", value: "By appointment" },
    { day: "Saturday – Sunday", value: "Closed" },
  ],

  // ---- Credentials & licensure (add one line per item) ------------
  // «TODO» e.g. "LCSW #12345 (California)", "Certified in Ketamine-Assisted Psychotherapy"
  credentials: [] as string[],

  // ---- Booking ----------------------------------------------------
  // If Becky uses an outside scheduler, paste its URL here and the
  // contact page will add a "Book online" button. Leave "" to use the
  // request form only.
  bookingUrl: "",

  // ---- Social links (leave "" to hide a link) ---------------------
  social: {
    instagram: "", // full URL, e.g. "https://instagram.com/…"
    facebook: "",
    linkedin: "",
  },

  // ---- Site -------------------------------------------------------
  url: "https://aworldwithin.example", // «TODO» real domain (used for SEO/sitemap)
  description:
    "Warm, evidence-based Ketamine-Assisted Psychotherapy with Becky. A safe, grounded space for depression, anxiety, trauma, and deeper personal growth.",
} as const;

// Main navigation links (order shown left to right).
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

// ---- Derived helpers (no need to edit) ----------------------------

/** Non-empty social links as [label, url] pairs. */
export const socialLinks = Object.entries(site.social)
  .filter(([, url]) => url)
  .map(([key, url]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    url,
  }));

/** Single-line formatted address, or "" if not provided. */
export const formattedAddress = [
  site.address.line1,
  [site.address.city, site.address.state].filter(Boolean).join(", "),
  site.address.zip,
]
  .filter(Boolean)
  .join(" · ");
