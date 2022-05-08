import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LinkCard from '../components/common/LinkCard';
import PageTitle from '../components/common/PageTitle';

const Home: NextPage = () => {
  return (
    <div className={"px-8"/*styles.container*/}>
      <Head>
        <title>拠鳥きまゆ非公式アーティストページ</title>
        <meta name="description" content="拠鳥きまゆ非公式アーティストページ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"min-h-screen py-16 flex flex-col justify-center items-center"/*styles.main*/}>
        <PageTitle text="YorudoKiyamu.info" />

        <p className={"my-16 text-xl"}>
          拠鳥きまゆ非公式アーティストページ
        </p>

        <div className={"grid grid-cols-1 md:grid-cols-2"}>
          <LinkCard title="Profile" caption="アーティスト紹介・ライブ出演歴" url="/profile" />
          <LinkCard title="Discograpy" caption="楽曲リリース情報" url="/discography" />
          <LinkCard title="Goods" caption="Booth (外部リンク)" url="https://461okmy.booth.pm/" />
          <LinkCard title="Fan Community" caption="pixiv FANBOX(外部リンク)" url="https://penguinn0va.fanbox.cc/" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
