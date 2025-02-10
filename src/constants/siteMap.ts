import ABOUT from './about';
import ARTICLES from './articles';
import HOME from './home';

type Return = {
  label: string;
  route: string;
};

type Page = (label: string, route: string) => Return;

const page: Page = (label, route) => ({ label, route });

const SITEMAP = [
  page(HOME.title, HOME.route),
  page(ABOUT.title, ABOUT.route),
  page(ARTICLES.title, ARTICLES.route),
];

export default SITEMAP;
