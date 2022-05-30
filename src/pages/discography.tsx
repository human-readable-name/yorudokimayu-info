import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import PageFooter from '../components/common/PageFooter';
import PageHeader from '../components/common/PageHeader';
import PageTitle from '../components/common/PageTitle';
import ProductCard from '../components/discography/ProductCard';
import { productSummaries } from '../entities/discography/Product';

const Discography: NextPage = () => {
    return (
        <>
            <NextSeo
                title="拠鳥きまゆ Discography"
                description="楽曲リリース情報やMVなど関連情報へのリンク"
                openGraph={
                    {
                        type: "website",
                        title: "拠鳥きまゆ Discography",
                        description: "楽曲リリース情報やMVなど関連情報へのリンク",
                        site_name: "拠鳥きまゆアーティスト情報まとめ",
                        locale: "ja_JP",
                        images: [
                            {url: "https://kimayu.rocks/share.png"},
                        ],
                    }
                }
                additionalMetaTags={
                  [
                      {name: "keywords", content: "拠鳥きまゆ,KimayuYorudo,VSinger,VTuber,オリジナル曲,Original songs", },
                  ]
                }
            />
            <PageHeader />
            <main className="flex flex-col items-center m-8">
                <PageTitle text="Discography" />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {productSummaries.map((productSummary, index) => <ProductCard key={index} productSummary={productSummary} />)}
                </div>
            </main>
            <PageFooter />
        </>
    );
};

export default Discography;