import ArticlesList from '@/components/articles/list';
import { sortByDate } from '@estarlincito/utils';

import { Flex, Heading, Link, Section } from '@radix-ui/themes';
import { allArticles } from 'contentlayer/generated';
import React from 'react';

const Latest = () => {
  const lastThree = sortByDate(allArticles, 'publishedTime').slice(0, 3);
  return (
    <Section>
      <Heading size='6' my='5' align={{ initial: 'center', md: 'left' }}>
        Latest Articles
      </Heading>
      <ArticlesList page='off' articles={lastThree} />
      <Flex justify={{ initial: 'center', md: 'start' }}>
        <Link href='/articles'>Check more articles</Link>
      </Flex>
    </Section>
  );
};

export default Latest;
