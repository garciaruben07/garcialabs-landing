'use server'

import { Resend } from 'resend'
import { z } from 'zod'

// Schema de validación
const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Inicializar Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validar los datos
    const validatedData = contactFormSchema.parse(data)

    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada')
      return {
        success: false,
        error: 'Error de configuración del servidor. Por favor, contacta al administrador.',
      }
    }

    // Verificar que el email de destino esté configurado
    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL no está configurada')
      return {
        success: false,
        error: 'Error de configuración del servidor. Por favor, contacta al administrador.',
      }
    }

    // Enviar el email
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Garcia Labs <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: validatedData.email,
      subject: `Nueva solicitud de auditoría de ${validatedData.company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Nueva Solicitud de Auditoría</h1>
            </div>

            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #667eea; margin-top: 0;">Información del Cliente</h2>

              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Nombre:</strong> ${validatedData.name}</p>
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Email:</strong> <a href="mailto:${validatedData.email}" style="color: #764ba2; text-decoration: none;">${validatedData.email}</a></p>
                <p style="margin: 10px 0;"><strong style="color: #667eea;">Empresa:</strong> ${validatedData.company}</p>
                ${validatedData.phone ? `<p style="margin: 10px 0;"><strong style="color: #667eea;">Teléfono:</strong> ${validatedData.phone}</p>` : ''}
              </div>

              <h3 style="color: #667eea; margin-bottom: 10px;">Mensaje</h3>
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); white-space: pre-wrap; word-wrap: break-word;">
                ${validatedData.message}
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
                <p style="margin: 5px 0;">Este email fue enviado desde el formulario de contacto de Garcia Labs</p>
                <p style="margin: 5px 0;">Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nueva Solicitud de Auditoría

INFORMACIÓN DEL CLIENTE
-----------------------
Nombre: ${validatedData.name}
Email: ${validatedData.email}
Empresa: ${validatedData.company}
${validatedData.phone ? `Teléfono: ${validatedData.phone}` : ''}

MENSAJE
-------
${validatedData.message}

---
Este email fue enviado desde el formulario de contacto de Garcia Labs
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      `,
    })

    if (error) {
      console.error('Error al enviar email:', error)
      return {
        success: false,
        error: 'No se pudo enviar el mensaje. Por favor, intenta de nuevo más tarde.',
      }
    }

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
    }
  } catch (error) {
    console.error('Error en submitContactForm:', error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Los datos del formulario no son válidos.',
      }
    }

    return {
      success: false,
      error: 'Ocurrió un error inesperado. Por favor, intenta de nuevo más tarde.',
    }
  }
}
