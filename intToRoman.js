
const roman = num => {
    let result = '';
    let remaining = num;

    if (num >= 9) {
        return 'IX';
    }

    if (num >= 5) {
        result += 'V'
        remaining -= 5;
    }

    if (num === 4) 
        return 'IV';
   
    while (remaining > 0) {
        result += 'I';
        remaining--;
    };
    return result;
};

module.exports = { roman };