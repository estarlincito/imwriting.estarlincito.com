//Firts add the type from './types/categories';

import Content from './types/categories';

class Doc {
  static readonly 'Philosophy' = {
    summary:
      'If you are looking for something that inspires you and helps you reflect on your life and surroundings, this is your place!',
    img: {
      url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'A collection of books on a wooden shelf.',
    },
  };

  static readonly 'Philosophy of Religion' = {
    summary:
      'This section is dedicated to exploring philosophical themes related to religion and its implications.',
    img: {
      url: 'https://images.unsplash.com/photo-1586187672953-a000e463fce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      alt: 'Silhouette of palm trees during sunset',
    },
  };

  static readonly 'Philosophy of Life and Spirituality' = {
    summary:
      'Seeks meaning, divine connection, and reflects on consciousness, morality, and harmony.',
    img: {
      url: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
      alt: 'Hanging decor in various colors',
    },
  };

  static readonly 'Finance' = {
    summary:
      'I hope you find all the information you need to make smart decisions about your finances.',
    img: {
      url: 'https://images.unsplash.com/photo-1634474588578-7f0565a1cea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'A man in a suit writing on a tablet',
    },
  };

  static readonly 'Personal Finance' = {
    summary:
      'Here you will find useful tips on how to manage your finances and achieve your financial goals.',
    img: {
      url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
      alt: 'Black Android smartphone',
    },
  };

  static readonly 'Psychology' = {
    summary:
      'Here you will find useful information on topics such as emotional well-being, personal development, and mental health.',
    img: {
      url: 'https://images.unsplash.com/photo-1586807480822-0e95ba6666ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'People forming a heart with their hands',
    },
  };

  static readonly 'Critical Psychology' = {
    summary:
      'I am very glad you made it here. I hope you find useful and valuable information about critical psychology.',
    img: {
      url: 'https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Woman in a long-sleeve black shirt using a MacBook',
    },
  };

  static readonly 'Positive Psychology' = {
    summary:
      'Here you will find information on how to live a healthier and happier life and how to make the most of your mind and body.',
    img: {
      url: 'https://images.unsplash.com/photo-1608055997373-383bebd42f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Relaxed woman holding a mobile phone',
    },
  };

  static readonly 'Personality Psychology' = {
    summary:
      'Dive into the fascinating world of human uniqueness through personality psychology.',
    img: {
      url: 'https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Client listening to a psychologist',
    },
  };

  static readonly 'Current events and psychology' = {
    summary:
      'Dive into the fascinating world of human uniqueness through current events and psychology.',
    img: {
      url: 'https://images.pexels.com/photos/7176297/pexels-photo-7176297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Client listening to a psychologist',
    },
  };

  static readonly 'Relationships' = {
    summary:
      'Tips and information on all topics related to relationships and love.',
    img: {
      url: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2338&q=80',
      alt: 'Man and woman dancing in the center of the trees',
    },
  };

  static readonly 'Couple' = {
    summary: 'Advice for couples who want to be best friends',
    img: {
      url: 'https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      alt: 'Woman riding on the man’s back',
    },
  };

  static readonly 'Technology' = {
    summary:
      'Here you will find useful information and resources about the latest trends and developments in the world of technology.',
    img: {
      url: 'https://images.unsplash.com/photo-1623425484828-7eccb29713a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80',
      alt: 'A computer mouse on a desk next to a pair of glasses',
    },
  };

  static readonly 'Smartphone' = {
    summary:
      'I am glad you decided to visit this space where you can find tips and tricks on how to troubleshoot common issues with your smartphone.',
    img: {
      url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      alt: 'White smartphone next to a laptop',
    },
  };

  static readonly 'Web Design' = {
    summary:
      'Here you will find information about web design, from basic concepts to advanced concepts.',
    img: {
      url: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Man using an Apple computer',
    },
  };

  static readonly 'Web Development' = {
    summary:
      'This section is intended to help beginner web developers improve their skills and knowledge by providing tutorials, tips, and useful resources.',
    img: {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Gray laptop turned on',
    },
  };

  static readonly 'Software Development' = {
    summary:
      'Here you will find everything related to software development, from basic principles to advanced techniques. If you have any questions, feel free to contact me.',
    img: {
      url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      alt: 'Black computer keyboard',
    },
  };

  static readonly 'Wellness' = {
    summary:
      'Discover the path to a full and balanced life in our wellness blog. We explore self-care practices, tips for a healthy mind and body, and guide you on the journey to holistic wellness.',
    img: {
      url: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Woman stretching at the top of a mountain during sunrise',
    },
  };

  static readonly 'Emotions' = {
    summary:
      'Emotions are our palette of life. Explore with us the power and depth of each feeling in this space dedicated to understanding and managing our emotions.',
    img: {
      url: 'https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'A woman looking out of a window with blinds',
    },
  };

  static readonly 'Self-Esteem' = {
    summary:
      'Discover the path to healthy and empowering self-esteem. We explore practical tips, inspiring reflections, and effective tools to strengthen your confidence and self-love.',
    img: {
      url: 'https://images.unsplash.com/photo-1559608622-d443df453289?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Woman forming a heart with both hands.',
    },
  };

  static readonly 'Culture' = {
    summary:
      'Dive into cultural richness through fresh perspectives and reflections. A vibrant journey through diversity and artistic expressions.',
    img: {
      url: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Brown and green temple on top of a mountain during the day',
    },
  };

  static readonly 'Current Affairs and Psychology' = {
    summary:
      'Exploring the fascinating intersection of current affairs and psychology: discover innovative perspectives and deep reflections to understand the constantly changing world.',
    img: {
      url: 'https://images.unsplash.com/photo-1518731429075-f91c8025641e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Photo of selective focus of a person putting their hand over the sunset.',
    },
  };

  static readonly 'Stories and Reflections' = {
    summary:
      'Stories and reflections that inspire and move. A space where stories blend with deep reflections, inviting you to discover new perspectives and personal growth.',
    img: {
      url: 'https://images.unsplash.com/photo-1506610758197-2a3e315ea0a9?q=80&w=3048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Woman in a gray knit jacket holding a cup',
    },
  };

  static readonly 'Reflections' = {
    summary:
      'Here you will find some of my reflections and lessons I have learned from life.',
    img: {
      url: 'https://cdn.pixabay.com/photo/2021/06/10/05/03/man-6325009_1280.jpg',
      alt: 'Young person reflecting',
    },
  };
}

const seo = (prop: string) => {
  const doc = Doc[prop as Content];

  if (doc === undefined) {
    throw new Error('This properties not fount on descriptions');
  }

  return doc;
};

export default seo;
