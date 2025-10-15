'use client'

import { useState, useEffect } from 'react'

export default function EntryButton() {
  const [isVisible, setIsVisible] = useState(false)

  // スクロール位置を監視してボタンの表示/非表示を制御
  useEffect(() => {
    const toggleVisibility = () => {
      // ページの上部から300px以上スクロールしたらボタンを表示
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // イベント予約セクションにスクロール
  const scrollToEntry = () => {
    const entrySection = document.getElementById('entry-section')
    if (entrySection) {
      entrySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      {/* フローティングボタン */}
      <button
        onClick={scrollToEntry}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="イベント予約に移動"
      >
        <div className="flex items-center space-x-2">
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <span className="font-semibold">イベント予約</span>
        </div>
      </button>

      {/* モバイル用の簡略化されたボタン */}
      <button
        onClick={scrollToEntry}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="イベント予約に移動"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </button>
    </>
  )
}
