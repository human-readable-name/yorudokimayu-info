import { SupportedLocale } from "../../constants/i18n";
import { ContentLink } from "../../entities/home/ContentLink";

import path from "../../constants/path";
import externalLink from "../../constants/externalLink";

const japanese: ContentLink[] = [
    { 
        title: "Biography", 
        caption: "アーティスト情報・ライブ出演歴・コラボ情報", 
        url: path.biography,
    },
    { 
        title: "Discograpy", 
        caption: "楽曲リリース情報やMVなど関連情報へのリンク", 
        url: path.discography,
    },
    { 
        title: "Twitter", 
        caption: "告知・最新情報はこちら", 
        url: externalLink.twitter,
    },
    { 
        title: "YouTube", 
        caption: "楽曲MV・メンバー限定配信", 
        url: externalLink.youtube,
    },
    { 
        title: "Store", 
        caption: "グッズ・音源を販売", 
        url: externalLink.booth,
    },
    { 
        title: "Fan community", 
        caption: "制作裏話・支援者限定情報", 
        url: externalLink.fanbox,
    },
];

const english: ContentLink[] = [
    { 
        title: "Biography", 
        caption: "Artist introduction, live performance history, etc", 
        url: path.biography,
    },
    { 
        title: "Discograpy", 
        caption: "Released songs, music videos, and other related information", 
        url: path.discography,
    },
    { 
        title: "Twitter", 
        caption: "Announcements and Updates", 
        url: externalLink.twitter,
    },
    { 
        title: "YouTube", 
        caption: "Music videos and members-only live streaming", 
        url: externalLink.youtube,
    },
    { 
        title: "Store", 
        caption: "Original goods", 
        url: externalLink.booth,
    },
    { 
        title: "Fan community", 
        caption: "Exclusive information for supporters", 
        url: externalLink.fanbox,
    },
];

export const listContentLinks = (locale: SupportedLocale): ContentLink[] => {
    switch(locale) {
        case "en": 
            return english;
        default:
            return japanese;
    }
};