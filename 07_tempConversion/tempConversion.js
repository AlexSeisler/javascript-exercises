const convertToCelsius = function(F) 
{
  return Number((5/9 * (F-32)).toFixed(1));
};

const convertToFahrenheit = function(C) 
{
  return Number(((9/5*C)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
