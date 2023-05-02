const convertToCelsius = function(tempInFahrenheit) {
  return Math.round(((tempInFahrenheit - 32) * 0.5556) * 10) / 10;
};

const convertToFahrenheit = function(tempInCelsius) {
  return Math.round(((tempInCelsius * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
