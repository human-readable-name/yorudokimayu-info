import type { NextPage } from 'next';
import Head from 'next/head';
import PageFooter from '../components/common/PageFooter';
import PageTitle from '../components/common/PageTitle';
import ProductCard from '../components/discography/ProductCard';
import { ProductSummary } from '../entities/discography/Product';

const productSummaries: ProductSummary[] = [
    {
        id: "1st-ep",
        name: "sparkler",
        kind: "EP",
        genre: "Alternative",
        dateOfRelease: new Date("2022-04-24"),
        description: "1st EP M3-2022春",
        links: [
            {name: "Crossfade Demo", url: "https://youtu.be/FmVb7r21Z-M"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3756256"}
        ]
    },
    {
        id: "14th-single",
        name: "うたかたとかして",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-28"),
        description: "14th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/7qE6cdZz"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3528690"},
        ]
    },
    {
        id: "13th-single",
        name: "KARISOME BREAKER",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-12-10"),
        description: "13th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/mM5ds6zM"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3492316"},
        ]
    },
    {
        id: "12th-single",
        name: "レオニズの降る夜に",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-11-10"),
        description: "12th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/sd6XHQxB"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3419090"},
        ]
    },
    {
        id: "11th-single",
        name: "PENGUIN EMERGENCE",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-10-10"),
        description: "11th single 活動開始1周年記念",
        links: [
            {name: "TuneCore", url: "https://linkco.re/D53C67Bu"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3419079"},
        ]
    },
    {
        id: "10th-single",
        name: "Memorable",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-10-01"),
        description: "10th Single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/H9494e5u"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3318455"},
        ]
    },
    {
        id: "9th-single",
        name: "境界のアイリス",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-09-10"),
        description: "9th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/c78bSYh9"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3265250"},
        ]
    },
    {
        id: "8th-single",
        name: "ロンリーディーバ",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-08-10"),
        description: "8th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/pCpgzUMU"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3185868"},
        ]
    },
    {
        id: "7th-single",
        name: "Dear My Enemy",
        kind: "Single",
        genre: "Alternative",
        dateOfRelease: new Date("2021-07-25"),
        description: "7th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/AvPtrznD"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3143568"},
        ]
    },
    {
        id: "6th-single",
        name: "希求モーニング",
        kind: "Single",
        genre: "Electronic",
        dateOfRelease: new Date("2021-07-10"),
        description: "6th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/0Rz8ACCd"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107770"}
        ]
    },
    {
        id: "5th-single",
        name: "茜色の公園で",
        kind: "Single",
        genre: "Pop",
        dateOfRelease: new Date("2021-06-10"),
        description: "5th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/HY6DrPGd"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107757"}
        ]
    },
    {
        id: "4th-single",
        name: "RULER ",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-05-10"),
        description: "4th single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/vRVnqU5v"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107710"}
        ]
    },
    {
        id: "3rd-single",
        name: "カラの鼓動はソラになる",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-25"),
        description: "3rd single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/eGzYDu1Y"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107732"}
        ]
    },
    {
        id: "2nd-single",
        name: "真夜中メロウライン",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2021-04-11"),
        description: "2nd single",
        links: [
            {name: "TuneCore", url: "https://linkco.re/NQZabT0H"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107691"}
        ]
    },
    {
        id: "1st-single",
        name: "Penguin Nova",
        kind: "Single",
        genre: "Rock",
        dateOfRelease: new Date("2020-10-10"),
        description: "1st single デビュー曲",
        links: [
            {name: "TuneCore", url: "https://linkco.re/XRHzUnrA"},
            {name: "Booth", url: "https://461okmy.booth.pm/items/3107608"}
        ]
    },
];

const Discography: NextPage = () => {
    return (
        <div className={"px-8"}>
            <Head>
                <title>拠鳥きまゆ Discography</title>
                <meta name="description" content="拠鳥きまゆ Discography" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="min-h-screen py-16 flex flex-col justify-center items-center">
                <PageTitle text="Discography" />
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {productSummaries.map((productSummary, index) => <ProductCard key={index} productSummary={productSummary} />)}
                </div>
                <PageFooter />
            </main>
        </div>
    );
};

export default Discography;