import faker from 'faker';
import { newModelInstance } from './helpers';
import Relation from './relation';
import schema from '../schemae/socialMediaItem';
import { randomBytes } from 'crypto';

export default newSocialMediaItem;

function newSocialMediaItem(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newSocialMediaItem({
    type: 'Social Media Item',
    last_retrieved: faker.date.recent(),
    relationships: Relation().value,
    text: faker.lorem.words(faker.random.number({ min: 10, max: 150 })),
    author: faker.name.findName(),
    date: faker.date.past()
  });
}
