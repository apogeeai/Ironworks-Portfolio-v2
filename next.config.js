
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/_next/static/:path*'
        }
      ]
    }
  }
};

module.exports = nextConfig;
