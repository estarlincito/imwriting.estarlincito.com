import css from '@/lib/css';
import { Box, Strong, Text } from '@radix-ui/themes';
import React, {
  AudioHTMLAttributes,
  DetailedHTMLProps,
  SourceHTMLAttributes,
} from 'react';

const Styled = {
  audio: css({
    borderRadius: '0.25rem',
    height: '2.5rem',
    outline: 'none',
    width: '100%',
  }),

  box: css({
    backgroundColor: 'var(--gray-4)',
    borderRadius: '0.5rem',
  }),
};

type Props = DetailedHTMLProps<
  AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
> &
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

const Audio = ({ src, type }: Props) => {
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
