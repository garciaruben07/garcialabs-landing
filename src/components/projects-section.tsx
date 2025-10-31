"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Target,
  DollarSign,
  Zap,
  Bot,
  TrendingUp,
  Clock,
  Filter,
  Calendar
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface ProjectResult {
  metric: string;
  description: string;
  icon: LucideIcon;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface Project {
  id: number;
  title: string;
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  technologies: string[];
  testimonial: Testimonial | null;
  image?: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Automatización de Tareas Inteligente",
    client: "Startup sector perfumería",
    sector: "E-commerce / Perfumería",
    challenge: "Automatizar la creación y trazabilidad de tareas en Jira a partir de emails y mensajes de Telegram, gestionando adjuntos y manteniendo comunicación fluida.",
    solution: "Workflow avanzado en n8n que integra Gmail, Telegram, Jira y Google Sheets. Procesa emails y mensajes (texto, voz, imágenes), extrae información con IA, crea tareas automáticamente y asegura trazabilidad completa.",
    results: [
      { metric: "100%", description: "Trazabilidad de incidencias", icon: CheckCircle2 },
      { metric: "0", description: "Tareas perdidas desde implementación", icon: Target }
    ],
    technologies: ["n8n", "Gmail API", "Telegram", "Jira", "Google Sheets", "IA"],
    testimonial: null,
    image: "/projects/perfumeria.png"
  },
  {
    id: 2,
    title: "AI Studio - Generación de Contenido Visual",
    client: "Empresa de vajilla artesanal",
    sector: "Marketing Digital / E-commerce",
    challenge: "Crear un sistema integral que automatizara la producción de contenido fotográfico profesional para redes sociales, eliminando sesiones fotográficas costosas.",
    solution: "Aplicación web full-stack con generación IA de imágenes fotorrealistas, sistema de gestión de contenido, edición con lenguaje natural y publicación automatizada en Instagram.",
    results: [
      { metric: "90%", description: "Reducción en costos de producción", icon: DollarSign },
      { metric: "Días → Minutos", description: "Tiempo de creación de contenido", icon: Clock },
      { metric: "24/7", description: "Disponibilidad con IA dual", icon: Bot }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Google Gemini", "OpenAI", "Cloudinary", "Instagram API"],
    testimonial: null,
    image: "/projects/vajilla.png"
  },
  {
    id: 3,
    title: "Dashboard Fitness con IA",
    client: "Revive Coach",
    sector: "Fitness & Wellness",
    challenge: "Gestión manual y dispersa de clientes sin sistema centralizado para seguimiento de rutinas, nutrición y análisis de datos.",
    solution: "Dashboard web completo con sistema de gestión integral, generación automática de rutinas y planes nutricionales con IA, análisis de datos en lenguaje natural y automatización de alertas.",
    results: [
      { metric: "85%", description: "Menos tiempo generando planes", icon: Zap },
      { metric: "3x", description: "Más clientes con mismo tiempo", icon: TrendingUp },
      { metric: "30+", description: "Consultas IA automatizadas", icon: Bot }
    ],
    technologies: ["Next.js 14", "TypeScript", "Supabase", "n8n", "Claude AI"],
    testimonial: {
      text: "Pasé de gestionar todo en Excel y WhatsApp a tener un dashboard profesional que me da insights que ni sabía que necesitaba. La IA me genera rutinas personalizadas en minutos.",
      author: "Christian",
      role: "Founder, Revive Coach"
    },
    image: "/projects/revive-coach.png"
  },
  {
    id: 4,
    title: "Automatización BOE para Despacho Legal",
    client: "Julián - Despacho de Abogados",
    sector: "Legal / Servicios Jurídicos",
    challenge: "Revisión manual diaria del Boletín Oficial del Estado (BOE) consumía varias horas semanales para filtrar información relevante entre cientos de publicaciones irrelevantes.",
    solution: "Sistema automatizado con n8n que extrae, analiza y filtra publicaciones del BOE según criterios específicos personalizados. Formatea la información relevante y la envía por email diariamente, eliminando contenido irrelevante y entregando solo lo necesario.",
    results: [
      { metric: "Varias horas", description: "Ahorro semanal en revisión", icon: Clock },
      { metric: "100%", description: "Precisión en filtrado personalizado", icon: Filter },
      { metric: "Diario", description: "Información automática y actualizada", icon: Calendar }
    ],
    technologies: ["n8n", "Web Scraping", "IA", "Gmail API", "BOE"],
    testimonial: null,
    videoUrl: "https://drive.google.com/file/d/1IJ9XFi2nXfwmJycasB8v_cWe8GbbS0pf/preview"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-garciablue-950 via-background to-background dark:from-garciablue-950/50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-garciablue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Proyectos Destacados
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              Casos reales de éxito que transformaron negocios con IA y automatización
            </motion.p>
          </div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex-[0_0_100%] min-w-0 pl-4 sm:pl-6"
                  >
                    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-garciablue-500/20 hover:border-garciablue-500/40 transition-all duration-300 shadow-xl">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                          {/* Image/Video Section */}
                          <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-garciablue-500/10 to-garciablue-700/5 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none overflow-hidden flex items-center justify-center p-4 sm:p-6">
                            {project.videoUrl ? (
                              // Video embed for projects with videoUrl
                              <div className="relative w-full h-full">
                                <iframe
                                  src={project.videoUrl}
                                  className="w-full h-full rounded-lg"
                                  allow="autoplay"
                                  allowFullScreen
                                  title={`Video demo: ${project.title}`}
                                ></iframe>
                              </div>
                            ) : project.image ? (
                              // Image for projects with image
                              <div className="relative w-full h-full">
                                <Image
                                  src={project.image}
                                  alt={`Screenshot del proyecto ${project.title}`}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  priority={project.id === 1}
                                  onError={(e) => {
                                    // Fallback to placeholder if image doesn't exist
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent) {
                                      parent.innerHTML = `
                                        <div class="absolute inset-0 bg-garciablue-500/5 flex items-center justify-center">
                                          <span class="text-muted-foreground text-sm">Screenshot del proyecto</span>
                                        </div>
                                      `;
                                    }
                                  }}
                                />
                              </div>
                            ) : (
                              // Placeholder if neither video nor image
                              <div className="absolute inset-0 bg-garciablue-500/5 flex items-center justify-center">
                                <span className="text-muted-foreground text-sm">Contenido del proyecto</span>
                              </div>
                            )}
                          </div>

                          {/* Content Section */}
                          <div className="p-8 sm:p-10">
                            {/* Sector Badge */}
                            <Badge
                              variant="secondary"
                              className="mb-4 bg-garciablue-500/10 text-garciablue-500 border-garciablue-500/20"
                            >
                              {project.sector}
                            </Badge>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                              {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                              {project.client}
                            </p>

                            {/* Challenge */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-garciablue-500 mb-2">
                                Desafío
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.challenge}
                              </p>
                            </div>

                            {/* Solution */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-garciablue-500 mb-2">
                                Solución
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.solution}
                              </p>
                            </div>

                            {/* Results */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-garciablue-500 mb-3">
                                Resultados
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.results.map((result, index) => {
                                  const IconComponent = result.icon;
                                  return (
                                    <div
                                      key={index}
                                      className="flex items-start gap-3 bg-garciablue-50/50 dark:bg-garciablue-950/20 rounded-lg p-3 border border-garciablue-200/30 dark:border-garciablue-800/30"
                                    >
                                      <div className="w-8 h-8 flex-shrink-0 bg-garciablue-500/10 rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-5 h-5 text-garciablue-500" />
                                      </div>
                                      <div>
                                        <p className="text-lg font-bold text-foreground">
                                          {result.metric}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                          {result.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-garciablue-500 mb-3">
                                Tecnologías
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="rounded-full text-xs bg-background border-garciablue-500/30 text-foreground"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Testimonial */}
                            {project.testimonial && (
                              <div className="bg-gradient-to-r from-garciablue-500/10 to-garciablue-600/10 rounded-xl p-6 border border-garciablue-500/20">
                                <p className="text-sm text-foreground italic mb-3 leading-relaxed">
                                  &ldquo;{project.testimonial.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-2">
                                  <div>
                                    <p className="text-sm font-semibold text-foreground">
                                      {project.testimonial.author}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {project.testimonial.role}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-12 h-12 bg-white dark:bg-gray-900 border-2 border-garciablue-500/30 rounded-full flex items-center justify-center text-garciablue-500 hover:bg-garciablue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-12 h-12 bg-white dark:bg-gray-900 border-2 border-garciablue-500/30 rounded-full flex items-center justify-center text-garciablue-500 hover:bg-garciablue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'bg-garciablue-500 w-8'
                    : 'bg-garciablue-500/30 hover:bg-garciablue-500/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
