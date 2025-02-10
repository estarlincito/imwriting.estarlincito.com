import PostsList from '@/components/posts/posts-list';
import sortByDate from '@/lib/sortDate';
import { Flex, Heading, Link, Section } from '@radix-ui/themes';
import { allBlogs } from 'contentlayer/generated';
import React from 'react';

const Latest: React.FC = () => {
  const lastThree = sortByDate(allBlogs).slice(0, 3);
  return (
    <Section>
      <Heading size='6' my='5' align={{ initial: 'center', md: 'left' }}>
        Latest Articles
      </Heading>
      <PostsList page='off' posts={lastThree} />
      <Flex justify={{ initial: 'center', md: 'start' }}>
        <Link href='/articles'>Check more articles</Link>
      </Flex>
    </Section>
  );
};

export default Latest;
