import React, { useState } from "react";
import externalLink from '../../constants/externalLink';
import { SupportedLocale } from "../../constants/i18n";
import path, { PageType } from '../../constants/path';
import NavListItem from "./NavListItem";
import SwitchLanguage from "./SwitchLanguage";

type NavItem = {
    name: string;
    url: string;
};

const navListItems: NavItem[] = [
    {name: "Home", url: path.home},
    {name: "Biography", url: path.biography},
    {name: "Discograpy", url: path.discography},
    {name: "Twitter", url: externalLink.twitter},
    {name: "YouTube", url: externalLink.youtube},
    {name: "Store", url: externalLink.booth},
    {name: "Fan community", url: externalLink.fanbox},
];

type Props = {
    currentLocale: SupportedLocale;
    currentPageType: PageType;
};

const PageHeader: React.FC<Props> = ({currentLocale, currentPageType}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    return <header className="border-b">
        {/** SPなどではハンバーガーメニュー */}
        <div className="md:hidden">
            <div className="flex justify-between items-center">
                <div className="m-4 space-y-2" onClick={toggleMenu}>
                    <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                    <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                </div>
                <div>
                    <SwitchLanguage currentLocale={currentLocale} currentPageType={currentPageType} />
                </div>
            { isMenuOpen && 
                <div className="absolute z-10 top-0 left-0 w-full h-screen bg-white">
                    <nav className="flex flex-col mx-16">
                        <button className="my-4" onClick={toggleMenu}>Close menu</button>
                        <ul className="justify-center align-center space-y-4">
                            {navListItems.map((item,index) => <NavListItem key={index} name={item.name} url={item.url} />)}
                        </ul>
                    </nav>
                </div>
            }
            </div>
        </div>
        {/** PCなどでは横にメニュー項目を出す */}
        <div className="hidden md:flex justify-center">
            <nav className="flex align-center">
                <ul className="flex space-x-4 p-4">
                    {navListItems.map((item,index) => <NavListItem key={index} name={item.name} url={item.url} />)}
                </ul>
            </nav>
            <SwitchLanguage currentLocale={currentLocale} currentPageType={currentPageType} />
        </div>
    </header>
};

export default PageHeader;