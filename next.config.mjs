/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join('/', 'styles')],
  },
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['imgix.cosmicjs.com'],
  },
};

export default nextConfig;
