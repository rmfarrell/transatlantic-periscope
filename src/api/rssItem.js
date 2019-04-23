import Relation from 'relation';
import Media from 'media';
import Url from 'url';

const Channel = {
  tite: '',
  description: '',
  link: '',
  last_retrieved: '',
  ttl: 0,
  image: Media,
  url: Url,
  title_override: '',
  icon: ''
};

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
