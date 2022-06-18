import React from "react";
import CollaborationCard from "./CollaborationCard";
import EventHistoryCard from "./EventHistoryCard";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import OutlookTweet from "./OutlookTweet";
import SnsLinkItem from "./SnsLinkItem";

import { Profile } from "../../entities/biography/Profile";

import externalLink from "../../constants/externalLink";
import { EventHistory } from "../../entities/biography/EventHistory";
import { Collaboration } from "../../entities/biography/Collaboration";

export type Props = {
    profile: Profile;
    eventHistories: EventHistory[];
    collaborations: Collaboration[];
}

const Index: React.FC<Props> = ({profile, eventHistories, collaborations}: Props) => {
    return <main className="flex flex-col items-center m-8">
        <PageTitle text="Biography" />
        <div className="grid grid-cols-1 gap-4">
            <section>
                <SectionTitle text="Profile" />
                <p className="text-center py-4 text-xl">
                    {profile.name}<br />
                    {profile.nameCaption}<br />
                </p>
                <div className="flex justify-center">
                    <OutlookTweet />
                </div>
                <ul className="py-4 flex space-x-4 justify-center">
                    <li key="sns-link-youtube"><SnsLinkItem name="YouTube" url={externalLink.youtube} /></li>
                    <li key="sns-link-twitter"><SnsLinkItem name="Twitter" url={externalLink.twitter} /></li>
                    <li key="sns-link-tiktok"><SnsLinkItem name="TikTok" url={externalLink.tiktok} /></li>
                </ul>
                <p className="text-sm p-4 leading-6 whitespace-pre-wrap">
                    { profile.introductions.join("\n") }
                </p>
                <ul className="leading-6 list-inside list-none">
                    { profile.activities.map((act, index) => {
                        return <li key={index}>{act}</li>
                    })}
                </ul>
            </section>
            

            <section>
                <SectionTitle text="Live/Event" />
                <div className="grid divide-y">
                    { eventHistories.map((eventHistory, index) => <EventHistoryCard eventHistory={eventHistory} key={index}/>)}
                </div>
            </section>
            <section>
                <SectionTitle text="Collaboration/Works" />
                <div className="grid divide-y">
                    { collaborations.map((collaboration, index) => <CollaborationCard collaboration={collaboration} key={index} />)}
                </div>
            </section>
        </div>
    </main>
};

export default Index;