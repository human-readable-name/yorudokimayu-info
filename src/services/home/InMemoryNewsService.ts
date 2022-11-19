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
    new NewsMaster({
        text: TranslatableValues.create([
            ["ja", "エンタス忘年会 (2022-12-17) 出演予定"],
            ["en", "Akihabara ENTAS year-end party (2022-12-17) "],
        ]),
        links: [
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "現地チケット"],
                    ["en", "Ticket"],
                ]),
                url: "https://passmarket.yahoo.co.jp/event/show/detail/02wdimrm1mq21.html"
            }),
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Twitch(無料配信)"],
                    ["en", "Streaming (for free)"],
                ]),
                url: "https://www.twitch.tv/takuya_the_bringer"
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