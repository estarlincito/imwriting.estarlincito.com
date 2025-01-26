import { Blockquote, Box, Heading, Separator } from '@radix-ui/themes';
import { Responsive, Union } from '@radix-ui/themes/dist/cjs/props/prop-def';
import React from 'react';
import Breadcrumb from './breadcrumb';

type M =
  | Responsive<
      Union<
        string,
        | '0'
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '-1'
        | '-2'
        | '-3'
        | '-4'
        | '-5'
        | '-6'
        | '-7'
        | '-8'
        | '-9'
      >
    >
  | undefined;

interface Props {
  title: string;
  summary: string;
  slug?: { title: string; route: string }[];
  m?: M;
  mb?: M;
  mt?: M;
  mx?: M;
  my?: M;
}

const Header: React.FC<Props> = ({
  title,
  summary,
  slug,
  m,
  mb,
  mt,
  mx,
  my,
}) => {
  return (
    <Box
      minWidth='18.75rem'
      m={m && m}
      mt={mt && mt}
      mb={mb && mb}
      mx={mx && mx}
      my={my && my}
    >
      {slug !== undefined && slug.length > 0 && <Breadcrumb slug={[...slug]} />}
      <Heading my='2' size='7'>
        {title}
      </Heading>
      <Blockquote my='2'>{summary}</Blockquote>
      <Separator orientation='horizontal' size='4' mt='2' />
    </Box>
  );
};

export default Header;
