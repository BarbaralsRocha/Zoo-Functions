const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const getName = (specie) => specie.firstName === employeeName || specie.lastName === employeeName;
  return employees.find(getName);
}
console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
