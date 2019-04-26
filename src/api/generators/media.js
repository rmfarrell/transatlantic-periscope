import faker from 'faker';
import { newModelInstance } from './helpers';
import schema from '../schemae/media';

export default newMedia;

function newMedia(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newMedia({
    url: faker.image.imageUrl(),
    width: faker.random.number({ min: 400, max: 1200 }),
    height: faker.random.number({ min: 400, max: 1200 }),
    length: faker.random.number({ min: 400, max: 1200 }),
    type: 'image/jpeg'
  });
}
