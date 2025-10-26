import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/ui/Section';

export default function AboutSection() {
  const t = useTranslations('home.about');

  return (
    <Section background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/fresh-catch.jpg"
            alt="Fresh seafood selection"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>
    </Section>
  );
}