import faker from 'faker';
import Joi from '@hapi/joi';
import Media from './media';
import { newModelInstance, fakeTitle } from './helpers';

// TODO add regex
const schema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  link: Joi.string(),
  last_retrieved: Joi.date(),
  ttl: Joi.date(),
  image: Joi.object(),
  url: Joi.string(),
  title_override: Joi.string()
});

export default newChannel;

function newChannel(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newChannel({
    title: fakeTitle(1, 5),
    description: faker.lorem.words(faker.random.number({ min: 150, max: 600 })),
    link: faker.internet.url(),
    last_retrieved: faker.date.recent(),
    ttl: faker.date.future(),
    image: Media(),
    url: faker.internet.url(),
    title_override: fakeTitle(1, 5)
  });
}
