import { SupportedLocale } from "../../constants/i18n";
import path from "../../constants/path";
import externalLink from "../../constants/externalLink";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { ContentLink } from "./ContentLinkService";

class ContentLinkMaster {
    private title: TranslatableValues;
    private caption: TranslatableValues;
    private url: string;
    constructor(props: {
        title: TranslatableValues,
        caption: TranslatableValues,
        url: string,
    }) {
        this.title = props.title;
        this.caption = props.caption;
        this.url = props.url;
    }
    getContentLink(locale: SupportedLocale): ContentLink {
        return {
            title: this.title.getLocalizedValue(locale),
            caption: this.caption.getLocalizedValue(locale),
            url: this.url,
        }
    }
}

const contentLinkMasterData: ContentLinkMaster[] = [
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "Biography"],
            ["en", "Biography"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "アーティスト情報・ライブ出演歴・コラボ情報"],
            ["en", "Artist introduction, live performance history, etc"],
        ]), 
        url: path.biography,
    }),
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "Discograpy",],
            ["en", "Discograpy"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "楽曲リリース情報やMVなど関連情報へのリンク"],
            ["en", "Released songs, music videos, and other related information"],
        ]), 
        url: path.discography,
    }),
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "Twitter"],
            ["en", "Twitter"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "告知・最新情報はこちら"],
            ["en", "Announcements and Updates"],
        ]), 
        url: externalLink.twitter,
    }),
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "YouTube"],
            ["en", "YouTube"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "楽曲MV・メンバー限定配信"],
            ["en", "Music videos and members-only live streaming"],
        ]), 
        url: externalLink.youtube,
    }),
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "Store"],
            ["en", "Store"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "グッズ・音源を販売"],
            ["en", "Original goods"],
        ]), 
        url: externalLink.booth,
    }),
    new ContentLinkMaster({ 
        title: new TranslatableValues([
            ["ja", "Fan community"],
            ["en", "Fan community"],
        ]), 
        caption: new TranslatableValues([
            ["ja", "制作裏話・支援者限定情報"],
            ["en", "Exclusive information for supporters"],
        ]), 
        url: externalLink.fanbox,
    }),
];

export class InMemoryContentLinkService {
    listContentLinks(locale: SupportedLocale): ContentLink[] {
        return contentLinkMasterData.map((master) => {
            return master.getContentLink(locale);
        })
    }
}