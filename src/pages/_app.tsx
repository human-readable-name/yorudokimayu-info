import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
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
    </Head>
    <DefaultSeo 
        title="拠鳥きまゆ非公式アーティストページ"
        description="VSinger拠鳥きまゆのアーティスト情報・出演歴・楽曲情報"
        openGraph={
            {
                type: "website",
                title: "拠鳥きまゆ非公式アーティストページ",
                description: "VSinger拠鳥きまゆのアーティスト情報・出演歴・楽曲情報",
                site_name: "拠鳥きまゆ非公式アーティストページ",
                locale: "ja_JP",
            }
        }
    />
    <Component {...pageProps} />
  </>
};

export default App;
