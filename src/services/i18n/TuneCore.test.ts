import { createTuneCoreUrl } from "./TuneCore";

describe('createTuneCoreUrl', () => {
    test('ロケールごとのURLを生成できる', () => {
        expect(createTuneCoreUrl({id: 'vm0mu1Ac', locale: 'ja'})).toBe('https://linkco.re/vm0mu1Ac?lang=ja');
        expect(createTuneCoreUrl({id: 'vm0mu1Ac', locale: 'en'})).toBe('https://linkco.re/vm0mu1Ac?lang=en');
    });
    test.each([
        ['空文字', ''],
    ])('IDが不正な場合は実行時エラーになる %s', (testCase, invalidId) => {
        expect(() => {
            createTuneCoreUrl({id: invalidId, locale: 'ja'})
        }).toThrowError();
    });
});