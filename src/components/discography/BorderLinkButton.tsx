import React from "react";
import { LinkItem } from "../../services/discography/ProductService";

type Props = {
    linkItem: LinkItem;
};

const BorderLinkButton: React.FC<Props> = ({linkItem}) => {
    return <a 
        href={linkItem.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full rounded-lg border border-solid border-indigo-800 text-indigo-800 text-center leading-8"
    >
        {linkItem.name}
    </a>
};

export default BorderLinkButton;