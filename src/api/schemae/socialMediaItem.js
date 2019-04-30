import Joi from '@hapi/joi';
import Relation from './relation';

export default Joi.object().keys({
  last_retrieved: Joi.date().required(),
  relationships: Relation,
  text: Joi.string().required(),
  author: Joi.string().required(),
  date: Joi.date().required()
});
