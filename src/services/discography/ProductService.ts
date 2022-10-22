import { SupportedLocale } from "../../constants/i18n";

export type ProductKind = "Single" | "EP";
export type Genre = "Rock" | "Alternative" | "Electronic" | "Pop";
export type LinkItem = {
    name: string;
    url: string;
};

export type ProductSummary = {
    id: string;
    name: string;
    kind: ProductKind;
    genre: Genre;
    dateOfRelease: Date;
    description: string;
    credits: string[];
    mvLinks: LinkItem[];
    storeLinks: LinkItem[];
    supplementalInformationLinks?: LinkItem[];
};

export interface ProductService {
    listProductSummaries(locale: SupportedLocale): ProductSummary[];
}