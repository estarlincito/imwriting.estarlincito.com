import { Box, Flex, Link, Strong } from '@radix-ui/themes';
import React from 'react';
import Image from 'next/image';

const Brand: React.FC = () => {
  return (
    <Box width='150px'>
      <Flex
        asChild
        direction='row'
        align='center'
        gapX='2'
        width='40px'
        height='40px'
      >
        <Link href='/'>
          <Image
            width={100}
            height={100}
            src='/assets/favicons/android-chrome-512x512.png'
            alt='Logo'
            style={{ backgroundColor: 'var(--sky-8)', borderRadius: '100%' }}
          />
          <Strong>Imwriting</Strong>
        </Link>
      </Flex>
    </Box>
  );
};

export default Brand;
