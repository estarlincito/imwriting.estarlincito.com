import { Box, Em, Heading, Strong, Text } from '@radix-ui/themes';
import React from 'react';

type Topics = {
  description: string;
  list: {
    title: string;
    details: string;
  }[];
  closingNote: string;
};

const Topics: React.FC<Topics> = ({ description, list, closingNote }) => {
  return (
    <Box>
      <Heading size='4' mb='4'>
        {description}
      </Heading>
      <ul>
        {list.map((tema, id) => (
          <li key={id}>
            <Text size='3'>
              <Strong>{tema.title}</Strong> - <Em>{tema.details}</Em>
            </Text>
          </li>
        ))}
      </ul>
      <Box mt='4'>{closingNote}</Box>
    </Box>
  );
};

export default Topics;
