import Link from "next/link";
import { SupportedLocale } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { BiographyService, Profile, EventHistory, Collaboration, CollaborationLink, EventLink } from "./BiographyService";

export class CollaborationLinkMaster  {
    private url: string;
    private nameValues: TranslatableValues;
    constructor(props: {url: string, nameValues: Map<SupportedLocale, string>}) {
        this.nameValues = new TranslatableValues({values: props.nameValues});
        this.url = props.url;
    }
    getCollaborationLink(locale: SupportedLocale): CollaborationLink {
        return {
            url: this.getUrl(locale),
            name: this.nameValues.getLocalizedValue(locale),
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
    private productNameValues: TranslatableValues;
    private productArtistValues?: TranslatableValues;
    private partOfTheWorkValues: TranslatableValues;
    private links: CollaborationLinkMaster[];
    constructor(props: {
        date: Date,
        productNameValues: Map<SupportedLocale, string>,
        productArtistValues?: Map<SupportedLocale, string>,
        partOfTheWorkValues: Map<SupportedLocale, string>,
        links?: CollaborationLinkMaster[],
    }) {
        this.date = props.date;
        this.productNameValues = new TranslatableValues({values: props.productNameValues});
        if (props?.productArtistValues != null) {
            this.productArtistValues = new TranslatableValues({values: props.productArtistValues});
        }
        this.partOfTheWorkValues = new TranslatableValues({values: props.partOfTheWorkValues});
        this.links = props.links || [];
    }
    getCollaboration(locale: SupportedLocale): Collaboration {
        return {
            date: this.date,
            product: {
                name: this.productNameValues.getLocalizedValue(locale),
                artist: this.productArtistValues?.getLocalizedValue(locale) || "",
            },
            partOfTheWork: this.partOfTheWorkValues.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getCollaborationLink(locale);
            }),
        }
    }
}

const collaborationMasterData: CollaborationMaster[] = [
    new CollaborationMaster({
        date: new Date("2021-04-01"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "Bloomer"],
            ["en", "Bloomer"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]), 
                url: "https://youtu.be/ZVsIPmfkWAg"
            }),
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]), 
                url: "https://linkco.re/7BmE5qH1"
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-05-21"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "#ぶいっとコンピ"],
            ["en", "#buittocompi"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "Tr11 セイメイトリガー 歌唱"],
            ["en", "Vocal Tr11 Seimei Triger"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                 ]),
                url: "https://youtu.be/CcvQX-tCBco",
            }),
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/y1ghFgts?lang",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-06-08"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "ワンダーラスト・アルカディア"],
            ["en", "wonderlast arcadia"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", "朝比奈 こん"],
            ["en", "Asahina Kon"]
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "MV制作・ハンドライティング"],
            ["en", "Music video production and hand writing"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/C0SHjl6xZLw"
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-07-25"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "VirtuaROCK FEST. vol.1"],
            ["en", "VirtuaROCK FEST. vol.1"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "Tr1 Visibility 歌唱"],
            ["en", "Vocal Tr1 Visibility"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/ZyAZsbNt",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-11-08"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "Rainy"],
            ["en", "Rainy"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", "竜乃エナジー"],
            ["en", "Draconic Energy"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "MVハンドライティング "],
            ["en", "Hand writing"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/ZZ548wxw_e4",
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-12-05"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "ATTRACTORS"],
            ["en", "ATTRACTORS"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", "カクレゴ"],
            ["en", "KAKULEGO"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music video"],
                    ["en", "Music video"],
                ]),
                url: "https://youtu.be/YePQNFVRHFk",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-06-18"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "寿司ラ〜メン、そしてとんかつ2〜イカれたパーティーふたたび〜"],
            ["en", "Sushi Ramen , and Tonkatsu Party2 ~Crazy Party Again~"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "Tr3 寿司ラ〜メン、そしてとんかつ 歌唱"],
            ["en", "Vocal Tr3 Sushi Ramen , and Tonkatsu"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/PSSeRxzR",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-07-23"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "VirtuaROCK FEST. vol.2"],
            ["en", "VirtuaROCK FEST. vol.2"],
        ]),
        productArtistValues: TranslatableValues.createValues([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "Tr2 Twinkle Gift 歌唱"],
            ["en", "Vocal Tr2 Twinkle Gift"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music Video"],
                    ["en", "Music Video"],
                ]),
                url: "https://youtu.be/LBGGQ5bwf6k",
            }),
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/R9gNmV5p",
            }),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-08-14"),
        productNameValues: TranslatableValues.createValues([
            ["ja", "Myosotis"],
            ["en", "Myosotis"],
        ]),
        partOfTheWorkValues: TranslatableValues.createValues([
            ["ja", "作詞・歌唱"],
            ["en", "Lyrics/Vocal"],
        ]),
        links: [
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Music Video"],
                    ["en", "Music Video"],
                ]),
                url: "https://youtu.be/vKp6LdALi0k",
            }),
            new CollaborationLinkMaster({
                nameValues: TranslatableValues.createValues([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: "https://linkco.re/mTXg3aM2"
            })
        ],
    })
];

export class EventLinkMaster {
    private url: string;
    private nameValues: TranslatableValues;
    constructor(props: {names: Map<SupportedLocale,string>, url: string}) {
        this.nameValues = new TranslatableValues({values: props.names});
        this.url = props.url;
    }
    getEventLink(locale: SupportedLocale): EventLink {
        return {
            name: this.nameValues.getLocalizedValue(locale),
            url: this.url,
        }
    }
}

export class EventHistoryMaster {
    private date: Date;
    private nameValues: TranslatableValues;
    private links: EventLinkMaster[];
    constructor(props: {
        names: Map<SupportedLocale,string>,
        date: Date,
        links?: EventLinkMaster[],
    }) {
        this.nameValues = new TranslatableValues({values: props.names});
        this.date = props.date;
        this.links = props.links || [];
    }
    getEventHistory(locale: SupportedLocale): EventHistory {
        return {
            date: this.date,
            name: this.nameValues.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getEventLink(locale)    
            }),
        }
    }
}

const eventHistoryMasterData: EventHistoryMaster[] = [
    new EventHistoryMaster({
        date: new Date("2020-11-02"),
        names: TranslatableValues.createValues([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-04"),
        names: TranslatableValues.createValues([
            ["ja",  "エンタス忘年会"],
            ["en", "Akihabara ENTAS year-end party"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-11"),
        names: TranslatableValues.createValues([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-07-31"),
        names: TranslatableValues.createValues([
            ["ja" ,"VirtuaROCK FEST.vol.1"],
            ["en", "VirtuaROCK FEST.vol.1"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/Kve3pP-KSek",
                names: TranslatableValues.createValues([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
            new EventLinkMaster({
                url: "https://youtu.be/VH0s6ngrVR4",
                names: TranslatableValues.createValues([
                    ["ja", "拠鳥きまゆ出演ダイジェスト"],
                    ["en", "Digest"],
                ]),
            }),
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-08-07"),
        names: TranslatableValues.createValues([
            ["ja", "VirtuaDive"],
            ["en", "VirtuaDive"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-11-20"),
        names: TranslatableValues.createValues([
            ["ja", "#ぶいじゃむ vol.1"],
            ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/57bW0nKoOOo",
                names: TranslatableValues.createValues([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            })
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-12-31"),
        names: TranslatableValues.createValues([
            ["ja", "エンタス大晦日"],
            ["en", "Akihabara ENTAS new year's eve party"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-16"),
        names: TranslatableValues.createValues([
            ["ja", "エンタス夏祭り DAY1"],
            ["en", "Akihabara ENTAS summer festival DAY1"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-31"),
        names: TranslatableValues.createValues([
            ["ja", "VirtuaROCK FEST. vol.2 DAY2"],
            ["en", "VirtuaROCK FEST. vol.2 DAY2"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/b17k1Gppzzk",
                names: TranslatableValues.createValues([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"]
                ]),
            })
        ],
    }),
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