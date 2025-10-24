'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import menuData from '@/lib/data/menuData.json';
import { formatPrice } from '@/lib/utils/format';

export default function SpecialtiesSection() {
  const t = useTranslations('home.specialties');
  const locale = useLocale() as 'en' | 'vi';

  const specialties = menuData.categories
    .flatMap(category => category.items)
    .filter(item => item.isSpecialty === true)
    .slice(0, 3);

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean mb-4">
          {t('title')}
        </h2>
        <p className="text-xl text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {specialties.map((item) => (
          <Card key={item.id} hover padding="none" className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={item.image || '/images/placeholder-dish.jpg'}
                alt={item.name[locale] || 'Specialty dish'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-ocean mb-2">
                {item.name[locale as keyof typeof item.name]}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description[locale as keyof typeof item.description]}
              </p>
              <p className="text-2xl font-bold text-gold">
                {formatPrice(item.price, item.currency, locale)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}