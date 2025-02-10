import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import PostsList from '@/components/posts/posts-list';
import ARTICLES from '@/constants/articles';
import { PageType } from '@/types/pagination';
import { allBlogs } from 'contentlayer/generated';
import React from 'react';

export const { metadata } = ARTICLES;
const { title, summary } = ARTICLES;
interface Props {
  searchParams: Promise<{ page: PageType }>;
}

const BlogPage: React.FC<Props> = async ({ searchParams }) => {
  const { page } = await searchParams;
  return (
    <Container size='4'>
      <Header title={title} summary={summary} m='5' />
      <PostsList page={page} posts={allBlogs} />
    </Container>
  );
};

export default BlogPage;
