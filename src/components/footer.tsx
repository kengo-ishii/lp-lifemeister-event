'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white">
        <div className="bg-[#604c3fff] max-w-[800px] mx-auto px-6 py-8">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Noto Sans JP' }}>
              札幌の子供・キッズ・ベビー無料撮影会 feel by AINNA
            </h3>
            <p className="text-sm mb-2" style={{ fontFamily: 'Noto Sans JP' }}>
              札幌で開催される子育て家族のための無料撮影会イベント
            </p>
            <p className="text-sm mb-2" style={{ fontFamily: 'Noto Sans JP' }}>
              開催地：札幌サンプラザ３階セミナールーム
            </p>
            <p className="text-sm" style={{ fontFamily: 'Noto Sans JP' }}>
              主催：AINNA｜札幌市後援
            </p>
          </div>
          <div className="border-t border-white/30 pt-4">
            <p className="text-sm text-center">
              © 2025 AINNA All Rights Reserved.
            </p>
          </div>
        </div>
    </footer>
  )
}
