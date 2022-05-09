import React from "react";
import { LinkItem } from "../../entities/discography/Product";

type Props = {
    linkItem: LinkItem;
};

const LinkButton: React.FC<Props> = ({linkItem}) => {
    return <a 
        href={linkItem.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full rounded-full bg-indigo-800 text-white text-center"
    >
        {linkItem.name}
    </a>
};

export default LinkButton;