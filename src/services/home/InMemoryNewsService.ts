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
            ['ja', '2025-05-02 ぶいかふぇ♪ vol.112 '],
            ['en', '2025-05-02 Vcafe vol.112'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/10721'),
                name: TranslatableValues.create([
                    ['ja', '配信 (bitfan) チケット アーカイブは2025-05-08 23:59まで'],
                    ['en', 'Streaming (bitfan) ticket will be available until 2025-05-08 23:59 (JST)'],
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
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-06-14 ぶいかふぇ♪ vol.127'],
            ['en', '2025-06-14 Vcafe vol.127'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/11370'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (Akihabara from scracth) / Streaming (bitfan) ticket'],
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