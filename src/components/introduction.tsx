'use client'

export default function Introduction() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* メインタイトル */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            "今の笑顔"を未来に残そう。
          </h2>
          
          {/* サブタイトル */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
            家族撮影とライフプラン相談を一度に体験できる特別イベントです。<br />
            子育て世代の「いま」を大切に残す家族写真のプレゼントをご用意しました。
          </p>
        </div>

        {/* メッセージセクション */}
        <div className="space-y-12">
          {/* 家族の"いま"を残すこと */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              家族の"いま"を残すことは、未来への贈りもの。
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              写真は、未来のあなたやお子さまに届ける"想い出のプレゼント"。<br />
              何気ない今日の笑顔が、きっといつか、大切な宝物になります。
            </p>
          </div>

          {/* 変化の時代だからこそ */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              変化の時代だからこそ、"これから"を考える時間を。
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              物価の上昇、働き方の変化——<br />
              少し先の未来が見えづらい今だからこそ、
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              「家族の未来を見つめるきっかけ」を、このイベントで。
            </p>
          </div>

          {/* 最後のメッセージ */}
          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              撮影では笑顔を、<br />
              相談では安心を。<br />
              このひとときが、あなたと家族の"やさしい一歩"になりますように。
            </p>
          </div>
        </div>

        {/* イベント内容 */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            イベント内容
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">プロカメラマンによる家族撮影スペース</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ライフプラン相談ブース</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">撮影データプレゼント</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
