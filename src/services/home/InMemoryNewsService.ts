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
        text: TranslatableValues.createUnifiedStatement('2026-10-18 深海フェス2026「超・深海」 Day.2'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (渋谷ストリーム ホール) / 配信 (zaiko) チケット'],
                    ['en', 'Venue (Shibuya Stream Hall) / Streaming (zaiko) ticket']
                ]),
                url: TranslatableValues.createUnifiedStatement('https://pjblue.zaiko.io/ja/item/383839'),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-10-24 りあぷろ学園祭2026 Day1 2部公演'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (1st Stage) VIPチケット'],
                    ['en', 'Venue (1st Stage) VIP ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://realizeproduction.stores.jp/items/6a86f4a853ee8d5dcce3075b')
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (1st Stage) 一般チケット'],
                    ['en', 'Venue (1st Stage) general admission ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://realizeproduction.stores.jp/items/6a86f67b7ebe0a0059728034')
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-11-08 ぶいかふぇ♪文化祭ライブ2026 DAY.2'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (文化放送メディアプラスホール) チケット'],
                    ['en', 'Venue (JOQR Media Plus Hall) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/22326'),
            })
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-12-13 箱乃なかみ×KiMAYU 2MAN LIVE 「CROSS HEAD SHOT」'],
            ['en', '2026-12-13 HakonoNakami and KiMAYU joint concert "CROSS HEAD SHOT"'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (池袋周辺) チケット'],
                    ['en', 'Venue (around Ikebukuro) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://tiget.net/events/521436'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '配信 (Streamticket) チケット'],
                    ['en', 'Streaming (Streamticket) ticket']
                ]),
                url: TranslatableValues.createUnifiedStatement('https://www.stream-ticket.com/events/detail/3002.html'),
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