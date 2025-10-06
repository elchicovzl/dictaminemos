/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comentado para permitir API routes en Vercel
  // Para export estático, descomenta la siguiente línea:
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
  },
  // Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable compression
  compress: true,
  // Optimize production build
  swcMinify: true,
  // Trailing slash for better SEO
  trailingSlash: false,
  // Generate ETags for better caching
  generateEtags: true,
  // Power Page Extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // React strict mode for better performance
  reactStrictMode: true,
  // Production source maps disabled for performance
  productionBrowserSourceMaps: false,
  // Optimize fonts
  optimizeFonts: true,
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
  // PostHog rewrites to proxy analytics requests
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ]
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
}

export default nextConfig
