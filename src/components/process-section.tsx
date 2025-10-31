'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Search, PenTool, Wrench, BookOpen } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Auditoría Gratuita",
      description: "Analizamos tus procesos actuales e identificamos oportunidades de automatización",
      color: "from-garciablue-500 to-garciablue-600"
    },
    {
      icon: PenTool,
      title: "Plan Personalizado",
      description: "Diseñamos una estrategia específica para tu empresa y necesidades",
      color: "from-garciablue-600 to-garciablue-700"
    },
    {
      icon: Wrench,
      title: "Implementación",
      description: "Desarrollamos y configuramos las automatizaciones y/o soluciones con IA en tu empresa",
      color: "from-garciablue-700 to-garciablue-800"
    },
    {
      icon: BookOpen,
      title: "Capacitación y Soporte",
      description: "Formamos a tu equipo y brindamos soporte continuo para garantizar el éxito",
      color: "from-garciablue-800 to-garciablue-900"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-garciablue-50/20 via-background to-garciablue-100/10 dark:from-garciablue-950/10 dark:via-background dark:to-garciablue-900/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-garciablue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-56 h-56 bg-garciablue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cómo Trabajamos
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un proceso probado que garantiza resultados
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center relative`}>
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-garciablue-300 to-garciablue-500 mx-auto mt-6"></div>
                  )}
                </div>
                <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-garciablue-50 dark:bg-garciablue-950/30 text-garciablue-700 dark:text-garciablue-300 px-6 py-3 rounded-full text-sm font-medium border border-garciablue-200 dark:border-garciablue-800">
            <CheckCircle2 className="w-5 h-5" />
            Metodología probada y validada en producción
          </div>
        </div>
      </div>
    </section>
  );
}