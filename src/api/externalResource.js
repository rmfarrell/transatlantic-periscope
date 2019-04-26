import Relation from './relation';
import Media from './media';
import Url from './url';
import faker from 'faker';
import Joi from '@hapi/joi';
import { newModelInstance, fakeTitle } from './helpers';

const schema = Joi.object().keys({
  title: Joi.string().required(),
  url: Joi.object().required(),
  description: Joi.string(),
  author: Joi.string(),
  publication_date: Joi.date(),
  image: Joi.object()

  // suggested
  // type: '',
  // relationships: Relation
});

export default newExternalResource;

function newExternalResource(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newExternalResource({
    title: fakeTitle(5, 15),
    url: Url().value,
    description: faker.lorem.words(50, 255),
    author: faker.name.findName(),
    publication_date: faker.date.past(),
    image: Media().value
  });
}
