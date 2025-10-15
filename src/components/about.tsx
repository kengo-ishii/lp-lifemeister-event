'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          主催・運営紹介（About）
        </h2>

        {/* 株式会社AINNA */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            株式会社AINNA
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左側：テキスト */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                東京・札幌を拠点に、デザイン・マーケティング・イベント企画を行うクリエイティブカンパニーです。
                <br />
                「明日を楽しみに眠れる毎日を」をテーマに、
                <br />
                暮らし・子育て・美容・ウェルネスなど、日々の「こころの豊かさ」を大切にした活動を続けています。
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                AINNAでは、働くスタッフの多くが子育て世代のママ。
                <br />
                自分たちのリアルな経験をもとに、「ママだからこそ分かる安心感」や「等身大の温かさ」をイベントづくりにも反映しています。
                <br />
                今回の撮影イベントも、そんなママ目線のやさしさを込めた企画です。
              </p>
            </div>

            {/* 右側：スタッフ写真 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <Image
                  src="/images/member.png"
                  alt="AINNAスタッフ"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 主催イベント実績 */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            主催イベント実績：Feel by AINNA（フィール・バイ・アイナ）
          </h3>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              札幌を中心に、2021年から毎年開催しているライフスタイルイベント「Feel」シリーズは、年1〜2回の開催で累計10回以上開催。
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              美しが丘TSUTAYA、The JOHNSON STORE、札幌駅前地下歩行空間（チカホ）などで開催し、地域のクリエイター・ブランド・飲食などが参加。
              <br />
              「暮らし」や「子育て」、「地域の文化」をつなぎ、心地よい時間を共有できる「やさしさの循環」をコンセプトに展開しています。
            </p>
          </div>
        </div>

        {/* メディア掲載実績 */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            メディア掲載実績
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">札幌経済新聞</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">北海道放送「SASARU」</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">VERY ONLINE／CLASSY.ONLINE</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">STORY／読売新聞オンライン</h4>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">東京ガールズコレクション</h4>
              <p className="text-sm text-gray-600">AUTUMN/WINTER ONLINE（公式タイアップ出展）</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h4 className="font-semibold text-gray-900 mb-2">スポニチ「ほっかいどうplus」</h4>
              <p className="text-sm text-gray-600">（Web・誌面）掲載　他</p>
            </div>
          </div>
        </div>

        {/* 代表メッセージ */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            代表メッセージ（田村 知美）
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              AINNAは、日々さまざまな企業やブランドの撮影・デザイン・プロモーションを手がけるマーケティングチームです。
              <br />
              現場でたくさんの「笑顔」や「ストーリー」を撮影してきた私たちだからこそ、家族の「今」という瞬間を写真で残すことの大切さを、強く感じ、この企画を立ち上げました。
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              AINNAには、仕事と育児を両立しながら働くママスタッフがたくさん在籍しています。
              <br />
              こういう時代だからこそ、笑顔と未来を残していきたい。同じ立場だからこそ感じる「リアルな共感」を込めて、
              <br />
              今日も、やさしく温かい時間をお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
