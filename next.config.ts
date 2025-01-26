import { NextConfig, withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
