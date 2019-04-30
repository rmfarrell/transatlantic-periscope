import faker from 'faker';
import Media from './media';
import Relation from './relation';
import Url from './url';
import Channel from './channel';
import { newModelInstance, fakeTitle } from './helpers';
import schema from '../schemae/rssItem';

export default newRssItem;

const validDocTypes = [
  'Article',
  'Policy Document',
  'Analysis',
  'Opinion',
  'Media',
  'Data'
];

function newRssItem(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newRssItem({
    id: faker.random.uuid(),
    channel: Channel().value,
    item: {
      type: 'RSS Item',
      title: fakeTitle(6, 20),
      link: Url().value,
      description: faker.lorem.words(
        faker.random.number({ min: 10, max: 100 })
      ),
      author: faker.name.findName(),
      enclosure: Media().value,
      publication_date: faker.date.recent(),
      relationships: Relation().value,
      document_type:
        validDocTypes[
          faker.random.number({ min: 0, max: validDocTypes.length - 1 })
        ]
    }
  });
}
