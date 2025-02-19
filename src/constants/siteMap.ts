import ABOUT from './about';
import ARTICLES from './articles';
import HOME from './home';

const page = (label: string, route: string) => ({ label, route });

const SITEMAP = [
  page(HOME.title, HOME.path),
  page(ABOUT.title, ABOUT.path),
  page(ARTICLES.title, ARTICLES.path),
];

export default SITEMAP;
