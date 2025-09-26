export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GarcIALabs",
    "description": "Especialistas en automatización de procesos empresariales con inteligencia artificial para PYMEs",
    "url": "https://garcialabs.com",
    "logo": "https://garcialabs.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@garcialabs.com",
      "availableLanguage": ["Spanish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://linkedin.com/company/garcialabs",
      "https://twitter.com/garcialabs"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatización Empresarial con IA",
    "description": "Servicios de automatización de procesos empresariales, capacitación en IA y consultoría en productividad",
    "provider": {
      "@type": "Organization",
      "name": "GarcIALabs"
    },
    "areaServed": "ES",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos",
            "description": "Automatización de documentos, emails y tareas repetitivas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Capacitación en IA",
            "description": "Formación de equipos en el uso efectivo de herramientas de inteligencia artificial"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría en Productividad",
            "description": "Identificación de oportunidades de mejora y diseño de estrategias de implementación"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Es realmente gratuita la auditoría?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, completamente gratuita y sin compromiso. Analizamos tus procesos y te entregamos un informe detallado con recomendaciones específicas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tan difícil es implementar IA en una PYME?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con nuestro enfoque step-by-step es muy sencillo. Nos encargamos de toda la implementación técnica y capacitamos a tu equipo para que puedas aprovechar al máximo las herramientas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma ver resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los primeros resultados los verás en 2-4 semanas. El ROI completo típicamente se alcanza entre 3-6 meses, dependiendo del alcance del proyecto."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}