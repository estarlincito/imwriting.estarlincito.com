'use client';
import IconButton from '@/components/ui/Icon-button';
import clipboard from '@/lib/clipboard';
import { Link1Icon } from '@radix-ui/react-icons';
import React from 'react';

interface Props {
  url: string;
}

const URL: React.FC<Props> = ({ url }) => {
  const onClick = () => {
    void clipboard(url, 'URL has been copied to clipboard!');
  };

  return (
    <IconButton variant='soft' onClick={onClick}>
      <Link1Icon height='16px' width='16px' />
    </IconButton>
  );
};

export default URL;
