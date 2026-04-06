import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Layout>
    <SEOHead
      title="Sidan hittades inte | Aronsgård Bygg & Service"
      description="Sidan du letar efter kunde inte hittas. Gå tillbaka till startsidan."
      canonical="/404"
    />
    <section className="section-padding text-center">
      <div className="container mx-auto">
        <h1 className="mb-4">404 – Sidan hittades inte</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till startsidan för att hitta det du söker.
        </p>
        <Button variant="hero" asChild>
          <Link to="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default NotFound;
