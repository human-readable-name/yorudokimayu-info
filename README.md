# yorudokimayu-info

## 動機

* ストック型の情報提供手段としてアーティストページが欲しい
    * Twitterは基本的に最新情報の告知用途で、過去の情報をまとめる場所ではない
    * YouTubeの再生リスト・概要欄だけでは足りない部分がある
        * MVのない曲
        * YouTubeにアーカイブの残らないライブ出演

# 要件定義

## 機能要件

サイト来訪者へ以下の情報を提供できる

* アーティスト紹介
* イベント出演歴
* 楽曲情報

## 非機能要件

サイトの開発者・運営者が以下をできるようにする

- SEO
- アクセス解析
- 譲渡・運営移管が楽にできるようにする

# 設計

## サイトマップ

- `/` トップページ (更新履歴・内部およびTwitter/YouTube/TuneCore/Fanbox/Boothなどへのリンク)
- `/profile` プロフィールページ (アーティスト紹介・イベント出演歴など)
- `/discography` 楽曲一覧ページ
   - `/discography/{シングル・アルバム・EPなどの英語名称}` リリース単位 TuneCore/Booth/MVがあればYouTubeリンク


# 開発技術

* Webフレームワーク Next.js
    * 動的要素は必要ないはずなのでStaticSiteGeneratorを使うだけ
* CSSフレームワーク Tailwind CSS
* 言語 TypeScript
* ローカル開発環境

構築は https://nextjs.org/docs/api-reference/create-next-app を使ってひな形を作り、
apiディレクトリを削除してsrcディレクトリにpagesとstylesを移動している。

## ローカル開発環境構築

* Dockerを入れる
* docker-composeでコンテナを起動
* 起動したコンテナに入る
* appディレクトリで `yarn install` で必要なパッケージのインストール
* appディレクトリで `yarn dev` でローカル環境を起動
* ブラウザから [http://localhost:3000](http://localhost:3000) にアクセス
