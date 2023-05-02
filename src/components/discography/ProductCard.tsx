import React from "react";
import DateOfRleaseLabel from "./DateOfReleaseLabel";
import GenreLabel from "./GenreLabel";
import BorderLinkButton from "./BorderLinkButton";
import FilledLinkButton from "./FilledLinkButton";
import { ProductSummary } from "../../services/discography/ProductService"; 
import { FontSize, Padding } from "../../constants/tailwind";

type Props = {
    productSummary: ProductSummary;
};

const ProductCard: React.FC<Props> = ({productSummary}) => {
    return <>
        <article className={`${Padding.Middle}`}>
            <h3 className={`${FontSize.ProductName} font-bold`}>{productSummary.name}</h3>
            <div className="flex space-x-4">
                <DateOfRleaseLabel dateOfRelease={productSummary.dateOfRelease} />
                <GenreLabel genre={productSummary.genre} />
            </div>
            <div className="my-2">
                { productSummary.credits.length > 0 && 
                    <ul>
                        {productSummary.credits.map((name, index) => <li className="text-sm" key={index}>{name}</li>)}
                    </ul>
                }
                <p className="w-full my-2">{productSummary.description}</p>
            </div>
            { productSummary.mvLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className={`${Padding.Small}`}>Music video</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.mvLinks.map((linkItem, index) => <FilledLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
            { productSummary.storeLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className={`${Padding.Small}`}>Store</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.storeLinks.map((linkItem, index) => <BorderLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
            { productSummary.supplementalInformationLinks != null && productSummary.supplementalInformationLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className={`${Padding.Small}`}>Supplemental information</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.supplementalInformationLinks.map((linkItem, index) => <BorderLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
        </article>
    </>
};

export default ProductCard;