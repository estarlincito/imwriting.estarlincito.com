import { Slug } from '@/types/params';
import { allBlogs, Blog } from 'contentlayer/generated';
import { Metadata } from 'next';
import SEO from './seo';

interface Articles {
  data: Blog[];
  metadata: Metadata;
  isPost: boolean;
  isCategory: boolean;
  isSubcategory: boolean;
}
const articles = (slug: Slug): Articles | null => {
  const segment1 = slug.length >= 1 ? `/articles/${slug[0]}` : '';
  const segment2 = slug.length === 2 ? `${segment1}/${slug[1]}` : '';

  let metadata_: Metadata = {};

  const data = allBlogs.filter(
    (item) =>
      item.meta.post.route === segment1 ||
      (item.meta.cat.route === segment1 && slug.length === 1) ||
      (item.meta.sub.route === segment2 && slug.length === 2),
  );

  if (data.length === 0) {
    return null;
  }

  const value = data[0];

  const isPost = value.meta.post.route === segment1;
  const isCategory = value.meta.cat.route === segment1 && slug.length === 1;
  const isSubcategory = value.meta.sub.route === segment2 && slug.length === 2;

  if (isPost) {
    const { metadata } = new SEO(value.meta.post);
    metadata_ = metadata;
  }

  if (isCategory) {
    const { metadata } = new SEO(value.meta.cat);
    metadata_ = metadata;
  }

  if (isSubcategory) {
    const { metadata } = new SEO(value.meta.sub);
    metadata_ = metadata;
  }
  return { data, metadata: metadata_, isPost, isCategory, isSubcategory };
};

export default articles;
