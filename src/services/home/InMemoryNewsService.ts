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
            ['ja', '2025-10-04 拠鳥きまゆ 2nd Oneman Live「人鳥は雷震を運んで」'],
            ['en', '2025-10-04 Kimayu Yorudo 2nd solo concert "Penguin carries the thunder shock."'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/ja/live/detail/10603'),
                name: TranslatableValues.create([
                    ['ja', '配信 (Z-aN) アーカイブは2025-10-31まで視聴可能'],
                    ['en', 'Streaming (Z-aN) archive will be available until 2025-10-31'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://v-meguri.com/event/yorudokimayu-2nd-onemanlive/'),
                name: TranslatableValues.create([
                    ['ja', 'ライブレポート'],
                    ['en', 'Report on V-meguri'],
                ])
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-11-08 ぶいかふぇ♪ vol.174'],
            ['en', '2025-11-08 Vcafe vol.174'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/13656'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2025-11-22 あるこーる・すぷらっしゅ vol.2'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://t.livepocket.jp/e/96tp9'),
                name: TranslatableValues.create([
                    ['ja', '現地 (Sound Bar Freja) チケット'],
                    ['en', 'Venue (Sound Bar Freja) ticket'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.stream-ticket.com/events/detail/2512.html'),
                name: TranslatableValues.create([
                    ['ja', '配信 (Streamticket) チケット'],
                    ['en', 'Streaming (Streamticket) ticket'],
                ]),
            })
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2025-12-13 NaNa Fes ROOTS Winter'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://t.livepocket.jp/e/ur6cm'),
                name: TranslatableValues.create([
                    ['ja', '現地 (心斎橋3会場) チケット '],
                    ['en', 'Venue (3 music club in Shinsaibashi) ticket'],
                ]),
            })
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-12-27 ぶいかふぇ♪vol.191'],
            ['en', '2025-12-27 Vcafe vol.191'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/13933'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
            })
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