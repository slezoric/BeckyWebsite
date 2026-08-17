import { site, phoneHref } from "@/lib/site";

/**
 * schema.org MedicalBusiness JSON-LD for local search. Pulls from the client
 * info in src/lib/site.ts — fill in address/serviceArea there for richer results.
 */
export default function StructuredData() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: site.email,
    // E.164, which is what schema.org consumers expect.
    telephone: phoneHref.replace(/^tel:/, ""),
    medicalSpecialty: "Psychiatric",
    availableService: {
      "@type": "MedicalTherapy",
      name: site.discipline,
    },
  };

  if (site.inPerson && site.address.line1) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
    };
  }
  if (site.serviceArea) data.areaServed = site.serviceArea;

  return (
    <script
      type="application/ld+json"
      // The "<" escape is not cosmetic. JSON.stringify leaves "<" alone, so a
      // "</script>" typed into any CMS field would close this tag early and
      // let the rest of that field be parsed as markup. Becky edits these
      // values through /admin, so that input is not fully under our control.
      // < is valid JSON and parses back to "<" unchanged.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
