import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin({
  experimental: {
    // Provide the path to the messages that you're using in `AppConfig`
    createMessagesDeclaration: [
      'src/messages/en.json',
      'src/messages/vi.json',
      'src/messages/kr.json',
    ]
  }
  // ...
});
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    formats: [...['image/webp', 'image/avif'] as const],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384] ,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = withNextIntl(nextConfig);