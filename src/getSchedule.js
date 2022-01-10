const { animal } = require('faker');
const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

/*       'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      }, */

const daysOfweek = Object.keys(hours);
const map = species.map((animals) => animals.availability);

const horariosExibicao = (diaSemana) => {
  let officeHour = `Open from ${hours[diaSemana].open}am until ${hours[diaSemana].close}pm`;
  if (hours[diaSemana].open === 0 && hours[diaSemana].close === 0) {
    officeHour = 'CLOSED';
  }
  return officeHour;
};

const noArguments = () => {
  const funcaoReduzida = (acc, valor) => {
    const exibicao = [];
    map.forEach((days, index) => {
      if (days.some((day) => day === valor)) exibicao.push(species[index].name);
      acc[valor] = {
        officeHour: horariosExibicao(valor),
        exhibition: exibicao,
      };
      if (acc[valor].exhibition.length === 0) acc[valor].exhibition = 'The zoo will be closed!';
    });
    return acc;
  };
  return daysOfweek.reduce(funcaoReduzida, {});
};

const oneDay = (scheduleTarget) => {
  const dayOfWeek = noArguments();
  const day = {};
  day[scheduleTarget] = dayOfWeek[scheduleTarget];
  return day;
};

const oneAnimal = (scheduleTarget) => species.find((animals) => animals.name === scheduleTarget).availability;
// const dayOfWeek = [noArguments()];
// console.log(dayOfWeek)
// console.log(daysOfweek.filter((dia) => dayOfWeek[dia].exhibition).some((animal) => animal === scheduleTarget));

const arrayAnimals = [];
species.forEach((animal) => {
  arrayAnimals.push(animal.name);
});

function getSchedule(scheduleTarget) {
  if (daysOfweek.includes(scheduleTarget)) return oneDay(scheduleTarget);
  if (arrayAnimals.includes(scheduleTarget)) return oneAnimal(scheduleTarget);
  return noArguments();
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
