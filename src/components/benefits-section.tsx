'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Heart, ArrowUpRight } from 'lucide-react';

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      value: "60%",
      label: "Aumento en productividad",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: Clock,
      value: "30h",
      label: "Ahorro semanal en tareas",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: DollarSign,
      value: "300%",
      label: "ROI promedio en 6 meses",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: Heart,
      value: "95%",
      label: "Satisfacción de clientes",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/20",
      borderColor: "border-rose-200 dark:border-rose-800"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-garciablue-50/30 via-background to-garciablue-100/20 dark:from-garciablue-950/20 dark:via-background dark:to-garciablue-900/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-garciablue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-garciablue-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Resultados Comprobados
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Las empresas que trabajan con nosotros experimentan:
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              className={`relative group ${benefit.bgColor} ${benefit.borderColor} border-2 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300`}
              variants={cardVariants}
              style={{ perspective: '1000px' }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>

              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 sm:mb-6 mx-auto relative z-10`}>
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                <motion.div
                  className="absolute -top-2 -right-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-foreground bg-white dark:bg-gray-900 rounded-full p-1 shadow-md" />
                </motion.div>
              </div>

              {/* Value */}
              <div className="text-center mb-3 sm:mb-4 relative z-10">
                <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.value}
                </div>
              </div>

              {/* Label */}
              <p className="text-center text-gray-700 dark:text-muted-foreground font-medium leading-relaxed text-sm sm:text-base relative z-10">
                {benefit.label}
              </p>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-garciablue-400 to-garciablue-500 opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r from-garciablue-500 to-garciablue-600 opacity-30"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-garciablue-500 to-garciablue-600 text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-2xl font-bold">¿Listo para estos resultados?</h3>
              </div>
              <p className="text-garciablue-100 text-lg mb-6">
                Da el primer paso hacia la automatización inteligente
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-garciablue-600 px-6 py-3 rounded-full font-semibold hover:bg-garciablue-50 transition-colors cursor-pointer"
              >
                <span>Solicitar auditoría gratuita</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}