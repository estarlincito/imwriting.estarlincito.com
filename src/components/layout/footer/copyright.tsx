import { Link, Text } from '@radix-ui/themes';
import React from 'react';
import { copyright } from 'settings';

const Copyright = () => {
  return (
    <Text as='p' size='3'>
      {copyright}
      &nbsp;
      <Link weight='bold' href='/' target='_self' color='gray'>
        Estarlincito
      </Link>
    </Text>
  );
};

export default Copyright;
