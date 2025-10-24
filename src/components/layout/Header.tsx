'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLocalePath } from '@/lib/utils/navigation';
import { ROUTES } from '@/lib/utils/constants';
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const getPath = useLocalePath();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: getPath(ROUTES.home) },
    { name: t('menu'), href: getPath(ROUTES.menu) },
    { name: t('location'), href: getPath(ROUTES.location) },
    { name: t('contact'), href: getPath(ROUTES.contact) },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ocean shadow-md">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="text-2xl font-serif font-bold text-white hover:text-gold transition-colors"
          >
            Loco Seafood
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            <Button 
              href={`/${locale}${ROUTES.reserve}`}
              variant="primary"
              size="md"
            >
              {t('reserve')}
            </Button>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                href={`/${locale}${ROUTES.reserve}`}
                onClick={() => setIsMenuOpen(false)} 
                variant="primary"
                size="md"
                fullWidth
              >
                {t('reserve')}
              </Button>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}