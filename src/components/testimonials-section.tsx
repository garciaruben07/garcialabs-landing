'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Building2, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "María González",
      company: "TechSolutions SL",
      role: "CEO",
      content: "Desde que implementamos la automatización con GarcIALabs, hemos ahorrado más de 25 horas semanales. Nuestro ROI fue del 280% en solo 4 meses."
    },
    {
      name: "Carlos Martínez",
      company: "InnovatePYME",
      role: "Director de Operaciones",
      content: "La capacitación en IA transformó completamente nuestro equipo. Ahora somos mucho más eficientes y competitivos en el mercado."
    },
    {
      name: "Ana Rodríguez",
      company: "ServiExpress",
      role: "Gerente General",
      content: "La auditoría gratuita nos abrió los ojos. Implementamos sus recomendaciones y mejoramos nuestra productividad en un 45%."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-background via-garciablue-50/20 to-background dark:via-garciablue-950/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-garciablue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-garciablue-600/5 rounded-full blur-2xl"></div>
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
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Historias de éxito reales de empresas como la tuya
          </motion.p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 relative group">
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <div className="w-12 h-12 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 transform -skew-x-12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden">
          <div className="relative max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-garciablue-100 dark:bg-garciablue-900 text-garciablue-600 dark:text-garciablue-400 hover:bg-garciablue-200 dark:hover:bg-garciablue-800 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? 'bg-garciablue-500' 
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-garciablue-100 dark:bg-garciablue-900 text-garciablue-600 dark:text-garciablue-400 hover:bg-garciablue-200 dark:hover:bg-garciablue-800 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}