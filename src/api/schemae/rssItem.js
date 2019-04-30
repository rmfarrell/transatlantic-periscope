import Joi from '@hapi/joi';
import Media from './media';
import Relation from './relation';
import Channel from './channel';
import Url from './url';

export default Joi.object().keys({
  id: Joi.string(),
  channel: Channel,
  item: Joi.object().keys({
    title: Joi.string().required(),
    link: Url,
    description: Joi.string(),
    author: Joi.string(),
    enclosure: Media,
    publication_date: Joi.date(),
    relationships: Relation,
    document_type: Joi.string().valid(
      'Article',
      'Policy Document',
      'Analysis',
      'Opinion',
      'Media',
      'Data'
    ),
    type: Joi.string()
      .valid('RSS Item')
      .required()
  })
});
