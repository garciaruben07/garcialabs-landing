'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "¿Es realmente gratuita la auditoría?",
      answer: "Sí, completamente gratuita y sin compromiso. Analizamos tus procesos y te entregamos un informe detallado con recomendaciones específicas."
    },
    {
      question: "¿Qué tan difícil es implementar IA en una PYME?",
      answer: "Con nuestro enfoque step-by-step es muy sencillo. Nos encargamos de toda la implementación técnica y capacitamos a tu equipo para que puedas aprovechar al máximo las herramientas."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Los primeros resultados los verás en 1-3 semanas. El ROI completo típicamente se alcanza entre 2-3 meses, dependiendo del alcance del proyecto."
    },
    {
      question: "¿Qué pasa si mi equipo no tiene conocimientos técnicos?",
      answer: "No hay problema. Nuestras soluciones están diseñadas para ser user-friendly y brindamos capacitación completa a todo tu equipo."
    },
    {
      question: "¿Trabajan con empresas de todos los tamaños?",
      answer: "Sí, desde startups hasta empresas establecidas. Adaptamos nuestras soluciones al tamaño, presupuesto y necesidades específicas de cada cliente."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-garciablue-50/10 via-background to-garciablue-100/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-garciablue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-garciablue-600/5 rounded-full blur-2xl"></div>
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
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Resolvemos tus dudas sobre IA y automatización
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-10 h-10 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-foreground text-lg">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 ml-14">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="text-center mt-12">
          <div className="bg-garciablue-50 rounded-2xl p-6 border border-garciablue-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-garciablue-600" />
              <h3 className="text-xl font-bold text-foreground">¿Tienes más preguntas?</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo está aquí para ayudarte. Agenda una consulta gratuita y resolvamos todas tus dudas sobre IA y automatización.
            </p>
            <div className="inline-flex items-center gap-2 bg-garciablue-500 hover:bg-garciablue-600 text-white px-6 py-3 rounded-full font-semibold transition-colors cursor-pointer">
              <span>Consulta gratuita</span>
              <HelpCircle className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}