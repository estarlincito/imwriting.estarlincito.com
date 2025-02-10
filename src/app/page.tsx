import Container from '@/components/layout/container';
import Header from '@/components/layout/header';
import HOME from '@/constants/home';
import React from 'react';
import Latest from './components/latest';
import Topics from './components/topics';
import { Box } from '@radix-ui/themes';

export const { metadata } = HOME;
const { summary } = HOME;

const HomePage: React.FC = () => {
  return (
    <Container size='4'>
      <Box p={{ initial: '5', md: '0' }}>
        <Header
          title='Hey there! 👋 Welcome to Imwrating'
          summary={summary}
          mt='5'
        />
      </Box>
      <Latest />
      <Topics />
    </Container>
  );
};

export default HomePage;
