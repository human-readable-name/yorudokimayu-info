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
            ['ja', '2025-03-08 ぶいかふぇ♪ vol.95'],
            ['en', '2025-03-08 Vcafe vol.95'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/10071'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (Akihabara from scracth) / Streaming (bitfan) ticket'],
                ]),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-05-02 ぶいかふぇ♪ vol.112'],
            ['en', '2025-05-02 Vcafe vol.112'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/10721'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (Akihabara from scracth) / Streaming (bitfan) ticket'],
                ]),
            }),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-05-17 魔ノ姫こあく×拠鳥きまゆ 2man Live「Broaden My World」'],
            ['en', '2025-05-17 Koaku Manohime and Kimayu Yorudo joint concert "Broaden My World"'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/9958'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) チケット'],
                    ['en', 'Venue (Akihabara from scracth) ticket'],
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