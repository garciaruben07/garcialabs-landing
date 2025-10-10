'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from 'lucide-react';

export function HeroSection() {

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-garciablue-50/20 dark:to-garciablue-950/20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-garciablue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-garciablue-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-garciablue-600/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-garciablue-300/10 rounded-full blur-xl"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-1/4 text-garciablue-500/20"
        variants={floatingVariants}
        animate="float"
      >
        <Sparkles size={32} />
      </motion.div>
      <motion.div
        className="absolute top-32 right-1/4 text-garciablue-400/20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      >
        <Zap size={28} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/3 text-garciablue-600/20"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 4 }}
      >
        <TrendingUp size={36} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6"
            variants={itemVariants}
          >
            Automatiza tu empresa con{' '}
            <span className="bg-gradient-to-r from-garciablue-500 to-garciablue-700 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Aumenta tu productividad hasta un 60% con nuestras soluciones de IA personalizadas para PYMEs
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-garciablue-500 hover:bg-garciablue-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Solicitar Auditoría Gratuita
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 border-garciablue-500 text-garciablue-600 hover:bg-garciablue-50 dark:hover:bg-garciablue-950/20 group"
              asChild
            >

            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-garciablue-50 dark:bg-garciablue-950/30 text-garciablue-700 dark:text-garciablue-300 px-4 py-2 rounded-full text-sm font-medium border border-garciablue-200 dark:border-garciablue-800"
            variants={itemVariants}
          >
            <Sparkles className="h-4 w-4" />
            Solo 10 auditorías gratuitas al mes
          </motion.div>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {[
            { value: '60%', label: 'Aumento productividad' },
            { value: '30h', label: 'Ahorro semanal' },
            { value: '300%', label: 'ROI promedio' },
            { value: '95%', label: 'Satisfacción cliente' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-garciablue-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-6 h-10 border-2 border-garciablue-500/60 rounded-full flex justify-center items-start pt-2 bg-white/10 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-3 bg-garciablue-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}