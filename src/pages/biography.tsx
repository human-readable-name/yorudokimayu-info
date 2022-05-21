import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/common/SectionTitle';
import externalLink from '../constants/externalLink';

const Biography: NextPage = () => {
    return (
        <>
            <NextSeo
                title="拠鳥きまゆ Biography"
                description="アーティスト情報 ライブ・イベント出演歴"
            />
            <PageHeader />
            <main className="flex flex-col items-center m-8">
                <PageTitle text="Biography" />
                <div className="grid grid-cols-1 gap-4">
                    <section>
                        <SectionTitle text="Profile" />
                        <p className="text-center py-4">拠鳥きまゆ<br />(よるど きまゆ)</p>
                        { /* 画像 */ }

                        <ul className="py-4 flex space-x-4 justify-center">
                            <li className="hover:border-indigo-800 hover:text-indigo-800"><a href={externalLink.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            <li className="hover:border-indigo-800 hover:text-indigo-800"><a href={externalLink.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li className="hover:border-indigo-800 hover:text-indigo-800"><a href={externalLink.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
                        </ul>

                        <ul className="leading-6 list-inside list-disc">
                            <li>2020-10-10 活動開始</li>
                            <li>2021-04-11 9か月連続リリース企画 #nova_next 開始</li>
                            <li>2021-10-24 3D お 披 露</li>
                            <li>2021-12-28 #nova_next 完結</li>
                        </ul>
                    </section>

                    <section>
                        <SectionTitle text="Live/Event" />
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
        </>
    )
};

export default Biography;