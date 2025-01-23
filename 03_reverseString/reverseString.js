const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinString = reverseArray.join("");
    return joinString;
};
reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
