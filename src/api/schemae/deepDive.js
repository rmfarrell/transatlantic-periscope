import Joi from '@hapi/joi';
import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import DeepDive from './deepDive';
import Relation from './relation';

const articles = [RSSItem, DeepDive, ExternalResource];

export default Joi.object().keys({
  custom_article: Joi.object()
    .keys({
      title: Joi.string(),
      curator: Joi.string(),
      short_description: Joi.string(),
      content: Joi.string()
    })
    .required(),
  articles: Joi.object().keys({
    featured: Joi.alternatives(...articles),
    collection: Joi.array().items(...articles)
  }),
  author: Joi.string(),
  creator: Joi.string(),
  // TODO: import External Resource schema
  relationships: Relation
});
