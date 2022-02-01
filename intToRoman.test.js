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

});