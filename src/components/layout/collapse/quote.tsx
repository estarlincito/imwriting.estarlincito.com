'use client';
import useQuotes from '@/hooks/use-quotes';
import { Blockquote, Em } from '@radix-ui/themes';
import React from 'react';

const Quote: React.FC = () => {
  const { random } = useQuotes();

  return (
    <Blockquote>
      <Em>{random.quote}</Em>
    </Blockquote>
  );
};

export default Quote;
