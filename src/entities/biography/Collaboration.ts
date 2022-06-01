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

export const collaborations: Collaboration[] = [
    {
        date: new Date("2021-04-01"),
        product: { 
            name: "Bloomer",
            artist: "#ぶいっと",
        },
        partOfTheWork: "歌唱",
        link: {name: "Music video", url: "https://youtu.be/ZVsIPmfkWAg"},
    },
    {
        date: new Date("2021-05-21"),
        product: { 
            name: "#ぶいっとコンピ",
            artist: "",
        },
        partOfTheWork: "Tr11 セイメイトリガー 歌唱",
        link: {name: "Music video", url: "https://youtu.be/CcvQX-tCBco"},
    },
    {
        date: new Date("2021-06-08"),
        product: { 
            name: "ワンダーラスト・アルカディア",
            artist: "blue magic garden",
        },
        partOfTheWork: "MV制作・ハンドライティング",
        link: {name: "Music video", url: "https://youtu.be/C0SHjl6xZLw"},
    },
    {
        date: new Date("2021-07-25"),
        product: { 
            name: "VirtuaROCK FEST. vol.1",
            artist: "",
        },
        partOfTheWork: "Tr1 Visibility 歌唱",
    },
    {
        date: new Date("2021-11-08"),
        product: { 
            name: "Rainy",
            artist: "竜乃エナジー",
        },
        partOfTheWork: "MVハンドライティング ",
        link: {name: "Music video", url: "https://youtu.be/ZZ548wxw_e4"},
    },
    {
        date: new Date("2021-12-05"),
        product: { 
            name: "ATTRACTORS",
            artist: "カクレゴ",
        },
        partOfTheWork: "歌唱",
        link: {name: "Music video", url: "https://youtu.be/YePQNFVRHFk"},
    },
];