import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';
import HeroSection from '@/components/home/HeroSection';
import SpecialtiesSection from '@/components/home/SpecialtiesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <CTASection />
    </>
  );
}