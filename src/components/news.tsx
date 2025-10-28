'use client'

import Image from 'next/image'

interface NewsItem {
  date: string
  title: string
  description: string
  image?: string
}

const newsData: NewsItem[] = [
  {
    date: '2025.10.28',
    title: '札幌市の正式イベントとして後援決定',
    description: '札幌市の取り組みとして正式に後援を決定いたしました。',
  },
  {
    date: '2025.10.15',
    title: 'イベント開催決定のお知らせ',
    description: '新しい家族写真撮影イベントの開催が決定いたしました。多くのご家族の皆様のご参加をお待ちしております。',
  },
  {
    date: '2025.10.10',
    title: 'ライフプラン相談サービス開始',
    description: '家族の将来設計を一緒に考えるライフプラン相談サービスを開始いたしました。お気軽にご相談ください。',
  },
]

export default function News() {
  return (
    <section className="bg-white">
      <div className="bg-[#fdd14aff] max-w-[800px] mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
            NEWS
          </h2>
        </div>
        
        <div className="space-y-6 max-w-[640px] mx-auto">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {item.image && (
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm mb-2" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                      {item.date}
                    </p>
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Noto Sans JP', color: '#604c3fff' }}>
                      {item.title}
                    </h3>
                    <p className="leading-relaxed" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

