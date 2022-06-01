import React from "react";
import DateLabel from "./DateLabel";
import EventLinkItem from "./EventLinkItem";
import { EventHistory } from "../../entities/biography/EventHistory";

type Props = {
    eventHistory: EventHistory;
};

const EventHistoryCard : React.FC<Props> = ({eventHistory}: Props) => {
    return <article>
        <div className="flex space-x-4 justify-start items-center">
            <DateLabel date={eventHistory.date} />
            <span>{eventHistory.name}</span>
        </div>
        { eventHistory.links && eventHistory.links.length > 0 && 
            <ul className="flex flex-wrap space-x-2">
                {eventHistory.links.map((eventLink, index) => <EventLinkItem eventLink={eventLink} key={index} />)}
            </ul>
        }
        
    </article>
};

export default EventHistoryCard;