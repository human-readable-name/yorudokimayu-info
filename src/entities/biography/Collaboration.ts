export type CollaborationLink = {
    name: string;
    url: string;
};

export type CollaborationProduct = {
    name: string;
    artist: string;
}

export type Collaboration = {
    date: Date;
    product: CollaborationProduct;
    partOfTheWork: string;
    link?: CollaborationLink;
};