import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CircularGallery from "@/components/ui/circular-gallery";
import { pastProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekt – Byggfirma i Jämtland | Aronsgård Bygg & Service",
  description:
    "Se genomförda projekt av Aronsgård Bygg & Service – nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader i Jämtland.",
  alternates: { canonical: "/projekt" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://aronsgard-bygg.se/" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://aronsgard-bygg.se/projekt" },
  ],
};

export default function ProjektPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Projekt" }]} />

      <div className="container mx-auto px-4 md:px-8 pt-2 pb-4">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
          Tidigare arbeten
        </p>
        <h1 className="mb-4">Genomförda projekt</h1>
        <p className="text-muted-foreground max-w-xl leading-relaxed mb-2">
          Här är ett urval av projekt Robin har genomfört – från nybyggnation
          och grundarbete till finsnickeri och lantbruksbyggnader. Vill du se
          mer finns fler bilder och projekt på{" "}
          <a
            href="https://www.instagram.com/snickeridagboken/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            @snickeridagboken
          </a>{" "}
          på Instagram.
        </p>
        <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mt-4">
          Dra och rotera · Klicka för att läsa mer
        </p>
      </div>

      {/* Karusell med luft till rubrik och footer */}
      <div className="px-4 pb-20 pt-4">
        <div style={{ height: "520px", overflow: "clip" }}>
          <CircularGallery projects={pastProjects} />
        </div>
      </div>
    </>
  );
}
