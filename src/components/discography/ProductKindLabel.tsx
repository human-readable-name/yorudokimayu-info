import React from "react";
import { ProductKind } from "../../entities/discography/Product";

type Props = {
    productKind: ProductKind;
};

const ProductKindLabel: React.FC<Props> = ({productKind}) => {
    return <span className="bg-slate-200 text-base px-2">{productKind}</span>
};

export default ProductKindLabel;