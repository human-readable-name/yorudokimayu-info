import React from "react";
import Link from "next/link";
import { isInternal } from "../../utilities/link";

type Props = {
    name: string;
    url: string;
};

const NavListItem: React.FC<Props> = ({name, url}) => {
    const listClassName = "font-medium text-center border border-solid rounded-lg border-indigo-800 text-indigo-800";
    const anchorClassName = "m-2 block";

    if (isInternal(url)) {
        return <li className={listClassName}>
            <Link href={url}><a className={anchorClassName}>{name}</a></Link>
        </li>
    } else {
        return <li className={listClassName}>
            <a className={anchorClassName} target="_blank" rel="noopener noreferrer" href={url} >{name}</a>
        </li>
    }
};

export default NavListItem;