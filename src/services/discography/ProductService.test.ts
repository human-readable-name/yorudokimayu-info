import { listProductSummaries, japanese, english } from "./ProductService"

test('listProductSummaries', () => {
    expect(
        listProductSummaries("ja")
    ).toEqual(japanese);
    expect(
        listProductSummaries("en")
    ).toEqual(english);
});
