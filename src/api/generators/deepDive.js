import Relation from './relation';
import faker from 'faker';
import schema from '../schemae/deepDive';
import {
  newModelInstance,
  fakeTitle,
  xTimes,
  randomArticleCollection
} from './helpers';

export default newDeepDive;

function newDeepDive(input, hasChildren) {
  return newModelInstance(input, schema, fake, hasChildren);
}

function fake(hasChildren = true) {
  return newDeepDive({
    custom_article: {
      title: fakeTitle(5, 15),
      curator: faker.lorem.words(2),
      short_description: faker.lorem.words(10, 40),
      content: faker.lorem.words(250, 1000)
    },
    articles: {
      featured: hasChildren ? randomArticleCollection(0, 3) : [],
      collection: hasChildren ? randomArticleCollection(5, 20) : []
    },
    author: faker.name.findName(),
    creator: faker.name.findName(),
    relationships: Relation().value,
    document_type: 'Deep Dive'
  });
}
