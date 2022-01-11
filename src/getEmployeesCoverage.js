const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const withoutArguments = () => employees.map((employee) => {
  // console.log('employee', employee);
  const identificacao = employee.id;
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const species = [];
  employee.responsibleFor.forEach((eachId) => {
    species.push(data.species.find((id) => id.id === eachId).name);
  });
  const locations = [];
  employee.responsibleFor.forEach((animal) => {
    const local = data.species.find((animalLocation) => animalLocation.id === animal).location;
    locations.push(local);
    return locations;
  });
  const obj = { id: identificacao, fullName, species, locations };
  return obj;
});

const findByName = (searching) => {
  const allEmployees = withoutArguments();
  const employee = allEmployees.find((employe) => {
    if (employe.fullName.includes(searching.name)) return employe;
  });
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

const findById = (searching) => {
  const allEmployees = withoutArguments();
  const employee = allEmployees.find((employe) => employe.id === searching.id);
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

function getEmployeesCoverage(searching) {
  if (!searching) return withoutArguments();
  if (searching.name) return findByName(searching);
  if (searching.id) return findById(searching);
}
module.exports = getEmployeesCoverage;
