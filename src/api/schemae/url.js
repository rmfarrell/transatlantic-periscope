import Joi from '@hapi/joi';

export default Joi.object().keys({
  address: Joi.string(),
  last_accessed: Joi.date(),
  last_retrieved: Joi.date(),
  status: Joi.boolean()
});
