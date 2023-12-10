# 開発技術

* Webフレームワーク Next.js
    * 動的要素は必要ないはずなのでStaticSiteGeneratorを使うだけ
* 言語 TypeScript
* CSSフレームワーク Tailwind
    * スタイルのスコープはコンポーネント内に閉じる (グローバルなCSSは極力書かない)

https://nextjs.org/docs/api-reference/create-next-app を使ってひな形を作り、
apiディレクトリを削除してsrcディレクトリにpagesとstylesを移動している。


# ローカル開発環境

* Node18が動けばなんでもいい
* 起動コマンドは[package.json](./package.json)を見てください
    * コンポーネント開発は [Storybook](https://storybook.js.org/) 使ってください
* Dockerを使う場合は、[docker-compose.yml](./docker-compose.yml)を見てください

## WindowsでVisualStudioCodeからDockerを使う場合の具体的な手順

実行環境の準備 (1回だけやればOK)

* [Docker for Windowsをインストール](https://docs.docker.jp/docker-for-windows/install.html)
* [VisualStudioCodeをインストール](https://code.visualstudio.com/)
* VisualStudioCodeに[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)と[Remote - Containers](https://marketplace.visualstudio.com)の拡張を入れる

手元のPCで開発途中のページを閲覧したい場合

* VisualStudioCodeのTERMINALから `docker-compose run local install` で必要なパッケージのインストール
* VisualStudioCodeのTERMINALから `docker-compose up` でNext.jsの開発サーバを起動
* ブラウザから [http://localhost:3000](http://localhost:3000) にアクセス

コンポーネントの見た目だけ確認したい場合

* `docker-compose run --service-ports local storybook`
* ブラウザから [http://localhost:6006](http://localhost:6006) にアクセス


# ディレクトリ構成

```
- src/
    - components/ Reactのコンポーネント
    - constants/ 定数 (環境変数経由のものもあるが、アプリケーションからすると定数扱いとする)
    - pages/ Next.jsのページコンポーネント 後述のサービスからデータを受け取って前述のReactのコンポーネントに渡す
    - services/ 各ページで描画するデータを提供する
    - styles/ Tailwindのglobal.cssのみ置く 基本的にCSSは各コンポーネント内で閉じるので、グローバルは使わない
    - utilities/ コンポーネントやサービスなどを横断して使うもの
- .stories/ Storybook用のファイル src/ディレクトリと同じ構成にしてある
```

# このアプリケーションの詳細設計

- コンポーネントはPasiveViewにする
    - ユーザ操作に関すること以外は基本的に表示要件に合わせたデータ(ViewModel)をコンポーネントで表示するだけ
    - コンポーネント側でデータを加工しない
- コンテンツの元となるデータをViewModelに加工するためにサービスを設ける
    - ViewModelは [サービス系ディレクトリ](./src/services/) 以下の `*Service` に データの型とサービスのinterfaceが定義されている
    - 現状、データはDBで管理せず、 [サービス系ディレクトリ](./src/services/) 以下の各種 `InMemory*Service` クラスにマスタデータをTypeScriptのコードとして定義している
    - 多言語対応(文言翻訳)もサービスで実施する

# 多言語対応(文言翻訳)

[TranslatableValues](./src/services/i18n/TranslatableValues.ts)

- 翻訳文言データを扱うクラス
    - 一般的な辞書式翻訳だとコンテンツと翻訳文言が別々のファイルで管理されることになるため、
      コンテンツと同じ場所で翻訳も管理するために自前で実装した
- 本番で使う翻訳文言データの生成は `create` メソッドを使って作成する
    - createメソッドを使うと翻訳漏れは実行時エラーになるため、
      テストコードで全ロケールの翻訳がされているかを担保する

# インフラ

- AWS を利用
    - HostingはAmplify
    - ドメインは取得も含めてRoute53