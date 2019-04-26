import faker from 'faker';
import Joi from '@hapi/joi';
import { newModelInstance } from './helpers';

// TODO add regex
const schema = Joi.object().keys({
  address: Joi.string(),
  last_accessed: Joi.date(),
  last_retrieved: Joi.date(),
  status: Joi.boolean()
});

export default newMedia;

function newMedia(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newMedia({
    address: faker.internet.url(),
    last_accessed: faker.date.past(),
    last_retrieved: faker.date.recent(),
    status: true
  });
}
