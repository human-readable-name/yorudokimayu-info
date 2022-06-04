import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import Index, {Props as HomeProps} from '../components/home/Index';
import externalLink from '../constants/externalLink';
import path from '../constants/path';
import { Meta } from '../entities/common/Meta';

export const getStaticProps = async () => {
    return {
        props: {
            meta: {
                title: "拠鳥きまゆアーティスト情報まとめ",
                description: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
            } as Meta,
            homeProps: {
                siteDescription: "VSinger拠鳥きまゆのアーティスト情報・ライブ出演歴・コラボ情報・楽曲情報をまとめています",
                links: [
                    { 
                        title: "Biography", 
                        caption: "アーティスト情報・ライブ出演歴・コラボ情報", 
                        url: path.biography,
                    },
                    { 
                        title: "Discograpy", 
                        caption: "楽曲リリース情報やMVなど関連情報へのリンク", 
                        url: path.discography,
                    },
                    { 
                        title: "Twitter", 
                        caption: "告知・最新情報はこちら", 
                        url: externalLink.twitter,
                    },
                    { 
                        title: "YouTube", 
                        caption: "楽曲MV・メンバー限定配信", 
                        url: externalLink.youtube,
                    },
                    { 
                        title: "Store", 
                        caption: "グッズ・音源を販売", 
                        url: externalLink.booth,
                    },
                    { 
                        title: "Fan community", 
                        caption: "制作裏話・支援者限定情報", 
                        url: externalLink.fanbox,
                    },
                ],
            } as HomeProps,
        },
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<Props> = ({meta, homeProps}: Props) => {
    return (
        <>
            <PageMeta meta={meta}/>
            <PageHeader />
            <Index {...homeProps} />
            <PageFooter />
        </>
    )
};

export default HomePage;
