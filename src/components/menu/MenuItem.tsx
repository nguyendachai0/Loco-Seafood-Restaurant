'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { MenuItem as MenuItemType } from '@/types';
import { formatPrice } from '@/lib/utils/format';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const locale = useLocale() as 'en' | 'vi';
  const t = useTranslations('menu');

  return (
    <div className="py-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors rounded-lg px-4">
      <div className="flex gap-4">
        {/* Image */}
        {item.image && (
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name[locale]}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title and Badges */}
          <div className="mb-2">
            <h3 className="text-base sm:text-lg font-semibold text-ocean mb-1">
              {item.name[locale]}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {item.isSpecialty && (
                <span className="inline-block px-2 py-0.5 text-xs bg-gold text-white rounded whitespace-nowrap">
                  ⭐ {t('specialty')}
                </span>
              )}
              {item.isSpicy && (
                <span className="inline-block px-2 py-0.5 text-xs bg-coral text-white rounded whitespace-nowrap">
                  🌶️ {t('spicy')}
                </span>
              )}
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-3">
            {item.description[locale]}
          </p>
          
          {/* Price */}
          <p className="text-lg sm:text-xl font-bold text-gold">
            {formatPrice(item.price, item.currency, locale)}
          </p>
        </div>
      </div>
    </div>
  );
}