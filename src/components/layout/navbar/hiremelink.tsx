import IconButton from '@/components/ui/Icon-button';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Link } from '@radix-ui/themes';
import React from 'react';

const HireMeLink: React.FC = () => {
  return (
    <Link href='/contact' target='_self'>
      <IconButton variant='soft'>
        <ChatBubbleIcon width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default HireMeLink;
