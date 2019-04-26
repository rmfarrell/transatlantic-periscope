import faker from 'faker';
import Joi from '@hapi/joi';
import { newModelInstance } from './helpers';
import Relation from './relation';

const schema = Joi.object().keys({
  last_retrieved: Joi.date(),
  relationships: Joi.object()
});

export default newSocialMediaItem;

function newSocialMediaItem(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newSocialMediaItem({
    last_retrieved: faker.date.recent(),
    relationships: Relation().value
  });
}
