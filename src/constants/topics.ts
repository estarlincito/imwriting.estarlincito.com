import { ArrayUtils, ObjectUtils } from '@estarlincito/utils';
import { allArticles } from 'contentlayer/generated';

import Links from '@/types/links';

//categories
const categories = ArrayUtils.getUniqueByKey(
  allArticles,
  'category',
  'meta:pathnames:category',
);

const catlinks = categories.map((item) => {
  return {
    label: item['category'],
    route: item['meta:pathnames:category'],
  };
});

//subcategory
const subCategories = ArrayUtils.getUniqueByKey(
  allArticles,
  'subcategory',
  'meta:pathnames:subcategory',
);

const sublinks = subCategories.map((item) => {
  return {
    label: item['subcategory'],
    route: item['meta:pathnames:subcategory'],
  };
});

//alllinks
const alllinks: Links[] = [...catlinks, ...sublinks];

interface Topics {
  catlinks: Links[];
  sublinks: Links[];
  alllinks: Links[];
}
const TOPICS: Topics = ObjectUtils.freeze({
  alllinks,
  catlinks,
  sublinks,
});

export default TOPICS;
