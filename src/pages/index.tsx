import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import LinkCard from '../components/common/LinkCard';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/common/SectionTitle';
import externalLink from '../constants/externalLink';
import path from '../constants/path';

const Home: NextPage = () => {
    return (
        <>
            <NextSeo
                title="拠鳥きまゆアーティスト情報まとめ"
                description="VSinger拠鳥きまゆのアーティスト情報・出演歴・楽曲情報"
            />
            <PageHeader />
            <main className="flex flex-col items-center align-center m-8">
                <PageTitle text="拠鳥きまゆアーティスト情報まとめ" />
                <section>
                    <SectionTitle text="About this site" />
                    <p className="p8">
                        VSinger拠鳥きまゆのアーティスト情報・出演歴・楽曲情報をまとめています
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <LinkCard title="Biography" caption="アーティスト紹介・出演歴" url={path.biography} />
                        <LinkCard title="Discograpy" caption="楽曲リリース情報" url={path.discography} />
                        <LinkCard title="Twitter" caption="告知・最新情報はこちら" url={externalLink.twitter} />
                        <LinkCard title="YouTube" caption="楽曲MV・メンバー限定配信" url={externalLink.youtube} />
                        <LinkCard title="Store" caption="グッズ・音源を販売" url={externalLink.booth} />
                        <LinkCard title="Fan community" caption="制作裏話・支援者限定情報" url={externalLink.fanbox} />
                    </div>
                </section>
            </main>
            <PageFooter />
        </>
    )
};

export default Home;
