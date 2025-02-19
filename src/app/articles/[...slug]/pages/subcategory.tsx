import Header from '@/components/layout/header';
import { type Articles } from 'contentlayer/generated';
import ArticlesList from '@/components/articles/list';
import React from 'react';

interface Props {
  articles: Articles[];
  page: string | undefined;
}

const SubCategory = ({ articles, page }: Props) => {
  const {
    meta: {
      pathnames,
      subcategory: { title, description },
    },
  } = articles[0];

  return (
    <>
      <Header
        title={title}
        description={description}
        slug={[{ route: pathnames.subcategory, title }]}
        m='5'
      />
      <ArticlesList articles={articles} page={page} />
    </>
  );
};

export default SubCategory;
