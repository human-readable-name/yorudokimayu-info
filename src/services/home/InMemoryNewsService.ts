import { SupportedLocale } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { NewsItem, NewsService } from "./NewsService";

export class NewsMaster {
    private text: TranslatableValues;
    private links?: LinkMaster[];
    constructor(props: {text: TranslatableValues, links?: LinkMaster[]}) {
        this.text = props.text;
        this.links = props.links;
    }
    getNewsItem(locale: SupportedLocale): NewsItem {
        return {
            text: this.text.getLocalizedValue(locale),
            links: this.links?.map((linkMaster) => {
                return linkMaster.getLinkItem(locale);
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
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "クロスフェードデモ"],
                    ["en", "Crossfade Demo"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/ZOmXJgo6epE'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Say, MV"],
                    ["en", "Say, music video"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/uP-z-i1J9jE'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Savior MV"],
                    ["en", "Savior music video"],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/DJJwNdhzwE4'),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2023-04-30 M3-2023春 パンケーキキャッツ EP サニーソング 1曲担当'],
            ['en', '2023-04-30 Guest vocalist on pancakecats EP "sunnysong" will be released at M3-2023Spring']
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