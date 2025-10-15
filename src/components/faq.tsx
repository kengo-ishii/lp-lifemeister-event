'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "持ち物はありますか？",
    answer: "特別な持ち物はありません。\n\n撮影でご家族おそろいの服装を楽しんだり、\nお子さまのドレスや着ぐるみ、小物の持ち込みもOKです。\n\nいつものお気に入りのおもちゃなども、リラックスして撮影できるのでおすすめです。"
  },
  {
    question: "所要時間はどれくらい？",
    answer: "ご家族1組あたり、約30分前後を予定しています。\n撮影（約15分）＋ライフプラン相談（約15分）で、ゆったり過ごせる内容です。\n\nお子さまの様子に合わせて柔軟に調整しますのでご安心ください。"
  },
  {
    question: "撮影だけの参加はできますか？",
    answer: "本イベントは「家族撮影」と「ライフプラン相談」がセットになった無料イベントです。\n\n撮影のみのご参加はお受けしておりませんが、\n相談ブースではお金の話というよりも、子育てや将来設計を気軽にお話しする時間となっております。\n\n堅苦しくなく安心してご参加いただけます。"
  },
  {
    question: "費用はかかりますか？",
    answer: "参加費はすべて無料です。\n撮影・相談ともに料金はかかりません。\n\n撮影データは後日プレゼントいたしますので、どうぞお気軽にご参加ください。"
  },
  {
    question: "写真はどうやってもらえますか？",
    answer: "撮影後、データをオンラインでお渡しいたします。\n\n後日メールなどでURLをお送りしますので、スマホから簡単にダウンロードできます。"
  },
  {
    question: "キャンセルしたい場合は？",
    answer: "ご都合が変わった場合は、事前にご連絡をいただければ日程変更も対応いたします。\n\n無断キャンセルは他のご家族のご迷惑となりますので、ご協力をお願いいたします。"
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          よくある質問（FAQ）
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
