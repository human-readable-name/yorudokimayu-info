import React from "react";
import DateLabel from "./DateLabel";
import { Collaboration } from "../../services/biography/BiographyService";
import LinkList from "../common/LinkList";
import { Padding } from "../../constants/tailwind";

type Props = {
    collaboration: Collaboration;    
};

const CollaborationCard: React.FC<Props> = ({collaboration}) => {
    return <article className={`${Padding.Small}`}>
        <div className="flex flex-wrap space-x-4">
            <DateLabel date={collaboration.date} />
            <span>
                {collaboration.product.artist}
                {collaboration.product.artist.length > 0 ? " " : ""}
                {collaboration.product.name}
            </span>
            <span>{collaboration.partOfTheWork}</span>
        </div>
        { collaboration.links.length > 0 && 
            <LinkList linkItems={collaboration.links} />
        }
    </article>;
};

export default CollaborationCard;