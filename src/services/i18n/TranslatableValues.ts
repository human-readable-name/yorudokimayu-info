import { SupportedLocale } from "../../constants/i18n";

export class TranslatableValues {
    protected values: Map<SupportedLocale,string>;
    constructor(props: {values: Map<SupportedLocale,string>}) {
        this.values = props.values;
    }
    getLocalizedValue(locale: SupportedLocale): string {
        const result = this.values.get(locale)
        if (result != null ) {
            return result;
        } else { 
            throw new Error(`Specified locale ${locale} missing.`);
        }
    }
    static createValues(candidates: [SupportedLocale, string][]): Map<SupportedLocale, string> {
        const locales = candidates.map((pair: [SupportedLocale, string]) => {
            return pair[0];
        });
        const dintinctLocales = new Set(locales);
        if (candidates.length != dintinctLocales.size) {
            throw new Error(`locale is duplicated: ${candidates}`);
        }
        return new Map<SupportedLocale, string>(candidates);
    };
}