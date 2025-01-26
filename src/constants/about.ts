import SEO from '@/lib/seo';

const title = 'About Me';
const route = '/about';
const summary =
  'I’m a passionate explorer of psychology, philosophy, and technology, with a knack for delving into the nuances of software development and web design. While I’ve honed my technological skills, I believe life itself is the ultimate adventure—a bold journey filled with discovery, reflection, and growth.';

const { metadata } = new SEO({
  title,
  summary,
  route,
  img: {
    url: '/assets/avatar.jpeg',
    alt: 'Avathar',
  },
});

const content = {
  introduction: {
    greeting:
      "Hi there! Welcome to I'm wrating, a space where curiosity meets creativity!",
    bio: summary,
    mission:
      'Through this blog, I share my thoughts, reflections, and analyses on topics that fuel my curiosity. From how technology shapes our minds to philosophical musings on human connection, this is a place for meaningful discussions and deep dives into ideas that matter.',
  },
  topics: {
    description:
      'I write about a range of topics that intersect the worlds of thought and technology:',
    list: [
      {
        title: 'Psychology',
        details: 'From motivation to emotional well-being',
      },
      {
        title: 'Philosophy',
        details: 'Exploring ethics, the mind, and our digital age',
      },
      {
        title: 'Technology',
        details: 'Trends, innovations, and online privacy',
      },
      {
        title: 'Web Development',
        details: 'Insights on React, Next.js, and SEO',
      },
      {
        title: 'Creative Design',
        details: 'Marrying aesthetics with functionality',
      },
    ],
    closingNote:
      'Whether you’re here for insights on coding, reflections on the human mind, or just to explore new ideas, I hope you find something that resonates.',
  },
  closingMessage:
    'Let’s embark on this journey of thought, creativity, and innovation together.',
};

const ABOUT = { metadata, title, route, summary, content };
export default ABOUT;
