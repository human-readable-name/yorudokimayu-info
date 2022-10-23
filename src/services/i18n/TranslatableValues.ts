import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";

export class TranslatableValues {
    protected values: Map<SupportedLocale,string>;
    private constructor(values: Map<SupportedLocale,string>) {
        this.values = values;
    }
    getLocalizedValue(locale: SupportedLocale): string {
        const result = this.values.get(locale)
        if (result != null ) {
            return result;
        } else { 
            throw new Error(`Specified locale ${locale} missing.`);
        }
    }
    /**
     * ファクトリメソッド
     * 
     * 実際にInMemory*Service系の実装で使うデータはこちらで生成する。
     * createValuesメソッドによる対応ロケールの網羅がチェックがされる。
     * このため、翻訳漏れは実行時にエラーになる。
     * @param candidates [SupportedLocale, string][]
     * @returns TranslatableValues
     * @throws Error
     */
    static create(candidates: [SupportedLocale, string][]): TranslatableValues {
        return new TranslatableValues(TranslatableValues.createValues(candidates));
    }
    /**
     * 単体テストコード用のファクトリメソッド
     * 
     * createValuesメソッドによる対応ロケールのチェックがされない。
     * @param candidates [SupportedLocale, string][]
     * @returns TranslatableValues
     */
    static createForTest(candidates: [SupportedLocale, string][]): TranslatableValues {
        return new TranslatableValues(new Map<SupportedLocale, string>(candidates));
    }
    static createValues(candidates: [SupportedLocale, string][]): Map<SupportedLocale, string> {
        const locales = candidates.map((pair: [SupportedLocale, string]) => {
            return pair[0];
        });
        const dintinctLocales = new Set(locales);
        if (candidates.length != dintinctLocales.size) {
            throw new Error(`locale is duplicated: ${candidates}`);
        }
        if (dintinctLocales.size != SUPPORTED_LOCALES.length) {
            throw new Error(`locale size is invalid: ${candidates}`);
        }
        return new Map<SupportedLocale, string>(candidates);
    };
}