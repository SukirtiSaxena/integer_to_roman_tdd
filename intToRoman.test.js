const {roman} = require('./intToRoman.js');
const each = require('jest-each').default;

describe("Number to Roman Numeral ", () => {

    each([
        [1,'I'],
        [2,'II'],
        [3,'III'],
        [4,'IV'],
        [5,'V'],
        [6,'VI'],
        [7,'VII'],
        [8,'VIII'],
        [9,'IX'],
        [10,'X'],
        [11,'XI'],
        [12,'XII'],
        [13,'XIII'],
        [14,'XIV'],
        [15,'XV'],
        [16,'XVI'],
        [17,'XVII'],
        [18,'XVIII'],
        [19,'XIX'],
        [20,'XX'],
        [40,'XL'],
        [45,'XLV'],
        [50,'L'],
        [90,'XC'],
        [100,'C'],
        [400,'CD'],
        [700,'DCC'],
        [900,'CM'],
        [1000,'M'],
        [2475,'MMCDLXXV'],
        [2550,'MMDL'],
        [3724,'MMMDCCXXIV'],
        [0,'nulla']
    ]).test("Number %i is equivalenat to --> %s",(number, expected) => {
        expect(roman(number)).toBe(expected);
    });

    test("If numbers are greater than 5000, they are too big!!",() => {
        expect(roman(5000)).toBe('Romans did not require to calculate such larger numbers!!');
    });
    
    test("If numbers are less than 1, they are too small!!",() => {
        expect(roman(-10)).toBe('Romans did not require to calculate negative numbers!!');
    });

    test("If input is not a number then throw message --> Not a number !!",() => {
        expect(roman('abcd')).toBe('Not a number');
    });

    test("If input is undefined then throw message --> Number is required !!",() => {
        expect(roman()).toBe('Number is required');
    });


});