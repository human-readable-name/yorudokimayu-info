import { SupportedLocale } from "../../constants/i18n";
import { LinkItem } from "../common/Link";

export type Profile = {
    name: string;
    nameCaption?: string;
    introductions: string[];
    activities: string[];
};

export type CollaborationProduct = {
    name: string;
    artist: string;
}

export type Collaboration = {
    date: Date;
    product: CollaborationProduct;
    partOfTheWork: string;
    links: LinkItem[];
};

export type EventHistory = {
    date: Date;
    name: string;
    links?: LinkItem[];
};

export interface BiographyService {
    getProfile(locale: SupportedLocale): Profile;
    listCollaborations(locale: SupportedLocale): Collaboration[];
    listEventHistories(locale: SupportedLocale): EventHistory[];
};