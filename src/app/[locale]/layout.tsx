import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'; // use the new routing file
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/shared/ChatWidget';
import '@/app/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "Loco Restaurant - Premium Seafood Restaurant in Da Nang",
  description:
    "Experience authentic Vietnamese seafood cuisine at Loco Restaurant. Fresh catches daily, traditional recipes, modern presentation.",
  keywords:
    'seafood restaurant, Da Nang dining, Vietnamese cuisine, fresh seafood, ocean pearl',
  openGraph: {
    title: "Loco Restaurant Seafood Restaurant",
    description:
      "Da Nang's premier destination for authentic Vietnamese seafood",
    type: 'website',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: "Loco Restaurant",
              image: 'https://example.com/images/restaurant.jpg',
              '@id': 'https://oceanspearl.vn',
              url: 'https://oceanspearl.vn',
              telephone: '+84236123456',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Võ Nguyên Giáp',
                addressLocality: 'Da Nang',
                postalCode: '550000',
                addressCountry: 'VN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 16.0544,
                longitude: 108.2442,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '10:00',
                  closes: '22:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '10:00',
                  closes: '23:00',
                },
              ],
              servesCuisine: 'Vietnamese Seafood',
              menu: 'https://oceanspearl.vn/menu',
              acceptsReservations: 'True',
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white text-navy">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <ChatWidget/>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
