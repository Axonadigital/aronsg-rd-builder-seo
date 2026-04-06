"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { PastProject } from "@/lib/projects"

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------

function ProjectModal({
  project,
  onClose,
}: {
  project: PastProject
  onClose: () => void
}) {
  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.img]
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () =>
    setActiveIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIdx((i) => (i + 1) % images.length)

  // Tangentbordsnavigering
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.93, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Stäng */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-1.5 shadow transition-colors"
          aria-label="Stäng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Huvudbild */}
        <div className="relative aspect-[4/3] w-full bg-muted rounded-t-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIdx]}
                alt={project.imgAlt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
                aria-label="Föregående bild"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow transition-colors"
                aria-label="Nästa bild"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      i === activeIdx ? "bg-white scale-125" : "bg-white/50"
                    )}
                    aria-label={`Bild ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 px-6 pt-4 overflow-x-auto scrollbar-hide">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "relative shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                  i === activeIdx
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={src}
                  alt={`Bild ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Text */}
        <div className="p-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            {project.category}
          </span>
          <h2 className="text-2xl font-serif mt-1 mb-2">{project.title}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {project.year}
            </span>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed mb-3">
            {project.shortDesc}
          </p>
          {project.longDesc.map((para, i) => (
            <p key={i} className="text-sm text-foreground/70 leading-relaxed mb-3">
              {para}
            </p>
          ))}
          <div className="flex gap-3 mt-6 pt-5 border-t border-border">
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

// ---------------------------------------------------------------------------
// Kort-animering
// ---------------------------------------------------------------------------
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
}

// ---------------------------------------------------------------------------
// Horisontellt auto-scroll-band
// ---------------------------------------------------------------------------
export default function BentoGallery({ projects }: { projects: PastProject[] }) {
  const [selected, setSelected] = useState<PastProject | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isPaused = useRef(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartScroll = useRef(0)
  const dragDistance = useRef(0)

  // Duplicera för sömlös loop
  const items = [...projects, ...projects]

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const speed = 0.5 // px per frame
    let animId: number

    const tick = () => {
      if (!isPaused.current && !isDragging.current && el) {
        el.scrollLeft += speed
        // Återställ sömlöst när första kopian är förbi
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragDistance.current = 0
    dragStartX.current = e.pageX
    dragStartScroll.current = scrollRef.current?.scrollLeft ?? 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    const dx = e.pageX - dragStartX.current
    dragDistance.current = Math.abs(dx)
    scrollRef.current.scrollLeft = dragStartScroll.current - dx
  }

  const onMouseUp = () => {
    isDragging.current = false
  }

  const handleCardClick = (p: PastProject) => {
    if (dragDistance.current > 6) return
    setSelected(p)
  }

  return (
    <>
      {/* Band – full bredd, ingen container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide select-none cursor-grab active:cursor-grabbing px-4 md:px-8"
        onMouseEnter={() => { isPaused.current = true }}
        onMouseLeave={() => { isPaused.current = false; isDragging.current = false }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {items.map((p, i) => (
          <motion.div
            key={`${p.slug}-${i}`}
            variants={i < projects.length ? cardVariants : undefined}
            initial={i < projects.length ? "hidden" : false}
            whileInView={i < projects.length ? "visible" : undefined}
            viewport={{ once: true, amount: 0.3 }}
            className={cn(
              "relative shrink-0 rounded-2xl overflow-hidden group h-72",
              p.span === "md:col-span-2" ? "w-[30rem]" : "w-60"
            )}
            onClick={() => handleCardClick(p)}
          >
            <Image
              src={p.img}
              alt={p.imgAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              draggable={false}
              sizes="(max-width: 768px) 80vw, 320px"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                {p.category}
              </span>
              <h3 className="text-white font-serif text-base leading-snug mt-0.5">
                {p.title}
              </h3>
              <p className="text-white/70 text-xs mt-1 line-clamp-2">
                {p.shortDesc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
