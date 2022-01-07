const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

/*       'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      }, */
const daysOfweek = Object.keys(hours);
const map = species.map((animals) => animals.availability);
const noArguments = () => {
  const funcaoReduzida = (acc, valor) => {
    const exibicao = [];
    map.forEach((days, index) => {
      if (days.some((day) => day === valor)) {
        exibicao.push(species[index].name);
      }
      acc[valor] = {
        officeHour: `Open from ${hours[valor].open}am until ${hours[valor].close}pm`,
        exhibition: exibicao,
      };
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

const oneAnimal = (scheduleTarget) => {
  const dayOfWeek = noArguments();
  const array = [];
  daysOfweek.reduce((acc, diaSemana) => {
    dayOfWeek[diaSemana].exhibition.find((animal) => {
      if (animal === scheduleTarget) {
        console.log(acc)
        acc.push(diaSemana);
      }
      return acc
    });
    return acc
  }, []);
};
console.log(oneAnimal('lions'));

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return noArguments();
  }
  if (scheduleTarget) {
    return oneDay(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return oneAnimal(scheduleTarget);
  }
}
//console.log(getSchedule());
module.exports = getSchedule;
