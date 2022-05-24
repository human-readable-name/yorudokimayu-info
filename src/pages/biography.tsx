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
                        <p className="text-center py-4">
                            拠鳥きまゆ<br />
                            (よるど きまゆ)<br />
                        </p>
                        <ul className="py-4 flex space-x-4 justify-center">
                            <li className="p-2 hover:border-indigo-800 hover:text-indigo-800 border border-solid rounded-lg"><a href={externalLink.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            <li className="p-2 hover:border-indigo-800 hover:text-indigo-800 border border-solid rounded-lg"><a href={externalLink.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li className="p-2 hover:border-indigo-800 hover:text-indigo-800 border border-solid rounded-lg"><a href={externalLink.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a></li>
                        </ul>
                        <p className="text-sm p-4 leading-6">
                            「きみの背中を押す歌を届ける。」をテーマにオリジナル曲はRock中心に活動。<br />
                            「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。<br />
                            2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。<br />
                            歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。<br />
                        </p>
                        <ul className="leading-6 list-inside list-disc">
                            <li>2020-10-10 1st Single Penguin Novaリリースと同時に活動開始</li>
                            <li>2021-04-11 9か月連続リリース企画 #nova_next 開始</li>
                            <li>2021-10-24 3D お 披 露</li>
                            <li>2021-12-28 #nova_next 完結</li>
                            <li>2022-04-24 初のM3 参加、自身初の作詞に挑戦した1st EP sparklerをリリース</li>
                        </ul>
                    </section>

                    <section>
                        <SectionTitle text="Live/Event" />
                        <ul className="leading-6 list-inside list-disc">
                            <li>2020-11-02 #ぶいっと</li>
                            <li>2020-12-04 エンタス忘年会</li>
                            <li>2020-12-11 #ぶいっと</li>
                            <li>2021-07-31 VirtuaROCK FEST.vol.1</li>
                            <li>2021-08-07 VirtuaDive</li>
                            <li>2021-11-20 #ぶいじゃむ vol.1</li>
                            <li>2021-12-31 エンタス大晦日</li>
                        </ul>
                        <p className="m-4">
                            <span className="p-2 underline hover:text-indigo-800">
                                <a href="https://www.youtube.com/playlist?list=PLdeQeTiPBQGgVOJQMO1eA0FeP6gWBO7EM" target="_blank" rel="noopener noreferrer">アーカイブ・ダイジェストのYouTube再生リスト</a>
                            </span>
                        </p>
                        
                    </section>
                    <section>
                        <SectionTitle text="Collaboration" />
                        <ul className="leading-6 list-inside list-disc">
                            <li>2021-04-01 #ぶいっと Bloomer 歌唱</li>
                            <li>2021-05-21 #ぶいっとコンピ セイメイトリガー 歌唱</li>
                            <li>2021-06-08 blue magic garden ワンダーラスト・アルカディア 動画・ハンドライティング</li>
                            <li>2021-07-25 VirtuaROCK FEST. vol.1 Visibility 歌唱</li>
                            <li>2021-12-05 百鬼夜行 ATTRACTORS 歌唱</li>
                        </ul>
                    </section>
                </div>
            </main>
            <PageFooter />
        </>
    )
};

export default Biography;