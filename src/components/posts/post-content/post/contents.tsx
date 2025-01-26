import ChildrenProps from '@/types/children';
import { Flex } from '@radix-ui/themes';
import React from 'react';

const Contents: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Flex direction='column' gap='5'>
      {children}
    </Flex>
  );
};

export default Contents;
