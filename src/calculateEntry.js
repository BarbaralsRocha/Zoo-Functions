const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const child = entrants.filter((children) => children.age < 18).length;
  const adult = entrants.filter((adults) => adults.age >= 18 && adults.age < 50).length;
  const senior = entrants.filter((seniores) => seniores.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) return 0;
  const calculate = countEntrants(entrants);
  const childValue = calculate.child * prices.child;
  const adultValue = calculate.adult * prices.adult;
  const seniorValue = calculate.senior * prices.senior;
  return childValue + adultValue + seniorValue;
}
module.exports = { calculateEntry, countEntrants };
