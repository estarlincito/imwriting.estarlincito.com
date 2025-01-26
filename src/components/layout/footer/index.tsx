import { Box, Separator } from '@radix-ui/themes';
import React from 'react';
import Nav from './nav';

const Footer: React.FC = () => {
  return (
    <Box asChild p='5'>
      <footer>
        <Separator size='4' />
        <Nav />
      </footer>
    </Box>
  );
};

export default Footer;
