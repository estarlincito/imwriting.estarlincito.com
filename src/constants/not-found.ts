import { GenerateMetadata, ObjectUtils } from '@estarlincito/utils';
import { locale, siteName, url } from 'settings';

const constants = ObjectUtils.create({
  contents: [
    'Looks like that page took a little detour and doesn’t exist anymore. No worries! Head back to [**Home**](https://estarlincito.com) and keep exploring!',
  ],
  description:
    'Looks like that page took a little detour and doesn’t exist anymore.',
  path: '/not-found',
  title: 'Oops!',
});

const { description, title, path } = constants;

const metadata = GenerateMetadata.website({
  description,
  images: [
    {
      alt: 'Page not found cover',
      url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
    },
  ],
  locale,
  siteName,
  title,
  url: `${url}${path}`,
});

const NOTFOUNT = ObjectUtils.freeze({ ...constants, metadata });
export default NOTFOUNT;
