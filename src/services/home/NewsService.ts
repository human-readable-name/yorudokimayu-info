import { SupportedLocale } from "../../constants/i18n";

export type NewsItemLink = {
    name: string;
    url: string;
}

export type NewsItem = {
    text: string;
    links?: NewsItemLink[];
};


export interface NewsService {
    listNews(locale: SupportedLocale): NewsItem[];
}