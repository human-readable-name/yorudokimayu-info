import path, { PageType } from '../constants/path';

export const isInternal = (url: string): boolean => url.startsWith("/");

export const pageTypeToPath = (pageType: PageType): string => {
    switch(pageType) {
        case "Biography":
            return `${path.biography}`;
        case "Discography":
            return `${path.discography}`;
        case "Home":
            return `${path.home}`;
    }
};