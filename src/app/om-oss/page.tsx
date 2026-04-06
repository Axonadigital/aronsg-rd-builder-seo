import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om oss – Byggfirma i Hallen | Aronsgård Bygg",
  description:
    "Lär känna Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland med bred erfarenhet inom timmerhus och byggbranschen. Kvalitet och hållbarhet.",
  alternates: { canonical: "/om-oss" },
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
      name: "Om oss",
      item: "https://aronsgard-bygg.se/om-oss",
    },
  ],
};

const stats = [
  { value: "2018", label: "Grundat" },
  { value: "100+", label: "Genomförda projekt" },
  { value: "Hela Jämtland", label: "Verksamhetsområde" },
];

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Om oss" }]} />

      {/* Intro – bild + text */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Bild */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:self-stretch min-h-96">
              <Image
                src="/images/Robin om oss.jpeg"
                alt="Robin Aronsson – Aronsgård Bygg & Service"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om oss
              </p>
              <h1 className="mb-6">Byggt på erfarenhet och förtroende</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                Aronsgård Bygg och Service grundades 2018 av Robin Aronsson.
                Det som började som ett litet snickeriföretag har vuxit till en
                fullskalig byggfirma med uppdrag i hela Jämtland.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-5">
                Under åren har vi haft förmånen att arbeta med fantastiska
                kunder och byggt upp ett pålitligt nätverk av hantverkare som
                delar vår syn på kvalitet och noggrannhet. Varje projekt – stort
                som litet – bär vår signatur och är något vi är genuint stolta
                över.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Vi tror på öppen kommunikation, realistiska löften och ett
                hantverk som håller över tid. Det är så vi bygger långsiktiga
                relationer – med kunder, samarbetspartners och det samhälle vi
                är en del av.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-border mb-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-serif font-semibold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero" asChild>
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax – byt ut bilden när naturbilden är klar */}
      <div
        className="parallax-bg h-56 md:h-72"
        style={{ backgroundImage: "url('/images/Parallax%20naturbild.jpg')" }}
      />

      {/* Vår filosofi */}
      <section className="py-16 px-4 md:px-8 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Vår filosofi
          </p>
          <h2 className="mb-6">Vi bygger mer än hus</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            För oss handlar byggande om mer än att sätta upp väggar och lägga
            tak. Det handlar om att lyssna på kunden, förstå platsen och
            leverera något som känns rätt – både direkt och om tjugo år.
            Jämtlands natur och klimat ställer höga krav, och det är krav vi
            välkomnar.
          </p>
        </div>
      </section>
    </>
  );
}
