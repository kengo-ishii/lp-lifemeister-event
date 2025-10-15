'use client'

import { useEffect, useState } from 'react'
import { app, analytics } from '@/lib/firebase'

export default function FirebaseTest() {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Firebase接続確認
    if (app) {
      setIsConnected(true)
      console.log('Firebase app initialized:', app.name)
    }

    // Analytics確認
    if (analytics) {
      console.log('Firebase Analytics initialized')
    }
  }, [])

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Firebase接続テスト</h2>
      <div className="space-y-2">
        <p className="text-sm">
          Firebase App: 
          <span className={`ml-2 px-2 py-1 rounded text-xs ${
            isConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isConnected ? '接続済み' : '未接続'}
          </span>
        </p>
        <p className="text-sm">
          Analytics: 
          <span className={`ml-2 px-2 py-1 rounded text-xs ${
            analytics ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {analytics ? '利用可能' : 'サーバーサイド（無効）'}
          </span>
        </p>
        <p className="text-xs text-gray-600 mt-4">
          プロジェクトID: lp-lifemeister-event
        </p>
      </div>
    </div>
  )
}
