import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import MenuCategory from '@/components/menu/MenuCategory';
import menuData from '@/lib/data/menuData.json';

export const metadata = {
  title: "Menu - Ocean's Pearl Seafood Restaurant",
  description: 'Explore our selection of fresh seafood dishes, from appetizers to main courses and beverages.',
};

export default function MenuPage() {
  const t = useTranslations('menu');
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

      {/* Menu Content */}
      <Section background="white">
        {menuData.categories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}

        {/* Order Online CTA */}
        <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-ocean mb-4">
            {t('orderOnline')}
          </h3>
          <Button 
            href="#"
            variant="secondary"
            size="lg"
            onClick={() => alert('This would link to a delivery service like GrabFood or ShopeeFood')}
          >
            {t('orderOnline')}
          </Button>
        </div>
      </Section>
    </>
  );
}