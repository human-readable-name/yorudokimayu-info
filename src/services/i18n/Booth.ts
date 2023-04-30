import { SupportedLocale } from "../../constants/i18n";

const validateId = (id: string): string => {
    if (/[0-9]{7}/.test(id)) {
        return id;
    }
    throw new Error(`BoothのIDの書式に合致しません ${id}`);
};

export const createBoothUrl = (props: {id: string; locale: SupportedLocale}): string => {
    const id = validateId(props.id);
    return `https://booth.pm/${props.locale}/items/${id}`;
};