import { SupportedLocale } from "../../constants/i18n";
import path from "../../constants/path";
import { Meta } from "../../entities/common/Meta";
import { translateSitename } from "../../utilities/i18n";

const baseUrl = "https://kimayu.rocks";

const convertLocale = (supportedLocale: SupportedLocale): string => {
    switch(supportedLocale) {
        case "en":
            return "en_US";
        default:
            return "ja_JP";
    }
};

export const getHomeMeta = (locale: SupportedLocale): Meta => {
    const languageAlternates = [
        {
            hrefLang: "x-default",
            href: `${baseUrl}${path.home}`,
        },
        {
            hrefLang: "ja",
            href: `${baseUrl}${path.home}`,
        },
        {
            hrefLang: "en",
            href: `${baseUrl}/en${path.home}`,
        },
    ];
    switch(locale) {
        case "en":
            return {
                title: "Kimayu Yorudo Information",
                description: "Artist introduction, live performance history, collaboration information, and song information for VSinger's Kizumayu Tori",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            };
        default:
            return {
                title: "拠鳥きまゆアーティスト情報まとめ",
                description: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            }
    } 
};

export const getBiographyMeta = (locale: SupportedLocale): Meta => {
    const languageAlternates = [
        {
            hrefLang: "x-default",
            href: `${baseUrl}${path.biography}`,
        },
        {
            hrefLang: "ja",
            href: `${baseUrl}${path.biography}`,
        },
        {
            hrefLang: "en",
            href: `${baseUrl}/en${path.biography}`,
        },
    ];
    switch(locale) {
        case "en":
            return {
                title: "Kimayu Yorudo Biography",
                description: "Artist introduction, live performance history, etc",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            };
        default:
            return {
                title: "拠鳥きまゆ Biography",
                description: "アーティスト情報・ライブ出演歴・コラボ情報",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            }
    } 
};

export const getDiscographyMeta = (locale: SupportedLocale): Meta => {
    const languageAlternates = [
        {
            hrefLang: "x-default",
            href: `${baseUrl}${path.discography}`,
        },
        {
            hrefLang: "ja",
            href: `${baseUrl}${path.discography}`,
        },
        {
            hrefLang: "en",
            href: `${baseUrl}/en${path.discography}`,
        },
    ];
    switch(locale) {
        case "en":
            return {
                title: "Kimayu Yorudo Discograpy",
                description: "Released songs, music videos, and other related information",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            };
        default:
            return {
                title: "拠鳥きまゆ Discography",
                description: "楽曲リリース情報やMVなど関連情報へのリンク",
                siteName: translateSitename(locale),
                locale: convertLocale(locale),
                languageAlternates: languageAlternates,
            };
    } 
};