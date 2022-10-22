import { SupportedLocale } from "../../constants/i18n";

export type Profile = {
    name: string;
    nameCaption?: string;
    introductions: string[];
    activities: string[];
};

export type CollaborationLink = {
    name: string;
    url: string;
};

export type CollaborationProduct = {
    name: string;
    artist: string;
}

export type Collaboration = {
    date: Date;
    product: CollaborationProduct;
    partOfTheWork: string;
    links: CollaborationLink[];
};

export type EventLink = {
    name: string;
    url: string;
};

export type EventHistory = {
    date: Date;
    name: string;
    links?: EventLink[];
};

export interface BiographyService {
    getProfile(locale: SupportedLocale): Profile;
    listCollaborations(locale: SupportedLocale): Collaboration[];
    listEventHistories(locale: SupportedLocale): EventHistory[];
};