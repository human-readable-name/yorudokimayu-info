import React from "react";
import { ProductSummary } from "../../services/discography/ProductService"; 
import PageTitle from "../common/PageTitle";
import ProductCard from "./ProductCard";

export type Props = {
    productSummaries: ProductSummary[];
};

const Index: React.FC<Props> = ({productSummaries}) => {
    return <main className="flex flex-col items-center m-8">
        <PageTitle text="Discography" />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {productSummaries.map((productSummary, index) => <ProductCard key={index} productSummary={productSummary} />)}
        </div>
    </main>
};

export default Index;