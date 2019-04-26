import faker from 'faker';
import { newModelInstance } from './helpers';
import schema from '../schemae/url';

export default newUrl;

function newUrl(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newUrl({
    address: faker.internet.url(),
    last_accessed: faker.date.past(),
    last_retrieved: faker.date.recent(),
    status: true
  });
}
