import { Flex, Text } from '@radix-ui/themes';
import React from 'react';

interface InfProps {
  color?: 'sky' | 'gray' | 'blue' | 'red';
  label: string;
  children: React.ReactNode;
}

const Inf: React.FC<InfProps> = ({ color, label, children }) => {
  return (
    <Flex align='center' gap='1' justify='center' direction='row'>
      <Text asChild color={color}>
        {children}
      </Text>
      <Text>{label}</Text>
    </Flex>
  );
};

export default Inf;
