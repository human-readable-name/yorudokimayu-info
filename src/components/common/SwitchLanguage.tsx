import React from "react";
import Link from "next/link";

import { SupportedLocale } from "../../constants/i18n";
import path, { PageType } from '../../constants/path';

const pageTypeToPath = (pageType: PageType, locale: SupportedLocale): string => {
    const prefix = (locale === "ja") ? "" : `/${locale}`;
    switch(pageType) {
        case "Biography":
            return `${prefix}${path.biography}`;
        case "Discography":
            return `${prefix}${path.discography}`;
        default:
            return `${prefix}${path.home}`;
    }
};

type LanguageLinkProps = {
    locale: SupportedLocale;
    pageType: PageType;
    selected: boolean;
};

const LanguageLink: React.FC<LanguageLinkProps> = ({locale, pageType, selected}) => {
    const path = pageTypeToPath(pageType, locale);
    const localeToDisplay = "->" + locale.toUpperCase();
    const listClassName = "font-medium text-center p-4";
    if (selected) {
        return null;
    } else {
        return (<Link href={path} locale={false}><a><li className="listClassName">{localeToDisplay}</li></a></Link>);
    }
};

type Props = {
    currentLocale: SupportedLocale;
    currentPageType: PageType;
};

const SwitchLanguage: React.FC<Props> = ({currentLocale, currentPageType}) => {
    const locales: SupportedLocale[] = ["ja", "en"];
    return <ul className="flex flex-row p-4 items-center divide-x">
        {locales.map((locale, index) => <LanguageLink key={index} locale={locale} pageType={currentPageType} selected={currentLocale === locale} /> )}
    </ul>;
};

export default SwitchLanguage;