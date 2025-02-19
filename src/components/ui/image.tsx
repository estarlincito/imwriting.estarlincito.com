/* eslint-disable @next/next/no-img-element */
import css from '@/lib/css';
import { AspectRatio } from '@radix-ui/themes';
import React from 'react';

const Styled = {
  img: css({
    borderRadius: 'var(--radius-2)',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  }),
};

interface Props {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: Props) => {
  return (
    <AspectRatio ratio={16 / 10}>
      <img src={src} alt={alt} style={Styled.img} />
    </AspectRatio>
  );
};

export default Image;
