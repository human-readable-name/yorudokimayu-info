import React from "react";
import { LinkItem } from "../../services/common/Link";

type Props = {
    eventLink: LinkItem;
};

const EventLinkItem: React.FC<Props> = ({eventLink}: Props) => {
    return <li>
        <a 
            href={eventLink.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-sm border border-solid border-indigo-800 text-indigo-800 text-center text-sm"
        >
            {eventLink.name}
        </a>
    </li>;
};

export default EventLinkItem;
