import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://totok.ainna.jp'),
  title: '札幌の無料撮影会｜子供・キッズ・ベビー・赤ちゃん撮影イベント｜feel by AINNA',
  description: '札幌で開催される子育て家族のための無料撮影会「feel by AINNA」。子供・キッズ・ベビー・赤ちゃんの笑顔をプロカメラマンが撮影。撮影データを無料でプレゼント。ライフプラン相談も同時開催。札幌で子育て中のご家族におすすめのイベントです。',
  keywords: ['札幌', '子育て', '無料撮影会', '子供', '撮影会', 'キッズ', 'ベビー', '赤ちゃん', '札幌 撮影会', '札幌 子供 撮影会', '札幌 無料撮影会', '札幌 子育て イベント', '家族撮影', 'ライフプラン'],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '札幌の無料撮影会｜子供・キッズ・ベビー・赤ちゃん撮影イベント｜feel by AINNA',
    description: '札幌で開催される子育て家族のための無料撮影会「feel by AINNA」。子供・キッズ・ベビー・赤ちゃんの笑顔をプロカメラマンが撮影。撮影データを無料でプレゼント。',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: '札幌 子供 無料撮影会 - feel by AINNA',
      },
    ],
    type: 'website',
    locale: 'ja_JP',
    siteName: 'feel by AINNA',
  },
  twitter: {
    card: 'summary_large_image',
    title: '札幌の無料撮影会｜子供・キッズ・ベビー・赤ちゃん撮影イベント｜feel by AINNA',
    description: '札幌で開催される子育て家族のための無料撮影会。プロカメラマンによる撮影データを無料でプレゼント。',
    images: ['/images/hero.png'],
  },
  alternates: {
    canonical: 'https://totok.ainna.jp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: '札幌 子供・キッズ・ベビー 無料撮影会 feel by AINNA',
    description: '札幌で開催される子育て家族のための無料撮影会。子供・キッズ・ベビー・赤ちゃんの笑顔をプロカメラマンが撮影し、撮影データを無料でプレゼント。',
    location: {
      '@type': 'Place',
      name: '札幌',
      address: {
        '@type': 'PostalAddress',
        addressLocality: '札幌市',
        addressRegion: '北海道',
        addressCountry: 'JP',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'AINNA',
      url: 'https://totok.ainna.jp',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'JPY',
      availability: 'https://schema.org/InStock',
      description: '無料撮影会',
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    audience: {
      '@type': 'Audience',
      audienceType: '子育て中の家族、子供、キッズ、ベビー、赤ちゃん',
    },
  }

  return (
    <html lang="ja">
      <head>
        {/* リソースヒント: Google Fontsへの接続を最適化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
