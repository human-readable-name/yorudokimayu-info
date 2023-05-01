import React from "react";
import DateLabel from "./DateLabel";
import { Collaboration } from "../../services/biography/BiographyService";
import LinkList from "../common/LinkList";

type Props = {
    collaboration: Collaboration;    
};

const CollaborationCard: React.FC<Props> = ({collaboration}) => {
    return <article className="p-2">
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
            { collaboration.links.length > 0 && 
                <LinkList linkItems={collaboration.links} />
            }
        </div>
    </article>;
};

export default CollaborationCard;