import { site, phoneHref, socialLinks } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

/**
 * schema.org description of the practice, on every page.
 *
 * This is how search engines and AI answer engines work out *what this is* —
 * that it is a real practice, run by a named person, serving a named place.
 * Everything here comes from src/content/site.json, so Becky maintains it
 * through /admin without touching code, and anything she leaves blank is
 * simply left out rather than published as an empty claim (see JsonLd).
 *
 * The stable @id lets other blocks on the site point at this same entity
 * instead of describing a second, unrelated business.
 */

/** Absolute URL — schema.org consumers should not have to resolve paths. */
function abs(path: string) {
  return new URL(path, site.url).toString();
}

export const PRACTICE_ID = `${site.url}#practice`;

export default function StructuredData() {
  const practitioner = {
    "@type": "Person",
    "@id": `${site.url}#practitioner`,
    name: site.practitioner,
    jobTitle: site.practitionerTitle || site.discipline,
    image: site.portrait ? abs(site.portrait) : undefined,
    url: abs("/about/"),
    // Filled in from the admin panel; omitted entirely while empty.
    hasCredential: site.credentials.length ? site.credentials : undefined,
    worksFor: { "@id": PRACTICE_ID },
  };

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": PRACTICE_ID,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    email: site.email,
    // E.164, which is what schema.org consumers expect.
    telephone: phoneHref.replace(/^tel:/, ""),
    logo: abs("/images/logo-cream.png"),
    image: abs("/images/og-image.png"),
    medicalSpecialty: "Psychiatric",
    availableService: {
      "@type": "MedicalTherapy",
      name: site.discipline,
    },
    founder: practitioner,
    employee: practitioner,
    // Social profiles, which is how an entity gets tied to its other presences.
    // Blank until she adds them in the admin panel.
    sameAs: socialLinks.map((s) => s.url),
  };

  // A street address only when there is one to give. Without it the practice
  // is still eligible for "near me" style results through areaServed, which
  // is the right shape for someone who does not publish a clinic address.
  if (site.inPerson && site.address.line1) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    };
  }
  if (site.serviceArea) {
    data.areaServed = { "@type": "Place", name: site.serviceArea };
  }

  // Deliberately no openingHours. Becky's hours are written as
  // "By appointment" and "Limited availability", which schema.org has no way
  // to express — it wants clock times. Publishing invented times such as
  // 09:00-17:00 could send someone to a closed door, which matters more here
  // than a marginally richer listing. Add openingHoursSpecification only if
  // she moves to real fixed hours.

  return <JsonLd data={data} />;
}
