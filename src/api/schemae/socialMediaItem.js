import Joi from '@hapi/joi';
import Relation from './relation';

export default Joi.object().keys({
  last_retrieved: Joi.date(),
  relationships: Relation
});
