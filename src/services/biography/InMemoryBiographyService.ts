import { format } from "date-fns";
import { SUPPORTED_LOCALES, SupportedLocale } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { createBoothUrl } from "../i18n/Booth";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { BiographyService, Profile, EventHistory, Collaboration } from "./BiographyService";


export class CollaborationMaster {
    private date: Date;
    private productName: TranslatableValues;
    private productArtist?: TranslatableValues;
    private partOfTheWork: TranslatableValues;
    private links: LinkMaster[];
    constructor(props: {
        date: Date,
        productName: TranslatableValues,
        productArtist?: TranslatableValues,
        partOfTheWork: TranslatableValues,
        links?: LinkMaster[],
    }) {
        this.date = props.date;
        this.productName = props.productName;
        this.productArtist = props.productArtist;
        this.partOfTheWork = props.partOfTheWork;
        this.links = props.links || [];
    }
    getCollaboration(locale: SupportedLocale): Collaboration {
        return {
            date: format(this.date, 'yyyy-MM-dd'),
            product: {
                name: this.productName.getLocalizedValue(locale),
                artist: this.productArtist?.getLocalizedValue(locale) || "",
            },
            partOfTheWork: this.partOfTheWork.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getLinkItem(locale);
            }),
        }
    }
}

const collaborationMasterData: CollaborationMaster[] = [
    new CollaborationMaster({
        date: new Date("2021-04-01"),
        productName: TranslatableValues.createUnifiedStatement("Bloomer"),
        productArtist: TranslatableValues.create([
            ["ja", "#ぶいっと"],
            ["en", "#Vtuber_Motto"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'ZVsIPmfkWAg'}),
            LinkMaster.createForTuneCore({id: '7BmE5qH1'}),
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
            LinkMaster.createMusicVideoOnYouTube({id: 'CcvQX-tCBco'}),
            LinkMaster.createForTuneCore({id: 'y1ghFgts'}),
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
            LinkMaster.createMusicVideoOnYouTube({id: 'C0SHjl6xZLw'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-07-25"),
        productName: TranslatableValues.createUnifiedStatement("VirtuaROCK FEST. vol.1"),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr1 Visibility 歌唱"],
            ["en", "Vocal Tr1 Visibility"],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: 'ZyAZsbNt'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-11-08"),
        productName: TranslatableValues.createUnifiedStatement("Rainy"),
        productArtist: TranslatableValues.create([
            ["ja", "竜乃エナジー"],
            ["en", "Draconic Energy"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "MVハンドライティング "],
            ["en", "Hand writing"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'ZZ548wxw_e4'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2021-12-05"),
        productName: TranslatableValues.createUnifiedStatement("ATTRACTORS"),
        productArtist: TranslatableValues.create([
            ["ja", "カクレゴ"],
            ["en", "KAKULEGO"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'YePQNFVRHFk'}),
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
            LinkMaster.createForTuneCore({id: 'PSSeRxzR'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-07-23"),
        productName: TranslatableValues.createUnifiedStatement("VirtuaROCK FEST. vol.2"),
        productArtist: TranslatableValues.create([
            ["ja", ""],
            ["en", "Various Artists"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr2 Twinkle Gift 歌唱"],
            ["en", "Vocal Tr2 Twinkle Gift"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'LBGGQ5bwf6k'}),
            LinkMaster.createForTuneCore({id: 'R9gNmV5p'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2022-08-14"),
        productName: TranslatableValues.createUnifiedStatement("Myosotis"),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱・作詞 (座敷乃てまり[カクレゴ]と共作)"],
            ["en", "Vocal/Lyrics (co-written with TemariZashikino [KAKULEGO])"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'vKp6LdALi0k'}),
            LinkMaster.createForTuneCore({id: 'mTXg3aM2'}),
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://pccs-vtuber.studio.site/"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/stfsWwIFDtE"),
            }),
            LinkMaster.createForTuneCore({id: 'px6PvpE4'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2023-01-13"),
        productName: TranslatableValues.create([
            ["ja", "凪の来るまで feat.拠鳥きまゆ"],
            ["en", "凪の来るまで feat.拠鳥きまゆ (English translation is not available)"],
        ]),
        productArtist: TranslatableValues.createUnifiedStatement("esora uma"),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱"],
            ["en", "Vocal"],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Download for free"),
                url: TranslatableValues.create(
                    SUPPORTED_LOCALES.map((locale) => {
                        return [locale, createBoothUrl({id: '4473357', locale})];
                    })
                ),
            })
        ],
    }),
    new CollaborationMaster({
        date: new Date("2023-04-30"),
        productName: TranslatableValues.create([
            ["ja", "パンケーキキャッツ サニーソング"],
            ["en", "PancakeCats Sunny Song"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr1 サニーソング (feat.拠鳥きまゆ) 歌唱"],
            ["en", "Vocal Tr1 Sunny Song (feat. Yorudo Kimayu)"],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://sunnysong.studio.site/"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/H5zN6zqcPKE"),
            }),
            LinkMaster.createForTuneCore({id: "SMzvnrya"}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2023-07-31'),
        productName: TranslatableValues.create([
            ["ja", "サーチライト"],
            ["en", "SearchLight"],
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱・ロゴデザイン"],
            ["en", "Vocal/Logo design"],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: '66EeHazf'}),
            LinkMaster.createMusicVideoOnYouTube({id: 'NrdD9jrN1Jg'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2023-10-30'),
        productName: TranslatableValues.create([
            ["ja", "パンケーキキャッツ Re:collection"],
            ["en", "PancakeCats Re:collection"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "Tr6 シゲキ的ドラスティックチューン(feat.拠鳥きまゆ) 歌唱"],
            ["en", "Vocal Tr6 Shigeki-like drastic tune (feat. Yorudo Kimayu)"],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://re-collection.studio.site/"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/yUUtXN25b9Q"),
            }),
            LinkMaster.createForTuneCore({id: "ye8Hb3C0"}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2024-10-04'),
        productName: TranslatableValues.createUnifiedStatement('ラブラビリンス'),
        productArtist: TranslatableValues.create([
            ['ja', '魔ノ姫こあく'],
            ['en', 'KoakuManohime'],
        ]),
        partOfTheWork: TranslatableValues.create([
            ['ja', 'ロゴデザイン'],
            ['en', 'Logo design'],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: '-ioV8oxaiTs'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2025-03-28'),
        productName: TranslatableValues.createUnifiedStatement('Broaden My World'),
        partOfTheWork: TranslatableValues.create([
            ["ja", "歌唱・作詞 (魔ノ姫こあくと共作)"],
            ["en", "Vocal/Lyric (co-written with KoakuManohime)"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'L_QOpKQ5FeE'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2025-04-27'),
        productName: TranslatableValues.createUnifiedStatement('パンケーキキャッツ マッチ・アップ・マーチ！'),
        partOfTheWork: TranslatableValues.create([
            ["ja", 'Tr2 rolling, shoelace, 歌唱'],
            ["en", 'Vocal Tr2 rolling, shoelace,'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://pancakecats2025.studio.site/"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/cgAylXphnls"),
            }),
            LinkMaster.createForTuneCore({id: 'UsTuyRCx'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date("2025-05-30"),
        productName: TranslatableValues.createUnifiedStatement("Showtime Syndrome"),
        productArtist: TranslatableValues.create([
            ["ja", "魔ノ姫こあく"],
            ["en", "KoakuManohime"]
        ]),
        partOfTheWork: TranslatableValues.create([
            ["ja", "MV制作"],
            ["en", "Music video production"],
        ]),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: 'hZCoaVrcudY'}),
        ],
    }),
    new CollaborationMaster({
        date: new Date('2025-10-26'),
        productName: TranslatableValues.createUnifiedStatement('Bitter Sweet Symphony'),
        productArtist: TranslatableValues.createUnifiedStatement('アタリメ × Atelier LadyBird'),
        partOfTheWork: TranslatableValues.create([
            ['ja', 'Tr3 未来 歌唱'],
            ['en', 'Vocal Tr3 未来'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://atarime7.github.io/bitter-sweet-symphony/')
            })
        ],
    }),
];

export class EventHistoryMaster {
    private date: Date;
    private name: TranslatableValues;
    private links: LinkMaster[];
    constructor(props: {
        name: TranslatableValues,
        date: Date,
        links?: LinkMaster[],
    }) {
        this.name = props.name;
        this.date = props.date;
        this.links = props.links || [];
    }
    getEventHistory(locale: SupportedLocale): EventHistory {
        return {
            date: format(this.date, 'yyyy-MM-dd'),
            name: this.name.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getLinkItem(locale)    
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
        name: TranslatableValues.createUnifiedStatement("VirtuaROCK FEST.vol.1"),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/Kve3pP-KSek"),
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/VH0s6ngrVR4"),
                name: TranslatableValues.create([
                    ["ja", "拠鳥きまゆ出演ダイジェスト"],
                    ["en", "Digest"],
                ]),
            }),
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2021-08-07"),
        name: TranslatableValues.createUnifiedStatement("VirtuaDive"),
    }),
    new EventHistoryMaster({
        date: new Date("2021-11-20"),
        name: TranslatableValues.create([
            ["ja", "#ぶいじゃむ vol.1"],
            ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/57bW0nKoOOo"),
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://www.twitch.tv/videos/1250667831"),
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://www.twitch.tv/videos/1535339421"),
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2022-07-31"),
        name: TranslatableValues.createUnifiedStatement("VirtuaROCK FEST. vol.2 DAY2"),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/b17k1Gppzzk"),
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Z-aN"],
                    ["en", "Z-aN"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://www.zan-live.com/live/detail/10251"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "レオニズの降る夜に [Live ver. from #プラステ5 ]"],
                    ["en", "Leonids Reminds Me of the Starry Night (Live ver.)"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/Vroy6pW-oBI"),
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://www.twitch.tv/videos/1681281496"),
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2023-05-28"),
        name: TranslatableValues.create([
            ["ja", "vortex主催『V³: Virtual Vortex Voyage』"],
            ["en", "V³: Virtual Vortex Voyage hosted by vortex"],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://pjblue.zaiko.io/item/356598"),
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2023-09-17"),
        name: TranslatableValues.createUnifiedStatement("TRIATHLON ~presents by V³~ Day2"),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://pjblue.zaiko.io/item/358789"),
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"]
                ]),
            }),
        ]
    }),
    new EventHistoryMaster({
        date: new Date("2023-09-30"),
        name: TranslatableValues.createUnifiedStatement("Virtual Artist Fes VRide! Vol.2"),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://www.real-virtual-live.com/vol2"),
                name: TranslatableValues.create([
                    ["ja", "公式サイト"],
                    ["en", "Official web site"],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://www.youtube.com/live/C-uYMHzzXDo"),
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
        ],
    }),
    new EventHistoryMaster({
        date: new Date("2023-10-07"),
        name: TranslatableValues.create([
            ["ja", "拠鳥きまゆ 1st Oneman Live「PENGUIN A LIVE」"],
            ["en", 'Kimayu Yorudo 1st solo concert "PENGUIN A LIVE"'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://passmarket.yahoo.co.jp/event/show/detail/026vu3ycss431.html'),
                name: TranslatableValues.create([
                    ['ja', '現地 赤坂navey floor'],
                    ['en', 'Venue Akasaka navey floor'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/live/detail/10311'),
                name: TranslatableValues.create([
                    ['ja', '配信 Z-aN'],
                    ['en', 'Streaming Z-aN'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://panora.tokyo/archives/73141'),
                name: TranslatableValues.create([
                    ['ja', 'ライブレポート'],
                    ['en', 'Report on PANORA'],
                ])
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/hBUybF1HIF4'),
                name: TranslatableValues.createUnifiedStatement('Digest movie'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'わくわく！VTuberひろば Vol.35 ミュージックLIVE'],
            ['en', 'WAKUWAKU VTuber HIROBA Vol.35 music live'],
        ]),
        date: new Date('2023-10-21'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.youtube.com/live/QsQogxbnXUQ'),
                name: TranslatableValues.create([
                    ['ja', 'アーカイブ'],
                    ['en', 'Live streaming archive'],
                ]),
            })
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.createUnifiedStatement("Vack-ON!! vol.2"),
        date: new Date('2023-12-29'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://zaiko.io/event/360813"), 
                name: TranslatableValues.create([
                    ['ja', 'アーカイブ'],
                    ['en', 'Live streaming archive'],
                ]),
            })
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ["ja", "V³アワード"],
            ["en", "V³ AWARD"],
        ]),
        date: new Date('2024-02-04'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://zaiko.io/event/360532"), 
                name: TranslatableValues.create([
                    ['ja', 'アーカイブ'],
                    ['en', 'Live streaming archive'],
                ]),
            })
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.createUnifiedStatement('COLOR UP! Vol.2'),
        date: new Date('2024-02-18'),
        links: []
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.36'],
            ['en', 'Vcafe vol.36'],
        ]),
        date: new Date('2024-05-17'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/6753'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            })
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.createUnifiedStatement('Virtual Artist Fes VRide! Vol.10'),
        date: new Date('2024-06-01'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '公式サイト'],
                    ['en', 'Official web site'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://www.real-virtual-live.com/vol10'),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://www.youtube.com/live/eYcNbmfMtM4"),
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'vortex主催『#今日だけ最強ユニットLIVE』'],
            ['en', 'LIVE "The most powerful music unit for one day only" hosted by vortex'],
        ]),
        date: new Date('2024-06-09'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://pjblue.zaiko.io/item/364621'),
                name: TranslatableValues.create([
                    ['ja', 'アーカイブ'],
                    ['en', 'Live streaming archive'],
                ])
            })
        ]
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.47'],
            ['en', 'Vcafe vol.47'],
        ]),
        date: new Date('2024-07-27'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/7550'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }) 
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.57'],
            ['en', 'Vcafe vol.57'],
        ]),
        date: new Date('2024-09-14'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/7974'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            })
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '魔ノ姫こあく生誕3Dライブ～Showtime Syndrome～'],
            ['en', 'Koaku Manohime Birthday 3D Live ~ Showtime Syndrome ~'],
        ]),
        date: new Date('2024-10-19'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://pjblue.zaiko.io/item/366852'),
                name: TranslatableValues.create([
                    ['ja', 'アーカイブ'],
                    ['en', 'Live streaming archive'],
                ])
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'らいVおん vol.7'],
            ['en', 'らいVおん (LIVE&1on1) vol.7'],
        ]),
        date: new Date('2024-10-26'),
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.74'],
            ['en', 'Vcafe vol.74'],
        ]),
        date: new Date('2024-12-20'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/9179'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            })
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '恋せよ男子2025 Virtual Sounds Borderlessコラボステージ'],
            ['en', 'Collaboration stage of "恋せよ男子2025" and "Virtual Sounds Borderless"']
        ]),
        date: new Date('2025-01-19'),
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.85'],
            ['en', 'Vcafe vol.85'],
        ]),
        date: new Date('2025-01-26'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/9731'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.95'],
            ['en', 'Vcafe vol.95'],
        ]),
        date: new Date('2025-03-08'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/10071'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
                ['ja', 'ぶいかふぇ♪ vol.112'],
                ['en', 'Vcafe vol.112'],
            ]),
        date: new Date('2025-05-02'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/10721'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '革命ロジック2025 Virtual Sounds Borderlessコラボステージ'],
            ['en', 'Collaboration stage of "革命ロジック2025" and "Virtual Sounds Borderless"']
        ]),
        date: new Date('2025-05-04'),
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '魔ノ姫こあく×拠鳥きまゆ 2man Live「Broaden My World」'],
            ['en', 'Koaku Manohime and Kimayu Yorudo joint concert "Broaden My World"'],
        ]),
        date: new Date('2025-05-17'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/9958'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '魔ノ姫こあく×拠鳥きまゆ 2man Live 振替公演「(RE:)Broaden My World」'],
            ['en', 'Koaku Manohime and Kimayu Yorudo joint concert "(RE:)Broaden My World"'],
        ]),
        date: new Date('2025-05-28'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/txbCKRzZr-o'),
                name: TranslatableValues.createUnifiedStatement('Digest movie'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ぶいかふぇ♪ vol.127'],
            ['en', 'Vcafe vol.127'],
        ]),
        date: new Date('2025-06-14'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/11370'),
                name: TranslatableValues.createUnifiedStatement('bitfan'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', 'ねくすてーじ vol.6'],
            ['en', 'nextage vol.6'],
        ]),
        date: new Date('2025-08-16'),
    }),
    new EventHistoryMaster({
        date: new Date("2025-10-04"),
        name: TranslatableValues.create([
            ["ja", "拠鳥きまゆ 拠鳥きまゆ 2nd Oneman Live「人鳥は雷震を運んで」"],
            ["en", 'Kimayu Yorudo 2nd solo concert "Penguin carries the thunder shock."'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/ja/live/detail/10603'),
                name: TranslatableValues.create([
                    ['ja', '現地 (下北沢レッグ) / 配信 (Z-aN) '],
                    ['en', 'Venue (Shimokitazawa ReG) / Streaming (Z-aN)'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://v-meguri.com/event/yorudokimayu-2nd-onemanlive/'),
                name: TranslatableValues.create([
                    ['ja', 'ライブレポート'],
                    ['en', 'Report on V-meguri'],
                ])
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/Mgo37QMTsWY'),
                name: TranslatableValues.createUnifiedStatement('Digest movie'),
            }),
        ],
    }),
    new EventHistoryMaster({
        name: TranslatableValues.create([
            ['ja', '#ぶいちゅっ vol.4'],
            ['en', 'Virtual Tuesday vol.4']
        ]),
        date: new Date('2025-10-21'),
    }),
    new EventHistoryMaster({
        name: TranslatableValues.createUnifiedStatement('​Virtual Artist Fes VRide! Vol.18'),
        date: new Date('2025-10-26'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.real-virtual-live.com/vol18'),
                name: TranslatableValues.create([
                    ['ja', '公式サイト'],
                    ['en', 'Official web site']
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/vQGOoGp2y50"),
                name: TranslatableValues.create([
                    ["ja", "アーカイブ"],
                    ["en", "Live streaming archive"],
                ]),
            }),
        ],
    }),
];

export const japaneseProfile: Profile = {
    name: "拠鳥 きまゆ",
    nameCaption: "(よるど きまゆ)",
    introductions: [
        "オリジナル曲はRock中心に活動するVsinger。",
        "「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。",
        "2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。",
        "歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。",
        "2025年にはPENGUIN RESEARCHの神田ジョンから楽曲提供を受け、夢の1つを実現。"
    ],
    activities: [
        "2020-10-10 1st Single Penguin Novaリリースと同時に活動開始",
        "2021-04-10 9か月連続リリース企画 #nova_next 開始",
        "2021-10-24 3D お披露目",
        "2021-12-28 #nova_next 完結",
        "2022-04-24 初のM3 参加、1st EP sparklerをリリース",
        "2023-04-30 1st Album Say,をリリース",
        "2023-10-07 1st Oneman Live「PENGUIN A LIVE」を開催",
        "2025-04-27 2nd EP For,をリリース",
        "2025-05-17 魔ノ姫こあく×拠鳥きまゆ 2man Live「Broaden My World」を開催",
        "2025-05-28 魔ノ姫こあく×拠鳥きまゆ 2man Live 振替公演「(RE:)Broaden My World」を開催",
        "2025-07-31 4か月連続リリース企画 #FOR_RISING 開始",
        "2025-10-04 2nd Oneman Live「人鳥は雷震を運んで」を開催",
    ],
};

export const englishProfile: Profile = {
    name: "Kimayu Yorudo",
    nameCaption: null,
    introductions: [
        "She is a virtual artist who focus on rock music.",
        "She respects PENGUIN RESEARCH and posts covers of PENGUIN RESEARCH and kemu songs on her YouTube channel.",
        "In 2021 she released over 13 songs as a deliverable of #nova_next (original music release project for 9 consecutive months).",
        "She is also a multi-creator of videos, hand writing, lyrics, VTuber logo design, etc.",
        "In 2025 one of her dreams came true when John Kanda (from PENGUIN RESEARCH) provided her with a song."
    ],
    activities: [
        "2020-10-10 Started activities with the release of Penguin Nova",
        "2021-04-10 Started #nova_next project",
        "2021-10-24 Unveiled 3D model",
        "2021-12-28 Completed #nova_next project",
        "2022-04-24 Released 1st EP sparkler",
        "2023-04-30 Released 1st Album Say,",
        '2023-10-07 1st solo concert "PENGUIN A LIVE"',
        "2025-04-27 Released 2nd EP For,",
        '2025-05-17 Koaku Manohime and Kimayu Yorudo joint concert "Broaden My World"',
        '2025-05-28 Koaku Manohime and Kimayu Yorudo joint concert "(RE:)Broaden My World"',
        "2025-07-31 Started #FOR_RISING project",
        '2025-10-04 2nd solo concert "Penguin carries the thunder shock."'
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