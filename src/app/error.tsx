'use client';
import Wrapper from '@/components/layout/wrapper';
import IconButton from '@/components/ui/Icon-button';
import CONTACT from '@/constants/contact';

import {
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Strong,
  Text,
} from '@radix-ui/themes';
import React from 'react';

type Props = { error: Error; reset: () => void };

const Error: React.FC<Props> = ({ error, reset }) => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Flex direction='column' gap='2'>
          <Heading size='9'>Oops!</Heading>
          <br />

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

            <Link target='_self' href={CONTACT.route}>
              <IconButton variant='ghost'>
                <Strong>{CONTACT.title}</Strong>
              </IconButton>
            </Link>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Error;
