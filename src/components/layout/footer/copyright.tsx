import { Link, Text } from '@radix-ui/themes';
import React from 'react';

const Copyright: React.FC = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <Text as='p' size='3'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Link weight='bold' href='/' target='_self' color='gray'>
        Estarlincito
      </Link>
    </Text>
  );
};

export default Copyright;
