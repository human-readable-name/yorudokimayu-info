import React from "react";
import DateOfRleaseLabel from "./DateOfRleaseLabel";
import ProductKindLabel from "./ProductKindLabel";
import { ProductSummary } from "../../entities/discography/Product"; 


type Props = {
    productSummary: ProductSummary;
};

const ProductCard: React.FC<Props> = ({productSummary}) => {
    return <>
        <article>
            <h3>{productSummary.name}</h3>
            <div className="flex space-x-4">
                <DateOfRleaseLabel dateOfRelease={productSummary.dateOfRelease} />
                <ProductKindLabel productKind={productSummary.kind} />
            </div>
        </article>
    </>
};

export default ProductCard;