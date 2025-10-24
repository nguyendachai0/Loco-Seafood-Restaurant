import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { RESTAURANT_INFO, ROUTES } from '@/lib/utils/constants';

export const metadata = {
  title: "Location - Loco Seafood Restaurant",
  description: 'Visit us at 123 Võ Nguyên Giáp, Da Nang. Check our opening hours and get directions.',
};

export default function LocationPage() {
  const t = useTranslations('location');
  const locale = useLocale();

  return (
    <>
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

      {/* Content */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          {/* <Card padding="none" className="overflow-hidden h-[400px]">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">
                  Map Integration Placeholder<br />
                  (Integrate Google Maps or OpenStreetMap)
                </p>
              </div>
            </div>
          </Card> */}
          <Card padding="none" className="overflow-hidden">
                            <div className="relative h-full w-full">
                                {/* Google Maps Embed for Loco Restaurant 1C Le Duan */}
                                <iframe
                                    title="Loco Restaurant Location Da Nang"
                                    src={RESTAURANT_INFO.mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg shadow-inner absolute top-0 left-0"
                                ></iframe>
                            </div>
            </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-serif font-bold text-ocean mb-4">
                {t('address')}
              </h2>
              <p className="text-gray-700 text-lg">
                {locale === 'vi' ? RESTAURANT_INFO.addressVi : RESTAURANT_INFO.address}
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl font-serif font-bold text-ocean mb-4">
                {t('hours')}
              </h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">{t('tuesday')} - {t('friday')}:</span>
                  <span>{RESTAURANT_INFO.hours.weekday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">{t('saturday')} - {t('sunday')}:</span>
                  <span>{RESTAURANT_INFO.hours.weekend}</span>
                </div>
                <div className="flex justify-between text-coral">
                  <span className="font-medium">{t('monday')}:</span>
                  <span>{t('closed')}</span>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-serif font-bold text-ocean mb-4">
                {t('phone')}
              </h2>
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="text-lg text-gold hover:text-gold-dark transition-colors"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </Card>

            <Card>
              <h2 className="text-2xl font-serif font-bold text-ocean mb-4">
                {t('email')}
              </h2>
              <a 
                href={`mailto:${RESTAURANT_INFO.email}`}
                className="text-lg text-gold hover:text-gold-dark transition-colors"
              >
                {RESTAURANT_INFO.email}
              </a>
            </Card>

            <Button 
              href={`/${locale}${ROUTES.reserve}`}
              variant="primary"
              size="lg"
              fullWidth
            >
              {t('cta')}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}