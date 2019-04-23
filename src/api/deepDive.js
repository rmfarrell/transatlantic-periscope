import Relation from 'relation';
import ExternalResource from 'externalResource';
import RSSItem from 'rssItem';

const CustomArticle = {
  title: '',
  curator: '',
  short_description: '',
  content: ''
};

const DeepDive = {
  custom_article: CustomArticle,
  articles: {
    featured: ExternalResource,
    collection: [ExternalResource, RSSItem]
  },
  author: '',
  creator: '',
  relationships: Relation
};

export default DeepDive;
