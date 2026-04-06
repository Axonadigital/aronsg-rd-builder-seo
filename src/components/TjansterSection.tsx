"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  title: string
  img: string
  imgCaption: string
  desc: string
  longDesc: string
  details: string[]
}

const services: Service[] = [
  {
    title: "Nybyggnation",
    img: "/images/Nybyggnation Vemdalen.png",
    imgCaption: "Nybyggnation i Vemdalen – lösvirkeshus uppfört av Aronsgård Bygg & Service",
    desc: "Lösvirkeshus, timmerhus och jordbruksbyggnader – vi bygger från grunden.",
    longDesc:
      "Vi hanterar hela processen från tomtbesiktning och grundarbete till färdigställt hus. Med lång erfarenhet av nybyggnation i Jämtlands klimat vet vi vilka material och metoder som håller.",
    details: [
      "Lösvirkeshus & timmerhus",
      "Jordbruksbyggnader",
      "Grundläggning, stomresning & tak",
    ],
  },
  {
    title: "Om- & tillbyggnader",
    img: "/images/Altanrullstolsanpassad.png",
    imgCaption: "Rullstolsanpassad altan – tillbyggnad utförd av Aronsgård Bygg & Service",
    desc: "Utöka eller förnya ditt hem med professionella lösningar.",
    longDesc:
      "Vill du bygga ut, lägga till ett uterum, bastu eller förråd? Vi planerar och genomför tillbyggnader som smälter in naturligt med befintlig byggnad, med full hänsyn till gällande byggregler.",
    details: [
      "Uterum, verandor & altaner",
      "Bastur, förråd & garage",
      "Tillgänglighetsanpassningar",
    ],
  },
  {
    title: "Renoveringar",
    img: "/images/Renovering.png",
    imgCaption: "Renovering – nya ytskikt och inredning av Aronsgård Bygg & Service",
    desc: "Fasadrenoveringar, badrum, kök och helrenoveringar.",
    longDesc:
      "Vi renoverar allt från enstaka rum till hela fastigheter. Oavsett om det handlar om nya ytskikt, badrumsrenovering eller en fullständig helrenovering tar vi helhetsansvar och koordinerar alla hantverkare.",
    details: [
      "Badrum, kök & våtrum",
      "Golv, tak & väggar",
      "Fasad & yttre underhåll",
    ],
  },
  {
    title: "Takbyten",
    img: "/images/Takbyte.png",
    imgCaption: "Takbyte med nytt undertak och klimatanpassad beläggning",
    desc: "Komplett takbyte med klimatanpassade material.",
    longDesc:
      "Ett gammalt tak som börjar läcka eller ruttna behöver åtgärdas snabbt. Vi river, åtgärdar eventuella fuktskador i konstruktionen och lägger ett nytt tak anpassat för nordiskt klimat – med garanti på utfört arbete.",
    details: [
      "Komplett rivning & ny takläggning",
      "Plåt, betong- eller lertegel",
      "Kontroll & åtgärd av fuktskador",
    ],
  },
  {
    title: "Finsnickeri",
    img: "/images/Trappsnickeri.png",
    imgCaption: "Handbyggt trappräcke i furu – finsnickeri av Aronsgård Bygg & Service",
    desc: "Skräddarsytt snickeri, inredning och detaljarbeten.",
    longDesc:
      "Från handbyggda möbler och trappor till skåpsinredning och detaljer i trä – vi tillverkar och monterar skräddarsydda lösningar i vår verkstad. Varje detalj bearbetas noggrant för ett resultat som håller och ser bra ut i generationer.",
    details: [
      "Trappor & räcken i massivt trä",
      "Möbler, skåp & inredningsdetaljer",
      "Allt skräddarsytt efter dina önskemål",
    ],
  },
  {
    title: "Övrigt",
    img: "/Sovrumfjällmiljö.jpg",
    imgCaption: "Sovrum i fjällmiljö – vi tar oss an projekt i hela Jämtland",
    desc: "Har du ett projekt som inte passar i en kategori? Vi tar oss an de flesta uppdrag – hör av dig!",
    longDesc:
      "Inte alla byggprojekt ryms i en låda. Vi har erfarenhet av ett brett spektrum av arbeten och tar gärna en dialog om vad just ditt projekt kräver. Kontakta oss med en beskrivning så berättar vi om vi kan hjälpa till.",
    details: [
      "Stall & lantbruksbyggnader",
      "Restaurering av äldre byggnader",
      "Småjobb & akuta reparationer",
    ],
  },
]

function ServiceModal({
  service,
  onClose,
}: {
  service: Service
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vänster – bild */}
        <div className="relative md:w-[48%] shrink-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={service.img}
              alt={service.imgCaption}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Bildtext */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white/80 text-xs leading-snug">{service.imgCaption}</p>
          </div>
        </div>

        {/* Höger – info */}
        <div className="flex-1 flex flex-col overflow-y-auto p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-1.5 shadow transition-colors md:static md:self-end md:mb-2"
            aria-label="Stäng"
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="text-2xl font-serif mb-3">{service.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {service.longDesc}
          </p>

          <ul className="space-y-2 mb-6">
            {service.details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-auto pt-5 border-t border-border">
            <Link
              href="/kontakt"
              onClick={onClose}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Begär offert
            </Link>
            <a
              href="tel:+46738000979"
              className="border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              073-800 09 79
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TjansterSection() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <button
            key={s.title}
            onClick={() => setSelected(s)}
            className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={s.img}
                alt={s.imgCaption}
                width={896}
                height={672}
                loading="lazy"
                className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <span className="inline-flex items-center text-primary text-sm font-semibold gap-1">
                Läs mer{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
