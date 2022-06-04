export type EventLink = {
    name: string;
    url: string;
};

export type EventHistory = {
    date: Date;
    name: string;
    links?: EventLink[];
};