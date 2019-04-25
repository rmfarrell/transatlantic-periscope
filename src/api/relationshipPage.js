import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import DeepDive from './deepDive';
import faker from 'faker';
import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  relationship_status: Joi.object()
    .keys({
      trade: Joi.number()
        .min(0)
        .max(9),
      politics: Joi.number()
        .min(0)
        .max(9),
      defence: Joi.number()
        .min(0)
        .max(9)
    })
    .required(),
  articles: Joi.object().keys({
    featured: Joi.object(),
    collection: Joi.array().items(Joi.object())
  }),
  country: Joi.string()
    .length(2)
    .required(),
  curators: Joi.array().items(Joi.string())
});

export default newRelationshipPage;

function newRelationshipPage(input) {
  if (!input) {
    return fake();
  }
  const { error, value } = Joi.validate(input, schema);
  return { error, value };
}

function fake() {
  return newRelationshipPage({
    relationship_status: {
      trade: faker.random.number({ min: 0, max: 9 }),
      politics: faker.random.number({ min: 0, max: 9 }),
      defence: faker.random.number({ min: 0, max: 9 })
    },
    articles: {
      featured: {},
      collection: []
    },
    country: 'FR',
    curators: []
  });
}
