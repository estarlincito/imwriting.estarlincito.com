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
  const n0 = 0;
  const n1 = 1;
  const n6 = 6;

  if (!page || isNaN(parseInt(page))) {
    return {
      data: data.slice(n0, n6),
      next: { query: `?page=2`, stop: data.length < n6 },
      prev: { query: '#', stop: true },
      start: n1,
      end: Math.min(n6, data.length),
      length,
    };
  }

  const parsedPage = parseInt(page);

  if (parsedPage <= n0) {
    notFound();
  }

  const start = (parsedPage - n1) * n6;
  const end = Math.min(start + n6, length);

  if (start >= end) {
    notFound();
  }

  return {
    data: data.slice(start, end),
    next: {
      query: `?page=${parsedPage + n1}`,
      stop: end === length,
    },
    prev: {
      query: parsedPage > n1 ? `?page=${parsedPage - n1}` : '#',
      stop: parsedPage <= n1,
    },
    start: start + n1,
    end,
    length,
  };
};

export default pagination;
