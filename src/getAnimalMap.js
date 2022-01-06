const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalMap(options) {
  // Sem parâmetros, retorna animais categorizados por localização;
  if (!options) {
    //return species.map((animal) => animal.location);
    const funcaoReducer = species.reduce((acumulador, regioes) => {
      if (!acumulador[regioes.location]) {
        acumulador[regioes.location] = [];
        return acumulador;
      }
      const array = species.filter((regiao) => regiao.location === regioes.location);
      const mapArray = array.map((names) => names.name);
      console.log('maparray',mapArray);
      acumulador[regioes.location].push(mapArray);
      return acumulador;
    }, {});
    return funcaoReducer;
  }
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
