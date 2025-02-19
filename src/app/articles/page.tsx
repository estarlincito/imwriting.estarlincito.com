import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import ArticlesList from '@/components/articles/list';
import ARTICLES from '@/constants/articles';
import { PageType } from '@/types/pagination';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

export const { metadata } = ARTICLES;
interface Props {
  searchParams: Promise<{ page: PageType }>;
}

const Page = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  return (
    <Container size='4'>
      <Header title={ARTICLES.title} description={ARTICLES.description} m='5' />
      <ArticlesList page={page} articles={allArticles} />
    </Container>
  );
};

export default Page;
