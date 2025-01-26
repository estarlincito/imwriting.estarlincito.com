import React, { DetailedHTMLProps, OlHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

const Ol: React.FC<Props> = ({ children }) => {
  return <ol>{children}</ol>;
};

export default Ol;
