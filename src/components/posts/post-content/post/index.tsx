import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import A from './a';
import Audio from './audio';
import Blockquote from './blockquote';
import Code from './code';
import Contents from './contents';
import Empty from './empty';
import H2 from './h2';
import Image from './image';
import Ol from './ol';
import Strong from './strong';

const mdxComponents = {
  Introduction: Empty,
  Contents,
  Image,
  Audio,
  h2: H2,
  a: A,
  strong: Strong,
  blockquote: Blockquote,
  code: Code,
  ol: Ol,
};

interface Props {
  doc: string;
}

const Post: React.FC<Props> = ({ doc }) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent components={mdxComponents} />;
};
export default Post;
