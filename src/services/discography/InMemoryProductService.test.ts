import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { InMemoryProductService } from "./InMemoryProductService"

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

