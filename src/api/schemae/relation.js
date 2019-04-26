import Joi from '@hapi/joi';
import { COUNTRIES } from '../constants';

export default Joi.object().keys({
  primary_country: Joi.string().length(2),
  countries: Joi.array().items(Joi.string().valid(...Object.keys(COUNTRIES))),
  primary_issue: Joi.string().empty(''),
  issues: Joi.array().items(Joi.string()),
  entities: Joi.array().items(Joi.string()),
  deep_dives: Joi.array().items(Joi.object())
});
