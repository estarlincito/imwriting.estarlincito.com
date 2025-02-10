import handleError from '@/lib/handle-error';
import { Link } from '@radix-ui/themes';
import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const A: React.FC<Props> = ({ children, href }) => {
  const target = href!.startsWith('/');
  if (href!.includes('http://')) {
    handleError("You have 'http://' please change to 'https://'");
  }

  return (
    <Link href={href && href} target={target ? '_self' : '_blank'}>
      {children}
    </Link>
  );
};

export default A;
