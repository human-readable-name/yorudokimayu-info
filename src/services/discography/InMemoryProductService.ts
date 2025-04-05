import { format } from "date-fns";
import { SupportedLocale } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { Genre, ProductKind, ProductService, ProductSummary } from "./ProductService";

export class ProductMaster {
    private id: string;
    private name: TranslatableValues;
    private kind: ProductKind;
    private genre: Genre | null;
    private dateOfRelease: Date;
    private description?: TranslatableValues;
    private tracks: TranslatableValues[];
    private credits: TranslatableValues[];
    private mvLinks: LinkMaster[];
    private storeLinks: LinkMaster[];
    private supplementalInformationLinks?: LinkMaster[];
    constructor(props: {
        id: string,
        name: TranslatableValues,
        kind: ProductKind,
        genre: Genre | null,
        dateOfRelease: Date,
        description?: TranslatableValues;
        tracks?: TranslatableValues[],
        credits: TranslatableValues[],
        mvLinks: LinkMaster[],
        storeLinks: LinkMaster[],
        supplementalInformationLinks?: LinkMaster[],
    }) {
        this.id = props.id;
        this.name = props.name;
        this.kind = props.kind;
        this.genre = props.genre;
        this.dateOfRelease = props.dateOfRelease;
        this.description = props.description;
        this.tracks = props.tracks ? props.tracks : [];
        this.credits = props.credits;
        this.mvLinks = props.mvLinks;
        this.storeLinks = props.storeLinks;
        this.supplementalInformationLinks = props.supplementalInformationLinks;
    }
    getProductSummary(locale: SupportedLocale): ProductSummary {
        return {
            id: this.id,
            name: this.name.getLocalizedValue(locale),
            kind: this.kind,
            genre: this.genre,
            dateOfRelease: format(this.dateOfRelease, 'yyyy-MM-dd'),
            description: this.description?.getLocalizedValue(locale) || "",
            tracks: this.tracks.map((trackMaster) => {
                return trackMaster.getLocalizedValue(locale);
            }),
            credits: this.credits.map((creditMaster) => {
                return creditMaster.getLocalizedValue(locale);
            }),
            mvLinks: this.mvLinks.map((mvLinkMaster) => {
                return mvLinkMaster.getLinkItem(locale);
            }),
            storeLinks: this.storeLinks.map((LinkMaster) => {
                return LinkMaster.getLinkItem(locale);
            }),
            supplementalInformationLinks: this.supplementalInformationLinks ? this.supplementalInformationLinks.map((supplementalInformationLinkMaster) => {
                return supplementalInformationLinkMaster.getLinkItem(locale);
            }) : [],
        };
    }
}

const productMasterData: ProductMaster[] = [
    new ProductMaster({
        id: "2nd-ep",
        name: TranslatableValues.createUnifiedStatement("For,"),
        kind: "EP",
        genre: null,
        dateOfRelease: new Date("2025-04-27"),
        description: TranslatableValues.create([
            ["ja", "2nd EP M3-2025春"],
            ["en", "2nd EP M3-2025-Spring"],
        ]),
        tracks: [
            TranslatableValues.createUnifiedStatement("Shoot down.(instrumental)"),
            TranslatableValues.createUnifiedStatement("For,"),
            TranslatableValues.createUnifiedStatement("あるこ～る♡どりりあむ"),
            TranslatableValues.createUnifiedStatement("St4rlight"),
            TranslatableValues.createUnifiedStatement("レグルスの本懐"),
        ],
        credits: [
            TranslatableValues.create([
                ["ja", "Tr1,3,5 Music / Tr5 Lyrics マッチ"],
                ["en", "Tr1,3,5 Music / Tr5 Lyrics  Matchy"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr2 Music/Lyrics 神田ジョン（from PENGUIN RESEARCH）"],
                ["en", "Tr2 Music/Lyrics John Kanda (from PENGUIN RESEARCH)"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr4 Music/Lyrics 犬絵"],
                ["en", "Tr4 Music/Lyrics Catpicture"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr3 Lyrics / Vocal 拠鳥きまゆ"],
                ["en", "Tr3 Lyrics / Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/8NZKnncWR0s'),
            }),

        ],
        storeLinks: [],
    }),
    new ProductMaster({
        id: "21st-single",
        name: TranslatableValues.create([
            ["ja", "人鳥新世界"],
            ["en", "JinchoShinsekai"],
        ]),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2024-10-10"),
        description: TranslatableValues.create([
            ["ja", "活動開始4周年記念"],
            ["en", "fourth anniversary song"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyric コヤマヒデカズ"],
                ["en", "Music/Lyric KoyamaHidekazu"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/Iuliu6nhVdQ"),
                name: TranslatableValues.create([
                    ["ja", "人鳥新世界"],
                    ["en", "JinchoShinsekai"],
                ]),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: "mxZ53CBR"}),
            LinkMaster.createForOfficialStore({id: "6159917"}),
        ],
    }),
    new ProductMaster({
        id: "20th-single",
        name: TranslatableValues.create([
            ["ja", "浸夜"],
            ["en", "Shinya"],
        ]),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2024-09-28"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyric 梔"],
                ["en", "Music/Lyric Kuchinashi"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/v3bUpNOuXKc"),
                name: TranslatableValues.create([
                    ["ja", "浸夜"],
                    ["en", "Shinya"],
                ]),
            })
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: "y0SD1FXy"}),
            LinkMaster.createForOfficialStore({id: "6106639"}),
        ],
    }),
    new ProductMaster({
        id: "19th-single",
        name: TranslatableValues.createUnifiedStatement("After Horizon"),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2024-04-25"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyric さめのぽき"],
                ["en", "Music/Lyric Samenopoki"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("After Horizon"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/0SydNfKuolA"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: "umSx7PTc"}),
            LinkMaster.createForOfficialStore({id: "5673484"}),
        ],
    }),
    new ProductMaster({
        id: "18th-single",
        name: TranslatableValues.createUnifiedStatement("PENGUIN ALIVE"),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2023-10-10"),
        description: TranslatableValues.create([
            ["ja", "活動開始3周年記念"],
            ["en", "third anniversary song"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music 犬絵"],
                ["en", "Music Catpicture"],
            ]),
            TranslatableValues.create([
                ["ja", "Bass 四谷ゲンロク"],
                ["en", "Bass GenrokuYotsuya"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics/Vocal 拠鳥きまゆ"],
                ["en", "Lyrics/Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/jM5AdQGVZ4g"),
                name: TranslatableValues.createUnifiedStatement("PENGUIN ALIVE"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: "vMh6myS4"}),
            LinkMaster.createForOfficialStore({id: "5153499"}),
        ],
    }),
    new ProductMaster({
        id: "17th-single",
        name: TranslatableValues.create([
            ["ja", "イキガイショウタイム"],
            ["en", "Ikigai Showtime"],
        ]),
        kind: "Single",
        genre: null,
        dateOfRelease: new Date("2023-09-29"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music 天野ドウジ [カクレゴ]"],
                ["en", "Music DoujiAmano [KAKULEGO]"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics/Vocal 拠鳥きまゆ"],
                ["en", "Lyrics/Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "イキガイショウタイム"],
                    ["en", "Ikigai showtime"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/jkAGj03euDY"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForOfficialStore({id:'5129141'}),
        ],
    }),
    new ProductMaster({
        id: "1st-album",
        name: TranslatableValues.createUnifiedStatement("Say,"),
        kind: "Album",
        genre: null,
        dateOfRelease: new Date("2023-04-30"),
        description: TranslatableValues.create([
            ["ja", "1st Album M3-2023春 (サブスク配信なし・CD販売のみ)"],
            ["en", "1st Album M3-2023-Spring (Only CD sales)"],
        ]),
        tracks: [
            TranslatableValues.createUnifiedStatement("I breathe here.(instrumental)"),
            TranslatableValues.createUnifiedStatement("Say,"),
            TranslatableValues.createUnifiedStatement("Film"),
            TranslatableValues.createUnifiedStatement("KANATA"),
            TranslatableValues.createUnifiedStatement("MORE SO,KICK YOU CORE!!!!"),
            TranslatableValues.createUnifiedStatement("Glimmer"),
            TranslatableValues.createUnifiedStatement("Skymellia"),
            TranslatableValues.createUnifiedStatement("Chilldish"),
            TranslatableValues.createUnifiedStatement("(un)forgettable"),
            TranslatableValues.createUnifiedStatement("Lonely Rainy"),
            TranslatableValues.createUnifiedStatement("BLOOMING PAINTERS"),
            TranslatableValues.createUnifiedStatement("Savior"),
        ],
        credits: [
            TranslatableValues.create([
                ["ja", "Tr1,2,5,6,10 Music / Tr6,10 Lyrics マッチ"],
                ["en", "Tr1,2,5,6,10 Music / Tr6,10 Lyrics  Matchy"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr2 Lyrics esora uma [浮遊信号]"],
                ["en", "Tr2 Lyrics esora uma [Fuyu-Singo]"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr3,8 Music / Tr3 Lyrics 園田優"],
                ["en", "Tr3,8 Music / Tr3 Lyrics SuguruSonoda"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr4,7,9 Music 天野ドウジ [カクレゴ]"],
                ["en", "Tr4,7,9 Music DoujiAmano [KAKULEGO]"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr4 Lyrics 座敷乃てまり [カクレゴ]"],
                ["en", "Tr4 Lyrics TemariZashikino [KAKULEGO]"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr7 Lyrics 戌杜いたる"],
                ["en", "Tr7 Lyrics ItaruInumori"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr12 Music / Tr12 Lyrics 犬絵"],
                ["en", "Tr12 Music / Tr12 Lyrics Catpicture"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr12 Bass 四谷ゲンロク"],
                ["en", "Tr12 Bass GenrokuYotsuya"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr5,8,11 Lyrics / Vocal 拠鳥きまゆ"],
                ["en", "Tr5,8,11 Lyrics / Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/ZOmXJgo6epE'),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Say,"),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/uP-z-i1J9jE'),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Savior"),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/DJJwNdhzwE4'),
            }),
        ],
        storeLinks: [
            LinkMaster.createForOfficialStore({id: '4670069'}),
        ],
    }),
    new ProductMaster({
        id: "16th-single",
        name: TranslatableValues.createUnifiedStatement("PENGUIN REALISE"),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2022-10-10"),
        description: TranslatableValues.create([
            ["ja", "活動開始2周年記念"],
            ["en", "second anniversary song"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics マッチ"],
                ["en", "Music/Lyrics Matchy"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("PENGUIN REALISE"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/od3go3oDixU"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'vm0mu1Ac'}),
            LinkMaster.createForOfficialStore({id:'4220956'}),
        ],
    }),
    new ProductMaster({
        id: "15th-single",
        name: TranslatableValues.create([
            ["ja", "夏色スタートライン"],
            ["en", "NatsuiroStartline"],
        ]),
        kind: "Single",
        genre: "Electronic",
        dateOfRelease: new Date("2022-08-31"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics めかおん"],
                ["en", "Music/Lyrics Mekaon"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "夏色スタートライン"],
                    ["en", "NatsuiroStartline"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/yjO39YuU5pg"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: '5G3y37dh'}),
            LinkMaster.createForOfficialStore({id: '4130595'}),
        ],
    }),
    new ProductMaster({
        id: "1st-ep",
        name: TranslatableValues.createUnifiedStatement("sparkler"),
        kind: "EP",
        genre: null,
        dateOfRelease: new Date("2022-04-24"),
        description: TranslatableValues.create([
            ["ja", "1st EP M3-2022春 (サブスク配信なし・CD販売のみ)"],
            ["en", "1st EP M3-2022-Spring (Only CD sales)"],
        ]),
        tracks: [
            TranslatableValues.createUnifiedStatement("Introduction"),
            TranslatableValues.createUnifiedStatement("sparkler"),
            TranslatableValues.createUnifiedStatement("monologue"),
            TranslatableValues.createUnifiedStatement("CUTE AGGRESSION!!!!"),
            TranslatableValues.createUnifiedStatement("Irony"),
            TranslatableValues.createUnifiedStatement("Enchanted"),
        ],
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Tr2Lyrics マッチ"],
                ["en", "Music/Tr2Lyrics Matchy"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr5Lyrics esora uma [浮遊信号]"],
                ["en", "Tr5Lyrics esora uma [Fuyu-Singo]"],
            ]),
            TranslatableValues.create([
                ["ja", "Tr3,4,6Lyrics/Vocal 拠鳥きまゆ"],
                ["en", "Tr3,4,6Lyrics/Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/FmVb7r21Z-M"),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("sparkler"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/YUH6igD6brE"),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Enchanted"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/RHlFEVZdsrs"),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("CUTE AGGRESSION!!!!"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/fhc5ifdIvec"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForOfficialStore({id: '3756256'}),
        ]
    }),
    new ProductMaster({
        id: "14th-single",
        name: TranslatableValues.create([
            ["ja", "うたかたとかして"],
            ["en", "Utakatatokashite"],
        ]),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-28"),
        description: TranslatableValues.createUnifiedStatement("14th single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics esora uma [浮遊信号]"],
                ["en", "Music/Lyrics esora uma [Fuyu-Singo]"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "うたかたとかして"],
                    ["en", "Utakatatokashite"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/9nNzSRtW-AE"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: '7qE6cdZz'}),
            LinkMaster.createForOfficialStore({id: '3528690'}),
        ],
        supplementalInformationLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "漫画・MV用アートワーク"],
                    ["en", "Artworks"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://www.pixiv.net/artworks/95674341"),
            }),
        ]
    }),
    new ProductMaster({
        id: "13th-single",
        name: TranslatableValues.createUnifiedStatement("KARISOME BREAKER"),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-10"),
        description: TranslatableValues.createUnifiedStatement("13th single"),
        credits: [
            TranslatableValues.createUnifiedStatement("Music/Lyrics mampuku"),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("KARISOME BREAKER"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/jFADO6wBgUo"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'mM5ds6zM'}),
            LinkMaster.createForOfficialStore({id: '3492316'}),
        ]
    }),
    new ProductMaster({
        id: "12th-single",
        name: TranslatableValues.create([
            ["ja", "レオニズの降る夜に"],
            ["en", "Leonids Reminds Me of the Starry Night"],
        ]),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-11-10"),
        description: TranslatableValues.createUnifiedStatement("12th single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics マッチ"],
                ["en", "Music/Lyrics Matchy"],
            ]),
            TranslatableValues.create([
                ["ja", "Bass 四谷ゲンロク"],
                ["en", "Bass performance Genroku Yotsuya"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "レオニズの降る夜に"],
                    ["en", "Leonids Reminds Me of the Starry Night"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/C0EH5CzDKCY"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "プラステ5 Live ver."],
                    ["en", "Live ver. at PlatnetStation STAGE.5"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/Vroy6pW-oBI"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'sd6XHQxB'}),
            LinkMaster.createForOfficialStore({id: '3419090'}),
        ]
    }),
    new ProductMaster({
        id: "11th-single",
        name: TranslatableValues.createUnifiedStatement("PENGUIN EMERGENCE"),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-10-10"),
        description: TranslatableValues.create([
            ["ja", "11th single 活動開始1周年記念"],
            ["en", "11th single / first anniversary song"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music 胡桃もよ"],
                ["en", "Music MoyoKurumi"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics 朝比奈こん"],
                ["en", "Lyrics KonAsahina"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("PENGUIN EMERGENCE"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/4EqjcReGmZM"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'D53C67Bu'}),
            LinkMaster.createForOfficialStore({id: '3419079'}),
        ],
    }),
    new ProductMaster({
        id: "10th-single",
        name: TranslatableValues.createUnifiedStatement("Memorable"),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-10-01"),
        description: TranslatableValues.createUnifiedStatement("10th single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics マッチ"],
                ["en", "Music/Lyrics Matchy"],
            ]), 
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]), 
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Memorable"),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/x591--tK0wk"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'H9494e5u'}),
            LinkMaster.createForOfficialStore({id: '3318455'}),
        ]
    }),
    new ProductMaster({
        id: "9th-single",
        name: TranslatableValues.create([
            ["ja", "境界のアイリス"],
            ["en", "Kyoukai no Iris"],
        ]),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-09-10"),
        description: TranslatableValues.createUnifiedStatement("9th single"),
        credits: [
            TranslatableValues.createUnifiedStatement("Music/Lyrics r0y"),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "境界のアイリス"],
                    ["en", "Kyoukai no Iris"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/w7oDQo2ZNDc"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'c78bSYh9'}),
            LinkMaster.createForOfficialStore({id: '3265250'}),
        ]
    }),
    new ProductMaster({
        id: "8th-single",
        name: TranslatableValues.create([
            ["ja", "ロンリーディーバ"],
            ["en", "Lonely Diva"],
        ]), 
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-08-10"),
        description: TranslatableValues.createUnifiedStatement("8th single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics アザミ"],
                ["en", "Music/Lyrics Azami"],
            ]), 
            TranslatableValues.create([
                ["ja", "Bass なおちゃん"],
                ["en", "Bass nao"],
            ]), 
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]), 
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "ロンリーディーバ"],
                    ["en", "Lonely Diva"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/yUXNaH2JjW8"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'pCpgzUMU'}),
            LinkMaster.createForOfficialStore({id: '3185868'}),
        ]
    }),
    new ProductMaster({
        id: "7th-single",
        name: TranslatableValues.createUnifiedStatement("Dear My Enemy"), 
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-07-25"),
        description: TranslatableValues.createUnifiedStatement("7th single"), 
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics マッチ"],
                ["en", "Music/Lyrics Matchy"],
            ]), 
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]), 
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Dear My Enemy"), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/GtWwzw54zVQ"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'AvPtrznD'}),
            LinkMaster.createForOfficialStore({id: '3143568'}),
        ]
    }),
    new ProductMaster({
        id: "6th-single",
        name: TranslatableValues.create([
            ["ja", "希求モーニング"],
            ["en", "Kikyu Morinig"],
        ]),
        kind: "Single",
        genre: "Electronic",
        dateOfRelease: new Date("2021-07-10"),
        description: TranslatableValues.createUnifiedStatement("6th single"),
        credits: [
            TranslatableValues.createUnifiedStatement("Music/Lyrics picco"),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "希求モーニング"],
                    ["en", "Kikyu Morinig"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/DpalPxOPZRo"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: '0Rz8ACCd'}),
            LinkMaster.createForOfficialStore({id: '3107770'}),
        ]
    }),
    new ProductMaster({
        id: "5th-single",
        name: TranslatableValues.create([
            ["ja", "茜色の公園で"],
            ["en", "AkaneironoKouende"],
        ]),
        kind: "Single",
        genre: "Pop",
        dateOfRelease: new Date("2021-06-10"),
        description: TranslatableValues.createUnifiedStatement("5th single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music sumeshiii a.k.a.バーチャルお寿司"],
                ["en", "Music sumeshiii a.k.a.virtual osushi"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics 内野達哉"],
                ["en", "Lyrics TatsuyaUchino"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "茜色の公園で"],
                    ["en", "AkaneironoKouende"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/xFaoFG-9ZDM"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'HY6DrPGd'}),
            LinkMaster.createForOfficialStore({id: '3107757'}),
        ]
    }),
    new ProductMaster({
        id: "4th-single",
        name: TranslatableValues.createUnifiedStatement("RULER"), 
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-05-10"),
        description: TranslatableValues.createUnifiedStatement("4th single"), 
        credits: [
            TranslatableValues.create([
                ["ja", "Music 天野ドウジ [カクレゴ]"],
                ["en", "Music DoujiAmano [KAKULEGO]"],
            ]),
            TranslatableValues.create([
                ["ja", "Bass 四谷ゲンロク"],
                ["en", "Bass GenrokuYotsuya"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics/Vocal 拠鳥きまゆ"],
                ["en", "Lyrics/Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("RULER"), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/uJCP_Vcqju8"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'vRVnqU5v'}),
            LinkMaster.createForOfficialStore({id: '3107710'}),
        ]
    }),
    new ProductMaster({
        id: "3rd-single",
        name: TranslatableValues.create([
            ["ja", "カラの鼓動はソラになる"],
            ["en", "karano kodouha soraninaru"],
        ]),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-25"),
        description: TranslatableValues.createUnifiedStatement("3rd single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics esora uma [浮遊信号]"],
                ["en", "Music/Lyrics esora uma [Fuyu-Singo]"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "カラの鼓動はソラになる"],
                    ["en", "karano kodouha soraninaru"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/7jS6tDpvko4"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'eGzYDu1Y'}),
            LinkMaster.createForOfficialStore({id: '3107732'}),
        ]
    }),
    new ProductMaster({
        id: "2nd-single",
        name: TranslatableValues.create([
            ["ja", "真夜中メロウライン"],
            ["en", "mayonaka melowline"],
        ]),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-11"),
        description: TranslatableValues.createUnifiedStatement("2nd single"),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics 隣町本舗"],
                ["en", "Music/Lyrics tonarimachi-honpo"],
            ]),
            TranslatableValues.createUnifiedStatement("Rap Lyrics Fra [BOOGEY VOXX]"),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "真夜中メロウライン"],
                    ["en", "mayonaka melowline"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/_R3eE6D2rBw"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'NQZabT0H'}),
            LinkMaster.createForOfficialStore({id: '3107691'}),
        ],
        supplementalInformationLinks: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "ライナーノート"],
                    ["en", "Liner note"],
                ]), 
                url: TranslatableValues.createUnifiedStatement("https://tonarimachi.fanbox.cc/posts/2113546"),
            }),
        ]
    }),
    new ProductMaster({
        id: "1st-single",
        name: TranslatableValues.createUnifiedStatement("Penguin Nova"),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2020-10-10"),
        description: TranslatableValues.create([
            ["ja", "1st single デビュー曲"],
            ["en", "1st single"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music 胡桃もよ"],
                ["en", "Music MoyoKurumi"],
            ]),
            TranslatableValues.create([
                ["ja", "Lyrics 朝比奈こん"],
                ["en", "Lyrics KonAsahina"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement("Penguin Nova"), 
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/DaVGqYTlCCk"),
            }),
        ],
        storeLinks: [
            LinkMaster.createForTuneCore({id: 'XRHzUnrA'}),
            LinkMaster.createForOfficialStore({id: '3107608'}),
        ]
    }),
];


export class InMemoryProductService implements ProductService {
    getLyricNote(locale: SupportedLocale): string {
        return TranslatableValues.create([
            ["ja", ""],
            ["en", "Lyrics are available on TuneCore website / YouTube (for which a music video is available) / Booklet attached to the CD (for which a music video is not available)."],
        ]).getLocalizedValue(locale);
    }
    listProductSummaries(locale: SupportedLocale): ProductSummary[] {
        return productMasterData.map((master) => {
            return master.getProductSummary(locale);
        });
    }
}