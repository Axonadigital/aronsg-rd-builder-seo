"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { PastProject } from "@/lib/projects"

// ---------------------------------------------------------------------------
// Modal
// ---------------------------------------------------------------------------
function ProjectModal({ project, onClose }: { project: PastProject; onClose: () => void }) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.img]
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIdx((i) => (i + 1) % images.length)

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
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vänster – bild */}
        <div className="relative md:w-[55%] shrink-0 flex flex-col bg-muted">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow transition-colors"
            aria-label="Stäng"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative aspect-[4/3] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image src={images[activeIdx]} alt={project.imgAlt} fill className="object-cover" priority />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-colors" aria-label="Föregående">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 shadow transition-colors" aria-label="Nästa">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setActiveIdx(i)} className={cn("w-1.5 h-1.5 rounded-full transition-all", i === activeIdx ? "bg-white scale-125" : "bg-white/50")} />
                  ))}
                </div>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto scrollbar-hide bg-muted/50">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all",
                    i === activeIdx ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <Image src={src} alt={`Bild ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Höger – info */}
        <div className="flex-1 overflow-y-auto flex flex-col p-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">{project.category}</span>
          <h2 className="text-2xl font-serif mt-1 mb-2">{project.title}</h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{project.location}</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{project.year}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.shortDesc}</p>
          {project.longDesc.map((para, i) => (
            <p key={i} className="text-sm text-foreground/70 leading-relaxed mb-3">{para}</p>
          ))}
          <div className="flex gap-3 mt-auto pt-5 border-t border-border">
            <Link href="/kontakt" onClick={onClose} className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
              Begär offert
            </Link>
            <a href="tel:+46738000979" className="border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
              073-800 09 79
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Circular 3D Gallery – direkt DOM-manipulation för 60fps utan React re-renders
// ---------------------------------------------------------------------------
interface CircularGalleryProps {
  projects: PastProject[]
  autoRotateSpeed?: number
}

function getRadius() {
  if (typeof window === "undefined") return 560
  const w = window.innerWidth
  return w < 480 ? 200 : w < 768 ? 320 : w < 1024 ? 440 : 560
}

function getCardSize() {
  if (typeof window === "undefined") return { w: 240, h: 320 }
  return window.innerWidth < 640 ? { w: 170, h: 240 } : { w: 240, h: 320 }
}

export default function CircularGallery({ projects, autoRotateSpeed = 0.012 }: CircularGalleryProps) {
  const [selected, setSelected] = useState<PastProject | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [radius, setRadius] = useState(560)
  const [cardSize, setCardSize] = useState({ w: 240, h: 320 })
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rotationRef = useRef(0)
  const isDragging = useRef(false)
  const isPaused = useRef(false)
  const dragStartX = useRef(0)
  const dragStartRotation = useRef(0)
  const dragMoved = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  const anglePerItem = 360 / projects.length

  // Anpassa radien, kortstorlek och mobilläge efter skärmbredd
  useEffect(() => {
    const update = () => {
      setIsMobile(window.innerWidth < 640)
      setRadius(getRadius())
      setCardSize(getCardSize())
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Animation loop – uppdaterar DOM direkt, inga React re-renders
  useEffect(() => {
    const tick = () => {
      if (!isPaused.current) {
        rotationRef.current += autoRotateSpeed
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${rotationRef.current}deg)`
      }

      // Uppdatera opacity och pointerEvents per kort
      projects.forEach((_, i) => {
        const el = cardRefs.current[i]
        if (!el) return
        const itemAngle = i * anglePerItem
        const rel = (itemAngle + rotationRef.current % 360 + 360) % 360
        const normalized = Math.abs(rel > 180 ? 360 - rel : rel)
        el.style.opacity = String(Math.max(0.15, 1 - normalized / 180))
        el.style.pointerEvents = normalized > 85 ? "none" : "auto"
      })

      animationFrameRef.current = requestAnimationFrame(tick)
    }
    animationFrameRef.current = requestAnimationFrame(tick)
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [autoRotateSpeed, anglePerItem, projects])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    isPaused.current = true
    dragStartX.current = e.clientX
    dragStartRotation.current = rotationRef.current
    dragMoved.current = 0
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - dragStartX.current
    dragMoved.current = Math.abs(dx)
    rotationRef.current = dragStartRotation.current + dx * 0.25
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    isPaused.current = false
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true
    isPaused.current = true
    dragStartX.current = e.touches[0].clientX
    dragStartRotation.current = rotationRef.current
    dragMoved.current = 0
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return
    const dx = e.touches[0].clientX - dragStartX.current
    dragMoved.current = Math.abs(dx)
    rotationRef.current = dragStartRotation.current + dx * 0.25
  }, [])

  const onTouchEnd = useCallback(() => {
    isDragging.current = false
    isPaused.current = false
  }, [])

  return (
    <>
      {/* Mobilvy – horisontell scroll */}
      {isMobile && (
        <div className="w-full overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 px-4" style={{ width: "max-content" }}>
            {projects.map((p) => (
              <button
                key={p.slug}
                onClick={() => setSelected(p)}
                className="relative rounded-xl overflow-hidden shrink-0 text-left"
                style={{ width: 200, height: 280 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.imgAlt} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-serif text-sm leading-snug mt-0.5">{p.title}</h3>
                  <p className="text-white/60 text-xs mt-0.5">{p.location} · {p.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop – 3D-karusell */}
      {!isMobile && <div
        ref={wrapperRef}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "2000px" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((p, i) => {
            const itemAngle = i * anglePerItem

            return (
              <div
                key={p.slug}
                ref={(el) => { cardRefs.current[i] = el }}
                className="absolute"
                style={{
                  width: cardSize.w,
                  height: cardSize.h,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: -cardSize.w / 2,
                  marginTop: -cardSize.h / 2,
                  willChange: "opacity",
                  transition: "opacity 0.2s linear",
                }}
                onClick={() => { if (dragMoved.current <= 6) setSelected(p) }}
              >
                <div className="group relative w-full h-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 cursor-pointer">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs font-semibold text-sky-300 uppercase tracking-widest">{p.category}</span>
                    <h3 className="text-white font-serif text-base leading-snug mt-0.5">{p.title}</h3>
                    <p className="text-white/70 text-xs mt-1">{p.location} · {p.year}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>}

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
