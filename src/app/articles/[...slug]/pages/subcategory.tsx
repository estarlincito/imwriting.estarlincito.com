import Header from '@/components/layout/header';
import { Blog } from 'contentlayer/generated';
import PostsList from '@/components/posts/posts-list';
import React from 'react';

interface Props {
  data: Blog[];
  page: string | undefined;
}

const SubCategory: React.FC<Props> = ({ data, page }: Props) => {
  const { meta } = data[0];
  const { title, summary, route } = meta.sub;
  return (
    <>
      <Header title={title} summary={summary} slug={[{ title, route }]} m='5' />
      <PostsList posts={data} page={page} />
    </>
  );
};

export default SubCategory;
