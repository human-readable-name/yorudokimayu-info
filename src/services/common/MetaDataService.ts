import { SupportedLocale } from "../../constants/i18n";


export type Alternate = {
    hrefLang: string;
    href: string;
};

export type Meta = {
    title: string;
    description: string;
    siteName: string;
    locale: string;
    canonical: string;
    languageAlternates: Alternate[];
};

export interface MetaDataService {
    getSiteName(locale: SupportedLocale): string;
    getSiteDescription(locale: SupportedLocale): string;
    getHomeMeta(locale: SupportedLocale): Meta;
    getBiographyMeta(locale: SupportedLocale): Meta;
    getDiscographyMeta(locale: SupportedLocale): Meta;
}