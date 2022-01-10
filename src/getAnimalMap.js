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

const sexAnimal = (options) => {
  const funcaoReducerName = species.reduce((acumulador, regioes) => {
    const acc = { ...acumulador };
    if (!acumulador[regioes.location]) {
      acc[regioes.location] = [];
    }
    const sex = regioes.residents.filter((name) => name.sex === options.sex);
    const nameSex = sex.map((names) => names.name);
    const nameSpecies = {};
    nameSpecies[regioes.name] = nameSex;
    acc[regioes.location].push(nameSpecies);
    return acc;
  }, {});
  return funcaoReducerName;
};

// console.log(sexAnimal({ sex: 'female' }).NE[0]);

function getAnimalMap(options) {
  // Sem parâmetros, retorna animais categorizados por localização;
  if (!options) return withoutArguments();
  if (options.includeNames && options.sorted) return nameIncludes(options);
  if (options.includeNames && options.sorted && options.sex == 'female') return nameIncludes(options);
  if (options.sex) return sexAnimal(options);
}
console.log(getAnimalMap({ includeNames: true, sorted: true }).NE[0]);
module.exports = getAnimalMap;
