import faker from 'faker';
import { newModelInstance } from './helpers';
import schema from '../schemae/relationshipPage';

export default newRelationshipPage;

function newRelationshipPage(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newRelationshipPage({
    relationship_status: {
      trade: faker.random.number({ min: 0, max: 9 }),
      politics: faker.random.number({ min: 0, max: 9 }),
      defence: faker.random.number({ min: 0, max: 9 })
    },
    articles: {
      featured: {},
      collection: []
    },
    country: 'FR',
    curators: [faker.lorem.words(2)]
  });
}
