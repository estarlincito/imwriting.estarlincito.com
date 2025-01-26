import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import Wrapper from '@/components/layout/wrapper';
import Topics from '@/components/topics';
import ABOUT from '@/constants/about';
import { Heading, Text } from '@radix-ui/themes';
import React from 'react';

export const { metadata } = ABOUT;
const { title, route, summary, content } = ABOUT;

const Mission = Text;
const Bio = Text;

const AboutPage: React.FC = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Header title={title} summary={summary} slug={[{ title, route }]} />
        <Heading size='4'>{content.introduction.greeting}</Heading>
        <Bio>{content.introduction.bio}</Bio>
        <Mission>{content.introduction.mission}</Mission>
        <Topics {...content.topics} />
        <Text>{content.closingMessage}</Text>
      </Wrapper>
    </Container>
  );
};

export default AboutPage;
