'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="m-0 p-0">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Image
          src="/assetes/image/about.webp"
          alt="札幌 子供撮影会 主催・運営紹介 AINNA"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/feelByAinna.webp"
          alt="札幌 キッズ ベビー 撮影会 イベント実績 feel by AINNA"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/media.webp"
          alt="札幌 子育て イベント メディア掲載実績"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/representativeMessage.webp"
          alt="札幌 子供 無料撮影会 代表メッセージ"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
      </div>
    </div>
  )
}
