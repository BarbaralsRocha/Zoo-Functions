const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const func = employees.map((employee) => employee.responsibleFor); // id dos animais que cada funcionario é responsavel
  const animalsId = species.map((animal) => animal.id); // id dos animais
  const result = [];
  func.forEach((funcinarioId) => {
    if (animalsId.includes(funcinarioId[0])) {
      const findAnimals = species.find((findId) => findId.id === funcinarioId[0]).residents;
      const reduceAge = findAnimals.sort((age1, age2) => age2.age - age1.age);
      result.push(Object.values(reduceAge[0]));
      return result;
    }
    return result;
  });
  return result;
}
console.log(getOldestFromFirstSpecies(employees));

module.exports = getOldestFromFirstSpecies;
