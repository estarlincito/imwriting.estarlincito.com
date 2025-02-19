import { Box, Heading, Link } from '@radix-ui/themes';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import NOTFOUNT from '@/constants/not-found';
import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';

export const { metadata } = NOTFOUNT;

const NotFound = () => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Box>
          <Heading size='8'>{NOTFOUNT.title}</Heading>
          <ReactMarkdown components={{ a: Link as never, p: Box }}>
            {NOTFOUNT.contents[0]}
          </ReactMarkdown>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
