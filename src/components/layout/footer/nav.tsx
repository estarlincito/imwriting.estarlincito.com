import CATS_LINKS from '@/constants/footer';
import HIREME from '@/constants/hireme';
import SITEMAP from '@/constants/siteMap';
import Links from '@/types/links';
import Target from '@/types/target';
import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes';
import React from 'react';

interface LinkListProps {
  title: string;
  links: Links[];
  target: Target;
}

const LinkList: React.FC<LinkListProps> = ({
  title,
  links,
  target,
}: LinkListProps) => {
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

const NavLinks: React.FC = () => {
  return (
    <Flex
      justify={{ initial: 'start', md: 'center' }}
      direction={{ initial: 'column', md: 'row' }}
      gap='6'
      pt='6'
    >
      <LinkList title='Sitemap' links={SITEMAP} target='_self' />
      <LinkList title='Hire me:' links={HIREME.links} target='_blank' />
      <LinkList title='Categories' links={CATS_LINKS} target='_self' />
    </Flex>
  );
};

const Copyright: React.FC = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <Text as='p' size='3'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Link weight='bold' href='/' target='_self' color='gray'>
        Estarlincito
      </Link>
    </Text>
  );
};

const Nav: React.FC = () => {
  return (
    <Flex direction='column' gap='5'>
      <NavLinks />
      <Copyright />
    </Flex>
  );
};

export default Nav;
