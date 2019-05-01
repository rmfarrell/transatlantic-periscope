import Joi from '@hapi/joi';
import Media from './media';
import Relation from './relation';
import Channel from './channel';
import Url from './url';

export default Joi.object().keys({
  channel: Channel,
  type: Joi.string()
    .valid('RSS Item')
    .required(),
  document_type: Joi.string().valid(
    'Article',
    'Policy Document',
    'Analysis',
    'Opinion',
    'Media',
    'Data'
  ),
  item: Joi.object().keys({
    title: Joi.string().required(),
    link: Url,
    description: Joi.string(),
    author: Joi.string(),
    enclosure: Media,
    publication_date: Joi.date(),
    relationships: Relation
  })
});
