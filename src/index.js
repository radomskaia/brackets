module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let previousStr;
    do {
        previousStr = str;
        bracketsConfig.forEach((bracket) => {
            str = str.replace(bracket.join(''), '');
        })
    } while (previousStr !== str)

    return str.length === 0;
}