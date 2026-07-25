import { site } from "@/lib/site";

/**
 * schema.org MedicalBusiness JSON-LD for local search.
 * TODO(becky): fill in real address, geo, hours, and areaServed before launch.
 */
export default function StructuredData() {
  const data = {
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
      name: "Ketamine-Assisted Psychotherapy",
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, build-time serialized content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
