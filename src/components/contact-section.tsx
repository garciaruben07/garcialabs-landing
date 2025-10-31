'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  Send,
  Shield,
  Clock,
  Target,
  Sparkles
} from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa es requerido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Describe tu empresa y necesidades')
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Mostrar toast de carga
      const loadingToast = toast.loading('Enviando mensaje...');

      // Enviar el formulario usando Server Action
      const result = await submitContactForm(data);

      // Cerrar el toast de carga
      toast.dismiss(loadingToast);

      if (result.success) {
        // Mostrar mensaje de éxito
        toast.success(result.message || '¡Mensaje enviado con éxito!', {
          duration: 5000,
          icon: '✅',
        });
        // Resetear el formulario
        reset();
      } else {
        // Mostrar mensaje de error
        toast.error(result.error || 'Error al enviar el mensaje', {
          duration: 5000,
          icon: '❌',
        });
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Error inesperado. Por favor, intenta de nuevo.', {
        duration: 5000,
        icon: '❌',
      });
      console.error('Error al enviar formulario:', error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-garciablue-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-garciablue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-garciablue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-garciablue-600/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Solicita tu Auditoría Gratuita
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubre cómo la IA puede transformar tu empresa. Sin compromiso, 100% confidencial.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="w-4 h-4" />
                      Nombre completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      {...register('name')}
                      className="h-12"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mail className="w-4 h-4" />
                      Email corporativo
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      {...register('email')}
                      className="h-12"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Building2 className="w-4 h-4" />
                      Nombre de la empresa
                    </Label>
                    <Input
                      id="company"
                      placeholder="Mi Empresa SL"
                      {...register('company')}
                      className="h-12"
                    />
                    {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Phone className="w-4 h-4" />
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 123 456"
                      {...register('phone')}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <MessageSquare className="w-4 h-4" />
                      Cuéntanos sobre tu empresa y necesidades
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe tu empresa, procesos actuales y qué te gustaría automatizar..."
                      {...register('message')}
                      rows={4}
                      className="resize-none"
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-garciablue-500 hover:bg-garciablue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Solicitar Auditoría Gratuita
                        </>
                      )}
                    </div>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Features */}
            <div className="space-y-8">
              {[
                { icon: Shield, title: "100% Confidencial" },
                { icon: Clock, title: "Sin Compromiso" },
                { icon: Target, title: "Resultados Garantizados" },
                { icon: Sparkles, title: "Solo 10 auditorías por mes" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-garciablue-500 to-garciablue-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">{feature.title}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="bg-garciablue-50 rounded-2xl p-6 border border-garciablue-200 mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-foreground mb-4">¿Prefieres hablar directamente?</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-garciablue-500" />
                    <span>ruben@garcialabs.es</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-garciablue-500" />
                    <span>+34 629 167 110</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-garciablue-500" />
                    <span>Lun - Vie, 9:00 - 18:00</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}