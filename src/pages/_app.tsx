import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { generateDefaultSeo } from 'next-seo/pages';
import GoogleTagManager from '../components/common/GoogleTagManager';
import { googleTagManagerId } from '../constants/gtm';


const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId}
    />
    <Head>
        <meta	name="viewport"	content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        {generateDefaultSeo({
            defaultTitle: "拠鳥きまゆアーティスト情報まとめ",
            description: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
            openGraph: {
                type: "website",
                title: "拠鳥きまゆアーティスト情報まとめ",
                description: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
                images: [
                    { url: "https://kimayu.rocks/share.png" },
                ],
            },
        })}
    </Head>
    <Component {...pageProps} />
  </>
};

export default App;
