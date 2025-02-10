import SEO from '@/lib/seo';

const title = 'Articles';
const route = '/articles';
const production = 'https://imwriting.estarlincito.com/articles';
const summary =
  'Exploring the intersections of philosophy, psychology, and technology through thoughtful writing.';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    alt: 'A MacBook and a mug.',
  },
});

const ARTICLES = { metadata, title, route, summary, production };
export default ARTICLES;
