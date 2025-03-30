import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
