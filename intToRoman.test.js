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

});