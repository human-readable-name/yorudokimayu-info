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
        text: TranslatableValues.createUnifiedStatement('2026-09-04 バーチャルユニット戦V時代 ～第8回戦～'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/21596'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-09-13 ぶいかふぇ♪vol.298'],
            ['en', '2026-09-13 Vcafe vol.298'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/20834'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            }),
        ]
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
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-10-24 りあぷろ学園祭2026 Day1 2部公演'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (八王子 1st stage) VIPチケット'],
                    ['en', 'Venue (Hachioji 1st stage) VIP ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://realizeproduction.stores.jp/items/6a86f4a853ee8d5dcce3075b')
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (八王子 1st stage) 一般チケット'],
                    ['en', 'Venue (Hachioji 1st stage) general admission ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://realizeproduction.stores.jp/items/6a86f67b7ebe0a0059728034')
            }),
        ]
    }),
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}