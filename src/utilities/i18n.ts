import { SupportedLocale } from "../constants/i18n"

export const ensureSupportedLocale = (locale: string): SupportedLocale => {
    switch(locale) {
        case "en": 
            return "en";
        default:
            return "ja";
    }
};

export const translateSitename = (locale: SupportedLocale): string => {
    switch(locale) {
        case "en":
            return "Kimayu Yorudo Information";
        default:
            return "拠鳥きまゆアーティスト情報まとめ";
    }
};

export const translateSiteDescription = (locale: SupportedLocale): string => {
    switch(locale) {
        case "en":
            return "This website is a collection of links about KimayuYorudo's music and live performances.";
        default:
            return "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報をまとめています";
    }
};