import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pastProjects } from "@/lib/projects";

export async function generateStaticParams() {
  return pastProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = pastProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Aronsgård Bygg & Service`,
    description: project.shortDesc,
    alternates: { canonical: `/projekt/${slug}` },
  };
}

export default async function ProjektDetaljPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = pastProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://aronsgard-bygg.se/" },
      { "@type": "ListItem", position: 2, name: "Projekt", item: "https://aronsgard-bygg.se/projekt" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://aronsgard-bygg.se/projekt/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs
        items={[{ label: "Projekt", to: "/projekt" }, { label: project.title }]}
      />

      <article className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bild */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src={project.img}
                alt={project.imgAlt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {project.category}
              </span>
              <h1 className="mt-2 mb-1">{project.title}</h1>
              <p className="text-sm text-muted-foreground mb-8">
                {project.location} · {project.year}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {project.shortDesc}
              </p>
              {project.longDesc.map((para, i) => (
                <p key={i} className="text-foreground/75 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="hero" asChild>
                  <Link href="/kontakt">Begär offert</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+46738000979" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 073-800 09 79
                  </a>
                </Button>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <Link
                  href="/projekt"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" /> Tillbaka till alla projekt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
