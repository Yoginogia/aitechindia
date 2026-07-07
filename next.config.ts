import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for optimized images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'image.pollinations.ai',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
  compress: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/ai-google-gemini-chrome-launch-2026-04-21',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/samsung-galaxy-s26-ultra-review',
        destination: '/blog/samsung-s26-ultra-review',
        permanent: true,
      },
      {
        source: '/blog/hp-omnibook-5-oled-review',
        destination: '/best-laptops',
        permanent: true,
      },
      {
        source: '/blog/asus-rog-zephyrus-g16-review',
        destination: '/best-laptops',
        permanent: true,
      },
      {
        source: '/blog/apple-macbook-air-m4-review',
        destination: '/best-laptops',
        permanent: true,
      },
      {
        source: '/blog/samsung-galaxy-book6-ultra-review',
        destination: '/best-laptops',
        permanent: true,
      },
      {
        source: '/top-deals/asus-zenbook-14-core-ultra-7-series-2',
        destination: '/top-deals',
        permanent: true,
      },
      {
        source: '/top-deals/xiaomi-17-ultra',
        destination: '/top-deals',
        permanent: true,
      },
      {
        source: '/dictionary',
        destination: '/',
        permanent: true,
      },
      {
        source: '/web-stories/:slug([a-zA-Z0-9_-]+)',
        destination: '/web-stories/:slug.html',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
