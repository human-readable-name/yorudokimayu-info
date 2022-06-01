export type EventLink = {
    name: string;
    url: string;
};

export type EventHistory = {
    date: Date;
    name: string;
    links?: EventLink[];
};

export const eventHistories: EventHistory[] = [
    {
        date: new Date("2020-11-02"),
        name: "#ぶいっと",
    },
    {
        date: new Date("2020-12-04"),
        name: "エンタス忘年会",
    },
    {
        date: new Date("2020-12-11"),
        name: "#ぶいっと",
    },
    {
        date: new Date("2021-07-31"),
        name: "VirtuaROCK FEST.vol.1",
        links: [
            {name: "アーカイブ", url: "https://youtu.be/Kve3pP-KSek"},
            {name: "拠鳥きまゆ出演ダイジェスト", url: "https://youtu.be/VH0s6ngrVR4"},
        ],
    },
    {
        date: new Date("2021-08-07"),
        name: "VirtuaDive",
    },
    {
        date: new Date("2021-11-20"),
        name: "#ぶいじゃむ vol.1",
        links: [
            {name: "アーカイブ", url: "https://youtu.be/57bW0nKoOOo"},
        ],
    },
    {
        date: new Date("2021-12-31"),
        name: "エンタス大晦日"
    },
];