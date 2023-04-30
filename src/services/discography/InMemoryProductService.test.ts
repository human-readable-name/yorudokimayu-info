import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { InMemoryProductService, ProductLinkMaster, StoreLinkMaster } from "./InMemoryProductService"

describe('ProductLinkMaster', () => {
    describe('getLinkItem', () => {
        test('ロケールに応じた翻訳のViewModelに変換できる', () => {
            const master = new ProductLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "カラの鼓動はソラになる"],
                    ["en", "karano kodouha soraninaru"],
                ]), 
                url: "https://youtu.be/7jS6tDpvko4"
            });
            expect(master.getLinkItem("ja")).toEqual({
                name: "カラの鼓動はソラになる",
                url: "https://youtu.be/7jS6tDpvko4",
            });
            expect(master.getLinkItem("en")).toEqual({
                name: "karano kodouha soraninaru",
                url: "https://youtu.be/7jS6tDpvko4",
            });
        });
    });
});

describe('StoreLinkMaster', () => {
    describe('createForTuneCore', () => {
        test('全ロケールのTuneCoreリンクを作成できる', () => {
            const master = StoreLinkMaster.createForTuneCore({id: 'vm0mu1Ac'});
            expect(master).toStrictEqual(new StoreLinkMaster({
                name: TranslatableValues.createForTest([
                    ["ja", "配信・ダウンロード"],
                    ["en", "Subscription / Download"],
                ]),
                url: TranslatableValues.createForTest([
                    ["ja", "https://linkco.re/vm0mu1Ac?lang=ja"],
                    ["en", "https://linkco.re/vm0mu1Ac?lang=en"],
                ]),
            }))
        });
    });
    describe('createForOfficialStoe', () => {
        test('全ロケールのBoothリンクを作成できる', () => {
            const master = StoreLinkMaster.createForOfficialStore({id: '4220956'});
            expect(master).toStrictEqual(new StoreLinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Official store"],
                    ["en", "Official store"],
                ]),
                url: TranslatableValues.createForTest([
                    ["ja", "https://booth.pm/ja/items/4220956"],
                    ["en", "https://booth.pm/en/items/4220956"],
                ]),
            }))
        });
    });
    describe('getLinkItem', () => {
        test('ロケールに応じた翻訳のViewModelに変換できる', () => {
            const master = StoreLinkMaster.createForTuneCore({id: 'vm0mu1Ac'});
            expect(master.getLinkItem("ja")).toEqual({
                name: "配信・ダウンロード",
                url: "https://linkco.re/vm0mu1Ac?lang=ja",
            });
            expect(master.getLinkItem("en")).toEqual({
                name: "Subscription / Download",
                url: "https://linkco.re/vm0mu1Ac?lang=en",
            });
        });
    })
});

describe('InMemoryProductService', () => {
    const service = new InMemoryProductService();
    describe('listProductSummaries', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと %s', (locale: SupportedLocale) => {
            expect(() => {
                service.listProductSummaries(locale);
            }).not.toThrow();
        });
        test('正しく翻訳できてること', () => {
            const jaSummaries = service.listProductSummaries("ja");

            const japaneseCredits = jaSummaries.flatMap((summary) => summary.credits).join("");
            expect(
                japaneseCredits
            ).toEqual(expect.stringContaining("拠鳥きまゆ"));
            expect(
                japaneseCredits
            ).toEqual(expect.not.stringContaining("KimayuYorudo"));
        
            const japaneseTuneCoreLinks = jaSummaries.flatMap((summary) => {
                return summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"));
            });
            expect(japaneseTuneCoreLinks.length).toBe(16);
            japaneseTuneCoreLinks.forEach((link) => {
                expect(link.url).toContain("lang=ja")
            });

            const japaneseOfficialStoreLinks =  jaSummaries.flatMap((summary) => {
                return summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://booth.pm/"));
            });
            japaneseOfficialStoreLinks.forEach((link) => {
                expect(link.url).toContain("/ja/items/")
            });

            const enSummaries = service.listProductSummaries("en");
        
            const englishCredits = enSummaries.flatMap((summary) => summary.credits).join("");
            expect(
                englishCredits
            ).toEqual(expect.stringContaining("KimayuYorudo"));
            expect(
                englishCredits
            ).toEqual(expect.not.stringContaining("拠鳥きまゆ"));
        
            const englishTuneCoreLinks = enSummaries.flatMap((summary) => {
                return summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"));
            });
            expect(englishTuneCoreLinks.length).toBe(16);
            englishTuneCoreLinks.forEach((link) => {
                expect(link.url).toContain("lang=en")
            });

            const englishOfficialStoreLinks =  enSummaries.flatMap((summary) => {
                return summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://booth.pm/"));
            });
            englishOfficialStoreLinks.forEach((link) => {
                expect(link.url).toContain("/en/items/")
            });
        });
    });
});

