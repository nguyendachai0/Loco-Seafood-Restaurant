'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useLocalePath } from '@/lib/utils/navigation';

export default function TourPartnerMenuPage() {
  const t = useTranslations('tourMenu');
  const getPath = useLocalePath();
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    companyType: '',
    message: ''
  });

  const benefitIcons = ['💰', '⚡', '🎯', '🤝'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Partner access request:', formData);
    
    // Simulate email being sent
    alert(t('alert.success'));
    
    // Grant access to view sample info
    setAccessGranted(true);
    setShowAccessForm(false);
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
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🚌 {t('hero.partnerOnly')}
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8">
            {t('hero.subtitle')}
          </p>
          
          {!accessGranted ? (
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setShowAccessForm(true)}
            >
              🔐 {t('hero.cta')}
            </Button>
          ) : (
            <div className="bg-gold/20 backdrop-blur-sm border border-gold rounded-lg p-4 inline-block">
              <p className="text-gold font-semibold">✓ {t('hero.accessGranted')}</p>
            </div>
          )}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ocean mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitIcons.map((icon, idx) => (
            <Card key={idx} className="text-center" hover>
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-ocean mb-2">
                {t(`benefits.items.${idx}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`benefits.items.${idx}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sample Menu Overview (Teaser) */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ocean mb-4">
            {t('menuOverview.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('menuOverview.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {['standard', 'deluxe', 'premium'].map((tierKey, index) => (
            <Card key={tierKey} className={`text-center ${index === 1 ? 'ring-2 ring-gold' : ''}`}>
              {index === 1 && (
                <div className="bg-gold text-white text-sm font-semibold py-1 -mt-6 mb-4 rounded-t-lg">
                  {t('menuOverview.mostPopular')}
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold text-ocean mb-2">
                {t(`menuOverview.tiers.${tierKey}.name`)}
              </h3>
              <div className="text-3xl font-bold text-gold mb-2">
                {t(`menuOverview.tiers.${tierKey}.price`)}
                <span className="text-sm text-gray-600 ml-1">
                  {t('menuOverview.per')}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {t(`menuOverview.tiers.${tierKey}.courses`)} {t('menuOverview.courses')}
              </p>
              <div className="bg-gray-100 rounded-lg p-4 blur-sm select-none">
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                🔒 {t('menuOverview.requestAccess')}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="ocean" padding="lg">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/95 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => setShowAccessForm(true)}
            >
              {t('cta.requestAccess')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = getPath('/contact')}
            >
              {t('cta.contactTeam')}
            </Button>
          </div>
        </div>
      </Section>

      {/* Access Request Form Modal */}
      {showAccessForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-ocean">
                  {t('form.title')}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t('form.subtitle')}
                </p>
              </div>
              <button
                onClick={() => setShowAccessForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.name')} <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.company')} <span className="text-coral">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.email')} <span className="text-coral">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form.phone')} <span className="text-coral">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.companyType')} <span className="text-coral">*</span>
                </label>
                <select
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent"
                >
                  <option value="">{t('form.companyTypePlaceholder')}</option>
                  <option value="tour-operator">{t('form.companyTypes.tourOperator')}</option>
                  <option value="travel-agency">{t('form.companyTypes.travelAgency')}</option>
                  <option value="hotel-concierge">{t('form.companyTypes.hotelConcierge')}</option>
                  <option value="corporate-travel">{t('form.companyTypes.corporateTravel')}</option>
                  <option value="other">{t('form.companyTypes.other')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.additionalInfo')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t('form.additionalInfoPlaceholder')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean focus:border-transparent resize-none"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>{t('form.nextStepsTitle')}</strong><br />
                  {t('form.nextSteps.step1')}<br />
                  {t('form.nextSteps.step2')}<br />
                  {t('form.nextSteps.step3')}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="ghost"
                  fullWidth
                  onClick={() => setShowAccessForm(false)}
                >
                  {t('form.cancel')}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                >
                  {t('form.submit')}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* Success Message after access granted */}
      {accessGranted && (
        <Section background="white" padding="md">
          <Card className="max-w-2xl mx-auto bg-green-50 border-green-200">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                {t('success.title')}
              </h3>
              <p className="text-green-700 mb-4">
                {t('success.message')}
              </p>
              <p className="text-sm text-green-600">
                {t('success.contact')}
              </p>
            </div>
          </Card>
        </Section>
      )}
    </>
  );
}