import Joi from '@hapi/joi';
import Media from './media';

export default Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  link: Joi.string(),
  last_retrieved: Joi.date(),
  ttl: Joi.date(),
  image: Media,
  url: Joi.string(),
  title_override: Joi.string()
});
