import Relation from './relation';
import faker from 'faker';
import schema from '../schemae/deepDive';
import { newModelInstance, fakeTitle } from './helpers';

export default newDeepDive;

function newDeepDive(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newDeepDive({
    custom_article: {
      title: fakeTitle(5, 15),
      curator: faker.lorem.words(2),
      short_description: faker.lorem.words(10, 40),
      content: faker.lorem.words(250, 1000)
    },
    articles: {
      featured: {},
      collection: []
    },
    author: faker.name.name(),
    creator: faker.name.name(),
    relationships: Relation().value
  });
}