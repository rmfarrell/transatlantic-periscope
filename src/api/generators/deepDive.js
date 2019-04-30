import Relation from './relation';
import faker from 'faker';
import schema from '../schemae/deepDive';
import { newModelInstance, fakeTitle, xTimes, randomArticle } from './helpers';
import { random } from 'node-forge';

export default newDeepDive;

function newDeepDive(input) {
  return newModelInstance(input, schema, fake);
}
const rand = randomArticle();

function fake(includeArticles = true) {
  return newDeepDive({
    custom_article: {
      title: fakeTitle(5, 15),
      curator: faker.lorem.words(2),
      short_description: faker.lorem.words(10, 40),
      content: faker.lorem.words(250, 1000)
    },
    articles: {
      featured: null,
      collection: []
    },
    author: faker.name.findName(),
    creator: faker.name.findName(),
    relationships: Relation().value,
    document_type: 'Deep Dive'
  });
}
