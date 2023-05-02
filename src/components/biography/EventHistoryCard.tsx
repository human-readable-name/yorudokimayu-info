import React from "react";
import DateLabel from "./DateLabel";
import { EventHistory } from "../../services/biography/BiographyService";
import LinkList from "../common/LinkList";

type Props = {
    eventHistory: EventHistory;
};

const EventHistoryCard : React.FC<Props> = ({eventHistory}: Props) => {
    return <article className="p-2">
        <div className="flex space-x-4 justify-start items-center">
            <DateLabel date={eventHistory.date} />
            <span>{eventHistory.name}</span>
        </div>
        { eventHistory.links && eventHistory.links.length > 0 && 
            <LinkList linkItems={eventHistory.links} />
        }
    </article>
};

export default EventHistoryCard;