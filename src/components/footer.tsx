'use client';

import { motion } from 'framer-motion';
import { Logo } from '@/components/logo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Linkedin,
  Twitter,
  ArrowUp
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-garciablue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Logo variant="symbol" size={24} className="brightness-0 invert" />
                  <h3 className="text-2xl font-bold">GarcIALabs</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Especialistas en automatización empresarial con IA para PYMEs
                </p>
              </motion.div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4 text-garciablue-400" />
                  <span>Madrid, España</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 text-garciablue-400" />
                  <span>+34 600 123 456</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 text-garciablue-400" />
                  <span>hola@garcialabs.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-garciablue-400" />
                  <span>Lun - Vie, 9:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Navegación</h4>
              <ul className="space-y-3">
                {[
                  { name: "Servicios", href: "#services" },
                  { name: "Proceso", href: "#process" },
                  { name: "Testimonios", href: "#testimonials" },
                  { name: "Preguntas Frecuentes", href: "#faq" },
                  { name: "Contacto", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: "Privacidad", href: "#" },
                  { name: "Términos", href: "#" },
                  { name: "Cookies", href: "#" },
                  { name: "Acerca de", href: "#" },
                  { name: "Blog", href: "#" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-center pt-12 mt-12 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6 lg:mb-0">
              <span className="text-gray-400 text-sm mr-2">Síguenos:</span>
              <a
                href="https://linkedin.com/company/garcialabs"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/garcialabs"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hola@garcialabs.com"
                aria-label="Email"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-garciablue-400 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-400">¿Listo para automatizar?</div>
                <div className="text-xs text-gray-500">Solicita tu auditoría gratuita</div>
              </div>
              <a
                href="#contact"
                className="bg-garciablue-500 hover:bg-garciablue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 group"
              >
                <span>Empezar ahora</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="py-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 GarcIALabs. Todos los derechos reservados.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SSL Seguro</span>
              </div>
              <div className="w-px h-3 bg-gray-700"></div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-garciablue-500/20 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
}