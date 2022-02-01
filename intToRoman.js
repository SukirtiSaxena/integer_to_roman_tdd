
const roman = num => {

    const romanKey = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }

    let result = '';
    let remaining = num;

    for (let i of Object.keys(romanKey)) {
        while (remaining >= romanKey[i]) {
            result += i;
            remaining -= romanKey[i];
        }
    }

    return result;
};

module.exports = { roman };