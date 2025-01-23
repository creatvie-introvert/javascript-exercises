const repeatString = function(string, num) {
    let result = '';

    for (let i = 0; i < num; i ++) {
        result += string;
    } 
    return result
};

console.log(repeatString('hey', 3));
console.log(repeatString('hello', 10));

// Do not edit below this line
module.exports = repeatString;
