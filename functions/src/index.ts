import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { Resend } from 'resend'

// Firebase Admin SDKを初期化
admin.initializeApp()

// Secret ManagerからAPIキーを取得する関数
async function getResendApiKey(): Promise<string> {
  try {
    const { SecretManagerServiceClient } = require('@google-cloud/secret-manager')
    const client = new SecretManagerServiceClient()
    
    const [version] = await client.accessSecretVersion({
      name: 'projects/lp-lifemeister-event/secrets/resend_api/versions/latest'
    })
    return version.payload?.data?.toString() || ''
  } catch (error) {
    console.error('Failed to get Resend API key from Secret Manager:', error)
    return process.env.RESEND_API_KEY || ''
  }
}

interface EventReservationData {
  name: string
  email: string
  phone?: string
  message?: string
  date: string
  time: string
}

export const sendEventReservation = functions.https.onCall(async (data: EventReservationData, context) => {
  try {
    // Resend APIキーの取得
    const resendApiKey = await getResendApiKey()
    if (!resendApiKey) {
      console.error('Resend API key is not configured')
      throw new functions.https.HttpsError('failed-precondition', 'メール送信機能が設定されていません')
    }

    // Resendクライアントを更新
    const resendClient = new Resend(resendApiKey)

    // データの検証
    if (!data.name || !data.email || !data.date || !data.time) {
      throw new functions.https.HttpsError('invalid-argument', '必須項目が不足しています')
    }

    const { name, email, phone, message, date, time } = data

    // 日付の日本語変換
    const dateStr = date === '2025-11-08' ? '2025年11月8日（土）' : '2025年11月9日（日）'

    // 申込者へのお礼メール
    const customerEmail = {
      from: 'noreply@ainna.jp',
      to: [email],
      subject: '【Feel Life】イベント予約のご確認',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">イベント予約のご確認</h2>
          <p>${name} 様</p>
          <p>この度は、Feel Lifeイベントにお申し込みいただき、誠にありがとうございます。</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">ご予約内容</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
            <p><strong>希望日:</strong> ${dateStr}</p>
            <p><strong>希望時間:</strong> ${time}</p>
            ${message ? `<p><strong>メッセージ:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <p>ご予約内容を確認いたしました。詳細については、後日改めてご連絡いたします。</p>
          <p>ご不明な点がございましたら、お気軽にお問い合わせください。</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Feel Life<br>
            メール: ishii@ainna.jp<br>
            このメールは自動送信されています。
          </p>
        </div>
      `
    }

    // 管理者への通知メール
    const adminEmail = {
      from: 'noreply@ainna.jp',
      to: ['ishii@ainna.jp'],
      subject: `【新規予約】${name}様 - ${dateStr} ${time}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">新規イベント予約</h2>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #dc2626; margin-top: 0;">申込者情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>電話番号:</strong> ${phone || '未入力'}</p>
            <p><strong>希望日:</strong> ${dateStr}</p>
            <p><strong>希望時間:</strong> ${time}</p>
            ${message ? `<p><strong>メッセージ:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; color: #0369a1;"><strong>対応が必要です</strong></p>
            <p style="margin: 5px 0 0 0; color: #0369a1;">申込者への確認連絡をお願いします。</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            送信日時: ${new Date().toLocaleString('ja-JP')}<br>
            このメールは自動送信されています。
          </p>
        </div>
      `
    }

    // メール送信
    await Promise.all([
      resendClient.emails.send(customerEmail),
      resendClient.emails.send(adminEmail)
    ])

    // Firestoreに記録
    await admin.firestore().collection('eventReservations').add({
      ...data,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    })

    return { 
      success: true, 
      message: '予約を受け付けました。確認メールをお送りしました。' 
    }

  } catch (error) {
    console.error('メール送信エラー:', error)
    
    if (error instanceof functions.https.HttpsError) {
      throw error
    }
    
    throw new functions.https.HttpsError('internal', 'メール送信に失敗しました')
  }
})
