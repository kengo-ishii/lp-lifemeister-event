/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
