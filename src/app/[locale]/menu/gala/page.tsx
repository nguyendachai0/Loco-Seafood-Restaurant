'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useLocalePath } from '@/lib/utils/navigation';

export default function GalaMenuPage() {
  const t = useTranslations('galaMenu');
  const locale = useLocale();
  const getPath = useLocalePath();
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const packages = [
    {
      id: 'executive',
      name: 'Executive Package',
      nameVi: 'Gói Cao Cấp',
      price: '850,000 VND',
      courses: 5,
      image: '/images/gala-executive.png',
      highlights: [
        'Welcome cocktail and canapés',
        'Premium seafood selection',
        'Wine pairing included',
        'Dedicated event coordinator'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Package',
      nameVi: 'Gói Đặc Biệt',
      price: '1,200,000 VND',
      courses: 7,
      image: '/images/gala-premium.png',
      highlights: [
        'Champagne reception',
        'Lobster and king crab featured',
        'Premium wine & spirits',
        'Custom menu design',
        'Professional photography'
      ],
      featured: true
    },
    {
      id: 'royal',
      name: 'Royal Banquet',
      nameVi: 'Tiệc Hoàng Gia',
      price: 'Custom Pricing',
      courses: 9,
      image: '/images/gala-royal.png',
      highlights: [
        'Exclusive seafood delicacies',
        'Premium champagne & wine cellar',
        'Live cooking stations',
        'Full event planning service',
        'Floral arrangements included',
        'Entertainment coordination'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Quote request submitted! Our events team will contact you within 24 hours.');
    console.log('Gala quote request:', formData);
    setShowQuoteForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Breadcrumb */}
      <Section background="gray" padding="sm">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href={getPath('/menu')} className="hover:text-ocean transition-colors">
            Menu Hub
          </Link>
          <span>/</span>
          <span className="text-ocean font-medium">{t('breadcrumb')}</span>
        </div>
      </Section>

      {/* Hero */}
      <Section background="ocean" padding="lg">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setShowQuoteForm(true)}
            >
              {t('hero.cta')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('/downloads/gala-menu-2025.pdf', '_blank')}
            >
              📥 {t('hero.downloadPdf')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Packages */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ocean mb-4">
            {t('packages.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('packages.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              padding="none" 
              className={`overflow-hidden ${pkg.featured ? 'ring-4 ring-gold shadow-2xl scale-105' : ''}`}
            >
              {pkg.featured && (
                <div className="bg-gold text-white text-center py-2 font-semibold">
                  ⭐ {t('packages.mostPopular')}
                </div>
              )}
              
              <div className="relative h-48">
                <Image
                  src={pkg.image}
                  alt={locale === 'vi' ? pkg.nameVi : pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-ocean mb-2">
                  {locale === 'vi' ? pkg.nameVi : pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gold">{pkg.price}</span>
                  <span className="text-gray-600">{t('packages.perPerson')}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {pkg.courses} {t('packages.courses')} • {t('packages.minGuests')}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-0.5">✓</span>
                      <span className="text-navy">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={pkg.featured ? 'primary' : 'outline'}
                  fullWidth
                  onClick={() => setShowQuoteForm(true)}
                >
                  {t('packages.requestQuote')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ocean mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={`/images/gallery-${num}.png`}
                alt={`Event ${num}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold">{t('gallery.view')}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif font-bold text-ocean">
                {t('quoteForm.title')}
              </h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.name')} <span className="text-coral">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.company')}
      </label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.email')} <span className="text-coral">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.phone')} <span className="text-coral">*</span>
      </label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.eventDate')} <span className="text-coral">*</span>
      </label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        required
        min={new Date().toISOString().split('T')[0]}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('quoteForm.guestCount')} <span className="text-coral">*</span>
      </label>
      <select
        name="guestCount"
        value={formData.guestCount}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
      >
        <option value="">{t('quoteForm.guestSelect')}</option>
        <option value="50-100">{t('quoteForm.guests50_100')}</option>
        <option value="100-200">{t('quoteForm.guests100_200')}</option>
        <option value="200-300">{t('quoteForm.guests200_300')}</option>
        <option value="300+">{t('quoteForm.guests300plus')}</option>
      </select>
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {t('quoteForm.details')}
    </label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={4}
      placeholder={t('quoteForm.detailsPlaceholder')}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent resize-none text-navy"
    />
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <p className="text-sm text-blue-800">
      ℹ️ {t('quoteForm.note')}
    </p>
  </div>

  <div className="flex gap-4">
    <Button
      type="button"
      variant="ghost"
      fullWidth
      onClick={() => setShowQuoteForm(false)}
    >
      {t('quoteForm.cancel')}
    </Button>
    <Button
      type="submit"
      variant="primary"
      fullWidth
    >
      {t('quoteForm.submit')}
    </Button>
  </div>
</form>

          </Card>
        </div>
      )}
    </>
  );
}