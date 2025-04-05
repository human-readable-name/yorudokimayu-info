import React from "react";
import DateOfRleaseLabel from "./DateOfReleaseLabel";
import GenreLabel from "./GenreLabel";
import BorderLinkButton from "./BorderLinkButton";
import MvLinkButton from "./MvLinkButton";
import { ProductSummary } from "../../services/discography/ProductService"; 
import TrackList from "./TrackList";

type Props = {
    productSummary: ProductSummary;
};

const ProductCard: React.FC<Props> = ({productSummary}) => {
    return <>
        <article className="p-4">
            <h3 className="text-large font-bold">{productSummary.name}</h3>
            <div className="flex space-x-4">
                <DateOfRleaseLabel dateOfRelease={productSummary.dateOfRelease} />
                {productSummary.genre && <GenreLabel genre={productSummary.genre} /> }
            </div>
            { productSummary.tracks.length > 0 &&
                <div className="my-2">
                    <TrackList tracks={productSummary.tracks} />
                </div>
            }
            { productSummary.credits.length > 0 && 
                <div className="my-2">
                    <span className="text-center">Credits</span>
                    <ul>
                        {productSummary.credits.map((name, index) => <li className="text-sm" key={index}>{name}</li>)}
                    </ul>
                </div>
            }
            <p className="w-full my-2">{productSummary.description}</p>
            { productSummary.mvLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className="p-2">Music video</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.mvLinks.map((linkItem, index) => <MvLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
            { productSummary.storeLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className="p-2">Store</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.storeLinks.map((linkItem, index) => <BorderLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
            { productSummary.supplementalInformationLinks != null && productSummary.supplementalInformationLinks.length > 0 && 
                <div className="my-2 text-center">
                    <span className="p-2">Supplemental information</span>
                    <div className="grid grid-cols gap-2">
                        {productSummary.supplementalInformationLinks.map((linkItem, index) => <BorderLinkButton key={index} linkItem={linkItem} /> )}
                    </div>
                </div>
            }
        </article>
    </>
};

export default ProductCard;