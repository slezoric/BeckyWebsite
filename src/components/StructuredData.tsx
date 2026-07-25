import { site } from "@/lib/site";

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
    telephone: site.phone,
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
      // JSON-LD is static, build-time serialized content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
