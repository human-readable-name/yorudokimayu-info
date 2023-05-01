import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { InMemoryNewsService, NewsMaster } from "./InMemoryNewsService";

describe('NewsMaster', () => {
    describe('getNewsItem', () => {
        test('ViewModelに変換できること', () => {
            const master = new NewsMaster({
                text: TranslatableValues.createForTest([
                    ["ja", "2022秋M3 (2022-10-30) パンケーキキャッツ 1stEP ノンストップエモーション！ 1曲担当"],
                    ["en", "M32022Autumn (2022-10-30) pancakecats 1stEP Non-Stop Emotion!"],
                ]),
                links: [
                    new LinkMaster({
                        name: TranslatableValues.createForTest([
                            ["ja", "特設サイト"],
                            ["en", "Web site"],
                        ]), 
                        url: TranslatableValues.createUnifiedStatement("https://pccs-vtuber.studio.site/"),
                    }),
                    new LinkMaster({
                        name: TranslatableValues.createForTest([
                            ["ja", "クロスフェードデモ"],
                            ["en", "Crossfade Demo"],
                        ]), 
                        url: TranslatableValues.createUnifiedStatement("https://youtu.be/stfsWwIFDtE"),
                    }),
                ],
            });
            expect(master.getNewsItem("ja")).toEqual({
                text: "2022秋M3 (2022-10-30) パンケーキキャッツ 1stEP ノンストップエモーション！ 1曲担当",
                links: [
                    {name: "特設サイト", url: "https://pccs-vtuber.studio.site/"},
                    {name: "クロスフェードデモ", url: "https://youtu.be/stfsWwIFDtE"},
                ]
            });
            expect(master.getNewsItem("en")).toEqual({
                text: "M32022Autumn (2022-10-30) pancakecats 1stEP Non-Stop Emotion!",
                links: [
                    {name: "Web site", url: "https://pccs-vtuber.studio.site/"},
                    {name: "Crossfade Demo", url: "https://youtu.be/stfsWwIFDtE"},
                ]
            });
        });
    });
});

describe('InMemoryNewsService', () => {
    const service = new InMemoryNewsService();
    describe('listNews', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.listNews(locale);
            }).not.toThrow();
        });
    });
});