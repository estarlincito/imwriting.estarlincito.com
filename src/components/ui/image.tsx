/* eslint-disable @next/next/no-img-element */
import css from '@/lib/css';
import { AspectRatio } from '@radix-ui/themes';
import React from 'react';

const Styled = {
  img: css({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 'var(--radius-2)',
  }),
};

interface Props {
  src: string;
  alt: string;
}
const Image: React.FC<Props> = ({ src, alt }) => {
  const n10 = 10;
  const n16 = 16;

  return (
    <AspectRatio ratio={n16 / n10}>
      <img src={src} alt={alt} style={Styled.img} />
    </AspectRatio>
  );
};

export default Image;
