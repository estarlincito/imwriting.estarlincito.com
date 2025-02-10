import Breadcrumb from '@/components/layout/breadcrumb';
import Wrapper from '@/components/layout/wrapper';
import Image from '@/components/ui/image';
import { Heading } from '@radix-ui/themes';
import { Blog } from 'contentlayer/generated';
import React from 'react';
import Author from './author';
import Check from './check';
import Post from './post';
import Share from './share';

const PostContent: React.FC<Blog> = (props) => {
  const {
    category,
    subcategory,
    title,
    check,
    cover,
    coverAlt,
    readingTime,
    summary,
    meta,
    body,
    author,
    avathar,
    updated,
  } = props;

  return (
    <Wrapper align='start'>
      <Breadcrumb
        slug={[
          { title: category, route: meta.cat.route },
          { title: subcategory, route: meta.sub.route },
        ]}
      />

      <Heading size='8'>{title}</Heading>
      <Check check={check} readingTime={readingTime} />
      <Image src={cover} alt={coverAlt} />
      <Author author={author} avathar={avathar} updated={updated} />
      <Post doc={body.code} />
      <Share category={category} summary={summary} url={meta.post.route} />
    </Wrapper>
  );
};

export default PostContent;
