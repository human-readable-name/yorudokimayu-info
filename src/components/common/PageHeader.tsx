import React, { useState } from "react";
import externalLink from '../../constants/externalLink';
import path from '../../constants/path';
import NavListItem from "./NavListItem";

type NavItem = {
    name: string;
    url: string;
};

const navListItems: NavItem[] = [
    {name: "Home", url: path.home},
    {name: "Biography", url: path.biography},
    {name: "Discograpy", url: path.discography},
    {name: "Goods", url: externalLink.booth},
    {name: "Fan Community", url: externalLink.fanbox},
];

const PageHeader: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

    return <header>
        {/** SPなどではハンバーガーメニュー */}
        <div className="md:hidden">
            <div className="mt-2 space-y-2" onClick={toggleMenu}>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
                <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
            </div>
            { isMenuOpen && 
                <div className="absolute z-10 top-0 right-0 min-h-fit min-w-full bg-white">
                    <nav className="grid gap-2 grid-col">
                        <button onClick={toggleMenu}>Close menu</button>
                        <ul className="justify-center align-center px-4">
                            {navListItems.map((item,index) => <NavListItem key={index} name={item.name} url={item.url} />)}
                        </ul>
                    </nav>
                </div>
            }
        </div>
        {/** PCなどでは横にメニュー項目を出す */}
        <div className="hidden md:flex">
            <nav>
                <ul className="flex space-x-4 py-4">
                    {navListItems.map((item,index) => <NavListItem key={index} name={item.name} url={item.url} />)}
                </ul>
            </nav>
        </div>
    </header>
};

export default PageHeader;