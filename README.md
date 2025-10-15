# Feel Life

Next.js 14とReact 18を使用したモダンなWebアプリケーションです。

## 技術スタック

- **Next.js 14** - Reactフレームワーク
- **React 18** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Firebase** - バックエンドサービス（Analytics、認証、データベース等）
- **App Router** - Next.js 13+の新しいルーティングシステム

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. 開発サーバーを起動:
```bash
npm run dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## 利用可能なスクリプト

- `npm run dev` - 開発サーバーを起動
- `npm run build` - プロダクション用にビルド
- `npm run start` - プロダクションサーバーを起動
- `npm run lint` - ESLintでコードをチェック

## プロジェクト構造

```
feel-life/
├── app/                    # App Routerディレクトリ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # ホームページ
├── components/             # Reactコンポーネント
│   └── FirebaseTest.tsx   # Firebase接続テストコンポーネント
├── lib/                    # ユーティリティとライブラリ
│   └── firebase.ts        # Firebase設定と初期化
├── public/                # 静的ファイル
├── package.json           # 依存関係とスクリプト
├── tsconfig.json          # TypeScript設定
├── tailwind.config.js     # Tailwind CSS設定
├── next.config.js         # Next.js設定
└── .eslintrc.json         # ESLint設定
```

## Firebase設定

このプロジェクトはFirebaseに接続されています：

- **プロジェクトID**: lp-lifemeister-event
- **設定ファイル**: `lib/firebase.ts`
- **Analytics**: 有効（ブラウザ環境のみ）
- **Functions**: SendGridメール送信機能

### SendGrid設定

メール送信機能を使用するには、SendGridの設定が必要です：

1. **SendGridアカウント作成**
   - [SendGrid](https://sendgrid.com/)でアカウントを作成
   - APIキーを生成

2. **環境変数の設定**
   ```bash
   firebase functions:config:set sendgrid.key="your_sendgrid_api_key"
   ```

3. **Functionsのデプロイ**
   ```bash
   firebase deploy --only functions
   ```

### Firebaseサービスの追加

Firebaseの他のサービス（認証、Firestore、Storage等）を使用する場合：

1. `lib/firebase.ts` に必要なSDKをインポート
2. サービスを初期化してエクスポート
3. コンポーネントでインポートして使用

例：
```typescript
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const auth = getAuth(app)
export const db = getFirestore(app)
```

## 開発の始め方

1. `app/page.tsx` を編集してホームページをカスタマイズ
2. `app/layout.tsx` でグローバルレイアウトを設定
3. 新しいページを作成するには `app/` ディレクトリに新しいフォルダと `page.tsx` ファイルを追加
4. Firebaseテストコンポーネント（`components/FirebaseTest.tsx`）でFirebase接続を確認

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
