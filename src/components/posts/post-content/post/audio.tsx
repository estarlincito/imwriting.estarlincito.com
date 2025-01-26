import css from '@/lib/css';
import { Box, Strong, Text } from '@radix-ui/themes';
import React, {
  AudioHTMLAttributes,
  DetailedHTMLProps,
  SourceHTMLAttributes,
} from 'react';

const Styled = {
  box: css({
    borderRadius: '0.5rem',
    backgroundColor: 'var(--gray-4)',
  }),

  audio: css({
    width: '100%',
    height: '2.5rem',
    borderRadius: '0.25rem',
    outline: 'none',
  }),
};

type Props = DetailedHTMLProps<
  AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
> &
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

const Audio: React.FC<Props> = ({ src, type }) => {
  return (
    <Box p='3' style={Styled.box}>
      <Text as='p' size='5' my='2'>
        <Strong>Listen to article</Strong>
      </Text>

      <audio controls style={Styled.audio}>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};

export default Audio;
