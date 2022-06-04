import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import { collaborations } from '../entities/biography/Collaboration';
import { eventHistories } from '../entities/biography/EventHistory';

import Index, {Props as BiographyProps} from '../components/biography/Index';
import { Meta } from '../entities/common/Meta';

export const getStaticProps = async () => {
    return {
        props: {
            meta: {
                title: "拠鳥きまゆ Biography",
                description: "アーティスト情報・ライブ出演歴・コラボ情報",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
            } as Meta,
            biographyProps: {
                profile: {
                    name: "拠鳥 きまゆ",
                    nameCaption: "よるど きまゆ",
                    introductions: [
                        "「きみの背中を押す歌を届ける。」を掲げ、オリジナル曲はRock中心に活動。",
                        "「夢はPENGUIN RESEARCHと対バン&楽曲提供」を公言しており、自身のYouTubeチャネルにはPENGUIN RESEARCHおよびkemuの楽曲のカバーを投稿している。",
                        "2021年には9か月連続リリース企画#nova_nextを実施し、期間中13曲をリリース。",
                        "歌唱のほかに動画・ハンドライティング・作詞・VTuberロゴデザインなど活動は多岐にわたる。",
                    ],
                    activities: [
                        "2020-10-10 1st Single Penguin Novaリリースと同時に活動開始",
                        "2021-04-10 9か月連続リリース企画 #nova_next 開始",
                        "2021-10-24 3D お 披 露",
                        "2021-12-28 #nova_next 完結",
                        "2022-04-24 初のM3 参加、1st EP sparklerをリリース",
                    ],
                },
                eventHistories: eventHistories,
                collaborations: collaborations,
            } as BiographyProps,
        }
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const BiographyPage: NextPage<Props> = ({meta, biographyProps}) => {
    return (
        <>
            <PageMeta meta={meta} />
            <PageHeader />
            <Index {...biographyProps} />
            <PageFooter />
        </>
    )
};

export default BiographyPage;