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
            ['ja', '2024-09-28 新曲 浸夜'],
            ['en', '2024-09-28 New single "Shinya"'],
        ]),
        links: [
            LinkMaster.createForTuneCore({id: "y0SD1FXy"}),
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2024-10-19 魔ノ姫こあく生誕3Dライブ～Showtime Syndrome～'],
            ['en', '2024-10-19 Koaku Manohime Birthday 3D Live ~ Showtime Syndrome ~'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://pjblue.zaiko.io/item/366852'),
                name: TranslatableValues.create([
                    ["ja", "配信 ZAIKO"],
                    ["en", "Live straming on ZAIKO"],
                ])
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2024-10-26 らいVおん vol.7'],
            ['en', '2024-10-26 らいVおん (LIVE&1on1) vol.7'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://t.livepocket.jp/e/b257j'),
                name: TranslatableValues.create([
                    ['ja', '現地 Sound Bar Freja'],
                    ['en', 'Venue Sound Bar Freja'],
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