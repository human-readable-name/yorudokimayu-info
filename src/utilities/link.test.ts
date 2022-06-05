import path from '../constants/path';
import { isInternal, pageTypeToPath } from "./link";

test('isInternal', () => {
    expect(isInternal("/")).toBe(true);
    expect(isInternal("/biography")).toBe(true);
    expect(isInternal("/discography")).toBe(true);
    expect(isInternal("https://www.youtube.com/channel/UCOJS80LKLRTLihZioG5l73g")).toBe(false);
});

test('pageTypeToPath', () => {
    expect(pageTypeToPath("Home")).toBe(path.home);
    expect(pageTypeToPath("Biography")).toBe(path.biography);
    expect(pageTypeToPath("Discography")).toBe(path.discography);
})