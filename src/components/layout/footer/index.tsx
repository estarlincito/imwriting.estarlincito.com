import { Box, Flex, Separator } from '@radix-ui/themes';
import React from 'react';
import Copyright from './copyright';
import Hireme from './hireme';
import ThemeTogle from './theme';
import Brand from '../navbar/brand';

const Footer: React.FC = () => {
  return (
    <Box mt='5'>
      <Separator size='4' />
      <Box p='5' asChild>
        <footer>
          <Flex
            gap='5'
            justify='between'
            align={{ initial: 'start', md: 'center' }}
            direction={{ initial: 'column', md: 'row' }}
          >
            <Box display={{ initial: 'block', sm: 'none' }}>
              <Brand />
            </Box>
            <Hireme />
            <ThemeTogle />
          </Flex>

          <Box mt='3'>
            <Copyright />
          </Box>
        </footer>
      </Box>
    </Box>
  );
};

export default Footer;
