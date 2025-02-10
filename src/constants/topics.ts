import Links from '@/types/links';
import { allBlogs } from 'contentlayer/generated';

const all_cat = Object.entries(
  allBlogs.reduce((cat: { [key: string]: string }, item) => {
    cat[item.meta.cat.route] = item.category;
    return cat;
  }, {}),
);

const all_sub = Object.entries(
  allBlogs.reduce((sub: { [key: string]: string }, item) => {
    sub[item.meta.sub.route] = item.subcategory;
    return sub;
  }, {}),
);

const catlinks: Links[] = all_cat.map(([route, label]) => ({
  route,
  label,
}));

const sublinks: Links[] = all_sub.map(([route, label]) => ({
  route,
  label,
}));

const alllinks: Links[] = [...catlinks, ...sublinks];

const TOPICS: {
  catlinks: Links[];
  sublinks: Links[];
  alllinks: Links[];
} = {
  catlinks,
  sublinks,
  alllinks,
};

export default TOPICS;
