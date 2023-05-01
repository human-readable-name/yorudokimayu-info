import { SUPPORTED_LOCALES, SupportedLocale } from "../../constants/i18n";
import { TranslatableValues } from "./TranslatableValues";

describe('TranslatableValues', () => {
    describe('createForTest', () => {
        test('全ロケール網羅されていなくてもインスタンスを作成可能', () => {
            expect(
                TranslatableValues.createForTest([
                    ["ja", "日本語"],
                ])
            ).toBeInstanceOf(TranslatableValues);
        });
    });
    describe('create', () => {
        test('全ロケール網羅されていないとインスタンスを作成できない', () => {
            expect(() => {
                TranslatableValues.create([
                    ["ja", "日本語"],
                ]);
            }).toThrow();
        });
        test('全ロケール網羅されているとインスタンスが作成できる', () => {
            expect(
                TranslatableValues.create([
                    ["ja", "日本語"],
                    ["en", "English"],
                ])
            ).toBeInstanceOf(TranslatableValues);
        });
    });
    describe('createUnifiedStatement', () => {
        test('全ロケールに対する統一文言インスタンスを作成できる', () => {
            const actual = TranslatableValues.createUnifiedStatement("Subscription / Download");
            expect(actual).toBeInstanceOf(TranslatableValues);
            SUPPORTED_LOCALES.forEach((locale) => {
                expect(actual.getLocalizedValue(locale)).toBe("Subscription / Download");
            });
        });
    });
    describe('getLocalizedValue', () => {
        test('正常系', () => {
            const instance = TranslatableValues.createForTest([
                ["ja", "日本語"],
                ["en", "English"],
            ]);
            expect(instance.getLocalizedValue("ja")).toBe("日本語");
            expect(instance.getLocalizedValue("en")).toBe("English");
        });
        test('異常系', () => {
            const instance = TranslatableValues.createForTest([
                ["ja", "日本語"],
            ]);
            expect(instance.getLocalizedValue("ja")).toBe("日本語");
            expect(() => {
                instance.getLocalizedValue("en")
            }).toThrow();
        });
    });


    
    describe('createValues', () => {
        test('正常系', () => {
            expect(
                TranslatableValues.createValues([
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
                TranslatableValues.createValues([
                    ["ja", "日本語"],
                    ["ja", "English"],
                ])
            }).toThrow();
        });
        test('ロケールが足りない場合はエラーにする', () => {
            expect(() => {
                TranslatableValues.createValues([
                    ["ja", "日本語"],
                ])
            }).toThrow();
        });
    });
});
