'use client'

import { useState } from 'react'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { app } from '@/lib/firebase'

export default function EntryOgange() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const timeSlots = [
    '10:00〜10:30',
    '10:30〜11:00',
    '11:00〜11:30',
    '11:30〜12:00',
    '13:00〜13:30',
    '13:30〜14:00',
    '14:00〜14:30',
    '14:30〜15:00',
    '15:00〜15:30',
    '15:30〜16:00',
    '16:00〜16:30'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    try {
      // Firebase Functionsを初期化
      const functions = getFunctions(app, 'asia-northeast1')
      const sendEventReservation = httpsCallable(functions, 'sendEventReservation')
      
      // フォームデータを送信
      const result = await sendEventReservation({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        date: selectedDate,
        time: selectedTime
      })
      
      // 成功時の処理
      alert('予約を受け付けました。確認メールをお送りしました。')
      
      // フォームをリセット
      setSelectedDate('')
      setSelectedTime('')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      
    } catch (error) {
      console.error('予約送信エラー:', error)
      alert('申し訳ございません。送信に失敗しました。しばらく時間をおいて再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ maxWidth: '800px', backgroundColor: '#fdfaf3ff' }}>
        <div className="mx-auto" style={{ maxWidth: '760px' }}>
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block px-8 py-4 rounded-full border-2 border-white" style={{ backgroundColor: '#fc9a47ff', outline: '8px solid #fc9a47ff', outlineOffset: '0px' }}>
              今すぐ予約する
            </h2>
          </div>

          <div className="rounded-2xl p-8 -mt-24 pt-20 border-4" style={{ backgroundColor: '#fee0b6ff', borderColor: '#fc9a47ff' }}>
            <p className="text-xl text-gray-600 text-center mb-8">
              2025年11月8日（土）・9日（日）開催のイベントにご参加ください
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 日付選択 */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">希望日を選択</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedDate('2025-11-08')}
                  className={`p-4 rounded-lg transition-colors ${
                    selectedDate === '2025-11-08'
                      ? 'text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  style={selectedDate === '2025-11-08' ? { backgroundColor: '#fc9a47ff' } : {}}
                >
                  <div className="text-lg font-semibold">2025年11月8日（土）</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDate('2025-11-09')}
                  className={`p-4 rounded-lg transition-colors ${
                    selectedDate === '2025-11-09'
                      ? 'text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  style={selectedDate === '2025-11-09' ? { backgroundColor: '#fc9a47ff' } : {}}
                >
                  <div className="text-lg font-semibold">2025年11月9日（日）</div>
                </button>
              </div>
            </div>

            {/* 時間帯選択 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">希望時間帯を選択</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg transition-colors text-sm ${
                      selectedTime === time
                        ? 'text-white'
                        : 'bg-white text-gray-700'
                    }`}
                    style={selectedTime === time ? { backgroundColor: '#fc9a47ff' } : {}}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* 個人情報入力 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">お客様情報</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  ご質問・ご要望
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ご質問やご要望がございましたら、こちらにご記入ください"
                />
              </div>
            </div>

            {/* 選択内容の確認 */}
            {(selectedDate || selectedTime) && (
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold mb-2" style={{ color: '#fc9a47ff' }}>選択内容</h4>
                {selectedDate && (
                  <p style={{ color: '#fc9a47ff' }}>
                    日付: {selectedDate === '2025-11-08' ? '2025年11月8日（土）' : '2025年11月9日（日）'}
                  </p>
                )}
                {selectedTime && (
                  <p style={{ color: '#fc9a47ff' }}>時間: {selectedTime}</p>
                )}
              </div>
            )}

            {/* 送信ボタン */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || isSubmitting}
                className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center mx-auto min-w-[200px]"
                style={{ 
                  backgroundColor: (!selectedDate || !selectedTime || !formData.name || !formData.email || isSubmitting) ? '#9ca3af' : '#fc9a47ff' 
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </>
                ) : (
                  '予約を送信する'
                )}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  )
}

