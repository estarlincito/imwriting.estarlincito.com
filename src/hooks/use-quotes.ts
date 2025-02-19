'use client';

import Quote from '@/types/quote';
import { apiFetch, handleError } from '@estarlincito/utils';
import { useEffect, useState } from 'react';

const useQuotes = () => {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [quote, setQuote] = useState({} as Quote);
  const [random, setRandom] = useState({} as Quote);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json';

    apiFetch({ method: 'GET', url })
      .then((response) => response.json())
      .then((data: Quote[]) => {
        setQuotes(data);

        //Random Quote
        const random_index = Math.floor(Math.random() * data.length);
        const _random = data[random_index];
        setRandom(_random);

        //Last Quote
        const last = data[data.length - 1];

        //Mon, Wed, Fri, and Sun will show the last quote;
        // other days will be random
        const date = new Date();
        const day = date.getDay();
        const item = [1, 3, 5, 7].includes(day) ? last : _random;
        setQuote(item);
      })
      .catch(() => handleError('Error fetching quotes:'));
  }, []);

  return { quote, quotes, random };
};

export default useQuotes;
