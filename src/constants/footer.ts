import Links from '@/types/links';
import { allBlogs } from 'contentlayer/generated';

const ALL_CAT = Object.entries(
  allBlogs.reduce((cat: { [key: string]: string }, item) => {
    cat[item.slugs.cat] = item.category;
    return cat;
  }, {})
);

const CATS_LINKS: Links[] = ALL_CAT.map(([route, label]) => ({
  route,
  label,
}));

export default CATS_LINKS;
