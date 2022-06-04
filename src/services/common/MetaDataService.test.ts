import { getHomeMeta } from "./MetaDataService";

test('getHomeMeta', () => {
    expect(
        getHomeMeta('ja')
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
        getHomeMeta('en')
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