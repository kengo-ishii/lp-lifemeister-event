'use client'

import { useState } from 'react'

export default function Entry() {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理
    console.log('予約情報:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    })
    alert('予約を受け付けました。確認のため、後日ご連絡いたします。')
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            イベント予約
          </h2>
          <p className="text-xl text-gray-600">
            2025年11月8日（土）・9日（日）開催のイベントにご参加ください
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 日付選択 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">希望日を選択</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedDate('2025-11-08')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedDate === '2025-11-08'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-blue-300 text-gray-700'
                  }`}
                >
                  <div className="text-lg font-semibold">2025年11月8日（土）</div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDate('2025-11-09')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedDate === '2025-11-09'
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-blue-300 text-gray-700'
                  }`}
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
                    className={`p-3 rounded-lg border-2 transition-colors text-sm ${
                      selectedTime === time
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-blue-300 text-gray-700'
                    }`}
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
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">選択内容</h4>
                {selectedDate && (
                  <p className="text-blue-800">
                    日付: {selectedDate === '2025-11-08' ? '2025年11月8日（土）' : '2025年11月9日（日）'}
                  </p>
                )}
                {selectedTime && (
                  <p className="text-blue-800">時間: {selectedTime}</p>
                )}
              </div>
            )}

            {/* 送信ボタン */}
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !formData.name || !formData.email}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                予約を送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
