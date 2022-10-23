import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { ContentLinkMaster, InMemoryContentLinkService } from "./InMemoryContentLinkService";

describe('ContentLinkMaster', () => {
    describe('getContentLink', () => {
        test('ViewModelに変換できる', () => {
            const master= new ContentLinkMaster({
                title: TranslatableValues.createForTest([
                    ["ja", "日本語タイトル"],
                    ["en", "Title in English"],
                ]),
                caption: TranslatableValues.createForTest([
                    ["ja", "日本語脚注"],
                    ["en", "Caption in English"],
                ]),
                url: "/path",
            });
            expect(master.getContentLink("ja")).toEqual({
                title: "日本語タイトル",
                caption: "日本語脚注",
                url: "/path",
            });
            expect(master.getContentLink("en")).toEqual({
                title: "Title in English",
                caption: "Caption in English",
                url: "/path",
            });
        });
    })
})

describe('InMemoryContentLinkService', () => {
    const service = new InMemoryContentLinkService();
    describe('listContentLinks', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.listContentLinks(locale);
            }).not.toThrow();
        });
   }); 
});