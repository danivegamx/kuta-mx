/** @type {import('next').NextConfig} */
import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join('/', 'styles')],
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['imgix.cosmicjs.com'],
  },
};

export default withNextIntl(nextConfig);
