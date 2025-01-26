'use client';
import IconButton from '@/components/ui/Icon-button';
import useCollapse from '@/hooks/use-collapse';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

const MenuToggle: React.FC = () => {
  const { collapse, togleCollapse } = useCollapse();

  return (
    <IconButton variant='soft' onClick={togleCollapse}>
      {collapse ? (
        <Cross1Icon width='18' height='18' />
      ) : (
        <HamburgerMenuIcon width='18' height='18' />
      )}
    </IconButton>
  );
};
export default MenuToggle;
