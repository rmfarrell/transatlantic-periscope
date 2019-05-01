import Relation from './relation';
import Media from './media';
import Url from './url';
import faker from 'faker';
import schema from '../schemae/externalResource';
import { newModelInstance, fakeTitle } from './helpers';
import { random } from 'node-forge';
export default newExternalResource;

const docTypes = [
  'Article',
  'Policy Document',
  'Analysis',
  'Opinion',
  'Media',
  'Data'
];

function newExternalResource(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newExternalResource({
    type: 'External Resource',
    title: fakeTitle(5, 15),
    url: Url().value,
    description: faker.lorem.words(50, 255),
    author: faker.name.findName(),
    publication_date: faker.date.past(),
    image: Media().value,
    relationships: Relation().value,
    document_type: docTypes[faker.random.number(0, docTypes.length - 1)]
  });
}
