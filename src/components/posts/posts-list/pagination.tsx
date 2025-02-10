import IconButton from '@/components/ui/Icon-button';
import css from '@/lib/css';
import { LinkType } from '@/types/pagination';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Flex, Link, Strong, Text } from '@radix-ui/themes';
import React from 'react';

const Styled = { link: css({ display: 'inline-flex', alignItems: 'center' }) };

interface Props {
  prev: LinkType;
  next: LinkType;
  length: number;
  start: number;
  end: number;
  title: string;
}

const Pagination: React.FC<Props> = (props) => {
  const { next, prev, length, start, end, title } = props;
  return (
    <Flex gapX='2'>
      <Box>
        <Strong>{title}</Strong>
      </Box>

      <Flex gapX='3' align='center'>
        <Text>
          {start}–{end} of {length}
        </Text>

        {!prev.stop ? (
          <Link href={prev.query} style={Styled.link}>
            <IconButton size='1' variant='ghost'>
              <ChevronLeftIcon width='18' height='18' />
            </IconButton>
          </Link>
        ) : (
          <ChevronLeftIcon width='18' height='18' />
        )}

        {!next.stop ? (
          <Link href={next.query} style={Styled.link}>
            <IconButton size='1' variant='ghost'>
              <ChevronRightIcon width='18' height='18' />
            </IconButton>
          </Link>
        ) : (
          <ChevronRightIcon width='18' height='18' />
        )}
      </Flex>
    </Flex>
  );
};

export default Pagination;
