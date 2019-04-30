import Joi from '@hapi/joi';
import faker from 'faker';
import RSSItem from './rssItem';
import ExternalResource from './externalResource';
import DeepDive from './deepDive';
import SocialMediaItem from './socialMediaItem';

const articleTypes = [
  'externalResource',
  'deepDive',
  'rssItem',
  'socialMediaItem'
];

export {
  newModelInstance,
  xTimes,
  pluckFromArray,
  initialCaps,
  fakeTitle,
  randomArticle
};

function newModelInstance(input, schema, randomizer) {
  if (!input && randomizer) {
    return randomizer();
  }
  const { error, value } = Joi.validate(input, schema);
  return { error, value };
}

function xTimes(func = () => {}, times) {
  let acc = [];
  for (let x = 0; x < times; x++) {
    acc.push(func());
  }
  return acc;
}

function pluckFromArray(arr) {
  const idx = faker.random.number({ min: 0, max: arr.length - 1 });
  return arr.splice(idx, 1)[0];
}

function initialCaps(str = '') {
  return str
    .split(' ')
    .map(word => {
      const letters = word.split('');
      letters[0] = letters[0].toUpperCase();
      return letters.join('');
    })
    .join(' ');
}

function fakeTitle(min, max) {
  return initialCaps(faker.lorem.words(faker.random.number({ min, max })));
}

function randomArticle() {
  const roll = faker.random.number({ min: 0, max: 100 });
  const chanceMatrix = [
    [70, RSSItem],
    [60, () => DeepDive(false)],
    [30, ExternalResource],
    [0, SocialMediaItem]
  ];
  return SocialMediaItem().value;
  for (let x = 0; x < chanceMatrix.length; x++) {
    if (roll > chanceMatrix[x][0]) {
      console.log(chanceMatrix[x][1]);
      return chanceMatrix[x][1](false).value;
    }
  }
}
