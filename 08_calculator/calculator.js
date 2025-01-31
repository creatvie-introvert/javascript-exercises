const add = function(a, b) {
  //let result = a + b;
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prev, curr) => prev * curr);
};

const power = function(x, n) {
	return Math.pow(x, n);
};

const factorial = function(n) {
	if (n === 0 || n === 1) {
    return 1;
  } 
  for (let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
};

add(0, 0);
add(2, 2);
add(2, 6);
subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);
sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);
multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);
power(4, 3);
power(3, 10);
factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
