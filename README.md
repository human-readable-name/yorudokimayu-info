# yorudokimayu-info

## 動機

* ストック型の情報提供手段としてアーティストページが欲しい
    * Twitterは基本的に最新情報の告知用途で、過去の情報をまとめる場所ではない
    * YouTubeの再生リスト・概要欄だけでは足りない部分がある
        * MVのない曲
        * YouTubeにアーカイブの残らないライブ出演
    * TuneCoreのアーティストページでは未配信楽曲が漏れる
* サイト来訪者想定とコンバージョンゴール
    * 初見リスナー -> YouTubeチャネル登録・Twitterフォロー
    * 将来のビジネスパートナー -> 問い合わせ

# 要件定義

## 機能要件

サイト来訪者が以下の情報を閲覧できるようにする

* アーティスト紹介
* イベント出演歴
* 楽曲情報

サイト来訪者がCookieのオプトインができるようにする

## 非機能要件

サイトの開発者・運営者が以下をできるようにする

* SEO
* アクセス解析
* 譲渡・運営移管が楽にできるようにする

# 設計

## サイトマップ

* `/` トップページ (更新履歴・内部およびTwitter/YouTube/TuneCore/Fanbox/Boothなどへのリンク)
    * `/profile` プロフィールページ (アーティスト紹介・イベント出演歴など)
    * `/discography` 楽曲一覧ページ
        * `/discography/{シングル・アルバム・EPなどの英語名称}` リリース単位 TuneCore/Booth/MVがあればYouTubeリンク

## ページ構成

ユーザの目に見える部分 (htmlのbodyタグ内部)

* ページヘッダ (全ページ共通)
    * アーティストロゴ
    * メニュー(各ページへのリンク)
* コンテンツ本体
    * h1タグは1ページに1つ (SEO観点)
    * 基本的にグリッドレイアウト
* ページフッタ (全ページ共通)
    * 運営者・権利の表示
    * 問い合わせ先のリンク

ユーザの画面サイズ・アスペクト比に応じて以下の項目の通常表示・モバイル表示をCSSで制御 (レスポンシブデザイン対応)

* ページヘッダ内メニュー
    * 通常 : 水平方向に並ぶ
    * モバイル : ハンバーガーメニュー (タップ時に展開)
* コンテンツ本体の一覧表示
    * 通常 : 水平方向に繰り返し、折り返す
    * モバイル : 折り返さない

## 多端末対応

* 動作要件 (いずれも最新のOS・ブラウザ)
    * Windows : Edge, Chrome
    * Mac : Safari, Chrome
    * iOS : Safari, Chrome
    * Android : Chrome

## 多言語対応

* 初期段階ではやらない
    * 現状、翻訳サイトやブラウザの翻訳プラグインが優秀なので、優先度が低い
    * 機械翻訳しやすいように文言・文章表現は平易なものにする

# 開発技術

* Webフレームワーク Next.js
    * 動的要素は必要ないはずなのでStaticSiteGeneratorを使うだけ
* 言語 TypeScript
* CSSフレームワーク Tailwind
    * スタイルのスコープはコンポーネント内に閉じる (グローバルなCSSは極力書かない)

https://nextjs.org/docs/api-reference/create-next-app を使ってひな形を作り、
apiディレクトリを削除してsrcディレクトリにpagesとstylesを移動している。

## ローカル開発環境

* Node16が動けばなんでもいい
* 起動コマンドは[package.json](./package.json)を見てください
    * コンポーネント開発は [Storybook](https://storybook.js.org/) 使ってください
* Dockerを使う場合は、[docker-compose.yml](./docker-compose.yml)を見てください

### WindowsでVisualStudioCodeからDockerを使う場合の具体的な手順

実行環境の準備 (1回だけやればOK)

* [Docker for Windowsをインストール](https://docs.docker.jp/docker-for-windows/install.html)
* [VisualStudioCodeをインストール](https://code.visualstudio.com/)
* VisualStudioCodeに[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)と[Remote - Containers](https://marketplace.visualstudio.com)の拡張を入れる


ローカル環境でページを閲覧したい場合

* VisualStudioCodeのEXPLORERから`docker-compose.yml`を右クックし、`Compose Up`でDockerコンテナを起動
* VisualStudioCodeのDOCKERのCONTAINERSから起動したコンテナを右クリックし、`Attach Shell`で起動したコンテナに入る
* `yarn install` で必要なパッケージのインストール
* `yarn dev` でNext.jsの開発サーバを起動
* ブラウザから [http://localhost:3000](http://localhost:3000) にアクセス