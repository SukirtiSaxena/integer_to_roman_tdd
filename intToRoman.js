
const roman = num => {
    let result = '';

    if (num === 4) 
        return 'IV';
    if (num === 5)
        return 'V';
        
    while (num > 0) {
        result += 'I';
        num--;
    };
    return result;
};

module.exports = { roman };