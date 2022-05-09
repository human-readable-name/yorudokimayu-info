import React from "react";
import DateOfRleaseLabel from "./DateOfReleaseLabel";
import GenreLabel from "./GenreLabel";
import LinkButton from "./LinkButton";
import { ProductSummary } from "../../entities/discography/Product"; 

type Props = {
    productSummary: ProductSummary;
};

const ProductCard: React.FC<Props> = ({productSummary}) => {
    return <>
        <article className="p-4">
            <h3 className="text-lg font-bold">{productSummary.name}</h3>
            <div className="flex space-x-4">
                <DateOfRleaseLabel dateOfRelease={productSummary.dateOfRelease} />
                <GenreLabel genre={productSummary.genre} />
            </div>
            <p className="w-full my-2">{productSummary.description}</p>
            <div className="grid grid-cols gap-2">
                {productSummary.links.map((linkItem, index) => <LinkButton key={index} linkItem={linkItem} /> )}
            </div>
        </article>
    </>
};

export default ProductCard;