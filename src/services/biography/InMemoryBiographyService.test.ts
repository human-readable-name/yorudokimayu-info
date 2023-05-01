import { SupportedLocale, SUPPORTED_LOCALES } from "../../constants/i18n";
import { LinkMaster } from "../common/Link";
import { TranslatableValues } from "../i18n/TranslatableValues";
import { InMemoryBiographyService, EventHistoryMaster, CollaborationMaster } from "./InMemoryBiographyService";

describe('CollaborationMaster', () => {
    describe('getCollaboration', () => {
        const master = new CollaborationMaster({
            date: new Date("2021-04-01"),
            productName: TranslatableValues.createForTest([
                ["ja", "Bloomer"],
                ["en", "Bloomer"],
            ]),
            productArtist: TranslatableValues.createForTest([
                ["ja", "#ぶいっと"],
                ["en", "#Vtuber_Motto"],
            ]),
            partOfTheWork: TranslatableValues.createForTest([
                ["ja", "歌唱"],
                ["en", "Vocal"],
            ]),
            links: [
                LinkMaster.createMusicVideoOnYouTube({id: 'ZVsIPmfkWAg'}),
                LinkMaster.createForTuneCore({id: '7BmE5qH1'}),
            ],
        });
        expect(master.getCollaboration("ja")).toEqual({
            date: new Date("2021-04-01"),
            product: {
                name: "Bloomer",
                artist: "#ぶいっと"
                
            },
            partOfTheWork: "歌唱",
            links: [
                {name: "Music video", url: "https://youtu.be/ZVsIPmfkWAg"},
                {name: "Subscription / Download", url: "https://linkco.re/7BmE5qH1?lang=ja"},
            ]
        });
        expect(master.getCollaboration("en")).toEqual({
            date: new Date("2021-04-01"),
            product: {
                name: "Bloomer",
                artist: "#Vtuber_Motto"
            },
            partOfTheWork: "Vocal",
            links: [
                {name: "Music video", url: "https://youtu.be/ZVsIPmfkWAg"},
                {name: "Subscription / Download", url: "https://linkco.re/7BmE5qH1?lang=en"},
            ]
        });
        
    });
});

describe('EventHistoryMaster', () => {
    test('getEventHistory', () => {
        const master = new EventHistoryMaster({
            date: new Date("2021-11-20"),
            name: TranslatableValues.createForTest([
                ["ja", "#ぶいじゃむ vol.1"],
                ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
            ]),
            links: [
                new LinkMaster({
                    url: TranslatableValues.createUnifiedStatement("https://youtu.be/57bW0nKoOOo"),
                    name: TranslatableValues.createForTest([
                        ["ja", "アーカイブ"],
                        ["en", "Live streaming archive"],
                    ]),
                })
            ],
        });
        expect(master.getEventHistory("ja")).toEqual({
            date: new Date("2021-11-20"),
            name: "#ぶいじゃむ vol.1",
            links: [
                {
                    url: "https://youtu.be/57bW0nKoOOo",
                    name: "アーカイブ",
                }
            ]
        });
        expect(master.getEventHistory("en")).toEqual({
            date: new Date("2021-11-20"),
            name: "#V-jam vol.1 (Copy band sessions of major artists)",
            links: [
                {
                    url: "https://youtu.be/57bW0nKoOOo",
                    name: "Live streaming archive",
                }
            ]
        });
    });
});

describe('InMemoryBiographyService', () => {
    const service = new InMemoryBiographyService();
    describe('listCollaborations', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.listCollaborations(locale);
            }).not.toThrow();
        });
    });
    describe('listEventHistories', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.listEventHistories(locale);
            }).not.toThrow();
        });
    });
    describe('getProfile', () => {
        test.each(SUPPORTED_LOCALES)('翻訳漏れの実行時エラーにならないこと', (locale: SupportedLocale) => {
            expect(() => {
                service.getProfile(locale);
            }).not.toThrow();
        });
    });
});