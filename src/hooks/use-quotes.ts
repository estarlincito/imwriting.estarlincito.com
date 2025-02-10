'use client';
import apiFetch from '@/lib/apiFetch';
import handleError from '@/lib/handle-error';
import Quote from '@/types/quote';
import { useEffect, useState } from 'react';

type Return = {
  quote: Quote;
  random: Quote;
  quotes: Quote[];
};

const useQuotes = (): Return => {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [quote, setQuote] = useState({} as Quote);
  const [random, setRandom] = useState({} as Quote);

  useEffect(() => {
    const url =
      'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_en.json';

    apiFetch({ url, method: 'GET' })
      .then((response) => response.data as Quote[])
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

  return { quote, random, quotes };
};

export default useQuotes;
