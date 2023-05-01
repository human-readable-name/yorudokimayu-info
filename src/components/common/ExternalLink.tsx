import React from "react";
import { Color } from "../../constants/tailwind";
import { LinkItem } from "../../services/common/Link"

type Props = {
    linkItem: LinkItem;
};

const ExternalLink: React.FC<Props> = ({linkItem}: Props) => {
    return <a
        href={linkItem.url}
        target="_blank"
        rel="noopener noreferrer" 
        className={`text-sm font-medium text-${Color.Link} border-b border-${Color.Link}`}
    >
        {linkItem.name}
    </a>;
};

export default ExternalLink;