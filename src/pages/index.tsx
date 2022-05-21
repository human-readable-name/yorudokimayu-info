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
                title="拠鳥きまゆ非公式アーティストページ"
                description="拠鳥きまゆ非公式アーティストページ"
            />
            <PageHeader />
            <main className="flex flex-col items-center align-center m-8">
                <PageTitle text="拠鳥きまゆ非公式アーティストページ" />
                <section>
                    <SectionTitle text="About this site" />
                    <p className="p8">
                        VSinger 拠鳥きまゆ について新しくを知った人が過去のSNSの発言やYouTube配信を辿らなくても済むように情報をまとめています。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <LinkCard title="Biography" caption="アーティスト紹介・出演歴" url={path.biography} />
                        <LinkCard title="Discograpy" caption="楽曲リリース情報" url={path.discography} />
                        <LinkCard title="Goods" caption="Booth" url={externalLink.booth} />
                        <LinkCard title="Fan Community" caption="pixiv FANBOX" url={externalLink.fanbox} />
                    </div>
                </section>
            </main>
            <PageFooter />
        </>
    )
};

export default Home;
