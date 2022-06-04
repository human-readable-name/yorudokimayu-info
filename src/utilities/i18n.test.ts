import { ensureSupportedLocale } from "./i18n";

test('ensureSupportedLocale', () => {
    expect(ensureSupportedLocale("en")).toBe("en");
    expect(ensureSupportedLocale("ja")).toBe("ja");
    // 非対応の場合はデフォルトに
    expect(ensureSupportedLocale("zh")).toBe("ja");
});