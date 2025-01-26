'use client';
import Form from '@/components/form';
import Header from '@/components/layout//header';
import CONTACT from '@/constants/contact';
import { Box, Flex } from '@radix-ui/themes';
import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import contact from './action';

const Contactform: React.FC = () => {
  const [state, action] = useActionState(contact, undefined);
  const { title, route, summary } = CONTACT;

  useEffect(() => {
    if (state?.message === 'Invalid email or password') {
      toast.error(state?.message);
    }
  }, [action, state?.message]);

  return (
    <Form action={action}>
      <Header
        title='Get in touch'
        summary={summary}
        slug={[{ title, route }]}
        mb='5'
      />

      <Flex
        justify='between'
        gapX='2'
        direction={{ initial: 'column', md: 'row' }}
      >
        <Box minWidth='270px'>
          <Form.Field required name='first-name' />
        </Box>
        <Box minWidth='270px'>
          <Form.Field required name='last-name' />
        </Box>
      </Flex>

      <Form.Field name='company' />
      <Form.Field required name='phone-number' />
      <Form.Field required name='email' />
      <Form.Field required name='message' />
      <Form.Button label='Send message' />
    </Form>
  );
};

export default Contactform;
