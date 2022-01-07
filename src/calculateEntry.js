const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const child = entrants.filter((children) => children.age < 18).length;
  const adult = entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length;
  const senior = entrants.filter((seniores) => seniores.age >= 50).length;
  return { child, adult, senior };
}
console.log(countEntrants(entrants));

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const calculate = countEntrants(entrants);
  const childValue = calculate.child * prices.child;
  const adultValue = calculate.adult * prices.adult;
  const seniorValue = calculate.senior * prices.senior;
  return childValue + adultValue + seniorValue;
}
console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
