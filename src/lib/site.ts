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

export const navExtras = {
  headerButton: navContent.headerButton,
  footerBlurb: navContent.footerBlurb,
  legalFootnote: navContent.legalFootnote,
};

// U.S. 988 Suicide & Crisis Lifeline — surfaced sitewide so no one hits a dead end.
export const crisis = {
  line: "988",
  lineHref: "tel:988",
  text: "Text or call 988",
  label: "988 Suicide & Crisis Lifeline",
  note: navContent.crisisNote,
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
