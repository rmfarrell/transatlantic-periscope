import faker from 'faker';
import Joi from '@hapi/joi';
import { COUNTRIES, ISSUES, ENTITIES } from '../constants';
import { newModelInstance, xTimes, pluckFromArray } from './helpers';
import schema from '../schemae/relation';

export default newRelation;

function newRelation(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  const countryCodes = Object.keys(COUNTRIES),
    issues = ISSUES.slice(0),
    entities = ENTITIES.slice(0);

  return newRelation({
    primary_country: pluckFromArray(countryCodes),
    countries: xTimes(
      pluckFromArray.bind(this, countryCodes),
      faker.random.number({ min: 0, max: 4 })
    ),
    primary_issue: faker.random.boolean ? pluckFromArray(issues) : null,
    issues: xTimes(
      pluckFromArray.bind(this, issues),
      faker.random.number({ min: 0, max: 4 })
    ),
    entities: xTimes(
      pluckFromArray.bind(this, entities),
      faker.random.number({ min: 0, max: 4 })
    ),
    deep_dives: []
  });
}
