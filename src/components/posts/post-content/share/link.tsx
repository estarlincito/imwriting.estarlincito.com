import HOME from '@/constants/home';
import { IconButton, Link as LinkRadix } from '@radix-ui/themes';
import React from 'react';

interface LinlkProps {
  summary: string;
  url: string;
  tag: string;
  host: string;
  IconType: React.ReactNode;
}

const ShareLink: React.FC<LinlkProps> = ({
  host,
  summary,
  url,
  tag,
  IconType,
}) => {
  const line_break = '%0A';
  const href = `${host}${summary}${line_break}${line_break}Tag: ${tag.toLowerCase()}${line_break}${line_break}${
    HOME.production
  }${url}`;

  return (
    <LinkRadix href={href} target='_blank'>
      <IconButton variant='soft'>{IconType}</IconButton>
    </LinkRadix>
  );
};

export default ShareLink;
