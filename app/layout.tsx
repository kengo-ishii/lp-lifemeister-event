import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://feel.ainna.co.jp'),
  title: '今の笑顔を未来に残そう｜feel by AINNA',
  description: '家族撮影とライフプラン相談が一緒に体験できるイベント「feel by AINNA」。プロカメラマンによる撮影データをプレゼント。家族の"いま"を残し、未来を考えるやさしいひとときを。',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: '今の笑顔を未来に残そう｜feel by AINNA',
    description: '家族撮影とライフプラン相談が一緒に体験できるイベント「feel by AINNA」。プロカメラマンによる撮影データをプレゼント。家族の"いま"を残し、未来を考えるやさしいひとときを。',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: '今の笑顔を未来に残そう - feel by AINNA',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '今の笑顔を未来に残そう｜feel by AINNA',
    description: '家族撮影とライフプラン相談が一緒に体験できるイベント「feel by AINNA」。プロカメラマンによる撮影データをプレゼント。家族の"いま"を残し、未来を考えるやさしいひとときを。',
    images: ['/images/hero.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
