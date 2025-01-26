import SEO from '@/lib/seo';

const title = 'Contact';
const route = '/contact';
const summary =
  'Seeks collaboration on building something impactful and sustainable!';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: 'https://cdn.pixabay.com/photo/2023/10/21/09/50/hands-8331123_1280.jpg',
    alt: 'Hands Simple Simplistic',
  },
});

const CONTACT = { metadata, title, route, summary };
export default CONTACT;
