import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-byggprojekt-jamtland.jpg";

const OmOss = () => (
  <Layout>
    <SEOHead
      title="Om oss – Byggfirma i Hallen | Aronsgård Bygg"
      description="Lär känna Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland med bred erfarenhet inom timmerhus och byggbranschen. Kvalitet och hållbarhet."
      canonical="/om-oss"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://aronsgard-bygg.se/" },
        { "@type": "ListItem", "position": 2, "name": "Om oss", "item": "https://aronsgard-bygg.se/om-oss" }
      ]
    })}} />

    <Breadcrumbs items={[{ label: "Om oss" }]} />

    <article className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>Om Aronsgård Bygg & Service</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Aronsgård Bygg & Service är en byggfirma med bred erfarenhet inom byggbranschen och timmerhus. Vi utgår ifrån Hallen i Jämtland och tar oss an projekt med fokus på kvalitet, planering och hållbara lösningar i hela regionen.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Vi utför allt från lösvirkeshus samt om- och tillbyggnader till takbyten, fasadrenoveringar och jordbruksbyggnader godkända av Länsstyrelsen. Vår filosofi är enkel: varje projekt förtjänar samma omsorg och noggrannhet, oavsett storlek.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Oavsett om du vill ha fast pris på totalentreprenad eller arbeta på löpande kostnad kan vi anpassa oss efter ditt projekt. ROT-avdrag används där det är aktuellt, och vi ser alltid till att du som kund har full insyn i processen.
            </p>

            <h2 className="mt-10 mb-4">Varför välja oss?</h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Bred erfarenhet</strong> – Vi har arbetat med allt från timmerhus till jordbruksbyggnader och har den kunskap som krävs för att leverera kvalitet i varje projekt.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Lokal förankring</strong> – Vi utgår ifrån Hallen och känner de lokala förutsättningarna i Jämtland – klimat, markförhållanden och byggtraditioner.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Flexibel prissättning</strong> – Välj mellan totalentreprenad med fast pris eller arbete på löpande kostnad. Vi anpassar oss efter dig.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Hållbart byggande</strong> – Vi prioriterar material och metoder som håller över tid och minimerar miljöpåverkan.</span>
              </li>
            </ul>

            <div className="mt-8">
              <Button variant="hero" asChild>
                <Link to="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={heroImg}
              alt="Byggarbetsplats med trästomme i jämtländskt vinterlandskap"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </article>
  </Layout>
);

export default OmOss;
