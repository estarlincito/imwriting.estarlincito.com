import articles from '@/lib/articles';
import { Params } from '@/types/params';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import PostLayout from '@/components/posts/post-content';
import Category from './pages/category';
import SubCategory from './pages/subcategory';
import Container from '@/components/layout/container';

interface Props {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

type Gmetadata = (props: Props) => Promise<Metadata>;

export const generateMetadata: Gmetadata = async (props) => {
  const { params } = props;
  const { slug } = await params;
  const posts = articles(slug);

  if (!posts) notFound();

  const { isPost, isCategory, isSubcategory, metadata } = posts;

  if (isPost) return metadata;
  if (isCategory) return metadata;
  if (isSubcategory) return metadata;
  return {};
};

const Page: React.FC<Props> = async (props) => {
  const { params, searchParams } = props;
  const { page } = await searchParams;
  const { slug } = await params;
  if (slug.length >= 3) notFound();

  const posts = articles(slug);

  if (!posts) notFound();
  const { data, isPost, isCategory, isSubcategory } = posts;

  return (
    <Container size={isPost ? '3' : '4'}>
      {isPost && <PostLayout {...data[0]} />}
      {isCategory && <Category data={data} page={page} />}
      {isSubcategory && <SubCategory data={data} page={page} />}
    </Container>
  );
};

export default Page;
