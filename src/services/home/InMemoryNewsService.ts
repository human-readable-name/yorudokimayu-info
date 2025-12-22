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
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-12-27 #ぶいちゅっ presents ENTAS 7th Anniversary'],
            ['en', '2025-12-27 Virtual Tuesday presents ENTAS 7th Anniversary'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原エンタス) チケット'],
                    ['en', 'Venue (Akihabara ENTAS) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://passmarket.yahoo.co.jp/event/show/detail/02z56fgbb9u41.html')
            })
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-02-08 ぶいかふぇ♪vol.206'],
            ['en', '2026-02-08 Vcafe vol.206'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/15087'),
                name: TranslatableValues.create([
                    ['ja', '現地 (LIVE SPACE Q) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (LIVE SPACE Q) / Streaming (bitfan) ticket'],
                ]),
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