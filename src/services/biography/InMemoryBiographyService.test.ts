import { SupportedLocale } from "../../constants/i18n";
import { 
    japaneseCollaborations, englishCollaborations,
    japaneseProfile, englishProfile, InMemoryBiographyService, EventLinkMaster, EventHistoryMaster 
} from "./InMemoryBiographyService";

describe('EventLinkMaster', () => {
    test('getEventLink', () => {
        const master = new EventLinkMaster({
            url: "https://youtu.be/Kve3pP-KSek",
            names: new Map<SupportedLocale,string>([
                ["ja", "アーカイブ"],
                ["en", "Live streaming archive"],
            ]),
        });
        expect(master.getEventLink("ja")).toEqual({
            url: "https://youtu.be/Kve3pP-KSek",
            name: "アーカイブ",
        });
        expect(master.getEventLink("en")).toEqual({
            url: "https://youtu.be/Kve3pP-KSek",
            name: "Live streaming archive",
        });
    });
});

describe('EventHistoryMaster', () => {
    test('getEventHistory', () => {
        const master = new EventHistoryMaster({
            date: new Date("2021-11-20"),
            names: new Map<SupportedLocale,string>([
                ["ja", "#ぶいじゃむ vol.1"],
                ["en", "#V-jam vol.1 (Copy band sessions of major artists)"],
            ]),
            links: [
                new EventLinkMaster({
                    url: "https://youtu.be/57bW0nKoOOo",
                    names: new Map<SupportedLocale,string>([
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
    test('listCollaborations', () => {
        const service = new InMemoryBiographyService();
        expect(
            service.listCollaborations("ja")
        ).toEqual(japaneseCollaborations);
        expect(
            service.listCollaborations("en")
        ).toEqual(englishCollaborations);
    });
    test('listEventHistories', () => {
        const service = new InMemoryBiographyService();
        
        try {
            // 翻訳漏れに例外を投げるようになっているので、そうなってないことを担保
            service.listEventHistories("ja");
            service.listEventHistories("en");
        } catch (e) {
            throw e;
        }
    });
    test('getProfile', () => {
        const service = new InMemoryBiographyService();
        expect(
            service.getProfile("ja")
        ).toEqual(japaneseProfile);
        expect(
            service.getProfile("en")
        ).toEqual(englishProfile);
    });
});