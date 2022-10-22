import React from "react";
import NewsCard from "./NewsCard";
import LinkCard from './LinkCard';
import PageTitle from '../../components/common/PageTitle';
import SectionTitle from '../../components/common/SectionTitle';
import { ContentLink } from "../../services/home/ContentLinkService";
import { NewsItem } from "../../services/home/NewsService";

export type Props = {
    siteName: string;
    siteDescription: string;
    news: NewsItem[];
    links: ContentLink[];
};

const Index: React.FC<Props> = ({siteName, siteDescription, news, links}) => {
    return <main className="flex flex-col items-center align-center m-8">
        <PageTitle text={siteName} />
        <section>
            <SectionTitle text="About this site" />
            <p className="p8">
                {siteDescription}
            </p>
            <SectionTitle text="News" />
            <div className="grid divide-y">
                {news.map((newItem, index) => <NewsCard newsItem={newItem} key={index} />)}
            </div>
            <SectionTitle text="Table of contents" />
            <div className="grid grid-cols-1 md:grid-cols-2">
                {links.map((contentLink, index) => <LinkCard contentLink={contentLink} key={index} />)}
            </div>
        </section>
    </main>
};

export default Index;