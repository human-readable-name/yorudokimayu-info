import { SupportedLocale } from "../../constants/i18n";

export type ContentLink = {
    title: string;
    caption: string;
    url: string;
};

export interface ContentLinkService {
    listContentLinks(locale: SupportedLocale): ContentLink[];
}