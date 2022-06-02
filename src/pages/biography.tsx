import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/common/SectionTitle';
import EventHistoryCard from '../components/biography/EventHistoryCard';
import SnsLinkItem from '../components/biography/SnsLinkItem';
import externalLink from '../constants/externalLink';
import { collaborations } from '../entities/biography/Collaboration';
import { eventHistories } from '../entities/biography/EventHistory';
import CollaborationCard from '../components/biography/CollaborationCard';
import OutlookTweet from '../components/biography/OutlookTweet';

const Biography: NextPage = () => {
    return (
        <>
            <NextSeo
                title="拠鳥きまゆ Biography"
                description="アーティスト情報・ライブ出演歴・コラボ情報"
                openGraph={
                    {
                        type: "website",
                        title: "拠鳥きまゆ Biography",
                        description: "アーティスト情報・ライブ出演歴・コラボ情報",
                        site_name: "拠鳥きまゆアーティスト情報まとめ",
                        locale: "ja_JP",
                        images: [
                            {url: "https://kimayu.rocks/share.png"},
                        ],
                    }
                }
            />
            <PageHeader />
            <main className="flex flex-col items-center m-8">
                <PageTitle text="Biography" />
                <div className="grid grid-cols-1 gap-4">
                    <section>
                        <SectionTitle text="Profile" />
                        <p className="text-center py-4 text-xl">
                            拠鳥 きまゆ<br />
                            (よるど きまゆ)<br />
                        </p>
                        <div className="flex justify-center">
                            <OutlookTweet />
                        </div>
                        <ul className="py-4 flex space-x-4 justify-center">
                            <li><SnsLinkItem name="YouTube" url={externalLink.youtube} /></li>
                            <li><SnsLinkItem name="Twitter" url={externalLink.twitter} /></li>
                            <li><SnsLinkItem name="TikTok" url={externalLink.tiktok} /></li>
                        </ul>
                        <p className="text-sm p-4 leading-6">
                            「きみの背中を押す歌を届ける。」を掲げ、オリジナル曲はRock中心に活動。<br />
                            「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。<br />
                            2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。<br />
                            歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。<br />
                        </p>
                        <ul className="leading-6 list-inside list-none">
                            <li>2020-10-10 1st Single Penguin Novaリリースと同時に活動開始</li>
                            <li>2021-04-10 9か月連続リリース企画 #nova_next 開始</li>
                            <li>2021-10-24 3D お 披 露</li>
                            <li>2021-12-28 #nova_next 完結</li>
                            <li>2022-04-24 初のM3 参加、1st EP sparklerをリリース</li>
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
            <PageFooter />
        </>
    )
};

export default Biography;