type Alternate = {
    hrefLang: string;
    href: string;
};

export type Meta = {
    title: string;
    description: string;
    siteName: string;
    locale: string;
    languageAlternates: Alternate[];
};