import Header from '@/components/layout/header';
import { type Articles } from 'contentlayer/generated';
import ArticlesList from '@/components/articles/list';
import React from 'react';

interface Props {
  articles: Articles[];
  page: string | undefined;
}

const Category = ({ articles, page }: Props) => {
  const {
    meta: {
      category: { title, description },
      pathnames,
    },
  } = articles[0];

  return (
    <>
      <Header
        slug={[{ route: pathnames.category, title }]}
        title={title}
        description={description}
        m='5'
      />
      <ArticlesList articles={articles} page={page} />
    </>
  );
};

export default Category;
