'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Bot, GraduationCap, TrendingUp, CheckCircle } from 'lucide-react';

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const services = [
    {
      icon: Bot,
      title: "Automatización de Procesos",
      description: "Automatiza documentos, emails y tareas repetitivas. Ahorra hasta 30 horas semanales.",
      features: [
        "Procesamiento automático de documentos",
        "Gestión inteligente de emails",
        "Workflows personalizados"
      ]
    },
    {
      icon: GraduationCap,
      title: "Capacitación en IA",
      description: "Forma a tu equipo en el uso efectivo de herramientas de inteligencia artificial.",
      features: [
        "Talleres prácticos",
        "Material personalizado",
        "Seguimiento continuo"
      ]
    },
    {
      icon: TrendingUp,
      title: "Consultoría en Productividad",
      description: "Identifica oportunidades de mejora y diseña estrategias de implementación.",
      features: [
        "Auditoría completa",
        "Plan de implementación",
        "Soporte continuo"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-background via-garciablue-50/20 to-background dark:via-garciablue-950/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-garciablue-400/5 rounded-full blur-3xl"></div>
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
            Nuestros Servicios
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Soluciones integrales de automatización e IA para tu empresa
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-garciablue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}