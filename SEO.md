# SEO

- sitemap.xmlとrobots.txt対応
    - next-sitemapを使ってビルド時に自動生成
- 各ページでmetaタグのname属性にrobotsを指定した上書きはしない

## metaタグ

name属性

- description
    - i18n対応

property属性

- og:title
    - i18n対応
- og:description
    - descriptionと同じ
    - i18n対応
- og:image
    - 現状ではfaviconと同じものをPNG化して設定
- og:site_name
    - i18n対応
- og:type
    - "website" 固定
- og:locale
    - i18n対応
        - "ja_JP" と "en_US"を出し分け

## linkタグ

rel属性

- canonical : Next.jsのi18nでデフォルトロケールを設定しても、/ja/*が有効なので設定している
- alternate : i18n対応のため

