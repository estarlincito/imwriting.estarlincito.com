import { notFound } from 'next/navigation';
import React from 'react';

import ArticleContent from '@/components/articles/content';
import Container from '@/components/layout/container';
import getArticles from '@/lib/articles';
import { Params } from '@/types/params';

import Category from './pages/category';
import SubCategory from './pages/subcategory';

interface Props {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const generateMetadata = async (props: Props) => {
  const { params } = props;
  const { slug } = await params;
  const articlesData = getArticles(slug);

  if (!articlesData) notFound();

  const { articles, type } = articlesData;

  if (type === 'article') return articles[0].meta.article;
  if (type === 'category') return articles[0].meta.category;
  if (type === 'subCategory') return articles[0].meta.subcategory;
  return {};
};

const Page = async (props: Props) => {
  const { params, searchParams } = props;
  const { page } = await searchParams;
  const { slug } = await params;
  if (slug.length >= 3) notFound();

  const articlesData = getArticles(slug);
  if (!articlesData) notFound();
  const { articles, type } = articlesData;

  return (
    <Container size={type === 'article' ? '3' : '4'}>
      {type === 'article' && <ArticleContent {...articles[0]} />}
      {type === 'category' && <Category articles={articles} page={page} />}
      {type === 'subCategory' && (
        <SubCategory articles={articles} page={page} />
      )}
    </Container>
  );
};

export default Page;
