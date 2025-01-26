import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';

const dateFormat = (publishedAt: string): string => {
  return format(parseISO(publishedAt), 'MMM dd, yyyy', {
    locale: enUS,
  });
};

export default dateFormat;
