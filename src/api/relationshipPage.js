import ExternalResource from 'externalResource';
import RSSItem from 'rssItem';
import DeepDive from 'deepDive';

export default {
  relationship_status: {},
  articles: {
    featured: ExternalResource,
    collection: [ExternalResource, RSSItem, DeepDive]
  },
  country: '',
  curators: ''
};
