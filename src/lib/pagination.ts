import { LinkType, PageType } from '@/types/pagination';
import { notFound } from 'next/navigation';

type Return<T> = {
  data: T[];
  next: LinkType;
  prev: LinkType;
  length: number;
  start: number;
  end: number;
};

type Pagination = <T>(page: PageType, data: T[]) => Return<T>;

const pagination: Pagination = (page, data) => {
  const length = data.length;

  if (!page || isNaN(parseInt(page))) {
    return {
      data: data.slice(0, 6),
      next: { query: `?page=2`, stop: data.length < 6 },
      prev: { query: '#', stop: true },
      start: 1,
      end: Math.min(6, data.length),
      length,
    };
  }

  const parsedPage = parseInt(page);

  if (parsedPage <= 0) {
    notFound();
  }

  const start = (parsedPage - 1) * 6;
  const end = Math.min(start + 6, length);

  if (start >= end) {
    notFound();
  }

  return {
    data: data.slice(start, end),
    next: {
      query: `?page=${parsedPage + 1}`,
      stop: end === length,
    },
    prev: {
      query: parsedPage > 1 ? `?page=${parsedPage - 1}` : '#',
      stop: parsedPage <= 1,
    },
    start: start + 1,
    end,
    length,
  };
};

export default pagination;
