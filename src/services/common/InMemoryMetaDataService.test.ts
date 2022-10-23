import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { InMemoryMetaDataService } from "./InMemoryMetaDataService";

describe('InMemoryMetaDataService', () => {
    const service = new InMemoryMetaDataService();
    describe('getHomeMeta', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.getHomeMeta(locale);
            }).not.toThrow();
        });
        test('正しく翻訳できてること', () => {
            expect(
                service.getHomeMeta('ja')
            ).toEqual(
                {
                    title: "拠鳥きまゆアーティスト情報まとめ",
                    description: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
                    siteName: "拠鳥きまゆアーティスト情報まとめ",
                    locale: "ja_JP",
                    canonical: "https://kimayu.rocks/",
                    languageAlternates: [
                        {
                            hrefLang: "x-default",
                            href: "https://kimayu.rocks/",
                        },
                        {
                            hrefLang: "ja",
                            href: "https://kimayu.rocks/",
                        },
                        {
                            hrefLang: "en",
                            href: "https://kimayu.rocks/en/",
                        },
                    ],
                }
            );
            expect(
                service.getHomeMeta('en')
            ).toEqual(
                {
                    title: "Kimayu Yorudo Information",
                    description: "This website is a collection of links about KimayuYorudo's music and live performances.",
                    siteName: "Kimayu Yorudo Information",
                    locale: "en_US",
                    canonical: "https://kimayu.rocks/en/",
                    languageAlternates: [
                        {
                            hrefLang: "x-default",
                            href: "https://kimayu.rocks/",
                        },
                        {
                            hrefLang: "ja",
                            href: "https://kimayu.rocks/",
                        },
                        {
                            hrefLang: "en",
                            href: "https://kimayu.rocks/en/",
                        },
                    ],
                }
            );
        });

    });
    
    
    test('getBiographyMeta', () => {
        expect(
            service.getBiographyMeta('ja')
        ).toEqual(
            {
                title: "拠鳥きまゆ Biography",
                description: "アーティスト情報・ライブ出演歴・コラボ情報",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
                canonical: "https://kimayu.rocks/biography",
                languageAlternates: [
                    {
                        hrefLang: "x-default",
                        href: "https://kimayu.rocks/biography",
                    },
                    {
                        hrefLang: "ja",
                        href: "https://kimayu.rocks/biography",
                    },
                    {
                        hrefLang: "en",
                        href: "https://kimayu.rocks/en/biography",
                    },
                ],
            }
        );
        expect(
            service.getBiographyMeta('en')
        ).toEqual(
            {
                title: "Kimayu Yorudo Biography",
                description: "Artist introduction, live performance history, etc",
                siteName: "Kimayu Yorudo Information",
                locale: "en_US",
                canonical: "https://kimayu.rocks/en/biography",
                languageAlternates: [
                    {
                        hrefLang: "x-default",
                        href: "https://kimayu.rocks/biography",
                    },
                    {
                        hrefLang: "ja",
                        href: "https://kimayu.rocks/biography",
                    },
                    {
                        hrefLang: "en",
                        href: "https://kimayu.rocks/en/biography",
                    },
                ],
            }
        );
    });

    test('getDiscographyMeta', () => {
        expect(
            service.getDiscographyMeta('ja')
        ).toEqual(
            {
                title: "拠鳥きまゆ Discography",
                description: "楽曲リリース情報やMVなど関連情報へのリンク",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
                canonical: "https://kimayu.rocks/discography",
                languageAlternates: [
                    {
                        hrefLang: "x-default",
                        href: "https://kimayu.rocks/discography",
                    },
                    {
                        hrefLang: "ja",
                        href: "https://kimayu.rocks/discography",
                    },
                    {
                        hrefLang: "en",
                        href: "https://kimayu.rocks/en/discography",
                    },
                ],
            }
        );
        expect(
            service.getDiscographyMeta('en')
        ).toEqual(
            {
                title: "Kimayu Yorudo Discograpy",
                description: "Released songs, music videos, and other related information",
                siteName: "Kimayu Yorudo Information",
                locale: "en_US",
                canonical: "https://kimayu.rocks/en/discography",
                languageAlternates: [
                    {
                        hrefLang: "x-default",
                        href: "https://kimayu.rocks/discography",
                    },
                    {
                        hrefLang: "ja",
                        href: "https://kimayu.rocks/discography",
                    },
                    {
                        hrefLang: "en",
                        href: "https://kimayu.rocks/en/discography",
                    },
                ],
            }
        );
    });

})




