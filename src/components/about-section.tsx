"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Target, Shield, Zap } from "lucide-react";

const trustPillars = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "No vendemos tecnología, entregamos resultados medibles y ROI real para tu negocio"
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Sin tecnicismos innecesarios. Entiendes qué inviertes y qué obtienes en cada paso"
  },
  {
    icon: Zap,
    title: "Implementación Rápida",
    description: "Soluciones pragmáticas que generan impacto desde el primer mes, no en años"
  }
];

const credentials = [
  {
    icon: Briefcase,
    title: "+2 años",
    description: "Automatizando empresas reales",
  },
  {
    icon: Award,
    title: "Divain & Racks Labs",
    description: "Confianza de empresas líderes",
  },
  {
    icon: Target,
    title: "Certificación IUNIT",
    description: "Especialistas certificados en IA",
  },
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

export function AboutSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-background via-background to-garciablue-50/20 dark:to-garciablue-950/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-garciablue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Quiénes Somos
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Una consultoría especializada en hacer que la IA funcione para tu negocio,
              no al revés
            </motion.p>
          </div>

          {/* Team Section - Single member for now, expandable for future */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-garciablue-500/20 shadow-xl">
                <Image
                  src="/ruben-garcia.png"
                  alt="Rubén García - GarcIALabs"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Rubén García</h3>
              <p className="text-sm text-muted-foreground">Fundador & CEO</p>
            </div>
          </motion.div>

          {/* Main Value Proposition */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-lg mb-12"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-center">
                <strong className="text-foreground font-semibold text-xl">
                  Somos expertos en automatización e Inteligencia Artificial que transforman
                  procesos empresariales en ventajas competitivas.
                </strong>
              </p>

              <p className="text-center">
                Trabajamos con empresas como <strong className="text-garciablue-500">Divain</strong>,
                donde optimizamos procesos internos reduciendo horas de trabajo manual mediante
                flujos automatizados inteligentes. También colaboramos con{" "}
                <strong className="text-garciablue-500">Racks Labs</strong>, una de las comunidades
                líderes en IA, manteniéndonos siempre en la vanguardia del sector.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-garciablue-50 dark:bg-garciablue-950/30 rounded-xl p-6 border border-garciablue-200 dark:border-garciablue-800">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Nuestra Especialización
                  </h3>
                  <p className="text-sm">
                    Desde consultoría estratégica hasta implementación técnica completa.
                    Dominamos desde automatizaciones con N8N hasta modelos de IA avanzados
                    (GPTs personalizados, sistemas RAG, agentes inteligentes).
                  </p>
                </div>

                <div className="bg-garciablue-50 dark:bg-garciablue-950/30 rounded-xl p-6 border border-garciablue-200 dark:border-garciablue-800">
                  <h3 className="text-foreground font-semibold text-lg mb-3">
                    Nuestro Compromiso
                  </h3>
                  <p className="text-sm">
                    Certificados por IUNIT como especialistas en IA y automatización.
                    Pero más allá de las credenciales, lo que define nuestro trabajo
                    son los resultados: procesos optimizados, costes reducidos y equipos
                    más productivos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Pillars */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {trustPillars.map((pillar, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Credentials */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            {credentials.map((credential, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="text-center p-6 bg-garciablue-50/50 dark:bg-garciablue-950/20 rounded-xl border border-garciablue-200/50 dark:border-garciablue-800/50">
                  <div className="w-12 h-12 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-2xl p-8 sm:p-10 text-white mb-8"
          >
            <p className="text-lg sm:text-xl font-medium mb-6 leading-relaxed">
              &ldquo;La mejor solución no es la más compleja, sino la que genera resultados
              medibles en el menor tiempo posible. No nos interesa la tecnología por la
              tecnología. Nos interesa que tu equipo ahorre tiempo, que tus procesos
              sean más eficientes, y que tu negocio crezca.&rdquo;
            </p>
            <p className="text-sm opacity-90">
              Filosofía GarcIALabs
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-garciablue-500 hover:bg-garciablue-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicita tu Auditoría Gratuita
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
