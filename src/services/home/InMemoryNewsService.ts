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
            ['ja', '2025-12-25 1st EP "sparkler"を配信リリース'],
            ['en', '2025-12-25 1st EP "sparkler" is available on streaming services'],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: 'CYcu2HH3'}),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-12-25 1st Album "Say,"を配信リリース'],
            ['en', '2025-12-25 1st Album "Say," is available on streaming services'],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: 'T5apQAQB'}),
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
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}