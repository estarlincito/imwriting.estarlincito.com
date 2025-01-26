import { Blockquote as Blockquoter } from '@radix-ui/themes';
import React, { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;
const Blockquote: React.FC<Props> = ({ children }) => {
  return <Blockquoter my='5'>{children} </Blockquoter>;
};

export default Blockquote;
