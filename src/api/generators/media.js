import faker from 'faker';
import Joi from '@hapi/joi';
import { newModelInstance } from './helpers';

// TODO add regex
const schema = Joi.object().keys({
  url: Joi.string().required(),
  width: Joi.number(),
  height: Joi.number(),
  length: Joi.number(),
  type: Joi.string()
});

export default newMedia;

function newMedia(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newMedia({
    url: faker.image.imageUrl(),
    width: faker.random.number({ min: 400, max: 1200 }),
    height: faker.random.number({ min: 400, max: 1200 }),
    length: faker.random.number({ min: 400, max: 1200 }),
    type: 'image/jpeg'
  });
}
