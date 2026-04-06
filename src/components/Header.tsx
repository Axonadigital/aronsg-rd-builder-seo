import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/aronsgard-bygg-service-logo.jpg";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Tjänster" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <Link to="/" aria-label="Aronsgård Bygg & Service – startsida" className="flex items-center gap-3">
          <img src={logo} alt="Aronsgård Bygg & Service logotyp" width={48} height={48} className="rounded" />
          <span className="hidden sm:block font-serif text-lg text-secondary-foreground tracking-wide">
            Aronsgård Bygg & Service
          </span>
        </Link>

        <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-timber-light ${
                location.pathname === link.to ? "text-timber" : "text-secondary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            073-800 09 79
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-secondary-foreground p-2"
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-secondary border-t border-secondary/50 px-4 py-4" aria-label="Mobilnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base font-medium border-b border-secondary/30 ${
                location.pathname === link.to ? "text-timber" : "text-secondary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className="flex items-center gap-2 mt-4 bg-primary text-primary-foreground px-4 py-3 rounded text-base font-semibold justify-center"
          >
            <Phone className="w-5 h-5" />
            073-800 09 79
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
