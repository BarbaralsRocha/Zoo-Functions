const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  const getEmployees = employees.map((employe) => employe.managers);
  return getEmployees.some((findId) => findId.includes(id));
}

function getRelatedEmployees(managerId) {
  const getEmployees = employees.filter((employe) => employe.managers.includes(managerId));
  if (getEmployees.length !== 0) {
    return getEmployees.map((colab) => `${colab.firstName} ${colab.lastName}`);
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
module.exports = { isManager, getRelatedEmployees };
