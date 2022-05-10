import type { NextPage } from 'next';
import Head from 'next/head';
import LinkCard from '../components/common/LinkCard';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import externalLink from '../constants/externalLink';
import path from '../constants/path';

const Home: NextPage = () => {
    return (
        <div className={"px-8"}>
            <Head>
                <title>拠鳥きまゆ非公式アーティストページ</title>
                <meta name="description" content="拠鳥きまゆ非公式アーティストページ" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            
            <PageHeader />
            <main className="min-h-screen flex flex-col items-center">
                <PageTitle text="拠鳥きまゆ非公式アーティストページ" />

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <LinkCard title="Biography" caption="アーティスト紹介・出演歴" url={path.biography} />
                    <LinkCard title="Discograpy" caption="楽曲リリース情報" url={path.discography} />
                    <LinkCard title="Goods" caption="Booth" url={externalLink.booth} />
                    <LinkCard title="Fan Community" caption="pixiv FANBOX" url={externalLink.fanbox} />
                </div>
            </main>
            <PageFooter />
        </div>
    )
};

export default Home;
