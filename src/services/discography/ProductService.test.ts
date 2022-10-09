import { listProductSummaries, japanese, english } from "./ProductService"

test('listProductSummaries', () => {
    expect(
        listProductSummaries("ja")
    ).toEqual(japanese);

    const japaneseCredits = listProductSummaries("ja").flatMap((summary) => summary.credits).join("");
    expect(
        japaneseCredits
    ).toEqual(expect.stringContaining("拠鳥きまゆ"));
    expect(
        japaneseCredits
    ).toEqual(expect.not.stringContaining("KimayuYorudo"));

    const japaneseTuneCoreLinks = listProductSummaries("ja").flatMap((summary) => 
        summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"))
    );
    expect(japaneseTuneCoreLinks.length).toBe(16);
    japaneseTuneCoreLinks.forEach((link) => {
        expect(link.url).toContain("lang=ja")
    });
    
    expect(
        listProductSummaries("en")
    ).toEqual(english);

    const englishCredits = listProductSummaries("en").flatMap((summary) => summary.credits).join("");
    expect(
        englishCredits
    ).toEqual(expect.stringContaining("KimayuYorudo"));
    expect(
        englishCredits
    ).toEqual(expect.not.stringContaining("拠鳥きまゆ"));

    const englishTuneCoreLinks = listProductSummaries("en").flatMap((summary) => 
        summary.storeLinks.filter((linkItem) => linkItem.url.startsWith("https://linkco.re/"))
    );
    expect(englishTuneCoreLinks.length).toBe(16);
    englishTuneCoreLinks.forEach((link) => {
        expect(link.url).toContain("lang=en")
    });
});
