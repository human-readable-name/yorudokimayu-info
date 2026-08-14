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
        text: TranslatableValues.createUnifiedStatement('2026-08-08 Vack-ON!! × SHUFFLE -CROSS REALITY- vol.9'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/ja/live/detail/10876'),
                name: TranslatableValues.create([
                    ['ja', '配信 (Z-aN) チケット (アーカイブは2026-08-15まで)'],
                    ['en', 'Streaming (Z-aN) ticket (The archive will be available until 2026-08-15)'],
                ]),
            }),
        ],
    }),
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
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}