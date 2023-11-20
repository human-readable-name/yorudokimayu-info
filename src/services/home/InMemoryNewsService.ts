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
            ["ja", "2023-12-10 V³アワード 出演"],
            ["en", "2023-12-10 V³ AWARD"]
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
            ["ja", "2023-12-29 Vack-ON!! vol.2 出演"],
            ["en", "2023-12-29 Vack-ON!! vol.2"]
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "現地 Takara Osaka"],
                    ["en", "Venue Takara Osaka"]
                ]),
                url: TranslatableValues.createUnifiedStatement("https://takara-live.com/osaka/"),
            })
        ]
    })
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}