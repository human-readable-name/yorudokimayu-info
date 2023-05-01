import { SupportedLocale } from "../../constants/i18n";
import { LinkItem } from "../common/Link";

export type NewsItem = {
    text: string;
    links?: LinkItem[];
};


export interface NewsService {
    listNews(locale: SupportedLocale): NewsItem[];
}