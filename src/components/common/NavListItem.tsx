import React from "react";
import { isInternal } from "../../utilities/link";

type Props = {
    name: string;
    url: string;
};

const NavListItem: React.FC<Props> = ({name, url}) => {
    const isInternalLink  = isInternal(url);
    const anchorProps = isInternalLink
        ? {className: "m-2 block", href: url} 
        : {className: "m-2 block", href: url, target:"_blank", rel: "noopener noreferrer"};

    return <li className="font-medium text-center border border-solid rounded-lg border-indigo-800 text-indigo-800">
        <a {...anchorProps}>
            {name}
        </a>
    </li>
};

export default NavListItem;