export type NewsItemLink = {
    name: string;
    url: string;
}

export type NewsItem = {
    text: string;
    links?: NewsItemLink[];
};
