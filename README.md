# ローカル環境での Notion テーブルの表示

## ローカル環境でのセットアップ手順

### 1. Gitリポジトリのクローン
まず、リポジトリをクローンします。
```sh
git clone https://github.com/kondo-akihiro-git/practice-Notion-app.git
cd notion-table-viewer
```

### 2. バックエンドのセットアップ

#### ① Node.js のインストール
Node.jsがインストールされていることを確認してください。
```sh
node -v
```
未インストールの場合は[公式サイト](https://nodejs.org/)からダウンロードしてください。

#### ② パッケージのインストール
以下のコマンドを実行して、必要なパッケージをインストールします。
```sh
npm install
```

#### ③ 環境変数の設定
プロジェクトルートに `.env` ファイルを作成し、以下の内容を記述してください。
```ini
NOTION_API_KEY="後日記載"
NOTION_DATABASE_ID="後日記載"
```

#### ④ バックエンドの起動
```sh
node index.js
```
起動後、以下のメッセージが表示されれば成功です。
```
Server is running on http://localhost:3000
```

---

### 3. フロントエンドのセットアップ

#### ① Vue CLI のインストール
Vue CLIがインストールされていない場合は、以下のコマンドでインストールしてください。
```sh
npm install -g @vue/cli
```

#### ② Vueプロジェクトのセットアップ
```sh
cd ..
vue create notion-table-viewer-frontend
```

#### ③ 依存パッケージのインストール
```sh
cd notion-table-viewer-frontend
npm install axios
```

#### ④ フロントエンドの起動
```sh
npm run serve
```

ブラウザで `http://localhost:8080` にアクセスすると、Notionのデータが表示されます。

---

## ディレクトリ構成
```
notion-table-viewer/
│── .env             # 環境変数の設定
│── index.js         # バックエンドサーバー
│── package.json     # npmの設定ファイル
│── package-lock.json
│── node_modules/

notion-table-viewer-frontend/
│── src/
│   ├── components/
│   │   ├── NotionTable.vue   # Notionデータを表示するコンポーネント
│   ├── App.vue
│── package.json
│── public/
```

