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
            ["ja", "vortex主催『V³: Virtual Vortex Voyage』(2023-05-28)出演"],
            ["en", "V³: Virtual Vortex Voyage hosted by vortex (2023-05-28)"],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement("https://pjblue.zaiko.io/item/356598"),
                name: TranslatableValues.create([
                    ["ja", "ZAIKO (アーカイブ視聴 2023年6月27日迄)"],
                    ["en", "ZAIKO (The archive of the live will be available until June 27)"],
                ]),
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