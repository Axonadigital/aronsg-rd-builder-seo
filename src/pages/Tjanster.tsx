import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import imgLosvirkeshus from "@/assets/tjanst-losvirkeshus.jpg";
import imgTimmerhus from "@/assets/tjanst-timmerhus.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFasad from "@/assets/tjanst-fasadrenovering.jpg";
import imgJordbruk from "@/assets/tjanst-jordbruksbyggnad.jpg";

const services = [
  { title: "Lösvirkeshus", slug: "losvirkeshus", img: imgLosvirkeshus, desc: "Vi bygger lösvirkeshus från grunden med fokus på kvalitet och hållbarhet. Varje projekt planeras noggrant för att leverera ett hem som håller i generationer." },
  { title: "Timmerhus", slug: "timmerhus", img: imgTimmerhus, desc: "Med bred erfarenhet inom timmerhusbyggnation skapar vi traditionella och moderna timmerhus med omsorg om varje detalj." },
  { title: "Om- & tillbyggnader", slug: "om-och-tillbyggnader", img: imgTillbyggnad, desc: "Behöver du mer utrymme eller vill förnya ditt hem? Vi genomför om- och tillbyggnader som smälter in med befintlig arkitektur." },
  { title: "Takbyten", slug: "takbyten", img: imgTakbyte, desc: "Vi utför kompletta takbyten med material av högsta kvalitet. Ett nytt tak skyddar ditt hem och höjer dess värde." },
  { title: "Fasadrenoveringar", slug: "fasadrenoveringar", img: imgFasad, desc: "Ge ditt hus en ny fasad med professionell renovering. Vi hanterar allt från panel till isolering och målning." },
  { title: "Jordbruksbyggnader", slug: "jordbruksbyggnader", img: imgJordbruk, desc: "Vi bygger jordbruksbyggnader godkända av Länsstyrelsen. Ekonomibyggnader, ladugårdar och förråd anpassade för dina behov." },
];

const Tjanster = () => (
  <Layout>
    <SEOHead
      title="Byggtjänster i Jämtland | Aronsgård Bygg & Service"
      description="Se alla byggtjänster vi erbjuder i Jämtland – lösvirkeshus, timmerhus, takbyten, fasadrenoveringar, om- och tillbyggnader samt jordbruksbyggnader."
      canonical="/tjanster"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://aronsgard-bygg.se/" },
        { "@type": "ListItem", "position": 2, "name": "Tjänster", "item": "https://aronsgard-bygg.se/tjanster" }
      ]
    })}} />

    <Breadcrumbs items={[{ label: "Tjänster" }]} />

    <section className="section-padding">
      <div className="container mx-auto">
        <h1>Byggtjänster i Jämtland</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
          Aronsgård Bygg & Service erbjuder ett komplett utbud av byggtjänster i Hallen, Frösön och hela Jämtland. Vi utför allt från nybyggnation av lösvirkeshus och timmerhus till renoveringar och specialiserade jordbruksbyggnader. Varje projekt genomförs med fokus på kvalitet, planering och hållbara lösningar. Vi erbjuder både fast pris på totalentreprenad och arbete på löpande kostnad, och ROT-avdrag används där det är aktuellt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/tjanster/${s.slug}`}
              className="group flex flex-col sm:flex-row bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} byggtjänst i Jämtland`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <h2 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">{s.title}</h2>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium gap-1">
                  Läs mer om {s.title.toLowerCase()} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Tjanster;
