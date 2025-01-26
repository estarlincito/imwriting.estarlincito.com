'use client';
import useCollapse from '@/hooks/use-collapse';
import css from '@/lib/css';
import { Box } from '@radix-ui/themes';
import React from 'react';

const Styled = {
  box: css({
    backgroundColor: '#000000d6',
    zIndex: 2,
  }),
};
const Opacity: React.FC = () => {
  const { collapse, togleCollapse } = useCollapse();

  return (
    collapse && (
      <Box
        as='div'
        onClick={togleCollapse}
        position='fixed'
        top='9'
        bottom='0'
        right='0'
        left='0'
        style={Styled.box}
      />
    )
  );
};

export default Opacity;
