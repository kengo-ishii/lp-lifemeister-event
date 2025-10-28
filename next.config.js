/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13+
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  // パフォーマンス最適化
  poweredByHeader: false, // X-Powered-By ヘッダーを削除
  reactStrictMode: true, // React Strict Mode を有効化
  compress: true, // gzip圧縮を有効化
  
  // 不要なソースマップを無効化（本番環境）
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
