import { allArticles, type Articles } from 'contentlayer/generated';

import { Slug } from '@/types/params';
type Type = 'article' | 'category' | 'subCategory';

const getArticles = (slug: Slug) => {
  if (!slug.length) return null;
  const segment1 = `/articles/${slug[0]}`;
  const segment2 = slug.length === 2 ? `${segment1}/${slug[1]}` : '';

  let type = 'article' as Type;

  const articles = allArticles.filter(({ meta: { pathnames } }: Articles) => {
    const isArticle = pathnames.article === segment1;
    const isCategory = pathnames.category === segment1 && slug.length === 1;
    const isSubCategory =
      pathnames.subcategory === segment2 && slug.length === 2;

    if (isArticle) type = 'article';
    else if (isCategory) type = 'category';
    else if (isSubCategory) type = 'subCategory';

    return isArticle || isCategory || isSubCategory;
  });

  return articles.length ? { articles, type } : null;
};

export default getArticles;
