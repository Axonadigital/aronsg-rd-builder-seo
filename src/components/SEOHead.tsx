import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, ogImage = "/images/og-aronsgard-bygg.jpg" }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://aronsgard-bygg.se${canonical}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://aronsgard-bygg.se${canonical}`} />
    <meta property="og:image" content={`https://aronsgard-bygg.se${ogImage}`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`https://aronsgard-bygg.se${ogImage}`} />
  </Helmet>
);

export default SEOHead;
