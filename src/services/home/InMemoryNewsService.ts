import { SupportedLocale } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { NewsItem, NewsItemLink, NewsService } from "./NewsService";

export class NewsLinkMaster {
    private name: TranslatableValues;
    private url: string;
    constructor(props: {name: TranslatableValues, url: string}) {
        this.name = props.name;
        this.url = props.url;
    }
    getNewsItemLink(locale: SupportedLocale): NewsItemLink {
        return {
            name: this.name.getLocalizedValue(locale),
            url: this.url,
        }
    }
}

export class NewsMaster {
    private text: TranslatableValues;
    private links?: NewsLinkMaster[];
    constructor(props: {text: TranslatableValues, links?: NewsLinkMaster[]}) {
        this.text = props.text;
        this.links = props.links;
    }
    getNewsItem(locale: SupportedLocale): NewsItem {
        return {
            text: this.text.getLocalizedValue(locale),
            links: this.links?.map((linkMaster) => {
                return linkMaster.getNewsItemLink(locale);
            })
        }
    }
}

const newsMasterData: NewsMaster[] = [
    new NewsMaster({
        text: TranslatableValues.create([
            ["ja", "2022秋M3 (2022-10-30) パンケーキキャッツ 1stEP ノンストップエモーション！ 1曲担当"],
            ["en", "M32022Autumn (2022-10-30) pancakecats 1stEP Non-Stop Emotion!"],
        ]),
        links: [
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]), 
                url: "https://pccs-vtuber.studio.site/",
            }),
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]), 
                url: "https://youtu.be/stfsWwIFDtE",
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ["ja", "柚子花主催LIVE -Planet Station- STAGE.5 (2022-11-26) 出演予定"],
            ["en", "LIVE sponsored by Yuzuha -Planet Station- STAGE.5 (2022-11-26) "],
        ]),
        links: [
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Z-aN"],
                    ["en", "Z-aN"],
                ]), 
                url: "https://www.zan-live.com/live/detail/10251"
            }),
        ]
    }),
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}