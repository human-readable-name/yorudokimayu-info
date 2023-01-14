import { SupportedLocale } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { BiographyService, Profile, EventHistory, Collaboration, CollaborationLink, EventLink } from "./BiographyService";

export class CollaborationLinkMaster  {
    private url: string;
    private name: TranslatableValues;
    constructor(props: {url: string, name: TranslatableValues}) {
        this.name = props.name;
        this.url = props.url;
    }
    getCollaborationLink(locale: SupportedLocale): CollaborationLink {
        return {
            url: this.getUrl(locale),
            name: this.name.getLocalizedValue(locale),
        }
    }
    getUrl(locale: SupportedLocale): string {
        if (this.url.startsWith("https://linkco.re/")) {
            return `${this.url}?lang=${locale}`; 
        } else {
            return this.url;
        }
    }
}

export class CollaborationMaster {
    private date: Date;
    private productName: TranslatableValues;
    private productArtist?: TranslatableValues;
    private partOfTheWork: TranslatableValues;
    private links: CollaborationLinkMaster[];
    constructor(props: {
        date: Date,
        productName: TranslatableValues,
        productArtist?: TranslatableValues,
        partOfTheWork: TranslatableValues,
        links?: CollaborationLinkMaster[],
    }) {
        this.date = props.date;
        this.productName = props.productName;
        this.productArtist = props.productArtist;
        this.partOfTheWork = props.partOfTheWork;
        this.links = props.links || [];
    }
    getCollaboration(locale: SupportedLocale): Collaboration {
        return {
            date: this.date,
            product: {
                name: this.productName.getLocalizedValue(locale),
                artist: this.productArtist?.getLocalizedValue(locale) || "",
            },
            partOfTheWork: this.partOfTheWork.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getCollaborationLink(locale);
            }),
        }
    }
}

const collaborationMasterData: CollaborationMaster[] = [
    new CollaborationMaster({
        date: new Date("2021-04-01"),
        productName: TranslatableValues.create([
            ["ja", "Bloomer"],
            ["en", "Bloomer"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]), 
                url: "https://youtu.be/ZVsIPmfkWAg"
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]), 
                url: "https://linkco.re/7BmE5qH1"
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-05-21"),
        productName: TranslatableValues.create([
            ["ja", "#ぶいっとコンピ"],
            ["en", "#buittocompi"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr11 セイメイトリガー 歌唱"],
            ["en", "Vocal Tr11 Seimei Triger"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                 ]),
                url: "https://youtu.be/CcvQX-tCBco",
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/y1ghFgts?lang",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-06-08"),
        productName: TranslatableValues.create([
            ["ja", "ワンダーラスト・アルカディア"],
            ["en", "wonderlast arcadia"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", "朝比奈 こん"],
            ["en", "Asahina Kon"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "MV制作・ハンドライティング"],
            ["en", "Music video production and hand writing"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/C0SHjl6xZLw"
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-07-25"),
        productName: TranslatableValues.create([
            ["ja", "VirtuaROCK FEST. vol.1"],
            ["en", "VirtuaROCK FEST. vol.1"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr1 Visibility 歌唱"],
            ["en", "Vocal Tr1 Visibility"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/ZyAZsbNt",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-11-08"),
        productName: TranslatableValues.create([
            ["ja", "Rainy"],
            ["en", "Rainy"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", "竜乃エナジー"],
            ["en", "Draconic Energy"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "MVハンドライティング "],
            ["en", "Hand writing"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/ZZ548wxw_e4",
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-12-05"),
        productName: TranslatableValues.create([
            ["ja", "ATTRACTORS"],
            ["en", "ATTRACTORS"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", "カクレゴ"],
            ["en", "KAKULEGO"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/YePQNFVRHFk",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-06-18"),
        productName: TranslatableValues.create([
            ["ja", "寿司ラ〜メン、そしてとんかつ2〜イカれたパーティーふたたび〜"],
            ["en", "Sushi Ramen , and Tonkatsu Party2 ~Crazy Party Again~"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr3 寿司ラ〜メン、そしてとんかつ 歌唱"],
            ["en", "Vocal Tr3 Sushi Ramen , and Tonkatsu"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/PSSeRxzR",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-07-23"),
        productName: TranslatableValues.create([
            ["ja", "VirtuaROCK FEST. vol.2"],
            ["en", "VirtuaROCK FEST. vol.2"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr2 Twinkle Gift 歌唱"],
            ["en", "Vocal Tr2 Twinkle Gift"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music Video"],
                    ["en", "Music Video"],
                ]),
                url: "https://youtu.be/LBGGQ5bwf6k",
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/R9gNmV5p",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-08-14"),
        productName: TranslatableValues.create([
            ["ja", "Myosotis"],
            ["en", "Myosotis"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "作詞・歌唱"],
            ["en", "Lyrics/Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Music Video"],
                    ["en", "Music Video"],
                ]),
                url: "https://youtu.be/vKp6LdALi0k",
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/mTXg3aM2"
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-10-30"),
        productName: TranslatableValues.create([
            ["ja", "パンケーキキャッツ ノンストップエモーション！"],
            ["en", "PancakeCats Non-Stop Emotion!"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr2 ライトコンパス (feat. 拠鳥きまゆ) 歌唱"],
            ["en", "Vocal Tr2 Light Compass (feat. Yorudo Kimayu)"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]), 
                url: "https://pccs-vtuber.studio.site/",
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]), 
                url: "https://youtu.be/stfsWwIFDtE",
            }),
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/px6PvpE4"
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2023-01-13"),
        productName: TranslatableValues.create([
            ["ja", "凪の来るまで feat.拠鳥きまゆ"],
            ["en", "凪の来るまで feat.拠鳥きまゆ (English translation is not available)"],
        ]),
        productArtist: TranslatableValues.create([
            ["ja", "esora uma"],
            ["en", "esora uma"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Download for free"],
                    ["en", "Download for free"],
                ]),
                url: "https://umav.booth.pm/items/4473357"
            })
        ],
    }),
];

export class EventLinkMaster {
    private url: string;
    private name: TranslatableValues;
    constructor(props: {name: TranslatableValues, url: string}) {
        this.name = props.name;
        this.url = props.url;
    }
    getEventLink(locale: SupportedLocale): EventLink {
        return {
            name: this.name.getLocalizedValue(locale),
            url: this.url,
        }
    }
}

export class EventHistoryMaster {
    private date: Date;
    private name: TranslatableValues;
    private links: EventLinkMaster[];
    constructor(props: {
        name: TranslatableValues,
        date: Date,
        links?: EventLinkMaster[],
    }) {
        this.name = props.name;
        this.date = props.date;
        this.links = props.links || [];
    }
    getEventHistory(locale: SupportedLocale): EventHistory {
        return {
            date: this.date,
            name: this.name.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getEventLink(locale)    
            }),
        }
    }
}

const eventHistoryMasterData: EventHistoryMaster[] = [
    new EventHistoryMaster({
        date: new Date("2020-11-02"),
        name: TranslatableValues.create([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-04"),
        name: TranslatableValues.create([
            ["ja",  "エンタス忘年会"],
            ["en", "Akihabara ENTAS year-end party"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-11"),
        name: TranslatableValues.create([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-07-31"),
        name: TranslatableValues.create([
            ["ja" ,"VirtuaROCK FEST.vol.1"],
            ["en", "VirtuaROCK FEST.vol.1"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/Kve3pP-KSek",
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
            new EventLinkMaster({
                url: "https://youtu.be/VH0s6ngrVR4",
                name: TranslatableValues.create([
                    ["ja", "拠鳥きまゆ出演ダイジェスト"],
                    ["en", "Digest"],
                ]),
            }),
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-08-07"),
        name: TranslatableValues.create([
            ["ja", "VirtuaDive"],
            ["en", "VirtuaDive"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-11-20"),
        name: TranslatableValues.create([
            ["ja", "#ぶいじゃむ vol.1"],
            ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/57bW0nKoOOo",
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            })
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-12-31"),
        name: TranslatableValues.create([
            ["ja", "エンタス大晦日"],
            ["en", "Akihabara ENTAS new year's eve party"],
        ]),
        links: [
            new EventLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: "https://www.twitch.tv/videos/1250667831"
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-16"),
        name: TranslatableValues.create([
            ["ja", "エンタス夏祭り DAY1"],
            ["en", "Akihabara ENTAS summer festival DAY1"],
        ]),
        links: [
            new EventLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: "https://www.twitch.tv/videos/1535339421"
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-31"),
        name: TranslatableValues.create([
            ["ja", "VirtuaROCK FEST. vol.2 DAY2"],
            ["en", "VirtuaROCK FEST. vol.2 DAY2"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/b17k1Gppzzk",
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"]
                ]),
            })
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2022-11-26"),
        name: TranslatableValues.create([
            ["ja", "柚子花主催LIVE -Planet Station- STAGE.5"],
            ["en", "Planet Station STAGE.5 Virtual Artist Music Live Hosted by YUZUHA"],
        ]),
        links: [
            new EventLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Z-aN"],
                    ["en", "Z-aN"],
                ]), 
                url: "https://www.zan-live.com/live/detail/10251"
            }),
            new EventLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "レオニズの降る夜に [Live ver. from #プラステ5 ]"],
                    ["en", "Leonids Reminds Me of the Starry Night (Live ver.)"],
                ]), 
                url: "https://youtu.be/Vroy6pW-oBI"
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2022-12-17"),
        name: TranslatableValues.create([
            ["ja", "エンタス忘年会"],
            ["en", "Akihabara ENTAS year-end party"],
        ]),
        links: [
            new EventLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: "https://www.twitch.tv/videos/1681281496"
            }),
        ]
    })
];

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

export class InMemoryBiographyService implements BiographyService {
    getProfile(locale: SupportedLocale): Profile {
        switch(locale) {
            case "en":
                return englishProfile;
            default:
                return japaneseProfile;
        }
    }
    listCollaborations(locale: SupportedLocale): Collaboration[] {
        return collaborationMasterData.map((master) => {
            return master.getCollaboration(locale);
        })
    }
    listEventHistories(locale: SupportedLocale): EventHistory[] {
        return eventHistoryMasterData.map((master) => {
            return master.getEventHistory(locale);
        });
    }
};