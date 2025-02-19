'use client';

import Wrapper from '@/components/layout/wrapper';

import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Strong,
  Text,
} from '@radix-ui/themes';
import React from 'react';

type Props = { error: Error; reset: () => void };

const Error = ({ error, reset }: Props) => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Flex direction='column' gap='2'>
          <Heading size='9' mb='2'>
            Oops!
          </Heading>

          <Heading size='5'>{error.message}</Heading>

          <Text>
            Please try again or if the problem persists, feel free to contact
            support for assistance. We apologize for the inconvenience.
          </Text>

          <Flex justify='between' width='9.375rem' mt='2'>
            <Button
              variant='ghost'
              onClick={reset}
              size='3'
              className='--cursor-button'
            >
              <Strong>Try again</Strong>
            </Button>

            <Link target='_self' href='https://estarlincito.com/contact'>
              <IconButton variant='ghost'>
                <Strong>Contact</Strong>
              </IconButton>
            </Link>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Error;
