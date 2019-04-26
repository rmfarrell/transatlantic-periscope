import Relation from './relation';
import Media from './media';
import Url from './url';
import Channel from './channel';

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
