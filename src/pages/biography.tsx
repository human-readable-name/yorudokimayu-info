import type { NextPage } from 'next';
import Head from 'next/head';
import PageFooter from '../components/common/PageFooter';
import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/common/SectionTitle';
import externalLink from '../constants/externalLink';

const Biography: NextPage = () => {
    return (
        <div className={"px-8"}>
            <Head>
                <title>拠鳥きまゆ Biography</title>
                <meta name="description" content="拠鳥きまゆ Biography" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen py-16 flex flex-col justify-center items-center">
                <PageTitle text="Biography" />
                <div className="grid grid-cols-1 gap-4">
                    <section>
                        <SectionTitle text="Profile" />
                        拠鳥きまゆ (よるど きまゆ)
                        { /* 画像 */ }
                        <p>
                            2020-10-10デビュー
                        </p>
                        <ul className="flex space-x-4">
                            <li className="hover:border-indigo-800 hover:text-indigo-800"><a href={externalLink.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li className="hover:border-indigo-800 hover:text-indigo-800"><a href={externalLink.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        </ul>
                    </section>

                    <section>
                        <SectionTitle text="Live Act." />
                        <ul className="leading-6 list-inside list-disc">
                            <li>2020-11-03 #ぶいっと</li>
                            <li>2020-12-04 エンタス忘年会</li>
                            <li>2020-12-11 #ぶいっと</li>
                            <li>2021-07-31 VirtuaROCK FEST.vol.1</li>
                            <li>2021-11-20 #ぶいじゃむ vol.1</li>
                            <li>2021-12-31 エンタス大晦日</li>
                        </ul>
                    </section>
                </div>
            </main>
            <PageFooter />
        </div>
    )
};

export default Biography;