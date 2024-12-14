import { SupportedLocale } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { NewsItem, NewsService } from "./NewsService";

export class NewsMaster {
    private text: TranslatableValues;
    private links?: LinkMaster[];
    constructor(props: {text: TranslatableValues, links?: LinkMaster[]}) {
        this.text = props.text;
        this.links = props.links;
    }
    getNewsItem(locale: SupportedLocale): NewsItem {
        return {
            text: this.text.getLocalizedValue(locale),
            links: this.links?.map((linkMaster) => {
                return linkMaster.getLinkItem(locale);
            })
        }
    }
}

const newsMasterData: NewsMaster[] = [
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2024-12-20 ぶいかふぇ♪ vol.74'],
            ['en', '2024-12-20 Vcafe vol.74'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/9179'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (Akihabara from scracth) / Streaming (bitfan) ticket'],
                ]),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-01-19 恋せよ男子2025 Virtual Sounds Borderlessコラボステージ'],
            ['en', '2025-01-19 Collaboration stage of "恋せよ男子2025" and "Virtual Sounds Borderless"']
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://t.livepocket.jp/e/koiseyo2025'),
                name: TranslatableValues.create([
                    ['ja', '現地 (下北沢6会場) チケット'],
                    ['en', 'Venue (6 live music club in Shimokitazawa) ticket']
                ])
            })
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