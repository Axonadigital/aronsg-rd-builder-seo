import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import imgLosvirkeshus from "@/assets/tjanst-losvirkeshus.jpg";
import imgTimmerhus from "@/assets/tjanst-timmerhus.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFasad from "@/assets/tjanst-fasadrenovering.jpg";
import imgJordbruk from "@/assets/tjanst-jordbruksbyggnad.jpg";
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
  losvirkeshus: {
    title: "Lösvirkeshus",
    metaTitle: "Lösvirkeshus i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Vi bygger lösvirkeshus i Jämtland med fokus på kvalitet och hållbarhet. Fast pris eller löpande kostnad. Kontakta oss för offert.",
    img: imgLosvirkeshus,
    alt: "Nybyggnation av lösvirkeshus i Jämtland",
    intro: "Vi bygger lösvirkeshus i Jämtland och hela regionen – från grunden och upp. Varje projekt planeras noggrant för att leverera ett hem som håller i generationer.",
    content: [
      "Ett lösvirkeshus byggs med löst virke – bärande stomme, regelstomme, isolering och beklädnad sätts ihop på plats. Det ger stor frihet i utformningen och möjligheten att anpassa huset helt efter dina önskemål och tomtens förutsättningar.",
      "Vi på Aronsgård Bygg & Service har bred erfarenhet av att bygga lösvirkeshus i Jämtland. Vi tar ansvar för hela processen – från planering och materialanskaffning till färdigt resultat. Oavsett om du vill ha en enplansvilla, ett hus med källare eller ett hus i flera plan, kan vi hjälpa dig att förverkliga din dröm.",
      "Vi erbjuder fast pris på totalentreprenad eller arbete på löpande kostnad, beroende på vad som passar ditt projekt bäst. ROT-avdrag tillämpas där det är aktuellt."
    ],
    features: ["Skräddarsydda lösningar", "Hög energieffektivitet", "Totalentreprenad eller löpande kostnad", "ROT-avdrag där aktuellt", "Lokal förankring i Jämtland"]
  },
  timmerhus: {
    title: "Timmerhus",
    metaTitle: "Timmerhus i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Professionell timmerhusbyggnation i Jämtland. Traditionellt hantverk med modern komfort. Ring 073-800 09 79 för offert.",
    img: imgTimmerhus,
    alt: "Traditionellt timmerhusbygge med handhuggna stockar",
    intro: "Timmerhus är en del av det svenska kulturarvet, och vi på Aronsgård Bygg & Service har bred erfarenhet inom timmerhusbyggnation i Jämtland.",
    content: [
      "Ett timmerhus utstrålar värme och karaktär. Med massiva timmerstockar som bärande konstruktion skapas ett hus med unika egenskaper – naturlig andning, hög hållbarhet och en tidlös estetik som smälter in i det jämtländska landskapet.",
      "Vi arbetar med både traditionella metoder och moderna lösningar för att skapa timmerhus som kombinerar det bästa av två världar. Från materialval och dimensionering till slutbesiktning – vi tar hand om varje steg i processen.",
      "Våra timmerhus byggs för att stå i generationer. Vi utgår ifrån Hallen och tar oss an timmerhusprojekt i hela Jämtland och omgivande regioner."
    ],
    features: ["Erfarenhet av timmerhus", "Traditionellt hantverk", "Modern komfort", "Hållbara material", "Anpassat efter dina önskemål"]
  },
  "om-och-tillbyggnader": {
    title: "Om- och tillbyggnader",
    metaTitle: "Om- och tillbyggnader i Jämtland | Aronsgård Bygg",
    metaDesc: "Professionella om- och tillbyggnader i Jämtland. Utöka ditt hem med kvalitet. Fast pris eller löpande. Kontakta Aronsgård Bygg & Service.",
    img: imgTillbyggnad,
    alt: "Tillbyggnad av hus i Jämtland med träkonstruktion",
    intro: "Behöver du mer utrymme, ett nytt kök eller vill modernisera ditt hem? Vi genomför om- och tillbyggnader i Jämtland med samma kvalitetstänk som vid nybyggnation.",
    content: [
      "En om- eller tillbyggnad är ett utmärkt sätt att öka boyttan, höja standarden och anpassa ditt hem efter förändrade behov – utan att behöva flytta. Vi ser till att tillbyggnaden smälter in med det befintliga huset, både konstruktionsmässigt och estetiskt.",
      "Vi hanterar allt från enklare renoveringar till större tillbyggnadsprojekt. Oavsett om det handlar om att lägga till ett rum, bygga en altan med tak eller renovera ett helt våningsplan – vi planerar och genomför projektet med omsorg.",
      "Aronsgård Bygg & Service erbjuder om- och tillbyggnader i hela Jämtland. Vi kan arbeta med fast pris på totalentreprenad eller löpande kostnad, och ROT-avdrag används där det är aktuellt."
    ],
    features: ["Sömlös integration med befintligt hus", "Köksrenoveringar", "Tillbyggnader och altaner", "ROT-avdrag", "Fast pris eller löpande"]
  },
  takbyten: {
    title: "Takbyten",
    metaTitle: "Takbyten i Jämtland | Aronsgård Bygg & Service",
    metaDesc: "Professionella takbyten i Jämtland. Komplett takbyte med material av hög kvalitet. Ring 073-800 09 79 för offert.",
    img: imgTakbyte,
    alt: "Takbyte på hus i Jämtland med ny takbeläggning",
    intro: "Ett takbyte är en stor investering som skyddar ditt hem och höjer dess värde. Vi utför kompletta takbyten i Jämtland med material av högsta kvalitet.",
    content: [
      "Taket är husets viktigaste skydd mot väder och vind. I Jämtlands krävande klimat med tunga snölaster och kraftiga temperaturväxlingar ställs höga krav på takets konstruktion och material. Ett välutfört takbyte ger trygghet i många år framöver.",
      "Vi utför hela processen – från rivning av gammalt tak till läktning, undertak, isolering och ny takbeläggning. Vi arbetar med beprövade material som tål det nordiska klimatet och ser till att arbetet utförs korrekt och effektivt.",
      "Aronsgård Bygg & Service erbjuder takbyten i Hallen, Frösön och hela Jämtland. Kontakta oss för en kostnadsfri offert."
    ],
    features: ["Komplett takbyte", "Klimatanpassade material", "Isolering och ventilation", "Plåt- och betongtak", "Garanti på utfört arbete"]
  },
  fasadrenoveringar: {
    title: "Fasadrenoveringar",
    metaTitle: "Fasadrenoveringar i Jämtland | Aronsgård Bygg",
    metaDesc: "Professionell fasadrenovering i Jämtland. Panel, isolering och målning. Ge ditt hus nytt liv. Kontakta Aronsgård Bygg & Service.",
    img: imgFasad,
    alt: "Fasadrenovering av hus med ny panel och målning",
    intro: "En fasadrenovering ger ditt hus nytt liv och skyddar det mot fukt och väder. Vi utför fasadrenoveringar i Jämtland med professionellt resultat.",
    content: [
      "Fasaden är husets ansikte utåt, och den utsätts dagligen för sol, regn, snö och kyla. Med åren kan panel spricka, färg flagna och isolering försämras. En professionell fasadrenovering åtgärdar dessa problem och ger huset ett fräscht utseende.",
      "Vi hanterar alla moment i en fasadrenovering – byte av panel, tilläggsisolering, fogning, grundning och slutmålning. Vi kan också byta fönster och dörrar i samband med fasadrenoveringen för bästa resultat.",
      "Oavsett om det gäller en äldre timmerstuga eller ett modernt hus i Frösön – vi anpassar oss efter husets karaktär och dina önskemål. ROT-avdrag tillämpas där det är aktuellt."
    ],
    features: ["Panelbyte och reparation", "Tilläggsisolering", "Professionell målning", "Fönster- och dörrbyte", "ROT-avdrag"]
  },
  jordbruksbyggnader: {
    title: "Jordbruksbyggnader",
    metaTitle: "Jordbruksbyggnader i Jämtland | Aronsgård Bygg",
    metaDesc: "Jordbruksbyggnader godkända av Länsstyrelsen i Jämtland. Ekonomibyggnader, ladugårdar och förråd. Ring 073-800 09 79.",
    img: imgJordbruk,
    alt: "Röd jordbruksbyggnad i jämtländskt landskap med fjäll i bakgrunden",
    intro: "Vi bygger jordbruksbyggnader godkända av Länsstyrelsen i Jämtland. Ekonomibyggnader, ladugårdar och förråd anpassade för verksamhetens behov.",
    content: [
      "Jordbruk i Jämtland ställer specifika krav på ekonomibyggnader – de ska tåla tunga snölaster, vara funktionella och möta alla krav som Länsstyrelsen ställer. Vi har erfarenhet av att planera och bygga jordbruksbyggnader som uppfyller alla dessa krav.",
      "Vi bygger allt från ladugårdar och maskinhaller till förråd och stall. Varje projekt planeras i nära samarbete med dig som kund för att säkerställa att byggnaden fungerar optimalt för din verksamhet.",
      "Aronsgård Bygg & Service utgår ifrån Hallen och har god kännedom om de lokala förutsättningarna i Jämtland. Vi hjälper gärna till med ansökningar och kontakt med myndigheter."
    ],
    features: ["Godkänt av Länsstyrelsen", "Ladugårdar och stall", "Maskinhaller", "Förråd och ekonomibyggnader", "Hjälp med tillstånd"]
  }
};

const TjanstDetalj = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  if (!service) return <NotFound />;

  return (
    <Layout>
      <SEOHead title={service.metaTitle} description={service.metaDesc} canonical={`/tjanster/${slug}`} />
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
          { "@type": "ListItem", "position": 2, "name": "Tjänster", "item": "https://aronsgard-bygg.se/tjanster" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://aronsgard-bygg.se/tjanster/${slug}` }
        ]
      })}} />

      <Breadcrumbs items={[{ label: "Tjänster", to: "/tjanster" }, { label: service.title }]} />

      <article className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="mb-6">{service.title} i Jämtland</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.intro}</p>
              {service.content.map((p, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed mb-4">{p}</p>
              ))}
              <h2 className="text-2xl mt-8 mb-4">Vad ingår?</h2>
              <ul className="space-y-2 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/80">
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
            <div className="rounded-lg overflow-hidden">
              <img
                src={service.img}
                alt={service.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default TjanstDetalj;
