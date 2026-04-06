"use client";

import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function KontaktClient() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Kontakt" }]} />

      <section className="section-padding">
        <div className="container mx-auto">
          <h1>Kontakta oss</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Vill du ha en offert på ditt byggprojekt i Jämtland? Kontakta
            Aronsgård Bygg & Service så återkommer vi så snart vi kan. Vi
            erbjuder kostnadsfria offertförfrågningar för alla typer av
            byggprojekt.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl mb-6">Kontaktuppgifter</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-sans mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+46738000979"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      073-800 09 79
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-sans mb-1">
                      E-post
                    </h3>
                    <a
                      href="mailto:aronsgard.bos@icloud.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      aronsgard.bos@icloud.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-sans mb-1">
                      Adress
                    </h3>
                    <p className="text-muted-foreground">
                      Sportvägen 3 Lgh 1102
                      <br />
                      832 44 Frösön
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Utgår ifrån Hallen
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-sans mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/snickeridagboken/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @Snickeridagboken
                    </a>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl mt-12 mb-4">Serviceområde</h2>
              <p className="text-foreground/80 leading-relaxed">
                Vi erbjuder byggtjänster i Hallen, Frösön, Östersund och hela
                Jämtland. Oavsett var i regionen ditt projekt befinner sig kan
                vi hjälpa till. Kontakta oss för att diskutera just ditt
                projekt.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504.12!2d14.49!3d63.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466f14b5a2e2d1f1%3A0x4021a4e08b3c7e0!2sFr%C3%B6s%C3%B6n!5e0!3m2!1ssv!2sse!4v1712300000000!5m2!1ssv!2sse"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aronsgård Bygg & Service – karta till Frösön, Jämtland"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
