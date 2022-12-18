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

const newsMasterData: NewsMaster[] = [];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}