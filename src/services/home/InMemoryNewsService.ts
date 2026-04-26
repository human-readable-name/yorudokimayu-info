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
        text: TranslatableValues.createUnifiedStatement('2025-04-05 VIRTUAL IMPACT'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', 'アーカイブは2026-05-02まで視聴可能'],
                    ['en', 'The live streaming archive will be available until 2026-05-02'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://www.stream-ticket.com/events/detail/2601.html'),
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-04-26 M3 2026 春 にて 3rd EP 「身分証明唱」をリリース'],
            ['en', '2026-04-26 3rd EP "身分証明唱" will be released at M3 2026 spring']
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', 'クロスフェードデモ'],
                    ['en', 'Crossfade Demo'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/xbCz-L4P7Gc'),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement('身分証明唱 music video'),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/omXDQL4cf2o'),
            }),
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement('感電必至♡侵略しんぐあそんぐ music video'),
                url: TranslatableValues.createUnifiedStatement('https://youtu.be/Z7JYtVEIGBk'),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-05-09 Under the Moon / Log_01 – Acoustic Live –'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (QUESTイベントスペース) 特典付きプレミアムチケット'],
                    ['en', 'Venue (QUEST Event Space) Premium ticket with special benefits'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://fanicon.net/tours/6805/4583/16453'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (QUESTイベントスペース) 一般チケット'],
                    ['en', 'Venue (QUEST Event Space) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://fanicon.net/tours/6805/4583/16774'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '配信 (bitfan) チケット'],
                    ['en', 'Streaming (bitfan) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://quest.bitfan.id/events/17546')
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-05-17 ぶいかふぇ♪vol.249'],
            ['en', '2026-05-17 Vcafe vol.249'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/17481'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-06-06 RUMBLE LIVE'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/rumble_live'),
                name: TranslatableValues.create([
                    ['ja', '現地 (下北沢ReG) チケット'],
                    ['en', 'Venue (Shimokitazawa ReG) ticket'],
                ]),
            }),
        ]
    }),
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
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}