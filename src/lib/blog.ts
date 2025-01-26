import { Slug } from '@/types/params';
import { allBlogs, Blog } from 'contentlayer/generated';
import { Metadata } from 'next';
import SEO from './seo';

const blog = (
  slug: Slug
): {
  data: Blog[];
  metadata: Metadata;
  isPost: boolean;
  isCategory: boolean;
  isSubcategory: boolean;
} | null => {
  const n0 = 0;
  const n1 = 1;
  const n2 = 2;

  const segment1 = `/${slug[n0]}`;
  const segment2 = slug[n1] ? `${segment1}/${slug[n1]}` : '';

  let metadata_: Metadata = {};

  const data = allBlogs.filter(
    (item) =>
      item.slugs.post === segment1 ||
      (item.slugs.cat === segment1 && slug.length === n1) ||
      (item.slugs.sub === segment2 && slug.length === n2)
  );

  if (data.length === n0) {
    return null;
  }

  const isPost = data[n0].slugs.post === segment1;
  const isCategory = data[n0].slugs.cat === segment1 && slug.length === n1;
  const isSubcategory = data[n0].slugs.sub === segment2 && slug.length === n2;

  if (isPost) {
    const {
      slugs: { post },
      title,
      summary,
      publishedAt,
      author,
      coverAlt,
      cover,
    } = data[n0];

    const { metadata } = new SEO({
      title,
      summary,
      type: 'article',
      publishedAt,
      authors: author,
      route: post,
      img: { url: cover, alt: coverAlt },
    });

    metadata_ = metadata;
  }
  if (isCategory) {
    const {
      slugs: { cat },
      category,

      blogseo: {
        cat: { summary, img },
      },
    } = data[n0];

    const { metadata } = new SEO({
      title: category,
      summary,
      route: cat,
      img,
    });

    metadata_ = metadata;
  }

  if (isSubcategory) {
    const {
      slugs: { sub },
      subcategory,

      blogseo: {
        cat: { summary, img },
      },
    } = data[n0];

    const { metadata } = new SEO({
      title: subcategory,
      summary,
      route: sub,
      img,
    });

    metadata_ = metadata;
  }
  return { data, metadata: metadata_, isPost, isCategory, isSubcategory };
};

export default blog;
