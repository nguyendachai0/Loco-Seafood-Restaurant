import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ROUTES } from '@/lib/utils/constants';

export default function CTASection() {
  const t = useTranslations('home.cta');
  const locale = useLocale();

  return (
    <Section background="ocean" padding="lg">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          {t('title')}
        </h2>
        <p className="text-xl mb-8 text-white/95">
          {t('description')}
        </p>
        <Button 
          href={`/${locale}${ROUTES.reserve}`}
          variant="primary"
          size="lg"
          className="shadow-2xl"
        >
          {t('button')}
        </Button>
      </div>
    </Section>
  );
}