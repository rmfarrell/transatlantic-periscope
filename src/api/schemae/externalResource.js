import Relation from './relation';
import Media from './media';
import Url from './url';
import Joi from '@hapi/joi';

export default Joi.object().keys({
  title: Joi.string().required(),
  url: Url.required(),
  description: Joi.string(),
  author: Joi.string(),
  publication_date: Joi.date(),
  image: Media,
  relationships: Relation

  // suggested
  // type: '',
});
