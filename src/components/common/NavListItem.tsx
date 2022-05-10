import React from "react";
import { isInternal } from "../../utilities/link";

type Props = {
    name: string;
    url: string;
};

const NavListItem: React.FC<Props> = ({name, url}) => {
    const isInternalLink  = isInternal(url);
    const anchorProps = isInternalLink
        ? {href: url} 
        : {href: url, target:"_blank", rel: "noopener noreferrer"};
    const className = isInternalLink 
        ? "border border-solid rounded-lg hover:border-indigo-800 hover:text-indigo-800 p-2" 
        : "border border-solid rounded-lg hover:border-indigo-800 hover:text-indigo-800 p-2 before:content-['_↗']"

    return <li className={className}>
        <a {...anchorProps}>
            {name}
        </a>
    </li>
};

export default NavListItem;