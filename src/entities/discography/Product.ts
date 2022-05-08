export type ProductKind = "Single" | "EP";

export type ProductSummary = {
    id: string;
    name: string;
    kind: ProductKind;
    dateOfRelease: Date;
};

 