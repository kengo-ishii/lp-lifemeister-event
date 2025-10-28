'use client'

import Image from 'next/image'

export default function About() {
  return (
    <div className="m-0 p-0">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Image
          src="/assetes/image/about.png"
          alt="主催・運営紹介"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/feelByAinna.png"
          alt="主催イベント実績"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/media.png"
          alt="メディア掲載実績"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
        <Image
          src="/assetes/image/representativeMessage.png"
          alt="代表メッセージ"
          width={800}
          height={600}
          className="w-full h-auto m-0 p-0"
        />
      </div>
    </div>
  )
}
