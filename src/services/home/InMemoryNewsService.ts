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
            ['ja', '2025-08-31 新曲 ビリビリビリビリ'],
            ['en', '2025-08-31 New single "BiriBiriBiriBiri"'],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: 'yRNrZVsa'}),
            LinkMaster.createForOfficialStore({id: '7363456'}),
            LinkMaster.createMusicVideoOnYouTube({id: 'XZd4mtHDYBQ'}),
        ],
    }),  
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-10-04 拠鳥きまゆ 2nd Oneman Live「人鳥は雷震を運んで」'],
            ['en', '2025-10-04 Kimayu Yorudo 2nd solo concert "Penguin carries the thunder shock."'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.zan-live.com/ja/live/detail/10603'),
                name: TranslatableValues.create([
                    ['ja', '現地 (下北沢レッグ) / 配信 (Z-aN) チケット'],
                    ['en', 'Venue (Shimokitazawa ReG) / Streaming (Z-aN) ticket'],
                ]),
            })
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2025-10-21 #ぶいちゅっ vol.4'],
            ['en', '2025-10-21 Virtual Tuesday vol.4']
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://passmarket.yahoo.co.jp/event/show/detail/02xk1rvdz7p41.html'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原エンタス) チケット'],
                    ['en', 'Venue (Akihabara ENTAS) ticket']
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