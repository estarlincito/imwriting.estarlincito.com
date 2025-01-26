import HOME from '@/constants/home';
import { Link, Text } from '@radix-ui/themes';
import React from 'react';

const Brand: React.FC = () => {
  return (
    <Link href='/' target='_self'>
      <Text as='span' ml='1' size={{ md: '7' }} weight='bold'>
        {HOME.title}
      </Text>
    </Link>
  );
};

export default Brand;
