import Joi from '@hapi/joi';

export default Joi.object().keys({
  url: Joi.string().required(),
  width: Joi.number(),
  height: Joi.number(),
  length: Joi.number(),
  type: Joi.string()
});
