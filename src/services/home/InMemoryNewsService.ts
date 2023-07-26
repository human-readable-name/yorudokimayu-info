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
            ['ja', '2023-07-31 拠鳥きまゆ×閑地游「サーチライト」リリース'],
            ['en', '2023-07-31 Collaboration song "SearchLight" by KimayuYorudo & YouKanti to be released']
        ]),
        links: [
            LinkMaster.createForTuneCore({id: '66EeHazf'}),
            LinkMaster.createMusicVideoOnYouTube({id: 'NrdD9jrN1Jg'}),
        ],
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