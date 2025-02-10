import { type ComputedFields } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import dataseo from './dataseo';

const prop = `{
  title: string;
  route: string;
  summary: string;
  img: {
    url: string;
    alt: string;
  };
}`;

export const meta = `{
  post: {
    title: string;
    summary: string;
    publishedAt: string;
    authors: string;
    type: 'article';
    route: string;
    img: {
      url: string;
      alt: string;
    };
  };
  cat: ${prop}
  sub: ${prop}
}`;

export const Urls = `{
  cat: string;
  sub: string;
  post: string;
}`;

const displayed = (minutes: number) => {
  const round = Math.ceil(minutes);
  return round === 1 ? `${round} minute` : `${round} minutes`;
};

const toSlug = (str: string) => {
  return str
    .normalize('NFD') // Remove accents
    .replace(/[\u0300-\u036f]/g, '') // Strip diacritics
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/[^a-z0-9-]/g, ''); // Remove special characters
};

export const computedFields: ComputedFields = {
  readingTime: {
    type: 'string',
    resolve: (doc) => displayed(readingTime(doc.body.raw).minutes),
  },

  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },

  meta: {
    type: meta as 'string',
    resolve: (doc) => {
      const {
        title,
        summary,
        publishedAt,
        author,
        cover,
        coverAlt,
        category,
        subcategory,
      } = doc;

      const url_post = `/articles/${doc._raw.flattenedPath}`;
      const url_cat = `/articles/${toSlug(category)}`;
      const url_sub = `/articles/${toSlug(category)}/${toSlug(subcategory)}`;

      return {
        post: {
          title,
          summary,
          type: 'article',
          publishedAt,
          authors: author,
          route: url_post,
          img: { url: cover, alt: coverAlt },
        },
        cat: dataseo(category, url_cat),
        sub: dataseo(subcategory, url_sub),
      };
    },
  },
};
