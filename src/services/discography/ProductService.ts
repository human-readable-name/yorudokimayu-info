import { SupportedLocale } from "../../constants/i18n";

export type ProductKind = "Single" | "EP" | "Album";
export type Genre = "Rock" | "Alternative" | "Electronic" | "Pop";
export type LinkItem = {
    name: string;
    url: string;
};

export type ProductSummary = {
    id: string;
    name: string;
    kind: ProductKind;
    genre: Genre | null;
    dateOfRelease: string; // yyyy-MM-dd;
    description: string;
    tracks: string[];
    credits: string[];
    mvLinks: LinkItem[];
    storeLinks: LinkItem[];
    supplementalInformationLinks: LinkItem[];
};

export interface ProductService {
    getLyricNote(locale: SupportedLocale): string;
    listProductSummaries(locale: SupportedLocale): ProductSummary[];
}