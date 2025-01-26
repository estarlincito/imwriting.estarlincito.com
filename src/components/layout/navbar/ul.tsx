import { Flex } from '@radix-ui/themes';
import React from 'react';

interface Props {
  m: 'r' | 'l';
  children: React.ReactNode;
}

const Ul: React.FC<Props> = ({ m, children }) => {
  return (
    <Flex
      direction='row'
      mr={m === 'r' ? '5' : '0'}
      ml={m === 'l' ? '5' : '0'}
      align='center'
      gap='5'
      asChild
    >
      <ul>{children}</ul>
    </Flex>
  );
};

export default Ul;
