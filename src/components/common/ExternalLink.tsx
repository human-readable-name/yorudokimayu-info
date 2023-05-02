import React from "react";
import { LinkItem } from "../../services/common/Link"

type Props = {
    linkItem: LinkItem;
};

const ExternalLink: React.FC<Props> = ({linkItem}: Props) => {
    return <a
        href={linkItem.url}
        target="_blank"
        rel="noopener noreferrer" 
        className="text-sm font-medium text-indigo-800 border-b border-indigo-800"
    >
        {linkItem.name}
    </a>;
};

export default ExternalLink;