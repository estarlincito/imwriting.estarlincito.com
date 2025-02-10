import Header from '@/components/layout/header';
import { Blog } from 'contentlayer/generated';
import PostsList from '@/components/posts/posts-list';
import React from 'react';

interface Props {
  data: Blog[];
  page: string | undefined;
}

const Category: React.FC<Props> = ({ data, page }: Props) => {
  const { meta } = data[0];
  const { title, summary, route } = meta.cat;

  return (
    <>
      <Header slug={[{ title, route }]} title={title} summary={summary} m='5' />
      <PostsList posts={data} page={page} />
    </>
  );
};

export default Category;
