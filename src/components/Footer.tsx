import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground py-16 px-4 md:px-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-primary font-serif text-xl mb-4">Aronsgård Bygg & Service</h3>
        <p className="text-secondary-foreground/60 text-sm leading-relaxed">
          Byggfirma med bred erfarenhet inom byggbranschen och timmerhus. Vi utgår ifrån Hallen i Jämtland och tar oss an projekt i hela regionen.
        </p>
      </div>
      <div>
        <h3 className="text-primary font-serif text-xl mb-4">Projekt</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/projekt/nybyggnation" className="text-secondary-foreground/60 hover:text-primary transition-colors">Nybyggnation</Link></li>
          <li><Link to="/projekt/om-och-tillbyggnader" className="text-secondary-foreground/60 hover:text-primary transition-colors">Om- & tillbyggnader</Link></li>
          <li><Link to="/projekt/renoveringar" className="text-secondary-foreground/60 hover:text-primary transition-colors">Renoveringar</Link></li>
          <li><Link to="/projekt/takbyten" className="text-secondary-foreground/60 hover:text-primary transition-colors">Takbyten</Link></li>
          <li><Link to="/projekt/finsnickeri" className="text-secondary-foreground/60 hover:text-primary transition-colors">Finsnickeri</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-primary font-serif text-xl mb-4">Kontakt</h3>
        <ul className="space-y-3 text-sm text-secondary-foreground/60">
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <span>Sportvägen 3 Lgh 1102, 832 44 Frösön<br />Utgår ifrån Hallen</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+46738000979" className="hover:text-primary transition-colors">073-800 09 79</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href="mailto:aronsgard.bos@icloud.com" className="hover:text-primary transition-colors">aronsgard.bos@icloud.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-12 pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/40">
      <p>&copy; {new Date().getFullYear()} Aronsgård Bygg & Service. Alla rättigheter förbehållna.</p>
      <div className="flex gap-4">
        <Link to="/integritetspolicy" className="hover:text-primary transition-colors">Integritetspolicy</Link>
        <a href="https://www.instagram.com/snickeridagboken/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
