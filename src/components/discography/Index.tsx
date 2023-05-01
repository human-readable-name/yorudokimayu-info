import React from "react";
import { ProductSummary } from "../../services/discography/ProductService"; 
import PageTitle from "../common/PageTitle";
import ProductCard from "./ProductCard";

export type Props = {
    lyricNote: string;
    productSummaries: ProductSummary[];
};

const Index: React.FC<Props> = ({lyricNote, productSummaries}) => {
    return <main className="flex flex-col items-center m-8">
        <PageTitle text="Discography" />
        <p className="text-sm ">{lyricNote}</p>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {productSummaries.map((productSummary, index) => <ProductCard key={index} productSummary={productSummary} />)}
        </div>
    </main>
};

export default Index;