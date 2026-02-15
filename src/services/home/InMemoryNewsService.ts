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
        text: TranslatableValues.createUnifiedStatement('2026-02-19 ProLight & ProVisual 2026'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://prolight-provisual.jp/'),
                name: TranslatableValues.create([
                    ['ja', '現地 (東京ビッグサイト 東7ホール 株式会社レイ) 来場事前登録 (無料)'],
                    ['en', 'Venue (Tokyo Big Sight, Hall E7, Ray Corporation) Pre-registration for Visitors (Free)'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://x.com/vcafe_Vcafe/status/2020356202090361213'),
                name: TranslatableValues.create([
                    ['ja', '出演者および時刻一覧'],
                    ['en', 'List of Performers and Schedule']
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2026-03-20 UMA Chaos Fes. vol.3'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/x2o5c'),
                name: TranslatableValues.create([
                    ['ja', '現地 (心斎橋3会場) チケット '],
                    ['en', 'Venue (3 music club in Shinsaibashi) ticket'],
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2025-04-05 VIRTUAL IMPACT'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 (Sound Bar Freja) チケット'],
                    ['en', 'Venue (Sound Bar Freja) ticket'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://livepocket.jp/e/988po'),
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2026-04-12 ぶいかふぇ♪vol.234'],
            ['en', '2026-04-12 Vcafe vol.234'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/16913'),
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