'use client';
import css from '@/lib/css';
import { Box, Flex, Link, Strong, Text } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  slug: { title: string; route: string }[];
}

const styled = css({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const Breadcrumb = ({ slug }: Props) => {
  const pathname = usePathname();
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return (
    <Flex align='center' gap='1'>
      <Link size='2' href='/' target='_self'>
        <Strong>Home</Strong>
      </Link>
      <Text color='sky' size='2' as='span'>
        <Strong>/</Strong>
      </Text>

      <Link
        size='2'
        href={firstSlug.route}
        target='_self'
        underline={pathname === firstSlug.route ? 'always' : 'hover'}
      >
        <Strong>{firstSlug.title}</Strong>
      </Link>

      {secondSlug && (
        <>
          <Text color='sky' size='2' as='span'>
            <Strong>/</Strong>
          </Text>

          <Link size='2' href={secondSlug.route} target='_self'>
            <Strong>{secondSlug.title}</Strong>
          </Link>
        </>
      )}

      {thirdSlug && (
        <>
          <Text color='sky' size='1' as='span'>
            <Strong>/</Strong>
          </Text>

          <Box
            asChild
            maxWidth={{
              initial: '5.625rem',
              md: '12.5rem',
            }}
            overflow='hidden'
            style={styled}
          >
            <Link size='2' href={thirdSlug.route} target='_self'>
              <Strong>{thirdSlug.title}</Strong>
            </Link>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default Breadcrumb;
