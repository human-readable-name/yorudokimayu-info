import { TranslatableValues } from "../i18n/TranslatableValues";
import { LinkMaster } from "./Link";

describe('LinkMaster', () => {
    describe('createForTuneCore', () => {
        test('全ロケールのTuneCoreリンクを作成できる', () => {
            const master = LinkMaster.createForTuneCore({id: 'vm0mu1Ac'});
            expect(master).toStrictEqual(new LinkMaster({
                name: TranslatableValues.createForTest([
                    ["ja", "Subscription / Download"],
                    ["en", "Subscription / Download"],
                ]),
                url: TranslatableValues.createForTest([
                    ["ja", "https://linkco.re/vm0mu1Ac?lang=ja"],
                    ["en", "https://linkco.re/vm0mu1Ac?lang=en"],
                ]),
            }))
        });
    });
    describe('createForOfficialStoe', () => {
        test('全ロケールのBoothリンクを作成できる', () => {
            const master = LinkMaster.createForOfficialStore({id: '4220956'});
            expect(master).toStrictEqual(new LinkMaster({
                name: TranslatableValues.create([
                    ["ja", "Official store"],
                    ["en", "Official store"],
                ]),
                url: TranslatableValues.createForTest([
                    ["ja", "https://booth.pm/ja/items/4220956"],
                    ["en", "https://booth.pm/en/items/4220956"],
                ]),
            }))
        });
    });
    describe('getLinkItem', () => {
        test('ロケールに応じた翻訳に変換できる', () => {
            const master = new LinkMaster({
                name: TranslatableValues.createForTest([
                    ["ja", "配信・ダウンロード"],
                    ["en", "Subscription / Download"],
                ]),
                url: TranslatableValues.createForTest([
                    ["ja", "https://linkco.re/vm0mu1Ac?lang=ja"],
                    ["en", "https://linkco.re/vm0mu1Ac?lang=en"],
                ]),
            });
            expect(master.getLinkItem("ja")).toEqual({
                name: "配信・ダウンロード",
                url: "https://linkco.re/vm0mu1Ac?lang=ja",
            });
            expect(master.getLinkItem("en")).toEqual({
                name: "Subscription / Download",
                url: "https://linkco.re/vm0mu1Ac?lang=en",
            });
        });
    })
});