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
            ['ja', '2023-04-30 M3-2023春 M-11b および Booth にて ファーストアルバム "Say," をリリース'],
            ['en', '2023-04-30 1st album "Say," will be released at M3-2023spring (M-11b) and Booth']
        ]),
        links: [
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: 'https://youtu.be/ZOmXJgo6epE',
            }),
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Say, MV"],
                    ["en", "Say, music video"],
                ]),
                url: 'https://youtu.be/uP-z-i1J9jE',
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2023-04-30 M3-2023春 パンケーキキャッツ EP サニーソング 1曲担当'],
            ['en', '2023-04-30 Guest vocalist on pancakecats EP "sunnysong" will be released at M3-2023Spring']
        ]),
        links: [
            new NewsLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "特設サイト"],
                    ["en", "Web site"],
                ]),
                url: "https://sunnysong.studio.site/",
            }),
        ],
    }),
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}