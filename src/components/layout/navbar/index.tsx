'use client';
import DarkmodeToggle from '@/components/ui/darkmode-toggle';
import css from '@/lib/css';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import Brand from './brand';
import HireMeLink from './hiremelink';
import MenuToggle from './menu-toggle';
import TwitterLink from './twitterlink';
import Ul from './ul';

const Styled = {
  flex: css({
    backgroundColor: 'var(--gray-1)',
    zIndex: 1,
    userSelect: 'none',
    borderBottom: '1px solid var(--gray-5)',
  }),
};

const Navbar: React.FC = () => {
  return (
    <Flex
      asChild
      justify='between'
      position='fixed'
      top='0'
      bottom='0'
      right='0'
      left='0'
      height='70px'
      style={Styled.flex}
    >
      <nav>
        <Ul m='l'>
          <MenuToggle />
          <Brand />
        </Ul>

        <Ul m='r'>
          <DarkmodeToggle />
          <HireMeLink />
          <TwitterLink />
        </Ul>
      </nav>
    </Flex>
  );
};

export default Navbar;
