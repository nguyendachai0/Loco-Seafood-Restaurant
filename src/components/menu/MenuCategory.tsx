import { useLocale } from 'next-intl';
import { MenuCategory as MenuCategoryType } from '@/types';
import MenuItem from './MenuItem';
import Card from '@/components/ui/Card';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  const locale = useLocale() as 'en' | 'vi';

  return (
    <Card className="mb-8" padding="lg">
      <h2 className="text-3xl font-serif font-bold text-ocean mb-6 pb-4 border-b-2 border-gold">
        {category.name[locale]}
      </h2>
      <div>
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </Card>
  );
}