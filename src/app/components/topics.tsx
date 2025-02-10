import TOPICS from '@/constants/topics';
import { Badge, Heading, Link, Section } from '@radix-ui/themes';
import React from 'react';

const Topics: React.FC = () => {
  return (
    <Section p={{ initial: '5', md: '0' }}>
      <Heading align='center' my='2'>
        Topics
      </Heading>

      {TOPICS.alllinks.map(({ route, label }, id) => (
        <Badge color='gray' key={id} mr='1'>
          <Link underline='none' href={route}>
            {label}
          </Link>
        </Badge>
      ))}
    </Section>
  );
};

export default Topics;
