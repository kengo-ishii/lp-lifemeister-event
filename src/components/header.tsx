'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/feel_logo.png"
                alt="Feel Life"
                width={120}
                height={40}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>



        </div>
      </div>
    </header>
  )
}
