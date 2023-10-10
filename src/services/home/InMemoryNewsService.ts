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
            ['ja', '2023-10-07 拠鳥きまゆ 1st Oneman Live「PENGUIN A LIVE」'],
            ['en', '2023-10-07 Kimayu Yorudo 1st solo concert "PENGUIN A LIVE"']
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/live/detail/10311'),
                name: TranslatableValues.create([
                    ['ja', '配信 Z-aN (アーカイブは2023-10-31まで視聴可能)'],
                    ['en', 'Streaming Z-aN (The archive will be available until 2023-10-31'],
                ]),
            }),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2023-10-10 New song "PENGUIN ALIVE"'),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: "jM5AdQGVZ4g"}),
            LinkMaster.createForTuneCore({id: "vMh6myS4"}),
            LinkMaster.createForOfficialStore({id: "5153499"}),
        ]
    }), 
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2023-10-21 わくわく！VTuberひろば Vol.35 ミュージックLIVE'],
            ['en', '2023-10-21 WAKUWAKU VTuber HIROBA Vol.35 music live'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.youtube.com/@AkihabaraLab'),
                name: TranslatableValues.create([
                    ['ja', '配信 AkihabaraLab YouTubeチャネル'],
                    ['en', 'Streaming on AkihabaraLab YouTube channel'],
                ]),
            })
        ],
    })
];

export class InMemoryNewsService implements NewsService {
    listNews(locale: SupportedLocale): NewsItem[] {
        return newsMasterData.map((master) => {
            return master.getNewsItem(locale);
        })
    }
}