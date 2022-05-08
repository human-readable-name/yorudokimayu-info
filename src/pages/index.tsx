import type { NextPage } from 'next'
import Head from 'next/head'
import LinkCard from '../components/common/LinkCard';
import PageFooter from '../components/common/PageFooter';
import PageTitle from '../components/common/PageTitle';
import externalLink from '../constants/externalLink';
import path from '../constants/path';

const Home: NextPage = () => {
  return (
    <div className={"px-8"/*styles.container*/}>
      <Head>
        <title>拠鳥きまゆ非公式アーティストページ</title>
        <meta name="description" content="拠鳥きまゆ非公式アーティストページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16 flex flex-col justify-center items-center">
        <PageTitle text="YorudoKiyamu.info" />

        <p className="my-16 text-xl">
          拠鳥きまゆ非公式アーティストページ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <LinkCard title="Profile" caption="アーティスト紹介・出演歴" url={path.profile} />
          <LinkCard title="Discograpy" caption="楽曲リリース情報" url={path.discography} />
          <LinkCard title="Goods" caption="Booth (外部リンク)" url={externalLink.booth} />
          <LinkCard title="Fan Community" caption="pixiv FANBOX (外部リンク)" url={externalLink.fanbox} />
        </div>
      </main>

      <PageFooter />
    </div>
  )
}

export default Home
