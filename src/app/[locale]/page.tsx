import HomeHero from '@/components/HomeHero';
import AboutUs from '@/components/AboutUs';
import ServicesSection from '@/components/ServicesSection';
import WellnessSection from '@/components/WellnessSection';
import TherapeuticSection from '@/components/TherapeuticSection';
import AppointmentSection from '@/components/AppointmentSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <AboutUs />
      <ServicesSection />
      <WellnessSection />
      <TherapeuticSection />
      <TestimonialsSection />
      <AppointmentSection />
    </main>
  );
}
