'use client'

import Image from 'next/image'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "持ち物はありますか？",
    answer: "特別な持ち物はありません。撮影でご家族おそろいの服装を楽しんだり、\nお子さまのドレスや着ぐるみ、小物の持ち込みもOKです。\nいつものお気に入りのおもちゃなども、リラックスして撮影できるのでおすすめです。"
  },
  {
    question: "所要時間はどれくらい？",
    answer: "ご家族1組あたり、約30分前後を予定しています。\n撮影（約15分）＋ライフプラン相談（約15分）で、ゆったり過ごせる内容です。\nお子さまの様子に合わせて柔軟に調整しますのでご安心ください。"
  },
  {
    question: "撮影だけの参加はできますか？",
    answer: "本イベントは「家族撮影」と「ライフプラン相談」がセットになった無料イベントです。\n撮影のみのご参加はお受けしておりませんが、\n相談ブースではお金の話というよりも、子育てや将来設計を気軽にお話しする時間となっております。堅苦しくなく安心してご参加いただけます。"
  },
  {
    question: "費用はかかりますか？",
    answer: "参加費はすべて無料です。撮影・相談ともに料金はかかりません。\n撮影データは後日プレゼントいたしますので、どうぞお気軽にご参加ください。"
  },
  {
    question: "写真はどうやってもらえますか？",
    answer: "撮影後、データをオンラインでお渡しいたします。\n後日メールなどでURLをお送りしますので、スマホから簡単にダウンロードできます。"
  },
  {
    question: "キャンセルしたい場合は？",
    answer: "ご都合が変わった場合は、事前にご連絡をいただければ日程変更も対応いたしますn\n無断キャンセルは他のご家族のご迷惑となりますので、ご協力をお願いいたします。"
  }
]

export default function FAQ() {
  return (
    <section className="bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="flex justify-center">
          <Image
            src="/assetes/image/faq.webp"
            alt="札幌 子供 キッズ ベビー 無料撮影会 よくある質問（FAQ）"
            width={800}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        <div className="max-w-[800px] mx-auto bg-[#fdfaf3ff] px-4 py-4 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="px-6 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#fc9a47ff] rounded-full flex items-center justify-center -mt-1.5">
                    <span className="text-white font-bold text-sm">Q</span>
                  </div>
                  <h3 className="text-lg font-semibold flex-1" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                    {item.question}
                  </h3>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#fc7a91ff] rounded-full flex items-center justify-center -mt-1">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <p className="leading-relaxed whitespace-pre-line flex-1" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                      {item.answer}
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
