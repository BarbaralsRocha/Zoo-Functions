const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return ids.map((id) => species.find((specieId) => specieId.id === id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
