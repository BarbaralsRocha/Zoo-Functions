const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

/*       'Tuesday': {
        'officeHour': 'Open from 8am until 6pm',
        'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
      }, */
const noArguments = () => {
  const daysOfweek = Object.keys(hours);
  const map = species.map((animals) => animals.availability);
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

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return noArguments();
  }
  if (scheduleTarget) {
    return oneDay(scheduleTarget);
  }
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
