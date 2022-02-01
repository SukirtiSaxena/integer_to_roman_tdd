
const roman = num => {
    let result = '';

    while (num > 0) {
        result += 'I';
        num--;
    };
    return result;
};

module.exports = { roman };