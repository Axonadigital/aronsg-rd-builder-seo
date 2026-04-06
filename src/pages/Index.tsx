import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-byggprojekt-jamtland.jpg";
import imgTimmerhus from "@/assets/tjanst-timmerhus.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFasad from "@/assets/tjanst-fasadrenovering.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgLosvirkeshus from "@/assets/tjanst-losvirkeshus.jpg";
import imgJordbruk from "@/assets/tjanst-jordbruksbyggnad.jpg";

const services = [
  { title: "Lösvirkeshus", slug: "losvirkeshus", img: imgLosvirkeshus, desc: "Nybyggnation av lösvirkeshus med hög kvalitet och genomtänkt planering." },
  { title: "Timmerhus", slug: "timmerhus", img: imgTimmerhus, desc: "Traditionella timmerhus med modern komfort – hållbart och tidlöst." },
  { title: "Om- & tillbyggnader", slug: "om-och-tillbyggnader", img: imgTillbyggnad, desc: "Utöka eller förnya ditt hem med professionella om- och tillbyggnader." },
  { title: "Takbyten", slug: "takbyten", img: imgTakbyte, desc: "Komplett takbyte med material av högsta kvalitet och lång livslängd." },
  { title: "Fasadrenoveringar", slug: "fasadrenoveringar", img: imgFasad, desc: "Ge ditt hus nytt liv med professionell fasadrenovering." },
  { title: "Jordbruksbyggnader", slug: "jordbruksbyggnader", img: imgJordbruk, desc: "Jordbruksbyggnader godkända av Länsstyrelsen – planering och byggnation." },
];

const Index = () => (
  <Layout>
    <SEOHead
      title="Byggfirma i Jämtland | Aronsgård Bygg & Service"
      description="Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland. Timmerhus, lösvirkeshus, takbyten, fasadrenoveringar och jordbruksbyggnader. Ring 073-800 09 79."
      canonical="/"
    />

    {/* JSON-LD LocalBusiness */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://aronsgard-bygg.se/#business",
      "name": "Aronsgård Bygg & Service",
      "description": "Byggfirma i Jämtland med erfarenhet inom timmerhus, lösvirkeshus, takbyten, fasadrenoveringar och jordbruksbyggnader.",
      "url": "https://aronsgard-bygg.se",
      "telephone": "+46738000979",
      "email": "aronsgard.bos@icloud.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sportvägen 3 Lgh 1102",
        "addressLocality": "Frösön",
        "postalCode": "832 44",
        "addressRegion": "Jämtland",
        "addressCountry": "SE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 63.18,
        "longitude": 14.50
      },
      "image": "https://aronsgard-bygg.se/images/og-aronsgard-bygg.jpg",
      "priceRange": "$$",
      "areaServed": {
        "@type": "State",
        "name": "Jämtland"
      },
      "sameAs": ["https://www.instagram.com/snickeridagboken/"]
    })}} />

    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Byggprojekt med trästomme i vinterlandskap i Jämtland"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-charcoal-deep/70" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 py-20">
        <h1 className="text-primary-foreground max-w-2xl animate-fade-in-up">
          Kvalitetsbygge i Jämtland – från grund till tak
        </h1>
        <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed">
          Aronsgård Bygg & Service är en byggfirma med bred erfarenhet inom byggbranschen och timmerhus. Vi tar oss an projekt med fokus på kvalitet, planering och hållbara lösningar.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="hero" asChild>
            <Link to="/kontakt">Begär offert</Link>
          </Button>
          <Button variant="hero-outline" asChild>
            <a href="tel:+46738000979">
              <Phone className="w-5 h-5" />
              073-800 09 79
            </a>
          </Button>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="text-center mb-4">Våra tjänster</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Vi erbjuder ett brett utbud av byggtjänster i Jämtland och hela regionen. Oavsett om det gäller nybyggnation, renovering eller jordbruksbyggnader – vi levererar kvalitet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/tjanster/${s.slug}`}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} – byggtjänst i Jämtland`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium gap-1">
                  Läs mer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-secondary-foreground mb-4">Redo att starta ditt byggprojekt?</h2>
        <p className="text-secondary-foreground/70 max-w-xl mx-auto mb-8">
          Vi erbjuder fast pris på totalentreprenad eller arbete på löpande kostnad. ROT-avdrag tillämpas där det är aktuellt. Kontakta oss för en kostnadsfri offert.
        </p>
        <Button variant="hero" asChild>
          <Link to="/kontakt">Kontakta oss idag</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
