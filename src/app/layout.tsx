import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aronsgard-bygg.se"),
  title: {
    default: "Byggfirma i Jämtland | Aronsgård Bygg & Service",
    template: "%s | Aronsgård Bygg & Service",
  },
  description:
    "Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland. Timmerhus, lösvirkeshus, takbyten, fasadrenoveringar och jordbruksbyggnader. Ring 073-800 09 79.",
  openGraph: {
    siteName: "Aronsgård Bygg & Service",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
