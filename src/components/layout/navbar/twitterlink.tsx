import IconButton from '@/components/ui/Icon-button';
import HIREME from '@/constants/hireme';
import { Link } from '@radix-ui/themes';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

const TwitterLink: React.FC = () => {
  return (
    <Link href={HIREME.x.route} target='_blank'>
      <IconButton variant='soft'>
        <FaXTwitter width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default TwitterLink;
