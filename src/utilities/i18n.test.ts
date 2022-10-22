import { ensureSupportedLocale } from "./i18n";

describe('ensureSupportedLocale', () => {
    test('対応しているロケールはそのまま', () => {
        expect(ensureSupportedLocale("en")).toBe("en");
        expect(ensureSupportedLocale("ja")).toBe("ja");  
    });
    test('非対応のロケールはデフォルトに', () => {
        expect(ensureSupportedLocale("zh")).toBe("ja");
    });
});