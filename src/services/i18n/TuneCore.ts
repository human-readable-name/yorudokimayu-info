import { SupportedLocale } from "../../constants/i18n";

const validateId = (id: string): string => {
    if (/[0-9A-Za-z]{8}$/.test(id)) {
        return id;
    }
    throw new Error(`TuneCoreのIDの書式に合致しません ${id}`);
};

export const createTuneCoreUrl = (props: {id: string; locale: SupportedLocale}): string => {
    const id = validateId(props.id);
    return `https://linkco.re/${id}?lang=${props.locale}`;
};