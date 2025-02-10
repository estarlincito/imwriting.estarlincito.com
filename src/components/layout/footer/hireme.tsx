import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box, Button, Flex, IconButton, Link } from '@radix-ui/themes';
import React from 'react';

const Hireme: React.FC = () => {
  return (
    <Flex gapX='2'>
      <Link href='https://x.com/estarlincito' target='_blank'>
        <IconButton variant='outline'>
          <TwitterLogoIcon />
        </IconButton>
      </Link>
      {/* <Link href=''>
        <IconButton>
          <InstagramLogoIcon />
        </IconButton>
      </Link>
      <Link href=''>
        <IconButton>
          <InstagramLogoIcon />
        </IconButton>
      </Link> */}

      <Box display={{ initial: 'block', sm: 'none' }}>
        <Link href='https://ko-fi.com/estarlincito' target='_blank'>
          <Button variant='classic'>Donate</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Hireme;
