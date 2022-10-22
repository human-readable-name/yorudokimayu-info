import { SupportedLocale } from "../../constants/i18n";
import { TranslatableMaster } from "../i18n/TannslatableMaster";
import { BiographyService, Profile, EventHistory, Collaboration, EventLink } from "./BiographyService";

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

export class EventLinkMaster extends TranslatableMaster {
    private url: string;
    constructor(props: {names: Map<SupportedLocale,string>, url: string}) {
        super({names: props.names});
        this.url = props.url;
    }
    getEventLink(locale: SupportedLocale): EventLink {
        return {
            name: this.getName(locale),
            url: this.url,
        }
    }
}

export class EventHistoryMaster extends TranslatableMaster {
    private date: Date;
    private links: EventLinkMaster[];
    constructor(props: {
        names: Map<SupportedLocale,string>,
        date: Date,
        links?: EventLinkMaster[],
    }) {
        super({names: props.names});
        this.date = props.date;
        this.links = props.links || [];
    }
    getEventHistory(locale: SupportedLocale): EventHistory {
        return {
            date: this.date,
            name: this.getName(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getEventLink(locale)    
            }),
        }
    }
}

const eventHistoryMasterData: EventHistoryMaster[] = [
    new EventHistoryMaster({
        date: new Date("2020-11-02"),
        names: TranslatableMaster.createNames([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-04"),
        names: TranslatableMaster.createNames([
            ["ja",  "エンタス忘年会"],
            ["en", "Akihabara ENTAS year-end party"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2020-12-11"),
        names: TranslatableMaster.createNames([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-07-31"),
        names: TranslatableMaster.createNames([
            ["ja" ,"VirtuaROCK FEST.vol.1"],
            ["en", "VirtuaROCK FEST.vol.1"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/Kve3pP-KSek",
                names: TranslatableMaster.createNames([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
            new EventLinkMaster({
                url: "https://youtu.be/VH0s6ngrVR4",
                names: TranslatableMaster.createNames([
                    ["ja", "拠鳥きまゆ出演ダイジェスト"],
                    ["en", "Digest"],
                ]),
            }),
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-08-07"),
        names: TranslatableMaster.createNames([
            ["ja", "VirtuaDive"],
            ["en", "VirtuaDive"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2021-11-20"),
        names: TranslatableMaster.createNames([
            ["ja", "#ぶいじゃむ vol.1"],
            ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/57bW0nKoOOo",
                names: TranslatableMaster.createNames([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            })
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-12-31"),
        names: TranslatableMaster.createNames([
            ["ja", "エンタス大晦日"],
            ["en", "Akihabara ENTAS new year's eve party"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-16"),
        names: TranslatableMaster.createNames([
            ["ja", "エンタス夏祭り DAY1"],
            ["en", "Akihabara ENTAS summer festival DAY1"],
        ]),
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-31"),
        names: TranslatableMaster.createNames([
            ["ja", "VirtuaROCK FEST. vol.2 DAY2"],
            ["en", "VirtuaROCK FEST. vol.2 DAY2"],
        ]),
        links: [
            new EventLinkMaster({
                url: "https://youtu.be/b17k1Gppzzk",
                names: TranslatableMaster.createNames([
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
        switch(locale) {
            case "en":
                return englishCollaborations;
            default:
                return japaneseCollaborations;
        }
    }
    listEventHistories(locale: SupportedLocale): EventHistory[] {
        return eventHistoryMasterData.map((master) => {
            return master.getEventHistory(locale);
        });
    }
};