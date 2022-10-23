import { SUPPORTED_LOCALES } from "../../constants/i18n";
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
    describe('listContentLinks', () => {
        test('翻訳漏れの実行時エラーにならないことを担保', () => {
            expect(() => {
                const service = new InMemoryContentLinkService();
                SUPPORTED_LOCALES.forEach((locale) => {
                    service.listContentLinks(locale);
                });
            }).not.toThrow();
        });
   }); 
});