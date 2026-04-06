import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding flex flex-col items-center justify-center text-center min-h-[60vh]">
      <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="mb-4">Sidan hittades inte</h1>
      <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
        Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till
        startsidan eller kontakta oss om du behöver hjälp.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" asChild>
          <Link href="/">Till startsidan</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/kontakt">Kontakta oss</Link>
        </Button>
      </div>
    </section>
  );
}
