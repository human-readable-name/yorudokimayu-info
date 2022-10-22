import { SupportedLocale } from "../../constants/i18n";

export abstract class TranslatableMaster {
    protected names: Map<SupportedLocale,string>;
    constructor(props: {names: Map<SupportedLocale,string>}) {
        this.names = props.names;
    }
    getName(locale: SupportedLocale): string {
        const result = this.names.get(locale)
        if (result != null ) {
            return result;
        } else { 
            throw new Error(`Specified locale ${locale} missing.`);
        }
    }
    static createNames(names: [SupportedLocale, string][]): Map<SupportedLocale, string> {
        const locales = names.map((pair: [SupportedLocale, string]) => {
            return pair[0];
        });
        const dintinctLocales = new Set(locales);
        if (names.length != dintinctLocales.size) {
            throw new Error(`locale is duplicated: ${names}`);
        }
        return new Map<SupportedLocale, string>(names);
    }; 
}