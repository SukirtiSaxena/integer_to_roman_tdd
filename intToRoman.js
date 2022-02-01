
const roman = num => {
    let result = '';
    let remaining = num;

    if (num >= 9) {
        result += 'IX';
        remaining -= 9;
    }
    else
    if (num >= 5) {
        result += 'V'
        remaining -= 5;
    }
    else
    if (num === 4) {
        result += 'IV';
        remaining -= 4;
    }
   
    while (remaining > 0) {
        result += 'I';
        remaining--;
    };
    return result;
};

module.exports = { roman };