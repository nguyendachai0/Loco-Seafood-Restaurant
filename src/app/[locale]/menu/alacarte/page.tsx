'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MenuCategory from '@/components/menu/MenuCategory';
import menuData from '@/lib/data/menuData.json';
import { useLocalePath } from '@/lib/utils/navigation';

export default function AlaCarteMenuPage() {
  const t = useTranslations('menu');
  const getPath = useLocalePath();

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href={getPath('/menu')} className="hover:text-ocean transition-colors">
            {t('breadcrumb.menu')}
          </Link>
          <span>/</span>
          <span className="text-ocean font-medium">{t('breadcrumb.alacarte')}</span>
        </div>
      </Section>

      {/* Header */}
      <Section background="ocean" padding="md">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/95">
            {t('subtitle')}
          </p>
        </div>
      </Section>

      {/* Menu Content */}
      <Section background="white">
        {menuData.categories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}

        {/* CTAs */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Order Online */}
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-ocean mb-4">
              {t('orderOnline')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('orderOnlineDescription')}
            </p>
            <Button 
              href="#"
              variant="secondary"
              size="lg"
              onClick={() => alert('This would link to GrabFood, ShopeeFood, etc.')}
            >
              {t('orderOnline')}
            </Button>
          </div>

          {/* Reserve Table */}
          <div className="text-center p-8 bg-ocean/5 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-ocean mb-4">
              {t('reserveTitle')}
            </h3>
            <p className="text-gray-600 mb-4">
              {t('reserveDescription')}
            </p>
            <Button 
              href={getPath('/reserve')}
              variant="primary"
              size="lg"
            >
              {t('reserve')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}