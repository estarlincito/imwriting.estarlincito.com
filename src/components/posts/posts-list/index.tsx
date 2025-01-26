import pagination from '@/lib/pagination';
import sortByDate from '@/lib/sortDate';
import { PageType } from '@/types/pagination';
import { Box, Grid } from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import React from 'react';
import Card from './card';
import Pagination from './pagination';

interface Props {
  posts: Blog[];
  page: PageType;
  route: string;
}

const PostsList: React.FC<Props> = ({ posts, page, route }) => {
  const _posts = sortByDate(posts);
  const { data, next, prev, start, end, length } = pagination(page, _posts);

  return (
    <Box>
      <Grid gap='1.25rem' justify='center' columns='repeat(auto-fill, 350px)'>
        {data.map((post, id) => (
          <Box as='div' key={id}>
            <Card {...post} />
          </Box>
        ))}
      </Grid>

      <Box m='5'>
        <Pagination
          route={route}
          next={next}
          prev={prev}
          start={start}
          end={end}
          length={length}
          title={'Articles'}
        />
      </Box>
    </Box>
  );
};

export default PostsList;
