import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Hammer, TreePine, Shield, Users } from "lucide-react";
import imgHero from "@/assets/hero-byggprojekt-jamtland.jpg";
import { pastProjects } from "@/lib/projects";
import TjansterSection from "@/components/TjansterSection";

export const metadata: Metadata = {
  title: "Byggfirma i Jämtland | Aronsgård Bygg & Service",
  description:
    "Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland. Nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader. Ring 073-800 09 79.",
  alternates: { canonical: "/" },
};


const values = [
  {
    icon: Hammer,
    title: "Bred erfarenhet",
    desc: "Allt från timmerhus till jordbruksbyggnader – vi har kunskapen som krävs.",
  },
  {
    icon: TreePine,
    title: "Lokal förankring",
    desc: "Vi utgår från Hallen och känner Jämtlands klimat och byggtraditioner.",
  },
  {
    icon: Shield,
    title: "Kvalitet först",
    desc: "Varje projekt genomförs med fokus på hållbarhet och noggrannhet.",
  },
  {
    icon: Users,
    title: "Flexibelt upplägg",
    desc: "Fast pris eller löpande kostnad – vi anpassar oss efter dig.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aronsgard-bygg.se/#business",
  name: "Aronsgård Bygg & Service",
  description:
    "Byggfirma i Jämtland – nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader.",
  url: "https://aronsgard-bygg.se",
  telephone: "+46738000979",
  email: "aronsgard.bos@icloud.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sportvägen 3 Lgh 1102",
    addressLocality: "Frösön",
    postalCode: "832 44",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 63.18, longitude: 14.5 },
  image: "https://aronsgard-bygg.se/images/og-aronsgard-bygg.jpg",
  priceRange: "$$",
  areaServed: { "@type": "State", name: "Jämtland" },
  sameAs: ["https://www.instagram.com/snickeridagboken/"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero – helskärm */}
      <section className="relative flex items-center" style={{ height: "calc(100vh - 48px)" }}>
        <Image
          src="/images/Nybyggnation_Vemdalen2.png"
          alt="Byggprojekt i Jämtland – Aronsgård Bygg & Service"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Textinnehåll */}
        <div className="relative z-10 container mx-auto px-8 md:px-16 py-40">
          <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-5">
            Byggfirma i Jämtland
          </p>
          <h1 className="text-white leading-tight mb-6 max-w-2xl">
            Aronsgård Bygg och Service
          </h1>
          <p className="text-white/70 text-lg max-w-lg leading-relaxed mb-10">
            Bred erfarenhet inom nybyggnation, renoveringar, takbyten och
            finsnickeri. Vi utgår från Hallen och verkar i hela Jämtland.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-transparent border-2 border-primary text-white hover:bg-primary transition-colors">
              <Link href="/kontakt">Begär offert</Link>
            </Button>
            <Button size="lg" asChild className="bg-white/10 border border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <a href="tel:+46738000979" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                073-800 09 79
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Fördelsbanner */}
      {(() => {
        const items = [
          "10+ års erfarenhet",
          "100+ genomförda projekt",
          "Hela Jämtland",
          "Fast pris på totalentreprenad",
          "ROT-avdrag tillämpas",
          "Kostnadsfri offert",
          "Timmerhus & lösvirkeshus",
          "Jordbruksbyggnader",
          "Finsnickeri & möbler",
          "Löpande kostnad eller fast pris",
        ];
        const doubled = [...items, ...items];
        return (
          <div className="bg-foreground overflow-hidden py-3.5 select-none">
            <div className="flex animate-marquee whitespace-nowrap gap-0">
              {doubled.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-white text-sm font-medium px-6">
                  <span className="text-white/30">|</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Om oss */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Bild */}
            <div className="relative rounded-xl overflow-hidden self-stretch min-h-64">
              <Image
                src="/images/Robin om oss.jpeg"
                alt="Robin från Aronsgård Bygg & Service på byggarbetsplatsen"
                fill
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
            {/* Text */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om oss
              </p>
              <h2 className="mb-4">Erfaren byggfirma i Hallen, Jämtland</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Aronsgård Bygg och Service grundades 2018 av Robin Aronsson med
                ett tydligt mål – att leverera solida byggen med genuint hantverk.
                Sedan starten har vi byggt upp ett brett kontaktnät av pålitliga
                hantverkare och genomfört projekt av alla storlekar, från små
                snickeriuppdrag till fullskaliga nybyggnationer. Vi värdesätter
                ett nära samarbete med varje kund och är stolta över de långsiktiga
                relationer som vuxit fram längs vägen.
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <v.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold font-sans mb-0.5">{v.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Läs mer om oss <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projekt / Tjänster */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Våra tjänster
            </p>
            <h2 className="mb-4">Vad vi bygger</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Vi erbjuder ett brett utbud av byggtjänster i Jämtland – från
              nybyggnation och renoveringar till finsnickeri och takbyten.
            </p>
          </div>
          <TjansterSection />
        </div>
      </section>

      {/* Utvalda projekt */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Tidigare arbeten
              </p>
              <h2>Utvalda projekt</h2>
            </div>
            <Link
              href="/projekt"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Se alla projekt <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["nybyggnation-rodstugan", "ladgard-balkarbete", "inredning-storhogna"]
              .map((slug) => pastProjects.find((p) => p.slug === slug)!)
              .map((p) => (
              <Link
                key={p.slug}
                href="/projekt"
                className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.imgAlt}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                    {p.category}
                  </span>
                  <h3 className="text-base font-serif mb-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {p.location} · {p.year}
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                    {p.shortDesc}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium gap-1 mt-4">
                    Läs mer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Kom igång
          </p>
          <h2 className="mb-4">
            Redo att starta ditt byggprojekt?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Vi erbjuder fast pris på totalentreprenad eller arbete på löpande
            kostnad. ROT-avdrag tillämpas där det är aktuellt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link href="/kontakt">Kontakta oss idag</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+46738000979" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ring oss
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
