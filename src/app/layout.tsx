import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://garcialabs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-inter antialiased bg-background text-foreground">
        <Analytics />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#333',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}