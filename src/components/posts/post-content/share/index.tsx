import HOME from '@/constants/home';
import { Box, Flex, Heading } from '@radix-ui/themes';
import React from 'react';
import { FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import ShareLink from './link';
import URL from './url';

interface Props {
  summary: string;
  url: string;
  category: string;
}

const Share: React.FC<Props> = ({ category, summary, url }) => {
  return (
    <Box>
      <Heading my='4' size='6'>
        Share to:
      </Heading>

      <Flex gap='3'>
        <ShareLink
          host='whatsapp://send?text='
          url={url}
          summary={summary}
          tag={category}
          IconType={<FaWhatsapp />}
        />

        <ShareLink
          host='https://twitter.com/intent/tweet?text='
          url={url}
          summary={summary}
          tag={category}
          IconType={<FaXTwitter />}
        />

        <ShareLink
          host='https://threads.net/intent/post?text='
          url={url}
          summary={summary}
          tag={category}
          IconType={<FaThreads />}
        />

        <URL url={`${HOME.production}${url}`} />
      </Flex>
    </Box>
  );
};

export default Share;
