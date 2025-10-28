'use client'

import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <Image
            src="/assetes/image/message.webp"
            alt="札幌 子育て 子供撮影会 - 今の笑顔を未来に残そう"
            width={800}
            height={600}
            className="max-w-[800px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
