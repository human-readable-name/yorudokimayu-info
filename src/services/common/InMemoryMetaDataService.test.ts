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
                    title: "KiMAYU アーティスト情報まとめ",
                    description: "VSinger KiMAYU (旧名義 拠鳥きまゆ) のアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
                    siteName: "KiMAYU アーティスト情報まとめ",
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
                    title: "KiMAYU Information",
                    description: "This website compiles various information about Vsinger KiMAYU (formerly known as Kimayu Yorudo).",
                    siteName: "KiMAYU Information",
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
                title: "KiMAYU Biography",
                description: "アーティスト情報・ライブ出演歴・コラボ情報",
                siteName: "KiMAYU アーティスト情報まとめ",
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
                title: "KiMAYU Biography",
                description: "Artist introduction, live performance history, etc",
                siteName: "KiMAYU Information",
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
                title: "KiMAYU Discography",
                description: "楽曲リリース情報やMVなど関連情報へのリンク",
                siteName: "KiMAYU アーティスト情報まとめ",
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
                title: "KiMAYU Discography",
                description: "Released songs, music videos, and other related information",
                siteName: "KiMAYU Information",
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




