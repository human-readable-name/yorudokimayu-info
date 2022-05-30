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
        title="拠鳥きまゆアーティスト情報まとめ"
        description="VSinger拠鳥きまゆのアーティスト情報・イベント出演歴・楽曲リリース"
        openGraph={
            {
                type: "website",
                title: "拠鳥きまゆアーティスト情報まとめ",
                description: "VSinger拠鳥きまゆのアーティスト情報・イベント出演歴・楽曲リリース",
                site_name: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
                images: [
                  {url: "https://kimayu.rocks/favicon.svg"},
              ],
            }
        }
    />
    <Component {...pageProps} />
  </>
};

export default App;
