import { SupportedLocale } from "../../constants/i18n";
import { Collaboration } from "../../entities/biography/Collaboration";
import { EventHistory } from "../../entities/biography/EventHistory";
import { Profile } from "../../entities/biography/Profile";

export const japaneseCollaborations: Collaboration[] = [
    {
        date: new Date("2021-04-01"),
        product: { 
            name: "Bloomer",
            artist: "#ぶいっと",
        },
        partOfTheWork: "歌唱",
        links: [
            {name: "Music video", url: "https://youtu.be/ZVsIPmfkWAg"},
            {name: "Subscription / Download", url: "https://linkco.re/7BmE5qH1?lang=ja"},
        ],
    },
    {
        date: new Date("2021-05-21"),
        product: { 
            name: "#ぶいっとコンピ",
            artist: "",
        },
        partOfTheWork: "Tr11 セイメイトリガー 歌唱",
        links: [
            {name: "Music video", url: "https://youtu.be/CcvQX-tCBco"},
            {name: "Subscription / Download", url: "https://linkco.re/y1ghFgts?lang=ja"},
        ],
    },
    {
        date: new Date("2021-06-08"),
        product: { 
            name: "ワンダーラスト・アルカディア",
            artist: "blue magic garden",
        },
        partOfTheWork: "MV制作・ハンドライティング",
        links: [
            {name: "Music video", url: "https://youtu.be/C0SHjl6xZLw"},
        ],
    },
    {
        date: new Date("2021-07-25"),
        product: { 
            name: "VirtuaROCK FEST. vol.1",
            artist: "",
        },
        partOfTheWork: "Tr1 Visibility 歌唱",
        links: [
            {name: "Subscription / Download", url: "https://linkco.re/ZyAZsbNt?lang=ja"},
        ],
    },
    {
        date: new Date("2021-11-08"),
        product: { 
            name: "Rainy",
            artist: "竜乃エナジー",
        },
        partOfTheWork: "MVハンドライティング ",
        links: [
            {name: "Music video", url: "https://youtu.be/ZZ548wxw_e4"},
        ],
    },
    {
        date: new Date("2021-12-05"),
        product: { 
            name: "ATTRACTORS",
            artist: "カクレゴ",
        },
        partOfTheWork: "歌唱",
        links: [
            {name: "Music video", url: "https://youtu.be/YePQNFVRHFk"},
        ],
    },
    {
        date: new Date("2022-06-18"),
        product: {
            name: "寿司ラ〜メン、そしてとんかつ2〜イカれたパーティーふたたび〜",
            artist: "",
        },
        partOfTheWork: "Tr3 寿司ラ〜メン、そしてとんかつ 歌唱",
        links: [
            {name: "Subscription / Download", url: "https://linkco.re/PSSeRxzR?lang=ja"},
        ],
    },
    {
        date: new Date("2022-07-23"),
        product: {
            name: "VirtuaROCK FEST. vol.2",
            artist: ""
        },
        partOfTheWork: "Tr2 Twinkle Gift 歌唱",
        links: [
            {name: "Music Video", url: "https://youtu.be/LBGGQ5bwf6k"},
            {name: "Subscription / Download", url: "https://linkco.re/R9gNmV5p?lang=ja"},
        ],
    },
    {
        date: new Date("2022-08-14"),
        product: {
            name: "Myosotis",
            artist: "",
        },
        partOfTheWork: "作詞・歌唱",
        links: [
            {name: "Music Video", url: "https://youtu.be/vKp6LdALi0k"},
            {name: "Subscription / Download", url: "https://linkco.re/mTXg3aM2?lang=ja"},
        ],
    },
];

export const englishCollaborations: Collaboration[] = [
    {
        date: new Date("2021-04-01"),
        product: { 
            name: "Bloomer",
            artist: "#Vtuber_Motto",
        },
        partOfTheWork: "Vocal",
        links: [
            {name: "Music video", url: "https://youtu.be/ZVsIPmfkWAg"},
            {name: "Subscription / Download", url: "https://linkco.re/7BmE5qH1?lang=en"},
        ],
    },
    {
        date: new Date("2021-05-21"),
        product: { 
            name: "#buittocompi",
            artist: "Various Artists",
        },
        partOfTheWork: "Vocal Tr11 Seimei Triger",
        links: [
            {name: "Music video", url: "https://youtu.be/CcvQX-tCBco"},
            {name: "Subscription / Download", url: "https://linkco.re/y1ghFgts?lang=en"},
        ],
    },
    {
        date: new Date("2021-06-08"),
        product: { 
            name: "wonderlast arcadia",
            artist: "Asahina Kon",
        },
        partOfTheWork: "Music video production and hand writing",
        links: [
            {name: "Music video", url: "https://youtu.be/C0SHjl6xZLw"},
        ],
    },
    {
        date: new Date("2021-07-25"),
        product: { 
            name: "VirtuaROCK FEST. vol.1",
            artist: "",
        },
        partOfTheWork: "Vocal Tr1 Visibility",
        links: [
            {name: "Subscription / Download", url: "https://linkco.re/ZyAZsbNt?lang=en"},
        ],
    },
    {
        date: new Date("2021-11-08"),
        product: { 
            name: "Rainy",
            artist: "Draconic Energy",
        },
        partOfTheWork: "Hand writing",
        links: [
            {name: "Music video", url: "https://youtu.be/ZZ548wxw_e4"},
        ],
    },
    {
        date: new Date("2021-12-05"),
        product: { 
            name: "ATTRACTORS",
            artist: "KAKULEGO",
        },
        partOfTheWork: "Vocal",
        links: [
            {name: "Music video", url: "https://youtu.be/YePQNFVRHFk"},
        ],
    },
    {
        date: new Date("2022-06-18"),
        product: {
            name: "Sushi Ramen , and Tonkatsu Party2 ~Crazy Party Again~",
            artist: "",
        },
        partOfTheWork: "Vocal Tr3 Sushi Ramen , and Tonkatsu",
        links: [
            {name: "Subscription / Download", url: "https://linkco.re/PSSeRxzR?lang=en"},
        ],
    },
    {
        date: new Date("2022-07-23"),
        product: {
            name: "VirtuaROCK FEST. vol.2",
            artist: ""
        },
        partOfTheWork: "Vocal Tr2 Twinkle Gift",
        links: [
            {name: "Music Video", url: "https://youtu.be/LBGGQ5bwf6k"},
            {name: "Subscription / Download", url: "https://linkco.re/R9gNmV5p?lang=en"},
        ],
    },
    {
        date: new Date("2022-08-14"),
        product: {
            name: "Myosotis",
            artist: ""
        },
        partOfTheWork: "Lyrics/Vocal",
        links: [
            {name: "Music Video", url: "https://youtu.be/vKp6LdALi0k"},
            {name: "Subscription / Download", url: "https://linkco.re/mTXg3aM2?lang=en"},
        ],
    },
];

export const listCollaborations = (locale: SupportedLocale): Collaboration[] => {
    switch(locale) {
        case "en":
            return englishCollaborations;
        default:
            return japaneseCollaborations;
    }
} 

export const japaneseEventHistories: EventHistory[] = [
    {
        date: new Date("2020-11-02"),
        name: "#ぶいっと",
    },
    {
        date: new Date("2020-12-04"),
        name: "エンタス忘年会",
    },
    {
        date: new Date("2020-12-11"),
        name: "#ぶいっと",
    },
    {
        date: new Date("2021-07-31"),
        name: "VirtuaROCK FEST.vol.1",
        links: [
            {name: "アーカイブ", url: "https://youtu.be/Kve3pP-KSek"},
            {name: "拠鳥きまゆ出演ダイジェスト", url: "https://youtu.be/VH0s6ngrVR4"},
        ],
    },
    {
        date: new Date("2021-08-07"),
        name: "VirtuaDive",
    },
    {
        date: new Date("2021-11-20"),
        name: "#ぶいじゃむ vol.1",
        links: [
            {name: "アーカイブ", url: "https://youtu.be/57bW0nKoOOo"},
        ],
    },
    {
        date: new Date("2021-12-31"),
        name: "エンタス大晦日"
    },
    {
        date: new Date("2022-07-16"),
        name: "エンタス夏祭り DAY1"
    },
    {
        date: new Date("2022-07-31"),
        name: "VirtuaROCK FEST. vol.2 DAY2",
        links: [
            {name: "アーカイブ", url: "https://youtu.be/b17k1Gppzzk"},
        ],
    },
];

export const englishEventHistories: EventHistory[] = [
    {
        date: new Date("2020-11-02"),
        name: "#Vtuber_Motto",
    },
    {
        date: new Date("2020-12-04"),
        name: "Akihabara ENTAS year-end party",
    },
    {
        date: new Date("2020-12-11"),
        name: "#Vtuber_Motto",
    },
    {
        date: new Date("2021-07-31"),
        name: "VirtuaROCK FEST.vol.1",
        links: [
            {name: "Live streaming archive", url: "https://youtu.be/Kve3pP-KSek"},
            {name: "Digest", url: "https://youtu.be/VH0s6ngrVR4"},
        ],
    },
    {
        date: new Date("2021-08-07"),
        name: "VirtuaDive",
    },
    {
        date: new Date("2021-11-20"),
        name: "#V-jam vol.1 (Copy band sessions of major artists)",
        links: [
            {name: "Live streaming archive", url: "https://youtu.be/57bW0nKoOOo"},
        ],
    },
    {
        date: new Date("2021-12-31"),
        name: "Akihabara ENTAS new year's eve party"
    },
    {
        date: new Date("2022-07-16"),
        name: "Akihabara ENTAS summer festival DAY1"
    },
    {
        date: new Date("2022-07-31"),
        name: "VirtuaROCK FEST. vol.2 DAY2",
        links: [
            {name: "Live streaming archive", url: "https://youtu.be/b17k1Gppzzk"},
        ],
    },
];

export const listEventHistories = (locale: SupportedLocale): EventHistory[] => {
    switch(locale) {
        case "en":
            return englishEventHistories;
        default:
            return japaneseEventHistories;
    }
};

export const japaneseProfile: Profile = {
    name: "拠鳥 きまゆ",
    nameCaption: "(よるど きまゆ)",
    introductions: [
        "「きみの背中を押す歌を届ける。」を掲げ、オリジナル曲はRock中心に活動。",
        "「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。",
        "2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。",
        "歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。",
    ],
    activities: [
        "2020-10-10 1st Single Penguin Novaリリースと同時に活動開始",
        "2021-04-10 9か月連続リリース企画 #nova_next 開始",
        "2021-10-24 3D お 披 露",
        "2021-12-28 #nova_next 完結",
        "2022-04-24 初のM3 参加、1st EP sparklerをリリース",
    ],
};

export const englishProfile: Profile = {
    name: "Kimayu Yorudo",
    nameCaption: undefined,
    introductions: [
        "She is a virtual artist who focus on rock music.",
        "She respects PENGUIN RESEARCH and posts covers of PENGUIN RESEARCH and kemu songs on her YouTube channel.",
        "In 2021 she released over 13 songs as a deliverable of #nova_next (original music release project for 9 consecutive months).",
        "She is also a multi-creator of videos, hand writing, lyrics, VTuber logo design, etc.",
    ],
    activities: [
        "2020-10-10 Started activities with the release of Penguin Nova",
        "2021-04-10 Started #nova_next project",
        "2021-10-24 Unveiled 3D model",
        "2021-12-28 Completed #nova_next project",
        "2022-04-24 Participated in M3 for the first time and released 1st EP sparkler",
    ],
}

export const getProfile = (locale: SupportedLocale): Profile => {
    switch(locale) {
        case "en":
            return englishProfile;
        default:
            return japaneseProfile;
    }
};