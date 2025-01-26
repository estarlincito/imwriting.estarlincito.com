import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import PostLayout from '@/components/posts/post-content';
import PostsLayout from '@/components/posts/posts-list';
import blog from '@/lib/blog';
import { Params } from '@/types/params';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

type Gmetadata = (props: Props) => Promise<Metadata>;

export const generateMetadata: Gmetadata = async (props) => {
  const { params } = props;
  const { slug } = await params;
  const posts = blog(slug);

  if (!posts) notFound();

  const { isPost, isCategory, isSubcategory, metadata } = posts;

  if (isPost) return metadata;
  if (isCategory) return metadata;
  if (isSubcategory) return metadata;
  return {};
};

const PostPage: React.FC<Props> = async (props) => {
  const { params, searchParams } = props;
  const { page } = await searchParams;
  const { slug } = await params;
  const posts = blog(slug);

  if (!posts) notFound();
  const { data, isPost, isCategory, isSubcategory } = posts;

  if (isPost) {
    return (
      <Container size='3'>
        <PostLayout {...data[0]} />
      </Container>
    );
  }

  if (isCategory) {
    const { summary } = data[0].blogseo.cat;

    return (
      <Container size='4'>
        <Header
          slug={[{ title: data[0].category, route: data[0].slugs.cat }]}
          title={data[0].category}
          summary={summary}
          m='5'
        />

        <PostsLayout posts={data} page={page} route={data[0].slugs.cat} />
      </Container>
    );
  }

  if (isSubcategory) {
    const { summary } = data[0].blogseo.sub;

    return (
      <Container size='4'>
        <Header
          title={data[0].subcategory}
          summary={summary}
          slug={[{ title: data[0].subcategory, route: data[0].slugs.sub }]}
          m='5'
        />

        <PostsLayout posts={data} page={page} route={data[0].slugs.sub} />
      </Container>
    );
  }

  const n = 2;
  if (slug.length >= n) {
    notFound();
  }

  return null;
};

export default PostPage;
