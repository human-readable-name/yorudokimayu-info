import React from "react";
import { Color } from "../../constants/tailwind";
import { LinkItem } from "../../services/discography/ProductService";

type Props = {
    linkItem: LinkItem;
};

const FilledLinkButton: React.FC<Props> = ({linkItem}) => {
    return <a 
        href={linkItem.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`w-full rounded-lg bg-${Color.Link} text-white text-center leading-8`}
    >
        {linkItem.name}
    </a>
};

export default FilledLinkButton;