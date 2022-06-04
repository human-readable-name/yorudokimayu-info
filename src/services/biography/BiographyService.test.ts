import { 
    listCollaborations, japaneseCollaborations, englishCollaborations,
    listEventHistories, japaneseEventHistories, englishEventHistories,
    getProfile, japaneseProfile, englishProfile 
} from "./BiographyService";

test('listCollaborations', () => {
    expect(
        listCollaborations("ja")
    ).toEqual(japaneseCollaborations);
    expect(
        listCollaborations("en")
    ).toEqual(englishCollaborations);
});

test('listEventHistories', () => {
    expect(
        listEventHistories("ja")
    ).toEqual(japaneseEventHistories);
    expect(
        listEventHistories("en")
    ).toEqual(englishEventHistories);
});

test('getProfile', () => {
    expect(
        getProfile("ja")
    ).toEqual(japaneseProfile);
    expect(
        getProfile("en")
    ).toEqual(englishProfile);
});