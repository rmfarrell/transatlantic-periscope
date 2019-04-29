import Joi from '@hapi/joi';
import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import Relation from './relation';

const articles = [RSSItem, ExternalResource];
let DeepDive;
DeepDive = Joi.object().keys({
  custom_article: Joi.object()
    .keys({
      title: Joi.string(),
      curator: Joi.string(),
      short_description: Joi.string(),
      content: Joi.string()
    })
    .required(),
  articles: Joi.object().keys({
    featured: Joi.alternatives(...articles, Joi.lazy(() => DeepDive)),
    collection: Joi.array().items(...articles, Joi.lazy(() => DeepDive))
  }),
  author: Joi.string(),
  creator: Joi.string(),
  // TODO: import External Resource schema
  relationships: Relation
});

export default DeepDive;
