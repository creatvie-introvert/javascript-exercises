const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

palindromes('racecar');
palindromes('racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
