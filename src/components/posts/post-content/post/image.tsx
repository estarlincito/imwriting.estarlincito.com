import Imagen from '@/components/ui/image';
import { Box } from '@radix-ui/themes';
import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box my='5'>
      <Imagen src={src!} alt={alt!} />
    </Box>
  );
};

export default Image;
