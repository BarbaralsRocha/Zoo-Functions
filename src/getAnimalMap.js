const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const withoutArguments = () => {
  const funcaoReducer = species.reduce((acumulador, regioes) => {
    const acc = { ...acumulador };
    if (!acumulador[regioes.location]) {
      acc[regioes.location] = [];
    }
    acc[regioes.location].push(regioes.name);
    return acc;
  }, {});
  return funcaoReducer;
};

const nameIncludes = (option) => {
  const funcaoReducerName = species.reduce((acumulador, regioes) => {
    const acc = { ...acumulador };
    if (!acumulador[regioes.location]) {
      acc[regioes.location] = [];
    }
    const names = regioes.residents.map((name) => name.name);
    const nameSpecies = {};
    if (option.sorted) { // sorted
      const sort = names.sort();
      nameSpecies[regioes.name] = sort;
      acc[regioes.location].push(nameSpecies);
      return acc;
    }
    nameSpecies[regioes.name] = names;
    acc[regioes.location].push(nameSpecies);
    return acc;
  }, {});
  return funcaoReducerName;
};

const sexAnimal = (options) => species.reduce((acumulador, regioes) => {
  const acc = { ...acumulador };
  if (!acumulador[regioes.location]) {
    acc[regioes.location] = [];
  }
  const sex = regioes.residents.filter((name) => name.sex === options.sex);
  const nameSex = sex.map((names) => names.name);
  const nameSpecies = {};
  if (options.sorted) { // sorted
    const sort = nameSex.sort();
    nameSpecies[regioes.name] = sort;
    acc[regioes.location].push(nameSpecies);
    return acc;
  }
  nameSpecies[regioes.name] = nameSex;
  acc[regioes.location].push(nameSpecies);
  return acc;
}, {});

const conditions = (options) => {
  if (options.sex) return sexAnimal(options);
  if (options.sorted) return nameIncludes(options);
  return nameIncludes(options);
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return withoutArguments();
  return conditions(options);
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NE[0]);
module.exports = getAnimalMap;
