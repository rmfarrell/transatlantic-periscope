import faker from 'faker';
import { newModelInstance, xTimes, randomArticle } from './helpers';
import schema from '../schemae/relationshipPage';

export default newRelationshipPage;

function newRelationshipPage(input, hasChildren = true) {
  return newModelInstance(input, schema, fake, hasChildren);
}

function fake(hasChildren = true) {
  return newRelationshipPage({
    relationship_status: {
      trade: faker.random.number({ min: 0, max: 9 }),
      politics: faker.random.number({ min: 0, max: 9 }),
      defence: faker.random.number({ min: 0, max: 9 })
    },
    articles: {
      featured: hasChildren ? randomArticle() : null,
      collection: hasChildren
        ? xTimes(randomArticle, faker.random.number({ min: 0, max: 10 }))
        : []
    },
    country: 'FR',
    curators: [faker.lorem.words(2)]
  });
}
