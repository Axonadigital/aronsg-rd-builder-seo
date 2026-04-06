import type { Metadata } from "next";
import KontaktClient from "./KontaktClient";

export const metadata: Metadata = {
  title: "Kontakt – Byggfirma i Jämtland | Aronsgård Bygg",
  description:
    "Kontakta Aronsgård Bygg & Service för offert på byggprojekt i Jämtland. Ring 073-800 09 79 eller maila aronsgard.bos@icloud.com.",
  alternates: { canonical: "/kontakt" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: "https://aronsgard-bygg.se/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kontakt",
      item: "https://aronsgard-bygg.se/kontakt",
    },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <KontaktClient />
    </>
  );
}
