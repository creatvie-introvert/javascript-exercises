const sumAll = function(start, end) {
    if (start > end) { 
        let temp = start;
        start = end;
        end = temp;
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
    if (Number.isNaN(start) || Number.isNaN(end)) {
        return 'ERROR';
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90")
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
