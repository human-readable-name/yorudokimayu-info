import React from "react";
import { LinkItem } from "../../services/common/Link";


type Props = {
    collaborationLink: LinkItem;
};

const CollaborationLinkItem: React.FC<Props> = ({collaborationLink}) => {
    return <span>
        <a 
            href={collaborationLink.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-sm border border-solid border-indigo-800 text-indigo-800 text-center text-sm"
        >
            {collaborationLink.name}
        </a>
    </span>
};

export default CollaborationLinkItem;