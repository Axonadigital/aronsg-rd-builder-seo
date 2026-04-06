import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import imgNybyggnation from "@/assets/projekt-nybyggnation.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgRenovering from "@/assets/projekt-renovering.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFinsnickeri from "@/assets/projekt-finsnickeri.jpg";
import NotFound from "./NotFound";

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDesc: string;
  img: string;
  alt: string;
  intro: string;
  content: string[];
  features: string[];
}

const serviceData: Record<string, ServiceData> = {
  nybyggnation: {
    title: "Nybyggnation",
    metaTitle: "Nybyggnation i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Vi bygger lösvirkeshus, timmerhus och jordbruksbyggnader i Jämtland. Kvalitet från grunden. Ring 073-800 09 79 för offert.",
    img: imgNybyggnation,
    alt: "Nybyggnation av trähus i Jämtlands vinterlandskap",
    intro: "Vi bygger från grunden – lösvirkeshus, timmerhus och jordbruksbyggnader i hela Jämtland. Varje projekt planeras noggrant för att leverera ett resultat som håller i generationer.",
    content: [
      "Nybyggnation är kärnan i vår verksamhet. Vi har bred erfarenhet av att bygga lösvirkeshus med modern konstruktion och stor frihet i utformningen, samt traditionella timmerhus som kombinerar klassiskt hantverk med modern komfort.",
      "Vi bygger även jordbruksbyggnader godkända av Länsstyrelsen – ladugårdar, maskinhaller, förråd och stall anpassade för Jämtlands klimat med tunga snölaster och hårda vintrar.",
      "Oavsett om du vill ha ett enplanshus, timmerstuga eller en ekonomibyggnad tar vi ansvar för hela processen – från planering och materialanskaffning till färdigt resultat. Vi erbjuder fast pris på totalentreprenad eller arbete på löpande kostnad."
    ],
    features: ["Lösvirkeshus – skräddarsydda lösningar", "Timmerhus – traditionellt hantverk", "Jordbruksbyggnader godkända av Länsstyrelsen", "Totalentreprenad eller löpande kostnad", "ROT-avdrag där aktuellt", "Lokal förankring i Jämtland"]
  },
  "om-och-tillbyggnader": {
    title: "Om- & tillbyggnader",
    metaTitle: "Om- och tillbyggnader i Jämtland | Aronsgård Bygg",
    metaDesc: "Professionella om- och tillbyggnader i Jämtland. Utöka ditt hem med kvalitet. Kontakta Aronsgård Bygg & Service.",
    img: imgTillbyggnad,
    alt: "Tillbyggnad av hus i Jämtland med träkonstruktion",
    intro: "Behöver du mer utrymme eller vill modernisera ditt hem? Vi genomför om- och tillbyggnader med samma kvalitetstänk som vid nybyggnation.",
    content: [
      "En om- eller tillbyggnad är ett utmärkt sätt att öka boyttan och anpassa ditt hem efter förändrade behov – utan att behöva flytta. Vi ser till att tillbyggnaden smälter in med det befintliga huset, både konstruktionsmässigt och estetiskt.",
      "Vi hanterar allt från enklare renoveringar till större tillbyggnadsprojekt – extra rum, altaner med tak, nya våningsplan och garage.",
      "Vi erbjuder om- och tillbyggnader i hela Jämtland med fast pris eller löpande kostnad. ROT-avdrag används där det är aktuellt."
    ],
    features: ["Sömlös integration med befintligt hus", "Tillbyggnader och altaner", "Garage och förråd", "Planlösningsförändringar", "ROT-avdrag", "Fast pris eller löpande"]
  },
  renoveringar: {
    title: "Renoveringar",
    metaTitle: "Renoveringar i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Professionella renoveringar i Jämtland – fasad, badrum, kök och helrenovering. Kontakta Aronsgård Bygg & Service för offert.",
    img: imgRenovering,
    alt: "Renovering av husfasad med ny panel och målning i Jämtland",
    intro: "Vi utför alla typer av renoveringar i Jämtland – från fasadrenoveringar och badrumsbyten till köksrenoveringar och helrenoveringar av hela fastigheter.",
    content: [
      "En renovering kan innebära allt från att byta ut en sliten fasad till att totalrenovera ett helt hem. Vi har erfarenhet av alla typer av renoveringsprojekt och ser till att resultatet håller hög kvalitet.",
      "Fasadrenoveringar är ett av våra specialområden – vi hanterar panelbyte, tilläggsisolering, fogning, grundning och slutmålning. Vi kan även byta fönster och dörrar i samband med arbetet.",
      "Oavsett om det gäller en äldre timmerstuga eller ett modernt hus anpassar vi oss efter husets karaktär och dina önskemål. ROT-avdrag tillämpas där det är aktuellt."
    ],
    features: ["Fasadrenoveringar", "Badrumsrenoveringar", "Köksbyten", "Helrenoveringar", "Tilläggsisolering", "Fönster- och dörrbyte"]
  },
  takbyten: {
    title: "Takbyten",
    metaTitle: "Takbyten i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Professionella takbyten i Jämtland. Komplett takbyte med klimatanpassade material. Ring 073-800 09 79 för offert.",
    img: imgTakbyte,
    alt: "Takbyte på hus i Jämtland med ny takbeläggning",
    intro: "Taket är husets viktigaste skydd. Vi utför kompletta takbyten i Jämtland med material av högsta kvalitet, anpassade för det nordiska klimatet.",
    content: [
      "I Jämtlands krävande klimat med tunga snölaster och kraftiga temperaturväxlingar ställs höga krav på takets konstruktion och material. Ett välutfört takbyte ger trygghet i många år framöver.",
      "Vi utför hela processen – från rivning av gammalt tak till läktning, undertak, isolering och ny takbeläggning. Vi arbetar med beprövade material som tål det nordiska klimatet.",
      "Kontakta oss för en kostnadsfri offert på takbyte i Hallen, Frösön och hela Jämtland."
    ],
    features: ["Komplett takbyte", "Klimatanpassade material", "Isolering och ventilation", "Plåt- och betongtak", "Garanti på utfört arbete", "ROT-avdrag"]
  },
  finsnickeri: {
    title: "Finsnickeri",
    metaTitle: "Finsnickeri i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Skräddarsytt finsnickeri i Jämtland – kök, inredning, möbler och detaljarbeten. Kontakta Aronsgård Bygg & Service.",
    img: imgFinsnickeri,
    alt: "Snickare arbetar med detaljerat träarbete i verkstad",
    intro: "Vi utför skräddarsytt finsnickeri i Jämtland – från platsbyggda kök och garderober till unika möbler och detaljerade träarbeten.",
    content: [
      "Finsnickeri handlar om precision och hantverk. Vi skapar skräddarsydda lösningar som passar just ditt hem – platsbyggda kök, garderober, bokhyllor, fönsterbänkar och andra inredningsdetaljer.",
      "Varje projekt börjar med en dialog om dina önskemål och behov. Vi tar fram förslag, väljer material tillsammans och levererar ett resultat som är unikt för dig.",
      "Vi arbetar med allt från klassiska trädetaljer till moderna, minimalistiska lösningar. Kvalitet och hållbarhet är alltid i fokus."
    ],
    features: ["Platsbyggda kök", "Garderober och förvaring", "Unika möbler", "Fönsterbänkar och lister", "Trappor", "Inredningsdetaljer"]
  }
};

const ProjektDetalj = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  if (!service) return <NotFound />;

  return (
    <Layout>
      <SEOHead title={service.metaTitle} description={service.metaDesc} canonical={`/projekt/${slug}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.metaDesc,
        "provider": { "@type": "LocalBusiness", "name": "Aronsgård Bygg & Service", "url": "https://aronsgard-bygg.se" },
        "areaServed": { "@type": "State", "name": "Jämtland" }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://aronsgard-bygg.se/" },
          { "@type": "ListItem", "position": 2, "name": "Projekt", "item": "https://aronsgard-bygg.se/projekt" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://aronsgard-bygg.se/projekt/${slug}` }
        ]
      })}} />

      <Breadcrumbs items={[{ label: "Projekt", to: "/projekt" }, { label: service.title }]} />

      <article className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h1 className="mb-6">{service.title} i Jämtland</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.intro}</p>
              {service.content.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed mb-4">{p}</p>
              ))}
              <h2 className="text-2xl mt-8 mb-4">Vad ingår?</h2>
              <ul className="space-y-3 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/kontakt">Begär offert</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+46738000979" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 073-800 09 79
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={service.img}
                alt={service.alt}
                width={896}
                height={672}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjektDetalj;
