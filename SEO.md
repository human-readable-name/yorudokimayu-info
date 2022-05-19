# SEO

ページ数が少なく、基本的に検索エンジンにクロールはさせてよいので、クローラを制御する仕組みは特にやらない

- robots.txtは設置しない
- 各ページでmetaタグのname属性にrobotsを指定した上書きはしない


## metaタグ

name属性

- description
- keywords
    - 各ページ共通で `拠鳥きまゆ,KimayuYorudo,VSinger,VTuber` を入れておく

property属性

- og:title
- og:description
    - descriptionと同じ
- og:image
    - TBD
- og:site_name
- og:type
    - "website" 固定
- og:locale
    - 現状、 "ja_JP"固定

## linkタグ

rel属性

- canonical : ビルド時にドメイン指定が必要になってしまうので、いったんは相対URL
- icon : TBD


