import { createBoothUrl } from "./Booth";

describe('createBoothUrl', () => {
    test('ロケールごとのURLを生成できる', () => {
        expect(createBoothUrl({id: '4220956', locale: 'ja'})).toBe('https://booth.pm/ja/items/4220956');
        expect(createBoothUrl({id: '4220956', locale: 'en'})).toBe('https://booth.pm/en/items/4220956');
    });
    test.each([
        ['空文字', ''],
        ['TuneCoreのIDと取り違え', 'vm0mu1Ac'],
    ])('IDが不正な場合は実行時エラーになる %s', (testCase, invalidId) => {
        expect(() => {
            createBoothUrl({id: invalidId, locale: 'ja'})
        }).toThrowError();
    });
});