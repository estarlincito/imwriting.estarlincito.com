export type Name =
  | 'first-name'
  | 'last-name'
  | 'company'
  | 'phone-number'
  | 'email'
  | 'password'
  | 'message'
  | 'username';

type Type =
  | 'number'
  | 'email'
  | 'password'
  | 'text'
  | 'tel'
  | 'hidden'
  | 'search'
  | 'time'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'week'
  | undefined;

export const options = (
  name: Name
): {
  placeholder?: string;
  textarea?: boolean;
  type: Type;
  maxLength: number;
  minLength: number;
  _name: string;
} => {
  const _name = name
    .replace(name[0], name[0].toLocaleUpperCase())
    .replace('-', ' ');

  switch (name) {
    case 'first-name':
      return {
        placeholder: 'Estarlin',
        type: 'text' as Type,
        maxLength: 30,
        minLength: 1,
        _name,
      };

    case 'last-name':
      return {
        placeholder: 'R',
        type: 'text' as Type,
        maxLength: 30,
        minLength: 1,
        _name,
      };

    case 'company':
      return {
        placeholder: 'Imwriting',
        type: 'text' as Type,
        maxLength: 30,
        minLength: 2,
        _name,
      };

    case 'phone-number':
      return {
        placeholder: '123-456-7890',
        type: 'tel' as Type,
        maxLength: 12,
        minLength: 10,
        _name,
      };

    case 'email':
      return {
        placeholder: 'name@domain.com',
        type: 'email' as Type,
        maxLength: 30,
        minLength: 5,
        _name,
      };

    case 'password':
      return {
        placeholder: '4ppl3-1Ph0ne',
        type: 'password' as Type,
        maxLength: 30,
        minLength: 8,
        _name,
      };

    case 'message':
      return {
        placeholder: 'Enter your message here…',
        textarea: true,
        type: 'text' as Type,
        maxLength: 1000,
        minLength: 1,
        _name,
      };

    case 'username':
      return {
        placeholder: 'estarlincito',
        type: 'text' as Type,
        maxLength: 20,
        minLength: 5,
        _name,
      };

    default:
      throw new Error(`Unhandled name: ${name as Name}`);
  }
};
