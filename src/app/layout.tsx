import type { Metadata } from "next";
import { Analytics } from '@/components/analytics';
import { StructuredData } from '@/components/structured-data';
import './globals.css';

export const metadata: Metadata = {
  title: "GarcIALabs - Automatización empresarial con IA",
  description: "Especialistas en automatización de procesos empresariales con IA. Aumenta tu productividad hasta un 60%. Auditoría gratuita para PYMEs.",
  keywords: "automatización, inteligencia artificial, IA, PYME, productividad, consultoría",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GarcIALabs - Automatización empresarial con IA",
    description: "Especialistas en automatización de procesos empresariales con IA",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GarcIALabs - Automatización empresarial con IA",
    description: "Especialistas en automatización de procesos empresariales con IA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <StructuredData />
        <link rel="canonical" href="https://garcialabs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="font-inter antialiased bg-background text-foreground">
        <Analytics />
        {children}
      </body>
    </html>
  );
}