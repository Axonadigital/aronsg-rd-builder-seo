import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const Integritetspolicy = () => (
  <Layout>
    <SEOHead
      title="Integritetspolicy | Aronsgård Bygg & Service"
      description="Läs Aronsgård Bygg & Services integritetspolicy. Så hanterar vi dina personuppgifter i enlighet med GDPR."
      canonical="/integritetspolicy"
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Hem", "item": "https://aronsgard-bygg.se/" },
        { "@type": "ListItem", "position": 2, "name": "Integritetspolicy", "item": "https://aronsgard-bygg.se/integritetspolicy" }
      ]
    })}} />

    <Breadcrumbs items={[{ label: "Integritetspolicy" }]} />

    <article className="section-padding">
      <div className="container-narrow mx-auto px-4">
        <h1 className="mb-8">Integritetspolicy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p>
            Aronsgård Bygg & Service värnar om din personliga integritet. Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR).
          </p>

          <h2>Personuppgiftsansvarig</h2>
          <p>
            Aronsgård Bygg & Service<br />
            Sportvägen 3 Lgh 1102, 832 44 Frösön<br />
            E-post: aronsgard.bos@icloud.com<br />
            Telefon: 073-800 09 79
          </p>

          <h2>Vilka uppgifter samlar vi in?</h2>
          <p>
            Vi samlar in personuppgifter som du frivilligt lämnar till oss, exempelvis när du kontaktar oss via telefon, e-post eller kontaktformulär. Det kan vara namn, telefonnummer, e-postadress och information om ditt byggprojekt.
          </p>

          <h2>Varför behandlar vi dina uppgifter?</h2>
          <p>
            Vi behandlar dina uppgifter för att kunna svara på dina förfrågningar, lämna offerter, genomföra byggprojekt och uppfylla avtalsenliga åtaganden. Den rättsliga grunden för behandlingen är samtycke eller fullgörande av avtal.
          </p>

          <h2>Hur länge sparar vi dina uppgifter?</h2>
          <p>
            Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål för vilka de samlades in, eller så länge det krävs enligt lag (exempelvis bokföringslagen).
          </p>

          <h2>Dina rättigheter</h2>
          <p>
            Du har rätt att begära tillgång till, rättelse av, radering av och begränsning av behandlingen av dina personuppgifter. Du har även rätt att invända mot behandlingen och att få dina uppgifter överförda (dataportabilitet). Kontakta oss på aronsgard.bos@icloud.com om du vill utöva dina rättigheter.
          </p>

          <h2>Cookies</h2>
          <p>
            Denna webbplats använder nödvändiga cookies för att webbplatsen ska fungera korrekt. Vi använder inga spårningscookies eller tredjepartscookies för marknadsföring.
          </p>

          <h2>Ändringar i policyn</h2>
          <p>
            Vi kan komma att uppdatera denna integritetspolicy. Den senaste versionen finns alltid tillgänglig på denna sida. Senast uppdaterad: april 2026.
          </p>
        </div>
      </div>
    </article>
  </Layout>
);

export default Integritetspolicy;
