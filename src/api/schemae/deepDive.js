import Joi from '@hapi/joi';
import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import Relation from './relation';
import SocialMediaItem from './socialMediaItem';

let DeepDive;
const articles = [
  RSSItem,
  ExternalResource,
  SocialMediaItem,
  Joi.lazy(() => DeepDive)
];
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
    featured: Joi.alternatives(...articles).allow(null),
    collection: Joi.array().items(...articles)
  }),
  author: Joi.string().required(),
  creator: Joi.string(),
  // TODO: import External Resource schema
  relationships: Relation,
  document_type: Joi.string()
    .valid('Deep Dive')
    .required()
});

export default DeepDive;
