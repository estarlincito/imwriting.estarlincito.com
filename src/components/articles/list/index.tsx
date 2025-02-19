import { pagination, sortByDate } from '@estarlincito/utils';
import { Box, Grid } from '@radix-ui/themes';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

import { PageType } from '@/types/pagination';

import Card from './card';
import Pagination from './pagination';

interface Props {
  articles: Articles[];
  page: PageType;
}

const ArticlesList = ({ articles, page }: Props) => {
  const articles_ = sortByDate(articles, 'publishedTime');
  const { data, next, prev, start, end, length } = pagination(page, articles_);

  return (
    <Box>
      <Grid gap='1.25rem' justify='center' columns='repeat(auto-fill, 350px)'>
        {data.map((article, id) => (
          <Box as='div' key={id}>
            <Card {...article} />
          </Box>
        ))}
      </Grid>

      <Box m='5'>
        {page !== 'off' && (
          <Pagination
            next={next}
            prev={prev}
            start={start}
            end={end}
            length={length}
            title={'Articles'}
          />
        )}
      </Box>
    </Box>
  );
};

export default ArticlesList;
