/* eslint-disable no-undef */
type Body = globalThis.BodyInit | null | undefined;

interface RequestConfig {
  url: URL | string;
  /**
   * Example: JSON.stringify({
      'first-name': 'Estarlin'
    }),
   */
  body?: Body;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
}
type Props = (props: RequestConfig) => Promise<{ data: unknown }>;

const apiFetch: Props = async ({ url, body, method }) => {
  const init = {
    method,
    body:
      body && (new URLSearchParams(JSON.stringify(body)).toString() as Body),
    headers: {
      Accept: '*/*',
      'User-Agent': 'Estarlincito (https://www.estarlincito.com)',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const rest = await fetch(url, init);
  const data = (await rest.json()) as unknown;

  return { data };
};

export default apiFetch;
