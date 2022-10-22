import { SupportedLocale } from "../../constants/i18n";
import { TranslatableMaster } from "./TannslatableMaster";

class TranslatableMasterImpl extends TranslatableMaster {
    constructor(names: Map<SupportedLocale, string>) {
        super({names});
    }
}

describe('TranslatableMaster', () => {
    describe('getName', () => {
        test('正常系', () => {
            const master = new TranslatableMasterImpl(
                new Map<SupportedLocale, string>([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            );
            expect(master.getName("ja")).toBe("日本語");
            expect(master.getName("en")).toBe("English");
        });
        test('ロケールがない場合はエラー', () => {
            const master = new TranslatableMasterImpl(
                new Map<SupportedLocale, string>([
                    ["ja", "日本語"],
                ])
            );
            expect(() => { master.getName("en") }).toThrow();
        });
    });
    
    describe('createTranslatableNames', () => {
        test('正常系', () => {
            expect(
                TranslatableMaster.createNames([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            ).toEqual(
                new Map<SupportedLocale,string>([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            );
        });
        test('ロケール重複した場合はエラーにする', () => {
            expect(() => {
                TranslatableMaster.createNames([
                    ["ja", "日本語"],
                    ["ja", "English"],
                ])
            }).toThrow();
        })
    });
});
