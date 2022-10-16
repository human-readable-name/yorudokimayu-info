import { SupportedLocale } from "../../constants/i18n";
import { NewsItem } from "../../entities/home/NewsItem";

const japanese: NewsItem[] = [
    {
        text: "2022秋M3 (2022-10-30) パンケーキキャッツ 1stEP ノンストップエモーション！ 1曲担当",
        links: [
            {name: "特設サイト", url: "https://pccs-vtuber.studio.site/"},
        ]
    },
    {
        text: "柚子花主催LIVE -Planet Station- STAGE.5 (2022-11-26) 出演予定",
        links: [
            {name: "Z-aN", url: "https://www.zan-live.com/live/detail/10251"},
        ]
    },
];

const english: NewsItem[] = [
    {
        text: "M32022Autumn (2022-10-30) pancakecats 1stEP Non-Stop Emotion!",
        links: [
            {name: "Web site", url: "https://pccs-vtuber.studio.site/"},
        ]
    },
    {
        text: "LIVE sponsored by Yuzuha -Planet Station- STAGE.5 (2022-11-26) ",
        links: [
            {name: "Z-aN", url: "https://www.zan-live.com/live/detail/10251"},
        ]
    },
];

export const listNews = (locale: SupportedLocale): NewsItem[] => {
    switch(locale) {
        case "en": 
            return english;
        default:
            return japanese;
    }
};