import { SUPPORTED_LOCALES, SupportedLocale } from "../../constants/i18n";
import { createBoothUrl } from "../i18n/Booth";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { createTuneCoreUrl } from "../i18n/TuneCore";
import { Genre, LinkItem, ProductKind, ProductService, ProductSummary } from "./ProductService";

export class ProductLinkMaster {
    private url: string;
    private name: TranslatableValues;
    constructor(props: {url: string, name: TranslatableValues}) {
        this.url = props.url;
        this.name = props.name;
    }
    getLinkItem(locale: SupportedLocale): LinkItem {
        return {
            url: this.url,
            name: this.name.getLocalizedValue(locale),
        }
    }
};

export class StoreLinkMaster {
    private url: TranslatableValues;
    private name: TranslatableValues;
    constructor(props: { url: TranslatableValues; name: TranslatableValues}) {
        this.url = props.url;
        this.name = props.name;
    }
    getLinkItem(locale: SupportedLocale): LinkItem {
        return {
            url: this.url.getLocalizedValue(locale),
            name: this.name.getLocalizedValue(locale),
        };
    }
    static createForTuneCore(props: {id: string}): StoreLinkMaster {
        const {id} = props;
        return new StoreLinkMaster({
            url: TranslatableValues.create(
                SUPPORTED_LOCALES.map((locale) => {
                    return [locale, createTuneCoreUrl({id,locale})]
                })
            ),
            name: TranslatableValues.create([
                ["ja", "Subscription / Download"],
                ["en", "Subscription / Download"],
            ]), 
        });
    }
    static createForOfficialStore(props: {id: string}): StoreLinkMaster {
        const {id} = props;
        return new StoreLinkMaster({
            url: TranslatableValues.create(
                SUPPORTED_LOCALES.map((locale) => {
                    return [locale, createBoothUrl({id,locale})]
                })
            ),
            name: TranslatableValues.create([
                ["ja", "Official store"],
                ["en", "Official store"],
            ]),
        });
    }
}

export class ProductMaster {
    private id: string;
    private name: TranslatableValues;
    private kind: ProductKind;
    private genre: Genre;
    private dateOfRelease: Date;
    private description?: TranslatableValues;
    private credits: TranslatableValues[];
    private mvLinks: ProductLinkMaster[];
    private storeLinks: StoreLinkMaster[];
    private supplementalInformationLinks?: ProductLinkMaster[];
    constructor(props: {
        id: string,
        name: TranslatableValues,
        kind: ProductKind,
        genre: Genre,
        dateOfRelease: Date,
        description?: TranslatableValues;
        credits: TranslatableValues[],
        mvLinks: ProductLinkMaster[],
        storeLinks: StoreLinkMaster[],
        supplementalInformationLinks?: ProductLinkMaster[],
    }) {
        this.id = props.id;
        this.name = props.name;
        this.kind = props.kind;
        this.genre = props.genre;
        this.dateOfRelease = props.dateOfRelease;
        this.description = props.description;
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
            dateOfRelease: this.dateOfRelease,
            description: this.description?.getLocalizedValue(locale) || "",
            credits: this.credits.map((creditMaster) => {
                return creditMaster.getLocalizedValue(locale);
            }),
            mvLinks: this.mvLinks.map((mvLinkMaster) => {
                return mvLinkMaster.getLinkItem(locale);
            }),
            storeLinks: this.storeLinks.map((storeLinkMaster) => {
                return storeLinkMaster.getLinkItem(locale);
            }),
            supplementalInformationLinks: this.supplementalInformationLinks?.map((supplementalInformationLinkMaster) => {
                return supplementalInformationLinkMaster.getLinkItem(locale);
            }),
        };
    }
}

const productMasterData: ProductMaster[] = [
    new ProductMaster({
        id: "1st-album",
        name: TranslatableValues.create([
            ["ja", "Say,"],
            ["en", "Say,"],
        ]),
        kind: "Album",
        genre: "Rock",
        dateOfRelease: new Date("2023-04-30"),
        description: TranslatableValues.create([
            ["ja", "1st Album M3-2023春"],
            ["en", "1st Album M3-2023-Spring"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Say,"],
                    ["en", "Say,"],
                ]),
                url: 'https://youtu.be/uP-z-i1J9jE',
            }),
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Savior MV"],
                    ["en", "Savior music video"],
                ]),
                url: 'https://youtu.be/DJJwNdhzwE4',
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForOfficialStore({id: '4670069'}),
        ],
    }),
    new ProductMaster({
        id: "16th-single",
        name: TranslatableValues.create([
            ["ja", "PENGUIN REALISE"],
            ["en", "PENGUIN REALISE"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "PENGUIN REALISE"],
                    ["en", "PENGUIN REALISE"],
                ]), 
                url: "https://youtu.be/od3go3oDixU"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'vm0mu1Ac'}),
            StoreLinkMaster.createForOfficialStore({id:'4220956'}),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "夏色スタートライン"],
                    ["en", "NatsuiroStartline"],
                ]), 
                url: "https://youtu.be/yjO39YuU5pg"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: '5G3y37dh'}),
            StoreLinkMaster.createForOfficialStore({id: '4130595'}),
        ],
    }),
    new ProductMaster({
        id: "1st-ep",
        name: TranslatableValues.create([
            ["ja", "sparkler"],
            ["en", "sparkler"],
        ]),
        kind: "EP",
        genre: "Alternative",
        dateOfRelease: new Date("2022-04-24"),
        description: TranslatableValues.create([
            ["ja", "1st EP M3-2022春"],
            ["en", "1st EP M3-2022-Spring"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Crossfade Demo"], 
                    ["en", "Crossfade Demo"],
                ]),
                url: "https://youtu.be/FmVb7r21Z-M"
            }),
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "sparkler"], 
                    ["en", "sparkler"],
                ]),
                url: "https://youtu.be/YUH6igD6brE"
            }),
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Enchanted"],
                    ["en", "Enchanted"],
                ]), 
                url: "https://youtu.be/RHlFEVZdsrs"
            }),
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "CUTE AGGRESSION!!!!"],
                    ["en", "CUTE AGGRESSION!!!!"],
                ]), 
                url: "https://youtu.be/fhc5ifdIvec"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForOfficialStore({id: '3756256'}),
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
        description: TranslatableValues.create([
            ["ja", "14th single"],
            ["en", "14th single"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "うたかたとかして"],
                    ["en", "Utakatatokashite"],
                ]), 
                url: "https://youtu.be/9nNzSRtW-AE"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: '7qE6cdZz'}),
            StoreLinkMaster.createForOfficialStore({id: '3528690'}),
        ],
        supplementalInformationLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "漫画・MV用アートワーク"],
                    ["en", "Artworks"],
                ]), 
                url: "https://www.pixiv.net/artworks/95674341"
            }),
        ]
    }),
    new ProductMaster({
        id: "13th-single",
        name: TranslatableValues.create([
            ["ja", "KARISOME BREAKER"],
            ["en", "KARISOME BREAKER"],
        ]),
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-10"),
        description: TranslatableValues.create([
            ["ja", "13th single"],
            ["en", "13th single"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics mampuku"],
                ["en", "Music/Lyrics mampuku"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "KARISOME BREAKER"],
                    ["en", "KARISOME BREAKER"],
                ]), 
                url: "https://youtu.be/jFADO6wBgUo"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'mM5ds6zM'}),
            StoreLinkMaster.createForOfficialStore({id: '3492316'}),
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
        description: TranslatableValues.create([
            ["ja", "12th single"],
            ["en", "12th single"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "レオニズの降る夜に"],
                    ["en", "Leonids Reminds Me of the Starry Night"],
                ]), 
                url: "https://youtu.be/C0EH5CzDKCY"
            }),
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "プラステ5 Live ver."],
                    ["en", "Live ver. at PlatnetStation STAGE.5"],
                ]), 
                url: "https://youtu.be/Vroy6pW-oBI"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'sd6XHQxB'}),
            StoreLinkMaster.createForOfficialStore({id: '3419090'}),
        ]
    }),
    new ProductMaster({
        id: "11th-single",
        name: TranslatableValues.create([
            ["ja", "PENGUIN EMERGENCE"],
            ["en", "PENGUIN EMERGENCE"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "PENGUIN EMERGENCE"],
                    ["en", "PENGUIN EMERGENCE"],
                ]), 
                url: "https://youtu.be/4EqjcReGmZM"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'D53C67Bu'}),
            StoreLinkMaster.createForOfficialStore({id: '3419079'}),
        ],
    }),
    new ProductMaster({
        id: "10th-single",
        name: TranslatableValues.create([
            ["ja", "Memorable"],
            ["en", "Memorable"],
        ]),
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-10-01"),
        description: TranslatableValues.create([
            ["ja", "10th single"],
            ["en", "10th single"],
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Memorable"],
                    ["en", "Memorable"],
                ]), 
                url: "https://youtu.be/x591--tK0wk"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'H9494e5u'}),
            StoreLinkMaster.createForOfficialStore({id: '3318455'}),
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
        description: TranslatableValues.create([
            ["ja", "9th single"],
            ["en", "9th single"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics r0y"],
                ["en", "Music/Lyrics r0y"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "境界のアイリス"],
                    ["en", "Kyoukai no Iris"],
                ]), 
                url: "https://youtu.be/w7oDQo2ZNDc"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'c78bSYh9'}),
            StoreLinkMaster.createForOfficialStore({id: '3265250'}),
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
        description: TranslatableValues.create([
            ["ja", "8th single"],
            ["en", "8th single"],
        ]), 

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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "ロンリーディーバ"],
                    ["en", "Lonely Diva"],
                ]), 
                url: "https://youtu.be/yUXNaH2JjW8"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'pCpgzUMU'}),
            StoreLinkMaster.createForOfficialStore({id: '3185868'}),
        ]
    }),
    new ProductMaster({
        id: "7th-single",
        name: TranslatableValues.create([
            ["ja", "Dear My Enemy"],
            ["en", "Dear My Enemy"],
        ]), 
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-07-25"),
        description: TranslatableValues.create([
            ["ja", "7th single"],
            ["en", "7th single"],
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Dear My Enemy"],
                    ["en", "Dear My Enemy"],
                ]), 
                url: "https://youtu.be/GtWwzw54zVQ"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'AvPtrznD'}),
            StoreLinkMaster.createForOfficialStore({id: '3143568'}),
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
        description: TranslatableValues.create([
            ["ja", "6th single"],
            ["en", "6th single"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics picco"],
                ["en", "Music/Lyrics picco"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "希求モーニング"],
                    ["en", "Kikyu Morinig"],
                ]), 
                url: "https://youtu.be/DpalPxOPZRo"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: '0Rz8ACCd'}),
            StoreLinkMaster.createForOfficialStore({id: '3107770'}),
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
        description: TranslatableValues.create([
            ["ja", "5th single"],
            ["en", "5th single"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "茜色の公園で"],
                    ["en", "AkaneironoKouende"],
                ]), 
                url: "https://youtu.be/xFaoFG-9ZDM"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'HY6DrPGd'}),
            StoreLinkMaster.createForOfficialStore({id: '3107757'}),
        ]
    }),
    new ProductMaster({
        id: "4th-single",
        name: TranslatableValues.create([
            ["ja", "RULER"],
            ["en", "RULER"],
        ]), 
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-05-10"),
        description: TranslatableValues.create([
            ["ja", "4th single"],
            ["en", "4th single"],
        ]), 
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "RULER"],
                    ["en", "RULER"],
                ]), 
                url: "https://youtu.be/uJCP_Vcqju8"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'vRVnqU5v'}),
            StoreLinkMaster.createForOfficialStore({id: '3107710'}),
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
        description: TranslatableValues.create([
            ["ja", "3rd single"],
            ["en", "3rd single"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "カラの鼓動はソラになる"],
                    ["en", "karano kodouha soraninaru"],
                ]), 
                url: "https://youtu.be/7jS6tDpvko4"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'eGzYDu1Y'}),
            StoreLinkMaster.createForOfficialStore({id: '3107732'}),
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
        description: TranslatableValues.create([
            ["ja", "2nd single"],
            ["en", "2nd single"],
        ]),
        credits: [
            TranslatableValues.create([
                ["ja", "Music/Lyrics 隣町本舗"],
                ["en", "Music/Lyrics tonarimachi-honpo"],
            ]),
            TranslatableValues.create([
                ["ja", "Rap Lyrics Fra [BOOGEY VOXX]"],
                ["en", "Rap Lyrics Fra [BOOGEY VOXX]"],
            ]),
            TranslatableValues.create([
                ["ja", "Vocal 拠鳥きまゆ"],
                ["en", "Vocal KimayuYorudo"],
            ]),
        ],
        mvLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "真夜中メロウライン"],
                    ["en", "mayonaka melowline"],
                ]), 
                url: "https://youtu.be/_R3eE6D2rBw"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'NQZabT0H'}),
            StoreLinkMaster.createForOfficialStore({id: '3107691'}),
        ],
        supplementalInformationLinks: [
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "ライナーノート"],
                    ["en", "Liner note"],
                ]), 
                url: "https://tonarimachi.fanbox.cc/posts/2113546"
            }),
        ]
    }),
    new ProductMaster({
        id: "1st-single",
        name: TranslatableValues.create([
            ["ja", "Penguin Nova"],
            ["en", "Penguin Nova"],
        ]),
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
            new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Penguin Nova"],
                    ["en", "Penguin Nova"],
                ]), 
                url: "https://youtu.be/DaVGqYTlCCk"
            }),
        ],
        storeLinks: [
            StoreLinkMaster.createForTuneCore({id: 'XRHzUnrA'}),
            StoreLinkMaster.createForOfficialStore({id: '3107608'}),
        ]
    }),
];

export class InMemoryProductService implements ProductService {
    listProductSummaries(locale: SupportedLocale): ProductSummary[] {
        return productMasterData.map((master) => {
            return master.getProductSummary(locale);
        });
    }
}