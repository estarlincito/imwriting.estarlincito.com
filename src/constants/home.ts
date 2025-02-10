import SEO from '@/lib/seo';

const title = 'Home';
const route = '/';
const production = 'https://imwriting.estarlincito.com';
const summary =
  'Here, you will dive into thought-provoking discussions on philosophy, psychology, web development, and technology. Imwrating is a space for exploring how innovation reshapes our thinking, emotions, and interactions with the world.💡✨';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: '',
    alt: '',
  },
});

const HOME = { metadata, title, route, summary, production };
export default HOME;
