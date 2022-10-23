import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { Alternate, Meta, MetaDataService } from "./MetaDataService";
import path from "../../constants/path";
import { TranslatableValues } from "../i18n/TranslatableValues";

const baseUrl = "https://kimayu.rocks";

const siteName = TranslatableValues.create([
    ["ja",  "拠鳥きまゆアーティスト情報まとめ"],
    ["en", "Kimayu Yorudo Information"],
]);
const siteDescription = TranslatableValues.create([
    ["ja", "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報をまとめています"],
    ["en", "This website is a collection of links about KimayuYorudo's music and live performances."],
]);

class MetaDataMaster {
    private title: TranslatableValues;
    private description: TranslatableValues;
    private pathWithoutLocale: string;
    constructor(props: { title: TranslatableValues, description: TranslatableValues, pathWithoutLocale: string}) {
        this.title = props.title;
        this.description = props.description;
        this.pathWithoutLocale = props.pathWithoutLocale;
    }
    getMeta(locale: SupportedLocale): Meta {
        return {
            title: this.title.getLocalizedValue(locale),
            description: this.description.getLocalizedValue(locale),
            siteName: siteName.getLocalizedValue(locale),
            locale: this.convertLocale(locale),
            canonical: this.createCanonical(locale, this.pathWithoutLocale),
            languageAlternates: this.createLanguageAlternates(this.pathWithoutLocale),
        }
    }
    createLanguageAlternates(pathWithoutLocale: string): Alternate[] {
        const xDefault: Alternate = {
            hrefLang: "x-default",
            href: this.createCanonical("ja", pathWithoutLocale),
        };
        const supported = SUPPORTED_LOCALES.map((locale) => {
            return {
                hrefLang: locale,
                href: this.createCanonical(locale, pathWithoutLocale),
            };
        });
        return [xDefault].concat(supported);
    }
    createCanonical(locale: SupportedLocale, pathWithoutLocale: string): string {
        const localePrefix = (locale == "ja") ? "" : `/${locale}`;
        return `${baseUrl}${localePrefix}${pathWithoutLocale}`;
    }
    convertLocale(supportedLocale: SupportedLocale): string {
        switch(supportedLocale) {
            case "en":
                return "en_US";
            default:
                return "ja_JP";
        }
    };
}

const homeMetaDataMaster = new MetaDataMaster({
    title: TranslatableValues.create([
        ["ja", "拠鳥きまゆアーティスト情報まとめ"],
        ["en", "Kimayu Yorudo Information"],
    ]),
    description: TranslatableValues.create([
        ["ja", "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報"],
        ["en", "This website is a collection of links about KimayuYorudo's music and live performances."],
    ]),
    pathWithoutLocale: path.home,
});

const biographyMetaDataMaster = new MetaDataMaster({
    title: TranslatableValues.create([
        ["ja", "拠鳥きまゆ Biography"],
        ["en", "Kimayu Yorudo Biography"],
    ]),
    description: TranslatableValues.create([
        ["ja", "アーティスト情報・ライブ出演歴・コラボ情報"],
        ["en", "Artist introduction, live performance history, etc"],
    ]),
    pathWithoutLocale: path.biography,
}); 

const discographyMetaDataMaster = new MetaDataMaster({
    title: TranslatableValues.create([
        ["ja", "拠鳥きまゆ Discography"],
        ["en", "Kimayu Yorudo Discograpy"],
    ]),
    description: TranslatableValues.create([
        ["ja", "楽曲リリース情報やMVなど関連情報へのリンク"],
        ["en", "Released songs, music videos, and other related information"],
    ]),
    pathWithoutLocale: path.discography,
}); 


export class InMemoryMetaDataService implements MetaDataService {
    getSiteName(locale: SupportedLocale): string {
        return siteName.getLocalizedValue(locale);
    }
    getSiteDescription(locale: SupportedLocale): string {
        return siteDescription.getLocalizedValue(locale);
    }
    getHomeMeta(locale: SupportedLocale): Meta {
        return homeMetaDataMaster.getMeta(locale);
    }
    getBiographyMeta(locale: SupportedLocale): Meta {
        return biographyMetaDataMaster.getMeta(locale);

    }
    getDiscographyMeta(locale: SupportedLocale): Meta {
        return discographyMetaDataMaster.getMeta(locale);
    }
}