import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import imgLosvirkeshus from "@/assets/tjanst-losvirkeshus.jpg";
import imgTimmerhus from "@/assets/tjanst-timmerhus.jpg";
import imgJordbruk from "@/assets/tjanst-jordbruksbyggnad.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFasad from "@/assets/tjanst-fasadrenovering.jpg";
import imgFinsnickeri from "@/assets/projekt-finsnickeri.jpg";
import imgRenovering from "@/assets/projekt-renovering.jpg";

export const metadata: Metadata = {
  title: "Tjänster – Byggfirma i Jämtland | Aronsgård Bygg & Service",
  description:
    "Aronsgård Bygg & Service erbjuder nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader i Jämtland.",
  alternates: { canonical: "/tjanster" },
};

const categories = [
  {
    heading: "Nybyggnation",
    desc: "Vi bygger från grunden – lösvirkeshus, timmerhus och jordbruksbyggnader anpassade för Jämtlands klimat.",
    services: [
      {
        title: "Lösvirkeshus",
        slug: "losvirkeshus",
        img: imgLosvirkeshus,
        desc: "Nybyggnation av lösvirkeshus med hög kvalitet och genomtänkt planering.",
      },
      {
        title: "Timmerhus",
        slug: "timmerhus",
        img: imgTimmerhus,
        desc: "Traditionella timmerhus med modern komfort. Bred erfarenhet av timmerhusbyggnation i Jämtland.",
      },
      {
        title: "Jordbruksbyggnader",
        slug: "jordbruksbyggnader",
        img: imgJordbruk,
        desc: "Jordbruksbyggnader godkända av Länsstyrelsen – ladugårdar, maskinhaller och ekonomibyggnader.",
      },
    ],
  },
  {
    heading: "Renovering & Ombyggnad",
    desc: "Förnya, utöka eller renovera – vi hanterar allt från fasad till tak med fokus på hållbarhet.",
    services: [
      {
        title: "Om- och tillbyggnader",
        slug: "om-och-tillbyggnader",
        img: imgTillbyggnad,
        desc: "Utöka eller förnya ditt hem med professionella om- och tillbyggnader. ROT-avdrag tillämpas.",
      },
      {
        title: "Takbyten",
        slug: "takbyten",
        img: imgTakbyte,
        desc: "Komplett takbyte med klimatanpassade material. Lång livslängd och garanti på utfört arbete.",
      },
      {
        title: "Fasadrenoveringar",
        slug: "fasadrenoveringar",
        img: imgFasad,
        desc: "Ge ditt hus nytt liv med professionell fasadrenovering. Panel, isolering och målning.",
      },
      {
        title: "Helrenoveringar",
        slug: "renoveringar",
        img: imgRenovering,
        desc: "Komplett renovering av badrum, kök och bostäder – vi tar helhetsansvar från start till mål.",
      },
    ],
  },
  {
    heading: "Finsnickeri & Specialarbeten",
    desc: "Skräddarsydda detaljer som lyfter helheten – från inredning till unika snickerlösningar.",
    services: [
      {
        title: "Finsnickeri",
        slug: "finsnickeri",
        img: imgFinsnickeri,
        desc: "Skräddarsytt snickeri, inredning och detaljarbeten med hög precision och hantverk.",
      },
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://aronsgard-bygg.se/" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://aronsgard-bygg.se/tjanster" },
  ],
};

export default function TjansterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Tjänster" }]} />

      <article className="section-padding">
        <div className="container mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Tjänster
          </p>
          <h1 className="mb-4">Byggtjänster i Jämtland</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            Vi erbjuder ett brett utbud av byggtjänster – från nybyggnation av
            timmerhus och lösvirkeshus till takbyten, finsnickeri och
            helrenoveringar. Fast pris eller löpande kostnad.
          </p>

          {categories.map((cat) => (
            <div key={cat.heading} className="mb-20">
              <div className="mb-8 pb-4 border-b border-border">
                <h2 className="mb-2">{cat.heading}</h2>
                <p className="text-muted-foreground">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/tjanster/${s.slug}`}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.img}
                        alt={`${s.title} – Aronsgård Bygg & Service`}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                      <span className="inline-flex items-center text-primary text-sm font-medium gap-1">
                        Läs mer{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
