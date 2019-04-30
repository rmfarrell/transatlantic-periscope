import faker from 'faker';
import { newModelInstance } from './helpers';
import Relation from './relation';
import schema from '../schemae/socialMediaItem';

export default newSocialMediaItem;

function newSocialMediaItem(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newSocialMediaItem({
    last_retrieved: faker.date.recent(),
    relationships: Relation().value,
    text: faker.lorem.words({ min: 10, max: 150 }),
    author: faker.name.findName(),
    date: faker.date.past()
  });
}
