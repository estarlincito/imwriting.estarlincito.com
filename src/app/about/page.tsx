import { Heading, Text } from '@radix-ui/themes';
import React from 'react';

import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import Wrapper from '@/components/layout/wrapper';
import Topics from '@/components/topics';
import ABOUT from '@/constants/about';

export const { metadata } = ABOUT;

const Mission = Text;
const Bio = Text;

const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Header
          title={ABOUT.title}
          description={ABOUT.description}
          slug={[{ route: ABOUT.path, title: ABOUT.title }]}
        />
        <Heading size='4'>{ABOUT.content.introduction.greeting}</Heading>
        <Bio>{ABOUT.content.introduction.bio}</Bio>
        <Mission>{ABOUT.content.introduction.mission}</Mission>
        <Topics {...ABOUT.content.topics} />
        <Text>{ABOUT.content.closingMessage}</Text>
      </Wrapper>
    </Container>
  );
};

export default Page;
