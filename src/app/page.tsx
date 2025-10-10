import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ProcessSection } from '@/components/process-section';
import { BenefitsSection } from '@/components/benefits-section';
import { FAQSection } from '@/components/faq-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
