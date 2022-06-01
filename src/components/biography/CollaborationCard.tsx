import React from "react";
import DateLabel from "./DateLabel";

import { Collaboration } from "../../entities/biography/Collaboration";
import CollaborationLinkItem from "./CollaborationLinkItem";

type Props = {
    collaboration: Collaboration;    
};

const CollaborationCard: React.FC<Props> = ({collaboration}) => {
    return <article>
        <div className="flex flex-wrap space-x-4">
            <DateLabel date={collaboration.date} />
            <span className="text-sm">
                {collaboration.product.artist}
                {collaboration.product.artist.length > 0 ? " " : ""}
                {collaboration.product.name}
            </span>
        </div>
        <div className="flex flex-wrap space-x-4 jusitfy-start items-center">
            <span className="text-sm">{collaboration.partOfTheWork}</span>
            { collaboration.link &&  
                <CollaborationLinkItem collaborationLink={collaboration.link} />
            }
        </div>
        
    </article>;
};

export default CollaborationCard;