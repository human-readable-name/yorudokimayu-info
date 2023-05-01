import { SUPPORTED_LOCALES, SupportedLocale } from "../../constants/i18n";
import { createBoothUrl } from "../i18n/Booth";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { createTuneCoreUrl } from "../i18n/TuneCore";

export type LinkItem = {
    name: string;
    url: string;
};

export class LinkMaster {
    private url: TranslatableValues;
    private name: TranslatableValues;
    constructor(props: {url: TranslatableValues, name: TranslatableValues}) {
        this.url = props.url;
        this.name = props.name;
    }
    getLinkItem(locale: SupportedLocale): LinkItem {
        return {
            url: this.url.getLocalizedValue(locale),
            name: this.name.getLocalizedValue(locale),
        }
    }
    static createForTuneCore(props: {id: string}): LinkMaster {
        const {id} = props;
        return new LinkMaster({
            url: TranslatableValues.create(
                SUPPORTED_LOCALES.map((locale) => {
                    return [locale, createTuneCoreUrl({id,locale})]
                })
            ),
            name: TranslatableValues.createUnifiedStatement("Subscription / Download"),
        });
    }
    static createForOfficialStore(props: {id: string}): LinkMaster {
        const {id} = props;
        return new LinkMaster({
            url: TranslatableValues.create(
                SUPPORTED_LOCALES.map((locale) => {
                    return [locale, createBoothUrl({id,locale})]
                })
            ),
            name: TranslatableValues.createUnifiedStatement("Official store"),
        });
    }
    static createMusicVideoOnYouTube(props: {id: string}): LinkMaster {
        return new LinkMaster({
            name: TranslatableValues.createUnifiedStatement("Music video"),
            url: TranslatableValues.createUnifiedStatement(`https://youtu.be/${props.id}`),
        });
    }
}