'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/utils/constants';
import { useLocalePath } from '@/lib/utils/navigation';

export default function HeroSection() {
  const t = useTranslations('home.hero');
  const getPath = useLocalePath();

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-seafood.png"
          alt="Fresh seafood dishes"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 to-ocean/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95">
            {t('subtitle')}
          </p>
          <Button 
            href={getPath(ROUTES.reserve)}
            variant="primary"
            size="lg"
            className="text-lg"
          >
            {t('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}