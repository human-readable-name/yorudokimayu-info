import React from "react";
import Link from "next/link";

import { SupportedLocale } from "../../constants/i18n";
import { PageType } from '../../constants/path';
import { pageTypeToPath } from '../../utilities/link';

type LanguageLinkProps = {
    locale: SupportedLocale;
    pageType: PageType;
    selected: boolean;
};

const LanguageLink: React.FC<LanguageLinkProps> = ({locale, pageType, selected}) => {
    const path = pageTypeToPath(pageType);
    const localeToDisplay = "->" + locale.toUpperCase();
    if (selected) {
        return null;
    } else {
        return (<Link href={path} locale={locale}><li className="font-medium text-center">{localeToDisplay}</li></Link>);
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