import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Brödsmulor" className="py-4 px-4 md:px-8">
    <ol className="container mx-auto flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
      <li>
        <Link to="/" className="hover:text-primary transition-colors">Hem</Link>
      </li>
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-1">
          <ChevronRight className="w-3 h-3" />
          {item.to ? (
            <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
