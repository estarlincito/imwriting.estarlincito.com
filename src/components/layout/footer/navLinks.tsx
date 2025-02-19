import { Box, Flex, Heading, Link } from '@radix-ui/themes';
import React from 'react';

import HIREME from '@/constants/hireme';
import SITEMAP from '@/constants/siteMap';
import TOPICS from '@/constants/topics';
import Links from '@/types/links';
import Target from '@/types/target';

interface Props {
  title: string;
  links: Links[];
  target: Target;
}

const LinkList = ({ title, links, target }: Props) => {
  return (
    <Box>
      <Heading size='4'>{title}</Heading>

      <Flex direction='column' ml='3' mt='3'>
        {links.map(({ route, label }, id) => (
          <Link
            key={id}
            href={route}
            target={target}
            weight='bold'
            color='gray'
          >
            {label}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const NavLinks = () => {
  return (
    <Flex
      justify={{ initial: 'start', md: 'center' }}
      direction={{ initial: 'column', md: 'row' }}
      gap='6'
      pt='6'
    >
      <LinkList title='Sitemap' links={SITEMAP} target='_self' />
      <LinkList title='Hire me:' links={HIREME.links} target='_blank' />
      <LinkList title='Categories' links={TOPICS.catlinks} target='_self' />
    </Flex>
  );
};

export default NavLinks;
