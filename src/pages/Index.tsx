import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Hammer, TreePine, Shield, Users } from "lucide-react";
import heroImg from "@/assets/hero-byggprojekt-jamtland.jpg";
import imgNybyggnation from "@/assets/projekt-nybyggnation.jpg";
import imgTillbyggnad from "@/assets/tjanst-tillbyggnad.jpg";
import imgRenovering from "@/assets/projekt-renovering.jpg";
import imgTakbyte from "@/assets/tjanst-takbyte.jpg";
import imgFinsnickeri from "@/assets/projekt-finsnickeri.jpg";

const projects = [
  { title: "Nybyggnation", slug: "nybyggnation", img: imgNybyggnation, desc: "Lösvirkeshus, timmerhus och jordbruksbyggnader – vi bygger från grunden." },
  { title: "Om- & tillbyggnader", slug: "om-och-tillbyggnader", img: imgTillbyggnad, desc: "Utöka eller förnya ditt hem med professionella lösningar." },
  { title: "Renoveringar", slug: "renoveringar", img: imgRenovering, desc: "Fasadrenoveringar, badrum, kök och helrenoveringar." },
  { title: "Takbyten", slug: "takbyten", img: imgTakbyte, desc: "Komplett takbyte med klimatanpassade material." },
  { title: "Finsnickeri", slug: "finsnickeri", img: imgFinsnickeri, desc: "Skräddarsytt snickeri, inredning och detaljarbeten." },
];

const values = [
  { icon: Hammer, title: "Bred erfarenhet", desc: "Allt från timmerhus till jordbruksbyggnader – vi har kunskapen som krävs." },
  { icon: TreePine, title: "Lokal förankring", desc: "Vi utgår från Hallen och känner Jämtlands klimat och byggtraditioner." },
  { icon: Shield, title: "Kvalitet först", desc: "Varje projekt genomförs med fokus på hållbarhet och noggrannhet." },
  { icon: Users, title: "Flexibelt upplägg", desc: "Fast pris eller löpande kostnad – vi anpassar oss efter dig." },
];

const Index = () => (
  <Layout>
    <SEOHead
      title="Byggfirma i Jämtland | Aronsgård Bygg & Service"
      description="Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland. Nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader. Ring 073-800 09 79."
      canonical="/"
    />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://aronsgard-bygg.se/#business",
      "name": "Aronsgård Bygg & Service",
      "description": "Byggfirma i Jämtland – nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader.",
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
      "geo": { "@type": "GeoCoordinates", "latitude": 63.18, "longitude": 14.50 },
      "image": "https://aronsgard-bygg.se/images/og-aronsgard-bygg.jpg",
      "priceRange": "$$",
      "areaServed": { "@type": "State", "name": "Jämtland" },
      "sameAs": ["https://www.instagram.com/snickeridagboken/"]
    })}} />

    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Byggprojekt med trästomme i vinterlandskap i Jämtland"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 py-24">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in">Byggfirma i Jämtland</p>
          <h1 className="text-secondary-foreground animate-fade-in-up">
            Vi bygger med
            <span className="text-primary"> kvalitet</span> från grund till tak
          </h1>
          <p className="mt-6 text-secondary-foreground/70 text-lg md:text-xl max-w-xl leading-relaxed">
            Bred erfarenhet inom nybyggnation, renoveringar, takbyten och finsnickeri. Vi utgår från Hallen och verkar i hela Jämtland.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">
                Begär offert
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="tel:+46738000979">
                <Phone className="w-5 h-5" />
                073-800 09 79
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Om oss */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Om oss</p>
            <h2 className="mb-6">Erfaren byggfirma i Hallen, Jämtland</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Aronsgård Bygg & Service är en byggfirma med bred erfarenhet inom byggbranschen och timmerhus. Vi tar oss an projekt med fokus på kvalitet, planering och hållbara lösningar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Oavsett om du vill ha fast pris på totalentreprenad eller arbeta på löpande kostnad kan vi anpassa oss efter ditt projekt. ROT-avdrag används där det är aktuellt.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-sans mb-1">{v.title}</h3>
                    <p className="text-muted-foreground text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/om-oss">
                  Läs mer om oss
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroImg}
                alt="Byggarbetsplats med trästomme i jämtländskt landskap"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden lg:block">
              <p className="text-3xl font-bold font-serif">10+</p>
              <p className="text-sm font-medium">års erfarenhet</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Projekt */}
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Våra projekt</p>
          <h2 className="mb-4">Vad vi bygger</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vi erbjuder ett brett utbud av byggtjänster i Jämtland – från nybyggnation och renoveringar till finsnickeri och takbyten.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((s) => (
            <Link
              key={s.slug}
              to={`/projekt/${s.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} – byggprojekt i Jämtland`}
                  width={896}
                  height={672}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="inline-flex items-center text-primary text-sm font-semibold gap-1">
                  Se projekt <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/projekt">
              Se alla projekt
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Kom igång</p>
        <h2 className="text-secondary-foreground mb-4">Redo att starta ditt byggprojekt?</h2>
        <p className="text-secondary-foreground/60 max-w-xl mx-auto mb-10 text-lg">
          Vi erbjuder fast pris på totalentreprenad eller arbete på löpande kostnad. ROT-avdrag tillämpas där det är aktuellt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/kontakt">Kontakta oss idag</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="tel:+46738000979">
              <Phone className="w-5 h-5" />
              Ring oss
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
