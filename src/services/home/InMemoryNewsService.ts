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
            ['ja', '2023-09-29 新曲 イキガイショウタイム リリース'],
            ['en', '2023-09-29 New song "Ikigai Showtime" was released'],
        ]),
        links: [
            new LinkMaster({
                name: TranslatableValues.createUnifiedStatement('MV'),
                url: TranslatableValues.createUnifiedStatement("https://youtu.be/jkAGj03euDY"),
            }),
            LinkMaster.createForOfficialStore({id:'5129141'}),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2023-09-30 ​Virtual Artist Fes VRide! Vol.2'),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.real-virtual-live.com/vol2'),
                name: TranslatableValues.create([
                    ['ja', '公式サイト'],
                    ['en', 'Official web site']
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://l-tike.com/search/?lcd=72527'),
                name: TranslatableValues.create([
                    ['ja', '現地 渋谷GRIT'],
                    ['en', 'Venue Shibuya GRIT'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.youtube.com/live/C-uYMHzzXDo'),
                name: TranslatableValues.create([
                    ['ja', '配信 えのぐYouTubeチャネル'],
                    ['en', 'Streaming on enogu YouTube channel'],
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2023-10-07 拠鳥きまゆ 1st Oneman Live「PENGUIN A LIVE」'],
            ['en', '2023-10-07 Kimayu Yorudo 1st solo concert "PENGUIN A LIVE"']
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://passmarket.yahoo.co.jp/event/show/detail/026vu3ycss431.html'),
                name: TranslatableValues.create([
                    ['ja', '現地 赤坂navey floor'],
                    ['en', 'Venue Akasaka navey floor'],
                ]),
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/live/detail/10311'),
                name: TranslatableValues.create([
                    ['ja', '配信 Z-aN'],
                    ['en', 'Streaming Z-aN'],
                ]),
            }),
        ]
    })
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}