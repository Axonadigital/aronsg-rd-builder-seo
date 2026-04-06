import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import imgNybyggnation from "@/assets/projekt-nybyggnation.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgRenovering from "@/assets/projekt-renovering.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFinsnickeri from "@/assets/projekt-finsnickeri.jpg";

const projects = [
  { title: "Nybyggnation", slug: "nybyggnation", img: imgNybyggnation, desc: "Vi bygger lösvirkeshus, timmerhus och jordbruksbyggnader från grunden – med fokus på kvalitet, hållbarhet och genomtänkt planering anpassad för Jämtlands klimat." },
  { title: "Om- & tillbyggnader", slug: "om-och-tillbyggnader", img: imgTillbyggnad, desc: "Behöver du mer utrymme eller vill förnya ditt hem? Vi genomför om- och tillbyggnader som smälter in med befintlig arkitektur och höjer boendekvaliteten." },
  { title: "Renoveringar", slug: "renoveringar", img: imgRenovering, desc: "Fasadrenoveringar, badrumsrenoveringar, köksbyten och helrenoveringar – vi ger ditt hem nytt liv med professionellt resultat." },
  { title: "Takbyten", slug: "takbyten", img: imgTakbyte, desc: "Komplett takbyte med klimatanpassade material av högsta kvalitet. Vi hanterar hela processen från rivning till ny takbeläggning." },
  { title: "Finsnickeri", slug: "finsnickeri", img: imgFinsnickeri, desc: "Skräddarsytt snickeri för inredning, kök, möbler och detaljarbeten. Vi skapar unika lösningar med hantverk och precision." },
];

const Projekt = () => (
  <Layout>
    <SEOHead
      title="Byggprojekt i Jämtland | Aronsgård Bygg & Service"
      description="Se alla våra byggprojekt i Jämtland – nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader. Kontakta oss för offert."
      canonical="/projekt"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://aronsgard-bygg.se/" },
        { "@type": "ListItem", "position": 2, "name": "Projekt", "item": "https://aronsgard-bygg.se/projekt" }
      ]
    })}} />

    <Breadcrumbs items={[{ label: "Projekt" }]} />

    <section className="section-padding">
      <div className="container mx-auto">
        <h1>Våra byggprojekt i Jämtland</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
          Aronsgård Bygg & Service erbjuder ett komplett utbud av byggtjänster i Hallen, Frösön och hela Jämtland. Varje projekt genomförs med fokus på kvalitet, planering och hållbara lösningar. Vi erbjuder både fast pris på totalentreprenad och arbete på löpande kostnad, och ROT-avdrag används där det är aktuellt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {projects.map((s) => (
            <Link
              key={s.slug}
              to={`/projekt/${s.slug}`}
              className="group flex flex-col sm:flex-row bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} byggprojekt i Jämtland`}
                  width={896}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <h2 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">{s.title}</h2>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <span className="inline-flex items-center text-primary text-sm font-semibold gap-1">
                  Se projekt <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Projekt;
