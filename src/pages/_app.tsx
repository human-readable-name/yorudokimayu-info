import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
				<meta	name="viewport"	content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultSeo 
        title="拠鳥きまゆ非公式アーティストページ"
        description="拠鳥きまゆ非公式アーティストページ"
        openGraph={
            {
                type: "website",
                title: "拠鳥きまゆ非公式アーティストページ",
                description: "拠鳥きまゆ非公式アーティストページ",
                site_name: "拠鳥きまゆ非公式アーティストページ",
                locale: "ja_JP",
            }
        }
        additionalMetaTags={
          [
              {name: "keywords", content: "拠鳥きまゆ,KimayuYorudo,VSinger,VTuber", },
          ]
        }
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
