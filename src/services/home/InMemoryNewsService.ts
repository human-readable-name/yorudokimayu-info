import { SupportedLocale } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { NewsItem, NewsService } from "./NewsService";

export class NewsMaster {
    private text: TranslatableValues;
    private links: LinkMaster[];
    constructor(props: {text: TranslatableValues, links?: LinkMaster[]}) {
        this.text = props.text;
        this.links = props.links || [];
    }
    getNewsItem(locale: SupportedLocale): NewsItem {
        return {
            text: this.text.getLocalizedValue(locale),
            links: this.links.map((linkMaster) => {
                return linkMaster.getLinkItem(locale);
            }),
        };
    }
}

const newsMasterData: NewsMaster[] = [
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-06-28 ぶいかふぇ♪vol.264'],
            ['en', '2026-06-28 Vcafe vol.264'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/18963'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-07-12 AERU-LIVE Vol.5 DAY2'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/5vc1y_260711'),
                name: TranslatableValues.create([
                    ['ja', '現地 (白金高輪駅周辺) チケット'],
                    ['en', 'Venue (around Shirokane-Takanawa station) ticket'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/go1jh_260711'),
                name: TranslatableValues.create([
                    ['ja', '配信 チケット'],
                    ['en', 'Streaming ticket'],
                ]),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-10-10 拠鳥きまゆ 3rd Oneman Live「存在唱命 -Project:Nov4-」'],
            ['en', '2026-10-10 Kimayu Yorudo 3rd solo concert "Sonz4ishoumei -Project:Nov4-"'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (下北沢ReG) チケット'],
                    ['en', 'Venue (Shimokitazawa ReG) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/sonz4ishoumei'),
            }),
        ],
    }),
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}