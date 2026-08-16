/**
 * ============================================================
 *   SITE DATA  —  loaded from the editable content files
 * ============================================================
 *  Everything here now comes from JSON files in `src/content/`,
 *  which Becky can edit through the admin panel at /admin.
 *
 *  DO NOT hard-code copy in this file. To change wording or
 *  practice details, edit the content files (or use /admin):
 *
 *      src/content/site.json        practice + contact details
 *      src/content/navigation.json  menu labels, footer, crisis note
 *
 *  This file just gives the rest of the code a typed, tidy way
 *  to read that content.
 * ============================================================
 */

import siteContent from "@/content/site.json";
import navContent from "@/content/navigation.json";

export const site = siteContent;

export const nav: { href: string; label: string }[] = navContent.items;

/**
 * Background music settings, plus the attribution line shown in the footer.
 * Royalty-free licences almost always require visible credit, so the line is
 * assembled from whichever of title / artist / licence have been filled in.
 */
const creditLine: string = [
  // Title and artist read as one phrase — "Track by Someone" — so they are
  // joined with a space. The licence is a separate fact, hence the divider.
  [
    siteContent.music.title,
    siteContent.music.artist && `by ${siteContent.music.artist}`,
  ]
    .filter(Boolean)
    .join(" "),
  siteContent.music.licence,
]
  .filter(Boolean)
  .join(" · ");

export const music = {
  ...siteContent.music,
  creditLine,
  /** Same string, used as the button's tooltip. */
  credit: creditLine,
};

export const navExtras = {
  headerButton: navContent.headerButton,
  footerBlurb: navContent.footerBlurb,
  legalFootnote: navContent.legalFootnote,
};

/**
 * The crisis note shown in the footer of every page, so nobody hits a dead end.
 *
 * The phone numbers live in the note's own wording, not here. They used to be
 * hard-coded alongside it, and the code then appended a "Call or text 988"
 * link to a sentence that already said 988 — so every page named it twice.
 * PhoneText links whatever numbers the text contains, which keeps the wording
 * and the numbers in one place where Becky can see both.
 */
export const crisis = {
  note: navContent.crisisNote,
} as const;

// ---- Derived helpers (no need to edit) ----------------------------

/**
 * Turns a phone number as written into a tel: link.
 *
 * There used to be a second "phone number for tapping" field in the admin
 * panel that had to be kept in step with the visible one, and it had already
 * drifted — it held the bare digits with no "tel:" prefix, so the link on the
 * contact page navigated to a dead path instead of dialling. Deriving it
 * removes the chance of the two disagreeing.
 *
 * Short codes (988, 911) dial exactly as typed. Ten-digit numbers are assumed
 * to be U.S. and get a +1; an explicit country code is left alone.
 */
export function toTelHref(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return `tel:${trimmed.replace(/[^\d+]/g, "")}`;

  let digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  return digits.length === 10 ? `tel:+1${digits}` : `tel:${digits}`;
}

/** Tap-to-dial link for the practice phone number. */
export const phoneHref = toTelHref(site.phone);

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
