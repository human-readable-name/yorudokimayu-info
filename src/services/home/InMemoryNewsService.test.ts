import { SUPPORTED_LOCALES } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { InMemoryNewsService, NewsLinkMaster, NewsMaster } from "./InMemoryNewsService";

describe('NewsLinkMaster', () => {
    describe('getNewsItemLink', () => {
        test('ViewModelに変換できること', () => {
            const master = new NewsLinkMaster({
                name: TranslatableValues.createForTest([
                    ["ja", "日本語"],
                    ["en", "English"],
                ]),
                url: "https://www.zan-live.com/live/detail/10251",
            });
            expect(master.getNewsItemLink("ja")).toEqual({
                name: "日本語",
                url: "https://www.zan-live.com/live/detail/10251",
            });
            expect(master.getNewsItemLink("en")).toEqual({
                name: "English",
                url: "https://www.zan-live.com/live/detail/10251",
            });
        });
    });
});

describe('NewsMaster', () => {
    describe('getNewsItem', () => {
        test('ViewModelに変換できること', () => {
            const master = new NewsMaster({
                text: TranslatableValues.createForTest([
                    ["ja", "2022秋M3 (2022-10-30) パンケーキキャッツ 1stEP ノンストップエモーション！ 1曲担当"],
                    ["en", "M32022Autumn (2022-10-30) pancakecats 1stEP Non-Stop Emotion!"],
                ]),
                links: [
                    new NewsLinkMaster({
                        name: TranslatableValues.createForTest([
                            ["ja", "特設サイト"],
                            ["en", "Web site"],
                        ]), 
                        url: "https://pccs-vtuber.studio.site/",
                    }),
                    new NewsLinkMaster({
                        name: TranslatableValues.createForTest([
                            ["ja", "クロスフェードデモ"],
                            ["en", "Crossfade Demo"],
                        ]), 
                        url: "https://youtu.be/stfsWwIFDtE",
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
    describe('listNews', () => {
        test('翻訳漏れの実行時エラーにならないことを担保', () => {
            expect(() => {
                const service = new InMemoryNewsService();
                SUPPORTED_LOCALES.forEach((locale) => {
                    service.listNews(locale);
                });
            }).not.toThrow();
        });
    });
});