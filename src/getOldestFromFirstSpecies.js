const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

// const func = employees.map((employee) => employee.responsibleFor); // id dos animais que cada funcionario é responsavel
// console.log('func', func)
// const animalsId = species.map((animal) => animal.id); // id dos animais
// const result = [];
// func.forEach((funcinarioId) => {
//   console.log('funcinarioId', funcinarioId)
//   if (animalsId.includes(funcinarioId[0])) {
//     const findAnimals = species.find((findId) => findId.id === funcinarioId[0]).residents;
//     console.log('findAnimals',findAnimals)
//     const reduceAge = findAnimals.sort((age1, age2) => age2.age - age1.age);
//     result.push(Object.values(reduceAge[0]));
//     return result;
//   }
//   return result;
// });
// return result;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const employeed = [
  'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
  burlId,
  olaId,
  '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
  stephanieId,
  '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
  'c1f50212-35a6-4ecd-8223-f835538526c2',
  'b0dc644a-5335-489b-8a2c-4e086c7819a2',
];

function getOldestFromFirstSpecies(id) {
  const idAnimal = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];
  const findAnimals = species.find((findId) => findId.id === idAnimal).residents;
  const reduce = findAnimals.reduce((acc, older) => ((acc.age < older.age) ? older : acc));
  return Object.values(reduce);
}

employeed.forEach((employeeId, index) => {
  console.log(getOldestFromFirstSpecies(employeeId));
});

module.exports = getOldestFromFirstSpecies;
