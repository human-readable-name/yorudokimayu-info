import type { NextPage, InferGetStaticPropsType } from 'next';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageMeta from '../components/common/PageMeta';
import { productSummaries } from '../entities/discography/Product';

import Index, {Props as DiscographyProps} from '../components/discography/Index';
import { Meta } from '../entities/common/Meta';

export const getStaticProps = async () => {
    return {
        props: {
            meta: {
                title: "拠鳥きまゆ Discography",
                description: "楽曲リリース情報やMVなど関連情報へのリンク",
                siteName: "拠鳥きまゆアーティスト情報まとめ",
                locale: "ja_JP",
            } as Meta,
            discographyProps: {
                productSummaries: productSummaries,
            } as DiscographyProps,
        },
    };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const DiscographyPage: NextPage<Props> = ({meta, discographyProps}) => {
    return (
        <>
            <PageMeta meta={meta} />
            <PageHeader />
            <Index {...discographyProps} />
            <PageFooter />
        </>
    );
};

export default DiscographyPage;