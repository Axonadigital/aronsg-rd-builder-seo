import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal-deep text-secondary-foreground py-12 px-4 md:px-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-timber font-serif text-xl mb-4">Aronsgård Bygg & Service</h3>
        <p className="text-secondary-foreground/70 text-sm leading-relaxed">
          Byggfirma med bred erfarenhet inom byggbranschen och timmerhus. Vi utgår ifrån Hallen i Jämtland och tar oss an projekt i hela regionen.
        </p>
      </div>
      <div>
        <h3 className="text-timber font-serif text-xl mb-4">Tjänster</h3>
        <ul className="space-y-2 text-sm">
          <li><Link to="/tjanster/losvirkeshus" className="text-secondary-foreground/70 hover:text-timber transition-colors">Lösvirkeshus</Link></li>
          <li><Link to="/tjanster/timmerhus" className="text-secondary-foreground/70 hover:text-timber transition-colors">Timmerhus</Link></li>
          <li><Link to="/tjanster/om-och-tillbyggnader" className="text-secondary-foreground/70 hover:text-timber transition-colors">Om- och tillbyggnader</Link></li>
          <li><Link to="/tjanster/takbyten" className="text-secondary-foreground/70 hover:text-timber transition-colors">Takbyten</Link></li>
          <li><Link to="/tjanster/fasadrenoveringar" className="text-secondary-foreground/70 hover:text-timber transition-colors">Fasadrenoveringar</Link></li>
          <li><Link to="/tjanster/jordbruksbyggnader" className="text-secondary-foreground/70 hover:text-timber transition-colors">Jordbruksbyggnader</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-timber font-serif text-xl mb-4">Kontakt</h3>
        <ul className="space-y-3 text-sm text-secondary-foreground/70">
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 text-timber shrink-0" />
            <span>Sportvägen 3 Lgh 1102, 832 44 Frösön<br />Utgår ifrån Hallen</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-timber shrink-0" />
            <a href="tel:+46738000979" className="hover:text-timber transition-colors">073-800 09 79</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-timber shrink-0" />
            <a href="mailto:aronsgard.bos@icloud.com" className="hover:text-timber transition-colors">aronsgard.bos@icloud.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto mt-10 pt-6 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50">
      <p>&copy; {new Date().getFullYear()} Aronsgård Bygg & Service. Alla rättigheter förbehållna.</p>
      <div className="flex gap-4">
        <Link to="/integritetspolicy" className="hover:text-timber transition-colors">Integritetspolicy</Link>
        <a href="https://www.instagram.com/snickeridagboken/" target="_blank" rel="noopener noreferrer" className="hover:text-timber transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer;
