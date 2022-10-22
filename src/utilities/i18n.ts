import { SupportedLocale } from "../constants/i18n"

export const ensureSupportedLocale = (locale: string): SupportedLocale => {
    switch(locale) {
        case "en": 
            return "en";
        default:
            return "ja";
    }
};