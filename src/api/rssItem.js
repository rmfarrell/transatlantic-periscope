import faker from 'faker';
import Joi from '@hapi/joi';
import Media from './media';
import Relation from './relation';
import Channel from './channel';
import { DOCUMENT_TYPES } from '../constants';
import { newModelInstance, fakeTitle } from './helpers';

const schema = Joi.object().keys({
  id: Joi.string(),
  channel: Joi.object().keys(),
  item: Joi.object().keys({
    title: Joi.string().required(),
    link: Joi.string(),
    description: Joi.string(),
    author: Joi.string(),
    enclosure: Joi.object(),
    publication_date: Joi.date(),
    relationships: Joi.object(),
    document_type: Joi.string().valid(...DOCUMENT_TYPES)
  })
});

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
      link: faker.internet.url(),
      description: faker.lorem.words(
        faker.random.number({ min: 100, max: 255 })
      ),
      author: faker.lorem.words(2),
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

/*

const Item = {
  title: '',
  link: Url,
  description: '',
  author: '',
  enclosure: Media,
  publication_date: '',
  relationships: Relation,

  // derived fields
  document_type: ''
};

export default {
  id: '',
  channel: Channel,
  item: Item
};
*/
