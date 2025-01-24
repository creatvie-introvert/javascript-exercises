const removeFromArray = function(array, ...remove) {
    let result = array.filter(element => !remove.includes(element));

    return result;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
