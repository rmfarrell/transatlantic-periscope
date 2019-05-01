import ExternalResource from './externalResource';
import RSSItem from './rssItem';
import SocialMediaItem from './socialMediaItem';
import DeepDive from './deepDive';
import Joi from '@hapi/joi';

const articles = [RSSItem, ExternalResource, SocialMediaItem, DeepDive];

export default Joi.object().keys({
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
    featured: Joi.array().items(...articles),
    collection: Joi.array().items(...articles)
  }),
  country: Joi.string()
    .length(2)
    .required(),
  curators: Joi.array().items(Joi.string())
});
