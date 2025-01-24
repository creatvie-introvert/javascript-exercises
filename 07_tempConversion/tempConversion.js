const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;

  if (celsius % 1 !== 0) { 
    celsius = Math.round(celsius * 10) / 10;
  }
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;

  if (fahrenheit % 1 !== 0) {
    fahrenheit = Math.round(fahrenheit * 10) / 10;
  }
  return fahrenheit;
};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
