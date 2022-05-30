import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import SectionTitle from '../components/common/SectionTitle';
import SnsLinkItem from '../components/biography/SnsLinkItem';
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
                        <p className="text-center py-4 text-xl">
                            拠鳥 きまゆ<br />
                            (よるど きまゆ)<br />
                        </p>
                        <ul className="py-4 flex space-x-4 justify-center">
                            <li><SnsLinkItem name="YouTube" url={externalLink.youtube} /></li>
                            <li><SnsLinkItem name="Twitter" url={externalLink.twitter} /></li>
                            <li><SnsLinkItem name="TikTok" url={externalLink.tiktok} /></li>
                        </ul>
                        <p className="text-sm p-4 leading-6">
                            「きみの背中を押す歌を届ける。」を掲げ、オリジナル曲はRock中心に活動。<br />
                            「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。<br />
                            2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。<br />
                            歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。<br />
                        </p>
                        <ul className="leading-6 list-inside list-disc">
                            <li>2020-10-10 1st Single Penguin Novaリリースと同時に活動開始</li>
                            <li>2021-04-10 9か月連続リリース企画 #nova_next 開始</li>
                            <li>2021-10-24 3D お 披 露</li>
                            <li>2021-12-28 #nova_next 完結</li>
                            <li>2022-04-24 初のM3 参加、1st EP sparklerをリリース</li>
                        </ul>
                    </section>

                    <section>
                        <SectionTitle text="Live/Event" />
                        <ul className="leading-6 list-inside list-disc">
                            <li>
                                2020-11-02 #ぶいっと
                            </li>
                            <li>
                                2020-12-04 エンタス忘年会
                            </li>
                            <li>
                                2020-12-11 #ぶいっと
                            </li>
                            <li>
                                2021-07-31 VirtuaROCK FEST.vol.1
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/Kve3pP-KSek" target="_blank" rel="noopener noreferrer">アーカイブ</a></span>
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/VH0s6ngrVR4" target="_blank" rel="noopener noreferrer">拠鳥きまゆ出演部分ダイジェスト</a></span>
                            </li>
                            <li>
                                2021-08-07 VirtuaDive
                            </li>
                            <li>
                                2021-11-20 #ぶいじゃむ vol.1
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/57bW0nKoOOo" target="_blank" rel="noopener noreferrer">アーカイブ</a></span>
                            </li>
                            <li>2021-12-31 エンタス大晦日</li>
                        </ul>
                    </section>
                    <section>
                        <SectionTitle text="Collaboration" />
                        <ul className="leading-6 list-inside list-disc">
                            <li>
                                2021-04-01 #ぶいっと Bloomer 歌唱 
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/ZVsIPmfkWAg" target="_blank" rel="noopener noreferrer">Music video</a></span>
                            </li>
                            <li>
                                2021-05-21 #ぶいっとコンピ セイメイトリガー 歌唱 
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/CcvQX-tCBco" target="_blank" rel="noopener noreferrer">Music video</a></span>
                            </li>
                            <li>
                                2021-06-08 blue magic garden ワンダーラスト・アルカディア 動画・ハンドライティング 
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/C0SHjl6xZLw" target="_blank" rel="noopener noreferrer">Music video</a></span>
                            </li>
                            <li>
                                2021-07-25 VirtuaROCK FEST. vol.1 Visibility 歌唱
                            </li>
                            <li>
                                2021-11-08 竜乃エナジー Rainy ハンドライティング 
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/ZZ548wxw_e4" target="_blank" rel="noopener noreferrer">Music video</a></span>
                            </li>
                            <li>
                                2021-12-05 百鬼夜行 ATTRACTORS 歌唱
                                <span className="mx-2 underline text-indigo-800"><a href="https://youtu.be/YePQNFVRHFk" target="_blank" rel="noopener noreferrer">Music video</a></span>
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
            <PageFooter />
        </>
    )
};

export default Biography;