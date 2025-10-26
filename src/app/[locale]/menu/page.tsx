'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { useLocalePath } from '@/lib/utils/navigation';

export default function MenuHubPage() {
  const t = useTranslations('menuHub');
  const locale = useLocale();
  const getPath = useLocalePath();

  const menuTypes = [
    {
      id: 'alacarte',
      icon: '🍽️',
      titleKey: 'alacarte.title',
      descKey: 'alacarte.description',
      features: ['alacarte.feature1', 'alacarte.feature2', 'alacarte.feature3'],
      ctaKey: 'alacarte.cta',
      href: getPath('/menu/alacarte'),
      badgeKey: 'alacarte.badge',
      badgeColor: 'bg-gold',
      color: 'ocean',
      image: '/images/alacarte-preview.png'
    },
    {
      id: 'gala',
      icon: '🎉',
      titleKey: 'gala.title',
      descKey: 'gala.description',
      features: ['gala.feature1', 'gala.feature2', 'gala.feature3'],
      ctaKey: 'gala.cta',
      href: getPath('/menu/gala'),
      badgeKey: 'gala.badge',
      badgeColor: 'bg-coral',
      color: 'coral',
      image: '/images/gala-preview.png'
    },
    {
      id: 'tour',
      icon: '🚌',
      titleKey: 'tour.title',
      descKey: 'tour.description',
      features: ['tour.feature1', 'tour.feature2', 'tour.feature3'],
      ctaKey: 'tour.cta',
      href: getPath('/menu/tour-partner'),
      badgeKey: 'tour.badge',
      badgeColor: 'bg-ocean',
      color: 'ocean-dark',
      image: '/images/tour-preview.png'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="ocean" padding="lg">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95">
            {t('hero.subtitle')}
          </p>
        </div>
      </Section>

      {/* Menu Type Cards */}
      <Section background="white" padding="lg">
        <div className="grid md:grid-cols-3 gap-8">
          {menuTypes.map((menu) => (
            <a
              key={menu.id}
              href={menu.href}
              className="group block"
            >
              <Card 
                hover 
                padding="none" 
                className="h-full overflow-hidden border-2 border-transparent group-hover:border-ocean transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={t(menu.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${menu.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
                    {t(menu.badgeKey)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{menu.icon}</span>
                    <h2 className="text-2xl font-serif font-bold text-ocean">
                      {t(menu.titleKey)}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {t(menu.descKey)}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {menu.features.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-gold mt-0.5">✓</span>
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="bg-gradient-ocean text-white text-center py-3 rounded-lg font-semibold group-hover:shadow-lg transition-shadow">
                    {t(menu.ctaKey)} →
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-ocean mb-4">
              {t('help.title')}
            </h3>
            <p className="text-gray-700 mb-6">
              {t('help.description')}
            </p>
            <a 
              href={getPath('/contact')}
              className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              {t('help.cta')}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}