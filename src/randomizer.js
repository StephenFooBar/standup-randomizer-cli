'use strict';
const minimalLogarithmFunctionValue = 6; // this value will ensure the weight is more gradual
const getWeights = function(numberOfPeople) {
  var weights = [];
  for (let i = 0; i < numberOfPeople; i++)
    weights[i] = 1/Math.log(i + minimalLogarithmFunctionValue);
  return weights.sort((a,b) => a - b);
}

const generateRandomValue = () => {
  return Math.random() * 0.9 + 0.1; // maximum random value = 1, minimum = 0.1, this ensures the random value will fall within this range
}

const getRandomValues = function(numberOfPeople) {
  var values = [];
  for (let i = 0; i < numberOfPeople; i++)
    values[i] = generateRandomValue();
  return values;
}

module.exports.getWeights = getWeights;
module.exports.getRandomValues = getRandomValues;
module.exports.generateRandomValue = generateRandomValue;