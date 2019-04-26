import Joi from '@hapi/joi';
import faker from 'faker';

export function newModelInstance(input, schema, randomizer) {
  if (!input && randomizer) {
    return randomizer();
  }
  const { error, value } = Joi.validate(input, schema);
  return { error, value };
}

export function xTimes(func = () => {}, times) {
  let acc = [];
  for (let x = 0; x < times; x++) {
    acc.push(func());
  }
  return acc;
}

export function pluckFromArray(arr) {
  const idx = faker.random.number({ min: 0, max: arr.length - 1 });
  return arr.splice(idx, 1)[0];
}
