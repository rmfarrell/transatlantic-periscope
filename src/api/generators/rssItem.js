import faker from 'faker';
import Media from './media';
import Relation from './relation';
import Url from './url';
import Channel from './channel';
import { DOCUMENT_TYPES } from '../../constants';
import { newModelInstance, fakeTitle } from './helpers';
import schema from '../schemae/rssItem';

export default newRssItem;

function newRssItem(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newRssItem({
    id: faker.random.uuid(),
    channel: Channel().value,
    item: {
      title: fakeTitle(6, 20),
      link: Url().value,
      description: faker.lorem.words(
        faker.random.number({ min: 100, max: 255 })
      ),
      author: faker.name.name(),
      enclosure: Media().value,
      publication_date: faker.date.recent(),
      relationships: Relation().value,
      document_type:
        DOCUMENT_TYPES[
          faker.random.number({ min: 0, max: DOCUMENT_TYPES.length })
        ]
    }
  });
}
