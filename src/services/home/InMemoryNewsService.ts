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
        text: TranslatableValues.createUnifiedStatement('2024-04-25 New song "After Horizon"'),
        links: [
            LinkMaster.createMusicVideoOnYouTube({id: "0SydNfKuolA"}),
            LinkMaster.createForTuneCore({id: "umSx7PTc"}),
            LinkMaster.createForOfficialStore({id: "5673484"}),
        ],
    }),
    new NewsMaster({
        text: TranslatableValues.create([
            ['ja', '2024-05-17 ぶいかふぇ♪ vol.36 出演予定'],
            ['en', '2024-05-17 Vcafe vol.36'],
        ]),
        links: [
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://jcm-event.bitfan.id/events/6753'),
                name: TranslatableValues.create([
                    ['ja', '現地 (秋葉原トークライブBAR from scratch) / 配信 (bitfan) チケット'],
                    ['en', 'Venue (Akihabara from scracth) / Streaming (bitfan) ticket'],
                ])
            })
        ]
    }),
    new NewsMaster({
        text: TranslatableValues.createUnifiedStatement('2024-06-01 Virtual Artist Fes VRide! Vol.10'),
        links: [
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '公式サイト'],
                    ['en', 'Official web site'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://www.real-virtual-live.com/vol10'),
            }),
            new LinkMaster({
                name: TranslatableValues.create([
                    ['ja', '現地 渋谷GRIT'],
                    ['en', 'Venue Shibuya GRIT'],
                ]),
                url: TranslatableValues.createUnifiedStatement('https://l-tike.com/search/?keyword=VRide')
            }),
            new LinkMaster({
                url: TranslatableValues.createUnifiedStatement('https://www.youtube.com/@enogu'),
                name: TranslatableValues.create([
                    ['ja', '配信 えのぐYouTubeチャネル'],
                    ['en', 'Streaming on enogu YouTube channel'],
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