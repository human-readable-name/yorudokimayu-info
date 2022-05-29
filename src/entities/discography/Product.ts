export type ProductKind = "Single" | "EP";
export type Genre = "Rock" | "Alternative" | "Electronic" | "Pop";
export type LinkItem = {
    name: string;
    url: string;
};

export type ProductSummary = {
    id: string;
    name: string;
    kind: ProductKind;
    genre: Genre;
    dateOfRelease: Date;
    description: string;
    credits: string[];
    mvLinks: LinkItem[];
    storeLinks: LinkItem[];
    supplementalInformationLinks?: LinkItem[];
};

export const productSummaries: ProductSummary[] = [
    {
        id: "1st-ep",
        name: "sparkler",
        kind: "EP",
        genre: "Alternative",
        dateOfRelease: new Date("2022-04-24"),
        description: "1st EP M3-2022春",
        credits: [
            "作曲・Tr2作詞 マッチ",
            "Tr5作詞 esora uma [浮遊信号]",
            "Tr3Tr4Tr6作詞・ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "Crossfade Demo", url: "https://youtu.be/FmVb7r21Z-M"},
            {name: "sparkler", url: "https://youtu.be/YUH6igD6brE"},
            {name: "Enchanted", url: "https://youtu.be/RHlFEVZdsrs"},
            {name: "CUTE AGGRESSION!!!!", url: "https://youtu.be/fhc5ifdIvec"},
        ],
        storeLinks: [
            {name: "Official store", url: "https://461okmy.booth.pm/items/3756256"},
        ]
    },
    {
        id: "14th-single",
        name: "うたかたとかして",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-28"),
        description: "14th single",
        credits: [
            "作詞・作曲 esora uma [浮遊信号]",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "うたかたとかして", url: "https://youtu.be/9nNzSRtW-AE"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/7qE6cdZz"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3528690"},
        ],
        supplementalInformationLinks: [
            {name: "漫画・MV用アートワーク", url: "https://www.pixiv.net/artworks/95674341"},
        ]
    },
    {
        id: "13th-single",
        name: "KARISOME BREAKER",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-10"),
        description: "13th single",
        credits: [
            "作詞・作曲 mampuku",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "KARISOME BREAKER", url: "https://youtu.be/jFADO6wBgUo"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/mM5ds6zM"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3492316"},
        ]
    },
    {
        id: "12th-single",
        name: "レオニズの降る夜に",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-11-10"),
        description: "12th single",
        credits: [
            "作詞・作曲 マッチ",
            "ベース 四谷ゲンロク",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "レオニズの降る夜に", url: "https://youtu.be/C0EH5CzDKCY"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/sd6XHQxB"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3419090"},
        ]
    },
    {
        id: "11th-single",
        name: "PENGUIN EMERGENCE",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-10-10"),
        description: "11th single 活動開始1周年記念",
        credits: [
            "作曲 胡桃もよ",
            "作詞 朝比奈こん",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "PENGUIN EMERGENCE", url: "https://youtu.be/4EqjcReGmZM"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/D53C67Bu"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3419079"},
        ]
    },
    {
        id: "10th-single",
        name: "Memorable",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-10-01"),
        description: "10th single",
        credits: [
            "作詞・作曲 マッチ",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "Memorable", url: "https://youtu.be/x591--tK0wk"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/H9494e5u"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3318455"},
        ]
    },
    {
        id: "9th-single",
        name: "境界のアイリス",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-09-10"),
        description: "9th single",
        credits: [
            "作詞・作曲 r0y",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "境界のアイリス", url: "https://youtu.be/w7oDQo2ZNDc"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/c78bSYh9"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3265250"},
        ]
    },
    {
        id: "8th-single",
        name: "ロンリーディーバ",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-08-10"),
        description: "8th single",
        credits: [
            "作詞・作曲 アザミ",
            "ベース なおちゃん",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "ロンリーディーバ", url: "https://youtu.be/yUXNaH2JjW8"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/pCpgzUMU"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3185868"},
        ]
    },
    {
        id: "7th-single",
        name: "Dear My Enemy",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-07-25"),
        description: "7th single",
        credits: [
            "作詞・作曲 マッチ",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "Dear My Enemy", url: "https://youtu.be/GtWwzw54zVQ"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/AvPtrznD"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3143568"},
        ]
    },
    {
        id: "6th-single",
        name: "希求モーニング",
        kind: "Single",
        genre: "Electronic",
        dateOfRelease: new Date("2021-07-10"),
        description: "6th single",
        credits: [
            "作詞・作曲 picco",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "希求モーニング", url: "https://youtu.be/DpalPxOPZRo"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/0Rz8ACCd"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107770"},
        ]
    },
    {
        id: "5th-single",
        name: "茜色の公園で",
        kind: "Single",
        genre: "Pop",
        dateOfRelease: new Date("2021-06-10"),
        description: "5th single",
        credits: [
            "作曲 sumeshiii a.k.a.バーチャルお寿司",
            "作詞 内野達哉",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "茜色の公園で", url: "https://youtu.be/xFaoFG-9ZDM"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/HY6DrPGd"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107757"},
        ]
    },
    {
        id: "4th-single",
        name: "RULER ",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-05-10"),
        description: "4th single",
        credits: [
            "作曲 天野ドウジ [カクレゴ]",
            "ベース 四谷ゲンロク",
            "作詞・ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "RULER ", url: "https://youtu.be/uJCP_Vcqju8"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/vRVnqU5v"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107710"},
        ]
    },
    {
        id: "3rd-single",
        name: "カラの鼓動はソラになる",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-25"),
        description: "3rd single",
        credits: [
            "作詞・作曲 esora uma [浮遊信号]",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "カラの鼓動はソラになる", url: "https://youtu.be/7jS6tDpvko4"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/eGzYDu1Y"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107732"},
        ]
    },
    {
        id: "2nd-single",
        name: "真夜中メロウライン",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-11"),
        description: "2nd single",
        credits: [
            "作詞・作曲 隣町本舗",
            "ラップ作詞 Fra [BOOGEY VOXX]",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "真夜中メロウライン", url: "https://youtu.be/_R3eE6D2rBw"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/NQZabT0H"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107691"},
        ],
        supplementalInformationLinks: [
            {name: "ライナーノート", url: "https://tonarimachi.fanbox.cc/posts/2113546"},
        ]
    },
    {
        id: "1st-single",
        name: "Penguin Nova",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2020-10-10"),
        description: "1st single デビュー曲",
        credits: [
            "作曲 胡桃もよ",
            "作詞 朝比奈こん",
            "ボーカル 拠鳥きまゆ",
        ],
        mvLinks: [
            {name: "Penguin Nova", url: "https://youtu.be/DaVGqYTlCCk"},
        ],
        storeLinks: [
            {name: "Subscription / Download", url: "https://linkco.re/XRHzUnrA"},
            {name: "Official store", url: "https://461okmy.booth.pm/items/3107608"},
        ]
    },
];