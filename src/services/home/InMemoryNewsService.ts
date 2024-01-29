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
            ["ja", "2024-02-04 V³アワード 出演"],
            ["en", "2024-02-04 V³ AWARD"]
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "配信 ZAIKO"],
                    ["en", "Live straming on ZAIKO"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://pjblue.zaiko.io/item/360532"),
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ["ja", "2024-02-18 COLOR UP! Vol.2 出演"],
            ["en", "2024-02-18 COLOR UP! Vol.2"]
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "現地 RELATION"],
                    ["en", "Venue RELATION"],
                ]),
                url: TranslatableValues.createUnifiedStatement("https://teket.jp/8248/31438"),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "配信 ツイキャス"],
                    ["en", "Live straming on TwitCasting"],
                ]),
                url: TranslatableValues.create([
                    ["ja", "https://twitcasting.tv/shiro_mgr_/shopcart/289011"],
                    ["en", "https://en.twitcasting.tv/shiro_mgr_/shopcart/289011?hl=en"],
                ]),
            })
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