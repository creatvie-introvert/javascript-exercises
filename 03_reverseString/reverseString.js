const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinString = reverseArray.join("");
    return joinString;
};
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.")
reverseString("")

// Do not edit below this line
module.exports = reverseString;
