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

  return null
}
