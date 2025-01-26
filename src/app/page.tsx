import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import PostsLayout from '@/components/posts/posts-list';
import HOME from '@/constants/home';
import { PageType } from '@/types/pagination';
import { allBlogs } from 'contentlayer/generated';
import React from 'react';

export const { metadata } = HOME;
const { title, summary } = HOME;
interface Props {
  searchParams: Promise<{ page: PageType }>;
}

const BlogPage: React.FC<Props> = async ({ searchParams }) => {
  const { page } = await searchParams;
  return (
    <Container size='4'>
      <Header title={title} summary={summary} m='5' />
      <PostsLayout route={HOME.route} page={page} posts={allBlogs} />
    </Container>
  );
};

export default BlogPage;
