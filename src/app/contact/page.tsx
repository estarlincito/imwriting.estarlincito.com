import Container from '@/components/layout/container';
import Wrapper from '@/components/layout/wrapper';
import CONTACT from '@/constants/contact';
import React from 'react';
import Contactform from './form';

export const { metadata } = CONTACT;

const ContactPage: React.FC = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <Contactform />
      </Wrapper>
    </Container>
  );
};

export default ContactPage;
