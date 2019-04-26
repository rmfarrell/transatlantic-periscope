import faker from 'faker';
import Media from './media';
import schema from '../schemae/channel';
import { newModelInstance, fakeTitle } from './helpers';

export default newChannel;

function newChannel(input) {
  return newModelInstance(input, schema, fake);
}

function fake() {
  return newChannel({
    title: fakeTitle(1, 5),
    description: faker.lorem.words(faker.random.number({ min: 150, max: 600 })),
    link: faker.internet.url(),
    last_retrieved: faker.date.recent(),
    ttl: faker.date.future(),
    image: Media().value,
    url: faker.internet.url(),
    title_override: fakeTitle(1, 5)
  });
}
