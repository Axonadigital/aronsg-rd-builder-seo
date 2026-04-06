import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Integritetspolicy | Aronsgård Bygg & Service",
  description:
    "Läs om hur Aronsgård Bygg & Service hanterar dina personuppgifter i enlighet med GDPR.",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Integritetspolicy" }]} />

      <article className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-8">Integritetspolicy</h1>

          <p className="text-muted-foreground mb-6">
            Senast uppdaterad: 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">Personuppgiftsansvarig</h2>
            <p className="text-foreground/80 leading-relaxed">
              Aronsgård Bygg & Service är personuppgiftsansvarig för behandlingen
              av dina personuppgifter. Kontaktuppgifter:{" "}
              <a
                href="mailto:aronsgard.bos@icloud.com"
                className="text-primary hover:underline"
              >
                aronsgard.bos@icloud.com
              </a>
              , telefon{" "}
              <a href="tel:+46738000979" className="text-primary hover:underline">
                073-800 09 79
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">Vilka uppgifter samlar vi in?</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Vi samlar in de uppgifter du frivilligt lämnar till oss, till exempel:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                Namn och kontaktuppgifter (e-post, telefon)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                Adress och projektbeskrivning vid offertförfrågan
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">Hur används uppgifterna?</h2>
            <p className="text-foreground/80 leading-relaxed">
              Dina uppgifter används för att besvara dina förfrågningar,
              upprätta offerter och kommunicera med dig om ditt byggprojekt. Vi
              delar inte dina uppgifter med tredje part utan ditt samtycke,
              förutom när det krävs enligt lag.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl mb-4">Dina rättigheter</h2>
            <p className="text-foreground/80 leading-relaxed">
              Du har rätt att begära tillgång till, rättelse eller radering av
              dina personuppgifter. Du kan också invända mot behandlingen eller
              begära begränsning. Kontakta oss på{" "}
              <a
                href="mailto:aronsgard.bos@icloud.com"
                className="text-primary hover:underline"
              >
                aronsgard.bos@icloud.com
              </a>{" "}
              för att utöva dina rättigheter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4">Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              Denna webbplats använder inga spårningscookies eller
              tredjepartscookies för marknadsföring.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-border">
            <Link href="/" className="text-primary hover:underline text-sm">
              ← Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
