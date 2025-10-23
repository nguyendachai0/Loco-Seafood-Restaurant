'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { RESTAURANT_INFO } from '@/lib/utils/constants';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submission would be handled here. In production, this would send to your backend API or email service.');
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          {/* Contact Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent text-navy"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent resize-none text-navy"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                {t('submit')}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-serif font-bold text-ocean mb-6">
                {t('info.title')}
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-ocean mb-2">
                    {t('info.address')}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'vi' ? RESTAURANT_INFO.addressVi : RESTAURANT_INFO.address}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-ocean mb-2">
                    {t('info.phone')}
                  </h3>
                  <a 
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-gold hover:text-gold-dark transition-colors"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-ocean mb-2">
                    {t('info.email')}
                  </h3>
                  <a 
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-gold hover:text-gold-dark transition-colors"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-ocean mb-2">
                    {t('info.hours')}
                  </h3>
                  <div className="text-gray-700 space-y-1">
                    <p>Tuesday - Friday: {RESTAURANT_INFO.hours.weekday}</p>
                    <p>Saturday - Sunday: {RESTAURANT_INFO.hours.weekend}</p>
                    <p className="text-coral">Monday: {RESTAURANT_INFO.hours.monday}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}