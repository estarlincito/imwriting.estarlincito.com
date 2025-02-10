import Image from '@/components/ui/image';
import css from '@/lib/css';
import dateFormat from '@/lib/dateFormat';
import {
  Box,
  Card as CardRadix,
  Flex,
  Grid,
  Link,
  Text,
} from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import React from 'react';

const Styled = {
  card: css({
    padding: 0,
  }),
};

const Card: React.FC<Blog> = (props) => {
  const { meta, title, author, cover, publishedAt } = props;
  const { route } = meta.post;

  return (
    <CardRadix variant='surface' style={Styled.card}>
      <Box height='15rem' asChild>
        <figure>
          <Link href={route} target='_self'>
            <Image src={cover} alt={title} />
          </Link>
        </figure>
      </Box>

      <Grid gap='1' height='7rem' p='3' asChild>
        <figcaption>
          <Link href={route} size='3' target='_self' weight='bold' color='gray'>
            {title}
          </Link>

          <Flex direction='row' justify='between'>
            <Text as='span'>
              By&nbsp;
              <Link href='/' target='_self' color='gray' weight='bold'>
                {author}
              </Link>
            </Text>

            <time dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
          </Flex>
        </figcaption>
      </Grid>
    </CardRadix>
  );
};

export default Card;
