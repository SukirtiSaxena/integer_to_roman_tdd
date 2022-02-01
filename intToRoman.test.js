const {roman} = require('./intToRoman');

describe("Number to Roman Numeral",() => {
    test("Number 1 is equivalent to --> I ", () => {
        expect(roman(1)).toBe('I');
    });
    test("Number 2 is equivalent to --> II ", () => {
        expect(roman(2)).toBe('II');
    });
    test("Number 3 is equivalent to --> III ", () => {
        expect(roman(3)).toBe('III');
    });
    test("Number 4 is equivalent to --> IV ", () => {
        expect(roman(4)).toBe('IV');
    });
    test("Number 5 is equivalent to --> V ", () => {
        expect(roman(5)).toBe('V');
    });
    test("Number 6 is equivalent to --> VI ", () => {
        expect(roman(6)).toBe('VI');
    });
    test("Number 7 is equivalent to --> VII ", () => {
        expect(roman(7)).toBe('VII');
    });
    test("Number 8 is equivalent to --> VIII ", () => {
        expect(roman(8)).toBe('VIII');
    });
    test("Number 9 is equivalent to --> IX ", () => {
        expect(roman(9)).toBe('IX');
    });
    test("Number 10 is equivalent to --> X ", () => {
        expect(roman(10)).toBe('X');
    });
    test("Number 11 is equivalent to --> XI ", () => {
        expect(roman(11)).toBe('XI');
    });
    test("Number 15 is equivalent to --> XV ", () => {
        expect(roman(15)).toBe('XV');
    });
    test("Number 20 is equivalent to --> XX ", () => {
        expect(roman(20)).toBe('XX');
    });
    test("Number 30 is equivalent to --> XXX ", () => {
        expect(roman(30)).toBe('XXX');
    });

});