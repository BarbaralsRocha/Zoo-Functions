const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const funcaoVazia = () => species.reduce((acc, especie) => {
  acc[especie.name] = especie.residents.length;
  return acc;
}, {});

const pop = (especie) => species.find((specie) => specie.name === especie.specie).residents.length;

const popularitySex = (especie) => {
  const { residents } = species.find((specie) => specie.name === especie.specie);
  return residents.filter((sex) => sex.sex === especie.sex).length;
};

function countAnimals(animal) {
  if (!animal) {
    return funcaoVazia();
  }
  if (Object.keys(animal).length === 1) {
    return pop(animal);
  }
  return popularitySex(animal);
}
console.log(countAnimals({ specie: 'giraffes' }));
module.exports = countAnimals;
