import SEO from '@/lib/seo';

const title = 'Oops!';
const route = '/not-found';

const text =
  'Looks like that page took a little detour and doesn’t exist anymore.';

const parr = {
  line1: 'No worries! Head back to',
  line2: 'and keep exploring!',
};

const { metadata } = new SEO({
  title: 'Page not found',
  summary:
    'Looks like that page took a little detour and doesn’t exist anymore.',
  route,
  img: {
    url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
    alt: title,
  },
});

const NOT_FOUNT = { metadata, title, route, text, parr };

export default NOT_FOUNT;
