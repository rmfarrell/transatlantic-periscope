import Joi from '@hapi/joi';
import Media from './media';
import Relation from './relation';
import Channel from './channel';
import { DOCUMENT_TYPES } from '../../constants';

export default Joi.object().keys({
  id: Joi.string(),
  channel: Channel,
  item: Joi.object().keys({
    title: Joi.string().required(),
    link: Joi.string(),
    description: Joi.string(),
    author: Joi.string(),
    enclosure: Media,
    publication_date: Joi.date(),
    relationships: Relation,
    document_type: Joi.string().valid(...DOCUMENT_TYPES)
  })
});
