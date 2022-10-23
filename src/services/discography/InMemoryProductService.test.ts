import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { InMemoryProductService, ProductLinkMaster } from "./InMemoryProductService"

describe('ProductLinkMaster', () => {
    describe('getUrl', () => {
        test('TuneCoreでなければそのまま', () => {
            const master = new ProductLinkMaster({
                url: "https://booth.pm/ja/items/4220956",
                name: TranslatableValues.createForTest([
                    ["ja", "日本語"],
                    ["en", "English"],
                ]),
            });
            expect(master.getUrl("ja")).toBe("https://booth.pm/ja/items/4220956")
        });
        test('TuneCoreの場合はlangのクエリパラメータを付ける', () => {
            const master = new ProductLinkMaster({
                url: "https://linkco.re/vm0mu1Ac",
                name: TranslatableValues.createForTest([
                    ["ja", "日本語"],
                    ["en", "English"],
                ]),
            });
            expect(master.getUrl("ja")).toBe("https://linkco.re/vm0mu1Ac?lang=ja");
            expect(master.getUrl("en")).toBe("https://linkco.re/vm0mu1Ac?lang=en");
        });

    });
    describe('getLinkItem', () => {
        test('ViewModelに変換できる', () => {
            const master = new ProductLinkMaster({
                url: "https://linkco.re/vm0mu1Ac",
                name: TranslatableValues.createForTest([
                    ["ja", "配信・ダウンロード"],
                    ["en", "Subscription / Download"],
                ]),
            });
            expect(master.getLinkItem("ja")).toEqual({
                name: "配信・ダウンロード",
                url: "https://linkco.re/vm0mu1Ac?lang=ja",
            });
            expect(master.getLinkItem("en")).toEqual({
                name: "Subscription / Download",
                url: "https://linkco.re/vm0mu1Ac?lang=en",
            });
        });
    });
});

describe('InMemoryProductService', () => {
    const service = new InMemoryProductService();
    describe('listProductSummaries', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.listProductSummaries(locale);
            }).not.toThrow();
        });
        test('正しく翻訳できてること', () => {
            const japaneseCredits = service.listProductSummaries("ja").flatMap((summary) => summary.credits).join("");
            expect(
                japaneseCredits
            ).toEqual(expect.stringContaining("拠鳥きまゆ"));
            expect(
                japaneseCredits
            ).toEqual(expect.not.stringContaining("KimayuYorudo"));
        
            const japaneseTuneCoreLinks = service.listProductSummaries("ja").flatMap((summary) => 
                summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"))
            );
            expect(japaneseTuneCoreLinks.length).toBe(16);
            japaneseTuneCoreLinks.forEach((link) => {
                expect(link.url).toContain("lang=ja")
            });
        
            const englishCredits = service.listProductSummaries("en").flatMap((summary) => summary.credits).join("");
            expect(
                englishCredits
            ).toEqual(expect.stringContaining("KimayuYorudo"));
            expect(
                englishCredits
            ).toEqual(expect.not.stringContaining("拠鳥きまゆ"));
        
            const englishTuneCoreLinks = service.listProductSummaries("en").flatMap((summary) => 
                summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"))
            );
            expect(englishTuneCoreLinks.length).toBe(16);
            englishTuneCoreLinks.forEach((link) => {
                expect(link.url).toContain("lang=en")
            });
        });
    });
});

