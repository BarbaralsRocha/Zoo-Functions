const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.find((specie) => specie.name === animal).residents;
  return getSpecie.every((ages) => ages.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
