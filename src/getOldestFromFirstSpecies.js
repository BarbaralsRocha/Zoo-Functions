const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];
  const findAnimals = species.find((findId) => findId.id === idAnimal).residents;
  const reduce = findAnimals.reduce((acc, older) => ((acc.age < older.age) ? older : acc));
  return Object.values(reduce);
}

module.exports = getOldestFromFirstSpecies;
