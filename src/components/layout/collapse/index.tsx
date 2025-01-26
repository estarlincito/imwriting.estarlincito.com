'use client';
import DarkmodeToggle from '@/components/ui/darkmode-toggle';
import useCollapse from '@/hooks/use-collapse';
import css from '@/lib/css';
import { Box, Grid } from '@radix-ui/themes';
import React from 'react';
import Nav from './nav';
import Quote from './quote';

const Styled = {
  grid: css({
    zIndex: 3,
    backgroundColor: 'var(--gray-1)',
    borderRadius: '0px 0px 10px 0px',
    borderRight: '1px solid var(--gray-5)',
    borderBottom: '1px solid var(--gray-5)',
  }),
};

const Collapse: React.FC = () => {
  const { collapse } = useCollapse();

  return (
    collapse && (
      <Grid
        position='fixed'
        left='0'
        top='9'
        p='4'
        width={{ initial: '70vw', md: '50vw', lg: '30vw' }}
        height='100vh'
        style={Styled.grid}
        align='center'
      >
        <Box ml='1'>
          <Nav />
        </Box>
        <Box ml='1'>
          <Quote />
        </Box>
        <Box>
          <DarkmodeToggle />
        </Box>
      </Grid>
    )
  );
};

export default Collapse;
