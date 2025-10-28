'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Image
            src="/images/hero.webp"
            alt="札幌 子供 キッズ ベビー 赤ちゃん 無料撮影会 feel by AINNA"
            width={800}
            height={600}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
