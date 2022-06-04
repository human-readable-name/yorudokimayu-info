import React from "react";
import LinkCard from './LinkCard';
import PageTitle from '../../components/common/PageTitle';
import SectionTitle from '../../components/common/SectionTitle';
import { ContentLink } from "../../entities/home/ContentLink";

export type Props = {
    siteDescription: string;
    links: ContentLink[];
};

const Index: React.FC<Props> = ({siteDescription, links}) => {
    return <main className="flex flex-col items-center align-center m-8">
        <PageTitle text="拠鳥きまゆアーティスト情報まとめ" />
        <section>
            <SectionTitle text="About this site" />
            <p className="p8">
                {siteDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {links.map((contentLink, index) => <LinkCard contentLink={contentLink} key={index} />)}
            </div>
        </section>
    </main>
};

export default Index;