import Relation from './relation';
import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import faker from 'faker';
import Joi from '@hapi/joi';
import { newModelInstance, fakeTitle } from './helpers';

const schema = Joi.object().keys({
  custom_article: Joi.object()
    .keys({
      title: Joi.string(),
      curator: Joi.string(),
      short_description: Joi.string(),
      content: Joi.string()
    })
    .required(),
  articles: Joi.object().keys({
    // TODO: import External Resource schema
    featured: Joi.object(),
    collection: Joi.array().items(Joi.object())
  }),
  author: Joi.string(),
  creator: Joi.string(),
  // TODO: import External Resource schema
  relationships: Joi.object()
});

export default newDeepDive;

function newDeepDive(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newDeepDive({
    custom_article: {
      title: fakeTitle(5, 15),
      curator: faker.lorem.words(2),
      short_description: faker.lorem.words(10, 40),
      content: faker.lorem.words(250, 1000)
    },
    articles: {
      featured: {},
      collection: []
    },
    author: faker.name.name(),
    creator: faker.name.name(),
    relationships: Relation().value
  });
}
